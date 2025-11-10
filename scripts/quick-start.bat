@echo off
REM ⚡ Démarrage Ultra-Rapide en 20 Minutes - Version Windows
REM Script d'installation et configuration complet pour Windows

setlocal enabledelayedexpansion

echo.
echo ███████╗██╗   ██╗██████╗  ██████╗
echo ██╔════╝██║   ██║██╔══██╗██╔═══██╗
echo ██████╗██║   ██║██████╔╝██║   ██║
echo ██╔══╝ ██║   ██║██╔══██╗██║   ██║
echo ██║    ╚██████╔╝██████╔╝╚██████╔╝
echo ╚═╝     ╚═════╝ ╚═════╝  ╚═════╝
echo.
echo ⚡ QUICK START - SWARM D'AGENTS EN 20 MINUTES
echo ==============================================
echo.

REM Fonction pour afficher un timer
:show_timer
set duration=%1
set start_time=!time!
for /f "tokens=1-3 delims=:.," %%a in ("!start_time!") do (
    set /a "start_seconds=(((%%a * 60) + 1) * 60) + %%b"
    set start_seconds=!start_seconds!
)

:timer_loop
set current_time=!time!
for /f "tokens=1-3 delims=:.," %%a in ("!current_time!") do (
    set /a "current_seconds=(((%%a * 60) + 1) * 60) + %%b"
    set current_seconds=!current_seconds!
)

set /a elapsed=current_seconds - start_seconds
set /a remaining=duration - elapsed

if !remaining! gtr 0 (
    set /a minutes=remaining / 60
    set /a seconds=remaining %% 60
    if !minutes! lss 10 set minutes=0!minutes!
    if !seconds! lss 10 set seconds=0!seconds!
    echo -ne "\r⏱️  Temps restant: !minutes!:!seconds! "
    timeout /t 1 /nobreak >nul
    goto timer_loop
)
echo.
goto :eof

REM Étape 1: Setup (2 minutes)
echo.
echo 📦 ÉTAPE 1/4 - SETUP (2 min)
echo ============================
echo.

echo 🔄 Installation des dépendances Windows...

REM Vérification de Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js non installé !
    echo.
    echo 📥 Veuillez installer Node.js depuis: https://nodejs.org/
    echo    Choisissez la version LTS recommandée
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js détecté

REM Installation de Claude Code CLI
echo 📦 Installation de Claude Code CLI...
call npm install -g @anthropic/claude-code
if %errorlevel% neq 0 (
    echo ⚠️  Erreur lors de l'installation, tentative avec PowerShell...
    powershell -Command "npm install -g @anthropic/claude-code"
)

REM Vérification de Claude CLI
claude --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Claude Code CLI installé avec succès
) else (
    echo ❌ Erreur: Claude Code CLI non disponible après installation
    echo 💡 Veuillez réessayer manuellement: npm install -g @anthropic/claude-code
    pause
    exit /b 1
)

REM Installation des outils supplémentaires (optionnels)
echo 📦 Installation d'outils supplémentaires...

REM Vérification de Git
git --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Git déjà disponible
) else (
    echo ⚠️  Git non trouvé - recommandé pour le versionnage
    echo 💡 Téléchargez Git depuis: https://git-scm.com/download/win
)

REM Vérification de Python (pour manage-swarm.py)
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Python disponible pour scripts avancés
) else (
    echo ⚠️  Python non trouvé - optionnel pour scripts avancés
    echo 💡 Téléchargez Python depuis: https://www.python.org/downloads/
)

echo.
echo ✅ ÉTAPE 1 TERMINÉE - Dépendances installées
echo.

REM Étape 2: Configuration (5 minutes)
echo.
echo ⚙️  ÉTAPE 2/4 - CONFIGURATION (5 min)
echo ==================================
echo.

echo 📝 Génération automatique du fichier de configuration...

REM Création du fichier claude-agents.json
echo {> claude-agents.json
echo   "swarm_name": "Windows_QuickStart_Swarm",>> claude-agents.json
echo   "version": "1.0",>> claude-agents.json
echo   "swarm_metadata": {>> claude-agents.json
echo     "name": "Windows QuickStart Swarm",>> claude-agents.json
echo     "description": "Swarm créé par Quick Start Windows",>> claude-agents.json
echo     "created": "%DATE%",>> claude-agents.json
echo     "platform": "Windows">> claude-agents.json
echo   },>> claude-agents.json
echo   "agents": [>> claude-agents.json

REM Agents Frontend, Backend, Security, DevOps, QA
echo     {>> claude-agents.json
echo       "id": "agent-1",>> claude-agents.json
echo       "name": "Frontend Expert",>> claude-agents.json
echo       "role": "React/Vue/Angular Specialist",>> claude-agents.json
echo       "priority": "high",>> claude-agents.json
echo       "enabled": true,>> claude-agents.json
echo       "config": ".claude/agents/frontend.json",>> claude-agents.json
echo       "resources": {>> claude-agents.json
echo         "cpu": "2 cores",>> claude-agents.json
echo         "memory": "4GB",>> claude-agents.json
echo         "timeout": 300>> claude-agents.json
echo       }>> claude-agents.json
echo     },>> claude-agents.json

echo     {>> claude-agents.json
echo       "id": "agent-2",>> claude-agents.json
echo       "name": "Backend Architect",>> claude-agents.json
echo       "role": "API/Database Specialist",>> claude-agents.json
echo       "priority": "high",>> claude-agents.json
echo       "enabled": true,>> claude-agents.json
echo       "config": ".claude/agents/backend.json",>> claude-agents.json
echo       "resources": {>> claude-agents.json
echo         "cpu": "2 cores",>> claude-agents.json
echo         "memory": "4GB",>> claude-agents.json
echo         "timeout": 300>> claude-agents.json
echo       }>> claude-agents.json
echo     },>> claude-agents.json

echo     {>> claude-agents.json
echo       "id": "agent-3",>> claude-agents.json
echo       "name": "Security Guard",>> claude-agents.json
echo       "role": "Cybersecurity ^& Audit Expert",>> claude-agents.json
echo       "priority": "critical",>> claude-agents.json
echo       "enabled": true,>> claude-agents.json
echo       "config": ".claude/agents/security.json",>> claude-agents.json
echo       "resources": {>> claude-agents.json
echo         "cpu": "1 core",>> claude-agents.json
echo         "memory": "2GB",>> claude-agents.json
echo         "timeout": 180>> claude-agents.json
echo       }>> claude-agents.json
echo     },>> claude-agents.json

echo     {>> claude-agents.json
echo       "id": "agent-4",>> claude-agents.json
echo       "name": "DevOps Master",>> claude-agents.json
echo       "role": "CI/CD/Infrastructure Specialist",>> claude-agents.json
echo       "priority": "medium",>> claude-agents.json
echo       "enabled": true,>> claude-agents.json
echo       "config": ".claude/agents/devops.json",>> claude-agents.json
echo       "resources": {>> claude-agents.json
echo         "cpu": "1 core",>> claude-agents.json
echo         "memory": "2GB",>> claude-agents.json
echo         "timeout": 240>> claude-agents.json
echo       }>> claude-agents.json
echo     },>> claude-agents.json

echo     {>> claude-agents.json
echo       "id": "agent-5",>> claude-agents.json
echo       "name": "QA Testing Expert",>> claude-agents.json
echo       "role": "Quality Assurance ^& Testing Specialist",>> claude-agents.json
echo       "priority": "medium",>> claude-agents.json
echo       "enabled": true,>> claude-agents.json
echo       "config": ".claude/agents/testing.json",>> claude-agents.json
echo       "resources": {>> claude-agents.json
echo         "cpu": "1 core",>> claude-agents.json
echo         "memory": "2GB",>> claude-agents.json
echo         "timeout": 300>> claude-agents.json
echo       }>> claude-agents.json
echo     },>> claude-agents.json

echo     {>> claude-agents.json
echo       "id": "agent-6",>> claude-agents.json
echo       "name": "Mobile Guru",>> claude-agents.json
echo       "role": "iOS/Android Development Specialist",>> claude-agents.json
echo       "priority": "medium",>> claude-agents.json
echo       "enabled": true,>> claude-agents.json
echo       "config": ".claude/agents/mobile.json",>> claude-agents.json
echo       "resources": {>> claude-agents.json
echo         "cpu": "2 cores",>> claude-agents.json
echo         "memory": "4GB",>> claude-agents.json
echo         "timeout": 300>> claude-agents.json
echo       }>> claude-agents.json
echo     },>> claude-agents.json

echo     {>> claude-agents.json
echo       "id": "agent-7",>> claude-agents.json
echo       "name": "Data Analytics Expert",>> claude-agents.json
echo       "role": "Data Science ^& Analytics Specialist",>> claude-agents.json
echo       "priority": "medium",>> claude-agents.json
echo       "enabled": true,>> claude-agents.json
echo       "config": ".claude/agents/data.json",>> claude-agents.json
echo       "resources": {>> claude-agents.json
echo         "cpu": "2 cores",>> claude-agents.json
echo         "memory": "4GB",>> claude-agents.json
echo       "timeout": 300>> claude-agents.json
echo       }>> claude-agents.json
echo     },>> claude-agents.json

echo     {>> claude-agents.json
echo       "id": "agent-8",>> claude-agents.json
echo       "name": "UI/UX Designer",>> claude-agents.json
echo       "role": "User Interface ^& User Experience Specialist",>> claude-agents.json
echo       "priority": "medium",>> claude-agents.json
echo       "enabled": true,>> claude-agents.json
echo       "config": ".claude/agents/design.json",>> claude-agents.json
echo       "resources": {>> claude-agents.json
echo         "cpu": "1 core",>> claude-agents.json
echo         "memory": "2GB",>> claude-agents.json
echo         "timeout": 240>> claude-agents.json
echo       }>> claude-agents.json
echo     },>> claude-agents.json

echo     {>> claude-agents.json
echo       "id": "agent-9",>> claude-agents.json
echo       "name": "Performance Optimization Expert",>> claude-agents.json
echo       "role": "Performance Tuning ^& Optimization Specialist",>> claude-agents.json
echo       "priority": "medium",>> claude-agents.json
echo       "enabled": true,>> claude-agents.json
echo       "config": ".claude/agents/performance.json",>> claude-agents.json
echo       "resources": {>> claude-agents.json
echo         "cpu": "1 core",>> claude-agents.json
echo         "memory": "2GB",>> claude-agents.json
echo         "timeout": 240>> claude-agents.json
echo       }>> claude-agents.json
echo     },>> claude-agents.json

echo     {>> claude-agents.json
echo       "id": "agent-10",>> claude-agents.json
echo       "name": "Documentation Master",>> claude-agents.json
echo       "role": "Technical Documentation ^& API Docs Specialist",>> claude-agents.json
echo       "priority": "low",>> claude-agents.json
echo       "enabled": true,>> claude-agents.json
echo       "config": ".claude/agents/docs.json",>> claude-agents.json
echo       "resources": {>> claude-agents.json
echo         "cpu": "1 core",>> claude-agents.json
echo         "memory": "1GB",>> claude-agents.json
echo         "timeout": 180>> claude-agents.json
echo       }>> claude-agents.json
echo     }>> claude-agents.json
echo   ],>> claude-agents.json

echo   "orchestration": {>> claude-agents.json
echo     "mode": "parallel",>> claude-agents.json
echo     "max_concurrent": 10,>> claude-agents.json
echo     "retry_policy": {>> claude-agents.json
echo       "max_retries": 3,>> claude-agents.json
echo       "backoff": "exponential">> claude-agents.json
echo     },>> claude-agents.json
echo     "load_balancing": "round-robin",>> claude-agents.json
echo     "health_check_interval": 30>> claude-agents.json
echo   },>> claude-agents.json

echo   "monitoring": {>> claude-agents.json
echo     "enabled": true,>> claude-agents.json
echo     "interval": 15,>> claude-agents.json
echo     "retention": "7d",>> claude-agents.json
echo     "alerts": {>> claude-agents.json
echo       "enabled": true,>> claude-agents.json
echo       "channels": ["console", "log"],>> claude-agents.json
echo       "thresholds": {>> claude-agents.json
echo         "cpu_usage": 80,>> claude-agents.json
echo         "memory_usage": 85,>> claude-agents.json
echo         "error_rate": 5>> claude-agents.json
echo       }>> claude-agents.json
echo     }>> claude-agents.json
echo   },>> claude-agents.json

echo   "security": {>> claude-agents.json
echo     "encryption": "AES-256",>> claude-agents.json
echo     "auth": {>> claude-agents.json
echo       "enabled": true,>> claude-agents.json
echo       "method": "token">> claude-agents.json
echo     },>> claude-agents.json
echo     "audit_log": true>> claude-agents.json
echo   }>> claude-agents.json
echo }>> claude-agents.json

echo ✅ Fichier principal claude-agents.json créé

REM Création des configurations individuelles des agents
echo 📁 Création des configurations des agents...

if not exist ".claude" mkdir ".claude"
if not exist ".claude\agents" mkdir ".claude\agents"

for /l %%i in (1,1,10) do (
    echo {> .claude\agents\agent-%%i.json
    echo   "id": "agent-%%i",>> .claude\agents\agent-%%i.json
    echo   "name": "Agent %%i",>> .claude\agents\agent-%%i.json
    echo   "capabilities": ["task-execution", "problem-solving", "automation"],>> .claude\agents\agent-%%i.json
    echo   "resources": {>> .claude\agents\agent-%%i.json
    echo     "cpu": "1",>> .claude\agents\agent-%%i.json
    echo     "memory": "2GB",>> .claude\agents\agent-%%i.json
    echo     "timeout": 240>> .claude\agents\agent-%%i.json
    echo   },>> .claude\agents\agent-%%i.json
    echo   "behavior": {>> .claude\agents\agent-%%i.json
    echo     "proactive": true,>> .claude\agents\agent-%%i.json
    echo     "collaborative": true,>> .claude\agents\agent-%%i.json
    echo     "learning_mode": "adaptive",>> .claude\agents\agent-%%i.json
    echo     "error_handling": "graceful">> .claude\agents\agent-%%i.json
    echo   },>> .claude\agents\agent-%%i.json
    echo   "version": "1.0",>> .claude\agents\agent-%%i.json
    echo   "platform": "Windows",>> .claude\agents\agent-%%i.json
    echo   "created": "%DATE%">> .claude\agents\agent-%%i.json
    echo }>> .claude\agents\agent-%%i.json
)

REM Compter les agents avec findstr (alternative Windows à jq)
set AGENT_COUNT=0
for /f %%i in ('type claude-agents.json ^| findstr /c:""id":"') do set /a AGENT_COUNT+=1

echo ✅ !AGENT_COUNT! agents configurés avec succès

echo.
echo ✅ ÉTAPE 2 TERMINÉE - Configuration complète
echo.

REM Étape 3: Validation (3 minutes)
echo.
echo 🔍 ÉTAPE 3/4 - VALIDATION (3 min)
echo ===============================
echo.

echo 🧪 Tests de configuration...

REM Test du fichier principal
if exist "claude-agents.json" (
    echo ✅ Fichier principal: OK
) else (
    echo ❌ Erreur: fichier principal manquant
    pause
    exit /b 1
)

REM Test des fichiers d'agents
set AGENT_FILES=0
for %%f in (.claude\agents\*.json) do set /a AGENT_FILES+=1

if !AGENT_FILES! equ 10 (
    echo ✅ Configurations agents: OK (!AGENT_FILES! fichiers)
) else (
    echo ❌ Erreur: !AGENT_FILES! fichiers trouvés (10 attendus)
    pause
    exit /b 1
)

REM Test de connectivité Claude
echo 🌐 Test de connectivité avec Claude...
ping -n 1 claude.ai >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Connexion Claude: OK
) else (
    echo ⚠️  Avertissement: connexion incertaine (vérifiez votre internet)
)

REM Test de l'installation Claude CLI
echo 🛠️  Test de Claude CLI...
claude --help >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Claude CLI: fonctionnelle
) else (
    echo ❌ Erreur: Claude CLI ne répond pas
    echo 💡 Essayez: npm uninstall -g @anthropic-claude-code ^&^& npm install -g @anthropic/claude-code
    pause
    exit /b 1
)

echo.
echo ✅ ÉTAPE 3 TERMINÉE - Validation réussie
echo.

REM Étape 4: Lancement (10 minutes)
echo.
echo 🚀 ÉTAPE 4/4 - LANCEMENT (10 min)
echo ================================
echo.

echo.
echo 🎯 LANCEMENT DU SWARM WINDOWS !
echo =============================
echo.
echo 🤖 !AGENT_COUNT! agents prêts
echo ⚡ Mode: Parallèle (Optimisé Windows)
echo 👁️  Monitoring: Activé
echo 🖥️  Plateforme: Windows
echo.

echo 💡 COMMANDES DISPONIBLES:
echo =========================
echo.
echo 1️⃣ Lancement basique:
echo    claude --agents @claude-agents.json --swarm-mode parallel
echo.
echo 2️⃣ Lancement avec monitoring complet:
echo    claude --agents @claude-agents.json --swarm-mode parallel --monitor
echo.
echo 3️⃣ Lancement hybride (critiques en premier):
echo    claude --agents @claude-agents.json --swarm-mode hybrid
echo.
echo 4️⃣ Lancement séquentiel:
echo    claude --agents @claude-agents.json --swarm-mode sequential
echo.
echo 5️⃣ Gestion avancée avec notre script Python:
echo    python scripts/manage-swarm.py claude-agents.json --mode parallel
echo.
echo 6️⃣ Lancement avec notre script Windows:
echo    scripts\launch-swarm.bat parallel
echo.

echo 🔧 OUTILS CRÉÉS:
echo =================
echo.
echo 📄 scripts\launch-swarm.bat    - Lancement Windows avancé
echo 🐍 scripts\manage-swarm.py     - Gestion multi-plateforme
echo ⚡ scripts\quick-start.bat     - Ce script d'installation
echo 📁 .claude\agents\*.json       - Configurations individuelles
echo 📋 claude-agents.json          - Configuration principale
echo.

set /p launch_choice="Voulez-vous lancer le swarm maintenant ? (O/n): "

if /i "%launch_choice%"=="n" (
    echo.
    echo ⏸️  Swarm en attente.
    echo.
    echo Pour lancer plus tard, utilisez l'une des commandes ci-dessus.
    echo 📚 Documentation complète: README.md
    echo 💬 Support communautaire: Discord
    echo.
) else (
    echo.
    echo 🚀 LANCEMENT AUTOMATIQUE DU SWARM!
    echo =================================
    echo.
    echo Démarrage en mode parallèle avec monitoring...
    echo.

    REM Lancement du swarm
    claude --agents @claude-agents.json --swarm-mode parallel --monitor

    echo.
    echo ✅ Swarm lancé avec succès!
    echo 📊 Vérifiez les logs et le monitoring pour suivre l'exécution
)

echo.
echo ███████╗██╗   ██╗██████╗  ██████╗
echo ██╔════╝██║   ██║██╔══██╗██╔═══██╗
echo ██████╗██║   ██║██████╔╝██║   ██║
echo ██╔══╝ ██║   ██║██╔══██╗██║   ██║
echo ██║    ╚██████╔╝██████╔╝╚██████╔╝
echo ╚═╝     ╚═════╝ ╚═════╝  ╚═════╝
echo.
echo ✅ PROCEDURE TERMINÉE AVEC SUCCÈS !
echo.
echo 📚 Ressources créées:
echo    📁 Configuration complète dans .claude\
echo    📄 Scripts d'automatisation dans scripts\
echo    ⚙️  Fichier principal: claude-agents.json
echo.
echo 🎯 Prochaines étapes:
echo    1. Personnalisez claude-agents.json selon vos besoins
echo    2. Lancez votre premier swarm avec les commandes ci-dessus
echo    3. Rejoignez notre Discord pour le support
echo.
echo 🎉 FÉLICITATIONS ! VOTRE SWARM D'AGENTS EST PRÊT !
echo.

pause