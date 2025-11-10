import { useState, useEffect } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center shadow-2xl border border-gray-700">
                <span className="text-white font-bold text-lg">SI</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Swarm Intelligence</h1>
                <p className="text-xs text-gray-400">Multi-Agent Platform</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors font-medium">How it Works</a>
              <a href="#use-cases" className="text-gray-400 hover:text-white transition-colors font-medium">Use Cases</a>
              <a href="#getting-started" className="text-gray-400 hover:text-white transition-colors font-medium">Get Started</a>
              <button
                onClick={() => window.open('https://discord.gg/Jt83jBebsk', '_blank')}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-2xl hover:shadow-2xl mr-4"
              >
                <span className="flex items-center gap-2">
                  💬 Discord
                </span>
              </button>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors font-medium shadow-2xl hover:shadow-2xl border border-gray-800">
                Launch Swarm
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:bg-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 shadow-2xl">
            <div className="px-4 py-2 space-y-1">
              <a href="#features" className="block px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white">How it Works</a>
              <a href="#use-cases" className="block px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white">Use Cases</a>
              <a href="#getting-started" className="block px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white">Get Started</a>
              <button
                onClick={() => window.open('https://discord.gg/Jt83jBebsk', '_blank')}
                className="w-full bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 font-medium shadow-xl mb-2"
              >
                <span className="flex items-center justify-center gap-2">
                  💬 Discord
                </span>
              </button>
              <button className="w-full bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 font-medium shadow-xl border border-gray-800">
                Launch Swarm
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/50 text-green-400 rounded-full text-sm font-medium mb-6 border border-green-800/30 shadow-2xl">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            System Online - Agents Ready
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Construire et Déployer
            <br />
            <span className="text-gradient">Une Armée d'Agents</span>
            <br />
            en 20 Minutes
          </h2>

          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Un swarm d'agents est une orchestration de multiples agents spécialisés qui travaillent de concert
            pour accomplir n'importe quelle mission complexe. Imaginez une équipe de 10+ experts virtuels,
            chacun devenant une autorité dans son domaine.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="px-4 py-2 bg-gray-900 text-gray-300 rounded-lg text-sm font-medium border border-gray-800 shadow-xl">
              🚀 90% Plus Rapide
            </div>
            <div className="px-4 py-2 bg-gray-900 text-gray-300 rounded-lg text-sm font-medium border border-gray-800 shadow-xl">
              🎯 Qualité Professionnelle
            </div>
            <div className="px-4 py-2 bg-gray-900 text-gray-300 rounded-lg text-sm font-medium border border-gray-800 shadow-xl">
              ⚡ 24h+ Économisées/Semaine
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('#getting-started', '_self')}
              className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors font-semibold text-lg shadow-2xl hover:shadow-2xl transform hover:-translate-y-1 border border-gray-800"
            >
              Commencer Maintenant →
            </button>
            <button
              onClick={() => window.open('https://github.com/DeamonDev888/SWARM-INTELLIGENCE', '_blank')}
              className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors font-semibold text-lg border border-gray-700 shadow-2xl"
            >
              Voir sur GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Pourquoi Choisir le Swarm Intelligence ?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Parallélisme",
                description: "10+ agents spécialisés travaillant simultanément",
                benefit: "90% plus rapide"
              },
              {
                icon: "🎯",
                title: "Expertise",
                description: "Chaque agent devient un expert dans son domaine",
                benefit: "Qualité professionnelle"
              },
              {
                icon: "💰",
                title: "Efficacité",
                description: "Automatisation des tâches répétitives",
                benefit: "Plus de 24h économisées/semaine"
              },
              {
                icon: "🔄",
                title: "Coordination",
                description: "Synchronisation intelligente sans intervention",
                benefit: "Flux de travail optimisé"
              },
              {
                icon: "📈",
                title: "Scalabilité",
                description: "Ajoutez/retirez agents selon la mission",
                benefit: "Adaptabilité totale"
              },
              {
                icon: "🌍",
                title: "Polyvalence",
                description: "Fonctionne dans TOUS les domaines",
                benefit: "Solution universelle"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-3">{benefit.title}</h4>
                <p className="text-gray-400 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="text-gray-300 font-semibold">{benefit.benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Comment Ça Marche
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: "01",
                title: "Configuration Express",
                description: "Configurez votre swarm en quelques minutes avec nos templates prêts à l'emploi",
                time: "2 minutes"
              },
              {
                step: "02",
                title: "Lancement Intelligent",
                description: "Déployez automatiquement votre armée d'agents spécialisés",
                time: "30 secondes"
              },
              {
                step: "03",
                title: "Execution Optimisée",
                description: "Surveillez et optimisez les performances en temps réel",
                time: "Continue"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900 p-8 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 border border-gray-800">
                  <div className="text-3xl font-bold text-gray-400 mb-4">{step.step}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-400 mb-4">{step.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {step.time}
                  </div>
                </div>

                {/* Connection lines */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-700"></div>
                )}
              </div>
            ))}
          </div>

          {/* Architecture Diagram */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800">
            <h4 className="text-xl font-semibold text-white mb-6 text-center">Architecture du Swarm</h4>
            <div className="bg-black p-6 rounded-lg font-mono text-sm text-gray-400 text-center border border-gray-800">
              <div className="mb-4">🏛️ ORCHESTRATEUR CENTRAL</div>
              <div className="flex justify-center gap-8 mb-4">
                <div>🔒 Security Guardian</div>
                <div>⚡ Critical Priority</div>
              </div>
              <div className="flex justify-center gap-4 flex-wrap">
                <div>🎨 Frontend</div>
                <div>🏗️ Backend</div>
                <div>🗄️ Database</div>
                <div>🚀 DevOps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Domaines d'Application
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                domain: "💰 Finance & Trading",
                agents: "Analyste Quantitatif, Risk Manager, Chercheur Marché",
                color: "from-gray-900 to-black"
              },
              {
                domain: "🏥 Santé & Médical",
                agents: "Chercheur Médical, IA Diagnostic, Expert Conformité",
                color: "from-gray-900 to-black"
              },
              {
                domain: "🏢 Entreprise & Stratégie",
                agents: "Expert Marché, Analyste Finance, Stratégiste",
                color: "from-gray-900 to-black"
              },
              {
                domain: "🎓 Éducation & Pédagogie",
                agents: "Designer Pédagogique, Créateur Contenu, Expert Évaluation",
                color: "from-gray-900 to-black"
              },
              {
                domain: "🎨 Créatif & Marketing",
                agents: "Stratégiste Marque, Rédacteur, Expert Réseaux Sociaux",
                color: "from-gray-900 to-black"
              },
              {
                domain: "🏭 Industrie & Manufacturing",
                agents: "Ingénieur Process, Responsable Qualité, Expert Logistique",
                color: "from-gray-900 to-black"
              }
            ].map((useCase, index) => (
              <div key={index} className={`bg-gradient-to-br ${useCase.color} p-6 rounded-xl border border-gray-800 hover:shadow-2xl transition-all duration-300`}>
                <div className="text-2xl mb-3">{useCase.domain}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{useCase.agents}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-12">
            Démarrage Rapide (5 Minutes)
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: "Étape 1",
                title: "Clone Repository",
                description: "Téléchargez le framework Swarm Intelligence",
                code: "git clone https://github.com/DeamonDev888/SWARM-INTELLIGENCE.git"
              },
              {
                step: "Étape 2",
                title: "Configuration Express",
                description: "Configurez vos agents spécialisés",
                code: "npm install && npm run configure"
              },
              {
                step: "Étape 3",
                title: "Lancement",
                description: "Déployez votre armée d'agents",
                code: "claude --agents @claude-agents.json --swarm-mode parallel"
              }
            ].map((step, index) => (
              <div key={index} className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-2xl">
                <div className="text-gray-400 text-sm font-medium mb-2">{step.step}</div>
                <h4 className="text-xl font-semibold text-white mb-3">{step.title}</h4>
                <p className="text-gray-500 mb-4">{step.description}</p>
                <div className="bg-black/50 rounded-lg p-3 font-mono text-xs text-gray-400 border border-gray-800">
                  {step.code}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-2xl">
            <h4 className="text-2xl font-bold text-white mb-4">Template Universel</h4>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Adaptez le swarm à VOTRE domaine spécifique en 5 minutes. Le framework fonctionne pour TOUS les secteurs d'activité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://github.com/DeamonDev888/SWARM-INTELLIGENCE', '_blank')}
                className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors font-semibold border border-gray-800 shadow-xl"
              >
                Télécharger sur GitHub →
              </button>
              <button
                onClick={() => window.open('https://discord.gg/Jt83jBebsk', '_blank')}
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold shadow-xl"
              >
                <span className="flex items-center gap-2">
                  💬 Rejoindre Discord
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">90%</div>
              <div className="text-gray-400">Plus Rapide</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-300 mb-2">10+</div>
              <div className="text-gray-400">Agents Spécialisés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-300 mb-2">20 min</div>
              <div className="text-gray-400">Déploiement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-300 mb-2">100%</div>
              <div className="text-gray-400">Adaptable</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center border border-gray-700">
                  <span className="text-white font-bold text-lg">SI</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Swarm Intelligence</h4>
                  <p className="text-sm text-gray-500">Multi-Agent Platform</p>
                </div>
              </div>
              <p className="text-gray-500">L'IA Multi-Agent qui Révolutionne Votre Productivité</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Ressources</h4>
              <ul className="space-y-2">
                <li><a href="https://github.com/DeamonDev888/SWARM-INTELLIGENCE" target="_blank" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="https://discord.gg/Jt83jBebsk" target="_blank" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Exemples</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Info</h4>
              <ul className="space-y-2 text-gray-500">
                <li>Version: 2.0</li>
                <li>Mise à jour: 2025-11-09</li>
                <li>Licence: MIT</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>🤖 Généré avec Claude Code - Mode Sombre Professionnel</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
