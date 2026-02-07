import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import {
  ArrowRight, Zap, Target, Key, Rocket, Brain,
  CheckCircle, AlertTriangle, Shield, ChevronRight,
  Terminal, Cpu, Network, Layers, Check, Sparkles, Star,
  Instagram, Clock, BarChart, Users, TrendingUp, Circle, PlayCircle,
  Cpu as CpuIcon, Brain as BrainIcon, Target as TargetIcon,
  Zap as ZapIcon, BarChart3
} from 'lucide-react'
import './App.css'

// --- ASSETS ---
import brainNetworkImg from './assets/1000393266.jpg'
import neuralNetworkImg from './assets/1000393264.jpg'
import laptopNeuralImg from './assets/1000393263.jpg'
import brainAIImg from './assets/1000393262.jpg'
import produtoImg from './assets/produto.jpg'
import xadrezImg from './assets/xadrez-estrategia.jpg'
import servicosIaImg from './assets/servicos-ia.jpg'
import promptImg from './assets/engenharia_prompt.png'
import produtividadeImg from './assets/produtividade.jpg'
import socialWoman2 from './assets/femele_social02.png'
import socialWoman1 from './assets/femele_social.png'
import socialMan from './assets/masculino_social.png'

const CHECKOUT_LINK = "https://pay.cakto.com.br/5dUKrWD";
const YOUTUBE_VIDEO_ID = "F5fJ_56-wr8";

// --- COMPONENTES AUXILIARES ---

const SectionBadge = ({ children, color = "teal" }) => (
  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${
    color === "teal" ? "bg-teal-500/10 border-teal-500/30 text-teal-400" : "bg-orange-500/10 border-orange-500/30 text-orange-400"
  } mb-6`}>
    <span className="relative flex h-2 w-2">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${color === "teal" ? "bg-teal-400" : "bg-orange-400"}`}></span>
      <span className={`relative inline-flex rounded-full h-2 w-2 ${color === "teal" ? "bg-teal-500" : "bg-orange-500"}`}></span>
    </span>
    <span className="text-xs font-bold uppercase tracking-wider">{children}</span>
  </div>
);

// --- DADOS ---

const bentoFeatures = [
  {
    colSpan: "md:col-span-2",
    bgImage: xadrezImg,
    icon: Brain,
    title: "🧠 O Manual: Orientação Neural",
    desc: "Sistematização de mecanismos de autorregulação voltados à gestão de foco. Estabilidade metabólica como pré-requisito para o flow constante."
  },
  {
    colSpan: "md:col-span-1",
    bgImage: servicosIaImg,
    icon: Target,
    title: "⚔️ O Arsenal Ativo",
    desc: "Implementação de Palácios da Memória e metodologias de revisão de elite para retenção máxima."
  },
  {
    colSpan: "md:col-span-1",
    bgImage: promptImg,
    icon: Cpu,
    title: "⚡ O Processador",
    desc: "Ecossistema de IAs atualizadas sob demanda. O seu hub de ferramentas a um clique."
  },
  {
    colSpan: "md:col-span-1",
    bgImage: produtividadeImg,
    icon: Layers,
    title: "🤖 O Co-Piloto IA",
    desc: "Engenharia de contexto pura. Use a IA como um braço direito executivo, não apenas como um chat."
  },
  {
    colSpan: "md:col-span-2",
    bgImage: neuralNetworkImg,
    icon: BarChart3,
    title: "📊 O Painel de Performance",
    desc: "O que é medido, é melhorado. Logbook estratégico para garantir evolução de 1% ao dia."
  }
];

const testimonials = [
  { img: socialMan, name: "Rafael C.", role: "Consultor", text: "O Nexus não é curso, é ecossistema. Em 7 dias minha produtividade multiplicou." },
  { img: socialWoman1, name: "Camila L.", role: "Inovação", text: "Finalmente entendi que produtividade é pensar melhor. Transformou minha abordagem." },
  { img: socialWoman2, name: "Pedro M.", role: "Empreendedor", text: "Do caos ao controle em 72h. O blueprint de implementação é o diferencial." }
];

const stackItems = [
  { icon: Layers, title: "Nexus Manual (Corebook Digital)", value: "R$ 197", desc: "A base teórica e os protocolos mestres." },
  { icon: Network, title: "Blueprint de 7 Dias", value: "R$ 97", desc: "Plano de ação passo a passo para instalação." },
  { icon: Cpu, title: "Prompt Stack Estratégico", value: "R$ 147", desc: "Modelos para delegação operacional total para IA." },
  { icon: Shield, title: "Atualizações Vitalícias", value: "BÔNUS", desc: "Novos frameworks incluídos sem custo." },
];

function Header() {
  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 z-[100] w-full bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
        <button onClick={() => handleScroll('hero')} className="flex items-center gap-3 group transition-all">
          <div className="p-2 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20">
            <Brain className="w-6 h-6 text-[#2DD4BF]" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white">NEXUS<span className="text-teal-400">ORIGIN</span></span>
        </button>
        
        <nav className="hidden lg:flex items-center gap-8">
          {['video', 'about', 'bento', 'stack'].map((id) => (
            <button key={id} onClick={() => handleScroll(id)} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-teal-400 transition-colors">
              {id === 'bento' ? 'Pilares' : id === 'stack' ? 'Conteúdo' : id}
            </button>
          ))}
        </nav>

        <a href={CHECKOUT_LINK} target="_blank" rel="noopener">
          <Button className="bg-[#FF6B35] hover:bg-[#FF4F1F] text-white font-bold px-6 rounded-full h-11 shadow-lg shadow-orange-500/20 border-0">
            INICIAR AGORA
          </Button>
        </a>
      </div>
    </header>
  );
}

// --- APP PRINCIPAL ---

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 selection:bg-teal-500/30 font-sans antialiased">
      <Header />

      {/* Background Decorativo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10">
        
        {/* HERO */}
        <section id="hero" className="pt-40 pb-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <SectionBadge>Sistema Operacional Cognitivo</SectionBadge>
            <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
              A MENTE <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">HIPERESTRUTURADA</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Domine sua atenção e transforme a Inteligência Artificial em uma extensão do seu cérebro. O framework neuroestratégico para profissionais de alta performance.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <a href={CHECKOUT_LINK} className="w-full max-w-md">
                <Button className="w-full py-8 text-xl font-black bg-gradient-to-r from-orange-500 to-red-600 hover:scale-[1.02] transition-transform rounded-2xl shadow-2xl shadow-orange-600/30 border-0 group">
                  INSTALAR SISTEMA AGORA
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-500" /> Acesso imediato • Garantia de 7 dias
              </p>
            </div>
          </div>
        </section>

        {/* VIDEO SECTION */}
        <section id="video" className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl bg-black group">
              <div className="aspect-video relative z-10">
                 <iframe
                  width="100%" height="100%"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
                  title="Nexus Demo" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[["15min", "Setup"], ["72h", "Clareza"], ["10x", "Entrega"], ["100%", "Garantia"]].map(([v, t]) => (
                <div key={t} className="text-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-teal-500/30 transition-colors">
                  <div className="text-3xl font-black text-teal-400 mb-1">{v}</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENTO GRID */}
        <section id="bento" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <SectionBadge color="orange">O Protocolo</SectionBadge>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">5 PILARES DE <span className="text-orange-500">PODER</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bentoFeatures.map((f, i) => (
                <div key={i} className={`${f.colSpan} relative min-h-[300px] rounded-[2rem] overflow-hidden border border-white/5 group hover:border-teal-500/40 transition-all duration-500 bg-[#0F0F0F]`}>
                  <img src={f.bgImage} className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="relative p-8 h-full flex flex-col justify-end">
                    <f.icon className="w-10 h-10 text-teal-400 mb-4" />
                    <h3 className="text-2xl font-black mb-2">{f.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STACK / CONTEÚDO */}
        <section id="stack" className="py-20 px-6 relative">
          <div className="max-w-4xl mx-auto bg-gradient-to-b from-white/10 to-transparent p-[1px] rounded-[3rem]">
            <div className="bg-[#0A0A0A] rounded-[3rem] p-8 md:p-16">
              <h2 className="text-3xl md:text-5xl font-black text-center mb-12 tracking-tighter">O QUE VOCÊ RECEBE <span className="text-teal-400">HOJE</span></h2>
              
              <div className="space-y-4 mb-12">
                {stackItems.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5 group hover:bg-white/[0.08] transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-teal-500/10 rounded-xl text-teal-400"><item.icon className="w-6 h-6" /></div>
                      <div>
                        <h4 className="font-bold text-white">{item.title}</h4>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                    <div className="text-xs font-black text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="text-center bg-teal-500/10 rounded-[2rem] p-8 border border-teal-500/20">
                <p className="text-gray-400 line-through mb-2 text-xl">De R$ 641,00</p>
                <div className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">R$ 47,00</div>
                <a href={CHECKOUT_LINK}>
                  <Button className="w-full py-8 text-xl font-black bg-teal-500 hover:bg-teal-400 text-[#0A0A0A] rounded-2xl shadow-xl shadow-teal-500/20 border-0">
                    LIBERAR MEU ACESSO VITALÍCIO
                  </Button>
                </a>
                <p className="mt-6 text-xs font-bold text-teal-500 uppercase tracking-widest animate-pulse">Oferta de Lançamento por tempo limitado</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTEMUNHOS */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 bg-white/5 rounded-[2rem] border border-white/5 relative">
                <Star className="w-8 h-8 text-orange-500/20 absolute top-8 right-8" />
                <p className="text-gray-300 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} className="w-12 h-12 rounded-full border-2 border-teal-500" />
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-xs text-gray-500 font-bold uppercase">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-center mb-12">DÚVIDAS FREQUENTES</h2>
            <div className="space-y-4">
              {[
                ["Isso é um curso de ChatGPT?", "Não. É uma metodologia de pensamento. A IA é apenas a ferramenta que acelera seus processos estruturados."],
                ["Como recebo o acesso?", "Imediatamente após a confirmação do pagamento no seu e-mail cadastrado."],
                ["Tenho suporte?", "Sim, via e-mail e comunidade Nexus no Instagram."]
              ].map(([q, a], i) => (
                <details key={i} className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden group">
                  <summary className="p-6 font-bold cursor-pointer list-none flex justify-between items-center hover:bg-white/5 transition-colors">
                    {q} <ChevronRight className="w-4 h-4 text-teal-500 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="p-6 pt-0 text-gray-400 text-sm border-t border-white/5">{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 px-6 border-t border-white/5 bg-black">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <Brain className="w-8 h-8 text-teal-400" />
              <span className="text-2xl font-black tracking-tighter">NEXUS<span className="text-teal-400">ORIGIN</span></span>
            </div>
            <div className="flex gap-6 text-sm text-gray-500 font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-teal-400 transition-colors">Políticas</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Suporte</a>
              <a href="https://instagram.com/nexus0rigin" className="hover:text-orange-500 transition-colors flex items-center gap-2">
                <Instagram className="w-4 h-4" /> @nexus0rigin
              </a>
            </div>
          </div>
          <div className="text-center mt-12 text-[10px] text-gray-700 uppercase font-black tracking-[0.2em]">
            © 2025 NEXUS MANUAL - TODOS OS DIREITOS RESERVADOS
          </div>
        </footer>

      </main>
    </div>
  )
}

export default App;
