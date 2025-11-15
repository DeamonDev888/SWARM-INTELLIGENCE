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
                onClick={() => window.open('https://hackmd.io/@1-f9TrSqR0iVfHGkGYO3zw/SkR1rBIx-l', '_blank')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Documentation
              </button>
              <button
                onClick={() => window.open('https://discord.gg/Jt83jBebsk', '_blank')}
                className="bg-black text-white px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-900 transition-colors"
              >
                Communauté
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
                onClick={() => window.open('https://hackmd.io/@1-f9TrSqR0iVfHGkGYO3zw/SkR1rBIx-l', '_blank')}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mb-2"
              >
                Documentation
              </button>
              <button
                onClick={() => window.open('https://discord.gg/Jt83jBebsk', '_blank')}
                className="w-full bg-black text-white px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-900"
              >
                Communauté
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
            <span>🚀 Le Secret de l'IA Multi-Agent Révelé</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Swarm
            <span className="text-blue-400"> Intelligence</span>
          </h2>

          <p className="text-xl text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
            L'IA Multi-Agent qui Révolutionne Votre Productivité.
            Orchestration intelligente de sous-agents spécialisés pour transformer votre workflow de développement.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 border border-green-700 rounded-full text-sm text-green-300 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>🚀 5 MODES IA • 2 MODÈLES GRATUITS • PLATEFORME PRÊTE À L'EMPLOI</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => window.open('https://github.com/DeamonDev888/SWARM-INTELLIGENCE/blob/main/README.md', '_blank')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Découvrir le Secret
            </button>
            <button
              onClick={() => window.open('https://discord.gg/Jt83jBebsk', '_blank')}
              className="bg-gray-800 text-white px-8 py-3 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors font-medium"
            >
              Rejoindre Discord
            </button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <div className="text-3xl font-bold text-white">90%</div>
              <div className="text-gray-400">Plus Rapide</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">12+</div>
              <div className="text-gray-400">Agents Spécialisés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">20</div>
              <div className="text-gray-400">Minutes de Déploiement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-gray-400">Gratuit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Les Modèles Secrêts de l'IA</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                  <h4 className="text-xl font-semibold text-white mb-2">minimax/minimax-m2:free</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    MiniMax: MiniMax M2 (gratuit) - Modèle de nouvelle génération optimisé pour le reasoning.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">204K contexte</span>
                    <span className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">$0.00/$0.00</span>
                    <span className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">Reasoning</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    <strong>Utilisation:</strong> Architecture logicielle, planning de projets complexes
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

            {/* xAI Grok Card */}
            <a
              href="https://x.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-700/30 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:border-green-600/50 hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-green-600/20 rounded-lg p-2 flex-shrink-0">
                  <img
                    src="/asset/image.png"
                    alt="xAI Grok Model"
                    className="w-full h-full object-contain rounded"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full hidden items-center justify-center text-green-400 text-2xl font-bold">
                    GROK
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-2">x-ai/grok-code-fast-1</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    xAI: Grok Code Fast 1 (gratuit) - Modèle de codage ultra-rapide pour développement moderne.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-green-600/20 text-green-300 text-xs rounded-full">256K contexte</span>
                    <span className="px-2 py-1 bg-green-600/20 text-green-300 text-xs rounded-full">$0.00/$0.00</span>
                    <span className="px-2 py-1 bg-green-600/20 text-green-300 text-xs rounded-full">Cache, Reasoning</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    <strong>Utilisation:</strong> Développement rapide, génération de code, outils de développement
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-green-400 text-xs font-semibold flex items-center justify-end gap-1">
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
              Ces modèles sont directement intégrés dans KiloCode CLI pour optimiser vos workflows de développement.
              Profitez de la puissance de l'IA avancée avec une interface simple et efficace.
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
              <h4 className="text-2xl font-semibold text-white mb-4">Qu'est-ce que KiloCode CLI ?</h4>
              <p className="text-gray-400 leading-relaxed mb-4">
                KiloCode CLI est un outil de ligne de commande avancé qui permet d'interagir avec des modèles d'IA
                pour l'assistance au développement logiciel. L'une de ses fonctionnalités les plus puissantes est le
                système de sous-agents, qui permet de déléguer des tâches spécifiques à des agents spécialisés.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Que vous soyez développeur, architecte, ou chef de projet, KiloCode CLI s'adapte à votre workflow
                avec 5 modes de fonctionnement optimisés pour chaque type de tâche de développement.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-white mb-4">Pourquoi Choisir KiloCode CLI ?</h4>
              <div className="space-y-4">
                {[
                  { title: "5 Modes Spécialisés", desc: "Architect, Code, Ask, Debug, Orchestrator", impact: "Productivité optimale" },
                  { title: "2 Modèles Gratuits", desc: "xAI Grok et MiniMax M2 sans coût", impact: "$0.00 par utilisation" },
                  { title: "256K Contexte", desc: "Fenêtre de contexte massive pour projets complexes", impact: "Projets à grande échelle" },
                  { title: "CLI Intégré", desc: "Interface simple et puissante", impact: "Workflow simplifié" },
                  { title: "Configuration Flexible", desc: "Support de multiples providers IA", impact: "Adaptabilité totale" },
                  { title: "Mode Autonome", desc: "Support CI/CD et automatisation", impact: "Intégration parfaite" }
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
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Modes de Fonctionnement</h3>

          {/* Architecture Graphique - Structure Compacte sans Superposition */}
          <div className="bg-gray-900/50 rounded-xl p-10 mb-16">
            <div className="space-y-8">
              {/* KiloCode CLI Central */}
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border-2 border-indigo-500/50 rounded-xl px-10 py-5 shadow-2xl backdrop-blur-sm">
                  <div className="text-indigo-300 font-bold text-2xl flex items-center gap-4">
                    <span className="text-4xl">⚡</span>
                    <span>KILOCODE CLI</span>
                  </div>
                </div>
              </div>

              {/* Architect Mode */}
              <div className="relative">
                <div className="flex justify-center items-center gap-8">
                  <div className="text-center">
                    <div className="inline-block bg-cyan-900/40 border-2 border-cyan-500/60 rounded-xl px-6 py-3 mb-4">
                      <div className="text-cyan-400 font-bold text-lg flex items-center gap-3">
                        <span className="text-2xl">🏗️</span>
                        <span>ARCHITECT</span>
                      </div>
                    </div>
                    <div className="bg-cyan-900/30 border-2 border-cyan-500/50 rounded-xl p-8 text-center shadow-2xl min-w-[200px] backdrop-blur-sm hover:border-cyan-400/60 transition-all transform hover:scale-105">
                      <div className="text-cyan-400 font-bold mb-4 text-3xl">🏗️</div>
                      <div className="text-white text-base font-semibold mb-3">Mode Architect</div>
                      <div className="text-cyan-200 text-sm italic">Conception et architecture logicielle</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code & Ask Modes */}
              <div className="relative">
                <div className="text-center mb-4">
                  <div className="inline-block bg-emerald-900/40 border-2 border-emerald-500/60 rounded-xl px-6 py-3">
                    <div className="text-emerald-400 font-bold text-lg">HIGH PRIORITY</div>
                  </div>
                </div>
                <div className="flex justify-center gap-16">
                  <div className="bg-emerald-900/30 border-2 border-emerald-500/50 rounded-xl p-6 text-center shadow-2xl min-w-[180px] backdrop-blur-sm hover:border-emerald-400/60 transition-all transform hover:scale-105">
                    <div className="text-emerald-400 font-bold mb-3 text-2xl">💻</div>
                    <div className="text-white text-sm font-semibold mb-2">Mode Code</div>
                    <div className="text-emerald-200 text-xs">Écriture & Modification</div>
                  </div>
                  <div className="bg-teal-900/30 border-2 border-teal-500/50 rounded-xl p-6 text-center shadow-2xl min-w-[180px] backdrop-blur-sm hover:border-teal-400/60 transition-all transform hover:scale-105">
                    <div className="text-teal-400 font-bold mb-3 text-2xl">❓</div>
                    <div className="text-white text-sm font-semibold mb-2">Mode Ask</div>
                    <div className="text-teal-200 text-xs">Questions & Réponses</div>
                  </div>
                </div>
              </div>

              {/* Debug & Orchestrator Modes */}
              <div className="relative">
                <div className="text-center mb-4">
                  <div className="inline-block bg-violet-900/40 border-2 border-violet-500/60 rounded-xl px-6 py-3">
                    <div className="text-violet-400 font-bold text-lg">SPECIALIZED</div>
                  </div>
                </div>
                <div className="flex justify-center gap-8">
                  <div className="bg-violet-900/30 border-2 border-violet-500/50 rounded-xl p-5 text-center shadow-2xl min-w-[140px] backdrop-blur-sm hover:border-violet-400/60 transition-all transform hover:scale-105">
                    <div className="text-violet-400 font-bold mb-3 text-xl">🔧</div>
                    <div className="text-white text-sm font-semibold">Mode Debug</div>
                    <div className="text-violet-200 text-xs">Diagnostic & Résolution</div>
                  </div>
                  <div className="bg-purple-900/30 border-2 border-purple-500/50 rounded-xl p-5 text-center shadow-2xl min-w-[140px] backdrop-blur-sm hover:border-purple-400/60 transition-all transform hover:scale-105">
                    <div className="text-purple-400 font-bold mb-3 text-xl">🎯</div>
                    <div className="text-white text-sm font-semibold">Mode Orchestrator</div>
                    <div className="text-purple-200 text-xs">Coordination Avancée</div>
                  </div>
                  <div className="bg-pink-900/30 border-2 border-pink-500/50 rounded-xl p-5 text-center shadow-2xl min-w-[140px] backdrop-blur-sm hover:border-pink-400/60 transition-all transform hover:scale-105">
                    <div className="text-pink-400 font-bold mb-3 text-xl">⚙️</div>
                    <div className="text-white text-sm font-semibold">Debug OS</div>
                    <div className="text-pink-200 text-xs">Diagnostic Système</div>
                  </div>
                  <div className="bg-rose-900/30 border-2 border-rose-500/50 rounded-xl p-5 text-center shadow-2xl min-w-[140px] backdrop-blur-sm hover:border-rose-400/60 transition-all transform hover:scale-105">
                    <div className="text-rose-400 font-bold mb-3 text-xl">⌨️</div>
                    <div className="text-white text-sm font-semibold">Debug Keyboard</div>
                    <div className="text-rose-200 text-xs">Diagnostic Périphériques</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Cards Section - Modes CLI */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-cyan-900/20 border border-cyan-800/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 font-bold">🏗️</span>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold">Mode Architect</h4>
                  <p className="text-cyan-500 text-sm">-m architect</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-cyan-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">Usage Principal</h5>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Conception d'architecture logicielle</li>
                    <li>• Planification de structure de projet</li>
                    <li>• Design patterns et bonnes pratiques</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-emerald-900/20 border border-emerald-800/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">💻</span>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold">Mode Code</h4>
                  <p className="text-emerald-500 text-sm">-m code</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-emerald-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">Fonctions</h5>
                  <p className="text-gray-400 text-xs">Génération et modification de code</p>
                </div>
                <div className="bg-emerald-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">Mode Ask</h5>
                  <p className="text-gray-400 text-xs">Questions et assistance générale</p>
                </div>
              </div>
            </div>

            <div className="bg-violet-900/20 border border-violet-800/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-violet-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-violet-400 font-bold">🔧</span>
                </div>
                <div>
                  <h4 className="text-violet-400 font-semibold">Modes Spécialisés</h4>
                  <p className="text-violet-500 text-sm">Debug & Orchestrator</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-violet-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">Debug</h5>
                  <p className="text-gray-400 text-xs">Diagnostic système et résolution</p>
                </div>
                <div className="bg-violet-900/10 rounded-lg p-3">
                  <h5 className="text-white font-medium mb-2">Orchestrator</h5>
                  <p className="text-gray-400 text-xs">Coordination de tâches complexes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Espace supplémentaire après la section Niveau LOW */}
          <div className="mb-12"></div>

          <div className="bg-gray-900 rounded-xl p-8 mb-16">
            <h4 className="text-xl font-semibold text-white mb-6 text-center">Configuration des Modes</h4>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="pb-3 text-gray-400">Mode CLI</th>
                    <th className="pb-3 text-gray-400">Commande</th>
                    <th className="pb-3 text-gray-400">Usage</th>
                    <th className="pb-3 text-gray-400">Options</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-white font-medium">Architect</td>
                    <td className="py-3 font-mono text-sm">-m architect</td>
                    <td className="py-3">Architecture logicielle, design patterns</td>
                    <td className="py-3">--auto, --parallel</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-white font-medium">Code</td>
                    <td className="py-3 font-mono text-sm">-m code</td>
                    <td className="py-3">Génération et modification de code</td>
                    <td className="py-3">--auto, --parallel</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-white font-medium">Ask</td>
                    <td className="py-3 font-mono text-sm">-m ask</td>
                    <td className="py-3">Questions et assistance générale</td>
                    <td className="py-3">--auto</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 text-white font-medium">Debug</td>
                    <td className="py-3 font-mono text-sm">debug os/keyboard</td>
                    <td className="py-3">Diagnostic et résolution de problèmes</td>
                    <td className="py-3">--continue</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-white font-medium">Orchestrator</td>
                    <td className="py-3 font-mono text-sm">-m orchestrator</td>
                    <td className="py-3">Coordination de workflows complexes</td>
                    <td className="py-3">--parallel, -w</td>
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
              <div className="text-gray-400 text-sm font-medium mb-2">Étape 1: Configuration (1 min)</div>
              <h4 className="text-xl font-semibold text-white mb-3">Configuration du Provider</h4>
              <div className="bg-black rounded-lg p-4 font-mono text-sm text-gray-300 mb-4">
                <div>export KILOCODE_PROVIDER=minimax</div>
                <div>export KILOCODE_MODEL=minimax/minimax-m2:free</div>
              </div>
              <p className="text-gray-400 text-sm">
                Configurez votre provider IA et modèle préféré.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-gray-400 text-sm font-medium mb-2">Étape 2: Test Installation (2 min)</div>
              <h4 className="text-xl font-semibold text-white mb-3">Test de Connexion</h4>
              <div className="bg-black rounded-lg p-4 font-mono text-sm text-gray-300 mb-4 overflow-x-auto">
                <div>kilocode -m ask --auto</div>
                <div>"Confirmer que KiloCode fonctionne"</div>
              </div>
              <p className="text-gray-400 text-sm">
                Vérifiez que votre installation fonctionne correctement.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-gray-400 text-sm font-medium mb-2">Étape 3: Premier Usage (2 min)</div>
              <h4 className="text-xl font-semibold text-white mb-3">Premier Code</h4>
              <div className="bg-black rounded-lg p-4 font-mono text-sm text-gray-300 mb-4">
                <div>kilocode -m code</div>
                <div>"Créer une fonction hello world"</div>
              </div>
              <p className="text-gray-400 text-sm">
                Lancez votre première génération de code avec KiloCode CLI.
              </p>
            </div>
          </div>

          <div className="bg-green-900/20 border border-green-800 rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold text-green-400 mb-2">✅ KiloCode CLI prêt en 5 minutes !</h4>
            <p className="text-gray-300">
              Votre environnement de développement IA est maintenant configuré et opérationnel.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Cas d'Usage Pratiques</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Architecture Logicielle",
                description: "Conception d'architecture pour nouveaux projets",
                mode: "kilocode -m architect",
                example: "Concevoir l'architecture d'une app React avec API REST"
              },
              {
                title: "Génération de Code",
                description: "Création et modification de code source",
                mode: "kilocode -m code",
                example: "Créer une fonction de validation d'email en JavaScript"
              },
              {
                title: "Assistance Développement",
                description: "Questions et conseils de développement",
                mode: "kilocode -m ask",
                example: "Quelles sont les meilleures pratiques pour l'optimisation React ?"
              },
              {
                title: "Debug & Diagnostic",
                description: "Résolution de problèmes système",
                mode: "kilocode debug os",
                example: "Diagnostic complet du système et optimisation"
              },
              {
                title: "Orchestration Complexe",
                description: "Coordination de workflows de développement",
                mode: "kilocode -m orchestrator",
                example: "Migrer une base de données de MySQL vers PostgreSQL"
              },
              {
                title: "Développement Itératif",
                description: "Amélioration continue avec continuation",
                mode: "kilocode --continue -m code",
                example: "Améliorer la gestion d'erreurs dans la fonction validateUser"
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h4 className="text-xl font-semibold text-white mb-2">{useCase.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{useCase.description}</p>
                <div className="text-xs text-gray-500 mb-2">
                  <strong>Commande:</strong> <code className="bg-gray-800 px-2 py-1 rounded">{useCase.mode}</code>
                </div>
                <div className="text-xs text-blue-400">
                  <strong>Exemple:</strong> {useCase.example}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-lg p-8 text-center">
            <h4 className="text-2xl font-semibold text-white mb-4">Configuration Flexible</h4>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              KiloCode CLI s'adapte à tous vos workflows de développement.
              Configurez simplement vos variables d'environnement et vos modèles préférés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://github.com/DeamonDev888/SWARM-INTELLIGENCE/blob/main/README.md', '_blank')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Documentation Officielle
              </button>
              <button
                onClick={() => window.open('https://community.kilocode.org/', '_blank')}
                className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-medium"
              >
                Communauté
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
              <p className="text-gray-400 text-sm mb-4">Guide complet d'utilisation CLI</p>
              <a href="https://github.com/DeamonDev888/SWARM-INTELLIGENCE/blob/main/README.md" target="_blank" className="text-blue-400 hover:text-blue-300 text-sm">
                Consulter →
              </a>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Communauté</h4>
              <p className="text-gray-400 text-sm mb-4">Support et échanges techniques</p>
              <a href="https://community.kilocode.org/" target="_blank" className="text-purple-400 hover:text-purple-300 text-sm">
                Rejoindre →
              </a>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Exemples</h4>
              <p className="text-gray-400 text-sm mb-4">Scripts et exemples pratiques</p>
              <a href="https://github.com/Kilo-Org/kilocode-examples" target="_blank" className="text-green-400 hover:text-green-300 text-sm">
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
              onClick={() => window.open('/', '_self')}
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
                  <span className="text-white font-bold">KC</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">KiloCode CLI</h4>
                  <p className="text-sm text-gray-500">AI Development Interface</p>
                </div>
              </div>
              <p className="text-gray-500">Interface de ligne de commande avancée pour l'IA de développement</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Liens Rapides</h4>
              <ul className="space-y-2">
                <li><a href="https://github.com/DeamonDev888/SWARM-INTELLIGENCE/blob/main/README.md" target="_blank" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="https://community.kilocode.org/" target="_blank" className="hover:text-white transition-colors">Communauté</a></li>
                <li><a href="https://github.com/Kilo-Org/kilocode-examples" target="_blank" className="hover:text-white transition-colors">Exemples</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Informations</h4>
              <ul className="space-y-2 text-gray-500">
                <li>Version: 2.1.0+</li>
                <li>Mise à jour: 2025-11-15</li>
                <li>Licence: MIT</li>
                <li>2 Modèles Gratuits • CLI Prêt</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>KiloCode CLI - Transformez votre workflow de développement avec l'IA</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
