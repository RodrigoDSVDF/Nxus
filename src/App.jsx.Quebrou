import { useState, useEffect, useRef } from 'react'
// Simulação do componente Button caso não esteja no ambiente
const Button = ({ children, className, ...props }) => (
  <button className={`px-6 py-2 rounded-lg font-bold transition-all ${className}`} {...props}>{children}</button>
);

import {
  ArrowRight, Zap, Target, Key, Rocket, Brain,
  CheckCircle, AlertTriangle, Shield, ChevronRight,
  Terminal, Cpu, Network, Layers, Check, Sparkles, Star,
  Instagram, Clock, BarChart, Users, TrendingUp, Circle, PlayCircle,
  Cpu as CpuIcon, Brain as BrainIcon, Target as TargetIcon,
  Zap as ZapIcon, BarChart3
} from 'lucide-react'

// --- IMPORTAÇÃO DE IMAGENS ---
// Nota: No ambiente de preview, as importações de arquivos locais podem falhar se os arquivos não existirem fisicamente.
// Mantendo as importações conforme seu código original.
const brainNetworkImg = './assets/1000393266.jpg'
const neuralNetworkImg = './assets/1000393264.jpg'
const laptopNeuralImg = './assets/1000393263.jpg'
const brainAIImg = './assets/1000393262.jpg'
const produtoImg = './assets/produto.jpg'
const fundo02 = './assets/fundo02.jpg'
const logoNexus = './assets/nxus.webp' // Definição da logo

// --- IMAGENS BENTO GRID ---
const produtividadeImg = './assets/produtividade.jpg'
const servicosIaImg = './assets/servicos-ia.jpg'
const xadrezImg = './assets/xadrez-estrategia.jpg'
const promptImg = './assets/engenharia_prompt.png'

// --- IMAGENS PROVA SOCIAL ---
const socialWoman2 = './assets/femele_social02.png'
const socialWoman1 = './assets/femele_social.png'
const socialMan = './assets/masculino_social.png'

const CHECKOUT_LINK = "https://pay.cakto.com.br/5dUKrWD";
const YOUTUBE_VIDEO_ID = "F5fJ_56-wr8";

const bentoFeatures = [
  {
    colSpan: "md:col-span-2",
    bgImage: xadrezImg,
    icon: Brain,
    title: "⚙️ O Manual: Seu mapa de Orientação",
    desc: "Este manual apresenta uma abordagem sistematizada do uso da inteligência artificial para potencializar foco, atenção e produtividade."
  },
  {
    colSpan: "md:col-span-1",
    bgImage: servicosIaImg,
    icon: Target,
    title: "⚔️ O ARSENAL: Metodologias Ativas",
    desc: "Aprenda como um Atleta de Elite. Implementação de palácio da memória e metodologia de revisão."
  },
  {
    colSpan: "md:col-span-1",
    bgImage: promptImg,
    icon: Cpu,
    title: "⚡ O PROCESSADOR: Hub de Ferramentas",
    desc: "Acesso as principais ferramentas por meio de um clique. Ecossistema de IAs atualizadas sobre demanda"
  },
  {
    colSpan: "md:col-span-1",
    bgImage: produtividadeImg,
    icon: Layers,
    title: "🤖 O CO-PILOTO: Inteligência Estratégica",
    desc: "Sua Mente Amplificada por IA. Não é sobre 'prompts mágicos', é sobre engenharia de contexto."
  },
  {
    colSpan: "md:col-span-2",
    bgImage: neuralNetworkImg,
    icon: BarChart3,
    title: "📊 O PAINEL: Análise e Iteração",
    desc: "O que é medido, é melhorado. Revisão e Logbook de performance para garantir evolução."
  }
];

const NAV_ITEMS = [
  { title: "INÍCIO", icon: Brain, id: "hero" },
  { title: "VÍDEO", icon: PlayCircle, id: "video" },
  { title: "O QUE É?", icon: Layers, id: "about" },
  { title: "PILARES", icon: Cpu, id: "bento" },
];

function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true) }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [threshold]);
  return [ref, isVisible];
}

const handleTrackCheckout = () => {
  if (typeof window !== 'undefined' && window.fbq) window.fbq('track', 'InitiateCheckout');
};

function Header() {
  const handleScroll = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#333] shadow-lg">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
        {/* AJUSTE DA LOGO: Substituído Ícone por Imagem do Asset */}
        <button onClick={() => handleScroll('hero')} className="flex items-center gap-3 cursor-pointer group">
          <div className="relative h-10 w-auto overflow-hidden">
            <img 
              src={logoNexus} 
              alt="Nexus Logo" 
              className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
            />
            {/* Fallback caso a imagem não carregue no preview */}
            <Brain style={{ display: 'none' }} className="w-8 h-8 text-[#2DD4BF]" />
          </div>
          <span className="text-xl font-black text-white group-hover:text-[#2DD4BF] transition-colors tracking-tighter">
            NEXUS MANUAL
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="flex items-center text-xs font-bold text-gray-400 hover:text-[#2DD4BF] transition-colors tracking-widest"
            >
              {item.title}
            </button>
          ))}
        </nav>

        <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={handleTrackCheckout}>
          <Button className="bg-[#FF6B35] hover:bg-[#FF4F1F] text-white text-xs tracking-widest shadow-[0_0_15px_rgba(255,107,53,0.3)]">
            ACESSO IMEDIATO
          </Button>
        </a>
      </div>
    </header>
  );
}

export default function App() {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [videoRef, videoVisible] = useScrollAnimation(0.2);
  const [bentoRef, bentoVisible] = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans text-slate-100 selection:bg-[#FF6B35] selection:text-white">
      <Header />

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#2DD4BF]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FF6B35]/5 rounded-full blur-[120px]"></div>
        <img src={brainNetworkImg} className="absolute inset-0 w-full h-full object-cover opacity-10" alt="" />
      </div>

      {/* HERO */}
      <section id="hero" ref={heroRef} className="relative z-10 pt-32 pb-20 px-6 text-center">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${heroVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-1 border border-[#2DD4BF]/30 rounded-full bg-[#2DD4BF]/5 mb-8">
            <span className="text-[10px] font-bold tracking-widest text-[#2DD4BF] uppercase">SISTEMA DE ALTA PERFORMANCE</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
            DOMINE SUA <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#FF6B35]">CAPACIDADE COGNITIVA</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            O framework estratégico para quem busca clareza mental e integração total com inteligência artificial.
          </p>
          <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={handleTrackCheckout}>
            <Button className="bg-white text-black hover:bg-gray-200 px-10 py-5 text-lg flex items-center gap-3 mx-auto">
              QUERO ACESSAR O SISTEMA <ChevronRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* VÍDEO */}
      <section id="video" ref={videoRef} className="relative z-10 py-20 px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${videoVisible ? 'opacity-100' : 'opacity-0 scale-95'}`}>
          <div className="aspect-video bg-[#111] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            <iframe
              width="100%" height="100%"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              title="Nexus Video" frameBorder="0" allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* BENTO */}
      <section id="bento" ref={bentoRef} className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase">Os Pilares do Protocolo</h2>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 ${bentoVisible ? 'opacity-100' : 'opacity-0'}`}>
            {bentoFeatures.map((item, idx) => (
              <div key={idx} className={`${item.colSpan} bg-[#111] border border-white/5 p-8 rounded-3xl group relative overflow-hidden`}>
                <div className="relative z-10">
                  <item.icon className="w-10 h-10 text-[#2DD4BF] mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                {item.bgImage && <img src={item.bgImage} className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity" alt="" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-12 border-t border-white/5 text-center">
        <p className="text-gray-600 text-[10px] tracking-widest uppercase">© 2025 ECOSSISTEMA NEXUS. TECNOLOGIA DE ALTA PERFORMANCE.</p>
      </footer>
    </div>
  );
}
