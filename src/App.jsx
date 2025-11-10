import { useState, useEffect } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">SI</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Swarm Intelligence</h1>
                <p className="text-xs text-slate-600">Multi-Agent Platform</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">How it Works</a>
              <a href="#use-cases" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Use Cases</a>
              <a href="#getting-started" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Get Started</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl">
                Launch Swarm
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-2 space-y-1">
              <a href="#features" className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50">How it Works</a>
              <a href="#use-cases" className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50">Use Cases</a>
              <a href="#getting-started" className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50">Get Started</a>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
                Launch Swarm
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            System Online - Agents Ready
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Construire et Déployer
            <br />
            <span className="text-blue-600">Une Armée d'Agents</span>
            <br />
            en 20 Minutes
          </h2>

          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Un swarm d'agents est une orchestration de multiples agents spécialisés qui travaillent de concert
            pour accomplir n'importe quelle mission complexe. Imaginez une équipe de 10+ experts virtuels,
            chacun devenant une autorité dans son domaine.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
              🚀 90% Plus Rapide
            </div>
            <div className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">
              🎯 Qualité Professionnelle
            </div>
            <div className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium">
              ⚡ 24h+ Économisées/Semaine
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('#getting-started', '_self')}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Commencer Maintenant →
            </button>
            <button
              onClick={() => window.open('https://github.com/DeamonDev888/SWARM-INTELLIGENCE', '_blank')}
              className="bg-white text-slate-700 px-8 py-4 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-lg border border-slate-200"
            >
              Voir sur GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
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
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h4>
                <p className="text-slate-600 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="text-blue-600 font-semibold">{benefit.benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
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
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl font-bold text-blue-600 mb-4">{step.step}</div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-slate-600 mb-4">{step.description}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {step.time}
                  </div>
                </div>

                {/* Connection lines */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
                )}
              </div>
            ))}
          </div>

          {/* Architecture Diagram */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold text-slate-900 mb-6 text-center">Architecture du Swarm</h4>
            <div className="bg-slate-50 p-6 rounded-lg font-mono text-sm text-slate-700 text-center">
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
      <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Domaines d'Application
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                domain: "💰 Finance & Trading",
                agents: "Analyste Quantitatif, Risk Manager, Chercheur Marché",
                color: "from-green-50 to-green-100"
              },
              {
                domain: "🏥 Santé & Médical",
                agents: "Chercheur Médical, IA Diagnostic, Expert Conformité",
                color: "from-blue-50 to-blue-100"
              },
              {
                domain: "🏢 Entreprise & Stratégie",
                agents: "Expert Marché, Analyste Finance, Stratégiste",
                color: "from-purple-50 to-purple-100"
              },
              {
                domain: "🎓 Éducation & Pédagogie",
                agents: "Designer Pédagogique, Créateur Contenu, Expert Évaluation",
                color: "from-yellow-50 to-yellow-100"
              },
              {
                domain: "🎨 Créatif & Marketing",
                agents: "Stratégiste Marque, Rédacteur, Expert Réseaux Sociaux",
                color: "from-pink-50 to-pink-100"
              },
              {
                domain: "🏭 Industrie & Manufacturing",
                agents: "Ingénieur Process, Responsable Qualité, Expert Logistique",
                color: "from-slate-50 to-slate-100"
              }
            ].map((useCase, index) => (
              <div key={index} className={`bg-gradient-to-br ${useCase.color} p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300`}>
                <div className="text-2xl mb-3">{useCase.domain}</div>
                <p className="text-slate-700 text-sm leading-relaxed">{useCase.agents}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600">
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
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-blue-200 text-sm font-medium mb-2">{step.step}</div>
                <h4 className="text-xl font-semibold text-white mb-3">{step.title}</h4>
                <p className="text-blue-100 mb-4">{step.description}</p>
                <div className="bg-black/30 rounded-lg p-3 font-mono text-xs text-blue-300">
                  {step.code}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h4 className="text-2xl font-bold text-white mb-4">Template Universel</h4>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Adaptez le swarm à VOTRE domaine spécifique en 5 minutes. Le framework fonctionne pour TOUS les secteurs d'activité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://github.com/DeamonDev888/SWARM-INTELLIGENCE', '_blank')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-slate-50 transition-colors font-semibold"
              >
                Télécharger sur GitHub →
              </button>
              <button
                onClick={() => window.open('#getting-started', '_self')}
                className="bg-transparent text-white px-8 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition-colors font-semibold"
              >
                Voir Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-slate-600">Plus Rapide</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-slate-600">Agents Spécialisés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">20 min</div>
              <div className="text-slate-600">Déploiement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-slate-600">Adaptable</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SI</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Swarm Intelligence</h4>
                  <p className="text-sm text-slate-400">Multi-Agent Platform</p>
                </div>
              </div>
              <p className="text-slate-400">L'IA Multi-Agent qui Révolutionne Votre Productivité</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Ressources</h4>
              <ul className="space-y-2">
                <li><a href="https://github.com/DeamonDev888/SWARM-INTELLIGENCE" target="_blank" className="hover:text-blue-400 transition-colors">Documentation</a></li>
                <li><a href="https://discord.gg/Jt83jBebsk" target="_blank" className="hover:text-blue-400 transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Exemples</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Info</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Version: 2.0</li>
                <li>Mise à jour: 2025-11-09</li>
                <li>Licence: MIT</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>🤖 Généré avec Claude Code - Auto Bug Fixer</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
