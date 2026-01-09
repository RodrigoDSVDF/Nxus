
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

// --- IMAGENS BENTO GRID ---
import produtividadeImg from './assets/produtividade.jpg'
import servicosIaImg from './assets/servicos-ia.jpg'
import xadrezImg from './assets/xadrez-estrategia.jpg'
import promptImg from './assets/engenharia_prompt.png'

// --- IMAGENS PROVA SOCIAL ---
import socialWoman2 from './assets/femele_social02.png'
import socialWoman1 from './assets/femele_social.png'
import socialMan from './assets/masculino_social.png'

// --- CONFIGURAÇÕES GERAIS ---
const CHECKOUT_LINK = "https://nexus-beta.streamlit.app/"
const PIXEL_ID = "640277028566260"

// --- DADOS ESTRUTURADOS ---
const bentoFeatures = [
  {
    colSpan: "md:col-span-2",
    bgImage: xadrezImg,
    icon: Brain, title: "O Cérebro Digital",
    desc: "Não aprenda ferramentas. Acesse as melhores e aprenda a navegar entre elas de forma otimizada."
  },
  {
    colSpan: "md:col-span-1",
    bgImage: servicosIaImg,
    icon: Zap, title: "Velocidade de Acesso",
    desc: "Automatize 80% do seu trabalho operacional e foque apenas no estratégico, multiplicando sua produtividade e resultados."
  },
  {
    colSpan: "md:col-span-1",
    bgImage: promptImg,
    icon: Terminal, title: "Engenharia de Contexto",
    desc: "A nova linguagem de programação. Fale a língua da máquina fluentemente para obter resultados de alta precisão."
  },
  {
    colSpan: "md:col-span-2",
    bgImage: produtividadeImg,
    icon: Target, title: "Vantagem Competitiva",
    desc: "Enquanto outros lutam com o básico, você estará implementando estratégias de nível sênior e dominando o mercado."
  },
]

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
]

const stackItems = [
  { icon: Layers, title: "O Nexus Manual (E-book Premium)", value: "R$ 197" },
  { icon: Cpu, title: "Banco de Prompts 'Copy & Paste' de Alta Conversão", value: "R$ 147" },
  { icon: Network, title: "Blueprint: Implementação de IA em Negócios", value: "R$ 297" },
  { icon: Shield, title: "Acesso Vitalício + Atualizações Mensais", value: "Inestimável" },
]

const faqItems = [
  { q: "Preciso saber programar para usar o Nexus?", a: "Absolutamente não. O Nexus foi desenhado para profissionais de qualquer área. Focamos na lógica e estratégia, não em código." },
  { q: "A IA muda toda semana, o material não vai ficar obsoleto?", a: "Essa é a diferença do Nexus. Focamos nos 'princípios imutáveis' da IA. Além disso, você tem atualizações vitalícias garantidas." },
  { q: "Em quanto tempo vejo resultados?", a: "Nossos alunos relatam ganho de produtividade nas primeiras 24 horas após aplicarem os primeiros feedbacks do manual." },
  { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se achar que o conteúdo não é para você, devolvemos 100% do seu investimento, sem perguntas." },
]

// --- HOOKS E FUNÇÕES AUXILIARES ---
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
    window.fbq('track', 'InitiateCheckout')
  }
}

// --- COMPONENTE DE NAVEGAÇÃO GLOBAL ---
const NAV_ITEMS = [
  { title: "INÍCIO", icon: Brain, id: "hero" },
  { title: "SOLUÇÃO", icon: Layers, id: "bento" },
  { title: "OFERTA", icon: Zap, id: "stack" },
  { title: "GARANTIA", icon: Shield, id: "offer" },
]

function Header() {
  const handleScroll = (id) => {
    const targetElement = document.getElementById(id)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }

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
  )
}

// --- COMPONENTE PRINCIPAL ---
function App() {
  const [heroRef, heroVisible] = useScrollAnimation()
  const [painRef, painVisible] = useScrollAnimation(0.2)
  const [bentoRef, bentoVisible] = useScrollAnimation(0.1)
  const [stackRef, stackVisible] = useScrollAnimation(0.1)
  const [reviewsRef, reviewsVisible] = useScrollAnimation(0.1)
  const [offerRef, offerVisible] = useScrollAnimation(0.1)

  const [activeFeature, setActiveFeature] = useState(bentoFeatures[0])

  const AZUL_VERDE = '#22D3EE'
  const VERDE_AZUL = '#2DD4BF'
  const AZUL_ESCURO = '#0EA5E9'
  const ORANGE = '#FF6B35'
  const CTA = '#FF4F1F'
  const BG = '#1A2A3A'

  useEffect(() => {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js')

    window.fbq('init', PIXEL_ID)
    window.fbq('track', 'PageView')
  }, [])

  return (
    <div className="min-h-screen bg-[--color-nexus-bg] font-['Poppins',sans-serif] overflow-x-hidden text-slate-100 selection:bg-[--color-nexus-cta] selection:text-white">

      {/* Pixel Fallback */}
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt="" />
      </noscript>

      <Header />

      {/* --- BACKGROUND DINÂMICO (AJUSTADO PARA DESTACAR IMAGEM DO HERO) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[--color-nexus-teal]/8 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[--color-nexus-orange]/8 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
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

      {/* 2. HERO SECTION - COM IMAGEM MAIS VISÍVEL E TOM ESCURO */}
      <section id="hero" ref={heroRef} className="relative z-10 pt-20 pb-32 px-4 overflow-hidden bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/50 to-[#0A0A0A]/80">
        <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <div className="inline-flex items-center relative mb-8 group cursor-default animate-fade-in">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#22D3EE] to-[#2DD4BF] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative px-6 py-2 bg-[#0A0A0A] border border-[#22D3EE]/30 rounded-full flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22D3EE]"></span>
              </span>
              <span className="text-sm font-semibold text-[#22D3EE] tracking-wide shadow-cyan-500/50">
                Sistema Operacional de Alta Performance com IA
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8 tracking-tight animate-slide-up">
            Domine a IA Antes Que <br />
            <span className="text-gradient-blue-green animate-gradient-text">
              Ela Substitua Você.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up-delay">
            Pare de correr atrás de ferramentas novas toda semana. Descubra a <span className="text-[#2DD4BF] font-semibold">ferramenta que sempre te deixará totalmente atualizado com as melhores IAs do mercado.</span>
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
                QUERO ACESSO VITALÍCIO AGORA
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Button>
            </a>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center"><Shield className="w-4 h-4 text-[#22D3EE] mr-2" /> Compra Segura</span>
              <span className="flex items-center"><Rocket className="w-4 h-4 text-[#22D3EE] mr-2" /> Acesso Imediato</span>
            </div>
          </div>
        </div>

        {/* IMAGEM DE FUNDO DO HERO - MAIS VISÍVEL E MAIOR */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[90rem] pointer-events-none -z-10">
          <div className="relative w-full h-full">
            {/* Camada de tom escuro sutil para não ofuscar a imagem */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/20 to-[#0A0A0A]/40 mix-blend-multiply"></div>
            
            {/* Camada de cor para realçar a imagem */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#22D3EE]/10 via-[#2DD4BF]/10 to-transparent mix-blend-overlay opacity-60"></div>
            
            {/* Imagem principal ampliada e mais visível */}
            <img 
              src={brainNetworkImg} 
              alt="Imagem abstrata de rede neural" 
              className="w-full h-auto scale-110 contrast-125 brightness-105 saturate-110 opacity-70"
              style={{
                filter: 'contrast(1.25) brightness(1.05) saturate(1.1)',
                maskImage: 'radial-gradient(circle at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 85%)',
                WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 85%)'
              }}
            />
            
            {/* Efeito de brilho sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/15 via-transparent to-[#2DD4BF]/15 mix-blend-soft-light"></div>
            
            {/* Gradiente escuro nas bordas para contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-[#0A0A0A]/70"></div>
          </div>
        </div>
      </section>

      {/* 3. PROVA SOCIAL */}
      <div className="relative z-10 border-y border-[#333] bg-[#0A0A0A]/80 backdrop-blur-md py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-widest">Método utilizado por profissionais de:</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-bold font-mono text-white">TECH<span className="text-[#22D3EE]">CORP</span></div>
            <div className="text-2xl font-bold font-sans italic text-white">InnovateLabs</div>
            <div className="text-xl font-bold uppercase tracking-tighter text-white">Future<span className="text-[#FF6B35] font-extrabold">/</span>Work</div>
            <div className="text-2xl font-semibold text-white">Global<span className="font-light text-[#22D3EE]">Systems</span></div>
          </div>
        </div>
      </div>

      {/* 4. A DOR */}
      <section id="pain" ref={painRef} className={`relative z-10 py-32 px-4 transition-all duration-1000 delay-200 ${painVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/20 to-[#2DD4BF]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <img src={fundo02} alt="Caos Digital" className="relative rounded-3xl shadow-2xl border border-[#333] z-10 rotate-3 group-hover:rotate-0 transition-all duration-700 grayscale hover:grayscale-0" />
            </div>
            <div className="md:col-span-3 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                A "Corrida dos Ratos" Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#2DD4BF]">Está Te Deixando Para Trás.</span>
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

      {/* 5. BENTO GRID */}
      <section id="bento" ref={bentoRef} className="relative z-10 pt-32 pb-16 px-4 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">O Ecossistema <span className="text-[#22D3EE]">Nexus Manual</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Não é um curso. É um sistema operacional mental para você navegar e liderar na era da Inteligência Artificial.
            </p>
            <p className="md:hidden mt-8 text-lg font-bold text-[#FF6B35]">
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
                    ? 'border-2 border-[#FF4F1F] shadow-xl shadow-[#FF4F1F]/20 scale-[1.03]'
                    : 'border border-[#1C2A35] hover:border-[#22D3EE]/50'
                  }
                        `}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-r ${activeFeature?.title === item.title ? 'from-[#FF4F1F]/20 to-[#FF6B35]/20' : 'from-[#22D3EE]/20 to-[#2DD4BF]/10'} blur-xl`}></div>
                </div>

                {item.bgImage && (
                  <div className="absolute inset-0 z-0">
                    <img src={item.bgImage} alt={`Imagem de ${item.title}`} className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14222E] via-[#14222E]/80 to-transparent"></div>
                  </div>
                )}

                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <div className={`w-14 h-14 bg-[#0F161E]/80 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 transition-all duration-300
                                ${activeFeature?.title === item.title ? 'bg-[#FF4F1F]/20 border border-[#FF4F1F]' : 'bg-[#1A2A3A] border border-[#22D3EE]/30 group-hover:scale-110'}
                            `}>
                    <item.icon className={`w-7 h-7 ${activeFeature?.title === item.title ? 'text-[#FF4F1F]' : 'text-[#22D3EE]'}`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 transition-colors ${activeFeature?.title === item.title ? 'text-[#FF4F1F]' : 'text-white group-hover:text-[#22D3EE]'}`}>{item.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>

                  {activeFeature?.title === item.title && (
                    <a
                      href={CHECKOUT_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleTrackCheckout}
                    >
                      <span className="flex items-center text-sm font-semibold text-[#FF4F1F] mt-4 hover:underline">
                        Explorar Detalhes <ChevronRight className="w-4 h-4 ml-1" />
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
            background: `linear-gradient(90deg, ${AZUL_VERDE} 0%, ${BG} 50%, ${VERDE_AZUL} 100%)`,
            border: 'none',
            opacity: 0.8
          }}
        >
          <div className="horizontal-banner">
            <div className="banner-content" style={{ animationDuration: '10s' }}>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Terminal className="w-5 h-5 mr-3 text-[#0EA5E9]" /> ENGENHARIA DE CONTEXTO
              </span>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Layers className="w-5 h-5 mr-3 text-[#0EA5E9]" /> ECOSSISTEMA DE PRODUTIVIDADE
              </span>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Brain className="w-5 h-5 mr-3 text-[#0EA5E9]" /> APRENDIZADO ACELERADO
              </span>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Cpu className="w-5 h-5 mr-3 text-[#0EA5E9]" /> PRODUTIVIDADE ESTRATÉGICA
              </span>

              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Terminal className="w-5 h-5 mr-3 text-[#0EA5E9]" /> ENGENHARIA DE CONTEXTO
              </span>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Layers className="w-5 h-5 mr-3 text-[#0EA5E9]" /> ECOSSISTEMA DE I.A
              </span>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Brain className="w-5 h-5 mr-3 text-[#0EA5E9]" /> APRENDIZADO ACELERADO
              </span>
              <span className="banner-item font-mono tracking-widest flex items-center text-lg text-white">
                <Cpu className="w-5 h-5 mr-3 text-[#0EA5E9]" /> PRODUTIVIDADE ESTRATÉGICA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 6. O STACK */}
      <section id="stack" ref={stackRef} className="relative z-10 py-32 px-4">
        <div className="max-w-5xl mx-auto bg-[#1A2A3A]/80 backdrop-blur-xl border border-[#333] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#22D3EE]/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF6B35]/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className={`relative z-10 transition-all duration-1000 ${stackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O Arsenal Completo da Sua <span className="text-[#FF6B35]">Nova Carreira</span></h2>

            <div className="space-y-6">
              {stackItems.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center justify-between p-6 bg-[#0A0A0A]/80 border border-[#333] rounded-2xl hover:border-[#22D3EE]/50 transition-colors duration-300 group">
                  <div className="flex items-center gap-6 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-[#22D3EE]/10 border border-[#22D3EE]/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-[#22D3EE]" />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <div className="px-6 py-2 bg-[#1A2A3A] rounded-full text-[#FF6B35] font-mono font-bold border border-[#FF6B35]/20">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-xl text-gray-400 mb-6">Valor Total do Stack: <span className="line-through">R$ 641,00</span></p>
              <p className="text-3xl md:text-5xl font-extrabold text-white mb-8">
                Hoje por apenas: <span className="text-[#22D3EE]">R$ 19,90</span>
              </p>
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

      {/* 7. TESTEMUNHOS */}
      <section id="reviews" ref={reviewsRef} className="relative z-10 py-24 px-4 bg-[#0A0A0A] border-y border-[#333]">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${reviewsVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O Que Estão Falando do <span className="text-[#22D3EE]">Nexus Manual</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <div key={i} className="nexus-card p-8 rounded-3xl relative flex flex-col justify-between">
                <div>
                  <div className="absolute -top-4 left-8 text-[#FF6B35] text-6xl opacity-20">"</div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-[#FF6B35] fill-current" />)}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{item.text}"</p>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#22D3EE]">
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

      {/* 8. FAQ */}
      <section id="faq" className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-[#111]/50 border border-[#333] rounded-2xl overflow-hidden hover:border-[#22D3EE]/50 transition-colors">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-white">{item.q}</h3>
                    <ChevronRight className="w-5 h-5 text-[#22D3EE] transform group-open:rotate-90 transition-transform" />
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
      <section id="offer" ref={offerRef} className="relative z-10 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#FF4F1F]/10 to-transparent pointer-events-none"></div>

        <div className={`max-w-4xl mx-auto text-center relative z-20 transition-all duration-1000 ${offerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="mb-12">
            <Shield className="w-20 h-20 text-[#22D3EE] mx-auto mb-6 animate-pulse-slow" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Garantia Blindada de 7 Dias</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              O risco é todo nosso. Acesse o material, aplique os blueprints. Se você não sentir que isso vale 10x o que você pagou, envie um único e-mail e devolvemos 100% do seu dinheiro.
            </p>
          </div>

          <div className="bg-[#1A2A3A] border-2 border-[#FF4F1F] rounded-[3rem] p-12 shadow-2xl shadow-[#FF4F1F]/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF4F1F] to-[#FF6B35] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-2">Última Chance para Garantir o Preço de Lançamento</h3>
              <p className="text-[#FF6B35] font-medium mb-8 uppercase tracking-wider">Acesso Vitalício + Bônus Exclusivos</p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                <img src={produtoImg} alt="Pack Nexus" className="w-64 rounded-xl shadow-2xl border border-[#333] rotate-[-5deg] group-hover:rotate-0 transition-all duration-500" />
                <div className="text-left">
                  <div className="text-6xl font-extrabold text-white mb-2">R$ 19,90<span className="text-2xl text-gray-400">,00</span></div>
                  <p className="text-gray-400 mb-4">Pagamento único. Sem mensalidades.</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[#22D3EE] mr-2" /> Acesso Imediato via E-mail</div>
                    <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[#22D3EE] mr-2" /> Plataforma Segura e Confiável</div>
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
              <Brain className="w-8 h-8 text-[#22D3EE]" />
              <span className="text-2xl font-bold text-white">NEXUS MANUAL</span>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-sm mb-6">
              O manual definitivo para profissionais que desejam liderar a revolução da IA.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Links Úteis</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-[#22D3EE] transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-[#22D3EE] transition-colors">Suporte</a></li>
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
        </div>
      </footer>

    </div>
  )
}

export default App
