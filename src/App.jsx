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

// Link do Checkout
const CHECKOUT_LINK = "https://pay.cakto.com.br/5dUKrWD";
const YOUTUBE_VIDEO_ID = "F5fJ_56-wr8";

// --- DADOS ESTRUTURADOS COM NOVA NARRATIVA ---

// Dados dos Pilares (5 PILARES ATUALIZADOS)
const bentoFeatures = [
  {
    colSpan: "md:col-span-2",
    bgImage: xadrezImg,
    icon: Brain,
    title: "🧠 O PILOTO: Biohacking do Foco",
    desc: "Domine seu Hardware. Protocolos de gestão neuroquímica e sono para acessar estados de Flow sob demanda. Sem energia, não há estratégia que funcione."
  },
  {
    colSpan: "md:col-span-1",
    bgImage: servicosIaImg,
    icon: Target,
    title: "⚔️ O ARSENAL: Metodologias Ativas",
    desc: "Aprenda como um Atleta de Elite. Implementação de Active Recall e Repetição Espaçada para que você nunca mais esqueça o que estuda."
  },
  {
    colSpan: "md:col-span-1",
    bgImage: promptImg,
    icon: Cpu,
    title: "⚡ O PROCESSADOR: Deep Work",
    desc: "A Arte da Atenção Plena. Blindagem contra distrações e protocolos de 90-120 minutos para realizar em 4 horas o que a maioria leva 2 dias."
  },
  {
    colSpan: "md:col-span-1",
    bgImage: produtividadeImg,
    icon: Layers,
    title: "🤖 O CO-PILOTO: Inteligência Estratégica",
    desc: "Sua Mente Amplificada por IA. Não é sobre 'prompts mágicos', é sobre engenharia de contexto. Aprenda a usar a IA como um braço direito executivo."
  },
  {
    colSpan: "md:col-span-2",
    bgImage: neuralNetworkImg,
    icon: BarChart,
    title: "📊 O PAINEL: Análise e Iteração",
    desc: "O que é medido, é melhorado. Ciclos semanais de revisão e Logbook de performance para garantir que você está evoluindo 1% todos os dias."
  }
];

// Depoimentos atualizados
const testimonials = [
  {
    img: socialMan,
    name: "Rafael C.",
    role: "Consultor de Estratégia",
    text: "O Nexus não é mais um curso, é um ecossistema. Em 7 dias eu já tinha implementado o sistema completo e minha produtividade multiplicou."
  },
  {
    img: socialWoman1,
    name: "Camila L.",
    role: "Head de Inovação",
    text: "Finalmente entendi que produtividade não é sobre fazer mais, mas sobre pensar melhor. O framework do Nexus transformou minha abordagem."
  },
  {
    img: socialWoman2,
    name: "Pedro M.",
    role: "Empreendedor Digital",
    text: "Do caos ao controle em 72h. O blueprint de implementação é o diferencial que faltava em todos os outros materiais."
  }
];

// Stack atualizado com nova narrativa
const stackItems = [
  { icon: Layers, title: "Nexus Manual (Corebook Digital)", value: "R$ 197", desc: "O guia mestre com toda a teoria e protocolos do sistema." },
  { icon: Network, title: "Blueprint de Implementação (7 Dias)", value: "R$ 297", desc: "Um plano passo a passo para sair do caos e instalar o sistema na sua rotina." },
  { icon: Cpu, title: "Banco de Prompts Estratégicos", value: "R$ 147", desc: "Modelos prontos para delegar tarefas operacionais para a IA e focar no que é estratégico." },
  { icon: Shield, title: "Acesso Vitalício + Atualizações", value: "Inestimável", desc: "Todas as futuras atualizações do framework incluídas sem custo adicional." },
  { icon: Users, title: "Workshop Gravado", value: "Bônus", desc: "'Do Caos ao Controle: As Primeiras 72h'. Demonstração prática da montagem do seu painel de bordo." },
];

// FAQ com nova narrativa
const faqItems = [
  { 
    q: "Isso é mais um curso de ChatGPT/IA?", 
    a: "Não. Ferramentas mudam toda semana. O Nexus é focado em Metodologia. Ensinamos você a pensar e estruturar processos; a IA é apenas o motor que acelera o que você já desenhou." 
  },
  { 
    q: "Sou iniciante em produtividade. Serve para mim?", 
    a: "Sim. O Nexus foi desenhado para ser um sistema 'Plug & Play'. O Blueprint de 7 Dias guia você desde os fundamentos básicos até as táticas mais avançadas." 
  },
  { 
    q: "O material é em vídeo ou texto?", 
    a: "Você recebe o Corebook (Manual Estratégico) para consulta rápida e uma série de Vídeo-Aulas práticas de implementação, além dos templates de prompts." 
  },
  { 
    q: "Como funciona a garantia?", 
    a: "Simples: Teste o sistema por 7 dias. Se você não sentir uma melhora tangível na sua clareza mental e produtividade, basta um e-mail para devolvemos 100% do seu dinheiro." 
  },
];

// --- HOOKS ---
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

const handleTrackCheckout = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout');
  }
};

// --- COMPONENTE HEADER ---
const NAV_ITEMS = [
  { title: "INÍCIO", icon: Brain, id: "hero" },
  { title: "O QUE É?", icon: PlayCircle, id: "about" },
  { title: "PILARES", icon: Layers, id: "bento" },
  { title: "O QUE VOCÊ RECEBE", icon: Zap, id: "stack" },
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
        <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={handleTrackCheckout}>
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
  const [aboutRef, aboutVisible] = useScrollAnimation(0.2)
  const [bentoRef, bentoVisible] = useScrollAnimation(0.1)
  const [stackRef, stackVisible] = useScrollAnimation(0.1)
  const [offerRef, offerVisible] = useScrollAnimation(0.1)
  const [activeFeature, setActiveFeature] = useState(bentoFeatures[0])
  const [openIndex, setOpenIndex] = useState(null)
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index)

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-['Poppins',sans-serif] overflow-x-hidden text-slate-100 selection:bg-[#FF6B35] selection:text-white">
      
      <Header />

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/95 to-[#0A0A0A]"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#2DD4BF]/5 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#FF6B35]/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-[1800px] h-full opacity-60">
            <img src={brainNetworkImg} alt="Rede neural" className="w-full h-full object-contain object-center scale-110" style={{ filter: 'contrast(1.3) brightness(1.2) saturate(1.4)', mixBlendMode: 'soft-light' }} />
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
      </div>

      {/* 1. BANNER DE URGÊNCIA */}
      <div className="horizontal-banner-wrapper">
        <div className="horizontal-banner">
          <div className="banner-content">
            <span className="banner-item flex items-center text-black"><Zap className="w-4 h-4 mr-2" />OFERTA DE LANÇAMENTO</span>
            <span className="banner-item flex items-center text-black"><CheckCircle className="w-4 h-4 mr-2" />ACESSO VITALÍCIO</span>
            <span className="banner-item flex items-center text-black"><Shield className="w-4 h-4 mr-2" />GARANTIA DE 7 DIAS</span>
            <span className="banner-item flex items-center text-black"><Rocket className="w-4 h-4 mr-2" />BLUEPRINT DE 7 DIAS</span>
            <span className="banner-item flex items-center text-black"><Zap className="w-4 h-4 mr-2" />PREÇO ESPECIAL</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION COM NOVA NARRATIVA */}
      <section id="hero" ref={heroRef} className="relative z-10 pt-20 pb-32 px-4 overflow-hidden">
        <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="inline-flex items-center relative mb-8 group cursor-default animate-fade-in">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2DD4BF] to-[#FF6B35] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative px-6 py-2 bg-[#0A0A0A] border border-[#2DD4BF]/30 rounded-full flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2DD4BF]"></span>
              </span>
              <span className="text-sm font-semibold text-[#2DD4BF] tracking-wide shadow-cyan-500/50">
                O SISTEMA OPERACIONAL PARA UMA MENTE DE ALTA PERFORMANCE
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8 tracking-tight animate-slide-up neon-text">
            NEXUS MANUAL
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            <span className="animated-gradient-title glow-text">
              Alta Performance na Era da Sobrecarga Cognitiva.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up-delay">
            Um framework neuroestratégico para profissionais que desejam <span className="text-[#2DD4BF] font-semibold">dominar a atenção</span>, <span className="text-[#2DD4BF] font-semibold">acelerar decisões</span> e transformar ferramentas de IA em extensões da sua inteligência.
          </p>

          <div className="flex flex-col items-center gap-6 animate-scale-in">
            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="group relative inline-block" onClick={handleTrackCheckout}>
              <Button className="pulse-button relative w-full md:w-auto h-auto py-3 md:h-16 px-8 md:px-12 text-white font-bold text-sm md:text-xl rounded-xl flex items-center justify-center gap-3 whitespace-normal text-center">
                QUERO INSTALAR O SISTEMA AGORA
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Button>
            </a>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center"><Shield className="w-4 h-4 text-[#2DD4BF] mr-2" /> Compra Segura</span>
              <span className="flex items-center"><Rocket className="w-4 h-4 text-[#2DD4BF] mr-2" /> Acesso Imediato via E-mail</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO "O QUE É O NEXUS?" */}
      <section id="about" ref={aboutRef} className="relative z-10 py-20 px-4">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="dynamic-gradient">O QUE É O NEXUS?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8">
              Não é apenas um curso. É o seu novo <span className="text-[#2DD4BF] font-semibold">ecossistema de produtividade</span>.
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-12">
              O Nexus resolve o maior problema da atualidade: <span className="text-[#FF6B35] font-semibold">o excesso de informação sem um sistema para processá-la</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#111]/50 border border-[#2DD4BF]/20 rounded-2xl p-8 hover:border-[#2DD4BF]/50 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#2DD4BF]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6 text-[#2DD4BF]" />
                </div>
                <h3 className="text-2xl font-bold text-white">O HARDWARE<br /><span className="text-lg text-gray-400">(Sua Biologia)</span></h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Protocolos para otimizar seu cérebro, foco e energia. <span className="text-[#2DD4BF] font-medium">Sem energia, não há estratégia que funcione.</span>
              </p>
            </div>

            <div className="bg-[#111]/50 border border-[#FF6B35]/20 rounded-2xl p-8 hover:border-[#FF6B35]/50 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-2xl font-bold text-white">O SOFTWARE<br /><span className="text-lg text-gray-400">(Sua Estratégia)</span></h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Metodologias de aprendizado e uso de IA para amplificar sua entrega. <span className="text-[#FF6B35] font-medium">Aprenda a pensar e estruturar processos; a IA é apenas o motor.</span>
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-[#2DD4BF]/10 to-[#FF6B35]/10 border border-gray-700 rounded-2xl group hover:border-[#2DD4BF] transition-all duration-300">
            <p className="text-xl font-semibold text-center pulse-subtle">
              Ele atua em duas frentes: <span className="animated-gradient-title font-bold">Otimizar seu cérebro (Hardware)</span> e <span className="animated-gradient-title font-bold">Amplificar seu processo (Software).</span>
            </p>
          </div>
        </div>
      </section>

      {/* 4. OS 5 PILARES DO PROTOCOLO */}
      <section id="bento" ref={bentoRef} className="relative z-10 pt-32 pb-16 px-4 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-blue-green glow-text">
                OS 5 PILARES DO PROTOCOLO
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Um sistema integrado que combina neurociência, metodologia e tecnologia.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${bentoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {bentoFeatures.map((item, index) => (
              <div key={index} onClick={() => setActiveFeature(item)} className={`${item.colSpan} group relative bg-[#14222E] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 nexus-card ${activeFeature?.title === item.title ? 'border-2 border-[#FF4F1F] shadow-xl shadow-[#FF4F1F]/20 scale-[1.03]' : 'border border-[#1C2A35] hover:border-[#2DD4BF]/50'}`}>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-r ${activeFeature?.title === item.title ? 'from-[#FF4F1F]/20 to-[#FF6B35]/20' : 'from-[#2DD4BF]/20 to-[#FF6B35]/10'} blur-xl`}></div>
                </div>

                {item.bgImage && (
                  <div className="absolute inset-0 z-0">
                    <img src={item.bgImage} alt={`Imagem de ${item.title}`} className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14222E] via-[#14222E]/80 to-transparent"></div>
                  </div>
                )}

                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <div className={`w-14 h-14 bg-[#0F161E]/80 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${activeFeature?.title === item.title ? 'bg-[#FF4F1F]/20 border border-[#FF4F1F]' : 'bg-[#1A2A3A] border border-[#2DD4BF]/30 group-hover:scale-110'}`}>
                    <item.icon className={`w-7 h-7 ${activeFeature?.title === item.title ? 'text-[#FF4F1F]' : 'text-[#2DD4BF]'}`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 transition-colors ${activeFeature?.title === item.title ? 'text-[#FF4F1F]' : 'text-white group-hover:text-[#2DD4BF]'}`}>{item.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>

                  {activeFeature?.title === item.title && (
                    <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={handleTrackCheckout}>
                      <span className="flex items-center text-sm font-semibold text-[#FF4F1F] mt-4 hover:underline">
                        QUERO IMPLANTAR ESTE SISTEMA <ChevronRight className="w-4 h-4 ml-1" />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={handleTrackCheckout} className="group inline-block w-full md:w-auto">
              <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF4F1F] hover:from-[#FF4F1F] hover:to-[#FF6B35] text-white font-bold py-4 px-10 rounded-xl text-lg transition-all hover:scale-105 cursor-pointer shadow-2xl shadow-[#FF6B35]/30">
                <span className="flex items-center justify-center gap-3 whitespace-normal text-center">
                  QUERO TODOS OS 5 PILARES AGORA
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform flex-shrink-0" />
                </span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 5. O QUE VOCÊ VAI RECEBER EXATAMENTE */}
      <section id="stack" ref={stackRef} className="relative z-10 py-32 px-4">
        <div className="max-w-5xl mx-auto bg-[#1A2A3A]/80 backdrop-blur-xl border border-[#333] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2DD4BF]/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF6B35]/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className={`relative z-10 transition-all duration-1000 ${stackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="animated-gradient-title">
                O QUE VOCÊ VAI RECEBER EXATAMENTE
              </span>
            </h2>

            <div className="space-y-6 mb-12">
              {stackItems.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center justify-between p-6 bg-[#0A0A0A]/80 border border-[#333] rounded-2xl hover:border-[#2DD4BF]/50 transition-colors duration-300 group">
                  <div className="flex items-center gap-6 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-[#2DD4BF]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  <div className="px-6 py-2 bg-[#1A2A3A] rounded-full text-[#FF6B35] font-mono font-bold border border-[#FF6B35]/20">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="mb-8 p-6 bg-gradient-to-r from-[#2DD4BF]/10 to-[#FF6B35]/10 rounded-2xl border border-gray-700">
                <p className="text-xl text-gray-400">Valor Total do Stack:</p>
                <p className="text-2xl font-bold text-white mb-2"><span className="line-through text-red-400">R$ 641,00</span></p>
              </div>
              
              <p className="text-3xl md:text-5xl font-extrabold text-white mb-8">
                Hoje por apenas: <span className="text-[#2DD4BF]">R$ 47,00</span>
                <span className="text-xl text-gray-300 ml-2">(ou 12x de R$6,80)</span>
              </p>
              <p className="text-[#FF6B35] font-bold mb-8">OFERTA DE LANÇAMENTO EXCLUSIVA</p>

              <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-md" onClick={handleTrackCheckout}>
                <Button className="pulse-button w-full h-auto py-3 md:h-16 text-white font-bold text-sm md:text-xl rounded-xl flex items-center justify-center gap-2 md:gap-3 whitespace-normal text-center">
                  SIM, QUERO ACESSO VITALÍCIO AO SISTEMA
                </Button>
              </a>

              <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-400">
                <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-[#2DD4BF]" /> Acesso Imediato via E-mail</div>
                <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-[#2DD4BF]" /> Compra 100% Segura</div>
                <div className="flex items-center gap-2"><Rocket className="w-5 h-5 text-[#2DD4BF]" /> Garantia de 7 Dias</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section id="faq" className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="animated-gradient-title">
              Perguntas Frequentes (FAQ)
            </span>
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-[#111]/50 border border-[#333] rounded-2xl overflow-hidden hover:border-[#2DD4BF]/50 transition-colors">
                <details className="group" open={openIndex === index} onClick={(e) => { e.preventDefault(); toggleFAQ(index); }}>
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-white">{item.q}</h3>
                    <ChevronRight className="w-5 h-5 text-[#2DD4BF] transform group-open:rotate-90 transition-transform" />
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

      {/* 7. OFERTA FINAL COM GARANTIA */}
      <section id="offer" ref={offerRef} className="relative z-10 py-32 px-4 overflow-hidden">
        <div className={`max-w-4xl mx-auto text-center relative z-20 transition-all duration-1000 ${offerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="mb-12">
            <Shield className="w-20 h-20 text-[#2DD4BF] mx-auto mb-6 animate-pulse-slow float-animation" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="dynamic-gradient glow-text">
                Garantia de 7 Dias: Zero Risco
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              <span className="text-[#2DD4BF] font-semibold">Simples: Teste o sistema por 7 dias.</span> Se você não sentir uma melhora tangível na sua clareza mental e produtividade, basta um e-mail para devolvemos 100% do seu dinheiro.
            </p>
            <p className="text-lg text-gray-400 mb-12">
              Acreditamos tanto no poder deste sistema que colocamos o risco inteiramente sobre nós. O seu único risco é continuar como está.
            </p>
          </div>

          <div className="bg-[#1A2A3A] border-2 border-[#FF4F1F] rounded-[3rem] p-12 shadow-2xl shadow-[#FF4F1F]/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF4F1F] to-[#FF6B35] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-2">
                <span className="shimmer-title">
                  Última Chance para Garantir o Preço de Lançamento
                </span>
              </h3>
              <p className="text-[#FF6B35] font-medium mb-8 uppercase tracking-wider">Acesso Vitalício + Todos os Bônus</p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                <img src={produtoImg} alt="Pack Nexus" className="w-64 rounded-xl shadow-2xl border border-[#333] rotate-[-5deg] group-hover:rotate-0 transition-all duration-500" />
                <div className="text-left">
                  <div className="text-6xl font-extrabold text-white mb-2">R$ 47<span className="text-2xl text-gray-400">,00</span></div>
                  <p className="text-gray-400 mb-4">Pagamento único. Sem mensalidades.</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[#2DD4BF] mr-2" /> Corebook Digital + Vídeo-Aulas</div>
                    <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[#2DD4BF] mr-2" /> Blueprint de Implementação (7 Dias)</div>
                    <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[#2DD4BF] mr-2" /> Banco de Prompts Estratégicos</div>
                    <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[#2DD4BF] mr-2" /> Atualizações Vitalícias Inclusas</div>
                  </div>
                </div>
              </div>

              <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="block max-w-2xl mx-auto" onClick={handleTrackCheckout}>
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
              <Brain className="w-8 h-8 text-[#2DD4BF]" />
              <span className="text-2xl font-bold text-white">NEXUS MANUAL</span>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-sm mb-6">
              O sistema operacional para profissionais que desejam dominar sua atenção, acelerar decisões e transformar ferramentas de IA em extensões da sua inteligência.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Links Úteis</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-[#2DD4BF] transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-[#2DD4BF] transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-[#2DD4BF] transition-colors">Suporte</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <p className="text-gray-500 mb-4">suporte@nexusorigin.com</p>
            <a href="https://instagram.com/nexus0rigin" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-[#FF6B35] transition-colors gap-2">
              <Instagram className="w-5 h-5" />
              <span>@nexus0rigin</span>
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto text-center pt-8 border-t border-[#111]">
          <p className="text-gray-600 text-sm mb-4">
            &copy; 2025 Nexus Manual. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Este produto não garante resultados específicos. Os resultados variam de acordo com a dedicação e aplicação de cada indivíduo.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
