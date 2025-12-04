import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import {
  ArrowRight, Zap, Target, Key, Rocket, Brain,
  CheckCircle, AlertTriangle, Shield, ChevronRight,
  Terminal, Cpu, Network, Layers, Check, Sparkles, Star,
  Instagram, X, Play, Volume2, VolumeX, Download,
  Lock, Unlock, User, Mail, Phone, CreditCard
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

// Chaves de acesso autorizadas
const AUTHORIZED_KEYS = [
  "NEXUS2025", "IAEXPERT47", "BRAINACCESS", "PREMIUM2025",
  "SYSTEM47", "AIREVOLUTION", "NEXUSMASTER", "ACCESS47"
];

// Chaves de administrador
const ADMIN_KEYS = ["ADMINNEXUS", "SUPERUSER47"];

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

// Sistema de acesso
const ACCESS_SYSTEM = {
  FREE_TRIAL: 'free_trial',
  BASIC_ACCESS: 'basic_access',
  PREMIUM_ACCESS: 'premium_access',
  ADMIN_ACCESS: 'admin_access'
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [countdown, setCountdown] = useState({ hours: 2, minutes: 0, seconds: 0 })
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [accessKey, setAccessKey] = useState('')
  const [userAccess, setUserAccess] = useState(ACCESS_SYSTEM.FREE_TRIAL)
  const [showAccessModal, setShowAccessModal] = useState(false)
  const [accessError, setAccessError] = useState('')
  const [accessSuccess, setAccessSuccess] = useState('')
  const [loginForm, setLoginForm] = useState({
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'pix'
  })
  const observerRef = useRef(null)

  // Verificar se já tem acesso salvo no localStorage
  useEffect(() => {
    const savedAccess = localStorage.getItem('nexus_access')
    const savedAccessLevel = localStorage.getItem('nexus_access_level')
    
    if (savedAccess === 'granted' && savedAccessLevel) {
      setUserAccess(savedAccessLevel)
    }
  }, [])

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

  const handleAccessSubmit = (e) => {
    e.preventDefault()
    setAccessError('')
    setAccessSuccess('')

    // Verificar chave de acesso
    const key = accessKey.trim().toUpperCase()
    
    if (ADMIN_KEYS.includes(key)) {
      setUserAccess(ACCESS_SYSTEM.ADMIN_ACCESS)
      localStorage.setItem('nexus_access', 'granted')
      localStorage.setItem('nexus_access_level', ACCESS_SYSTEM.ADMIN_ACCESS)
      setAccessSuccess('✅ Acesso de Administrador concedido!')
      setShowAccessModal(false)
    } else if (AUTHORIZED_KEYS.includes(key)) {
      setUserAccess(ACCESS_SYSTEM.PREMIUM_ACCESS)
      localStorage.setItem('nexus_access', 'granted')
      localStorage.setItem('nexus_access_level', ACCESS_SYSTEM.PREMIUM_ACCESS)
      setAccessSuccess('✅ Acesso Premium concedido!')
      setShowAccessModal(false)
    } else {
      setAccessError('❌ Chave de acesso inválida. Tente novamente.')
    }
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    // Aqui você integraria com seu backend de pagamento
    console.log('Dados do login:', loginForm)
    
    // Simular processamento de pagamento
    setTimeout(() => {
      setUserAccess(ACCESS_SYSTEM.PREMIUM_ACCESS)
      localStorage.setItem('nexus_access', 'granted')
      localStorage.setItem('nexus_access_level', ACCESS_SYSTEM.PREMIUM_ACCESS)
      setAccessSuccess('✅ Pagamento confirmado! Acesso Premium liberado.')
      setShowAccessModal(false)
    }, 2000)
  }

  const logout = () => {
    setUserAccess(ACCESS_SYSTEM.FREE_TRIAL)
    localStorage.removeItem('nexus_access')
    localStorage.removeItem('nexus_access_level')
    setAccessKey('')
  }

  // Renderizar conteúdo baseado no nível de acesso
  const renderContentByAccess = () => {
    switch(userAccess) {
      case ACCESS_SYSTEM.ADMIN_ACCESS:
        return renderAdminContent()
      case ACCESS_SYSTEM.PREMIUM_ACCESS:
        return renderPremiumContent()
      case ACCESS_SYSTEM.BASIC_ACCESS:
        return renderBasicContent()
      default:
        return renderFreeContent()
    }
  }

  const renderFreeContent = () => (
    <div className="premium-gate max-w-4xl mx-auto my-20">
      <div className="flex items-center gap-3 mb-8 justify-center">
        <Lock className="w-12 h-12 text-[--color-nexus-orange]" />
        <span className="text-3xl font-bold text-white">ÁREA RESTRITA</span>
      </div>
      
      <h2 className="text-4xl font-bold text-center mb-6 text-white">
        Acesso Exclusivo ao
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-teal]">
          Nexus Ecosystem
        </span>
      </h2>
      
      <p className="text-xl text-gray-300 text-center mb-8 max-w-2xl mx-auto">
        Este conteúdo está disponível apenas para membros premium. Escolha seu método de acesso:
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Método 1: Login com Chave */}
        <div className="bg-[#111]/50 p-8 rounded-2xl border border-[#333]">
          <div className="flex items-center gap-3 mb-6">
            <Key className="w-8 h-8 text-[--color-nexus-teal]" />
            <h3 className="text-2xl font-bold text-white">Acesso com Chave</h3>
          </div>
          <p className="text-gray-400 mb-6">Já possui uma chave de acesso? Insira abaixo:</p>
          
          <form onSubmit={handleAccessSubmit}>
            <div className="mb-4">
              <input
                type="text"
                value={accessKey}
                onChange={(e) => setAccessKey(e.target.value)}
                placeholder="Digite sua chave de acesso"
                className="w-full px-4 py-3 bg-[#222] border border-[#333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[--color-nexus-orange] transition-colors"
                required
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-teal] text-white py-3 font-semibold rounded-lg hover:scale-105 transition-transform"
            >
              VALIDAR CHAVE
            </Button>
          </form>

          {accessError && (
            <div className="mt-4 p-3 bg-red-900/30 border border-red-500 rounded-lg text-red-300">
              {accessError}
            </div>
          )}
        </div>

        {/* Método 2: Login Completo */}
        <div className="bg-[#111]/50 p-8 rounded-2xl border border-[#333]">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-8 h-8 text-[--color-nexus-orange]" />
            <h3 className="text-2xl font-bold text-white">Novo Acesso</h3>
          </div>
          <p className="text-gray-400 mb-6">Preencha seus dados para liberar o acesso:</p>
          
          <form onSubmit={handleLoginSubmit}>
            <div className="space-y-4 mb-6">
              <input
                type="text"
                value={loginForm.name}
                onChange={(e) => setLoginForm({...loginForm, name: e.target.value})}
                placeholder="Seu nome completo"
                className="w-full px-4 py-3 bg-[#222] border border-[#333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[--color-nexus-orange] transition-colors"
                required
              />
              
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                placeholder="Seu melhor e-mail"
                className="w-full px-4 py-3 bg-[#222] border border-[#333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[--color-nexus-orange] transition-colors"
                required
              />
              
              <input
                type="tel"
                value={loginForm.phone}
                onChange={(e) => setLoginForm({...loginForm, phone: e.target.value})}
                placeholder="Seu WhatsApp"
                className="w-full px-4 py-3 bg-[#222] border border-[#333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[--color-nexus-orange] transition-colors"
                required
              />
              
              <select
                value={loginForm.paymentMethod}
                onChange={(e) => setLoginForm({...loginForm, paymentMethod: e.target.value})}
                className="w-full px-4 py-3 bg-[#222] border border-[#333] rounded-lg text-white focus:outline-none focus:border-[--color-nexus-orange] transition-colors"
              >
                <option value="pix">PIX - R$ 47,00</option>
                <option value="credit">Cartão de Crédito</option>
                <option value="boleto">Boleto Bancário</option>
              </select>
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-teal] text-white py-3 font-semibold rounded-lg hover:scale-105 transition-transform"
            >
              LIBERAR ACESSO PREMIUM
            </Button>
          </form>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-400 mb-4">Problemas com acesso? Entre em contato:</p>
        <a href="mailto:suporte@nexusorigin.com" className="text-[--color-nexus-teal] hover:underline">
          suporte@nexusorigin.com
        </a>
      </div>
    </div>
  )

  const renderPremiumContent = () => (
    <>
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
            <span className="text-sm text-gray-300">ACESSO PREMIUM ATIVADO</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight observe-me">
            Bem-vindo ao
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-teal]">
              Nexus Ecosystem
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed observe-me">
            Seu acesso premium foi liberado! Explore todas as ferramentas e conteúdo exclusivo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 observe-me">
            <a 
              href={CHECKOUT_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleTrackCheckout}
            >
              <Button className="bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-teal] text-white px-8 py-6 text-lg font-bold rounded-2xl hover:scale-105 transition-transform flex items-center gap-2">
                ACESSAR PLATAFORMA COMPLETA
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            
            <button 
              onClick={handleVideoPlay}
              className="flex items-center gap-2 border-2 border-gray-600 text-white px-8 py-6 text-lg font-bold rounded-2xl hover:border-white transition-colors"
            >
              <Play className="w-5 h-5" />
              VER TOUR DA PLATAFORMA
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto observe-me">
            <div className="text-center">
              <div className="text-2xl font-bold text-[--color-nexus-orange]">100%</div>
              <div className="text-sm text-gray-400">Conteúdo Liberado</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[--color-nexus-orange]">24/7</div>
              <div className="text-sm text-gray-400">Suporte Premium</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[--color-nexus-orange]">∞</div>
              <div className="text-sm text-gray-400">Acesso Vitalício</div>
            </div>
            <div className="text-center">
              <Unlock className="w-8 h-8 text-[--color-nexus-teal] mx-auto" />
              <div className="text-sm text-gray-400">Premium Active</div>
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
            Plataforma
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-teal]">
              Nexus Ecosystem
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto observe-me">
            Seu centro de comando completo para domínio da Inteligência Artificial.
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
              Módulos
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-teal]">
                Premium Disponíveis
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto observe-me">
              Todos os módulos abaixo estão completamente liberados para seu acesso.
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
                    <Unlock className="w-4 h-4 text-[--color-nexus-teal]" />
                    <span className="text-sm text-gray-300">ACESSO LIBERADO</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">{feature.title}</h3>
                  <p className="text-lg text-gray-400 leading-relaxed mb-6">{feature.description}</p>
                  <div className="flex items-center gap-2 text-[--color-nexus-teal]">
                    <span className="font-semibold">Acessar Módulo</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREA DA PLATAFORMA */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 observe-me">
              Acesso Direto à
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-teal]">
                Plataforma Nexus
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#111] p-8 rounded-2xl border border-[#222] observe-me">
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="w-8 h-8 text-[--color-nexus-orange]" />
                <h3 className="text-2xl font-bold text-white">Plataforma Web</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Acesse a plataforma completa com todas as ferramentas de IA, análise de dados e sistemas preditivos.
              </p>
              <a 
                href={CHECKOUT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-teal] text-white py-4 font-bold text-lg rounded-xl">
                  ACESSAR PLATAFORMA WEB
                </Button>
              </a>
            </div>

            <div className="bg-[#111] p-8 rounded-2xl border border-[#222] observe-me">
              <div className="flex items-center gap-3 mb-6">
                <Download className="w-8 h-8 text-[--color-nexus-teal]" />
                <h3 className="text-2xl font-bold text-white">Materiais Exclusivos</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Baixe todos os materiais premium: templates, prompts, guias avançados e ferramentas exclusivas.
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-[#222] text-white py-3 hover:bg-[#333]">
                  📥 Baixar Kit de Ferramentas
                </Button>
                <Button className="w-full bg-[#222] text-white py-3 hover:bg-[#333]">
                  📚 Baixar Guias Avançados
                </Button>
                <Button className="w-full bg-[#222] text-white py-3 hover:bg-[#333]">
                  🎯 Baixar Templates Premium
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )

  const renderAdminContent = () => (
    <div className="min-h-screen bg-[#0A0A0A] pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-8 h-8 text-[--color-nexus-teal]" />
              <span className="text-2xl font-bold text-white">PAINEL ADMINISTRATIVO</span>
            </div>
            <p className="text-gray-400">Controle total do sistema Nexus Ecosystem</p>
          </div>
          
          <Button 
            onClick={logout}
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-500/10"
          >
            Sair do Admin
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#111] p-6 rounded-xl">
            <div className="text-3xl font-bold text-white mb-2">47</div>
            <div className="text-gray-400">Usuários Ativos</div>
          </div>
          <div className="bg-[#111] p-6 rounded-xl">
            <div className="text-3xl font-bold text-white mb-2">R$ 2.209</div>
            <div className="text-gray-400">Receita Total</div>
          </div>
          <div className="bg-[#111] p-6 rounded-xl">
            <div className="text-3xl font-bold text-white mb-2">8</div>
            <div className="text-gray-400">Chaves Disponíveis</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#111] p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4">Chaves de Acesso</h3>
            <div className="space-y-2">
              {AUTHORIZED_KEYS.map((key, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-[#222] rounded-lg">
                  <code className="text-[--color-nexus-teal] font-mono">{key}</code>
                  <span className="text-green-500 text-sm">Ativa</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#111] p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4">Gerar Nova Chave</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nome do usuário"
                className="w-full px-4 py-3 bg-[#222] border border-[#333] rounded-lg text-white"
              />
              <input
                type="email"
                placeholder="E-mail do usuário"
                className="w-full px-4 py-3 bg-[#222] border border-[#333] rounded-lg text-white"
              />
              <Button className="w-full bg-gradient-to-r from-[--color-nexus-orange] to-[--color-nexus-teal]">
                Gerar Chave de Acesso
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

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
              <span className="text-2xl font-bold text-white">NEXUS ECOSYSTEM</span>
            </div>

            {/* Status de Acesso */}
            <div className="flex items-center gap-4">
              {userAccess === ACCESS_SYSTEM.PREMIUM_ACCESS && (
                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500 rounded-full">
                  <Unlock className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-500">PREMIUM</span>
                </div>
              )}
              
              {userAccess === ACCESS_SYSTEM.ADMIN_ACCESS && (
                <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-500 rounded-full">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-blue-500">ADMIN</span>
                </div>
              )}

              {userAccess !== ACCESS_SYSTEM.FREE_TRIAL && (
                <Button 
                  onClick={logout}
                  variant="outline" 
                  size="sm"
                  className="border-gray-600 hover:border-red-500"
                >
                  Sair
                </Button>
              )}

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
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#111]">
              <nav className="flex flex-col gap-4">
                {userAccess === ACCESS_SYSTEM.FREE_TRIAL ? (
                  <>
                    <button 
                      onClick={() => setShowAccessModal(true)}
                      className="text-[--color-nexus-orange] font-semibold py-2"
                    >
                      🔓 Acessar Plataforma
                    </button>
                  </>
                ) : (
                  <>
                    <a href="#ecossistema" className="text-gray-400 hover:text-white transition-colors py-2">Módulos</a>
                    <a href="#beneficios" className="text-gray-400 hover:text-white transition-colors py-2">Ferramentas</a>
                    <a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors py-2">Comunidade</a>
                  </>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Mensagem de Sucesso */}
      {accessSuccess && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-500/20 border border-green-500 text-green-300 px-6 py-3 rounded-lg shadow-lg animate-fade-in">
            {accessSuccess}
          </div>
        </div>
      )}

      {/* Conteúdo Principal Baseado no Nível de Acesso */}
      {renderContentByAccess()}

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] pt-24 pb-12 px-4 border-t border-[#111] relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-8 h-8 text-[--color-nexus-teal]" />
              <span className="text-2xl font-bold text-white">NEXUS ECOSYSTEM</span>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-sm mb-6">
              Plataforma premium para domínio da Inteligência Artificial.
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
            &copy; 2025 Nexus Ecosystem. Todos os direitos reservados. Acesso restrito.
          </p>
          {userAccess !== ACCESS_SYSTEM.FREE_TRIAL && (
            <p className="text-green-500 text-sm">
              Status: {userAccess === ACCESS_SYSTEM.PREMIUM_ACCESS ? 'Premium Ativo' : 'Admin Ativo'}
            </p>
          )}
        </div>
      </footer>
    </div>
  )
}

export default App
