import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp, CheckCircle, Sparkles, User, Lightbulb, Search, Eye, Crown, Shield, Award, Star } from 'lucide-react'
import './App.css' 

// Importando o componente de animação
import AnimatedSection from '@/components/ui/AnimatedSection.jsx'; 

// Importando as imagens existentes
import brainNetworkImg from './assets/1000393266.jpg'
import nexusLogoImg from './assets/1000393277.png'
import platosCaveImg from './assets/1000396070.jpg'
import dataAnalysisImg from './assets/1000395918.jpg'
import newProductImg from './assets/1000396691.jpg'
import testimonial1Img from './assets/1000396866.jpg'
import testimonial2Img from './assets/1000396868.jpg'
import testimonial3Img from './assets/1000396870.jpg'
import laptopNeuralImg from './assets/1000393263.jpg'
import brainAIImg from './assets/1000393262.jpg'
import digitalToolsImg from './assets/1000395915.jpg'
import neuronImg from './assets/1000393265.jpg'
import neuralNetworkImg from './assets/1000393264.jpg'
import ebookImg from './assets/1000393237.png'
import servicosIAImg from './assets/servicos-ia.jpg';
import produtividadeImg from './assets/produtividade.jpg';
import redeNeuralAbstrataImg from './assets/rede-neural-abstrata.jpg';
import xadrezStrategiaImg from './assets/xadrez-estrategia.jpg';
import garantia7DiasImg from './assets/7-dias-garantido.jpg'; 

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 font-['Inter',sans-serif] overflow-x-hidden">
      {/* Cursor Effect Layer */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(120, 119, 198, 0.15), transparent 80%)`
        }}
      />
      
      {/* Hero Section de Alto Padrão */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background Elements Sofisticados */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/10 to-indigo-600/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-float-fast" />
        </div>

        {/* Imagem de Fundo com Overlay Sofisticado */}
        <div className="absolute inset-0">
          <img 
            src={brainNetworkImg} 
            alt="Neural Network Background" 
            className="w-full h-full object-cover object-right scale-110"
            style={{ filter: 'brightness(0.3) contrast(1.2) saturate(1.1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-indigo-950/80 to-slate-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/90" />
        </div>
        
        {/* Conteúdo Principal */}
        <div className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge de Elite */}
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border border-violet-400/30 rounded-2xl text-violet-200 text-lg font-medium mb-12 backdrop-blur-xl shadow-2xl">
            <Crown className="w-5 h-5 mr-3 text-amber-300" />
            <span className="bg-gradient-to-r from-amber-200 to-cyan-200 bg-clip-text text-transparent font-semibold">
              Programa de Elite para Líderes Digitais
            </span>
          </div>

          {/* Headline Principal */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
              NEXUS
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-light text-cyan-100 mt-4 block">
              A Masterclass Definitiva em
              <span className="block bg-gradient-to-r from-amber-300 to-cyan-400 bg-clip-text text-transparent font-bold mt-2">
                Alta Performance com IA
              </span>
            </span>
          </h1>

          {/* Subheadline Persuasiva */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-2xl md:text-3xl text-gray-200 font-light leading-relaxed mb-8">
              Onde a <span className="text-cyan-300 font-semibold">excelência cognitiva</span> encontra a 
              <span className="text-amber-300 font-semibold"> revolução da inteligência artificial</span>
            </p>
            <div className="flex justify-center items-center space-x-8 text-cyan-200">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Metodologia Exclusiva</span>
              </div>
              <div className="w-1 h-1 bg-cyan-400 rounded-full" />
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Resultados Comprovados</span>
              </div>
              <div className="w-1 h-1 bg-cyan-400 rounded-full" />
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Acesso Vitalício</span>
              </div>
            </div>
          </div>

          {/* CTAs Estratégicos */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="h-16 px-12 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-amber-500/40 transition-all duration-500 transform hover:scale-105 border-0 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Rocket className="w-6 h-6 mr-3" />
                <span className="text-lg">INICIAR JORNADA DE ELITE</span>
                <ArrowRight className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            
            <Button 
              size="lg"
              variant="outline"
              className="h-16 px-10 border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:text-white hover:border-cyan-300 font-bold rounded-2xl transition-all duration-500 backdrop-blur-sm group"
              onClick={() => scrollToSection('transformacao')}
            >
              <BookOpen className="w-5 h-5 mr-3 transform group-hover:scale-110 transition-transform" />
              EXPLORAR METODOLOGIA
              <ArrowRight className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Social Proof Sofisticada */}
          <div className="grid grid-cols-3 gap-12 max-w-4xl mx-auto pt-12 border-t border-cyan-500/20">
            {[
              { number: '2.4K+', label: 'Alunos de Elite' },
              { number: '98%', label: 'Taxa de Sucesso' },
              { number: '4.9★', label: 'Avaliações' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-cyan-200 font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator Elegante */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce-slow">
            <div className="w-8 h-14 border-2 border-cyan-400/50 rounded-full flex justify-center p-1 backdrop-blur-sm">
              <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-cyan-300 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Transformação - Design Sofisticado */}
      <section id="transformacao" className="py-32 px-4 relative">
        {/* Background Artístico */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-indigo-950/30 to-slate-900/60" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-24">
              <div className="inline-flex items-center px-6 py-3 bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                METODOLOGIA EXCLUSIVA
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                A Arte da{' '}
                <span className="bg-gradient-to-r from-amber-300 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  Maestria Digital
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Um sistema integrado que combina <span className="text-cyan-300 font-semibold">neurociência avançada</span>,{' '}
                <span className="text-amber-300 font-semibold">estratégias de elite</span> e{' '}
                <span className="text-violet-300 font-semibold">tecnologia de ponta</span> para criar resultados extraordinários
              </p>
            </div>
          </AnimatedSection>

          {/* Sistema de Pilares */}
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: Brain,
                title: 'Inteligência Ampliada',
                description: 'Potencialize seu poder cognitivo com técnicas de neuroperformance e IA generativa',
                color: 'from-cyan-500 to-blue-600',
                features: ['Mindset Exponencial', 'Criatividade Algorítmica', 'Decisão de Alta Precisão']
              },
              {
                icon: Target,
                title: 'Estratégia de Elite',
                description: 'Sistemas comprovados para posicionamento e vantagem competitiva no mercado digital',
                color: 'from-amber-500 to-orange-600',
                features: ['Posicionamento Estratégico', 'Execução Impecável', 'Resultados Mensuráveis']
              },
              {
                icon: Zap,
                title: 'Tecnologia Avançada',
                description: 'Domine as ferramentas e frameworks que estão moldando o futuro do trabalho',
                color: 'from-violet-500 to-purple-600',
                features: ['Stack Tecnológico', 'Automação Inteligente', 'Sistemas Escaláveis']
              }
            ].map((pillar, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-3xl border border-cyan-500/20 backdrop-blur-xl transform group-hover:scale-105 transition-all duration-500" />
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className={`w-20 h-20 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                      <pillar.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                    <p className="text-gray-300 mb-6 flex-grow">{pillar.description}</p>
                    <ul className="space-y-3">
                      {pillar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-cyan-200 text-sm">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Diferenciais Exclusivos */}
          <AnimatedSection delay={0.4}>
            <div className="bg-gradient-to-br from-slate-900/60 to-indigo-900/40 rounded-3xl border border-cyan-500/30 p-12 backdrop-blur-xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Por que o <span className="bg-gradient-to-r from-amber-300 to-cyan-400 bg-clip-text text-transparent">NEXUS</span> é diferente?
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Enquanto outros oferecem apenas ferramentas, nós entregamos um <span className="text-cyan-300 font-semibold">sistema completo de transformação</span>. 
                    Uma jornada meticulosamente desenhada para elevar sua performance ao nível de elite.
                  </p>
                  <div className="space-y-4">
                    {[
                      'Metodologia baseada em ciência de ponta',
                      'Acompanhamento personalizado de especialistas',
                      'Comunidade exclusiva de high-performers',
                      'Atualizações vitalícias do conteúdo'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-cyan-200">
                        <CheckCircle className="w-5 h-5 text-amber-400 mr-3" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <img 
                      src={platosCaveImg} 
                      alt="Metodologia Exclusiva" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-sm font-medium text-cyan-300">CASE STUDY</div>
                      <div className="text-xl font-bold">Resultados Comprovados</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Seção de Resultados - Design de Alta Conversão */}
      <section className="py-32 px-4 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Transformação{' '}
                <span className="bg-gradient-to-r from-amber-300 to-cyan-400 bg-clip-text text-transparent">
                  Mensurável
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Resultados reais alcançados por profissionais que implementaram o sistema NEXUS
              </p>
            </div>
          </AnimatedSection>

          {/* Métricas Impressionantes */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              { metric: '427%', label: 'Aumento em Produtividade', icon: TrendingUp },
              { metric: '89%', label: 'Redução de Estresse', icon: Shield },
              { metric: '3.2x', label: 'Velocidade de Aprendizado', icon: Zap },
              { metric: '100%', label: 'Satisfação Garantida', icon: Award }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-500/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-cyan-400 bg-clip-text text-transparent mb-3">
                    {item.metric}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {item.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Depoimentos de Elite */}
          <AnimatedSection delay={0.3}>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  image: testimonial1Img,
                  name: 'Dr. Marcos Silva',
                  role: 'CEO, TechInnovate',
                  text: 'O Nexus transformou completamente minha abordagem estratégica. Em 3 meses, nossa eficiência operacional aumentou 300%.',
                  stars: 5
                },
                {
                  image: testimonial2Img,
                  name: 'Ana Costa',
                  role: 'Directora de Inovação',
                  text: 'A metodologia é revolucionária. Finalmente encontrei um sistema que entrega resultados tangíveis e duradouros.',
                  stars: 5
                },
                {
                  image: testimonial3Img,
                  name: 'Ricardo Almeida',
                  role: 'Entrepreneur',
                  text: 'Investimento que se paga em semanas. O retorno foi além de todas as expectativas. Simplesmente extraordinário.',
                  stars: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-indigo-900/30 rounded-3xl border border-cyan-500/20 backdrop-blur-xl transform group-hover:scale-105 transition-all duration-500" />
                  <div className="relative z-10 p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden mr-4 border-2 border-amber-400/50">
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-bold text-white">{testimonial.name}</div>
                        <div className="text-cyan-300 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex text-amber-400">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Seção de Garantia e Conversão Final */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-cyan-500/5 to-indigo-500/5" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-slate-900/80 to-indigo-900/60 rounded-3xl border border-amber-400/30 p-16 backdrop-blur-xl shadow-2xl">
              
              {/* Garantia Premium */}
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-r from-amber-400 to-cyan-400 p-1 rounded-2xl inline-flex">
                  <div className="bg-slate-950 rounded-2xl px-8 py-4 flex items-center">
                    <Shield className="w-8 h-8 text-amber-400 mr-4" />
                    <div className="text-left">
                      <div className="text-white font-bold text-lg">Garantia de 7 Dias</div>
                      <div className="text-cyan-300 text-sm">Risco Zero - Resultado Total</div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Sua Jornada para a{' '}
                <span className="bg-gradient-to-r from-amber-300 to-cyan-400 bg-clip-text text-transparent">
                  Excelência
                </span>{' '}
                Começa Agora
              </h2>

              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Junte-se aos profissionais de elite que já transformaram suas carreiras e negócios através do sistema NEXUS. 
                <span className="text-cyan-300 font-semibold"> O investimento retorna em resultados tangíveis nas primeiras semanas.</span>
              </p>

              {/* Oferta Final */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: Crown, text: 'Acesso Imediato e Vitalício' },
                  { icon: Users, text: 'Comunidade Exclusiva' },
                  { icon: Download, text: 'Atualizações Perpétuas' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-center text-cyan-200">
                    <item.icon className="w-6 h-6 text-amber-400 mr-3" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Final */}
              <div className="space-y-6">
                <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="h-20 px-16 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 transform hover:scale-105 border-0 text-xl group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <Rocket className="w-8 h-8 mr-4" />
                    <span>CONQUISTAR MINHA VAGA AGORA</span>
                    <ArrowRight className="w-8 h-8 ml-4 transform group-hover:translate-x-2 transition-transform" />
                  </Button>
                </a>
                
                <div className="text-cyan-200 text-lg font-medium">
                  ⚡ Acesso Imediato • 7 Dias de Garantia • Suporte Prioritário
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="py-16 px-4 bg-slate-950 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src={garantia7DiasImg} 
              alt="Garantia de 7 dias" 
              className="mx-auto w-56 h-auto filter brightness-125"
            />
          </div>
          <p className="text-gray-400 text-lg mb-4">
            © 2024 NEXUS - Sistema de Alta Performance com IA. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Transformando profissionais comuns em performers extraordinários.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
