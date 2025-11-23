import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import {
  ArrowRight, Zap, Target, Globe, Key, Rocket, Brain, TrendingUp,
  CheckCircle, AlertTriangle, Shield, Users, Star, ChevronRight,
  Terminal, Cpu, Network, Layers, Check, Sparkles
} from 'lucide-react'
import './App.css' 

// --- IMPORTAÇÃO DE IMAGENS ---
import brainNetworkImg from './assets/1000393266.jpg'
import neuralNetworkImg from './assets/1000393264.jpg'
import laptopNeuralImg from './assets/1000393263.jpg'
import brainAIImg from './assets/1000393262.jpg'
import produtoImg from './assets/produto.jpg'
import fundo02 from './assets/fundo02.jpg'

// Link do Checkout
const CHECKOUT_LINK = "https://pay.cakto.com.br/5dUKrWD";

// --- DADOS ESTRUTURADOS ---

const bentoFeatures = [
  { 
    colSpan: "md:col-span-2",
    bgImage: neuralNetworkImg,
    icon: Brain, title: "O Cérebro Digital", 
    desc: "Não aprenda ferramentas. Aprenda os fundamentos cognitivos da IA que nunca mudam." 
  },
  { 
    colSpan: "md:col-span-1",
    bgImage: null,
    icon: Zap, title: "Velocidade Warp", 
    desc: "Automatize 80% do seu trabalho operacional e foque apenas no estratégico." 
  },
  { 
    colSpan: "md:col-span-1",
    bgImage: null,
    icon: Terminal, title: "Engenharia de Prompt", 
    desc: "A nova linguagem de programação. Fale a língua da máquina fluentemente." 
  },
  { 
    colSpan: "md:col-span-2",
    bgImage: laptopNeuralImg,
    icon: Target, title: "Vantagem Injusta", 
    desc: "Enquanto outros lutam com o básico, você estará implementando estratégias de nível sênior." 
  },
];

const stackItems = [
    { icon: Layers, title: "O Manual Nexus Origin (E-book Premium)", value: "R$ 197" },
    { icon: Cpu, title: "Banco de Prompts 'Copy & Paste' de Alta Conversão", value: "R$ 147" },
    { icon: Network, title: "Blueprint: Implementação de IA em Negócios", value: "R$ 297" },
    { icon: Shield, title: "Acesso Vitalício + Atualizações Mensais", value: "Inestimável" },
];

const faqItems = [
  { q: "Preciso saber programar para usar o Nexus?", a: "Absolutamente não. O Nexus foi desenhado para profissionais de qualquer área. Focamos na lógica e estratégia, não em código." },
  { q: "A IA muda toda semana, o material não vai ficar obsoleto?", a: "Essa é a diferença do Nexus. Focamos nos 'princípios imutáveis' da IA. Além disso, você tem atualizações vitalícias garantidas." },
  { q: "Em quanto tempo vejo resultados?", a: "Nossos alunos relatam ganho de produtividade nas primeiras 24 horas após aplicarem os primeiros blueprints do manual." },
  { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se achar que não é para você, devolvemos 100% do seu investimento, sem perguntas." },
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

// --- COMPONENTE PRINCIPAL ---
function App() {
  const [heroRef, heroVisible] = useScrollAnimation()
  const [painRef, painVisible] = useScrollAnimation(0.2)
  const [bentoRef, bentoVisible] = useScrollAnimation(0.1)
  const [stackRef, stackVisible] = useScrollAnimation(0.1)
  const [reviewsRef, reviewsVisible] = useScrollAnimation(0.1)
  const [offerRef, offerVisible] = useScrollAnimation(0.1)

  return (
    <div className="min-h-screen bg-[--color-nexus-bg] font-['Poppins',sans-serif] overflow-x-hidden text-slate-100 selection:bg-[--color-nexus-teal] selection:text-black">
      
      {/* BACKGROUND GLOBAL - "Dark Metal Blue" */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Turquesa no topo esquerdo (Dominante) */}
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[--color-nexus-teal]/10 rounded-full blur-[120px] animate-pulse-slow"></div>
          {/* Laranja na direita inferior (Contraste) */}
          <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-[--color-nexus-orange]/10 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          {/* Grid Tech (mantido, talvez com opacidade ajustada) */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
      </div>

      {/* 1. FAIXA SUPERIOR DE URGÊNCIA */}
      <div className="horizontal-banner-wrapper">
        <div className="horizontal-banner">
          <div className="banner-content">
             {/* Texto Preto para contraste no banner Turquesa/Laranja */}
             <span className="banner-item flex items-center text-black"><Zap className="w-4 h-4 mr-2"/>OFERTA DE LANÇAMENTO</span>
             <span className="banner-item flex items-center text-black"><CheckCircle className="w-4 h-4 mr-2"/>ACESSO VITALÍCIO</span>
             <span className="banner-item flex items-center text-black"><Shield className="w-4 h-4 mr-2"/>GARANTIA DE 7 DIAS</span>
             <span className="banner-item flex items-center text-black"><Rocket className="w-4 h-4 mr-2"/>ATUALIZAÇÕES INCLUSAS</span>
             <span className="banner-item flex items-center text-black"><Zap className="w-4 h-4 mr-2"/>OFERTA DE LANÇAMENTO</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section ref={heroRef} className="relative z-10 pt-20 pb-32 px-4 overflow-hidden">
        <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge Tech - Turquesa */}
          <div className="inline-flex items-center relative mb-8 group cursor-default animate-fade-in">
            <div className="absolute -inset-1 bg-gradient-to-r from-[--color-nexus-teal] to-[--color-nexus-orange] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative px-6 py-2 bg-[#0A0A0A] border border-[--color-nexus-teal]/30 rounded-full flex items-center gap-3">
               <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--color-nexus-teal] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[--color-nexus-teal]"></span>
               </span>
               <span className="text-sm font-semibold text-[--color-nexus-teal] tracking-wide shadow-cyan-500/50">
                 Sistema Operacional de Alta Performance com IA
               </span>
            </div>
          </div>

          {/* Headline com Gradiente Turquesa -> Laranja */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8 tracking-tight animate-slide-up">
            Domine a IA Antes Que <br />
            <span className="text-gradient-teal-orange animate-gradient-text">
              Ela Substitua Você.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up-delay">
            Pare de correr atrás de ferramentas novas toda semana. Descubra os <span className="text-[--color-nexus-teal] font-semibold">princípios imutáveis</span> da inteligência artificial que colocarão você no top 1% do mercado.
          </p>

          {/* CTA Botão Vermelho Alaranjado (Destaque Total) */}
          <div className="flex flex-col items-center gap-6 animate-scale-in">
            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="group relative inline-block">
              <Button className="pulse-button relative w-full md:w-auto h-16 px-12 text-white font-bold text-xl rounded-xl flex items-center justify-center gap-3">
                QUERO ACESSO VITALÍCIO AGORA
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center"><Shield className="w-4 h-4 text-[--color-nexus-teal] mr-2"/> Compra Segura</span>
              <span className="flex items-center"><Rocket className="w-4 h-4 text-[--color-nexus-teal] mr-2"/> Acesso Imediato</span>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl opacity-30 pointer-events-none -z-10 mix-blend-screen">
            <img src={brainNetworkImg} alt="" className="w-full h-auto mask-radial-faded" />
        </div>
      </section>

      {/* 3. PROVA SOCIAL (LOGOS) - Detalhes Turquesa e Laranja */}
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

      {/* 4. A DOR - Foco em Alerta (Laranja/Vermelho) mas com glow Turquesa */}
      <section ref={painRef} className={`relative z-10 py-32 px-4 transition-all duration-1000 delay-200 ${painVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-2 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[--color-nexus-teal]/20 to-[--color-nexus-orange]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                    <img src={fundo02} alt="Caos Digital" className="relative rounded-3xl shadow-2xl border border-[#333] z-10 rotate-3 group-hover:rotate-0 transition-all duration-700 grayscale hover:grayscale-0" />
                </div>
                <div className="md:col-span-3 space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        A "Corrida dos Ratos" Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-cta]">Está Te Deixando Para Trás.</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Enquanto você gasta horas tentando entender a "ferramenta de IA da semana", os top performers do mercado já estão usando sistemas validados para produzir 10x mais rápido.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start p-4 bg-[#111]/50 border border-[--color-nexus-orange]/20 rounded-xl hover:border-[--color-nexus-orange]/50 transition-colors">
                            <AlertTriangle className="w-6 h-6 text-[--color-nexus-orange] mr-4 flex-shrink-0 mt-1" />
                            <span><strong className="text-white">Ansiedade Tecnológica:</strong> A sensação constante de que existe algo novo que você deveria saber.</span>
                        </li>
                        <li className="flex items-start p-4 bg-[#111]/50 border border-[--color-nexus-orange]/20 rounded-xl hover:border-[--color-nexus-orange]/50 transition-colors">
                            <AlertTriangle className="w-6 h-6 text-[--color-nexus-orange] mr-4 flex-shrink-0 mt-1" />
                            <span><strong className="text-white">Medo da Irrelevância:</strong> Ver profissionais menos experientes te ultrapassarem porque dominam a IA.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* 5. A SOLUÇÃO: BENTO GRID - Dominância Turquesa */}
      <section ref={bentoRef} className="relative z-10 pt-32 pb-16 px-4 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">O Ecossistema <span className="text-[--color-nexus-teal]">Nexus Origin</span></h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Não é um curso. É um sistema operacional mental para você navegar e liderar na era da Inteligência Artificial.
                </p>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${bentoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                {bentoFeatures.map((item, index) => (
                    <div key={index} className={`${item.colSpan} nexus-card group relative rounded-3xl overflow-hidden`}>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none">
                            {/* Glow Turquesa no Hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[--color-nexus-teal]/10 via-transparent to-[--color-nexus-orange]/10 blur-xl"></div>
                        </div>
                        {item.bgImage && (
                            <div className="absolute inset-0 z-0">
                                <img src={item.bgImage} alt="" className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration
