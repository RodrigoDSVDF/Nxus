import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
// Ícones importados, incluindo os novos
import {
  ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp,
  CheckCircle, Sparkles, User, Lightbulb, Search, Eye,
  ClipboardEdit, Code, BarChart, Layout, BrainCircuit // Novos ícones
} from 'lucide-react'
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
// A imagem de garantia não é mais importada, pois foi removida
// import garantia7DiasImg from './assets/7-dias-garantido.jpg'; 

function App() {
  const [isVisible, setIsVisible] = useState(false) 

  useEffect(() => {
    setIsVisible(true)
  }, []) 

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  } 

  return (
    <div className="min-h-screen bg-[#0B1016] font-['Poppins',sans-serif] overflow-x-hidden">
      {/* Hero Section com Nova Paleta */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Elementos de fundo com nova paleta */}
        <div className="hidden md:block absolute top-20 left-20 w-72 h-72 bg-[#0D3A46]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-[#0D3A46]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Imagem de Fundo (OPACIDADE AUMENTADA) */}
        <div className="absolute inset-0 opacity-30"> {/* ALTERADO DE opacity-20 */}
          <img 
            src={brainNetworkImg} 
            alt="Neural Network Background" 
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* Overlay com gradiente (OPACIDADE REDUZIDA) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1016]/70 via-[#14222E]/60 to-[#0B1016]/70"></div>

        {/* Conteúdo Principal */}
        <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge de Destaque */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0D3A46]/30 to-[#14222E]/40 border border-[#0D3A46]/50 rounded-full text-[#8AB4B8] text-sm font-medium mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            Transforme Sua Performance com IA
          </div>

          {/* HEADLINE PRINCIPAL */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Domine a <span className="bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] bg-clip-text text-transparent">Era da IA</span>
          </h1>
        </div>

      </section>

      {/* NOVA Seção - Faixa de Conversão (Ticker) */}
      <section className="py-4 bg-gradient-to-r from-[#14222E] to-[#1C2A35] border-y border-[#0D3A46]/50 overflow-hidden">
        <div className="ticker-wrap">
          <div className="ticker-move">
            <div className="ticker-item">Engenharia de Contexto</div>
            <div className="ticker-item-separator">
              <Sparkles className="w-4 h-4 text-[#4FD1C5]" />
            </div>
            <div className="ticker-item">Dominação de Criação de Páginas</div>
            <div className="ticker-item-separator">
              <Sparkles className="w-4 h-4 text-[#4FD1C5]" />
            </div>
            <div className="ticker-item">Análise de Dados Aplicada</div>
            <div className="ticker-item-separator">
              <Sparkles className="w-4 h-4 text-[#4FD1C5]" />
            </div>
            <div className="ticker-item">Python para Projetos de IA</div>
            <div className="ticker-item-separator">
              <Sparkles className="w-4 h-4 text-[#4FD1C5]" />
            </div>
            <div className="ticker-item">Aprendizado Otimizado com IA</div>
            <div className="ticker-item-separator">
              <Sparkles className="w-4 h-4 text-[#4FD1C5]" />
            </div>
            {/* Itens duplicados para loop contínuo */}
            <div className="ticker-item">Engenharia de Contexto</div>
            <div className="ticker-item-separator">
              <Sparkles className="w-4 h-4 text-[#4FD1C5]" />
            </div>
            <div className="ticker-item">Dominação de Criação de Páginas</div>
            <div className="ticker-item-separator">
              <Sparkles className="w-4 h-4 text-[#4FD1C5]" />
            </div>
            <div className="ticker-item">Análise de Dados Aplicada</div>
            <div className="ticker-item-separator">
              <Sparkles className="w-4 h-4 text-[#4FD1C5]" />
            </div>
            <div className="ticker-item">Python para Projetos de IA</div>
            <div className="ticker-item-separator">
              <Sparkles className="w-4 h-4 text-[#4FD1C5]" />
            </div>
            <div className="ticker-item">Aprendizado Otimizado com IA</div>
            <div className="ticker-item-separator">
              <Sparkles className="w-4 h-4 text-[#4FD1C5]" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção "O que você vai dominar" (MODIFICADA E EXPANDIDA) */}
      <section id="sobre" className="py-32 px-4 bg-[#0B1016]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                O Ecossistema Completo para <span className="bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] bg-clip-text text-transparent">Performance Absoluta</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                O Nexus não é apenas um curso, é um manual estratégico para dominar as habilidades mais valiosas da nova economia.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Item 1 */}
            <AnimatedSection delay={0.1}>
              <div className="group bg-gradient-to-br from-[#14222E] to-[#1C2A35] p-10 rounded-3xl border border-[#0D3A46]/30 hover:border-[#0D3A46]/60 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 opacity-20"> {/* ALTERADO DE opacity-10 */}
                  <img src={redeNeuralAbstrataImg} alt="Mentalidade Informacional" className="w-full h-full object-cover object-center" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Mentalidade Informacional</h3>
                  <p className="text-gray-300 text-lg">Desenvolva a skill de aprender, desaprender e reaprender rapidamente para estar sempre à frente.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Item 2 */}
            <AnimatedSection delay={0.2}>
              <div className="group bg-gradient-to-br from-[#14222E] to-[#1C2A35] p-10 rounded-3xl border border-[#0D3A46]/30 hover:border-[#0D3A46]/60 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 opacity-20"> {/* ALTERADO DE opacity-10 */}
                  <img src={servicosIAImg} alt="Ferramentas Práticas de IA" className="w-full h-full object-cover object-center" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#14222E] to-[#0D3A46] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Ferramentas Práticas</h3>
                  <p className="text-gray-300 text-lg">Um guia simplificado para extrair o máximo de cada ferramenta digital, sem complicação.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Item 3 */}
            <AnimatedSection delay={0.3}>
              <div className="group bg-gradient-to-br from-[#1C2A35] to-[#14222E] p-10 rounded-3xl border border-[#0D3A46]/30 hover:border-[#0D3A46]/60 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 opacity-20"> {/* ALTERADO DE opacity-10 */}
                  <img src={produtividadeImg} alt="Vantagem Competitiva" className="w-full h-full object-cover object-center" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Key className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Vantagem Competitiva</h3>
                  <p className="text-gray-300 text-lg">Entregue mais rápido, com mais qualidade e torne-se referência absoluta em sua área.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Item 4 */}
            <AnimatedSection delay={0.4}>
              <div className="group bg-gradient-to-br from-[#14222E] to-[#1C2A35] p-10 rounded-3xl border border-[#0D3A46]/30 hover:border-[#0D3A46]/60 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 opacity-20"> {/* ALTERADO DE opacity-10 */}
                  <img src={xadrezStrategiaImg} alt="Engenharia de Contexto" className="w-full h-full object-cover object-center" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <ClipboardEdit className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Engenharia de Contexto</h3>
                  <p className="text-gray-300 text-lg">Aprenda a "conversar" com a IA em nível profissional para extrair respostas precisas e criativas.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Item 5 */}
            <AnimatedSection delay={0.5}>
              <div className="group bg-gradient-to-br from-[#14222E] to-[#1C2A35] p-10 rounded-3xl border border-[#0D3A46]/30 hover:border-[#0D3A46]/60 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 opacity-20"> {/* ALTERADO DE opacity-10 */}
                  <img src={laptopNeuralImg} alt="Python para IA" className="w-full h-full object-cover object-center" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Python para Projetos de IA</h3>
                  <p className="text-gray-300 text-lg">Vá além do básico. Entenda os fundamentos de Python para automatizar tarefas e prototipar suas próprias soluções de IA.</p>
                </div>
              </div>
            </AnimatedSection> {/* <-- ERRO CORRIGIDO AQUI */}

            {/* Item 6 */}
            <AnimatedSection delay={0.6}>
              <div className="group bg-gradient-to-br from-[#1C2A35] to-[#14222E] p-10 rounded-3xl border border-[#0D3A46]/30 hover:border-[#0D3A46]/60 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 opacity-20"> {/* ALTERADO DE opacity-10 */}
                  <img src={dataAnalysisImg} alt="Análise de Dados" className="w-full h-full object-cover object-center" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <BarChart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Decisões Baseadas em Dados</h3>
                  <p className="text-gray-300 text-lg">Pare de "achar". Aprenda a coletar, analisar e visualizar dados para tomar decisões estratégicas com base em fatos.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Item 7 */}
            <AnimatedSection delay={0.7}>
              <div className="group bg-gradient-to-br from-[#14222E] to-[#1C2A35] p-10 rounded-3xl border border-[#0D3A46]/30 hover:border-[#0D3A46]/60 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 opacity-20"> {/* ALTERADO DE opacity-10 */}
                  <img src={digitalToolsImg} alt="Criação de Páginas" className="w-full h-full object-cover object-center" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Layout className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Páginas que Convertem</h3>
                  <p className="text-gray-300 text-lg">Domine o design persuasivo e UX para criar landing pages que transformam visitantes em clientes.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Item 8 */}
            <AnimatedSection delay={0.8}>
              <div className="group bg-gradient-to-br from-[#14222E] to-[#1C2A35] p-10 rounded-3xl border border-[#0D3A46]/30 hover:border-[#0D3A46]/60 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 opacity-20"> {/* ALTERADO DE opacity-10 */}
                  <img src={brainAIImg} alt="Aprendizado com IA" className="w-full h-full object-cover object-center" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <BrainCircuit className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Aprendizado Otimizado</h3>
                  <p className="text-gray-300 text-lg">Use a IA para aprender qualquer coisa mais rápido, sintetizar informações e criar planos de estudo personalizados.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Seção de Prova/Autoridade */}
      <section className="py-32 px-4 bg-gradient-to-r from-[#14222E] to-[#1C2A35] relative">
        <AnimatedSection>
          <div className="absolute inset-0 opacity-15"> {/* ALTERADO DE opacity-5 */}
            <img src={brainNetworkImg} alt="Brain Network" className="w-full h-full object-cover object-right" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              Alta Performance não é mais <span className="bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] bg-clip-text text-transparent">opção</span> — é <span className="bg-gradient-to-r from-[#38B2AC] to-[#4FD1C5] bg-clip-text text-transparent">requisito</span>
            </h2>
            <div className="bg-gradient-to-br from-[#1C2A35] to-[#14222E] p-12 md:p-16 rounded-3xl border border-[#0D3A46]/40 backdrop-blur-sm">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Empresas, profissionais e líderes que dominam o modelo <strong className="text-[#4FD1C5]">econômico informacional</strong> estão sempre à frente. O Nexus traduz essa realidade em <strong className="text-[#38B2AC]">passos aplicáveis</strong> para o seu dia a dia, unindo ciência, tecnologia e estratégia de performance.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Chamada para Ação */}
      <section id="cta" className="py-32 px-4 bg-[#0B1016]">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              Está pronto para elevar sua performance ao <span className="bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] bg-clip-text text-transparent">próximo nível</span>?
            </h2>
            <div className="mb-16">
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="h-14 px-8 bg-gradient-to-r from-[#0D3A46] to-[#14222E] hover:from-[#0D3A46]/90 hover:to-[#14222E]/90 text-white font-bold rounded-xl shadow-2xl hover:shadow-[#0D3A46]/25 transition-all duration-300 transform hover:scale-105 border-0"
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

      {/* Footer */}
      <section>
        <AnimatedSection>
          <footer className="py-12 px-4 bg-[#0B1016] border-t border-[#1C2A35]">
            <div className="max-w-6xl mx-auto text-center">
              
              {/* IMAGEM DE GARANTIA REMOVIDA DAQUI */}

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
