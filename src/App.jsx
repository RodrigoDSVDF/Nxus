import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import {
  ArrowRight, Zap, Target, Key, Rocket, Brain,
  CheckCircle, AlertTriangle, Shield, ChevronRight,
  Terminal, Cpu, Network, Layers, Check, Sparkles, Star,
  Instagram, X, Play, Volume2, VolumeX, Download
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

// Link do Checkout Centralizado - ATUALIZADO
const CHECKOUT_LINK = "https://ecossistema-beta.streamlit.app";

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

// Novos dados para funcionalidades adicionais
const bonusFeatures = [
  {
    icon: Download,
    title: "Kit de Ferramentas IA",
    description: "Acesso a templates, prompts prontos e ferramentas exclusivas para acelerar seu trabalho."
  },
  {
    icon: Zap,
    title: "Atualizações Vitalícias",
    description: "Conteúdo sempre atualizado com as mais novas técnicas e ferramentas de IA."
  },
  {
    icon: Shield,
    title: "Comunidade Privada",
    description: "Acesso a grupo exclusivo com outros profissionais e suporte direto."
  }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [countdown, setCountdown] = useState({ hours: 2, minutes: 0, seconds: 0 })
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const observerRef = useRef(null)

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          clearInterval(timer)
          return { hours: 0, minutes: 0, seconds: 0 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer para animações
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.observe-me')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleTrackCheckout = () => {
    // Implementação do tracking de conversão
    console.log('Checkout click tracked')
    // Aqui você pode adicionar Google Analytics, Facebook Pixel, etc.
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      // Aqui você pode integrar com sua API de email marketing
      console.log('Email cadastrado:', email)
      setEmail('')
    }
  }

  const handleVideoPlay = () => {
    setIsVideoModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div className="relative max-w-4xl w-full mx-4">
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-[--color-nexus-orange] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video 
                className="w-full h-full"
                controls
                autoPlay
                muted={isMuted}
                poster={produtoImg}
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className="flex items-center gap-2 text-white hover:text-[--color-nexus-orange] transition-colors"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                {isMuted ? 'Ativar áudio' : 'Desativar áudio'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#111]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <Brain className="w-8 h-8 text-[--color-nexus-teal]" />
              <span className="text-2xl font-bold text-white">NEXUS MANUAL</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#ecossistema" className="text-gray-400 hover:text-white transition-colors">Ecossistema</a>
              <a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">Benefícios</a>
              <a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a>
              <a href="#bonus" className="text-gray-400 hover:text-white transition-colors">Bônus</a>
              <a href="#oferta" className="text-gray-400 hover:text-white transition-colors">Oferta</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white my-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#111]">
              <nav className="flex flex-col gap-4">
                <a href="#ecossistema" className="text-gray-400 hover:text-white transition-colors py-2">Ecossistema</a>
                <a href="#beneficios" className="text-gray-400 hover:text-white transition-colors py-2">Benefícios</a>
                <a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors py-2">Depoimentos</a>
                <a href="#bonus" className="text-gray-400 hover:text-white transition-colors py-2">Bônus</a>
                <a href="#oferta" className="text-gray-400 hover:text-white transition-colors py-2">Oferta</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${fundo02})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#111]/80 border border-[#222] rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-[--color-nexus-orange]" />
            <span className="text-sm text-gray-300">O Manual Definitivo da Era da I.A.</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight observe-me">
            Domine a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-teal]">
              I.A. em 2025
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed observe-me">
            Vá do básico ao avançado com o método que ensina não apenas ferramentas, mas os 
            <span className="text-[--color-nexus-orange] font-semibold"> princípios cognitivos fundamentais</span> 
            {' '}da inteligência artificial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 observe-me">
            <a 
              href={CHECKOUT_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleTrackCheckout}
            >
              <Button className="bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-teal] text-white px-8 py-6 text-lg font-bold rounded-2xl hover:scale-105 transition-transform flex items-center gap-2">
                QUERO ME TORNAR UM EXPERT
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            
            <button 
              onClick={handleVideoPlay}
              className="flex items-center gap-2 border-2 border-gray-600 text-white px-8 py-6 text-lg font-bold rounded-2xl hover:border-white transition-colors"
            >
              <Play className="w-5 h-5" />
              VER DEMONSTRAÇÃO
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto observe-me">
            <div className="text-center">
              <div className="text-2xl font-bold text-[--color-nexus-orange]">10x</div>
              <div className="text-sm text-gray-400">Mais Produtivo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[--color-nexus-orange]">80%</div>
              <div className="text-sm text-gray-400">Tempo Economizado</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[--color-nexus-orange]">R$ 47</div>
              <div className="text-sm text-gray-400">Investimento</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[--color-nexus-orange]">100%</div>
              <div className="text-sm text-gray-400">Online</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-gray-400 rotate-90" />
        </div>
      </section>

      {/* BENTO GRID SECTION */}
      <section id="beneficios" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 observe-me">
            Por Que Este Manual é
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-teal]">
              Diferente de Tudo?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto observe-me">
            Não é mais um curso de ferramentas. É uma mudança de mentalidade que vai te posicionar 
            anos à frente da concorrência.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bentoFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className={`${feature.colSpan} relative group rounded-3xl overflow-hidden min-h-[300px] bg-cover bg-center observe-me`}
                style={{ backgroundImage: `url(${feature.bgImage})` }}
              >
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <IconComponent className="w-12 h-12 text-[--color-nexus-orange] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ECOSSISTEMA NEXUS SECTION */}
      <section id="ecossistema" className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 observe-me">
              O Ecossistema
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-teal]">
                Nexus Completo
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto observe-me">
              Um sistema integrado que vai te levar do zero ao domínio absoluto da inteligência artificial.
            </p>
          </div>

          <div className="space-y-20">
            {ecosystemFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 observe-me`}
              >
                <div className="flex-1">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="rounded-2xl shadow-2xl w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-[#222] rounded-full px-4 py-2 mb-4">
                    <Target className="w-4 h-4 text-[--color-nexus-orange]" />
                    <span className="text-sm text-gray-300">{feature.tagline}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">{feature.title}</h3>
                  <p className="text-lg text-gray-400 leading-relaxed mb-6">{feature.description}</p>
                  <div className="flex items-center gap-2 text-[--color-nexus-teal]">
                    <span className="font-semibold">Descubra como</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: BÔNUS EXCLUSIVOS */}
      <section id="bonus" className="py-20 px-4 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 observe-me">
              Bônus
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-teal]">
                Exclusivos
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto observe-me">
              Além do conteúdo principal, você recebe estes bônus especiais para potencializar ainda mais seus resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bonusFeatures.map((bonus, index) => {
              const IconComponent = bonus.icon
              return (
                <div key={index} className="bg-[#111] rounded-2xl p-8 border border-[#222] hover:border-[#333] transition-all duration-300 hover:scale-105 observe-me">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-[--color-nexus-orange]/20 rounded-xl">
                      <IconComponent className="w-8 h-8 text-[--color-nexus-orange]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{bonus.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{bonus.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS SECTION */}
      <section id="depoimentos" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 observe-me">
              O Que Quem Já
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-teal]">
                Usa Está Falando
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto observe-me">
              Profissionais reais, resultados reais. Veja como o Nexus Manual está transformando carreiras.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#111] rounded-2xl p-8 border border-[#222] hover:border-[#333] transition-colors observe-me">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[--color-nexus-orange] text-[--color-nexus-orange]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTDOWN TIMER */}
      <section className="py-12 bg-gradient-to-r from-[--color-nexus-orange]/20 to-[--color-nexus-teal]/20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold text-white mb-4">Oferta expira em:</h3>
          <div className="flex justify-center gap-4 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold bg-[#111] rounded-lg px-4 py-2 min-w-[80px]">
                {String(countdown.hours).padStart(2, '0')}
              </div>
              <div className="text-sm mt-2 text-gray-300">Horas</div>
            </div>
            <div className="text-4xl font-bold self-center">:</div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-[#111] rounded-lg px-4 py-2 min-w-[80px]">
                {String(countdown.minutes).padStart(2, '0')}
              </div>
              <div className="text-sm mt-2 text-gray-300">Minutos</div>
            </div>
            <div className="text-4xl font-bold self-center">:</div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-[#111] rounded-lg px-4 py-2 min-w-[80px]">
                {String(countdown.seconds).padStart(2, '0')}
              </div>
              <div className="text-sm mt-2 text-gray-300">Segundos</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="py-16 bg-[#111]">
        <div className="max-w-2xl mx-auto text-center px-4">
          {isSubscribed ? (
            <div className="observe-me">
              <CheckCircle className="w-16 h-16 text-[--color-nexus-teal] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Inscrição Confirmada!</h3>
              <p className="text-gray-400">Obrigado por se inscrever. Em breve você receberá novidades exclusivas.</p>
            </div>
          ) : (
            <div className="observe-me">
              <h3 className="text-2xl font-bold text-white mb-4">Receba Conteúdo Exclusivo</h3>
              <p className="text-gray-400 mb-6">Inscreva-se para receber dicas de IA e atualizações do Nexus Manual.</p>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 bg-[#222] border border-[#333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[--color-nexus-orange] transition-colors"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-teal] text-white px-6 py-3 font-semibold rounded-lg hover:scale-105 transition-transform"
                >
                  Inscrever
                </Button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* OFERTA SECTION */}
      <section id="oferta" className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${neuralNetworkImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[--color-nexus-orange]/20 border border-[--color-nexus-orange]/30 rounded-full px-4 py-2 mb-4">
            <AlertTriangle className="w-4 h-4 text-[--color-nexus-orange]" />
            <span className="text-sm text-[--color-nexus-orange] font-medium">OFERTA POR TEMPO LIMITADO</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 observe-me">
            Invista no Seu
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-teal]">
              Futuro Digital
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto observe-me">
            Acesso imediato e vitalício a todo o ecossistema Nexus Manual por um investimento especial de lançamento.
          </p>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-2 observe-me">Última Chance para Garantir o Preço de Lançamento</h3>
            <p className="text-[--color-nexus-orange] font-medium mb-8 uppercase tracking-wider observe-me">Acesso Vitalício + Bônus Exclusivos</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 observe-me">
              <img src={produtoImg} alt="Pack Nexus" className="w-64 rounded-xl shadow-2xl border border-[#333] rotate-[-5deg] group-hover:rotate-0 transition-all duration-500" />
              <div className="text-left">
                <div className="text-6xl font-extrabold text-white mb-2">R$ 47<span className="text-2xl text-gray-400">,00</span></div>
                <p className="text-gray-400 mb-4">Pagamento único. Sem mensalidades.</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[--color-nexus-teal] mr-2" /> Acesso Imediato via E-mail</div>
                  <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[--color-nexus-teal] mr-2" /> Plataforma Segura e Confiável</div>
                  <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[--color-nexus-teal] mr-2" /> 7 Dias de Garantia</div>
                  <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[--color-nexus-teal] mr-2" /> Suporte Prioritário</div>
                </div>
              </div>
            </div>

            {/* CTA Oferta Final */}
            <a 
              href={CHECKOUT_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block max-w-2xl mx-auto observe-me"
              onClick={handleTrackCheckout}
            >
              <Button className="pulse-button w-full h-auto py-4 md:h-20 text-white font-extrabold text-sm md:text-2xl rounded-2xl flex items-center justify-center gap-2 md:gap-4 hover:scale-[1.02] transition-transform whitespace-normal text-center">
                QUERO COMEÇAR AGORA MESMO
                <ArrowRight className="w-5 h-5 md:w-8 md:h-8 flex-shrink-0" />
              </Button>
            </a>

            <p className="text-gray-500 text-sm mt-4 observe-me">Pagamento 100% seguro via criptografia SSL</p>
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
              <li><a href="#" className="hover:text-[--color-nexus-teal] transition-colors">Termos de Uso</a></li>
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
