import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
// Ícones importados, incluindo os novos
import {
  ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp,
  CheckCircle, Sparkles, User, Lightbulb, Search, Eye,
  ClipboardEdit, Code, BarChart, Layout, BrainCircuit, AlertTriangle
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
import testimonial3Img from './assets/1000396866.jpg'
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
      {/* Hero Section com Nova Narrativa Persuasiva */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Elementos de fundo */}
        <div className="hidden md:block absolute top-20 left-20 w-72 h-72 bg-[#0D3A46]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-[#0D3A46]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Imagem de Fundo */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src={brainNetworkImg} 
            alt="Neural Network Background" 
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* Overlay com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1016]/70 via-[#14222E]/60 to-[#0B1016]/70"></div>

        {/* Conteúdo Principal com Nova Narrativa */}
        <div className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge de Urgência */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8E53]/20 border border-[#FF6B35]/40 rounded-full text-[#FF8E53] text-sm font-medium mb-8 backdrop-blur-sm animate-pulse">
            <AlertTriangle className="w-4 h-4 mr-2" />
            ATENÇÃO: A IA está evoluindo mais rápido que sua capacidade de aprendizado
          </div>

          {/* HEADLINE PRINCIPAL - Focada na Dor */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Cansado de se sentir <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] bg-clip-text text-transparent">ultrapassado</span> pela velocidade da IA?
          </h1>

          {/* SUBHEADLINE - Problema Específico */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            <span className="text-[#FF8E53] font-semibold">Toda semana surge uma ferramenta nova</span>, todo mês uma atualização revolucionária, e você fica sempre 
            <span className="text-[#FF6B35] font-semibold"> correndo atrás do prejuízo</span>, sem nunca conseguir dominar de verdade.
          </p>

          {/* Pain Points List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3 text-gray-300">
              <div className="w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <AlertTriangle className="w-3 h-3 text-white" />
              </div>
              <span className="text-left">Você investe tempo aprendendo uma ferramenta e ela já está desatualizada</span>
            </div>
            <div className="flex items-start space-x-3 text-gray-300">
              <div className="w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <AlertTriangle className="w-3 h-3 text-white" />
              </div>
              <span className="text-left">O excesso de informações paralisa sua capacidade de decisão</span>
            </div>
            <div className="flex items-start space-x-3 text-gray-300">
              <div className="w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <AlertTriangle className="w-3 h-3 text-white" />
              </div>
              <span className="text-left">Seus concorrentes estão usando IA e você está ficando para trás</span>
            </div>
          </div>

          {/* Solução - Transformação */}
          <div className="bg-gradient-to-r from-[#14222E]/50 to-[#1C2A35]/50 p-8 rounded-2xl border border-[#0D3A46]/30 mb-12 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              E se você pudesse <span className="text-[#4FD1C5]">dominar as bases fundamentais</span> que funcionam independentemente das ferramentas que surgirem?
            </h2>
            <p className="text-lg text-gray-300">
              O Nexus não te ensina ferramentas passageiras, mas sim os <span className="text-[#38B2AC] font-semibold">princípios imutáveis</span> da alta performance com IA que vão mantê-lo relevante pelos próximos 10 anos.
            </p>
          </div>

          {/* BOTÕES DE VENDA COM EFEITO PISCAR */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            {/* Botão 1 */}
            <div className="pulse-button-container">
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF6B35]/90 hover:to-[#FF8E53]/90 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105 border-0 pulse-button">
                  <Zap className="w-5 h-5 mr-2" />
                  ACESSO IMEDIATO
                </Button>
              </a>
            </div>

            {/* Botão 2 */}
            <div className="pulse-button-container">
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF6B35]/90 hover:to-[#FF8E53]/90 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105 border-0 pulse-button">
                  <Rocket className="w-5 h-5 mr-2" />
                  GARANTIR MINHA VAGA
                </Button>
              </a>
            </div>

            {/* Botão 3 */}
            <div className="pulse-button-container">
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF6B35]/90 hover:to-[#FF8E53]/90 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105 border-0 pulse-button">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  QUERO ME ATUALIZAR AGORA
                </Button>
              </a>
            </div>
          </div>

          {/* Garantia e Urgência */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-[#4FD1C5] mr-2" />
              <span>7 dias de garantia incondicional</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-[#4FD1C5] mr-2" />
              <span>Acesso vitalício às atualizações</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-[#4FD1C5] mr-2" />
              <span>Suporte direto com especialistas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Restante do código permanece igual até a seção "O que você vai dominar" */}
      {/* Seção de Ticker */}
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

      {/* Seção "O que você vai dominar" - Atualizada com foco na solução da dor */}
      <section id="sobre" className="py-32 px-4 bg-[#0B1016]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pare de <span className="text-[#FF6B35]">correr atrás</span> e comece a <span className="bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] bg-clip-text text-transparent">liderar</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Enquanto outros se perdem no excesso de ferramentas, você dominará os princípios fundamentais que tornam qualquer tecnologia útil.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Item 1 - Focado em resolver a dor específica */}
            <AnimatedSection delay={0.1}>
              <div className="group bg-gradient-to-br from-[#14222E] to-[#1C2A35] p-10 rounded-3xl border border-[#0D3A46]/30 hover:border-[#0D3A46]/60 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 opacity-20">
                  <img src={redeNeuralAbstrataImg} alt="Mentalidade Informacional" className="w-full h-full object-cover object-center" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Mentalidade Antifrágil</h3>
                  <p className="text-gray-300 text-lg">Aprenda a se adaptar a qualquer nova ferramenta em dias, não meses. Transforme a velocidade da IA em vantagem.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Item 2 */}
            <AnimatedSection delay={0.2}>
              <div className="group bg-gradient-to-br from-[#14222E] to-[#1C2A35] p-10 rounded-3xl border border-[#0D3A46]/30 hover:border-[#0D3A46]/60 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 opacity-20">
                  <img src={servicosIAImg} alt="Ferramentas Práticas de IA" className="w-full h-full object-cover object-center" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#14222E] to-[#0D3A46] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Filtro de Qualidade</h3>
                  <p className="text-gray-300 text-lg">Saiba identificar quais ferramentas valem seu tempo e ignore o ruído. Foque no que realmente importa.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Restante dos itens permanece similar, mas você pode atualizar os textos para focar mais nas dores */}
            {/* ... outros itens ... */}

          </div>

          {/* NOVA SEÇÃO: Comparação Transformação */}
          <AnimatedSection>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 bg-gradient-to-br from-[#14222E] to-[#1C2A35] p-12 rounded-3xl border border-[#0D3A46]/30">
              <div>
                <h3 className="text-2xl font-bold text-[#FF6B35] mb-6">ANTES DO NEXUS</h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300">
                    <AlertTriangle className="w-5 h-5 text-[#FF6B35] mr-3 mt-1 flex-shrink-0" />
                    <span>Frustração constante com ferramentas novas</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <AlertTriangle className="w-5 h-5 text-[#FF6B35] mr-3 mt-1 flex-shrink-0" />
                    <span>Tempo desperdiçado aprendendo coisas desnecessárias</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <AlertTriangle className="w-5 h-5 text-[#FF6B35] mr-3 mt-1 flex-shrink-0" />
                    <span>Sensação de estar sempre atrás dos concorrentes</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#4FD1C5] mb-6">DEPOIS DO NEXUS</h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#4FD1C5] mr-3 mt-1 flex-shrink-0" />
                    <span>Clareza para focar no que realmente importa</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#4FD1C5] mr-3 mt-1 flex-shrink-0" />
                    <span>Confiança para adotar qualquer nova tecnologia</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#4FD1C5] mr-3 mt-1 flex-shrink-0" />
                    <span>Vantagem competitiva sustentável</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Restante do código permanece similar */}
      {/* ... outras seções ... */}

    </div>
  )
} 

export default App
