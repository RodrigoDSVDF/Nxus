import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp, CheckCircle, Sparkles, User, Lightbulb, Search, Eye } from 'lucide-react'
import './App.css'

// --- 1. IMPORTANDO O NOVO COMPONENTE DE ANIMAÇÃO ---
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
import servicosIAImg from './assets/servicos-ia.jpg'
import produtividadeImg from './assets/produtividade.jpg'
import redeNeuralAbstrataImg from './assets/rede-neural-abstrata.jpg'
import xadrezStrategiaImg from './assets/xadrez-estrategia.jpg';
import garantia7DiasImg from './assets/7-dias-garantido.jpg'; 

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Esta função não é mais necessária para as animações de scroll,
  // mas pode ser mantida para navegação interna se você tiver um menu.
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 font-['Poppins',sans-serif] overflow-x-hidden">
      {/* Hero Section - A animação inicial já está aqui, então não precisa do AnimatedSection */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="hidden md:block absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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

      {/* --- NOVA SEÇÃO DO MANIFESTO --- */}
      <section className="py-32 px-4 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Mais que Ferramentas. <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Uma Jornada.</span>
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
                    As pessoas são bombardeadas com opções, mas não são guiadas a <strong className="text-emerald-400">pensar</strong>. São ensinadas a usar ferramentas, mas não a desenvolver uma <strong className="text-emerald-400">mentalidade</strong>. São incentivadas a produzir, mas não a <strong className="text-emerald-400">refletir</strong>.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-900/40 to-slate-800/40 p-8 rounded-3xl border border-blue-500/30 backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold text-white mb-4">Nossa Proposta: Um Espaço de Construção</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Aqui, a I.A. não é um fim — é uma <strong className="text-cyan-400">ponte</strong>. Uma extensão da sua mente para ampliar sua criatividade e resolver problemas complexos, sem abrir mão do que te torna <strong className="text-cyan-400">humano</strong>: seu pensamento crítico, sua intuição e sua capacidade de se comunicar com profundidade.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Coluna da Direita: Pilares */}
            <AnimatedSection delay={0.5}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-4 text-center md:text-left">Um guia para alto desempenho cognitivo e emocional, com base em pilares como:</h3>
                {/* ... conteúdo dos pilares ... */}
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.4}>
            <div className="mt-20 text-center max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl text-white font-light leading-snug">
                  Nosso compromisso é com seu crescimento real. Queremos que você use a I.A. não para ser substituído, mas para se tornar <span className="font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">mais humano</span>.
                </p>
                <div className="mt-8 flex justify-center">
                    <div className="w-48 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"></div>
                </div>
                <p className="mt-8 text-xl text-cyan-300 font-semibold italic">
                  Nexus: Porque tecnologia, sem humanidade, é apenas ruído.
                </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Autoridade Conceitual - Caverna de Platão */}
      <AnimatedSection>
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
            {/* ... conteúdo da seção ... */}
          </div>
        </section>
      </AnimatedSection>

      {/* Seção de Ferramentas Práticas */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Ferramentas Práticas</span> que Transformam
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Descubra as tecnologias e metodologias que estão revolucionando a forma como trabalhamos e pensamos
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <AnimatedSection delay={0.2}>
              <div className="group bg-gradient-to-br from-blue-900/30 to-slate-800/30 p-8 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
                {/* ... Card 1 ... */}
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="group bg-gradient-to-br from-emerald-900/30 to-slate-800/30 p-8 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
                {/* ... Card 2 ... */}
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6}>
              <div className="group bg-gradient-to-br from-blue-900/30 to-emerald-900/30 p-8 rounded-3xl border border-blue-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
                {/* ... Card 3 ... */}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-32 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                O que você vai conquistar com o <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Manual Nexus</span>
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatedSection delay={0.2}>
              <div className="group bg-gradient-to-br from-blue-900/30 to-slate-800/30 p-10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full">
                {/* ... Card Benefício 1 (h-full adicionado para consistência de altura) ... */}
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="group bg-gradient-to-br from-emerald-900/30 to-slate-800/30 p-10 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full">
                {/* ... Card Benefício 2 ... */}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="group bg-gradient-to-br from-blue-900/30 to-emerald-900/30 p-10 rounded-3xl border border-blue-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full">
                {/* ... Card Benefício 3 ... */}
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
               <div className="group bg-gradient-to-br from-emerald-900/30 to-blue-900/30 p-10 rounded-3xl border border-emerald-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full">
                {/* ... Card Benefício 4 ... */}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="group bg-gradient-to-br from-blue-900/30 to-slate-800/30 p-10 rounded-3xl border border-blue-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full">
                {/* ... Card Benefício 5 ... */}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Seção de Prova/Autoridade */}
      <AnimatedSection>
        <section className="py-32 px-4 bg-gradient-to-r from-blue-900/20 to-emerald-900/20 relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* ... conteúdo da seção ... */}
          </div>
        </section>
      </AnimatedSection>

      {/* Chamada para Ação */}
      <AnimatedSection>
        <section id="cta" className="py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* ... conteúdo da seção ... */}
          </div>
        </section>
      </AnimatedSection>

      {/* Nova Seção de Conclusão */}
      <section className="py-32 px-4 bg-gradient-to-br from-slate-900 to-blue-900 relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">A grande mudança</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <div className="bg-gradient-to-br from-blue-900/40 to-emerald-900/40 p-12 md:p-16 rounded-3xl border border-cyan-500/30 backdrop-blur-sm mb-12">
              {/* ... conteúdo do bloco ... */}
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div className="text-center mb-12">
              {/* ... conteúdo do bloco ... */}
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6}>
            <div className="flex justify-center mt-16">
              {/* ... imagem do produto ... */}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="py-32 px-4 bg-gradient-to-br from-blue-900/20 to-emerald-900/20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Veja o <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">NEXUS</span> em Ação
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Descubra como profissionais estão transformando sua performance com o Manual NEXUS
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-12">
            <AnimatedSection delay={0.2}>
              <div className="group bg-gradient-to-br from-slate-800/60 to-blue-900/40 p-8 rounded-3xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm h-full">
                {/* ... Card Depoimento 1 (h-full adicionado) ... */}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="group bg-gradient-to-br from-emerald-900/40 to-slate-800/60 p-8 rounded-3xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm h-full">
                {/* ... Card Depoimento 2 (h-full adicionado) ... */}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="group bg-gradient-to-br from-blue-900/40 to-emerald-900/40 p-8 rounded-3xl border border-blue-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm h-full">
                {/* ... Card Depoimento 3 (h-full adicionado) ... */}
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.5}>
            <div className="text-center mt-16">
              {/* ... Botão final da seção ... */}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <AnimatedSection>
        <footer className="py-12 px-4 bg-slate-900 border-t border-slate-700">
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
    </div>
  )
}

export default App
