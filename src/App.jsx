import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import {
  ArrowRight, Zap, Target, Key, Rocket, Brain,
  CheckCircle, AlertTriangle, Shield, ChevronRight,
  Terminal, Cpu, Network, Layers, Check, Sparkles, Star,
  Instagram
} from 'lucide-react'
import './App.css' 

// --- IMPORTAÇÃO DE IMAGENS ---
import brainNetworkImg from './assets/1000393266.jpg'
import neuralNetworkImg from './assets/1000393264.jpg' 
import laptopNeuralImg from './assets/1000393263.jpg'
import brainAIImg from './assets/1000393262.jpg'
import produtoImg from './assets/produto.jpg'
import fundo02 from './assets/fundo02.jpg'

// --- NOVAS IMAGENS DO ECOSSISTEMA ---
import ecossistemaNexusImg from './assets/ecossistema-nexus.png'
import engenhariaContextoImg from './assets/engenharia-contexto.png'
import segundoCerebroImg from './assets/segundo-cerebro.png'
import mapaMentalImg from './assets/mapa-mental.png'
import simbioseImg from './assets/simbiose.png'

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

// --- DADOS ESTRUTURADOS ---

// Dados do Bento Grid
const bentoFeatures = [
  { 
    colSpan: "md:col-span-2",
    bgImage: xadrezImg,
    icon: Brain, title: "O Cérebro Digital", 
    desc: "Não aprenda ferramentas. Aprenda os fundamentos cognitivos da IA que nunca mudam, garantindo sua relevância no futuro." 
  },
  { 
    colSpan: "md:col-span-1",
    bgImage: servicosIaImg,
    icon: Zap, title: "Velocidade Warp", 
    desc: "Automatize 80% do seu trabalho operacional e foque apenas no estratégico, multiplicando sua produtividade e resultados." 
  },
  { 
    colSpan: "md:col-span-1",
    bgImage: promptImg,
    icon: Terminal, title: "Engenharia de Prompt", 
    desc: "A nova linguagem de programação. Fale a língua da máquina fluentemente para obter resultados de alta precisão." 
  },
  { 
    colSpan: "md:col-span-2",
    bgImage: produtividadeImg,
    icon: Target, title: "Vantagem Injusta", 
    desc: "Enquanto outros lutam com o básico, você estará implementando estratégias de nível sênior e dominando o mercado." 
  },
];

// NOVA SEÇÃO: ECOSSISTEMA NEXUS
const ecosystemFeatures = [
  {
    image: ecossistemaNexusImg,
    title: "Chega de Confusão. O Poder da I.A., Unificado.",
    description: "Você já perdeu horas buscando qual a melhor ferramenta de I.A. para cada tarefa? Esse tempo acabou. O Ecossistema Nexus é o centro de comando que integra as I.As mais poderosas do mercado em um único fluxo de trabalho intuitivo. Acesse o que há de melhor com um clique, sem dispersão.",
    tagline: "Da Overwhelm à Ação Direcionada."
  },
  {
    image: engenhariaContextoImg,
    title: "Pare de Dar 'Ordens'. Comece a Construir Diálogos.",
    description: "Prompt básico é coisa do passado. A Engenharia de Contexto é a metodologia que ensina você a arquitetar instruções complexas, fornecendo personalidade, objetivo e estrutura para a I.A. Seja o maestro e obtenha resultados absurdamente superiores.",
    tagline: "Domine a Linguagem da Nova Era."
  },
  {
    image: segundoCerebroImg,
    title: "Sua Mente Livre para Criar, Seu Segundo Cérebro para Organizar.",
    description: "Ideias brilhantes se perdem na bagunça? O caos mental trava seu potencial? Nosso sistema fornece a estrutura definitiva para capturar, conectar e revisar todo o seu conhecimento. Liberte sua criatividade enquanto temos a sua retaguarda organizacional.",
    tagline: "Clareza Mental é Produtividade Ilimitada."
  },
  {
    image: mapaMentalImg,
    title: "Acelere Seu Aprendizado em 10x. Visualize o Conhecimento.",
    description: "Entenda conceitos complexos em minutos, não em horas. Aprenda a usar a I.A. para gerar mapas mentais dinâmicos que conectam informações de forma lógica e visual. Essa é a chave para aprender mais rápido e reter conhecimento por muito mais tempo.",
    tagline: "Estruture Ideias. Expanda Sua Mente."
  },
  {
    image: simbioseImg,
    title: "Não Lute Contra a Máquina. Funda-Se a Ela.",
    description: "Este é o estágio final da evolução pessoal na era digital. A Simbiose homem-máquina não é ficção científica; é uma habilidade prática. Aumente suas capacidades cognitivas, tome decisões mais inteligentes e torne-se protagonista da sua trajetória, com a I.A. como sua parceira estratégica.",
    tagline: "Seja Inparável. Evolua para o Próximo Nível."
  }
];

// Dados dos Depoimentos
const testimonials = [
    {
        img: socialMan,
        name: "Carlos Mendes",
        role: "Desenvolvedor Senior",
        text: "O material é direto ao ponto. Em uma tarde eu já estava aplicando conceitos que economizaram horas da minha semana. O melhor investimento que fiz esse ano."
    },
    {
        img: socialWoman1,
        name: "Ana Paula S.",
        role: "Marketing Digital",
        text: "Eu tinha medo da IA substituir meu trabalho. O Nexus me ensinou a usar ela como minha 'estagiária' de luxo. A qualidade das minhas entregas subiu drasticamente."
    },
    {
        img: socialWoman2,
        name: "Juliana Costa",
        role: "Redatora & Copywriter",
        text: "O banco de prompts se pagou no primeiro projeto que fechei. Não é só teoria, é um sistema prático para quem quer ganhar dinheiro com agilidade."
    }
];

// Dados do Stack
const stackItems = [
    { icon: Layers, title: "O Nexus Manual (E-book Premium)", value: "R$ 197" },
    { icon: Cpu, title: "Banco de Prompts 'Copy & Paste' de Alta Conversão", value: "R$ 147" },
    { icon: Network, title: "Blueprint: Implementação de IA em Negócios", value: "R$ 297" },
    { icon: Shield, title: "Acesso Vitalício + Atualizações Mensais", value: "Inestimável" },
];

// Dados de FAQ
const faqItems = [
  { q: "Preciso saber programar para usar o Nexus?", a: "Absolutamente não. O Nexus foi desenhado para profissionais de qualquer área. Focamos na lógica e estratégia, não em código." },
  { q: "A IA muda toda semana, o material não vai ficar obsoleto?", a: "Essa é a diferença do Nexus. Focamos nos 'princípios imutáveis' da IA. Além disso, você tem atualizações vitalícias garantidas." },
  { q: "Em quanto tempo vejo resultados?", a: "Nossos alunos relatam ganho de produtividade nas primeiras 24 horas após aplicarem os primeiros blueprints do manual." },
  { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se achar que não é para você, devolvemos 100% do seu investimento, sem perguntas." },
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
    { title: "ECOSSISTEMA", icon: Network, id: "ecosystem" },
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
                <button onClick={() => handleScroll('hero')} className="flex items-center gap-2 cursor-pointer">
                    <Brain className="w-7 h-7 text-[#2DD4BF]" />
                    <span className="text-xl font-bold text-white">NEXUS MANUAL</span>
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
                
                {/* CTA Header com Pixel */}
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
  const [painRef, painVisible] = useScrollAnimation(0.2)
  const [ecosystemRef, ecosystemVisible] = useScrollAnimation(0.1)
  const [bentoRef, bentoVisible] = useScrollAnimation(0.1)
  const [stackRef, stackVisible] = useScrollAnimation(0.1)
  const [reviewsRef, reviewsVisible] = useScrollAnimation(0.1)
  const [offerRef, offerVisible] = useScrollAnimation(0.1)

  const [activeFeature, setActiveFeature] = useState(bentoFeatures[0]); 

  const TEAL = '#2DD4BF';
  const ORANGE = '#FF6B35';
  const CTA = '#FF4F1F';
  const BG = '#1A2A3A';

  return (
    <div className="min-h-screen bg-[--color-nexus-bg] font-['Poppins',sans-serif] overflow-x-hidden text-slate-100 selection:bg-[--color-nexus-cta] selection:text-white">
      
      <Header />
      
      {/* --- BACKGROUND DINÂMICO --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[--color-nexus-teal]/10 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[--color-nexus-orange]/10 rounded-full blur-[100px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
      </div>

      {/* 1. FAIXA DE URGÊNCIA */}
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
                  Sistema Operacional de Alta Performance com IA
               </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8 tracking-tight animate-slide-up">
            Domine a IA Antes Que <br />
            <span className="text-gradient-teal-orange animate-gradient-text">
              Ela Substitua Você.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up-delay">
            Pare de correr atrás de ferramentas novas toda semana. Descubra os <span className="text-[--color-nexus-teal] font-semibold">princípios imutáveis</span> da inteligência artificial que colocarão você no top 1% do mercado.
          </p>

          <div className="flex flex-col items-center gap-6 animate-scale-in">
            {/* CTA Hero com Pixel */}
            <a 
                href={CHECKOUT_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative inline-block"
                onClick={handleTrackCheckout}
            >
              <Button className="pulse-button relative w-full md:w-auto h-auto py-3 md:h-16 px-8 md:px-12 text-white font-bold text-sm md:text-xl rounded-xl flex items-center justify-center gap-3 whitespace-normal text-center">
                QUERO ACESSO VITALÍCIO AGORA
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
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

      {/* 3. PROVA SOCIAL */}
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

      {/* 4. NOVA SEÇÃO: ECOSSISTEMA NEXUS */}
      <section id="ecosystem" ref={ecosystemRef} className={`relative z-10 py-32 px-4 bg-[#0A0A0A] transition-all duration-1000 ${ecosystemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              O <span className="text-[--color-nexus-teal]">ECOSSISTEMA</span> COMPLETO
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Uma jornada transformadora que vai da confusão inicial até a maestria simbiótica com a IA
            </p>
          </div>

          <div className="space-y-32">
            {ecosystemFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                {/* Imagem */}
                <div className="flex-1">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full max-w-2xl rounded-2xl shadow-2xl border border-[#333] hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                
                {/* Texto */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-4xl font-black mb-6 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-full">
                    <Sparkles className="w-4 h-4 text-[--color-nexus-orange]" />
                    <span className="text-sm font-semibold text-[--color-nexus-teal]">
                      {feature.tagline}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. A DOR */}
      <section id="pain" ref={painRef} className={`relative z-10 py-32 px-4 transition-all duration-1000 delay-200 ${painVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
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

      {/* 6. BENTO GRID */}
      <section id="bento" ref={bentoRef} className="relative z-10 pt-32 pb-16 px-4 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">O Ecossistema <span className="text-[--color-nexus-teal]">Nexus Manual</span></h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Não é um curso. É um sistema operacional mental para você navegar e liderar na era da Inteligência Artificial.
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
                            
                            {/* CTA Bento Grid com Pixel */}
                            {activeFeature?.title === item.title && (
                                <a 
                                    href={CHECKOUT_LINK} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={handleTrackCheckout}
                                >
                                    <span className="flex items-center text-sm font-semibold text-[--color-nexus-cta] mt-4 hover:underline">
                                        Explorar Detalhes <ChevronRight className="w-4 h-4 ml-1"/>
                                    </span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
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
                <Terminal className="w-5 h-5 mr-3 text-[--color-nexus-orange]" /> ENGENHARIA DE CONTEXTO
              </span>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Layers className="w-5 h-5 mr-3 text-[--color-nexus-orange]" /> ECOSSISTEMA DE PRODUTIVIDADE
              </span>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Brain className="w-5 h-5 mr-3 text-[--color-nexus-orange]" /> APRENDIZADO ACELERADO
              </span>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Cpu className="w-5 h-5 mr-3 text-[--color-nexus-orange]" /> INTELIGÊNCIA ESTRATÉGICA
              </span>
              
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white"> 
                <Terminal className="w-5 h-5 mr-3 text-[--color-nexus-orange]" /> ENGENHARIA DE CONTEXTO
              </span>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Layers className="w-5 h-5 mr-3 text-[--color-nexus-orange]" /> ECOSSISTEMA DE PRODUTIVIDADE
              </span>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Brain className="w-5 h-5 mr-3 text-[--color-nexus-orange]" /> APRENDIZADO ACELERADO
              </span>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Cpu className="w-5 h-5 mr-3 text-[--color-nexus-orange]" /> INTELIGÊNCIA ESTRATÉGICA
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
                        Hoje por apenas: <span className="text-[--color-nexus-teal]">R$ 47,00</span>
                    </p>
                    {/* CTA Stack com Pixel e Botão Mobile Ajustado (CORREÇÃO DE TEXTO CORTADO) */}
                    <a 
                        href={CHECKOUT_LINK} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block w-full max-w-md"
                        onClick={handleTrackCheckout}
                    >
                        <Button className="pulse-button w-full h-auto py-3 md:h-16 text-white font-bold text-sm md:text-xl rounded-xl flex items-center justify-center gap-2 md:gap-3 whitespace-normal text-center">
                            GARANTIR MEU ARSENAL AGORA
                        </Button>
                    </a>
                </div>
            </div>
        </div>
      </section>

      {/* 8. TESTEMUNHOS */}
      <section id="reviews" ref={reviewsRef} className="relative z-10 py-24 px-4 bg-[#0A0A0A] border-y border-[#333]">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${reviewsVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O Que Estão Falando do <span className="text-[--color-nexus-teal]">Nexus Manual</span></h2>
            
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

      {/* 10. OFERTA FINAL */}
      <section id="offer" ref={offerRef} className="relative z-10 py-32 px-4 overflow-hidden">
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
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[--color-nexus-cta] to-[--color-nexus-orange] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
                
                <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-2">Última Chance para Garantir o Preço de Lançamento</h3>
                    <p className="text-[--color-nexus-orange] font-medium mb-8 uppercase tracking-wider">Acesso Vitalício + Bônus Exclusivos</p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                        <img src={produtoImg} alt="Pack Nexus" className="w-64 rounded-xl shadow-2xl border border-[#333] rotate-[-5deg] group-hover:rotate-0 transition-all duration-500" />
                        <div className="text-left">
                            <div className="text-6xl font-extrabold text-white mb-2">R$ 47<span className="text-2xl text-gray-400">,00</span></div>
                            <p className="text-gray-400 mb-4">Pagamento único. Sem mensalidades.</p>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[--color-nexus-teal] mr-2" /> Acesso Imediato via E-mail</div>
                                <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[--color-nexus-teal] mr-2" /> Plataforma Segura e Confiável</div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Oferta Final com Pixel e Botão Mobile Ajustado (CORREÇÃO DE TEXTO CORTADO) */}
                    <a 
                        href={CHECKOUT_LINK} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block max-w-2xl mx-auto"
                        onClick={handleTrackCheckout}
                    >
                        <Button className="pulse-button w-full h-auto py-4 md:h-20 text-white font-extrabold text-sm md:text-2xl rounded-2xl flex items-center justify-center gap-2 md:gap-4 hover:scale-[1.02] transition-transform whitespace-normal text-center">
                            QUERO COMEÇAR AGORA MESMO
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
