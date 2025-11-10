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
                onClick={() => window.open('https://github.com/DeamonDev888/SWARM-INTELLIGENCE.git', '_blank')}
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
                onClick={() => window.open('https://github.com/DeamonDev888/SWARM-INTELLIGENCE.git', '_blank')}
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
              Commencer (20 min)
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

      {/* Models Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Modèles IA Avancés Intégrés</h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* GLM 4.6 Card */}
            <a
              href="https://z.ai/model-api"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:border-blue-600/50 hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-600/20 rounded-lg p-2 flex-shrink-0">
                  <img
                    src="/asset/image.png"
                    alt="GLM 4.6 Model"
                    className="w-full h-full object-contain rounded"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full hidden items-center justify-center text-blue-400 text-2xl font-bold">
                    GLM
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-2">GLM 4.6</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Modèle de langage avancé avec reasoning complexes et traitement multimodal.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">Reasoning</span>
                    <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">Multimodal</span>
                    <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">256K context</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    <strong>Utilisation:</strong> Analyse complexe, code generation, RAG
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-blue-400 text-xs font-semibold flex items-center justify-end gap-1">
                  Visiter le site
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Minimax M2 Card */}
            <a
              href="https://www.minimax.io/news/minimax-m2"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-700/30 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:border-purple-600/50 hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-purple-600/20 rounded-lg p-2 flex-shrink-0">
                  <img
                    src="/asset/IMG_2210.png"
                    alt="Minimax M2 Model"
                    className="w-full h-full object-contain rounded"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full hidden items-center justify-center text-purple-400 text-2xl font-bold">
                    M2
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-2">Minimax M2</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Modèle de nouvelle génération avec performances exceptionnelles en traitement du langage.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">High Performance</span>
                    <span className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">Low Latency</span>
                    <span className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">Scalable</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    <strong>Utilisation:</strong> Production, API services, realtime
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-purple-400 text-xs font-semibold flex items-center justify-end gap-1">
                  Visiter le site
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Ces modèles sont directement intégrés dans notre écosystème Swarm pour offrir des performances optimales
              dans vos workflows multi-agents. Profitez de la puissance de l'IA de pointe sans configuration complexe.
            </p>
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

          {/* Architecture Graphique Amélioré avec Espacement Optimisé */}
          <div className="bg-gray-900/50 rounded-xl p-10 mb-16 overflow-x-auto">
            <div className="min-w-max relative max-w-7xl mx-auto">
              {/* Top Level - Orchestrator Central */}
              <div className="text-center mb-14">
                <div className="inline-block bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border-2 border-indigo-500/50 rounded-xl px-10 py-5 shadow-2xl backdrop-blur-sm">
                  <div className="text-indigo-300 font-bold text-2xl flex items-center gap-4">
                    <span className="text-4xl">🏛️</span>
                    <span>ORCHESTRATEUR CENTRAL</span>
                  </div>
                </div>
              </div>

              {/* Vertical Connection from Orchestrator */}
              <div className="flex justify-center mb-16">
                <div className="w-3 h-20 bg-gradient-to-b from-indigo-600 to-blue-600 relative">
                  <div className="absolute -left-2 top-1/2 w-5 h-5 bg-indigo-500 rounded-full -translate-y-1/2 shadow-lg shadow-indigo-500/50"></div>
                </div>
              </div>

              {/* Critical Level Branch */}
              <div className="flex justify-center mb-14">
                <div className="relative">
                  <div className="h-3 w-40 bg-gradient-to-r from-indigo-600 to-cyan-600 relative">
                    <div className="absolute -left-2 top-1/2 w-5 h-5 bg-indigo-500 rounded-full -translate-y-1/2"></div>
                    <div className="absolute -right-2 top-1/2 w-5 h-5 bg-cyan-500 rounded-full -translate-y-1/2"></div>
                  </div>
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2">
                    <div className="text-center">
                      <div className="inline-block bg-cyan-900/40 border-2 border-cyan-500/60 rounded-xl px-6 py-3 mb-6">
                        <div className="text-cyan-400 font-bold text-lg flex items-center gap-3">
                          <span className="text-2xl">🔒</span>
                          <span>CRITIQUE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Guardian Branch */}
              <div className="flex justify-center mb-16">
                <div className="relative">
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-3 h-16 bg-cyan-600">
                    <div className="absolute -top-2 left-1/2 w-5 h-5 bg-cyan-500 rounded-full -translate-x-1/2"></div>
                  </div>
                  <div className="bg-cyan-900/30 border-2 border-cyan-500/50 rounded-xl p-8 text-center shadow-2xl min-w-[200px] backdrop-blur-sm hover:border-cyan-400/60 transition-all transform hover:scale-105">
                    <div className="text-cyan-400 font-bold mb-4 text-3xl">🔒</div>
                    <div className="text-white text-base font-semibold mb-3">Security Guardian</div>
                    <div className="text-cyan-200 text-sm italic">Surveille toutes les actions</div>
                  </div>
                </div>
              </div>

              {/* Continue Vertical Line */}
              <div className="flex justify-center mb-16">
                <div className="w-3 h-20 bg-gradient-to-b from-blue-600 to-emerald-600"></div>
              </div>

              {/* High Level Branch */}
              <div className="flex justify-center mb-14">
                <div className="relative">
                  <div className="h-3 w-[500px] bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600 relative">
                    <div className="absolute -left-2 top-1/2 w-5 h-5 bg-blue-500 rounded-full -translate-y-1/2"></div>
                    <div className="absolute left-1/3 -top-2 w-5 h-5 bg-emerald-500 rounded-full -translate-y-1/2"></div>
                    <div className="absolute left-2/3 -top-2 w-5 h-5 bg-teal-500 rounded-full -translate-y-1/2"></div>
                    <div className="absolute -right-2 top-1/2 w-5 h-5 bg-teal-500 rounded-full -translate-y-1/2"></div>
                  </div>
                  <div className="absolute -top-20 left-0 right-0 flex justify-center">
                    <div className="text-center">
                      <div className="inline-block bg-emerald-900/40 border-2 border-emerald-500/60 rounded-xl px-6 py-3">
                        <div className="text-emerald-400 font-bold text-lg">HIGH</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* High Level Agents */}
              <div className="flex justify-center gap-16 mb-16">
                {/* UI/UX Designer */}
                <div className="flex flex-col items-center">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-16 bg-emerald-600">
                    <div className="absolute -top-2 left-1/2 w-5 h-5 bg-emerald-500 rounded-full -translate-x-1/2"></div>
                  </div>
                  <div className="bg-emerald-900/30 border-2 border-emerald-500/50 rounded-xl p-6 text-center shadow-2xl min-w-[180px] backdrop-blur-sm hover:border-emerald-400/60 transition-all transform hover:scale-105">
                    <div className="text-emerald-400 font-bold mb-3 text-2xl">🎨</div>
                    <div className="text-white text-sm font-semibold mb-2">UI/UX Designer</div>
                    <div className="text-emerald-200 text-xs">Design System</div>
                  </div>
                </div>

                {/* Backend Architect */}
                <div className="flex flex-col items-center">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-16 bg-teal-600">
                    <div className="absolute -top-2 left-1/2 w-5 h-5 bg-teal-500 rounded-full -translate-x-1/2"></div>
                  </div>
                  <div className="bg-teal-900/30 border-2 border-teal-500/50 rounded-xl p-6 text-center shadow-2xl min-w-[180px] backdrop-blur-sm hover:border-teal-400/60 transition-all transform hover:scale-105">
                    <div className="text-teal-400 font-bold mb-3 text-2xl">🏗️</div>
                    <div className="text-white text-sm font-semibold mb-2">Backend Architect</div>
                    <div className="text-teal-200 text-xs">API Architecture</div>
                  </div>
                </div>

                {/* Database Master */}
                <div className="flex flex-col items-center">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-16 bg-blue-600">
                    <div className="absolute -top-2 left-1/2 w-5 h-5 bg-blue-500 rounded-full -translate-x-1/2"></div>
                  </div>
                  <div className="bg-blue-900/30 border-2 border-blue-500/50 rounded-xl p-6 text-center shadow-2xl min-w-[180px] backdrop-blur-sm hover:border-blue-400/60 transition-all transform hover:scale-105">
                    <div className="text-blue-400 font-bold mb-3 text-2xl">🗄️</div>
                    <div className="text-white text-sm font-semibold mb-2">Database Master</div>
                    <div className="text-blue-200 text-xs">Data Architecture</div>
                  </div>
                </div>
              </div>

              {/* Continue Vertical Line */}
              <div className="flex justify-center mb-16">
                <div className="w-3 h-20 bg-gradient-to-b from-teal-600 to-violet-600"></div>
              </div>

              {/* Medium Level Branch */}
              <div className="flex justify-center mb-14">
                <div className="relative">
                  <div className="h-3 w-[700px] bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 relative">
                    <div className="absolute -left-2 top-1/2 w-5 h-5 bg-violet-500 rounded-full -translate-y-1/2"></div>
                    <div className="absolute left-1/6 -top-2 w-5 h-5 bg-purple-500 rounded-full -translate-y-1/2"></div>
                    <div className="absolute left-2/6 -top-2 w-5 h-5 bg-purple-500 rounded-full -translate-y-1/2"></div>
                    <div className="absolute left-3/6 -top-2 w-5 h-5 bg-pink-500 rounded-full -translate-y-1/2"></div>
                    <div className="absolute left-4/6 -top-2 w-5 h-5 bg-pink-500 rounded-full -translate-y-1/2"></div>
                    <div className="absolute left-5/6 -top-2 w-5 h-5 bg-rose-500 rounded-full -translate-y-1/2"></div>
                    <div className="absolute -right-2 top-1/2 w-5 h-5 bg-rose-500 rounded-full -translate-y-1/2"></div>
                  </div>
                  <div className="absolute -top-20 left-0 right-0 flex justify-center">
                    <div className="text-center">
                      <div className="inline-block bg-violet-900/40 border-2 border-violet-500/60 rounded-xl px-6 py-3">
                        <div className="text-violet-400 font-bold text-lg">MEDIUM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Medium Level Agents */}
              <div className="flex justify-center gap-8 mb-16">
                {/* DevOps Commander */}
                <div className="flex flex-col items-center">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-16 bg-violet-600">
                    <div className="absolute -top-2 left-1/2 w-5 h-5 bg-violet-500 rounded-full -translate-x-1/2"></div>
                  </div>
                  <div className="bg-violet-900/30 border-2 border-violet-500/50 rounded-xl p-5 text-center shadow-2xl min-w-[140px] backdrop-blur-sm hover:border-violet-400/60 transition-all transform hover:scale-105">
                    <div className="text-violet-400 font-bold mb-3 text-xl">🚀</div>
                    <div className="text-white text-sm font-semibold">DevOps Commander</div>
                    <div className="text-violet-200 text-xs">CI/CD</div>
                  </div>
                </div>

                {/* Testing Expert */}
                <div className="flex flex-col items-center">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-16 bg-purple-600">
                    <div className="absolute -top-2 left-1/2 w-5 h-5 bg-purple-500 rounded-full -translate-x-1/2"></div>
                  </div>
                  <div className="bg-purple-900/30 border-2 border-purple-500/50 rounded-xl p-5 text-center shadow-2xl min-w-[140px] backdrop-blur-sm hover:border-purple-400/60 transition-all transform hover:scale-105">
                    <div className="text-purple-400 font-bold mb-3 text-xl">🧪</div>
                    <div className="text-white text-sm font-semibold">Testing Expert</div>
                    <div className="text-purple-200 text-xs">QA Tests</div>
                  </div>
                </div>

                {/* Performance Optimizer */}
                <div className="flex flex-col items-center">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-16 bg-pink-600">
                    <div className="absolute -top-2 left-1/2 w-5 h-5 bg-pink-500 rounded-full -translate-x-1/2"></div>
                  </div>
                  <div className="bg-pink-900/30 border-2 border-pink-500/50 rounded-xl p-5 text-center shadow-2xl min-w-[140px] backdrop-blur-sm hover:border-pink-400/60 transition-all transform hover:scale-105">
                    <div className="text-pink-400 font-bold mb-3 text-xl">⚡</div>
                    <div className="text-white text-sm font-semibold">Performance</div>
                    <div className="text-pink-200 text-xs">Optimizer</div>
                  </div>
                </div>

                {/* Integration Guru */}
                <div className="flex flex-col items-center">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-16 bg-rose-600">
                    <div className="absolute -top-2 left-1/2 w-5 h-5 bg-rose-500 rounded-full -translate-x-1/2"></div>
                  </div>
                  <div className="bg-rose-900/30 border-2 border-rose-500/50 rounded-xl p-5 text-center shadow-2xl min-w-[140px] backdrop-blur-sm hover:border-rose-400/60 transition-all transform hover:scale-105">
                    <div className="text-rose-400 font-bold mb-3 text-xl">🔌</div>
                    <div className="text-white text-sm font-semibold">Integration</div>
                    <div className="text-rose-200 text-xs">Guru</div>
                  </div>
                </div>

                {/* Mobile Wizard */}
                <div className="flex flex-col items-center">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-16 bg-indigo-600">
                    <div className="absolute -top-2 left-1/2 w-5 h-5 bg-indigo-500 rounded-full -translate-x-1/2"></div>
                  </div>
                  <div className="bg-indigo-900/30 border-2 border-indigo-500/50 rounded-xl p-5 text-center shadow-2xl min-w-[140px] backdrop-blur-sm hover:border-indigo-400/60 transition-all transform hover:scale-105">
                    <div className="text-indigo-400 font-bold mb-3 text-xl">📱</div>
                    <div className="text-white text-sm font-semibold">Mobile</div>
                    <div className="text-indigo-200 text-xs">Wizard</div>
                  </div>
                </div>
              </div>

              {/* Continue Vertical Line */}
              <div className="flex justify-center mb-16">
                <div className="w-3 h-20 bg-gradient-to-b from-indigo-600 to-slate-600"></div>
              </div>

              {/* Low Level Branch */}
              <div className="flex justify-center mb-14">
                <div className="relative">
                  <div className="h-3 w-80 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 relative">
                    <div className="absolute -left-2 top-1/2 w-5 h-5 bg-slate-500 rounded-full -translate-y-1/2"></div>
                    <div className="absolute left-1/3 -top-2 w-5 h-5 bg-gray-500 rounded-full -translate-y-1/2"></div>
                    <div className="absolute left-2/3 -top-2 w-5 h-5 bg-zinc-500 rounded-full -translate-y-1/2"></div>
                    <div className="absolute -right-2 top-1/2 w-5 h-5 bg-zinc-500 rounded-full -translate-y-1/2"></div>
                  </div>
                  <div className="absolute -top-20 left-0 right-0 flex justify-center">
                    <div className="text-center">
                      <div className="inline-block bg-slate-900/40 border-2 border-slate-500/60 rounded-xl px-6 py-3">
                        <div className="text-slate-400 font-bold text-lg">LOW</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Low Level Agents */}
              <div className="flex justify-center gap-12">
                {/* AI/ML Specialist */}
                <div className="flex flex-col items-center">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-16 bg-slate-600">
                    <div className="absolute -top-2 left-1/2 w-5 h-5 bg-slate-500 rounded-full -translate-x-1/2"></div>
                  </div>
                  <div className="bg-slate-900/30 border-2 border-slate-500/50 rounded-xl p-5 text-center shadow-2xl min-w-[160px] backdrop-blur-sm hover:border-slate-400/60 transition-all transform hover:scale-105">
                    <div className="text-slate-400 font-bold mb-3 text-xl">🤖</div>
                    <div className="text-white text-sm font-semibold">AI/ML Specialist</div>
                    <div className="text-slate-200 text-xs">ML Models</div>
                  </div>
                </div>

                {/* Docs Master */}
                <div className="flex flex-col items-center">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-16 bg-gray-600">
                    <div className="absolute -top-2 left-1/2 w-5 h-5 bg-gray-500 rounded-full -translate-x-1/2"></div>
                  </div>
                  <div className="bg-gray-900/30 border-2 border-gray-500/50 rounded-xl p-5 text-center shadow-2xl min-w-[160px] backdrop-blur-sm hover:border-gray-400/60 transition-all transform hover:scale-105">
                    <div className="text-gray-400 font-bold mb-3 text-xl">📚</div>
                    <div className="text-white text-sm font-semibold">Docs Master</div>
                    <div className="text-gray-200 text-xs">Documentation</div>
                  </div>
                </div>

                {/* Mobile Wizard (Alternative Position) */}
                <div className="flex flex-col items-center">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-16 bg-zinc-600">
                    <div className="absolute -top-2 left-1/2 w-5 h-5 bg-zinc-500 rounded-full -translate-x-1/2"></div>
                  </div>
                  <div className="bg-zinc-900/30 border-2 border-zinc-500/50 rounded-xl p-5 text-center shadow-2xl min-w-[160px] backdrop-blur-sm hover:border-zinc-400/60 transition-all transform hover:scale-105">
                    <div className="text-zinc-400 font-bold mb-3 text-xl">📱</div>
                    <div className="text-white text-sm font-semibold">Mobile Wizard</div>
                    <div className="text-zinc-200 text-xs">iOS/Android</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Cards Section - Couleurs Harmonisées */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-cyan-900/20 border border-cyan-800/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 font-bold">🔒</span>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold">Niveau CRITIQUE</h4>
                  <p className="text-cyan-500 text-sm">1 Agent</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-cyan-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">Security Guardian</h5>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Surveille toutes les actions</li>
                    <li>• Bloque les opérations dangereuses</li>
                    <li>• Audit continu de sécurité</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-emerald-900/20 border border-emerald-800/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">🟢</span>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold">Niveau HIGH</h4>
                  <p className="text-emerald-500 text-sm">3 Agents</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-emerald-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">UI/UX Designer</h5>
                  <p className="text-gray-400 text-xs">Design System, Wireframes, Prototypes</p>
                </div>
                <div className="bg-emerald-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">Backend Architect</h5>
                  <p className="text-gray-400 text-xs">API Architecture, Microservices</p>
                </div>
                <div className="bg-emerald-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">Database Master</h5>
                  <p className="text-gray-400 text-xs">Data Architecture, Schemas</p>
                </div>
              </div>
            </div>

            <div className="bg-violet-900/20 border border-violet-800/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-violet-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-violet-400 font-bold">🟣</span>
                </div>
                <div>
                  <h4 className="text-violet-400 font-semibold">Niveau MEDIUM</h4>
                  <p className="text-violet-500 text-sm">5 Agents</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-violet-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">DevOps Commander</h5>
                  <p className="text-gray-400 text-xs">CI/CD, Kubernetes, Infrastructure</p>
                </div>
                <div className="bg-violet-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">Testing Expert</h5>
                  <p className="text-gray-400 text-xs">Unit Tests, E2E Tests, QA</p>
                </div>
                <div className="bg-violet-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">Performance Optimizer</h5>
                  <p className="text-gray-400 text-xs">Monitoring, Benchmarks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Level - LOW */}
          <div className="mt-6">
            <div className="bg-slate-900/20 border border-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-slate-400 font-bold">⚪</span>
                </div>
                <div>
                  <h4 className="text-slate-400 font-semibold">Niveau LOW</h4>
                  <p className="text-slate-500 text-sm">3 Agents</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">AI/ML Specialist</h5>
                  <p className="text-gray-400 text-xs">ML Models, NLP, Vision</p>
                </div>
                <div className="bg-slate-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">Docs Master</h5>
                  <p className="text-gray-400 text-xs">API Docs, Guides, README</p>
                </div>
                <div className="bg-slate-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">Mobile Wizard</h5>
                  <p className="text-gray-400 text-xs">iOS/Android, React Native</p>
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
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Démarrage Rapide (20 Minutes)</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-gray-400 text-sm font-medium mb-2">Étape 1: Structure de Base (2 min)</div>
              <h4 className="text-xl font-semibold text-white mb-3">Création de l'Arborescence</h4>
              <div className="bg-black rounded-lg p-4 font-mono text-sm text-gray-300 mb-4">
                <div>mkdir -p .claude/agents scripts</div>
              </div>
              <p className="text-gray-400 text-sm">
                Créez la structure de répertoires nécessaire pour votre swarm.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-gray-400 text-sm font-medium mb-2">Étape 2: Configuration Rapide (8 min)</div>
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
              <div className="text-gray-400 text-sm font-medium mb-2">Étape 3: Lancement (10 min)</div>
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
            <h4 className="text-xl font-semibold text-green-400 mb-2">✅ Résultat en 20 minutes !</h4>
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
              <a href="https://github.com/DeamonDev888/SWARM-INTELLIGENCE.git" target="_blank" className="text-green-400 hover:text-green-300 text-sm">
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
                <li><a href="https://github.com/DeamonDev888/SWARM-INTELLIGENCE.git" target="_blank" className="hover:text-white transition-colors">GitHub Repository</a></li>
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
            <p>Swarm Intelligence DeaMoNDeV888</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App