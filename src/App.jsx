import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp, CheckCircle, Sparkles, User, Lightbulb, Search, Eye, Crown, Shield, Award, Star } from 'lucide-react'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, []) 

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 font-sans overflow-x-hidden">
      {/* Efeito de cursor */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(120, 119, 198, 0.15), transparent 80%)`
        }}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-indigo-950/80 to-slate-900/70" />
        
        {/* Conteúdo Principal */}
        <div className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border border-violet-400/30 rounded-2xl text-violet-200 text-lg font-medium mb-12 backdrop-blur-xl">
            <Crown className="w-5 h-5 mr-3 text-amber-300" />
            <span className="bg-gradient-to-r from-amber-200 to-cyan-200 bg-clip-text text-transparent font-semibold">
              Programa para Líderes Digitais
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
              NEXUS
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-light text-cyan-100 mt-4 block">
              Masterclass em
              <span className="block bg-gradient-to-r from-amber-300 to-cyan-400 bg-clip-text text-transparent font-bold mt-2">
                Alta Performance com IA
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-8">
              Onde a <span className="text-cyan-300 font-semibold">excelência cognitiva</span> encontra a 
              <span className="text-amber-300 font-semibold"> revolução da inteligência artificial</span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="h-16 px-12 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-amber-500/40 transition-all duration-500 transform hover:scale-105 border-0"
              >
                <Rocket className="w-6 h-6 mr-3" />
                <span className="text-lg">INICIAR JORNADA</span>
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </a>
            
            <Button 
              size="lg"
              variant="outline"
              className="h-16 px-10 border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:text-white hover:border-cyan-300 font-bold rounded-2xl transition-all duration-500 backdrop-blur-sm"
              onClick={() => scrollToSection('transformacao')}
            >
              <BookOpen className="w-5 h-5 mr-3" />
              EXPLORAR METODOLOGIA
            </Button>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-3 gap-12 max-w-4xl mx-auto pt-12 border-t border-cyan-500/20">
            {[
              { number: '2.4K+', label: 'Alunos' },
              { number: '98%', label: 'Sucesso' },
              { number: '4.9★', label: 'Avaliações' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-cyan-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Transformação */}
      <section id="transformacao" className="py-32 px-4 relative bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              METODOLOGIA EXCLUSIVA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              A Arte da{' '}
              <span className="bg-gradient-to-r from-amber-300 to-cyan-400 bg-clip-text text-transparent">
                Maestria Digital
              </span>
            </h2>
          </div>

          {/* Sistema de Pilares */}
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: Brain,
                title: 'Inteligência Ampliada',
                description: 'Potencialize seu poder cognitivo com técnicas de neuroperformance e IA generativa',
                color: 'from-cyan-500 to-blue-600'
              },
              {
                icon: Target,
                title: 'Estratégia de Elite',
                description: 'Sistemas comprovados para posicionamento e vantagem competitiva',
                color: 'from-amber-500 to-orange-600'
              },
              {
                icon: Zap,
                title: 'Tecnologia Avançada',
                description: 'Domine as ferramentas que estão moldando o futuro do trabalho',
                color: 'from-violet-500 to-purple-600'
              }
            ].map((pillar, index) => (
              <div key={index} className="group relative h-full">
                <div className="relative z-10 p-8 h-full flex flex-col bg-slate-800/50 rounded-3xl border border-cyan-500/20 backdrop-blur-sm">
                  <div className={`w-20 h-20 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <pillar.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                  <p className="text-gray-300 flex-grow">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Resultados */}
      <section className="py-32 px-4 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Transformação{' '}
              <span className="bg-gradient-to-r from-amber-300 to-cyan-400 bg-clip-text text-transparent">
                Mensurável
              </span>
            </h2>
          </div>

          {/* Métricas */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              { metric: '427%', label: 'Aumento em Produtividade', icon: TrendingUp },
              { metric: '89%', label: 'Redução de Estresse', icon: Shield },
              { metric: '3.2x', label: 'Velocidade de Aprendizado', icon: Zap },
              { metric: '100%', label: 'Satisfação', icon: Award }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-500/30">
                  <item.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-cyan-400 bg-clip-text text-transparent mb-3">
                  {item.metric}
                </div>
                <div className="text-gray-300 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Final de Conversão */}
      <section className="py-32 px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-900/80 to-indigo-900/60 rounded-3xl border border-amber-400/30 p-12 backdrop-blur-xl">
            
            {/* Garantia */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-amber-400 to-cyan-400 p-1 rounded-2xl inline-flex">
                <div className="bg-slate-950 rounded-2xl px-8 py-4 flex items-center">
                  <Shield className="w-8 h-8 text-amber-400 mr-4" />
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">Garantia de 7 Dias</div>
                    <div className="text-cyan-300 text-sm">Risco Zero</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Sua Jornada para a{' '}
              <span className="bg-gradient-to-r from-amber-300 to-cyan-400 bg-clip-text text-transparent">
                Excelência
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Junte-se aos profissionais que já transformaram suas carreiras através do sistema NEXUS.
            </p>

            {/* CTA Final */}
            <div className="space-y-6">
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="h-16 px-12 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold rounded-2xl shadow-2xl transition-all duration-500 border-0 text-lg"
                >
                  <Rocket className="w-6 h-6 mr-3" />
                  <span>CONQUISTAR MINHA VAGA</span>
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </a>
              
              <div className="text-cyan-200 font-medium">
                ⚡ Acesso Imediato • 7 Dias de Garantia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-slate-950 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-lg mb-4">
            © 2024 NEXUS - Sistema de Alta Performance com IA
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
