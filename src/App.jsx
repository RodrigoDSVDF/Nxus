import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp, CheckCircle, Sparkles, User, Lightbulb, Search, Eye } from 'lucide-react'
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

  useEffect(() => {
    setIsVisible(true)
  }, []) 

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  } 

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 font-['Poppins',sans-serif] overflow-x-hidden">
      {/* Hero Section Atualizada com Azul Mais Escuro */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Elementos de fundo atualizados com cores mais escuras */}
        <div className="hidden md:block absolute top-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Imagem de Fundo - Agora Posicionada à Direita */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src={brainNetworkImg} 
            alt="Neural Network Background" 
            className="w-full h-full object-cover object-right"
          />
        </div>
        
        {/* Overlay escuro para melhor contraste */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-blue-950/70 to-slate-900/60"></div>
        
        {/* Conteúdo Principal Atualizado */}
        <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge de Destaque Atualizado */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            Transforme Sua Performance com IA
          </div>

          {/* HEADLINE PRINCIPAL */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Domine a <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Era da IA</span>
          </h1>

          {/* SUBHEADLINE PERSUASIVA */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Potencialize suas decisões com inteligência artificial estratégica e alcance resultados extraordinários
          </p>

          {/* CHAMADA PARA AÇÃO ATUALIZADA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="h-14 px-8 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border-0"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            
            <Button 
              size="lg"
              variant="outline"
              className="h-14 px-8 border-2 border-blue-400/50 text-blue-300 hover:bg-blue-400/10 hover:text-white font-bold rounded-xl transition-all duration-300"
              onClick={() => scrollToSection('beneficios')}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Saiba Mais
            </Button>
          </div>

          {/* Elementos Visuais de Destaque Atualizados */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-300">Produtividade 10x</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-300">Estratégia Comprovada</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-300">Tecnologia Avançada</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator Atualizado */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NOVA SEÇÃO DO MANIFESTO ATUALIZADA --- */}
      <section className="py-32 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Mais que Ferramentas. <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Uma Jornada.</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Na internet de hoje, a inteligência artificial virou commodity. Mas em meio a tanto ruído, o que mais falta é <strong className="text-white">sentido</strong>.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Coluna da Esquerda: O Problema e a Solução */}
            <AnimatedSection delay={0.3}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">O Problema: Um Mar de Informações Vazias</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    As pessoas são bombardeadas com opções, mas não são guiadas a <strong className="text-blue-400">pensar</strong>. São ensinadas a usar ferramentas, mas não a desenvolver uma <strong className="text-blue-400">mentalidade</strong>. São incentivadas a produzir, mas não a <strong className="text-blue-400">refletir</strong>.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-950/40 to-slate-900/40 p-8 rounded-3xl border border-blue-600/30 backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold text-white mb-4">Nossa Proposta: Um Espaço de Construção</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Aqui, a I.A. não é um fim — é uma <strong className="text-indigo-400">ponte</strong>. Uma extensão da sua mente para ampliar sua criatividade e resolver problemas complexos, sem abrir mão do que te torna <strong className="text-indigo-400">humano</strong>: seu pensamento crítico, sua intuição e sua capacidade de se comunicar com profundidade.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Coluna da Direita: Pilares */}
            <AnimatedSection delay={0.5}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-4 text-center md:text-left">Um guia para alto desempenho cognitivo e emocional, com base em pilares como:</h3>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Atenção e Foco na Era Digital</h4>
                    <p className="text-gray-400 text-sm">Domine a distração e direcione sua energia para o que realmente importa.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Criatividade e Autenticidade</h4>
                    <p className="text-gray-400 text-sm">Use a IA para potencializar suas ideias originais, não para substituí-las.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Engenharia de Prompts com Propósito</h4>
                    <p className="text-gray-400 text-sm">Aprenda a arte de fazer as perguntas certas para obter respostas extraordinárias.</p>
                  </div>
                </div>
                 <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Estratégias para o Novo Mercado</h4>
                    <p className="text-gray-400 text-sm">Posicione-se como um profissional indispensável na nova economia.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.4}>
            <div className="mt-20 text-center max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl text-white font-light leading-snug">
                  Nosso compromisso é com seu crescimento real. Queremos que você use a I.A. não para ser substituído, mas para se tornar <span className="font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">mais humano</span>.
                </p>
                <div className="mt-8 flex justify-center">
                    <div className="w-48 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>
                <p className="mt-8 text-xl text-blue-300 font-semibold italic">
                  Nexus: Porque tecnologia, sem humanidade, é apenas ruído.
                </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Autoridade Conceitual - Caverna de Platão ATUALIZADA */}
      <section className="py-32 px-4 relative">
        <AnimatedSection>
          <div className="absolute inset-0">
            <img 
              src={platosCaveImg} 
              alt="Caverna de Platão - Era Digital" 
              className="w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-blue-950/85 to-slate-900/85"></div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Por que o <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Nexus</span> é diferente?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">Saia da Caverna Digital</h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      Como na alegoria de Platão, muitos vivem presos às sombras da desinformação digital. O NEXUS é sua saída para a luz do conhecimento de valor real.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-slate-900/90 p-8 rounded-3xl border border-blue-600/30 backdrop-blur-sm shadow-2xl">
                  <p className="text-lg text-gray-200 leading-relaxed">
                    O Nexus foi criado exatamente para isso: ser um <strong className="text-blue-400">guia prático</strong> que alia alta performance pessoal e profissional com o poder da Inteligência Artificial, ajudando você a se posicionar no <strong className="text-indigo-400">centro dessa revolução</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Seção de Ferramentas Práticas ATUALIZADA */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Ferramentas Práticas</span> que Transformam
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Descubra as tecnologias e metodologias que estão revolucionando a forma como trabalhamos e pensamos
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <AnimatedSection delay={0.2}>
              <div className="group bg-gradient-to-br from-blue-950/30 to-slate-900/30 p-8 rounded-3xl border border-blue-600/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <img src={digitalToolsImg} alt="Ferramentas Digitais" className="w-full h-full object-cover object-center" />
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Mapa</h3>
                  <p className="text-gray-300">Ferramentas que conectam você ao futuro econômico digital</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="group bg-gradient-to-br from-indigo-950/30 to-slate-900/30 p-8 rounded-3xl border border-indigo-600/20 hover:border-indigo-500/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <img src={dataAnalysisImg} alt="Análise de Dado" className="w-full h-full object-cover object-center" />
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Toolbox 4.0</h3>
                  <p className="text-gray-300">Ferramentas inteligentes para guiar sua jornada no futuro digital</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6}>
              <div className="group bg-gradient-to-br from-blue-950/30 to-indigo-950/30 p-8 rounded-3xl border border-blue-600/20 hover:border-indigo-500/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <img src={brainAIImg} alt="IA Cognitiva" className="w-full h-full object-cover object-center" />
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Hub de Ação</h3>
                  <p className="text-gray-300">Um laboratório aonde ideias viram decisões práticas</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefícios ATUALIZADOS */}
      <section id="beneficios" className="py-32 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                O que você vai conquistar com o <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Manual Nexus</span>
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatedSection delay={0.2}>
              <div className="group bg-gradient-to-br from-blue-950/30 to-slate-900/30 p-10 rounded-3xl border border-blue-600/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <img src={neuralNetworkImg} alt="Neural Network" className="w-full h-full object-cover object-center" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Produtividade Exponencial</h3>
                  <p className="text-gray-300 text-lg">Elimine a sobrecarga digital e a sensação de estar sempre atrasado. Descubra como a IA pode ser sua assistente pessoal 24/7, trazendo foco, organização e resultados tangíveis todos os dias</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="group bg-gradient-to-br from-indigo-950/30 to-slate-900/30 p-10 rounded-3xl border border-indigo-600/20 hover:border-indigo-500/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <img src={xadrezStrategiaImg} alt="Estratégia e Clareza" className="w-full h-full object-cover object-center" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Clareza Estratégica</h3>
                  <p className="text-gray-300 text-lg">Acabe com a paralisia por análise e a dúvida. Tenha um framework mental e tecnológico para cortar o ruído, priorizar o essencial e enxergar o caminho mais claro e rápido para seus objetivos</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6}>
              <div className="group bg-gradient-to-br from-blue-950/30 to-indigo-950/30 p-10 rounded-3xl border border-blue-600/20 hover:border-indigo-500/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <img src={brainAIImg} alt="Brain AI" className="w-full h-full object-cover object-center" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Mentalidade Informacional</h3>
                  <p className="text-gray-300 text-lg">Desenvolva a skill mais valiosa do século XXI: a capacidade de aprender, desaprender e reaprender rapidamente. Esteja sempre à frente, adaptando-se às novas tecnologias e tornando-se insubstituível</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="group bg-gradient-to-br from-indigo-950/30 to-blue-950/30 p-10 rounded-3xl border border-indigo-600/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-10">
                  <img src={servicosIAImg} alt="Ferramentas Práticas de IA" className="w-full h-full object-cover object-center" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Ferramentas Práticas</h3>
                  <p className="text-gray-300 text-lg">Chega de frustração com tecnologia complexa. Tenha um "guia de instruções" para o mundo digital, com passo a passo simplificado para extrair o máximo de cada ferramenta, sem complicação</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <div className="group bg-gradient-to-br from-blue-950/30 to-slate-900/30 p-10 rounded-3xl border border-blue-600/20 hover:border-indigo-500/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <img src={produtividadeImg} alt="Vantagem Competitiva" className="w-full h-full object-cover object-center" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Key className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Vantagem Competitiva</h3>
                  <p className="text-gray-300 text-lg">Seja a pessoa que entrega mais rápido, com mais qualidade e ideias mais inovadoras. Aplique todo o ecossistema NEXUS e torne-se referência absoluta em sua área, seja no trabalho, nos estudos ou em projetos pessoais</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Resto das seções mantendo o mesmo padrão de cores escuras... */}

      {/* Seção de Prova/Autoridade ATUALIZADA */}
      <section className="py-32 px-4 bg-gradient-to-r from-blue-950/20 to-indigo-950/20 relative">
        <AnimatedSection>
          <div className="absolute inset-0 opacity-5">
            <img src={brainNetworkImg} alt="Brain Network" className="w-full h-full object-cover object-right" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              Alta Performance não é mais <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">opção</span> — é <span className="bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent">requisito</span>
            </h2>
            
            <div className="bg-gradient-to-br from-slate-900/60 to-blue-950/40 p-12 md:p-16 rounded-3xl border border-blue-600/30 backdrop-blur-sm">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Empresas, profissionais e líderes que dominam o modelo  <strong className="text-blue-400">econômico informacional</strong> estão sempre à frente. O Nexus traduz essa realidade em <strong className="text-indigo-400">passos aplicáveis</strong> para o seu dia a dia, unindo ciência, tecnologia e estratégia de performance.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Chamada para Ação ATUALIZADA */}
      <section id="cta" className="py-32 px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              Está pronto para elevar sua performance ao <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">próximo nível</span>?
            </h2>
            
            <div className="mb-16">
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="h-14 px-8 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border-0"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Começar Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer ATUALIZADO */}
      <section>
        <AnimatedSection>
          <footer className="py-12 px-4 bg-slate-950 border-t border-slate-800">
            <div className="max-w-6xl mx-auto text-center">
              <div className="mb-8">
                <img 
                  src={garantia7DiasImg} 
                  alt="Garantia de 7 dias ou seu dinheiro de volta" 
                  className="mx-auto w-48 h-auto"
                />
              </div>
              <p className="text-gray-400 text-lg">
                © 2024 NEXUS - Manual de Alta Performance com IA. Todos os direitos reservados.
              </p>
            </div>
          </footer>
        </AnimatedSection>
      </section>
    </div>
  )
} 

export default App
