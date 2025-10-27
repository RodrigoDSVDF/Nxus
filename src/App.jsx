import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
// Ícones importados, incluindo os novos
import {
  ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp,
  CheckCircle, Sparkles, User, Lightbulb, Search, Eye,
  ClipboardEdit, Code, BarChart, Layout, BrainCircuit, AlertTriangle,
  Clock, Shield, Users
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
import produtoImg from './assets/produto.jpg';

// Importando o vídeo e nova imagem de fundo
import meuVideo from './assets/meu-video.mp4'
import fundo02 from './assets/fundo02.jpg'

// Hook personalizado para detectar quando elemento entra na viewport
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1, // Ativa quando 10% do elemento está visível
        rootMargin: '0px 0px -100px 0px' // Ativa um pouco antes de entrar completamente
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return [ref, isVisible]
}

function App() {
  const [isVisible, setIsVisible] = useState(false) 
  
  // Refs para animações de scroll nas seções
  const [heroRef, heroVisible] = useScrollAnimation()
  const [cardsRef, cardsVisible] = useScrollAnimation()
  const [productRef, productVisible] = useScrollAnimation()

  useEffect(() => {
    setIsVisible(true)
  }, []) 

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  } 

  return (
    <div className="min-h-screen bg-[#0B1016] font-['Poppins',sans-serif] overflow-x-hidden">
      
      {/* NOVA FAIXA COM MOVIMENTO HORIZONTAL NO TOPO */}
      <div className="horizontal-banner-wrapper">
        <div className="horizontal-banner">
          <div className="banner-content">
            <span className="banner-item">🚀 DOMINE A IA ANTES QUE ELA DOMINE VOCÊ</span>
            <span className="banner-item">⚡ ACESSO VITALÍCIO + ATUALIZAÇÕES CONSTANTES</span>
            <span className="banner-item">🎯 MÉTODO COMPROVADO POR TOP PERFORMERS</span>
            <span className="banner-item">💎 GARANTIA DE 7 DIAS SEM PERGUNTAS</span>
            <span className="banner-item">🔥 TRANSFORME SUA CARREIRA COM IA</span>
            <span className="banner-item">🚀 DOMINE A IA ANTES QUE ELA DOMINE VOCÊ</span>
            <span className="banner-item">⚡ ACESSO VITALÍCIO + ATUALIZAÇÕES CONSTANTES</span>
            <span className="banner-item">🎯 MÉTODO COMPROVADO POR TOP PERFORMERS</span>
            <span className="banner-item">💎 GARANTIA DE 7 DIAS SEM PERGUNTAS</span>
            <span className="banner-item">🔥 TRANSFORME SUA CARREIRA COM IA</span>
          </div>
        </div>
      </div>

      {/* Hero Section com animação de entrada vertical */}
      <section 
        ref={heroRef}
        className={`relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden transition-all duration-1000 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {/* Elementos de fundo com animação horizontal */}
        <div className="hidden md:block absolute top-20 left-20 w-72 h-72 bg-[#0D3A46]/20 rounded-full blur-3xl animate-float-horizontal"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-[#0D3A46]/15 rounded-full blur-3xl animate-float-horizontal-reverse"></div>

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

        {/* Conteúdo Principal com animação vertical */}
        <div className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* JANELA DE VÍDEO NO TOPO com animação de entrada vertical */}
          <div className="video-container mb-16 animate-slide-down">
            <video 
              src={meuVideo} 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl video-player"
            >
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>

          {/* Badge de Urgência com animação horizontal */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8E53]/20 border border-[#FF6B35]/40 rounded-full text-[#FF8E53] text-sm font-medium mb-8 backdrop-blur-sm animate-slide-right">
            <AlertTriangle className="w-4 h-4 mr-2" />
            ATENÇÃO: A IA está evoluindo mais rápido que sua capacidade de aprendizado
          </div>

          {/* HEADLINE PRINCIPAL - Focada na Dor com animação vertical */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Cansado de se sentir <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] bg-clip-text text-transparent">ultrapassado</span> pela velocidade da IA?
          </h1>

          {/* SUBHEADLINE - Problema Específico com animação vertical */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up-delay">
            <span className="text-[#FF8E53] font-semibold">Toda semana surge uma ferramenta nova</span>, todo mês uma atualização revolucionária, e você fica sempre 
            <span className="text-[#FF6B35] font-semibold"> correndo atrás do prejuízo</span>, sem nunca conseguir dominar de verdade.
          </p>

          {/* Pain Points List com animação horizontal alternada */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3 text-gray-300 animate-slide-left">
              <div className="w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <AlertTriangle className="w-3 h-3 text-white" />
              </div>
              <span className="text-left">Você investe tempo aprendendo uma ferramenta e ela já está desatualizada</span>
            </div>
            <div className="flex items-start space-x-3 text-gray-300 animate-slide-up">
              <div className="w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <AlertTriangle className="w-3 h-3 text-white" />
              </div>
              <span className="text-left">O excesso de informações paralisa sua capacidade de decisão</span>
            </div>
            <div className="flex items-start space-x-3 text-gray-300 animate-slide-right">
              <div className="w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <AlertTriangle className="w-3 h-3 text-white" />
              </div>
              <span className="text-left">Seus concorrentes estão usando IA e você está ficando para trás</span>
            </div>
          </div>

          {/* Solução - Transformação com animação de escala */}
          <div className="bg-gradient-to-r from-[#14222E]/50 to-[#1C2A35]/50 p-8 rounded-2xl border border-[#0D3A46]/30 mb-12 backdrop-blur-sm animate-scale-in">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              E se você pudesse <span className="text-[#4FD1C5]">dominar as bases fundamentais</span> que funcionam independentemente das ferramentas que surgirem?
            </h2>
            <p className="text-lg text-gray-300">
              O Nexus não te ensina ferramentas passageiras, mas sim os <span className="text-[#38B2AC] font-semibold">princípios imutáveis</span> da alta performance com IA que vão mantê-lo relevante pelos próximos 10 anos.
            </p>
          </div>

          {/* BOTÃO 1 - NO INÍCIO */}
          <div className="pulse-button-container mb-16 max-w-md mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-slide-up">
              O Futuro Não Espera por Ninguém
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-slide-up-delay">
              <span className="text-[#FF6B35] font-semibold">72% dos profissionais</span> que não se adaptarem à IA nos próximos 2 anos serão substituídos. 
              <span className="text-[#4FD1C5] font-semibold"> Escolha de qual lado você quer estar.</span>
            </p>

            {/* SEÇÃO COM IMAGEM DE FUNDO NO MEIO com animação */}
            <div className="background-image-section my-16 rounded-2xl overflow-hidden animate-fade-in">
              <img 
                src={fundo02} 
                alt="Fundo Nexus" 
                className="w-full h-64 md:h-80 object-cover rounded-2xl background-image"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1016]/60 to-[#0B1016]/60 flex items-center justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white text-center px-4 animate-pulse-slow">
                  Domine a IA Antes que Ela Domine Você
                </h3>
              </div>
            </div>

            {/* Benefícios Rápidos com animação escalonada */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center text-center animate-slide-up stagger-1">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-[#4FD1C5]" />
                </div>
                <h4 className="text-white font-semibold mb-2">Acesso Imediato</h4>
                <p className="text-gray-400">Comece em minutos após a compra</p>
              </div>
              
              <div className="flex flex-col items-center text-center animate-slide-up stagger-2">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-[#4FD1C5]" />
                </div>
                <h4 className="text-white font-semibold mb-2">Garantia de 7 Dias</h4>
                <p className="text-gray-400">Sem perguntas, sem riscos</p>
              </div>
              
              <div className="flex flex-col items-center text-center animate-slide-up stagger-3">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-[#4FD1C5]" />
                </div>
                <h4 className="text-white font-semibold mb-2">Suporte Exclusivo</h4>
                <p className="text-gray-400">Tire dúvidas diretamente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DOS CARTÕES - Animação horizontal da esquerda */}
      <section 
        ref={cardsRef}
        className={`py-20 px-4 bg-gradient-to-b from-[#0B1016] to-[#14222E] transition-all duration-1000 ${
          cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}
      >
        <AnimatedSection>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 animate-slide-down">
              O Que Você Vai <span className="text-[#4FD1C5]">Dominar</span>
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto animate-slide-up">
              Um método passo a passo para você se tornar um expert em IA, mesmo que comece do zero
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Cartão 1 com animação horizontal da esquerda */}
              <div className="relative bg-gradient-to-br from-[#14222E] to-[#0B1016] p-8 rounded-2xl border border-[#0D3A46] hover:border-[#4FD1C5] transition-all duration-300 overflow-hidden animate-slide-left card-hover">
                <div className="absolute inset-0 opacity-10">
                  <img src={neuralNetworkImg} alt="Neural Network" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-6">
                    <Brain className="w-7 h-7 text-[#4FD1C5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Fundamentos da IA</h3>
                  <p className="text-gray-300">
                    Compreenda os conceitos essenciais que permanecem relevantes independentemente das ferramentas.
                  </p>
                </div>
              </div>

              {/* Cartão 2 com animação vertical de baixo */}
              <div className="relative bg-gradient-to-br from-[#14222E] to-[#0B1016] p-8 rounded-2xl border border-[#0D3A46] hover:border-[#4FD1C5] transition-all duration-300 overflow-hidden animate-slide-up card-hover">
                <div className="absolute inset-0 opacity-10">
                  <img src={laptopNeuralImg} alt="Laptop Neural" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-6">
                    <Zap className="w-7 h-7 text-[#4FD1C5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Produtividade Extrema</h3>
                  <p className="text-gray-300">
                    Multiplique sua eficiência usando IA para automatizar tarefas repetitivas e complexas.
                  </p>
                </div>
              </div>

              {/* Cartão 3 com animação horizontal da direita */}
              <div className="relative bg-gradient-to-br from-[#14222E] to-[#0B1016] p-8 rounded-2xl border border-[#0D3A46] hover:border-[#4FD1C5] transition-all duration-300 overflow-hidden animate-slide-right card-hover">
                <div className="absolute inset-0 opacity-10">
                  <img src={xadrezStrategiaImg} alt="Estratégia" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-[#4FD1C5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Estratégias Avançadas</h3>
                  <p className="text-gray-300">
                    Técnicas comprovadas que os top performers usam para se manterem à frente da curva.
                  </p>
                </div>
              </div>

              {/* Cartão 4 com animação horizontal da esquerda */}
              <div className="relative bg-gradient-to-br from-[#14222E] to-[#0B1016] p-8 rounded-2xl border border-[#0D3A46] hover:border-[#4FD1C5] transition-all duration-300 overflow-hidden animate-slide-left card-hover">
                <div className="absolute inset-0 opacity-10">
                  <img src={redeNeuralAbstrataImg} alt="Rede Neural" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-6">
                    <Rocket className="w-7 h-7 text-[#4FD1C5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Implementação Rápida</h3>
                  <p className="text-gray-300">
                    Saiba como aplicar imediatamente o que aprender, com exemplos práticos e casos reais.
                  </p>
                </div>
              </div>

              {/* Cartão 5 com animação vertical de baixo */}
              <div className="relative bg-gradient-to-br from-[#14222E] to-[#0B1016] p-8 rounded-2xl border border-[#0D3A46] hover:border-[#4FD1C5] transition-all duration-300 overflow-hidden animate-slide-up card-hover">
                <div className="absolute inset-0 opacity-10">
                  <img src={brainAIImg} alt="IA Global" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-6">
                    <Globe className="w-7 h-7 text-[#4FD1C5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Visão de Mercado</h3>
                  <p className="text-gray-300">
                    Entenda as tendências e prepare-se para as próximas revoluções da IA.
                  </p>
                </div>
              </div>

              {/* Cartão 6 com animação horizontal da direita */}
              <div className="relative bg-gradient-to-br from-[#14222E] to-[#0B1016] p-8 rounded-2xl border border-[#0D3A46] hover:border-[#4FD1C5] transition-all duration-300 overflow-hidden animate-slide-right card-hover">
                <div className="absolute inset-0 opacity-10">
                  <img src={digitalToolsImg} alt="Ferramentas Digitais" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-6">
                    <Key className="w-7 h-7 text-[#4FD1C5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Acesso Vitalício</h3>
                  <p className="text-gray-300">
                    Atualizações constantes para manter você sempre na vanguarda da tecnologia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* SEÇÃO FINAL COM A IMAGEM PRODUTO.JPG - Animação horizontal da direita */}
      <section 
        ref={productRef}
        className={`py-20 px-4 bg-gradient-to-b from-[#14222E] to-[#0B1016] transition-all duration-1000 ${
          productVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}
      >
        <AnimatedSection>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Imagem do Produto com animação horizontal */}
              <div className="flex justify-center animate-slide-left">
                <img 
                  src={produtoImg} 
                  alt="Nexus - Manual de Alta Performance com IA" 
                  className="rounded-2xl shadow-2xl w-full max-w-md product-image"
                />
              </div>
              
              {/* Conteúdo do Produto com animação horizontal */}
              <div className="text-center lg:text-left animate-slide-right">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Nexus - Manual de Alta Performance com IA
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Domine as estratégias comprovadas que os top performers usam para multiplicar sua produtividade com IA e se manter relevante no mercado.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center animate-slide-left stagger-1">
                    <CheckCircle className="w-6 h-6 text-[#4FD1C5] mr-3" />
                    <span className="text-white">Acesso imediato e vitalício</span>
                  </div>
                  <div className="flex items-center animate-slide-left stagger-2">
                    <CheckCircle className="w-6 h-6 text-[#4FD1C5] mr-3" />
                    <span className="text-white">Atualizações constantes</span>
                  </div>
                  <div className="flex items-center animate-slide-left stagger-3">
                    <CheckCircle className="w-6 h-6 text-[#4FD1C5] mr-3" />
                    <span className="text-white">Suporte prioritário</span>
                  </div>
                  <div className="flex items-center animate-slide-left stagger-4">
                    <CheckCircle className="w-6 h-6 text-[#4FD1C5] mr-3" />
                    <span className="text-white">Garantia de 7 dias</span>
                  </div>
                </div>

                {/* BOTÃO FINAL */}
                <div className="pulse-button-container max-w-md mx-auto lg:mx-0">
                  <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF6B35]/90 hover:to-[#FF8E53]/90 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105 border-0 pulse-button">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      QUERO ME ATUALIZAR AGORA
                    </Button>
                  </a>
                </div>

                {/* Garantia Final */}
                <div className="mt-6 text-gray-400 animate-fade-in">
                  <p className="flex items-center justify-center lg:justify-start">
                    <CheckCircle className="w-5 h-5 text-[#4FD1C5] mr-2" />
                    <span>Compra 100% segura • Acesso imediato • Suporte prioritário</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <section>
        <AnimatedSection>
          <footer className="py-12 px-4 bg-[#0B1016] border-t border-[#1C2A35]">
            <div className="max-w-6xl mx-auto text-center">
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
