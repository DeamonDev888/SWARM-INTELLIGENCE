import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SI</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Swarm Intelligence</h1>
                <p className="text-xs text-gray-400">Multi-Agent Platform</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#overview" className="text-gray-400 hover:text-white transition-colors">Vue d'Ensemble</a>
              <a href="#architecture" className="text-gray-400 hover:text-white transition-colors">Architecture</a>
              <a href="#quickstart" className="text-gray-400 hover:text-white transition-colors">Démarrage</a>
              <a href="#use-cases" className="text-gray-400 hover:text-white transition-colors">Cas d'Usage</a>
              <a href="#resources" className="text-gray-400 hover:text-white transition-colors">Ressources</a>
              <button
                onClick={() => window.open('https://discord.gg/Jt83jBebsk', '_blank')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Discord
              </button>
              <button
                onClick={() => window.open('https://www.npmjs.com/package/@anthropic-ai/claude-code', '_blank')}
                className="bg-black text-white px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-900 transition-colors"
              >
                Launch Swarm
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:bg-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-2 space-y-1">
              <a href="#overview" className="block px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white">Vue d'Ensemble</a>
              <a href="#architecture" className="block px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white">Architecture</a>
              <a href="#quickstart" className="block px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white">Démarrage</a>
              <a href="#use-cases" className="block px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white">Cas d'Usage</a>
              <a href="#resources" className="block px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white">Ressources</a>
              <button
                onClick={() => window.open('https://discord.gg/Jt83jBebsk', '_blank')}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mb-2"
              >
                Discord
              </button>
              <button
                onClick={() => window.open('https://www.npmjs.com/package/@anthropic-ai/claude-code', '_blank')}
                className="w-full bg-black text-white px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-900"
              >
                Launch Swarm
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Construire et Déployer Une Armée d'Agents en 20 Minutes</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Swarm
            <span className="text-blue-400"> Intelligence</span>
          </h2>

          <p className="text-xl text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
            L'IA Multi-Agent qui Révolutionne Votre Productivité.
            Orchestrez 10+ agents spécialisés travaillant de concert pour accomplir n'importe quelle mission complexe.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 border border-green-700 rounded-full text-sm text-green-300 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>💎 100% GRATUIT • SUPPORT TECHNIQUE 24/7</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => window.open('#quickstart', '_self')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Commencer (5 min)
            </button>
            <button
              onClick={() => window.open('https://github.com/DeamonDev888/SWARM-INTELLIGENCE', '_blank')}
              className="bg-gray-800 text-white px-8 py-3 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors font-medium"
            >
              Documentation
            </button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <div className="text-3xl font-bold text-white">90%</div>
              <div className="text-gray-400">Réduction du temps</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">12+</div>
              <div className="text-gray-400">Agents Spécialisés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">20</div>
              <div className="text-gray-400">Minutes de déploiement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-gray-400">Adaptable</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Vue d'Ensemble</h3>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h4 className="text-2xl font-semibold text-white mb-4">Qu'est-ce qu'un Swarm d'Agents ?</h4>
              <p className="text-gray-400 leading-relaxed mb-4">
                Un swarm d'agents est une orchestration de multiples agents spécialisés qui travaillent de concert
                pour accomplir n'importe quelle mission complexe. Imaginez une équipe de 10+ experts virtuels,
                chacun devenant une autorité dans son domaine, coordonnés par l'intelligence artificielle pour
                livrer des résultats exceptionnels.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Que votre mission soit dans la recherche, l'analyse, la création, la stratégie, le développement,
                le conseil, le marketing, la finance, la santé, l'éducation, ou tout autre domaine - le swarm
                s'adapte à votre besoin spécifique.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-white mb-4">Pourquoi Choisir le Swarm Intelligence ?</h4>
              <div className="space-y-4">
                {[
                  { title: "Parallélisme", desc: "10+ agents spécialisés travaillant simultanément", impact: "90% plus rapide" },
                  { title: "Expertise", desc: "Chaque agent devient un expert dans son domaine", impact: "Qualité professionnelle" },
                  { title: "Efficacité", desc: "Automatisation des tâches répétitives", impact: "Plus de 24h économisées/semaine" },
                  { title: "Coordination", desc: "Synchronisation intelligente sans intervention", impact: "Flux de travail optimisé" },
                  { title: "Scalabilité", desc: "Ajoutez/retirez agents selon la mission", impact: "Adaptabilité totale" },
                  { title: "Polyvalence", desc: "Fonctionne dans TOUS les domaines", impact: "Solution universelle" }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-white">{item.title}</h5>
                      <span className="text-green-400 text-sm">{item.impact}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Architecture & Hiérarchie</h3>

          {/* Beautiful Hierarchy Diagram with Clear Lines */}
          <div className="bg-gray-900 rounded-xl p-8 mb-12 overflow-x-auto">
            <div className="min-w-max relative">
              {/* Top Level - Orchestrator */}
              <div className="text-center mb-8">
                <div className="inline-block bg-purple-900/30 border-2 border-purple-600 rounded-lg px-6 py-3 shadow-lg">
                  <div className="text-purple-300 font-bold text-lg">🏛️ ORCHESTRATEUR CENTRAL</div>
                </div>
              </div>

              {/* Vertical Connection Line from Orchestrator */}
              <div className="flex justify-center mb-8">
                <div className="w-1 h-12 bg-gradient-to-b from-purple-600 to-gray-600 relative">
                  <div className="absolute -left-1 top-1/2 w-3 h-1 bg-purple-600 -translate-y-1/2"></div>
                </div>
              </div>

              {/* Main Level Container */}
              <div className="relative mb-8">
                {/* Horizontal Branch Line */}
                <div className="flex justify-center mb-6">
                  <div class="relative h-1 w-80 bg-gray-600">
                    <div class="absolute -left-1 top-1/2 w-3 h-1 bg-gray-600 -translate-y-1/2"></div>
                    <div class="absolute -right-1 top-1/2 w-3 h-1 bg-gray-600 -translate-y-1/2"></div>
                    {/* Branch points */}
                    <div class="absolute left-1/4 -top-1 w-3 h-1 bg-red-600 -translate-x-1/2"></div>
                    <div class="absolute left-2/4 -top-1 w-3 h-1 bg-orange-600 -translate-x-1/2"></div>
                    <div class="absolute left-3/4 -top-1 w-3 h-1 bg-yellow-600 -translate-x-1/2"></div>
                  </div>
                </div>

                {/* Priority Labels */}
                <div className="flex justify-center gap-8 mb-8">
                  <div className="text-center">
                    <div className="inline-block bg-red-900/40 border-2 border-red-600 rounded-lg px-4 py-2">
                      <div className="text-red-400 font-semibold">🔒 CRITIQUE</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-block bg-orange-900/40 border-2 border-orange-600 rounded-lg px-4 py-2">
                      <div className="text-orange-400 font-semibold">HIGH</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-block bg-yellow-900/40 border-2 border-yellow-600 rounded-lg px-4 py-2">
                      <div className="text-yellow-400 font-semibold">MEDIUM</div>
                    </div>
                  </div>
                </div>

                {/* Agent Cards with Clear Connections */}
                <div className="flex justify-center items-start gap-8">
                  {/* Critical Level */}
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-8 bg-red-600 relative">
                      <div className="absolute -top-1 left-1/2 w-3 h-1 bg-red-600 -translate-x-1/2"></div>
                      <div className="absolute -bottom-1 left-1/2 w-3 h-1 bg-red-600 -translate-x-1/2"></div>
                    </div>
                    <div className="bg-red-900/30 border-2 border-red-600 rounded-lg p-5 text-center shadow-lg min-w-[140px]">
                      <div className="text-red-400 font-bold mb-2 text-lg">🔒</div>
                      <div className="text-white text-sm font-medium">Security Guardian</div>
                    </div>
                  </div>

                  {/* High Level */}
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-8 bg-orange-600 relative">
                      <div className="absolute -top-1 left-1/2 w-3 h-1 bg-orange-600 -translate-x-1/2"></div>
                      <div className="absolute -bottom-1 left-1/2 w-3 h-1 bg-orange-600 -translate-x-1/2"></div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-orange-900/30 border-2 border-orange-600 rounded-lg p-4 text-center shadow-lg min-w-[120px]">
                        <div className="text-orange-400 font-bold mb-2">🎨</div>
                        <div className="text-white text-xs font-medium">UI/UX<br/>Designer</div>
                      </div>
                      <div className="bg-orange-900/30 border-2 border-orange-600 rounded-lg p-4 text-center shadow-lg min-w-[120px]">
                        <div className="text-orange-400 font-bold mb-2">🏗️</div>
                        <div className="text-white text-xs font-medium">Backend<br/>Architect</div>
                      </div>
                      <div className="bg-orange-900/30 border-2 border-orange-600 rounded-lg p-4 text-center shadow-lg min-w-[120px]">
                        <div className="text-orange-400 font-bold mb-2">🗄️</div>
                        <div className="text-white text-xs font-medium">Database<br/>Master</div>
                      </div>
                    </div>
                  </div>

                  {/* Medium Level */}
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-8 bg-yellow-600 relative">
                      <div className="absolute -top-1 left-1/2 w-3 h-1 bg-yellow-600 -translate-x-1/2"></div>
                      <div className="absolute -bottom-1 left-1/2 w-3 h-1 bg-yellow-600 -translate-x-1/2"></div>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-yellow-900/30 border-2 border-yellow-600 rounded-lg p-3 text-center shadow-lg min-w-[80px]">
                        <div className="text-yellow-400 font-bold mb-1">🚀</div>
                        <div className="text-white text-xs">DevOps</div>
                      </div>
                      <div className="bg-yellow-900/30 border-2 border-yellow-600 rounded-lg p-3 text-center shadow-lg min-w-[80px]">
                        <div className="text-yellow-400 font-bold mb-1">🧪</div>
                        <div className="text-white text-xs">Testing</div>
                      </div>
                      <div className="bg-yellow-900/30 border-2 border-yellow-600 rounded-lg p-3 text-center shadow-lg min-w-[80px]">
                        <div className="text-yellow-400 font-bold mb-1">⚡</div>
                        <div className="text-white text-xs">Perf</div>
                      </div>
                      <div className="bg-yellow-900/30 border-2 border-yellow-600 rounded-lg p-3 text-center shadow-lg min-w-[80px]">
                        <div className="text-yellow-400 font-bold mb-1">🔌</div>
                        <div className="text-white text-xs">Integ</div>
                      </div>
                      <div className="bg-yellow-900/30 border-2 border-yellow-600 rounded-lg p-3 text-center shadow-lg min-w-[80px]">
                        <div className="text-yellow-400 font-bold mb-1">📱</div>
                        <div className="text-white text-xs">Mobile</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Cards Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-red-400 font-bold">🔴</span>
                </div>
                <div>
                  <h4 className="text-red-400 font-semibold">Niveau CRITIQUE</h4>
                  <p className="text-red-500 text-sm">1 Agent</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-red-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">Security Guardian</h5>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Surveille toutes les actions</li>
                    <li>• Bloque les opérations dangereuses</li>
                    <li>• Audit continu</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-900/20 border border-orange-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-orange-400 font-bold">🟠</span>
                </div>
                <div>
                  <h4 className="text-orange-400 font-semibold">Niveau HIGH</h4>
                  <p className="text-orange-500 text-sm">3 Agents</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-orange-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">UI/UX Designer</h5>
                  <p className="text-gray-400 text-xs">Design System, Wireframes, Prototypes</p>
                </div>
                <div className="bg-orange-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">Backend Architect</h5>
                  <p className="text-gray-400 text-xs">API Architecture, Microservices</p>
                </div>
                <div className="bg-orange-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">Database Master</h5>
                  <p className="text-gray-400 text-xs">Data Architecture, Schemas</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-yellow-400 font-bold">🟡</span>
                </div>
                <div>
                  <h4 className="text-yellow-400 font-semibold">Niveau MEDIUM</h4>
                  <p className="text-yellow-500 text-sm">5 Agents</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-yellow-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">DevOps Commander</h5>
                  <p className="text-gray-400 text-xs">CI/CD, Kubernetes</p>
                </div>
                <div className="bg-yellow-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">Testing Expert</h5>
                  <p className="text-gray-400 text-xs">Unit Tests, E2E Tests</p>
                </div>
                <div className="bg-yellow-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">Performance Optimizer</h5>
                  <p className="text-gray-400 text-xs">Monitoring, Benchmarks</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-8">
            <h4 className="text-xl font-semibold text-white mb-6 text-center">Stratégie d'Exécution</h4>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="pb-3 text-gray-400">Mode</th>
                    <th className="pb-3 text-gray-400">Agents</th>
                    <th className="pb-3 text-gray-400">Temps</th>
                    <th className="pb-3 text-gray-400">Usage</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-white font-medium">Parallel</td>
                    <td className="py-3">12</td>
                    <td className="py-3">2-5min</td>
                    <td className="py-3">Démarrage rapide, tests simples</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-white font-medium">Sequential</td>
                    <td className="py-3">12</td>
                    <td className="py-3">15-30min</td>
                    <td className="py-3">Workflows complexes</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-white font-medium">Hybrid</td>
                    <td className="py-3">12</td>
                    <td className="py-3">5-10min</td>
                    <td className="py-3">Développement production</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-white font-medium">Critical-First</td>
                    <td className="py-3">3</td>
                    <td className="py-3">1-2min</td>
                    <td className="py-3">Urgence, hotfix</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quickstart" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Démarrage Rapide (5 Minutes)</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-gray-400 text-sm font-medium mb-2">Étape 1: Structure de Base (30s)</div>
              <h4 className="text-xl font-semibold text-white mb-3">Création de l'Arborescence</h4>
              <div className="bg-black rounded-lg p-4 font-mono text-sm text-gray-300 mb-4">
                <div>mkdir -p .claude/agents scripts</div>
              </div>
              <p className="text-gray-400 text-sm">
                Créez la structure de répertoires nécessaire pour votre swarm.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-gray-400 text-sm font-medium mb-2">Étape 2: Configuration Rapide (2 min)</div>
              <h4 className="text-xl font-semibold text-white mb-3">Configuration JSON</h4>
              <div className="bg-black rounded-lg p-4 font-mono text-sm text-gray-300 mb-4 overflow-x-auto">
                <div>{`{`}</div>
                <div>{`  "agents": [`}</div>
                <div>{`    { "id": "frontend-guru", "role": "React Expert" },`}</div>
                <div>{`    { "id": "backend-wizard", "role": "API Expert" }`}</div>
                <div>{`  ]`}</div>
                <div>{`}`}</div>
              </div>
              <p className="text-gray-400 text-sm">
                Configurez vos agents spécialisés avec leurs rôles et compétences.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-gray-400 text-sm font-medium mb-2">Étape 3: Lancement (2 min 30s)</div>
              <h4 className="text-xl font-semibold text-white mb-3">Déploiement du Swarm</h4>
              <div className="bg-black rounded-lg p-4 font-mono text-sm text-gray-300 mb-4">
                <div>claude --agents @claude-agents.json --swarm-mode parallel</div>
              </div>
              <p className="text-gray-400 text-sm">
                Lancez votre swarm d'agents en mode parallèle pour une exécution optimale.
              </p>
            </div>
          </div>

          <div className="bg-green-900/20 border border-green-800 rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold text-green-400 mb-2">✅ Résultat en 5 minutes !</h4>
            <p className="text-gray-300">
              Votre swarm de 12 agents spécialisés est maintenant actif et prêt à travailler.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Cas d'Usage Universels</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Développement Full-Stack",
                description: "Application web complète de A à Z",
                agents: "Frontend, Backend, Database, Security, Testing",
                time: "45 minutes au lieu de 8 heures"
              },
              {
                title: "Application Mobile",
                description: "Apps iOS et Android natives",
                agents: "Mobile Wizard, Backend Architect, UI Designer",
                time: "2 heures pour apps complètes"
              },
              {
                title: "Système d'IA Intégré",
                description: "Intégration ML/AI dans applications",
                agents: "AI/ML Specialist, Backend Architect, Integration",
                time: "IA opérationnelle en 3 heures"
              },
              {
                title: "Finance & Trading",
                description: "Analyse financière et trading algorithmique",
                agents: "Quant Analyst, Risk Manager, Market Researcher",
                time: "Modèles déployés en 1 heure"
              },
              {
                title: "Recherche Médicale",
                description: "Analyse et protocoles médicaux",
                agents: "Medical Researcher, Diagnostic AI, Compliance",
                time: "Protocoles en 2 heures"
              },
              {
                title: "Strategy d'Entreprise",
                description: "Analyse stratégique et business intelligence",
                agents: "Market Analyst, Finance Expert, Strategy Master",
                time: "Rapports complets en 3 heures"
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h4 className="text-xl font-semibold text-white mb-2">{useCase.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{useCase.description}</p>
                <div className="text-xs text-gray-500 mb-2">
                  <strong>Agents:</strong> {useCase.agents}
                </div>
                <div className="text-xs text-green-400">
                  <strong>Temps:</strong> {useCase.time}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-lg p-8 text-center">
            <h4 className="text-2xl font-semibold text-white mb-4">Le Template Universel</h4>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Ce framework est 100% générique et peut être adapté à n'importe quel domaine d'activité.
              Modifiez simplement le fichier claude-agents.json selon vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://github.com/DeamonDev888/SWARM-INTELLIGENCE', '_blank')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Voir sur GitHub
              </button>
              <button
                onClick={() => window.open('https://discord.gg/Jt83jBebsk', '_blank')}
                className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-medium"
              >
                Rejoindre Discord
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Ressources & Support</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📖</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Documentation</h4>
              <p className="text-gray-400 text-sm mb-4">Guide complet d'implémentation</p>
              <a href="https://github.com/DeamonDev888/SWARM-INTELLIGENCE" target="_blank" className="text-blue-400 hover:text-blue-300 text-sm">
                Consulter →
              </a>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Communauté</h4>
              <p className="text-gray-400 text-sm mb-4">Support et échanges techniques</p>
              <a href="https://discord.gg/Jt83jBebsk" target="_blank" className="text-purple-400 hover:text-purple-300 text-sm">
                Rejoindre →
              </a>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Outils</h4>
              <p className="text-gray-400 text-sm mb-4">Scripts d'automatisation</p>
              <a href="https://www.npmjs.com/package/@anthropic-ai/claude-code" target="_blank" className="text-green-400 hover:text-green-300 text-sm">
                Installer →
              </a>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📺</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Tutoriels</h4>
              <p className="text-gray-400 text-sm mb-4">Vidéos et guides pratiques</p>
              <a href="#" className="text-red-400 hover:text-red-300 text-sm">
                Regarder →
              </a>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h4 className="text-xl font-semibold text-white mb-6 text-center">Métriques de Performance</h4>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">98.5%</div>
                <div className="text-gray-400">Taux de Succès</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">1.2s</div>
                <div className="text-gray-400">Temps de Réponse Moyen</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">12</div>
                <div className="text-gray-400">Agents Concurrents Max</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'Application Génériques */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Le Template Universel</h3>

          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Ce framework est 100% générique et peut être adapté à n'importe quel domaine d'activité.
            Modifiez simplement le fichier claude-agents.json selon vos besoins spécifiques.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "💼 Consulting",
                description: "Analyste, Stratégiste, Chercheur",
                usage: "Stratégie, audits, études"
              },
              {
                title: "🔬 Recherche",
                description: "Scientifique, Data Analyst, Writer",
                usage: "Publications, analyses"
              },
              {
                title: "🛍️ E-commerce",
                description: "Merchandiser, Marketer, Analyst",
                usage: "Lancement produits, campagnes"
              },
              {
                title: "🏢 Immobilier",
                description: "Analyste, Négociateur, Legal",
                usage: "Transactions, due diligence"
              },
              {
                title: "⚖️ Juridique",
                description: "Lawyer, Researcher, Writer",
                usage: "Contrats, veille légale"
              },
              {
                title: "👥 RH",
                description: "Recruiter, Trainer, Analyst",
                usage: "Talent acquisition, formation"
              },
              {
                title: "🏡 Immobilier",
                description: "Evaluator, Negotiator, Legal",
                usage: "Transactions, analyses"
              },
              {
                title: "🛡️ Assurance",
                description: "Underwriter, Adjuster, Analyst",
                usage: "Évaluation, sinistres"
              }
            ].map((domain, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-600 transition-colors">
                <h4 className="text-lg font-semibold text-white mb-3">{domain.title}</h4>
                <p className="text-gray-500 text-sm mb-2">{domain.description}</p>
                <p className="text-gray-600 text-xs">{domain.usage}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-lg p-8 text-center border border-gray-800">
            <h4 className="text-2xl font-semibold text-white mb-4">Votre domaine n'est pas listé ?</h4>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Pas de problème ! Le framework s'adapte à TOUS les secteurs d'activité.
              Suivez simplement notre méthode en 3 étapes pour créer votre swarm personnalisé.
            </p>
            <button
              onClick={() => window.open('#quickstart', '_self')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Créer Votre Swarm →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">SI</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Swarm Intelligence</h4>
                  <p className="text-sm text-gray-500">Multi-Agent Platform</p>
                </div>
              </div>
              <p className="text-gray-500">L'IA Multi-Agent qui Révolutionne Votre Productivité</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Liens Rapides</h4>
              <ul className="space-y-2">
                <li><a href="https://github.com/DeamonDev888/SWARM-INTELLIGENCE" target="_blank" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://discord.gg/Jt83jBebsk" target="_blank" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="https://www.npmjs.com/package/@anthropic-ai/claude-code" target="_blank" className="hover:text-white transition-colors">Claude Code</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Informations</h4>
              <ul className="space-y-2 text-gray-500">
                <li>Version: 2.0</li>
                <li>Mise à jour: 2025-11-09</li>
                <li>Licence: MIT</li>
                <li>100% Gratuit • Support 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>Construit avec Claude Code • Mode Sombre Professionnel</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App