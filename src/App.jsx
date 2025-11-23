import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, Zap, Target, Globe, Key, Rocket, Brain, 
  CheckCircle, AlertTriangle, Shield, Users, Star, ChevronRight,
  Terminal, Cpu, Network, Layers, Check, Sparkles
} from 'lucide-react';
// Removida a importação de './App.css'

// --- COMPONENTES INTERNOS (Para garantir funcionamento sem dependências externas) ---

// Componente de Botão Simplificado
const Button = ({ children, className, ...props }) => (
  <button 
    className={`inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${className}`}
    {...props}
  >
    {children}
  </button>
);

// --- PLACEHOLDERS DE IMAGENS (Para garantir que o código funcione) ---
// Substituindo os ficheiros locais com falha por placeholders temáticos.
const brainNetworkImg = "https://placehold.co/1920x1080/050505/4FD1C5?text=REDE+NEURAL+DE+FUNDO";
const neuralNetworkImg = "https://placehold.co/600x400/15202B/4FD1C5?text=FUNDAMENTOS+COGNITIVOS";
const laptopNeuralImg = "https://placehold.co/600x400/15202B/F97316?text=VANTAGEM+SENIOR";
const fundo02 = "https://placehold.co/800x800/15202B/777777?text=CAOS+DIGITAL";
const produtoImg = "https://placehold.co/400x400/15202B/FF6B35?text=PACK+NEXUS";

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
    bgImage: "https://placehold.co/600x400/15202B/4FD1C5?text=VELOCIDADE+MÁXIMA",
    icon: Zap, title: "Velocidade Warp", 
    desc: "Automatize 80% do seu trabalho operacional e foque apenas no estratégico." 
  },
  { 
    colSpan: "md:col-span-1",
    bgImage: "https://placehold.co/600x400/15202B/FF6B35?text=PROMPT+CODE",
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

  // Novo cor de fundo para a faixa intermediária (texto claro/quase branco)
  const MID_BANNER_COLOR = '#4E97D1';
  const MID_BANNER_TEXT_COLOR = '#DBEEFF'; // Cor de texto que se destaca no #4E97D1

  // Set CSS variables for inline styles (required for dynamic background in horizontal banner)
  // Mantido para as variáveis globais customizadas
  useEffect(() => {
    // Definindo as variáveis CSS globais no elemento root (<html>)
    document.documentElement.style.setProperty('--color-nexus-bg', '#050505');
    document.documentElement.style.setProperty('--color-nexus-teal', '#4FD1C5');
    document.documentElement.style.setProperty('--color-nexus-orange', '#FF6B35');
    document.documentElement.style.setProperty('--color-nexus-cta', '#CC3300');
    document.documentElement.style.setProperty('--color-nexus-text', '#E5E5E5');
    document.documentElement.style.setProperty('--mid-banner-text-color', MID_BANNER_TEXT_COLOR);
  }, []);

  return (
    <>
      <style>{`
        /* --- ESTILOS INLINE PARA CORRIGIR ERROS DE COMPILAÇÃO DO CSS --- */

        /* Cores Principais do Nexus */
        /* Já definidas via JS: --color-nexus-bg, --color-nexus-teal, etc. */

        /* Estilo para cards no bento grid */
        .nexus-card {
          background-color: #1A1A1A;
          border: 1px solid #333333;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .nexus-card:hover {
          border-color: var(--color-nexus-teal);
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(79, 209, 197, 0.15);
        }

        /* Estilo para Botões CTA */
        button.pulse-button {
          background-image: linear-gradient(to right, var(--color-nexus-orange), var(--color-nexus-cta));
          box-shadow: 0 5px 15px rgba(255, 107, 53, 0.4);
        }

        button.pulse-button:hover {
          background-image: linear-gradient(to right, var(--color-nexus-cta), var(--color-nexus-orange));
        }

        .text-gradient-teal-orange {
          background-image: linear-gradient(to right, var(--color-nexus-teal), var(--color-nexus-orange));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* --- ANIMAÇÕES --- */
        @keyframes pulse {
          0% { opacity: 0.1; }
          50% { opacity: 0.2; }
          100% { opacity: 0.1; }
        }

        .animate-pulse-slow { animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slideUp 0.8s ease-out forwards; }
        .animate-slide-up-delay { animation: slideUp 0.8s ease-out 0.2s forwards; opacity: 0; }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down { animation: slideDown 0.8s ease-out forwards; }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in { animation: scaleIn 0.5s ease-out forwards; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }

        @keyframes buttonPulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(255, 107, 53, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 107, 53, 0); }
        }

        /* Máscara radial para o fundo da Hero Section */
        .mask-radial-faded {
          mask-image: radial-gradient(circle at center, white 50%, transparent 80%);
        }

        /* --- SCROLLBAR PERSONALIZADA --- */
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #1A1A1A; border-radius: 5px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--color-nexus-teal); }

        /* --- BANNER DE ROLAGEM HORIZONTAL --- */
        .horizontal-banner-wrapper {
          overflow: hidden;
          white-space: nowrap;
          background: var(--color-nexus-teal);
          border-bottom: 1px solid #000;
        }

        .horizontal-banner-mid-section .horizontal-banner-wrapper {
          animation: none !important; 
        }

        .horizontal-banner {
          display: inline-block;
          animation: marquee 15s linear infinite;
          padding: 0.5rem 0; 
        }

        .banner-content {
          display: inline-block;
        }

        .banner-item {
          display: inline-block;
          padding: 0 1.5rem;
          color: #000;
          font-weight: 700;
          font-size: 0.875rem;
          letter-spacing: 0.05em;
        }

        .horizontal-banner-mid-section .banner-item {
          color: var(--mid-banner-text-color) !important;
          font-size: 1.125rem;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      
      <div className="min-h-screen bg-[--color-nexus-bg] font-['Poppins',sans-serif] overflow-x-hidden text-slate-100 selection:bg-[--color-nexus-teal] selection:text-black">
        
        {/* BACKGROUND GLOBAL */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Turquesa (Dominante) */}
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[--color-nexus-teal]/10 rounded-full blur-[120px] animate-pulse-slow"></div>
            {/* Laranja (Contraste) */}
            <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-[--color-nexus-orange]/10 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            {/* Grid Tech (Placeholder, assumindo que a imagem não está disponível) */}
            <div className="absolute inset-0 bg-[#333] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
        </div>

        {/* 1. FAIXA SUPERIOR DE URGÊNCIA */}
        <div className="horizontal-banner-wrapper">
          <div className="horizontal-banner">
            <div className="banner-content">
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

            {/* CTA Botão Vermelho Alaranjado */}
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
              <img src={brainNetworkImg} alt="Imagem abstrata de rede neural" className="w-full h-auto mask-radial-faded" />
          </div>
        </section>

        {/* 3. PROVA SOCIAL (LOGOS) */}
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

        {/* 4. A DOR */}
        <section ref={painRef} className={`relative z-10 py-32 px-4 transition-all duration-1000 delay-200 ${painVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-5 gap-12 items-center">
                  <div className="md:col-span-2 relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[--color-nexus-teal]/20 to-[--color-nexus-orange]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                      <img src={fundo02} alt="Caos Digital" className="relative rounded-3xl shadow-2xl border border-[#333] z-10 rotate-3 group-hover:rotate-0 transition-all duration-700 grayscale hover:grayscale-0 w-full" />
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

        {/* 5. A SOLUÇÃO: BENTO GRID */}
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
                      <div key={index} className={`${item.colSpan} nexus-card group relative rounded-3xl overflow-hidden min-h-[300px]`}>
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none">
                              <div className="absolute inset-0 bg-gradient-to-r from-[--color-nexus-teal]/10 via-transparent to-[--color-nexus-orange]/10 blur-xl"></div>
                          </div>
                          {item.bgImage && (
                              <div className="absolute inset-0 z-0">
                                  <img 
                                      src={item.bgImage} 
                                      alt={`Imagem de ${item.title}`} 
                                      className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent"></div>
                              </div>
                          )}
                          <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                              <div className="w-14 h-14 bg-[#1A2A3A] border border-[--color-nexus-teal]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                  <item.icon className="w-7 h-7 text-[--color-nexus-teal]" />
                              </div>
                              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[--color-nexus-teal] transition-colors">{item.title}</h3>
                              <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
        </section>

        {/* FAIXA HORIZONTAL INTERMEDIÁRIA - NOVA COR DE FUNDO */}
        <div className="relative z-20 py-6 overflow-hidden bg-[#0A0A0A] border-y border-[#333] horizontal-banner-mid-section">
          <div 
            className="horizontal-banner-wrapper" 
            style={{ 
              background: `linear-gradient(90deg, ${MID_BANNER_COLOR} 0%, #68A9E6 50%, ${MID_BANNER_COLOR} 100%)`, 
              border: 'none' 
            }}
          >
            <div className="horizontal-banner">
              <div className="banner-content">
                <span className="banner-item font-mono tracking-widest flex items-center text-lg" style={{color: MID_BANNER_TEXT_COLOR}}> 
                  <Sparkles className="w-4 h-4 mr-3 text-[--color-nexus-orange]" /> NEXUS
                </span>
                <span className="banner-item font-mono tracking-widest flex items-center text-lg" style={{color: MID_BANNER_TEXT_COLOR}}>
                  <Terminal className="w-4 h-4 mr-3 text-[--color-nexus-orange]" /> NEXUS
                </span>
                <span className="banner-item font-mono tracking-widest flex items-center text-lg" style={{color: MID_BANNER_TEXT_COLOR}}>
                  <Cpu className="w-4 h-4 mr-3 text-[--color-nexus-orange]" /> NEXUS
                </span>
                <span className="banner-item font-mono tracking-widest flex items-center text-lg" style={{color: MID_BANNER_TEXT_COLOR}}>
                  <Layers className="w-4 h-4 mr-3 text-[--color-nexus-orange]" /> NEXUS
                </span>
                <span className="banner-item font-mono tracking-widest flex items-center text-lg" style={{color: MID_BANNER_TEXT_COLOR}}>
                  <Sparkles className="w-4 h-4 mr-3 text-[--color-nexus-orange]" /> NEXUS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 6. O STACK */}
        <section ref={stackRef} className="relative z-10 py-32 px-4">
            <div className="max-w-5xl mx-auto bg-[#1A2A3A]/80 backdrop-blur-xl border border-[#333] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[--color-nexus-teal]/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[--color-nexus-orange]/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className={`relative z-10 transition-all duration-1000 ${stackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O Arsenal Completo da Sua <span className="text-[--color-nexus-orange]">Nova Carreira</span></h2>
                    
                    <div className="space-y-6">
                        {stackItems.map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-center justify-between p-6 bg-[#0A0A0A]/80 border border-[#333] rounded-2xl hover:border-[--color-nexus-teal]/50 transition-colors duration-300 group">
                                <div className="flex items-center gap-6 mb-4 md:mb-0">
                                    <div className="w-12 h-12 bg-[--color-nexus-teal]/10 border border-[--color-nexus-teal]/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6 text-[--color-nexus-teal]" />
                                    </div>
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                </div>
                                <div className="px-6 py-2 bg-[#1A2A3A] rounded-full text-[--color-nexus-orange] font-mono font-bold border border-[--color-nexus-orange]/20">
                                    {item.value}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-xl text-gray-400 mb-6">Valor Total do Stack: <span className="line-through">R$ 641,00</span></p>
                        <p className="text-3xl md:text-5xl font-extrabold text-white mb-8">
                            Hoje por apenas: <span className="text-[--color-nexus-teal]">R$ 37,00</span>
                        </p>
                        <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-md">
                            <Button className="pulse-button w-full h-16 text-white font-bold text-xl rounded-xl flex items-center justify-center gap-3">
                                GARANTIR MEU ARSENAL AGORA
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* 7. TESTEMUNHOS */}
        <section ref={reviewsRef} className="relative z-10 py-24 px-4 bg-[#0A0A0A] border-y border-[#333]">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 ${reviewsVisible ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O Que Estão Falando do <span className="text-[--color-nexus-teal]">Método Nexus</span></h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[...Array(3)].map((_, i) => (
                      <div key={i} className="nexus-card p-8 rounded-3xl relative">
                          <div className="absolute -top-4 left-8 text-[--color-nexus-orange] text-6xl opacity-20">"</div>
                          <div className="flex gap-1 mb-4">
                              {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-[--color-nexus-orange] fill-current" />)}
                          </div>
                          <p className="text-gray-300 mb-6 leading-relaxed">"O material é direto ao ponto. Em uma tarde eu já estava aplicando conceitos que economizaram horas da minha semana. O melhor investimento que fiz esse ano."</p>
                          <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-gradient-to-br from-[--color-nexus-teal] to-[#0D9488] rounded-full flex items-center justify-center font-bold text-sm text-black">
                                  {String.fromCharCode(65 + i)}
                              </div>
                              <div>
                                  <h4 className="font-bold text-white">Aluno Verificado</h4>
                                  <p className="text-sm text-gray-500">Membro da Comunidade</p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="relative z-10 py-24 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
              <div className="space-y-4">
                  {faqItems.map((item, index) => (
                      <div key={index} className="bg-[#111]/50 border border-[#333] rounded-2xl overflow-hidden hover:border-[--color-nexus-teal]/50 transition-colors">
                          <details className="group">
                              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                                  <h3 className="text-lg font-bold text-white">{item.q}</h3>
                                  <ChevronRight className="w-5 h-5 text-[--color-nexus-teal] transform group-open:rotate-90 transition-transform" />
                              </summary>
                              <div className="px-6 pb-6 pt-2 text-gray-300 leading-relaxed border-t border-[#333] bg-[#0A0A0A]/50">
                                  {item.a}
                              </div>
                          </details>
                      </div>
                  ))}
              </div>
            </div>
        </section>

        {/* 9. OFERTA FINAL */}
        <section ref={offerRef} className="relative z-10 py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[--color-nexus-cta]/10 to-transparent pointer-events-none"></div>
          
          <div className={`max-w-4xl mx-auto text-center relative z-20 transition-all duration-1000 ${offerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="mb-12">
                    <Shield className="w-20 h-20 text-[--color-nexus-teal] mx-auto mb-6 animate-pulse-slow" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Garantia Blindada de 7 Dias</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        O risco é todo nosso. Acesse o material, aplique os blueprints. Se você não sentir que isso vale 10x o que você pagou, envie um único e-mail e devolvemos 100% do seu dinheiro.
                    </p>
              </div>

              <div className="bg-[#1A2A3A] border-2 border-[--color-nexus-cta] rounded-[3rem] p-12 shadow-2xl shadow-[--color-nexus-cta]/20 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-opacity-10 mix-blend-overlay"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[--color-nexus-cta] to-[--color-nexus-orange] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
                  
                  <div className="relative z-10">
                      <h3 className="text-3xl font-bold text-white mb-2">Última Chance para Garantir o Preço de Lançamento</h3>
                      <p className="text-[--color-nexus-orange] font-medium mb-8 uppercase tracking-wider">Acesso Vitalício + Bônus Exclusivos</p>
                      
                      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                          <img src={produtoImg} alt="Pack Nexus" className="w-64 rounded-xl shadow-2xl border border-[#333] rotate-[-5deg] group-hover:rotate-0 transition-all duration-500" />
                          <div className="text-left">
                              <div className="text-6xl font-extrabold text-white mb-2">R$ 37<span className="text-2xl text-gray-400">,00</span></div>
                              <p className="text-gray-400 mb-4">Pagamento único. Sem mensalidades.</p>
                              <div className="flex flex-col gap-2">
                                  <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[--color-nexus-teal] mr-2" /> Acesso Imediato via E-mail</div>
                                  <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[--color-nexus-teal] mr-2" /> Plataforma Segura e Confiável</div>
                              </div>
                          </div>
                      </div>

                      <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="block max-w-2xl mx-auto">
                          <Button className="pulse-button w-full h-20 text-white font-extrabold text-2xl rounded-2xl flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform">
                              QUERO COMEÇAR AGORA MESMO
                              <ArrowRight className="w-8 h-8" />
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
                      <span className="text-2xl font-bold text-white">NEXUS ORIGIN</span>
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
                  <p className="text-gray-500">suporte@nexusorigin.com</p>
              </div>
          </div>
          <div className="max-w-6xl mx-auto text-center pt-8 border-t border-[#111]">
            <p className="text-gray-600 text-sm mb-4">
              &copy; 2025 Nexus Origin. Todos os direitos reservados.
            </p>
          </div>
        </footer>

      </div>
    </>
  )
}

export default App
