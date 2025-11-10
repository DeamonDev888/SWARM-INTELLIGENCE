#!/usr/bin/env python3
# 🎮 Gestionnaire de Swarm d'Agents - Cross Platform (Windows/Linux/Mac)
# Compatible Python 3.7+

import json
import subprocess
import time
import argparse
import os
import sys
import threading
from datetime import datetime
from typing import List, Dict, Optional
import platform

class Colors:
    """ANSI color codes for terminal output"""
    if platform.system() == 'Windows':
        import ctypes
        kernel32 = ctypes.windll.kernel32
        kernel32.SetConsoleMode(kernel32.GetStdHandle(-11), 7)

    HEADER = '\033[95m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

class SwarmManager:
    def __init__(self, config_file: str):
        self.config_file = config_file
        self.config = self._load_config()
        self.agents = self.config.get('agents', [])
        self.logs = []
        self.monitoring_active = False

    def _load_config(self) -> Dict:
        """Load configuration from JSON file"""
        try:
            with open(self.config_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except FileNotFoundError:
            print(f"{Colors.FAIL}❌ Fichier de configuration '{self.config_file}' non trouvé!{Colors.ENDC}")
            print(f"{Colors.WARNING}💡 Utilisez --create-config pour générer un fichier par défaut{Colors.ENDC}")
            sys.exit(1)
        except json.JSONDecodeError as e:
            print(f"{Colors.FAIL}❌ Erreur de format JSON: {e}{Colors.ENDC}")
            sys.exit(1)

    def create_default_config(self, output_file: str = "claude-agents.json"):
        """Create a default configuration file"""
        default_config = {
            "swarm_metadata": {
                "name": "Default Swarm 2025",
                "version": "1.0",
                "description": "Swarm d'agents par défaut",
                "created": datetime.now().strftime("%Y-%m-%d"),
                "tags": ["default", "multi-agent"]
            },
            "orchestration": {
                "mode": "parallel",
                "max_concurrent": 10,
                "load_balancing": "round-robin",
                "health_check_interval": 30,
                "auto_scaling": {
                    "enabled": False,
                    "min_agents": 3,
                    "max_agents": 20,
                    "scale_up_threshold": 0.8,
                    "scale_down_threshold": 0.3
                }
            },
            "agents": [
                {
                    "id": "frontend-guru",
                    "enabled": True,
                    "priority": "high",
                    "name": "Frontend Master",
                    "role": "React/Vue/Angular Expert",
                    "resources": {
                        "cpu": "2 cores",
                        "memory": "4GB",
                        "timeout": 300
                    }
                },
                {
                    "id": "backend-architect",
                    "enabled": True,
                    "priority": "high",
                    "name": "Backend Architect",
                    "role": "API/Database Expert",
                    "resources": {
                        "cpu": "2 cores",
                        "memory": "4GB",
                        "timeout": 300
                    }
                },
                {
                    "id": "security-guardian",
                    "enabled": True,
                    "priority": "critical",
                    "name": "Security Guardian",
                    "role": "Cybersecurity Expert",
                    "resources": {
                        "cpu": "1 core",
                        "memory": "2GB",
                        "timeout": 180
                    }
                },
                {
                    "id": "devops-commander",
                    "enabled": True,
                    "priority": "medium",
                    "name": "DevOps Commander",
                    "role": "CI/CD & Infrastructure",
                    "resources": {
                        "cpu": "1 core",
                        "memory": "2GB",
                        "timeout": 240
                    }
                },
                {
                    "id": "testing-expert",
                    "enabled": True,
                    "priority": "medium",
                    "name": "Testing Expert",
                    "role": "QA & Testing",
                    "resources": {
                        "cpu": "1 core",
                        "memory": "2GB",
                        "timeout": 300
                    }
                }
            ],
            "monitoring": {
                "metrics": {
                    "enabled": True,
                    "interval": 15,
                    "retention": "7d"
                },
                "alerts": {
                    "enabled": True,
                    "channels": ["console"],
                    "thresholds": {
                        "cpu_usage": 80,
                        "memory_usage": 85,
                        "error_rate": 5
                    }
                }
            }
        }

        try:
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump(default_config, f, indent=2, ensure_ascii=False)
            print(f"{Colors.GREEN}✅ Fichier de configuration créé: {output_file}{Colors.ENDC}")
        except Exception as e:
            print(f"{Colors.FAIL}❌ Erreur lors de la création du fichier: {e}{Colors.ENDC}")

    def launch_agent(self, agent_id: str, mode: str = "async") -> Dict:
        """Launch a specific agent"""
        agent_config = next((a for a in self.agents if a['id'] == agent_id), None)
        if not agent_config:
            return {"status": "error", "message": f"Agent {agent_id} not found"}

        if not agent_config.get('enabled', True):
            return {"status": "skipped", "message": f"Agent {agent_id} is disabled"}

        print(f"{Colors.CYAN}🚀 Lancement de l'agent: {agent_config.get('name', agent_id)}{Colors.ENDC}")

        # Construire la commande Claude
        cmd = [
            "claude",
            "--agent", agent_id,
            "--mode", mode,
            "--config", self.config_file
        ]

        try:
            # Ajouter des options spécifiques selon la priorité
            if agent_config.get('priority') == 'critical':
                cmd.extend(["--priority", "high"])

            # Lancer la commande
            if mode == "async":
                process = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
                return {
                    "agent": agent_id,
                    "status": "launched",
                    "process_id": process.pid,
                    "command": " ".join(cmd)
                }
            else:
                result = subprocess.run(cmd, capture_output=True, text=True, timeout=agent_config.get('resources', {}).get('timeout', 300))
                return {
                    "agent": agent_id,
                    "status": "success" if result.returncode == 0 else "error",
                    "output": result.stdout,
                    "error": result.stderr,
                    "return_code": result.returncode
                }
        except subprocess.TimeoutExpired:
            return {
                "agent": agent_id,
                "status": "timeout",
                "message": f"Agent {agent_id} timed out"
            }
        except Exception as e:
            return {
                "agent": agent_id,
                "status": "error",
                "message": f"Error launching agent {agent_id}: {str(e)}"
            }

    def launch_swarm(self, mode: str = "parallel", max_concurrent: Optional[int] = None) -> List[Dict]:
        """Launch the entire swarm"""
        enabled_agents = [a for a in self.agents if a.get('enabled', True)]

        print(f"{Colors.HEADER}🚀 Lancement du Swarm: {len(enabled_agents)} agents activés{Colors.ENDC}")
        print(f"{Colors.BLUE}📋 Mode: {mode}{Colors.ENDC}")
        if max_concurrent:
            print(f"{Colors.BLUE}⚡ Concurrence max: {max_concurrent}{Colors.ENDC}")

        if mode == "parallel":
            return self._launch_parallel(max_concurrent)
        elif mode == "sequential":
            return self._launch_sequential()
        elif mode == "hybrid":
            return self._launch_hybrid()
        else:
            print(f"{Colors.FAIL}❌ Mode '{mode}' non reconnu{Colors.ENDC}")
            return []

    def _launch_parallel(self, max_concurrent: Optional[int] = None) -> List[Dict]:
        """Parallel launch with concurrent execution"""
        import concurrent.futures

        max_workers = max_concurrent or len(self.agents)
        results = []

        print(f"{Colors.GREEN}🔄 Lancement en parallèle ({max_workers} workers){Colors.ENDC}")

        with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
            future_to_agent = {
                executor.submit(self.launch_agent, a['id'], "async"): a
                for a in self.agents if a.get('enabled', True)
            }

            for future in concurrent.futures.as_completed(future_to_agent):
                result = future.result()
                results.append(result)
                status_icon = "✅" if result["status"] == "launched" else "❌"
                print(f"{status_icon} {result['agent']}: {result['status']}")

        return results

    def _launch_sequential(self) -> List[Dict]:
        """Sequential launch"""
        results = []
        print(f"{Colors.YELLOW}🔄 Lancement séquentiel{Colors.ENDC}")

        for agent in self.agents:
            if agent.get('enabled', True):
                print(f"⏳ Traitement: {agent['id']}")
                result = self.launch_agent(agent['id'], "sync")
                results.append(result)
                time.sleep(1)  # Délai entre agents

        return results

    def _launch_hybrid(self) -> List[Dict]:
        """Hybrid launch: critical agents first, then others"""
        critical = [a for a in self.agents if a.get('priority') == 'critical' and a.get('enabled', True)]
        normal = [a for a in self.agents if a.get('priority') != 'critical' and a.get('enabled', True)]

        print(f"{Colors.MAGENTA}🎯 Lancement hybride: {len(critical)} critiques + {len(normal)} normaux{Colors.ENDC}")

        # Phase 1: Critical agents in parallel
        print(f"{Colors.WARNING}🔒 Phase 1: Agents critiques{Colors.ENDC}")
        critical_results = self._launch_custom_parallel(critical, max_concurrent=len(critical))

        # Phase 2: Normal agents
        print(f"{Colors.BLUE}🔄 Phase 2: Agents standards{Colors.ENDC}")
        normal_results = self._launch_sequential_filtered(normal)

        return critical_results + normal_results

    def _launch_custom_parallel(self, agents_list: List[Dict], max_concurrent: int) -> List[Dict]:
        """Custom parallel launch for specific agent list"""
        import concurrent.futures

        results = []
        with concurrent.futures.ThreadPoolExecutor(max_workers=max_concurrent) as executor:
            future_to_agent = {
                executor.submit(self.launch_agent, a['id'], "async"): a
                for a in agents_list
            }

            for future in concurrent.futures.as_completed(future_to_agent):
                result = future.result()
                results.append(result)

        return results

    def _launch_sequential_filtered(self, agents_list: List[Dict]) -> List[Dict]:
        """Sequential launch for filtered agent list"""
        results = []
        for agent in agents_list:
            print(f"⏳ Traitement: {agent['id']}")
            result = self.launch_agent(agent['id'], "sync")
            results.append(result)
            time.sleep(1)
        return results

    def monitor_swarm(self, interval: int = 30, duration: int = 300):
        """Monitor swarm status"""
        print(f"{Colors.CYAN}👁️ Monitoring du swarm pendant {duration}s (intervalle: {interval}s){Colors.ENDC}")

        self.monitoring_active = True
        start_time = time.time()

        def monitor_loop():
            while self.monitoring_active and (time.time() - start_time) < duration:
                status = self.get_swarm_status()
                timestamp = datetime.now().strftime("%H:%M:%S")
                print(f"{Colors.BLUE}⏰ {timestamp} - Agents actifs: {status['active']}/{status['total']} ({status['status']}){Colors.ENDC}")
                time.sleep(interval)

        # Lancer le monitoring dans un thread séparé
        monitor_thread = threading.Thread(target=monitor_loop)
        monitor_thread.daemon = True
        monitor_thread.start()

        try:
            monitor_thread.join()
        except KeyboardInterrupt:
            print(f"\n{Colors.WARNING}⏹️ Monitoring arrêté par l'utilisateur{Colors.ENDC}")
            self.monitoring_active = False

    def get_swarm_status(self) -> Dict:
        """Get current swarm status"""
        enabled_count = len([a for a in self.agents if a.get('enabled', True)])
        return {
            "total": len(self.agents),
            "active": enabled_count,
            "status": "healthy" if enabled_count > 0 else "inactive",
            "config_file": self.config_file,
            "last_check": datetime.now().isoformat()
        }

    def list_agents(self):
        """List all configured agents"""
        print(f"{Colors.HEADER}📋 Agents configurés ({len(self.agents)} total){Colors.ENDC}")
        print("-" * 60)

        for agent in self.agents:
            enabled_icon = "✅" if agent.get('enabled', True) else "❌"
            priority_color = {
                'critical': Colors.FAIL,
                'high': Colors.WARNING,
                'medium': Colors.BLUE,
                'low': Colors.CYAN
            }.get(agent.get('priority', 'medium'), Colors.ENDC)

            print(f"{enabled_icon} {agent.get('id', 'Unknown')} - {agent.get('name', 'No Name')}")
            print(f"   🎭 Rôle: {agent.get('role', 'No role')}")
            print(f"   🎯 Priorité: {priority_color}{agent.get('priority', 'medium')}{Colors.ENDC}")

            resources = agent.get('resources', {})
            if resources:
                print(f"   💻 Ressources: CPU {resources.get('cpu', 'N/A')}, RAM {resources.get('memory', 'N/A')}, Timeout {resources.get('timeout', 'N/A')}s")
            print()

    def stop_swarm(self):
        """Stop all running agents"""
        print(f"{Colors.WARNING}🛑 Arrêt du swarm...{Colors.ENDC}")

        # Cette fonction dépend de l'implémentation de Claude Code
        # pour l'arrêt des agents
        try:
            result = subprocess.run([
                "claude", "--agents", f"@{self.config_file}", "--stop"
            ], capture_output=True, text=True)

            if result.returncode == 0:
                print(f"{Colors.GREEN}✅ Swarm arrêté avec succès{Colors.ENDC}")
            else:
                print(f"{Colors.FAIL}❌ Erreur lors de l'arrêt: {result.stderr}{Colors.ENDC}")
        except Exception as e:
            print(f"{Colors.FAIL}❌ Impossible d'arrêter le swarm: {e}{Colors.ENDC}")

def main():
    parser = argparse.ArgumentParser(
        description="🎮 Swarm Manager - Gestionnaire Multi-Agents Cross-Platform",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Exemples:
  python manage-swarm.py claude-agents.json --mode parallel
  python manage-swarm.py claude-agents.json --agent frontend-guru
  python manage-swarm.py claude-agents.json --monitor --interval 15
  python manage-swarm.py --create-config mon-swarm.json
        """
    )

    parser.add_argument("config", nargs="?", help="Fichier de configuration JSON")
    parser.add_argument("--mode", choices=["parallel", "sequential", "hybrid"],
                       default="parallel", help="Mode de lancement")
    parser.add_argument("--monitor", action="store_true", help="Activer le monitoring")
    parser.add_argument("--interval", type=int, default=30,
                       help="Intervalle de monitoring en secondes")
    parser.add_argument("--duration", type=int, default=300,
                       help="Durée du monitoring en secondes")
    parser.add_argument("--agent", help="Lancer un agent spécifique")
    parser.add_argument("--max-concurrent", type=int,
                       help="Nombre max d'agents simultanés")
    parser.add_argument("--list", action="store_true", help="Lister les agents")
    parser.add_argument("--stop", action="store_true", help="Arrêter le swarm")
    parser.add_argument("--create-config", help="Créer un fichier de configuration par défaut")

    args = parser.parse_args()

    # Création de configuration
    if args.create_config:
        manager = SwarmManager("dummy.json")  # Dummy instance
        manager.create_default_config(args.create_config)
        return

    # Vérification du fichier de configuration
    if not args.config:
        print(f"{Colors.FAIL}❌ Veuillez spécifier un fichier de configuration{Colors.ENDC}")
        parser.print_help()
        sys.exit(1)

    if not os.path.exists(args.config):
        print(f"{Colors.FAIL}❌ Fichier '{args.config}' non trouvé{Colors.ENDC}")
        print(f"{Colors.WARNING}💡 Utilisez --create-config pour créer un fichier par défaut{Colors.ENDC}")
        sys.exit(1)

    manager = SwarmManager(args.config)

    # Listing des agents
    if args.list:
        manager.list_agents()
        return

    # Arrêt du swarm
    if args.stop:
        manager.stop_swarm()
        return

    # Lancement d'un agent spécifique
    if args.agent:
        result = manager.launch_agent(args.agent)
        print(json.dumps(result, indent=2, ensure_ascii=False))
        return

    # Lancement du swarm complet
    print(f"{Colors.HEADER}🚀 Swarm Manager - Lancement du swarm{Colors.ENDC}")
    print(f"{Colors.CYAN}Configuration: {args.config}{Colors.ENDC}")
    print(f"{Colors.BLUE}Mode: {args.mode}{Colors.ENDC}")
    print()

    results = manager.launch_swarm(args.mode, args.max_concurrent)

    print()
    print(f"{Colors.GREEN}✅ {len(results)} agents traités{Colors.ENDC}")

    # Résumé des résultats
    success_count = len([r for r in results if r.get('status') in ['launched', 'success']])
    error_count = len([r for r in results if r.get('status') == 'error'])

    print(f"{Colors.CYAN}📊 Résumé:{Colors.ENDC}")
    print(f"   ✅ Succès: {success_count}")
    print(f"   ❌ Erreurs: {error_count}")

    if error_count > 0:
        print(f"\n{Colors.WARNING}⚠️ Erreurs détectées:{Colors.ENDC}")
        for result in results:
            if result.get('status') == 'error':
                print(f"   ❌ {result.get('agent', 'Unknown')}: {result.get('message', 'Unknown error')}")

    # Monitoring si demandé
    if args.monitor:
        print()
        manager.monitor_swarm(args.interval, args.duration)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print(f"\n{Colors.WARNING}⏹️ Programme arrêté par l'utilisateur{Colors.ENDC}")
    except Exception as e:
        print(f"{Colors.FAIL}❌ Erreur inattendue: {e}{Colors.ENDC}")
        sys.exit(1)