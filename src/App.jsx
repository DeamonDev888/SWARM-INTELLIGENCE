import { useState, useEffect } from 'react'


function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'overview', 'architecture', 'quickstart', 'scripts', 'usecases', 'metrics']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-dark-950 text-dark-50">
      <nav className="fixed top-0 w-full glass-morphism border-b border-dark-800 z-50 gpu-accelerated">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SI</span>
              </div>
              <span className="text-xl font-bold gradient-text">
                Swarm Intelligence
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Overview', 'Architecture', 'Quick Start', 'Scripts', 'Use Cases', 'Metrics'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-morphism rounded-full text-green-400 text-sm font-medium mb-6 gpu-accelerated">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow" />
              System Online - Agents Ready
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-float text-shadow">
              Swarm Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-dark-300 mb-8">
              Build and Deploy an Army of AI Agents in 20 Minutes
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <div className="px-4 py-2 bg-dark-800/50 rounded-lg text-sm border border-dark-700">
                AI-Powered
              </div>
              <div className="px-4 py-2 bg-dark-800/50 rounded-lg text-sm border border-dark-700">
                10+ Specialized Agents
              </div>
              <div className="px-4 py-2 bg-dark-800/50 rounded-lg text-sm border border-dark-700">
                20 Min Deployment
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('#get-started', '_self')}
                className="btn-primary gpu-accelerated"
              >
                Get Started
              </button>
              <button
                onClick={() => window.open('https://github.com/DeamonDev888/SWARM-INTELLIGENCE/blob/main/docs/README.md', '_blank')}
                className="btn-secondary gpu-accelerated"
              >
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="py-20 px-4 bg-dark-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 gradient-text text-center text-shadow">
            Overview
          </h2>
          <p className="text-xl text-dark-300 text-center mb-12 max-w-3xl mx-auto">
            A swarm of agents is an orchestration of multiple specialized agents working in concert
            to accomplish any complex mission. Think of a team of 10+ virtual experts, each becoming
            an authority in their domain.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Parallelism',
                description: '10+ specialized agents working simultaneously',
                stat: '90% faster'
              },
              {
                title: 'Expertise',
                description: 'Each agent becomes an expert in its domain',
                stat: 'Professional quality'
              },
              {
                title: 'Efficiency',
                description: 'Automation of repetitive tasks',
                stat: '24+ hours saved/week'
              },
              {
                title: 'Coordination',
                description: 'Intelligent synchronization without intervention',
                stat: 'Optimized workflow'
              },
              {
                title: 'Scalability',
                description: 'Add/remove agents according to mission',
                stat: 'Total adaptability'
              },
              {
                title: 'Versatility',
                description: 'Works in ALL domains',
                stat: 'Universal solution'
              }
            ].map((feature, index) => (
              <div key={index} className="glass-morphism rounded-xl p-6 card-hover group gpu-accelerated">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                  ⚡
                </div>
                <h3 className="text-xl font-semibold mb-3 gradient-text">{feature.title}</h3>
                <p className="text-dark-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-primary-400 text-sm font-semibold">{feature.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent text-center">
            Architecture
          </h2>
          <p className="text-xl text-dark-300 text-center mb-12 max-w-3xl mx-auto">
            Hierarchical structure with clear dependencies and coordination flow
          </p>

          <div className="bg-dark-900/50 border border-dark-800 rounded-xl p-8 overflow-x-auto">
            <pre className="text-sm text-dark-300">
{`CENTRAL ORCHESTRATOR
       |
┌──────┴──────┐
│             │
CRITICAL     HIGH
   |           |
   └─────┬─────┘
         |
   SECURITY GUARDIAN
   (Scans all decisions)
         |
    ┌────┴────┐
    │         │
 FRONTEND  BACKEND  DATABASE
    │         │         │
    └────┬────┘         │
         │              │
    ┌────┴──────────────┘
    │
  DEVOPS`}
            </pre>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { level: 'Critical', agents: 1, color: 'text-red-400' },
              { level: 'High', agents: 3, color: 'text-orange-400' },
              { level: 'Medium', agents: 5, color: 'text-blue-400' },
              { level: 'Low', agents: 3, color: 'text-green-400' }
            ].map((priority, index) => (
              <div key={index} className="bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-xl p-6">
                <div className={`${priority.color} text-sm font-medium mb-2`}>
                  {priority.level} Priority
                </div>
                <div className="text-2xl font-bold mb-1">{priority.agents}</div>
                <div className="text-dark-400 text-sm">agents</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="get-started" className="py-20 px-4 bg-dark-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent text-center">
            Get Started
          </h2>
          <p className="text-xl text-dark-300 text-center mb-12 max-w-3xl mx-auto">
            Deploy your swarm intelligence agents in minutes with our simple setup process
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: '1',
                title: 'Clone Repository',
                description: 'Download the swarm intelligence framework to your local machine',
                code: 'git clone https://github.com/DeamonDev888/SWARM-INTELLIGENCE.git'
              },
              {
                step: '2',
                title: 'Configure Agents',
                description: 'Set up your agent configuration files and define their roles',
                code: 'npm install && npm run configure'
              },
              {
                step: '3',
                title: 'Deploy Swarm',
                description: 'Launch your multi-agent system and start automating tasks',
                code: 'npm run deploy-swarm'
              }
            ].map((step, index) => (
              <div key={index} className="bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-dark-300 mb-4">{step.description}</p>
                <div className="bg-dark-950 rounded-lg p-3 font-mono text-sm text-primary-400">
                  {step.code}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => window.open('https://github.com/DeamonDev888/SWARM-INTELLIGENCE', '_blank')}
              className="bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              Start Building Your Swarm →
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-dark-900 border-t border-dark-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SI</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                  Swarm Intelligence
                </span>
              </div>
              <p className="text-dark-300">AI Multi-Agent that Revolutionizes Your Productivity</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Useful Links</h4>
              <ul className="space-y-2 text-dark-300">
                <li><a href="https://github.com/DeamonDev888/SWARM-INTELLIGENCE/blob/main/docs/README.md" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Official Documentation</a></li>
                <li><a href="https://github.com/DeamonDev888/SWARM-INTELLIGENCE" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">GitHub Repository</a></li>
                <li><a href="https://discord.gg/Jt83jBebsk" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Discord Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-dark-300">
                <li>Last updated: 2025-11-09</li>
                <li>Version: 2.0</li>
                <li>Author: Claude Code Team</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
