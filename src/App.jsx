import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import {
  ArrowRight, Zap, Target, Globe, Key, Rocket, Brain, TrendingUp,
  CheckCircle, AlertTriangle, Clock, Shield, Users, Play
} from 'lucide-react'
import './App.css' 

// Importando componente de animação (assumindo que existe na pasta components)
import AnimatedSection from '@/components/ui/AnimatedSection.jsx'; 

// Importação de imagens
import brainNetworkImg from './assets/1000393266.jpg'
import neuralNetworkImg from './assets/1000393264.jpg'
import laptopNeuralImg from './assets/1000393263.jpg'
import digitalToolsImg from './assets/1000395915.jpg'
import brainAIImg from './assets/1000393262.jpg'
import xadrezStrategiaImg from './assets/xadrez-estrategia.jpg'
import redeNeuralAbstrataImg from './assets/rede-neural-abstrata.jpg'
import produtoImg from './assets/produto.jpg'
import fundo02 from './assets/fundo02.jpg'
import meuVideo from './assets/meu-video.mp4'

// --- DADOS ESTRUTURADOS (Refatoração para limpar o JSX) ---
const features = [
  { 
    icon: Brain, 
    title: "Fundamentos da IA", 
    desc: "Compreenda os conceitos essenciais que permanecem relevantes independente da ferramenta.",
    img: neuralNetworkImg,
    delay: "animate-slide-left"
  },
  { 
    icon: Zap, 
    title: "Produtividade Extrema", 
    desc: "Multiplique sua eficiência automatizando tarefas repetitivas e complexas em segundos.",
    img: laptopNeuralImg,
    delay: "animate-slide-up"
  },
  { 
    icon: Target, 
    title: "Estratégias Avançadas", 
    desc: "Técnicas de engenharia de prompt que os top performers usam para obter resultados perfeitos.",
    img: xadrezStrategiaImg,
    delay: "animate-slide-right"
  },
  { 
    icon: Rocket, 
    title: "Implementação Rápida", 
    desc: "Blueprints prontos para copiar e colar no seu fluxo de trabalho hoje mesmo.",
    img: redeNeuralAbstrataImg,
    delay: "animate-slide-left"
  },
  { 
    icon: Globe, 
    title: "Visão de Mercado", 
    desc: "Antecipe tendências e saiba exatamente para onde o dinheiro está indo na era da IA.",
    img: brainAIImg,
    delay: "animate-slide-up"
  },
  { 
    icon: Key, 
    title: "Acesso Vitalício", 
    desc: "Uma única compra garante atualizações constantes. Você nunca mais ficará desatualizado.",
    img: digitalToolsImg,
    delay: "animate-slide-right"
  }
];

// Hook de Scroll Animation
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => ref.current && observer.unobserve(ref.current)
  }, [])

  return [ref, isVisible]
}

// --- COMPONENTE PRINCIPAL ---
function App() {
  const [heroRef, heroVisible] = useScrollAnimation()
  const [painRef, painVisible] = useScrollAnimation()
  const [cardsRef, cardsVisible] = useScrollAnimation()
  const [productRef, productVisible] = useScrollAnimation()

  const checkoutLink = "https://pay.cakto.com.br/5dUKrWD"; // Link centralizado

  return (
    <div className="min-h-screen bg-[#0B1016] font-['Poppins',sans-serif] overflow-x-hidden text-white selection:bg-[#FF6B35] selection:text-white">
      
      {/* 1. FAIXA DE URGÊNCIA (SCROLL) */}
      <div className="horizontal-banner-wrapper border-b border-[#FF6B35]/30">
        <div className="horizontal-banner">
          <div className="banner-content text-sm">
             <span className="banner-item">🚀 PREÇO PROMOCIONAL POR TEMPO LIMITADO</span>
             <span className="banner-item">⚡ ACESSO VITALÍCIO + ATUALIZAÇÕES</span>
             <span className="banner-item">💎 GARANTIA BLINDADA DE 7 DIAS</span>
             <span className="banner-item">🔥 NÃO FIQUE PARA TRÁS NA REVOLUÇÃO DA IA</span>
             <span className="banner-item">🚀 PREÇO PROMOCIONAL POR TEMPO LIMITADO</span>
             <span className="banner-item">⚡ ACESSO VITALÍCIO + ATUALIZAÇÕES</span>
             <span className="banner-item">💎 GARANTIA BLINDADA DE 7 DIAS</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION (ALTA CONVERSÃO) */}
      <section 
        ref={heroRef}
        className={`relative pt-12 pb-20 px-4 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#4FD1C5]/10 rounded-full blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#FF6B35]/10 rounded-full blur-[100px] animate-pulse-slow"></div>
          <img src={brainNetworkImg} alt="BG" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1016] via-[#0B1016]/80 to-[#0B1016]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-full mb-8 animate-slide-down backdrop-blur-md">
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF6B35]"></span>
            </span>
            <span className="text-[#FF8E53] text-sm font-semibold tracking-wide uppercase">Método Validado • Nexus AI</span>
          </div>

          {/* Headline Poderosa */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            Domine a IA Antes Que <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] bg-clip-text text-transparent">Ela Domine Você</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mb-10 leading-relaxed animate-slide-up-delay">
            Pare de perder tempo com ferramentas que mudam toda semana. Descubra os <span className="text-[#4FD1C5] font-bold">princípios imutáveis</span> da alta performance com IA e blinde sua carreira para os próximos 10 anos.
          </p>

          {/* CTA Principal (Acima da dobra = +Conversão) */}
          <div className="w-full flex flex-col items-center animate-scale-in mb-12">
            <a href={checkoutLink} target="_blank" rel="noopener noreferrer" className="group relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-200"></div>
              <Button className="relative w-full h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#e05a2b] hover:to-[#e07a46] text-white font-bold text-xl rounded-xl shadow-2xl flex items-center justify-center gap-3 pulse-button">
                QUERO ACESSO IMEDIATO
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#4FD1C5]"/> Garantia de 7 dias ou seu dinheiro de volta
            </p>
          </div>

          {/* Vídeo Sales Letter (VSL) */}
          <div className="w-full max-w-4xl relative group cursor-pointer animate-slide-up">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4FD1C5] to-[#0D3A46] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#1C2A35] bg-black">
              <video 
                src={meuVideo} 
                className="w-full h-auto object-cover"
                poster={brainNetworkImg} // Ideal ter um poster
                controls
                playsInline
              >
                 Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEMA / AGITAÇÃO */}
      <section 
        ref={painRef}
        className={`py-20 bg-[#0F161E] border-t border-[#1C2A35] transition-opacity duration-700 ${painVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A "Corrida dos Ratos" Digital <span className="text-[#FF6B35]">Nunca Para</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-xl bg-[#14222E]/50 border border-[#1C2A35] hover:border-[#FF6B35]/30 transition-colors">
                  <AlertTriangle className="w-8 h-8 text-[#FF6B35] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Ansiedade Tecnológica</h4>
                    <p className="text-gray-400 text-sm">Você sente que está sempre atrasado, não importa o quanto estude.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-[#14222E]/50 border border-[#1C2A35] hover:border-[#FF6B35]/30 transition-colors">
                  <AlertTriangle className="w-8 h-8 text-[#FF6B35] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Ferramentas Descartáveis</h4>
                    <p className="text-gray-400 text-sm">Gasta horas aprendendo algo que se torna obsoleto na semana seguinte.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-[#14222E]/50 border border-[#1C2A35] hover:border-[#FF6B35]/30 transition-colors">
                  <AlertTriangle className="w-8 h-8 text-[#FF6B35] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Medo da Substituição</h4>
                    <p className="text-gray-400 text-sm">Vê colegas menos experientes produzindo 10x mais rápido usando IA.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
               <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-transparent rounded-2xl blur-2xl"></div>
               <img src={fundo02} alt="Caos Digital" className="relative rounded-2xl shadow-2xl border border-[#1C2A35] rotate-2 hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUÇÃO E BENEFÍCIOS (GRID DE CARDS) */}
      <section ref={cardsRef} className="py-24 px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#4FD1C5]/5 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">O Ecossistema <span className="text-[#4FD1C5]">Nexus</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Não entregamos apenas "dicas de ChatGPT". Entregamos um sistema operacional mental para você liderar na era da Inteligência Artificial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div 
                key={index} 
                className={`group relative bg-[#14222E] rounded-2xl border border-[#1C2A35] hover:border-[#4FD1C5] transition-all duration-300 overflow-hidden hover:-translate-y-2 ${cardsVisible ? item.delay : 'opacity-0'}`}
              >
                {/* Imagem de Fundo com Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <img src={item.img} alt="" className="w-full h-full object-cover grayscale" />
                </div>
                
                <div className="relative p-8 h-full flex flex-col z-10">
                  <div className="w-14 h-14 bg-[#0B1016] border border-[#1C2A35] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-[#4FD1C5]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#4FD1C5] transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. A OFERTA (PRODUTO E PREÇO) */}
      <section ref={productRef} className="py-20 px-4 bg-gradient-to-b from-[#0F161E] to-[#0B1016]">
        <div className="max-w-5xl mx-auto bg-[#14222E]/30 backdrop-blur-sm border border-[#1C2A35] rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF6B35]/20 rounded-full blur-[80px]"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Imagem do Produto */}
            <div className={`flex justify-center ${productVisible ? 'animate-slide-left' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B35] to-[#4FD1C5] rounded-xl blur-lg opacity-40 animate-pulse"></div>
                <img 
                  src={produtoImg} 
                  alt="Pack Nexus" 
                  className="relative rounded-xl shadow-2xl w-full max-w-sm border border-[#1C2A35] transform hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>

            {/* Texto de Vendas */}
            <div className={`${productVisible ? 'animate-slide-right' : 'opacity-0'}`}>
              <div className="inline-block px-3 py-1 bg-[#4FD1C5]/10 text-[#4FD1C5] text-xs font-bold rounded-full mb-4">
                OFERTA EXCLUSIVA
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Pack Completo <span className="text-[#FF6B35]">Nexus Origin</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Tudo o que você precisa para sair do zero e chegar ao topo da pirâmide produtiva com IA.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Acesso Imediato ao Manual Nexus",
                  "Banco de Prompts de Alta Conversão",
                  "Atualizações Mensais Vitalícias",
                  "Comunidade Exclusiva de Alunos",
                  "Bônus: Guia de IA para Negócios"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#4FD1C5] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Preço e Botão */}
              <div className="space-y-4">
                <a href={checkoutLink} target="_blank" rel="noopener noreferrer" className="block group">
                  <Button className="w-full h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#e05a2b] hover:to-[#e07a46] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-[#FF6B35]/25 transition-all flex items-center justify-center pulse-button">
                    <span className="mr-2">QUERO GARANTIR MINHA VAGA</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                
                {/* Garantia Selo */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-[#1C2A35]">
                  <div className="flex items-center text-xs text-gray-500">
                    <Shield className="w-4 h-4 text-[#4FD1C5] mr-1" />
                    Pagamento Seguro
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Users className="w-4 h-4 text-[#4FD1C5] mr-1" />
                    Acesso Imediato
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#05080C] py-12 border-t border-[#1C2A35] text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gray-500 text-sm mb-4">
            &copy; 2025 Nexus Origin. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs max-w-2xl mx-auto">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </p>
        </div>
      </footer>

    </div>
  )
}

export default App
