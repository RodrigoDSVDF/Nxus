import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp, CheckCircle, Sparkles } from 'lucide-react'
import './App.css'

// Importando as imagens existentes
import brainNetworkImg from './assets/1000393266.jpg'
import neuronImg from './assets/1000393265.jpg'
import neuralNetworkImg from './assets/1000393264.jpg'
import laptopNeuralImg from './assets/1000393263.jpg'
import nexusLogoImg from './assets/1000393277.png'
import brainAIImg from './assets/1000393262.jpg'
import platosCaveImg from './assets/1000396070.jpg'
import dataAnalysisImg from './assets/1000395918.jpg'
import ebookImg from './assets/1000393237.png'
import newProductImg from './assets/1000396691.jpg'
import testimonial1Img from './assets/1000396866.jpg'
import testimonial2Img from './assets/1000396868.jpg'
import testimonial3Img from './assets/1000396870.jpg'

// --- ADICIONANDO IMPORTS PARA AS NOVAS IMAGENS ---
import cerebroDigitalImg from './assets/cerebro-digital.jpg'
import produtividadeImg from './assets/produtividade.jpg'
import servicosIaImg from './assets/servicos-ia.jpg' // Notebook
import conexoesPlexusImg from './assets/conexoes-plexus.jpg' // Abstrata 1
import redeNeuralAbstrataImg from './assets/rede-neural-abstrata.jpg' // Abstrata 2

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 font-['Poppins',sans-serif] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="hidden md:block absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img  
            src={brainNetworkImg}  
            alt="Neural Network Background"  
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Nova Era Informacional
            </div>
            
            {/* Logo NEXUS */}
            <div className="mb-8">
              <img  
                src={nexusLogoImg}  
                alt="NEXUS Logo"  
                className="w-56 h-auto mx-auto mb-6"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg break-words">
              O Manual de <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-extrabold">Alta Performance</span> com <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">Inteligência Artificial</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light flex flex-col items-center text-center space-y-2">
                <span>Domine a era da informação.</span>
                <span>Transforme dados em decisões.</span>
                <span>Faça da inovação sua maior vantagem competitiva.</span>
                <span className="font-semibold text-cyan-400 mt-2">Torne-se o protagonista.</span>
            </div>
            
            <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
              <Button  
                size="md"  
                className="h-auto whitespace-normal text-center bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-900 px-4 sm:px-6 py-3 text-sm sm:text-base font-bold rounded-xl shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300 transform hover:scale-105 border-2 border-cyan-300/50"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Quero meu Manual de Alta Performance
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Autoridade Conceitual - Caverna de Platão */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0">
          <img  
            src={platosCaveImg}  
            alt="Caverna de Platão - Era Digital"  
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 to-blue-900/85"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Por que o <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Nexus</span> é diferente?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Era Informacional</h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    No atual modelo econômico informacional, a fonte real da produtividade está na tecnologia capaz de transformar dados em conhecimento, informação em estratégia e comunicação em resultados.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Saia da Caverna Digital</h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Como na alegoria de Platão, muitos vivem presos às sombras da desinformação digital. O NEXUS é sua saída para a luz do conhecimento real.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-slate-800/90 p-8 rounded-3xl border border-blue-500/30 backdrop-blur-sm shadow-2xl">
                <p className="text-lg text-gray-200 leading-relaxed">
                  O Nexus foi criado exatamente para isso: ser um <strong className="text-emerald-400">guia prático</strong> que alia alta performance pessoal e profissional com o poder da Inteligência Artificial, ajudando você a se posicionar no <strong className="text-cyan-400">centro dessa revolução</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Ferramentas Práticas */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 opacity-10">
          <img src={servicosIaImg} alt="Notebook com ferramentas de IA" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Ferramentas Práticas</span> que Transformam
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubra as tecnologias e metodologias que estão revolucionando a forma como trabalhamos e pensamos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="group bg-gradient-to-br from-blue-900/30 to-slate-800/30 p-8 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 opacity-20">
                <img src={dataAnalysisImg} alt="Ferramentas Digitais" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Mapa</h3>
                <p className="text-gray-300">Ferramentas que conectam você ao futuro econômico digital</p>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-emerald-900/30 to-slate-800/30 p-8 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 opacity-20">
                <img src={dataAnalysisImg} alt="Análise de Dado" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Toolbox 4.0</h3>
                <p className="text-gray-300">Ferramentas inteligentes para guiar sua jornada no futuro digital</p>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-blue-900/30 to-emerald-900/30 p-8 rounded-3xl border border-blue-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 opacity-20">
                <img src={brainAIImg} alt="IA Cognitiva" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Hub de Ação</h3>
                <p className="text-gray-300">Um laboratório aonde ideias viram decisões práticas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-32 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              O que você vai conquistar com o <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Manual Nexus</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group bg-gradient-to-br from-blue-900/30 to-slate-800/30 p-10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <img src={cerebroDigitalImg} alt="Cérebro digital simbolizando produtividade" className="w-full h-48 object-cover rounded-2xl mb-8 shadow-lg" />
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Produtividade Exponencial</h3>
                <p className="text-gray-300 text-lg">Multiplique seus resultados com IA</p>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-emerald-900/30 to-slate-800/30 p-10 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img src={laptopNeuralImg} alt="Laptop Neural" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Clareza Estratégica</h3>
                <p className="text-gray-300 text-lg">Decisões rápidas e precisas</p>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-blue-900/30 to-emerald-900/30 p-10 rounded-3xl border border-blue-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img src={brainAIImg} alt="Brain AI" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Mentalidade Informacional</h3>
                <p className="text-gray-300 text-lg">Conhecimento em ação concreta</p>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-emerald-900/30 to-blue-900/30 p-10 rounded-3xl border border-emerald-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Ferramentas Práticas</h3>
              <p className="text-gray-300 text-lg">Resultados reais comprovados</p>
            </div>
            
            <div className="group bg-gradient-to-br from-blue-900/30 to-slate-800/30 p-10 rounded-3xl border border-blue-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <img src={produtividadeImg} alt="Gráfico de produtividade" className="w-full h-48 object-cover rounded-2xl mb-8 shadow-lg" />
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Key className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Vantagem Competitiva</h3>
              <p className="text-gray-300 text-lg">Destaque-se em seus projetos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Prova/Autoridade */}
      <section className="py-32 px-4 bg-gradient-to-r from-blue-900/20 to-emerald-900/20 relative">
        <div className="absolute inset-0 opacity-10">
          <img src={conexoesPlexusImg} alt="Conexões abstratas" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Alta Performance não é mais <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">opção</span> — é <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">requisito</span>
          </h2>
          
          <div className="bg-gradient-to-br from-slate-800/60 to-blue-900/40 p-12 md:p-16 rounded-3xl border border-blue-500/30 backdrop-blur-sm">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Empresas, profissionais e líderes que dominam a <strong className="text-emerald-400">capacidade informacional</strong> estão sempre à frente. O Nexus traduz essa realidade em <strong className="text-cyan-400">passos aplicáveis</strong> para o seu dia a dia, unindo ciência, tecnologia e estratégia de performance.
            </p>
          </div>
        </div>
      </section>

      {/* Chamada para Ação */}
      <section id="cta" className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Está pronto para elevar sua performance ao <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">próximo nível</span>?
          </h2>
          
          <div className="mb-16">
            <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
              <Button  
                size="md"  
                className="h-auto whitespace-normal text-center bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-900 px-4 sm:px-6 py-3 text-sm sm:text-base font-bold rounded-xl shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300 transform hover:scale-105 border-2 border-cyan-300/50"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Quero agora meu Manual de Alta Performance com IA
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Nova Seção de Conclusão */}
      <section className="py-32 px-4 bg-gradient-to-br from-slate-900 to-blue-900 relative">
        <div className="absolute inset-0 opacity-10">
          <img src={redeNeuralAbstrataImg} alt="Rede neural abstrata de fundo" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">A grande mudança</span>
          </h2>
          
          <div className="bg-gradient-to-br from-blue-900/40 to-emerald-900/40 p-12 md:p-16 rounded-3xl border border-cyan-500/30 backdrop-blur-sm mb-12">
            <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-12">
              Você chegou até aqui porque busca mais do que informação: deseja <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-bold">transformação real</span>.
            </p>
            
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-12">
              O NEXUS é o atalho para acelerar seus resultados com Inteligência Artificial e alcançar um nível de performance que poucos ousam.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-slate-900" />
                </div>
                <p className="text-lg text-white font-semibold">Produtividade 10x maior com IA</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-slate-900" />
                </div>
                <p className="text-lg text-white font-semibold">Decisões estratégicas precisas</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-slate-900" />
                </div>
                <p className="text-lg text-white font-semibold">Vantagem competitiva definitiva</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mb-8"></div>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <p className="text-2xl text-cyan-300 mb-8 font-medium">
              👉 Toque agora e conheça o NEXUS — sua jornada para a alta performance começa hoje.
            </p>
            
            <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
              <Button  
                size="md"  
                className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-300 hover:to-red-400 text-white px-6 py-3 text-base font-bold rounded-xl shadow-2xl hover:shadow-orange-400/40 transition-all duration-300 transform hover:scale-105 border-2 border-orange-300/50 animate-pulse"
              >
                <Rocket className="w-5 h-5 mr-2" />
                QUERO O NEXUS AGORA
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
          
          <div className="flex justify-center mt-16">
            <div className="relative group w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl">
              <img  
                src={newProductImg}  
                alt="NEXUS - Interface Digital"  
                className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="py-32 px-4 bg-gradient-to-br from-blue-900/20 to-emerald-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Veja o <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">NEXUS</span> em Ação
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubra como profissionais estão transformando sua performance com o Manual NEXUS
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group bg-gradient-to-br from-slate-800/60 to-blue-900/40 p-8 rounded-3xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <div className="relative w-full aspect-video mb-6 rounded-2xl overflow-hidden shadow-lg">
                <img  
                  src={testimonial1Img}  
                  alt="Profissional usando NEXUS"  
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Ambiente Profissional</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "O NEXUS transformou minha rotina de trabalho. Agora consigo processar informações 3x mais rápido e tomar decisões estratégicas com muito mais precisão."
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="flex text-cyan-400">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-emerald-900/40 to-slate-800/60 p-8 rounded-3xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <div className="relative w-full aspect-video mb-6 rounded-2xl overflow-hidden shadow-lg">
                <img  
                  src={testimonial2Img}  
                  alt="NEXUS Mobile"  
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Mobilidade Total</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "Ter o NEXUS sempre comigo no celular é incrível. Posso aplicar as técnicas de alta performance em qualquer lugar, a qualquer momento."
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="flex text-emerald-400">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-blue-900/40 to-emerald-900/40 p-8 rounded-3xl border border-blue-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
              <div className="relative w-full aspect-video mb-6 rounded-2xl overflow-hidden shadow-lg">
                <img  
                  src={testimonial3Img}  
                  alt="NEXUS Tablet"  
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Conforto e Praticidade</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "A experiência de leitura no tablet é fantástica. O conteúdo do NEXUS fica ainda mais envolvente e fácil de absorver."
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="flex text-blue-400">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-xl text-gray-300 mb-8">
              Junte-se a milhares de profissionais que já transformaram sua performance
            </p>
            <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
              <Button  
                size="md"  
                className="h-auto whitespace-normal text-center bg-gradient-to-r from-emerald-400 to-blue-500 hover:from-emerald-300 hover:to-blue-400 text-slate-900 px-4 sm:px-6 py-3 text-sm sm:text-base font-bold rounded-xl shadow-2xl hover:shadow-emerald-400/30 transition-all duration-300 transform hover:scale-105 border-2 border-emerald-300/50"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Começar Minha Transformação Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-lg">
            © 2024 NEXUS - Manual de Alta Performance com IA. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
