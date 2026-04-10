import { useState, useEffect, useRef } from 'react'
import { 
  ArrowRight, Zap, Target, Rocket, Brain,
  CheckCircle, Shield, ChevronRight,
  Cpu, Network, Layers, PlayCircle,
  BarChart3, Users
} from 'lucide-react'

// --- CONFIGURAÇÕES E LINKS ---
const CHECKOUT_LINK = "https://pay.cakto.com.br/5dUKrWD";
const YOUTUBE_VIDEO_ID = "F5fJ_56-wr8";

// Nota: Como os arquivos locais ./assets/ e ./App.css falharam na compilação, 
// utilizaremos URLs de placeholder ou placeholders visuais para garantir o funcionamento.
const logoNexusHorizontal = "https://placehold.co/200x50/0A0A0A/2DD4BF?text=NEXUS"; 

// --- DADOS DO SISTEMA ---

const bentoFeatures = [
  {
    colSpan: "md:col-span-2",
    icon: Brain,
    title: "⚙️ O Manual: Seu mapa de Orientação",
    desc: "Este manual apresenta uma abordagem sistematizada do uso da inteligência artificial para potencializar foco, atenção e produtividade.",
    color: "from-[#2DD4BF]/20 to-transparent"
  },
  {
    colSpan: "md:col-span-1",
    icon: Target,
    title: "⚔️ O ARSENAL: Metodologias Ativas",
    desc: "Aprenda como um Atleta de Elite. Implementação de palácio da memória e metodologia de revisão.",
    color: "from-[#FF6B35]/20 to-transparent"
  },
  {
    colSpan: "md:col-span-1",
    icon: Cpu,
    title: "⚡ O PROCESSADOR: Hub de Ferramentas",
    desc: "Acesso as principais ferramentas por meio de um clique. Ecossistema de IAs atualizadas.",
    color: "from-blue-500/20 to-transparent"
  },
  {
    colSpan: "md:col-span-1",
    icon: Layers,
    title: "🤖 O CO-PILOTO: Inteligência Estratégica",
    desc: "Sua Mente Amplificada por IA. Aprenda a usar a IA como um braço direito executivo.",
    color: "from-purple-500/20 to-transparent"
  },
  {
    colSpan: "md:col-span-2",
    icon: BarChart3,
    title: "📊 O PAINEL: Análise e Iteração",
    desc: "O que é medido, é melhorado. Revisão e Logbook de performance para evolução constante.",
    color: "from-green-500/20 to-transparent"
  }
];

const NAV_ITEMS = [
  { title: "INÍCIO", icon: Brain, id: "hero" },
  { title: "VÍDEO", icon: PlayCircle, id: "video" },
  { title: "O QUE É?", icon: Layers, id: "about" },
  { title: "PILARES", icon: Cpu, id: "bento" },
];

// --- COMPONENTES AUXILIARES ---

function Button({ children, className, ...props }) {
  return (
    <button 
      className={`px-6 py-3 rounded-xl font-bold transition-all active:scale-95 disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

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
    <header className="fixed top-0 z-50 w-full bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
        <button onClick={() => handleScroll('hero')} className="flex items-center group">
          <div className="text-[#2DD4BF] font-black text-2xl tracking-tighter group-hover:scale-105 transition-transform">
             NEXUS<span className="text-white">MANUAL</span>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
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

        <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#FF6B35] text-white text-xs tracking-widest hover:bg-[#FF4F1F] shadow-[0_0_20px_rgba(255,107,53,0.3)]">
            ACESSO IMEDIATO
          </Button>
        </a>
      </div>
    </header>
  );
}

// --- APP PRINCIPAL ---

export default function App() {
  const handleTrackCheckout = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 selection:bg-[#FF6B35] selection:text-white font-sans">
      <Header />

      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#2DD4BF]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FF6B35]/10 rounded-full blur-[120px]"></div>
      </div>

      {/* HERO SECTION */}
      <section id="hero" className="relative z-10 pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/5">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#2DD4BF] uppercase">
              O Sistema Operacional para Alta Performance
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
            DOMINE A SUA <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#FF6B35]">
              CAPACIDADE COGNITIVA
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Um framework estratégico desenvolvido para profissionais que desejam <span className="text-white font-semibold">alta performance</span> e a integração inteligente da IA.
          </p>

          <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={handleTrackCheckout}>
            <Button className="bg-white text-black hover:bg-gray-200 px-10 py-5 text-lg flex items-center gap-3 mx-auto shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              QUERO ACESSAR O SISTEMA
              <ChevronRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* VÍDEO SECTION */}
      <section id="video" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
            <div className="aspect-video relative">
               <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
                title="Nexus Demo"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO GRID */}
      <section id="bento" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">OS PILARES DO PROTOCOLO</h2>
            <div className="w-20 h-1 bg-[#2DD4BF] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bentoFeatures.map((item, idx) => (
              <div 
                key={idx} 
                className={`${item.colSpan} bg-[#111] border border-white/5 rounded-[2rem] p-8 md:p-12 hover:border-[#2DD4BF]/30 transition-all group overflow-hidden relative`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-[#2DD4BF]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 py-32 px-6 bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">PRONTO PARA O PRÓXIMO NÍVEL?</h2>
          <p className="text-xl text-gray-500 mb-12">Entre para o ecossistema Nexus e transforme sua rotina produtiva hoje.</p>
          <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={handleTrackCheckout}>
            <Button className="bg-[#FF6B35] text-white px-12 py-6 text-xl hover:scale-105 shadow-2xl shadow-[#FF6B35]/20">
              GARANTIR MINHA VAGA
            </Button>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-20 border-t border-white/5 text-center px-6">
        <div className="text-[#2DD4BF] font-black text-xl tracking-tighter mb-4">NEXUS</div>
        <p className="text-gray-600 text-xs tracking-widest uppercase">© 2025 ECOSSISTEMA NEXUS. TECNOLOGIA DE ALTA PERFORMANCE.</p>
      </footer>
    </div>
  );
}
