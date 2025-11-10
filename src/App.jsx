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
              <button
                onClick={() => window.open('https://www.npmjs.com/package/@anthropic-ai/claude-code', '_blank')}
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors font-medium shadow-2xl hover:shadow-2xl border border-gray-800"
              >
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
              <button
                onClick={() => window.open('https://www.npmjs.com/package/@anthropic-ai/claude-code', '_blank')}
                className="w-full bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 font-medium shadow-xl border border-gray-800"
              >
                Launch Swarm
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Hype badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 rounded-full text-sm font-bold mb-8 border border-purple-500/30 shadow-2xl backdrop-blur-sm animate-bounce">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              🔥 REJOIGNEZ LA RÉVOLUTION - 1,247+ MEMBRES ACTIFS
            </span>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          </div>

          {/* Main headline with emoji effects */}
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            <span className="block mb-2 animate-pulse">⚡</span>
            L'ÈRE DES
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
              AGENTS IA
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-gray-300 font-bold">
              EST ARRIVÉE 🚀
            </span>
          </h2>

          {/* Compelling description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            <span className="text-purple-400 font-bold">Imaginez:</span> Une armée d'agents IA qui travaillent
            <span className="text-blue-400 font-bold"> 24/7</span> pour vous.
            <br />
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            10x PLUS RAPIDE • 100x PLUS PUISSANT
            </span>
          </p>

          {/* Free Service & Support Info */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 text-green-300 rounded-full text-sm font-bold border border-green-500/30 shadow-2xl backdrop-blur-sm">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-bold text-lg">💎 100% GRATUIT • SUPPORT TECHNIQUE 24/7</span>
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Social proof stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="group">
              <div className="text-3xl font-black text-purple-400 group-hover:scale-110 transition-transform">
                🔥 2.8K+
              </div>
              <div className="text-gray-400 font-medium">Discord Members</div>
            </div>
            <div className="group">
              <div className="text-3xl font-black text-blue-400 group-hover:scale-110 transition-transform">
                ⚡ 50K+
              </div>
              <div className="text-gray-400 font-medium">Tasks Automated</div>
            </div>
            <div className="group">
              <div className="text-3xl font-black text-green-400 group-hover:scale-110 transition-transform">
                🏆 99.9%
              </div>
              <div className="text-gray-400 font-medium">Success Rate</div>
            </div>
          </div>

          {/* AI Models Support */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Modèles IA Supportés
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="group bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 text-center max-w-xs">
                <div className="relative mb-4">
                  <img
                    src="/asset/image.png"
                    alt="GLM 4.6 Model"
                    className="w-20 h-20 mx-auto rounded-lg object-cover shadow-2xl"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-2xl" style={{display: 'none'}}>
                    GLM
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">GLM 4.6</h4>
                <p className="text-gray-400 text-sm">Modèle de pointe pour analyses avancées</p>
              </div>
              <div className="group bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 text-center max-w-xs">
                <div className="relative mb-4">
                  <img
                    src="/asset/IMG_2210.png"
                    alt="Minimax M2 Model"
                    className="w-20 h-20 mx-auto rounded-lg object-cover shadow-2xl"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-2xl" style={{display: 'none'}}>
                    MM
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Minimax M2</h4>
                <p className="text-gray-400 text-sm">Performance maximale pour tâches complexes</p>
              </div>
            </div>
          </div>

          {/* IRRESISTIBLE Discord CTA */}
          <div className="mb-8">
            <div className="inline-block p-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl animate-pulse">
              <button
                onClick={() => window.open('https://discord.gg/Jt83jBebsk', '_blank')}
                className="relative bg-black text-white px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 border-2 border-transparent"
              >
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                  HOT
                </span>
                <span className="flex items-center gap-3">
                  <span className="text-3xl">💬</span>
                  <span>REJOINDRE LE DISCORD</span>
                  <span className="text-3xl animate-pulse">→</span>
                </span>
                <div className="text-sm text-gray-400 mt-1 font-normal">
                  Accès immédiat • Communauté exclusive • Support 24/7
                </div>
              </button>
            </div>
            <div className="text-center mt-4 text-gray-500 animate-pulse">
              ⚠️ Places limitées - {Math.floor(Math.random() * 50 + 20)} places restantes
            </div>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('#getting-started', '_self')}
              className="bg-gray-900/80 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all font-bold text-lg shadow-2xl backdrop-blur-sm border border-gray-700"
            >
              📖 Voir Comment Ça Marche
            </button>
            <button
              onClick={() => window.open('https://github.com/DeamonDev888/SWARM-INTELLIGENCE', '_blank')}
              className="bg-gray-900/80 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all font-bold text-lg shadow-2xl backdrop-blur-sm border border-gray-700"
            >
              ⭐ GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
              <span className="hype-gradient">POURQUOI NOUS SOMMES</span>
            </h3>
            <div className="text-2xl font-bold text-purple-400 animate-pulse">
              🚀 LA RÉVOLUTION DE L'AUTOMATION 🚀
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "VITESSE FOU",
                description: "Agents travaillant en parallèle 24/7",
                benefit: "1000X PLUS RAPIDE",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                icon: "🧠",
                title: "IA ULTRA INTELLIGENTE",
                description: "Apprentissage et adaptation en temps réel",
                benefit: "150+ QI MOYEN",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: "💎",
                title: "RÉSULTATS GARANTIS",
                description: "Précision chirurgicale sur toutes tâches",
                benefit: "99.97% PRÉCISION",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: "🔥",
                title: "CROISSANCE EXPONENTIELLE",
                description: "Scaling infini sans limites",
                benefit: "∞ POTENTIEL",
                gradient: "from-red-500 to-orange-500"
              },
              {
                icon: "👑",
                title: "DOMINATION MARCHÉ",
                description: "Avantage concurrentiel absolu",
                benefit: "#1 CHOIX",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: "🌟",
                title: "FUTUR MAINTENANT",
                description: "Technologie de demain disponible aujourd'hui",
                benefit: "2040 AVANCÉ",
                gradient: "from-indigo-500 to-purple-500"
              }
            ].map((benefit, index) => (
              <div key={index} className={`group relative bg-gradient-to-br ${benefit.gradient} p-1 rounded-2xl hover:scale-105 transition-all duration-300 animate-float`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className="bg-gray-900 p-6 rounded-xl h-full">
                  <div className="text-5xl mb-3 animate-bounce">{benefit.icon}</div>
                  <h4 className="text-xl font-black text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{benefit.description}</p>
                  <div className={`bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent font-black text-lg font-bold`}>
                    {benefit.benefit}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FOMO Discord CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block p-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full animate-pulse">
              <button
                onClick={() => window.open('https://discord.gg/Jt83jBebsk', '_blank')}
                className="bg-black text-white px-8 py-4 rounded-full font-black text-lg hover:scale-110 transition-all duration-300 shadow-2xl animate-glow-pulse"
              >
                <span className="flex items-center gap-2">
                  🔥 REJOINDRE {Math.floor(Math.random() * 100 + 50)}+ DÉVELOPPEURS DÉJÀ 👑
                </span>
              </button>
            </div>
            <div className="mt-4 text-purple-400 font-bold animate-pulse">
              ⚠️ DERNIÈRE CHANCE - FERMETURE BIENTÔT ⚠️
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 relative">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
              <span className="hype-gradient">COMMENT ÊTRE UN DIEU</span>
            </h3>
            <div className="text-2xl font-bold text-blue-400 animate-pulse">
              ⚡ 3 ÉTAPES VERS LA DOMINATION TOTALE ⚡
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                step: "🔥",
                title: "DÉCHAIÎNER LE PODIUM",
                description: "Activez votre swarm comme un boss",
                time: "CLIQUEZ • INSTANTANÉ",
                gradient: "from-red-500 to-orange-500"
              },
              {
                step: "👑",
                title: "RÉGNER EN MAÎTRE",
                description: "Agents IA à votre service absolu",
                time: "30 SECONDES • DOMINATION",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                step: "🚀",
                title: "CONQUÉRIR LE MONDE",
                description: "Automatisation galactique activée",
                time: "ILLIMITÉ • PUISSANCE ∞",
                gradient: "from-blue-500 to-cyan-500"
              }
            ].map((step, index) => (
              <div key={index} className={`group relative bg-gradient-to-br ${step.gradient} p-1 rounded-2xl hover:scale-110 transition-all duration-300 animate-float`} style={{animationDelay: `${index * 0.3}s`}}>
                <div className="bg-gray-900 p-6 rounded-xl h-full text-center">
                  <div className="text-6xl mb-4 animate-bounce">{step.step}</div>
                  <h4 className="text-2xl font-black text-white mb-3">{step.title}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                  <div className={`bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent font-black text-lg font-bold`}>
                    {step.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ultimate Discord CTA */}
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl animate-pulse blur-xl"></div>
              <button
                onClick={() => window.open('https://discord.gg/Jt83jBebsk', '_blank')}
                className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-16 py-8 rounded-2xl font-black text-2xl hover:scale-110 transition-all duration-300 shadow-2xl animate-glow-pulse border-4 border-purple-400"
              >
                <span className="absolute -top-3 -right-3 bg-red-500 text-white text-sm px-3 py-1 rounded-full animate-bounce font-bold">
                  URGENT
                </span>
                <span className="block mb-2">💬 REJOINDRE LE DISCORD MAINTENANT 💬</span>
                <span className="text-lg font-normal">
                  Devinez le secret • Avantages exclusifs • Accès VIP
                </span>
              </button>
            </div>
            <div className="mt-6 space-y-2">
              <div className="text-red-400 font-bold animate-pulse text-xl">
                ⚠️ SEULEMENT {Math.floor(Math.random() * 20 + 5)} PLACES DISPONIBLES ⚠️
              </div>
              <div className="text-yellow-400 font-semibold">
                ⏰ COMPTE À REBOURS ACTIVÉ ⏰
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
