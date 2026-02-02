import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import {
  ArrowRight, Zap, Target, Key, Rocket, Brain,
  CheckCircle, AlertTriangle, Shield, ChevronRight,
  Terminal, Cpu, Network, Layers, Check, Sparkles, Star,
  Instagram, Clock, BarChart, Users, TrendingUp, Circle, PlayCircle
} from 'lucide-react'
import './App.css'

// --- IMPORTAÇÃO DE IMAGENS ---
import brainNetworkImg from './assets/1000393266.jpg'
import neuralNetworkImg from './assets/1000393264.jpg'
import laptopNeuralImg from './assets/1000393263.jpg'
import brainAIImg from './assets/1000393262.jpg'
import produtoImg from './assets/produto.jpg'
import fundo02 from './assets/fundo02.jpg'

// --- IMAGENS BENTO GRID ---
import produtividadeImg from './assets/produtividade.jpg'
import servicosIaImg from './assets/servicos-ia.jpg'
import xadrezImg from './assets/xadrez-estrategia.jpg'
import promptImg from './assets/engenharia_prompt.png'

// --- IMAGENS PROVA SOCIAL ---
import socialWoman2 from './assets/femele_social02.png'
import socialWoman1 from './assets/femele_social.png'
import socialMan from './assets/masculino_social.png'

// Link do Checkout Centralizado
const CHECKOUT_LINK = "https://pay.cakto.com.br/5dUKrWD";

// ID do Vídeo do YouTube
const YOUTUBE_VIDEO_ID = "F5fJ_56-wr8";

// --- DADOS ESTRUTURADOS ---

// Dados do Bento Grid (ATUALIZADOS)
const bentoFeatures = [
  {
    colSpan: "md:col-span-2",
    bgImage: xadrezImg,
    icon: Brain,
    title: "O PILOTO: Biohacking do Foco",
    desc: "Domine sua bioquímica para acessar estados de fluxo profundo. Gestão neuroquímica, protocolos de sono e nutrição para cognição de elite."
  },
  {
    colSpan: "md:col-span-1",
    bgImage: servicosIaImg,
    icon: Target,
    title: "O ARSENAL: Metodologias Ativas",
    desc: "As táticas de combate da aprendizagem acelerada. Active Recall, Spaced Repetition e Técnica Feynman aplicada."
  },
  {
    colSpan: "md:col-span-1",
    bgImage: promptImg,
    icon: Cpu,
    title: "O PROCESSADOR: Deep Work",
    desc: "Defenda e otimize seu recurso mais valioso: a atenção. Protocolos de 90-120 minutos e mitigação de entropia cognitiva."
  },
  {
    colSpan: "md:col-span-2",
    bgImage: produtividadeImg,
    icon: Layers,
    title: "O CO-PILOTO: Inteligência Estratégica",
    desc: "Amplifique suas capacidades com o braço direito digital. Engenharia de contexto e prompting sistêmico de alto nível."
  },
];

// Dados dos Depoimentos (ATUALIZADOS)
const testimonials = [
  {
    img: socialMan,
    name: "Rafael C.",
    role: "Consultor de Estratégia",
    text: "Finalmente um material que não é sobre 'qual botão clicar', mas sobre como pensar. O módulo de Gestão de Carga revolucionou minha semana."
  },
  {
    img: socialWoman1,
    name: "Camila L.",
    role: "Head de Inovação",
    text: "A parte de IA é a mais avançada que já vi, mas só funciona porque vem depois de toda uma base de foco e metodologia. Um sistema de pensamento completo."
  },
  {
    img: socialWoman2,
    name: "Pedro M.",
    role: "Empreendedor Digital",
    text: "De 'apagador de incêndios' para estrategista do meu próprio tempo. O ROI veio no primeiro mês, com a economia de horas e a qualidade do meu output."
  }
];

// Dados do Stack (ATUALIZADOS)
const stackItems = [
  { icon: Layers, title: "Nexus Manual (Edição Premium)", value: "R$ 197", desc: "– O corebook do sistema." },
  { icon: Cpu, title: "Banco de Prompts Estratégicos", value: "R$ 147", desc: "– Modelos 'copy & paste' para produtividade 10x." },
  { icon: Network, title: "Blueprint de Implementação", value: "R$ 297", desc: "– Integre o sistema na sua rotina em 7 dias." },
  { icon: Shield, title: "Acesso Vitalício + Atualizações", value: "Inestimável", desc: "– Atualizações contínuas do framework." },
  { icon: Users, title: "Workshop Gravado", value: "Bônus", desc: "– 'Do Caos ao Controle: Primeiros 72h'" },
];

// Dados de FAQ (ATUALIZADOS)
const faqItems = [
  { q: "Isso é mais um curso de ChatGPT/IA?", a: "Não. É um sistema operacional para performance cognitiva. A IA é tratada no Módulo 4 como uma ferramenta poderosa que você aprenderá a dominar porque primeiro dominou os princípios de foco, aprendizado e gestão de carga." },
  { q: "Sou iniciante em produtividade. Serve para mim?", a: "Perfeitamente. O Nexus foi projetado como um framework a ser construído do zero. Você começa com os pilares fundamentais e avança progressivamente. É o melhor momento para começar, com a fundação correta." },
  { q: "O material não fica desatualizado com novas ferramentas de IA?", a: "Não. Focamos em princípios e arquiteturas mentais. O Módulo de IA te ensina Engenharia de Contexto e Prompting Sistêmico – habilidades independentes de ferramenta que você aplicará a qualquer modelo, hoje ou daqui a 5 anos." },
  { q: "Em quanto tempo verei resultados práticos?", a: "Primeiros resultados em clareza e redução de estresse nas primeiras 72h. Resultados expressivos em produtividade e qualidade de output dentro da primeira semana de implementação consistente do blueprint." },
];

// --- HOOKS E FUNÇÕES AUXILIARES ---

// Hook de Scroll Animation
function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold, rootMargin: '0px 0px -100px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => ref.current && observer.unobserve(ref.current)
  }, [threshold])

  return [ref, isVisible]
}

// --- FUNÇÃO DE RASTREAMENTO DO PIXEL ---
const handleTrackCheckout = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout');
  }
};

// --- COMPONENTE DE NAVEGAÇÃO GLOBAL ---
const NAV_ITEMS = [
  { title: "INÍCIO", icon: Brain, id: "hero" },
  { title: "VÍDEO", icon: PlayCircle, id: "video" },
  { title: "SOLUÇÃO", icon: Layers, id: "bento" },
  { title: "OFERTA", icon: Zap, id: "stack" },
  { title: "GARANTIA", icon: Shield, id: "offer" },
];

function Header() {
  const handleScroll = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#333] shadow-lg">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-4">
        <button onClick={() => handleScroll('hero')} className="flex items-center gap-2 cursor-pointer group">
          <div className="relative">
            <Brain className="w-7 h-7 text-[#2DD4BF] group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-[#2DD4BF] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
          </div>
          <span className="text-xl font-bold text-white group-hover:text-[#2DD4BF] transition-colors">
            NEXUS MANUAL
          </span>
        </button>
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="flex items-center text-sm font-medium text-gray-400 hover:text-[#2DD4BF] transition-colors group"
            >
              <item.icon className="w-4 h-4 mr-1 text-[#2DD4BF] group-hover:text-white transition-colors" />
              {item.title}
            </button>
          ))}
        </nav>

        <a
          href={CHECKOUT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleTrackCheckout}
        >
          <Button className="h-10 px-6 text-sm font-semibold bg-[#FF6B35] hover:bg-red-600 transition-colors">
            ACESSO IMEDIATO
          </Button>
        </a>
      </div>
    </header>
  );
}

// --- COMPONENTE PRINCIPAL ---
function App() {
  const [heroRef, heroVisible] = useScrollAnimation()
  const [videoRef, videoVisible] = useScrollAnimation(0.2)
  const [painRef, painVisible] = useScrollAnimation(0.2)
  const [bentoRef, bentoVisible] = useScrollAnimation(0.1)
  const [stackRef, stackVisible] = useScrollAnimation(0.1)
  const [reviewsRef, reviewsVisible] = useScrollAnimation(0.1)
  const [offerRef, offerVisible] = useScrollAnimation(0.1)

  const [activeFeature, setActiveFeature] = useState(bentoFeatures[0]);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const TEAL = '#2DD4BF';
  const ORANGE = '#FF6B35';
  const CTA = '#FF4F1F';
  const BG = '#1A2A3A';

  return (
    <div className="min-h-screen bg-[--color-nexus-bg] font-['Poppins',sans-serif] overflow-x-hidden text-slate-100 selection:bg-[--color-nexus-cta] selection:text-white">

      <Header />

      {/* --- BACKGROUND DINÂMICO COM IMAGEM MAIS EVIDENTE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/95 to-[#0A0A0A]"></div>
        
        {/* Gradientes mais sutis */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[--color-nexus-teal]/5 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[--color-nexus-orange]/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* IMAGEM DE FUNDO PRINCIPAL - MAIS VISÍVEL */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-[1800px] h-full opacity-60">
            <img
              src={brainNetworkImg}
              alt="Imagem abstrata de rede neural"
              className="w-full h-full object-contain object-center scale-110"
              style={{
                filter: 'contrast(1.3) brightness(1.2) saturate(1.4)',
                mixBlendMode: 'soft-light'
              }}
            />
          </div>
        </div>
        
        {/* Padrão de grade sutil */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
      </div>

      {/* 1. FAIXA DE URGÊNCIA */}
      <div className="horizontal-banner-wrapper">
        <div className="horizontal-banner">
          <div className="banner-content">
            <span className="banner-item flex items-center text-black"><Zap className="w-4 h-4 mr-2" />OFERTA DE LANÇAMENTO</span>
            <span className="banner-item flex items-center text-black"><CheckCircle className="w-4 h-4 mr-2" />ACESSO VITALÍCIO</span>
            <span className="banner-item flex items-center text-black"><Shield className="w-4 h-4 mr-2" />GARANTIA DE 7 DIAS</span>
            <span className="banner-item flex items-center text-black"><Rocket className="w-4 h-4 mr-2" />ATUALIZAÇÕES INCLUSAS</span>
            <span className="banner-item flex items-center text-black"><Zap className="w-4 h-4 mr-2" />OFERTA DE LANÇAMENTO</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section id="hero" ref={heroRef} className="relative z-10 pt-20 pb-32 px-4 overflow-hidden">
        <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <div className="inline-flex items-center relative mb-8 group cursor-default animate-fade-in">
            <div className="absolute -inset-1 bg-gradient-to-r from-[--color-nexus-teal] to-[--color-nexus-orange] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative px-6 py-2 bg-[#0A0A0A] border border-[--color-nexus-teal]/30 rounded-full flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--color-nexus-teal] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[--color-nexus-teal]"></span>
              </span>
              <span className="text-sm font-semibold text-[--color-nexus-teal] tracking-wide shadow-cyan-500/50">
                O SISTEMA OPERACIONAL PARA UMA MENTE DE ALTA PERFORMANCE
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8 tracking-tight animate-slide-up neon-text">
            NEXUS MANUAL
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            <span className="animated-gradient-title glow-text">
              Domine a Nova Economia da Atenção.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up-delay">
            O framework neurocientífico e estratégico para profissionais que convertem informação complexa em resultados excepcionais, <span className="text-[--color-nexus-teal] font-semibold">automatizando a operação</span> e dominando o estratégico.
          </p>

          <div className="flex flex-col items-center gap-6 animate-scale-in">
            <a
              href={CHECKOUT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block"
              onClick={handleTrackCheckout}
            >
              <Button className="pulse-button relative w-full md:w-auto h-auto py-3 md:h-16 px-8 md:px-12 text-white font-bold text-sm md:text-xl rounded-xl flex items-center justify-center gap-3 whitespace-normal text-center">
                QUERO ACESSAR O SISTEMA
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Button>
            </a>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center"><Shield className="w-4 h-4 text-[--color-nexus-teal] mr-2" /> Compra Segura</span>
              <span className="flex items-center"><Rocket className="w-4 h-4 text-[--color-nexus-teal] mr-2" /> Acesso Imediato</span>
            </div>
          </div>
        </div>

        {/* Imagem decorativa adicional */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-20 pointer-events-none -z-10">
          <img src={neuralNetworkImg} alt="Rede neural decorativa" className="w-full h-auto" />
        </div>
      </section>

      {/* 3. SEÇÃO DE VÍDEO DO YOUTUBE */}
      <section id="video" ref={videoRef} className="relative z-10 py-20 px-4">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${videoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6 group cursor-default">
              <div className="relative">
                <PlayCircle className="w-10 h-10 text-[#FF6B35] group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-[#FF6B35] rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="dynamic-gradient">
                  Veja o Sistema Nexus em Ação
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Assista esta demonstração exclusiva de <span className="text-[--color-nexus-teal] font-semibold">2 minutos</span> e entenda como o Nexus transforma produtividade em resultados mensuráveis.
            </p>
          </div>

          {/* Container do Vídeo */}
          <div className="relative group">
            {/* Efeito de brilho ao redor */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#2DD4BF]/30 via-[#FF6B35]/20 to-[#2DD4BF]/30 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>

            {/* Container principal do vídeo */}
            <div className="relative bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] rounded-2xl overflow-hidden border-2 border-gray-800 group-hover:border-[#2DD4BF]/50 transition-all duration-500 shadow-2xl">

              {/* Player do YouTube */}
              <div className="relative aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F2027] to-[#203A43] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-pulse">▶️</div>
                    <p className="text-xl font-bold text-[#2DD4BF]">Carregando Vídeo Demonstrativo</p>
                    <p className="text-gray-400">Aguarde alguns segundos...</p>
                  </div>
                </div>

                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=0&rel=0&modestbranding=1&showinfo=0`}
                  title="Demonstração do Sistema Nexus - Transformando Produtividade"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-t-2xl"
                  loading="lazy"
                ></iframe>
              </div>

              {/* Rodapé do vídeo */}
              <div className="p-6 bg-gradient-to-r from-[#0A0A0A] to-[#1A1A1A] border-t border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white mb-1">Demonstração do Sistema Nexus</h3>
                    <p className="text-gray-400 text-sm">Duração: 2:15 • Visualizações: 20+ • Publicado: Outubro 2025</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#2DD4BF]/10 text-[#2DD4BF] text-sm font-medium rounded-full border border-[#2DD4BF]/30">
                      🔥 Demonstração Prática
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Estatísticas abaixo do vídeo */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-[#111]/50 rounded-xl border border-gray-800 hover:border-[#2DD4BF]/30 transition-colors group">
              <div className="text-3xl font-bold text-[#2DD4BF] mb-2 group-hover:scale-110 transition-transform">15min</div>
              <p className="text-gray-400 text-sm">Setup Completo</p>
            </div>
            <div className="text-center p-6 bg-[#111]/50 rounded-xl border border-gray-800 hover:border-[#2DD4BF]/30 transition-colors group">
              <div className="text-3xl font-bold text-[#2DD4BF] mb-2 group-hover:scale-110 transition-transform">72h</div>
              <p className="text-gray-400 text-sm">Primeiros Resultados</p>
            </div>
            <div className="text-center p-6 bg-[#111]/50 rounded-xl border border-gray-800 hover:border-[#2DD4BF]/30 transition-colors group">
              <div className="text-3xl font-bold text-[#2DD4BF] mb-2 group-hover:scale-110 transition-transform">10x</div>
              <p className="text-gray-400 text-sm">Produtividade</p>
            </div>
            <div className="text-center p-6 bg-[#111]/50 rounded-xl border border-gray-800 hover:border-[#2DD4BF]/30 transition-colors group">
              <div className="text-3xl font-bold text-[#2DD4BF] mb-2 group-hover:scale-110 transition-transform">100%</div>
              <p className="text-gray-400 text-sm">Satisfação Garantida</p>
            </div>
          </div>

          {/* CTA após o vídeo - BOTÃO CORRIGIDO PARA MOBILE */}
          <div className="text-center mt-12">
            <a
              href={CHECKOUT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleTrackCheckout}
              className="group inline-block w-full md:w-auto"
            >
              <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF4F1F] hover:from-[#FF4F1F] hover:to-[#FF6B35] text-white font-bold py-3 md:py-4 px-4 md:px-10 rounded-xl text-sm md:text-lg transition-all hover:scale-105 cursor-pointer shadow-2xl shadow-[#FF6B35]/30 w-full md:w-auto">
                <span className="flex items-center justify-center gap-2 md:gap-3 whitespace-normal text-center">
                  QUERO APLICAR ESSE SISTEMA NA MINHA ROTINA
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform flex-shrink-0" />
                </span>
              </Button>
            </a>
            <p className="text-gray-500 text-sm mt-4">Assista o vídeo completo e garanta seu acesso vitalício</p>
          </div>
        </div>
      </section>

      {/* 4. PROVA SOCIAL */}
      <div className="relative z-10 border-y border-[#333] bg-[#0A0A0A]/80 backdrop-blur-md py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-widest">Método utilizado por profissionais de:</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-bold font-mono text-white">TECH<span className="text-[--color-nexus-teal]">CORP</span></div>
            <div className="text-2xl font-bold font-sans italic text-white">InnovateLabs</div>
            <div className="text-xl font-bold uppercase tracking-tighter text-white">Future<span className="text-[--color-nexus-orange] font-extrabold">/</span>Work</div>
            <div className="text-2xl font-semibold text-white">Global<span className="font-light text-[--color-nexus-teal]">Systems</span></div>
          </div>
        </div>
      </div>

      {/* 5. A DOR (CORRIGIDA) */}
      <section id="pain" ref={painRef} className={`relative z-10 py-32 px-4 transition-all duration-1000 delay-200 ${painVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[--color-nexus-teal]/20 to-[--color-nexus-orange]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <img src={fundo02} alt="Caos Digital" className="relative rounded-3xl shadow-2xl border border-[#333] z-10 rotate-3 group-hover:rotate-0 transition-all duration-700 grayscale hover:grayscale-0" />
            </div>

            <div className="md:col-span-3 space-y-8">
              <div className="dor-title-container">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight dor-title-text">
                  <span className="dynamic-gradient">
                    O VERDADEIRO CUSTO DA SOBRECARGA COGNITIVA
                  </span>
                </h2>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                O volume de informações, ferramentas e demandas não para de crescer. A tentativa de acompanhar tudo manualmente consome sua energia criativa e estratégica, criando um ciclo de estagnação.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start p-4 bg-[#111]/50 border border-[--color-nexus-orange]/20 rounded-xl hover:border-[--color-nexus-orange]/50 transition-colors group">
                  <Clock className="w-6 h-6 text-[--color-nexus-orange] mr-4 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span>
                    <strong className="text-white group-hover:text-[--color-nexus-orange] transition-colors">Fadiga de Decisão:</strong> Gastar horas em tarefas operacionais que poderiam ser automatizadas, deixando você exausto para o que realmente importa.
                  </span>
                </li>
                <li className="flex items-start p-4 bg-[#111]/50 border border-[--color-nexus-orange]/20 rounded-xl hover:border-[--color-nexus-orange]/50 transition-colors group">
                  <Brain className="w-6 h-6 text-[--color-nexus-orange] mr-4 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span>
                    <strong className="text-white group-hover:text-[--color-nexus-orange] transition-colors">Aprendizado Fragmentado:</strong> Pular de ferramenta em ferramenta sem um framework sólido, acumulando 'peças soltas' de conhecimento que não se integram.
                  </span>
                </li>
              </ul>

              <div className="p-6 bg-gradient-to-r from-[#2DD4BF]/10 to-[#FF6B35]/10 border border-gray-700 rounded-2xl group hover:border-[#2DD4BF] transition-all duration-300">
                <p className="text-xl font-semibold text-center pulse-subtle">
                  A questão não é aprender a próxima ferramenta. É{" "}
                  <span className="animated-gradient-title font-bold">
                    construir uma arquitetura mental
                  </span>{" "}
                  que torne qualquer ferramenta, presente ou futura, uma extensão obediente da sua vontade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BENTO GRID */}
      <section id="bento" ref={bentoRef} className="relative z-10 pt-32 pb-16 px-4 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-blue-green glow-text">
                NEXUS: Seu Sistema Operacional Cognitivo
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Não é um curso. É um protocolo integrado. Uma metodologia para gerenciar sua atenção, seu aprendizado e sua produção no nível de um atleta de elite.
            </p>
            <p className="md:hidden mt-8 text-lg font-bold text-[--color-nexus-orange]">
              Feature Ativa: {activeFeature?.title}
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${bentoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {bentoFeatures.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveFeature(item)}
                className={`${item.colSpan} group relative bg-[#14222E] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 nexus-card
                            ${activeFeature?.title === item.title
                    ? 'border-2 border-[--color-nexus-cta] shadow-xl shadow-[--color-nexus-cta]/20 scale-[1.03]'
                    : 'border border-[#1C2A35] hover:border-[--color-nexus-teal]/50'
                  }
                        `}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-r ${activeFeature?.title === item.title ? 'from-[--color-nexus-cta]/20 to-[--color-nexus-orange]/20' : 'from-[--color-nexus-teal]/20 to-[--color-nexus-orange]/10'} blur-xl`}></div>
                </div>

                {item.bgImage && (
                  <div className="absolute inset-0 z-0">
                    <img src={item.bgImage} alt={`Imagem de ${item.title}`} className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14222E] via-[#14222E]/80 to-transparent"></div>
                  </div>
                )}

                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <div className={`w-14 h-14 bg-[#0F161E]/80 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 transition-all duration-300
                                ${activeFeature?.title === item.title ? 'bg-[--color-nexus-cta]/20 border border-[--color-nexus-cta]' : 'bg-[#1A2A3A] border border-[--color-nexus-teal]/30 group-hover:scale-110'}
                            `}>
                    <item.icon className={`w-7 h-7 ${activeFeature?.title === item.title ? 'text-[--color-nexus-cta]' : 'text-[--color-nexus-teal]'}`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 transition-colors ${activeFeature?.title === item.title ? 'text-[--color-nexus-cta]' : 'text-white group-hover:text-[--color-nexus-teal]'}`}>{item.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>

                  {activeFeature?.title === item.title && (
                    <a
                      href={CHECKOUT_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleTrackCheckout}
                    >
                      <span className="flex items-center text-sm font-semibold text-[--color-nexus-cta] mt-4 hover:underline">
                        QUERO IMPLANTAR ESTE SISTEMA <ChevronRight className="w-4 h-4 ml-1" />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 transition-all duration-1000 delay-500 ${bentoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-[#3A1C71] to-[#D76D77] rounded-3xl p-8 border border-gray-800 hover:border-[#2DD4BF] transition-all">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="text-[#FF6B35] mb-4 md:mb-0">
                  <BarChart className="w-16 h-16" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">O PAINEL: Análise e Iteração</h3>
                  <p className="text-gray-300 mb-4">O que é medido, é melhorado. Logbook de performance cognitiva, análise de erros sistemática e ciclos de iteração semanal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAIXA HORIZONTAL INTERMEDIÁRIA --- */}
      <div className="relative z-20 py-6 overflow-hidden bg-[#0A0A0A] border-y border-[#333] horizontal-banner-mid-section">
        <div
          className="horizontal-banner-wrapper"
          style={{
            background: `linear-gradient(90deg, ${TEAL} 0%, ${BG} 50%, ${ORANGE} 100%)`,
            border: 'none',
            opacity: 0.8
          }}
        >
          <div className="horizontal-banner">
            <div className="banner-content" style={{ animationDuration: '10s' }}>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Brain className="w-5 h-5 mr-3 text-[--color-nexus-orange]" /> BIOHACKING DO FOCO
              </span>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Target className="w-5 h-5 mr-3 text-[--color-nexus-orange]" /> METODOLOGIAS ATIVAS
              </span>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Cpu className="w-5 h-5 mr-3 text-[--color-nexus-orange]" /> DEEP WORK
              </span>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Layers className="w-5 h-5 mr-3 text-[--color-nexus-orange]" /> INTELIGÊNCIA ESTRATÉGICA
              </span>

              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Brain className="w-5 h-5 mr-3 text-[--color-nexus-orange]" /> BIOHACKING DO FOCO
              </span>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Target className="w-5 h-5 mr-3 text-[--color-nexus-orange]" /> METODOLOGIAS ATIVAS
              </span>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Cpu className="w-5 h-5 mr-3 text-[--color-nexus-orange]" /> DEEP WORK
              </span>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Layers className="w-5 h-5 mr-3 text-[--color-nexus-orange]" /> INTELIGÊNCIA ESTRATÉGICA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 7. O STACK */}
      <section id="stack" ref={stackRef} className="relative z-10 py-32 px-4">
        <div className="max-w-5xl mx-auto bg-[#1A2A3A]/80 backdrop-blur-xl border border-[#333] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[--color-nexus-teal]/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[--color-nexus-orange]/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className={`relative z-10 transition-all duration-1000 ${stackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="animated-gradient-title">
                Construa Sua Vantagem Competitiva Definitiva
              </span>
            </h2>

            <div className="mb-8 text-center">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#2DD4BF]/20 to-[#FF6B35]/20 rounded-xl group hover:scale-105 transition-transform duration-300 glow-border">
                <p className="text-2xl font-bold shimmer-title">
                  PACOTE NEXUS COMPLETO: ACESSO VITALÍCIO
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {stackItems.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center justify-between p-6 bg-[#0A0A0A]/80 border border-[#333] rounded-2xl hover:border-[--color-nexus-teal]/50 transition-colors duration-300 group">
                  <div className="flex items-center gap-6 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-[--color-nexus-teal]/10 border border-[--color-nexus-teal]/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-[--color-nexus-teal]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  <div className="px-6 py-2 bg-[#1A2A3A] rounded-full text-[--color-nexus-orange] font-mono font-bold border border-[--color-nexus-orange]/20">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-xl text-gray-400 mb-6">Valor Justo do Stack: <span className="line-through">R$ 641,00</span></p>
              <p className="text-3xl md:text-5xl font-extrabold text-white mb-8">
                Hoje por apenas: <span className="text-[--color-nexus-teal]">R$ 67</span>
                <span className="text-xl text-gray-300 ml-2">(ou 12x de R$6,80)</span>
              </p>
              <p className="text-[#FF6B35] font-bold mb-8">OFERTA DE LANÇAMENTO EXCLUSIVA</p>

              <a
                href={CHECKOUT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full max-w-md"
                onClick={handleTrackCheckout}
              >
                <Button className="pulse-button w-full h-auto py-3 md:h-16 text-white font-bold text-sm md:text-xl rounded-xl flex items-center justify-center gap-2 md:gap-3 whitespace-normal text-center">
                  SIM, QUERO ACESSO VITALÍCIO AO SISTEMA
                </Button>
              </a>

              <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-400">
                <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-[#2DD4BF]" /> Acesso Imediato</div>
                <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-[#2DD4BF]" /> Compra 100% Segura</div>
                <div className="flex items-center gap-2"><Rocket className="w-5 h-5 text-[#2DD4BF]" /> Garantia de 7 Dias</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTEMUNHOS */}
      <section id="reviews" ref={reviewsRef} className="relative z-10 py-24 px-4 bg-[#0A0A0A] border-y border-[#333]">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${reviewsVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="dynamic-gradient">
              Quem já Implementou o Sistema Nexus
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <div key={i} className="nexus-card p-8 rounded-3xl relative flex flex-col justify-between">
                <div>
                  <div className="absolute -top-4 left-8 text-[--color-nexus-orange] text-6xl opacity-20">"</div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-[--color-nexus-orange] fill-current" />)}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{item.text}"</p>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[--color-nexus-teal]">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section id="faq" className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="animated-gradient-title">
              Perguntas Frequentes
            </span>
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-[#111]/50 border border-[#333] rounded-2xl overflow-hidden hover:border-[--color-nexus-teal]/50 transition-colors">
                <details className="group" open={openIndex === index} onClick={(e) => { e.preventDefault(); toggleFAQ(index); }}>
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-white">{item.q}</h3>
                    <ChevronRight className="w-5 h-5 text-[--color-nexus-teal] transform group-open:rotate-90 transition-transform" />
                  </summary>
                  {openIndex === index && (
                    <div className="px-6 pb-6 pt-2 text-gray-300 leading-relaxed border-t border-[#333] bg-[#0A0A0A]/50">
                      {item.a}
                    </div>
                  )}
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. OFERTA FINAL */}
      <section id="offer" ref={offerRef} className="relative z-10 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[--color-nexus-cta]/10 to-transparent pointer-events-none"></div>

        <div className={`max-w-4xl mx-auto text-center relative z-20 transition-all duration-1000 ${offerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="mb-12">
            <Shield className="w-20 h-20 text-[--color-nexus-teal] mx-auto mb-6 animate-pulse-slow float-animation" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="dynamic-gradient glow-text">
                Teste Drive de 7 Dias: Zero Risco, Apenas Resultados.
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Acesse todo o sistema Nexus, estude os protocolos, implemente o blueprint e use os prompts. Se em 7 dias você não sentir uma <span className="text-[--color-nexus-teal]">clareza mental tangível</span>, um aumento na sua produtividade profunda e uma sensação de controle sobre o fluxo de informação, devolvemos 100% do seu investimento.
            </p>
            <p className="text-lg text-gray-400 mb-12">
              Acreditamos tanto no poder deste sistema que colocamos o risco inteiramente sobre nós. O seu único risco é continuar como está.
            </p>
          </div>

          <div className="bg-[#1A2A3A] border-2 border-[--color-nexus-cta] rounded-[3rem] p-12 shadow-2xl shadow-[--color-nexus-cta]/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[--color-nexus-cta] to-[--color-nexus-orange] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-2">
                <span className="shimmer-title">
                  Última Chance para Garantir o Preço de Lançamento
                </span>
              </h3>
              <p className="text-[--color-nexus-orange] font-medium mb-8 uppercase tracking-wider">Acesso Vitalício + Bônus Exclusivos</p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                <img src={produtoImg} alt="Pack Nexus" className="w-64 rounded-xl shadow-2xl border border-[#333] rotate-[-5deg] group-hover:rotate-0 transition-all duration-500" />
                <div className="text-left">
                  <div className="text-6xl font-extrabold text-white mb-2">R$ 47<span className="text-2xl text-gray-400">,00</span></div>
                  <p className="text-gray-400 mb-4">Pagamento único. Sem mensalidades.</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[--color-nexus-teal] mr-2" /> Acesso Imediato via E-mail</div>
                    <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[--color-nexus-teal] mr-2" /> Plataforma Segura e Confiável</div>
                    <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[--color-nexus-teal] mr-2" /> Atualizações Vitalícias Inclusas</div>
                  </div>
                </div>
              </div>

              <a
                href={CHECKOUT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-2xl mx-auto"
                onClick={handleTrackCheckout}
              >
                <Button className="pulse-button w-full h-auto py-4 md:h-20 text-white font-extrabold text-sm md:text-2xl rounded-2xl flex items-center justify-center gap-2 md:gap-4 hover:scale-[1.02] transition-transform whitespace-normal text-center">
                  INSTALAR MEU SISTEMA NEXUS AGORA →
                  <ArrowRight className="w-5 h-5 md:w-8 md:h-8 flex-shrink-0" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] pt-24 pb-12 px-4 border-t border-[#111] relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-8 h-8 text-[--color-nexus-teal]" />
              <span className="text-2xl font-bold text-white">NEXUS MANUAL</span>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-sm mb-6">
              O manual definitivo para profissionais que desejam liderar a revolução da IA.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Links Úteis</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-[--color-nexus-teal] transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-[--color-nexus-teal] transition-colors">Suporte</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <p className="text-gray-500 mb-4">suporte@nexusorigin.com</p>
            <a href="https://instagram.com/nexus0rigin" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-[--color-nexus-orange] transition-colors gap-2">
              <Instagram className="w-5 h-5" />
              <span>@nexus0rigin</span>
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto text-center pt-8 border-t border-[#111]">
          <p className="text-gray-600 text-sm mb-4">
            &copy; 2025 Nexus Manual. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  )
}

export default App
