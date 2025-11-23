import { useState, useEffect, useRef } from 'react'
import {
  ArrowRight, Zap, Target, Rocket, Brain,
  CheckCircle, AlertTriangle, Shield, Star, ChevronRight,
  Terminal, Cpu, Network, Layers, Check, Sparkles
} from 'lucide-react'

// --- DEFINIÇÃO DE CORES (Para uso direto no JSX/Inline Styles) ---
const NEXUS_COLORS = {
  BG: '#1A2A3A',
  TEAL: '#2DD4BF',
  ORANGE: '#FF6B35',
  CTA: '#FF4F1F',
  CTA_LIGHT: '#FF7F50',
  TEXT_LIGHT: '#DBEEFF' // Cor de texto clara para o banner intermediário
};

// --- IMAGENS PLACEHOLDERS ---
const brainNetworkImg = "https://placehold.co/1200x800/1A2A3A/2DD4BF?text=Neural+Network+BG";
const neuralNetworkImg = "https://placehold.co/600x400/1A2A3A/FF6B35?text=Cerebro+Digital";
const laptopNeuralImg = "https://placehold.co/600x400/1A2A3A/2DD4BF?text=Vantagem+Injusta";
const produtoImg = "https://placehold.co/300x450/FF4F1F/1A2A3A?text=Ebook+Nexus";
const fundo02 = "https://placehold.co/800x600/1A2A3A/FF6B35?text=Caos+Digital";

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

// --- COMPONENTE BUTTON CUSTOMIZADO (Usando HEX) ---
const Button = ({ children, className, ...props }) => (
    <button
      className={`
        // Usando cores HEX no hover e no ring para compatibilidade total
        bg-[${NEXUS_COLORS.CTA}] hover:bg-[${NEXUS_COLORS.CTA_LIGHT}] 
        text-white font-bold py-3 px-6 rounded-lg 
        transition-all duration-300 transform hover:scale-[1.02] 
        focus:outline-none focus:ring-4 focus:ring-[${NEXUS_COLORS.CTA}]/50
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
);


// --- COMPONENTE PRINCIPAL ---
function App() {
  const [heroRef, heroVisible] = useScrollAnimation()
  const [painRef, painVisible] = useScrollAnimation(0.2)
  const [bentoRef, bentoVisible] = useScrollAnimation(0.1)
  const [stackRef, stackVisible] = useScrollAnimation(0.1)
  const [reviewsRef, reviewsVisible] = useScrollAnimation(0.1)
  const [offerRef, offerVisible] = useScrollAnimation(0.1)

  const MID_BANNER_COLOR = '#4E97D1';
  const MID_BANNER_TEXT_COLOR = NEXUS_COLORS.TEXT_LIGHT;

  return (
    <>
      <style>{`
        /* =========================================
           ESTILOS CSS EMBUTIDOS (Cópia fiel do App.css mais as correções)
        ========================================= */

        /* 1. IMPORTAÇÕES E FONTES */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

        /* 2. DEFINIÇÃO DE TEMA (Variáveis CSS) */
        :root {
          --color-nexus-bg: ${NEXUS_COLORS.BG};
          --color-nexus-teal: ${NEXUS_COLORS.TEAL};
          --color-nexus-orange: ${NEXUS_COLORS.ORANGE};
          --color-nexus-cta: ${NEXUS_COLORS.CTA};
          --color-nexus-cta-light: ${NEXUS_COLORS.CTA_LIGHT};
        }

        /* 3. ESTILOS DE BASE */
        body {
          background-color: var(--color-nexus-bg);
          color: #ffffff;
          font-family: 'Poppins', sans-serif;
          margin: 0;
        }
        * {
          border-color: rgba(255, 255, 255, 0.1); 
        }

        /* 4. ESTILOS PARA OS COMPONENTES ESPECÍFICOS DO NEXUS */

        /* FAIXA HORIZONTAL */
        .horizontal-banner-wrapper {
          width: 100%;
          overflow: hidden;
          background: linear-gradient(90deg, var(--color-nexus-teal) 0%, #0D9488 50%, var(--color-nexus-orange) 100%);
          padding: 0.5rem 0;
          position: relative;
          z-index: 50;
          border-bottom: 1px solid rgba(45, 212, 191, 0.2);
        }

        .horizontal-banner {
          display: flex;
          width: 100%;
          overflow: hidden;
        }

        .banner-content {
          display: flex;
          animation: scroll-horizontal 30s linear infinite;
          white-space: nowrap;
        }

        .banner-item {
          display: inline-block;
          padding: 0 3rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: #020408; 
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* NOVO ESTILO PARA A SEGUNDA FAIXA HORIZONTAL (AZUL MAIS CLARO) */
        .horizontal-banner-mid-section .banner-item {
          color: ${NEXUS_COLORS.TEXT_LIGHT}; 
        }
        
        /* Efeito de hover nos cartões (Borda Turquesa) */
        .nexus-card {
          background-color: #14222E; 
          border: 1px solid #1C2A35;
          border-radius: 1.5rem; 
          transition: all 0.5s ease-out;
        }
        
        .nexus-card:hover {
          border-color: var(--color-nexus-teal);
          box-shadow: 0 10px 40px -10px rgba(45, 212, 191, 0.2); 
          transform: translateY(-5px);
        }

        /* Efeito de brilho para o botão (Vermelho-Alaranjado) */
        .pulse-button {
          position: relative;
          overflow: hidden;
          background: var(--color-nexus-cta);
          transition: all 0.3s ease;
          box-shadow: 0 0 20px rgba(255, 79, 31, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: pulse 2s infinite;
        }
        
        .pulse-button:hover {
          background: var(--color-nexus-cta-light); 
          box-shadow: 0 0 30px rgba(255, 79, 31, 0.6);
        }

        /* 5. ANIMAÇÕES E KEYFRAMES */

        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(255, 79, 31, 0.7); } 70% { box-shadow: 0 0 0 15px rgba(255, 79, 31, 0); } 100% { box-shadow: 0 0 0 0 rgba(255, 79, 31, 0); } }
        @keyframes scroll-horizontal { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes gradientX { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }

        /* Gradiente de Texto Turquesa para Laranja */
        .text-gradient-teal-orange {
          background: linear-gradient(to right, var(--color-nexus-teal), var(--color-nexus-orange), var(--color-nexus-teal));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: gradientX 5s linear infinite;
        }

        /* Animações Tailwind (definições de keyframes usadas no JSX) */
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes pulseSlow { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }

        /* Classes de utilidade de animação usadas no JSX */
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-slide-up { animation: slideUp 1s ease-out forwards; }
        .animate-slide-up-delay { animation: slideUp 1s 0.3s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.5s ease-out forwards; }
        .animate-pulse-slow { animation: pulseSlow 5s infinite; }
        .mask-radial-faded { mask-image: radial-gradient(circle at 50% 50%, white, rgba(255, 255, 255, 0) 70%); }

      `}</style>
      
      {/* O main div agora usa o HEX diretamente para garantir o fundo */}
      <div className="min-h-screen font-['Poppins',sans-serif] overflow-x-hidden text-slate-100 selection:bg-nexus-teal selection:text-black" style={{ backgroundColor: NEXUS_COLORS.BG }}>
        
        {/* BACKGROUND GLOBAL */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Turquesa (Dominante) - Usando HEX/Opacity */}
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#2DD4BF]/10 rounded-full blur-[120px] animate-pulse-slow"></div>
            {/* Laranja (Contraste) - Usando HEX/Opacity */}
            <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#FF6B35]/10 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            {/* Grid Tech - Fundo mockado */}
            <div className="absolute inset-0 bg-repeat bg-center opacity-5" style={{backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 40 40\" fill=\"#FFFFFF\" opacity=\"0.1\"><path d=\"M0 0h1v40H0zM0 0h40v1H0z\"/></svg>')", backgroundSize: '20px 20px'}}></div>
        </div>

        {/* 1. FAIXA SUPERIOR DE URGÊNCIA */}
        <div className="horizontal-banner-wrapper">
          <div className="horizontal-banner">
            <div className="banner-content">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="banner-item flex items-center text-black tracking-widest gap-12">
                      <span className="flex items-center"><Zap className="w-4 h-4 mr-2"/>OFERTA DE LANÇAMENTO</span>
                      <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2"/>ACESSO VITALÍCIO</span>
                      <span className="flex items-center"><Shield className="w-4 h-4 mr-2"/>GARANTIA DE 7 DIAS</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* 2. HERO SECTION */}
        <section ref={heroRef} className="relative z-10 pt-20 pb-32 px-4 overflow-hidden">
          <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Badge Tech - Turquesa */}
            <div className="inline-flex items-center relative mb-8 group cursor-default animate-fade-in">
              {/* Usando HEX para as cores do gradiente/blur */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2DD4BF] to-[#FF6B35] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative px-6 py-2 bg-[#0A0A0A] border border-[#2DD4BF]/30 rounded-full flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2DD4BF]"></span>
                  </span>
                  <span className="text-sm font-semibold text-[#2DD4BF] tracking-wide">
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
              Pare de correr atrás de ferramentas novas toda semana. Descubra os <span className="text-[#2DD4BF] font-semibold">princípios imutáveis</span> da inteligência artificial que colocarão você no top 1% do mercado.
            </p>

            {/* CTA Botão Vermelho Alaranjado */}
            <div className="flex flex-col items-center gap-6 animate-scale-in">
              <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="group relative inline-block">
                <Button className="pulse-button w-full md:w-auto h-16 px-12 text-white font-bold text-xl rounded-xl flex items-center justify-center gap-3">
                  QUERO ACESSO VITALÍCIO AGORA
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center"><Shield className="w-4 h-4 text-[#2DD4BF] mr-2"/> Compra Segura</span>
                <span className="flex items-center"><Rocket className="w-4 h-4 text-[#2DD4BF] mr-2"/> Acesso Imediato</span>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl opacity-30 pointer-events-none -z-10 mix-blend-screen">
              <img src={brainNetworkImg} alt="Imagem abstrata de rede neural" className="w-full h-auto mask-radial-faded animate-float-slow" />
          </div>
        </section>

        {/* 3. PROVA SOCIAL (LOGOS) */}
        <div className="relative z-10 border-y border-[#333] bg-[#0A0A0A]/80 backdrop-blur-md py-8">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-widest">Método utilizado por profissionais de:</p>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="text-2xl font-bold font-mono text-white">TECH<span className="text-[#2DD4BF]">CORP</span></div>
                    <div className="text-2xl font-bold font-sans italic text-white">InnovateLabs</div>
                    <div className="text-xl font-bold uppercase tracking-tighter text-white">Future<span className="text-[#FF6B35] font-extrabold">/</span>Work</div>
                    <div className="text-2xl font-semibold text-white">Global<span className="font-light text-[#2DD4BF]">Systems</span></div>
                </div>
            </div>
        </div>

        {/* 4. A DOR */}
        <section ref={painRef} className={`relative z-10 py-32 px-4 transition-all duration-1000 delay-200 ${painVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-5 gap-12 items-center">
                  <div className="md:col-span-2 relative group">
                      {/* Usando HEX no gradiente e blur */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/20 to-[#FF6B35]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                      <img src={fundo02} alt="Caos Digital" className="relative rounded-3xl shadow-2xl border border-[#333] z-10 rotate-3 group-hover:rotate-0 transition-all duration-700 grayscale hover:grayscale-0" />
                  </div>
                  <div className="md:col-span-3 space-y-8">
                      <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                          A "Corrida dos Ratos" Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF4F1F]">Está Te Deixando Para Trás.</span>
                      </h2>
                      <p className="text-lg text-gray-300 leading-relaxed">
                          Enquanto você gasta horas tentando entender a "ferramenta de IA da semana", os top performers do mercado já estão usando sistemas validados para produzir 10x mais rápido.
                      </p>
                      <ul className="space-y-4">
                          <li className="flex items-start p-4 bg-[#111]/50 border border-[#FF6B35]/20 rounded-xl hover:border-[#FF6B35]/50 transition-colors">
                              <AlertTriangle className="w-6 h-6 text-[#FF6B35] mr-4 flex-shrink-0 mt-1" />
                              <span><strong className="text-white">Ansiedade Tecnológica:</strong> A sensação constante de que existe algo novo que você deveria saber.</span>
                          </li>
                          <li className="flex items-start p-4 bg-[#111]/50 border border-[#FF6B35]/20 rounded-xl hover:border-[#FF6B35]/50 transition-colors">
                              <AlertTriangle className="w-6 h-6 text-[#FF6B35] mr-4 flex-shrink-0 mt-1" />
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
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">O Ecossistema <span className="text-[#2DD4BF]">Nexus Origin</span></h2>
                  <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                      Não é um curso. É um sistema operacional mental para você navegar e liderar na era da Inteligência Artificial.
                  </p>
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${bentoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  {bentoFeatures.map((item, index) => (
                      <div key={index} className={`${item.colSpan} nexus-card group relative rounded-3xl overflow-hidden`}>
                          {/* Efeito de Hover Glow na Borda */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none">
                              {/* Usando HEX no gradiente */}
                              <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF]/10 via-transparent to-[#FF6B35]/10 blur-xl"></div>
                          </div>
                          {/* Imagem de Fundo (se houver) */}
                          {item.bgImage && (
                              <div className="absolute inset-0 z-0">
                                  <img src={item.bgImage} alt={`Imagem de ${item.title}`} className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent"></div>
                              </div>
                          )}
                          {/* Conteúdo */}
                          <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                              {/* Usando HEX para o background e border */}
                              <div className="w-14 h-14 bg-[#1A2A3A] border border-[#2DD4BF]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                  <item.icon className="w-7 h-7 text-[#2DD4BF]" />
                              </div>
                              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#2DD4BF] transition-colors">{item.title}</h3>
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
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="banner-item font-mono tracking-widest flex items-center text-lg" style={{color: MID_BANNER_TEXT_COLOR, padding: '0 2rem'}}> 
                    <Sparkles className="w-4 h-4 mr-3 text-[#FF6B35]" /> NEXUS SYSTEM
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 6. O STACK */}
        <section ref={stackRef} className="relative z-10 py-32 px-4">
            <div className="max-w-5xl mx-auto bg-[#1A2A3A]/80 backdrop-blur-xl border border-[#333] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
                {/* Usando HEX no blur */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2DD4BF]/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF6B35]/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className={`relative z-10 transition-all duration-1000 ${stackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O Arsenal Completo da Sua <span className="text-[#FF6B35]">Nova Carreira</span></h2>
                    
                    <div className="space-y-6">
                        {stackItems.map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-center justify-between p-6 bg-[#0A0A0A]/80 border border-[#333] rounded-2xl hover:border-[#2DD4BF]/50 transition-colors duration-300 group">
                                <div className="flex items-center gap-6 mb-4 md:mb-0">
                                    {/* Usando HEX para cores internas */}
                                    <div className="w-12 h-12 bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6 text-[#2DD4BF]" />
                                    </div>
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                </div>
                                {/* Usando HEX para cores internas */}
                                <div className="px-6 py-2 bg-[#1A2A3A] rounded-full text-[#FF6B35] font-mono font-bold border border-[#FF6B35]/20">
                                    {item.value}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-xl text-gray-400 mb-6">Valor Total do Stack: <span className="line-through">R$ 641,00</span></p>
                        <p className="text-3xl md:text-5xl font-extrabold text-white mb-8">
                            Hoje por apenas: <span className="text-[#2DD4BF]">R$ 37,00</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O Que Estão Falando do <span className="text-[#2DD4BF]">Método Nexus</span></h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((_, i) => (
                      <div key={i} className="nexus-card p-8 rounded-3xl relative">
                          <div className="absolute -top-4 left-8 text-[#FF6B35] text-6xl opacity-20">"</div>
                          <div className="flex gap-1 mb-4">
                              {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-[#FF6B35] fill-current" />)}
                          </div>
                          <p className="text-gray-300 mb-6 leading-relaxed">"O material é direto ao ponto. Em uma tarde eu já estava aplicando conceitos que economizaram horas da minha semana. O melhor investimento que fiz esse ano."</p>
                          <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-gradient-to-br from-[#2DD4BF] to-[#0D9488] rounded-full flex items-center justify-center font-bold text-sm text-black">
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
                      <div key={index} className="bg-[#111]/50 border border-[#333] rounded-2xl overflow-hidden hover:border-[#2DD4BF]/50 transition-colors">
                          <details className="group">
                              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                                  <h3 className="text-lg font-bold text-white">{item.q}</h3>
                                  <ChevronRight className="w-5 h-5 text-[#2DD4BF] transform group-open:rotate-90 transition-transform" />
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
          {/* Usando HEX no gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FF4F1F]/10 to-transparent pointer-events-none"></div>
          
          <div className={`max-w-4xl mx-auto text-center relative z-20 transition-all duration-1000 ${offerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="mb-12">
                   <Shield className="w-20 h-20 text-[#2DD4BF] mx-auto mb-6 animate-pulse-slow" />
                   <h2 className="text-4xl md:text-5xl font-bold mb-6">Garantia Blindada de 7 Dias</h2>
                   <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                       O risco é todo nosso. Acesse o material, aplique os blueprints. Se você não sentir que isso vale 10x o que você pagou, envie um único e-mail e devolvemos 100% do seu dinheiro.
                   </p>
              </div>

              <div className="bg-[#1A2A3A] border-2 border-[#FF4F1F] rounded-[3rem] p-12 shadow-2xl shadow-[#FF4F1F]/20 relative overflow-hidden group">
                  {/* Fundo mockado */}
                  <div className="absolute inset-0 bg-repeat opacity-10 mix-blend-overlay" style={{backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 40 40\" fill=\"#FFFFFF\" opacity=\"0.1\"><path d=\"M0 0h1v40H0zM0 0h40v1H0z\"/></svg>')", backgroundSize: '20px 20px'}}></div>
                  {/* Usando HEX no blur */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FF4F1F] to-[#FF6B35] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
                  
                  <div className="relative z-10">
                      <h3 className="text-3xl font-bold text-white mb-2">Última Chance para Garantir o Preço de Lançamento</h3>
                      <p className="text-[#FF6B35] font-medium mb-8 uppercase tracking-wider">Acesso Vitalício + Bônus Exclusivos</p>
                      
                      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                          <img src={produtoImg} alt="Pack Nexus" className="w-64 rounded-xl shadow-2xl border border-[#333] rotate-[-5deg] group-hover:rotate-0 transition-all duration-500" />
                          <div className="text-left">
                              <div className="text-6xl font-extrabold text-white mb-2">R$ 37<span className="text-2xl text-gray-400">,00</span></div>
                              <p className="text-gray-400 mb-4">Pagamento único. Sem mensalidades.</p>
                              <div className="flex flex-col gap-2">
                                  <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[#2DD4BF] mr-2" /> Acesso Imediato via E-mail</div>
                                  <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[#2DD4BF] mr-2" /> Plataforma Segura e Confiável</div>
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
                      <Brain className="w-8 h-8 text-[#2DD4BF]" />
                      <span className="text-2xl font-bold text-white">NEXUS ORIGIN</span>
                  </div>
                  <p className="text-gray-500 leading-relaxed max-w-sm mb-6">
                      O manual definitivo para profissionais que desejam liderar a revolução da IA.
                  </p>
              </div>
              <div>
                  <h4 className="text-white font-bold mb-6">Links Úteis</h4>
                  <ul className="space-y-3 text-gray-500">
                      <li><a href="#" className="hover:text-[#2DD4BF] transition-colors">Política de Privacidade</a></li>
                      <li><a href="#" className="hover:text-[#2DD4BF] transition-colors">Suporte</a></li>
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
