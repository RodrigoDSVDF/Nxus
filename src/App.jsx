import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import {
  ArrowRight, Zap, Target, Key, Rocket, Brain,
  CheckCircle, AlertTriangle, Shield, ChevronRight,
  Terminal, Cpu, Network, Layers, Check, Sparkles, Star,
  Instagram, Database, Lock
} from 'lucide-react'
import './App.css'

// --- IMPORTAÇÃO DE IMAGENS (MANTIDAS) ---
import brainNetworkImg from './assets/1000393266.jpg'
import neuralNetworkImg from './assets/1000393264.jpg'
import laptopNeuralImg from './assets/1000393263.jpg'
import brainAIImg from './assets/1000393262.jpg'
import produtoImg from './assets/produto.jpg'
import fundo02 from './assets/fundo02.jpg'

// --- IMAGENS BENTO GRID (MANTIDAS) ---
import produtividadeImg from './assets/produtividade.jpg'
import servicosIaImg from './assets/servicos-ia.jpg'
import xadrezImg from './assets/xadrez-estrategia.jpg'
import promptImg from './assets/engenharia_prompt.png'

// --- IMAGENS PROVA SOCIAL (MANTIDAS) ---
import socialWoman2 from './assets/femele_social02.png'
import socialWoman1 from './assets/femele_social.png'
import socialMan from './assets/masculino_social.png'

// --- CONFIGURAÇÕES GERAIS ---
const CHECKOUT_LINK = "https://nexus-beta.streamlit.app/"
const PIXEL_ID = "640277028566260"

// --- DADOS ESTRUTURADOS (NARRATIVA VIDA 3.0) ---
const bentoFeatures = [
  {
    colSpan: "md:col-span-2",
    bgImage: xadrezImg,
    icon: Brain, 
    title: "O Exocórtex Digital",
    desc: "A biologia é lenta. Instale uma segunda camada de inteligência. Não aprenda apenas a ferramenta, aprenda a pensar em simbiose com a máquina."
  },
  {
    colSpan: "md:col-span-1",
    bgImage: servicosIaImg,
    icon: Zap, 
    title: "Hipervelocidade",
    desc: "O que levava dias, agora leva minutos. Automatize o operacional e libere sua mente para a visão estratégica."
  },
  {
    colSpan: "md:col-span-1",
    bgImage: promptImg,
    icon: Terminal, 
    title: "Engenharia de Contexto",
    desc: "A IA é um gênio, mas precisa do comando certo. Domine a nova linguagem de programação: o idioma natural."
  },
  {
    colSpan: "md:col-span-2",
    bgImage: produtividadeImg,
    icon: Target, 
    title: "Vantagem Evolutiva",
    desc: "Enquanto o mercado tenta sobreviver à 'Vida 2.0', você estará operando no sistema 'Vida 3.0'. Lidere a fusão."
  },
]

const testimonials = [
  {
    img: socialMan,
    name: "Rodrigo V.",
    role: "Analista de Sistemas",
    text: "Eu achava que sabia usar IA. O Nexus me mostrou que eu estava usando uma Ferrari como se fosse um triciclo. A seção de Engenharia de Contexto mudou minha carreira."
  },
  {
    img: socialWoman1,
    name: "Ana P.",
    role: "Estrategista Digital",
    text: "Não é um curso, é um upgrade mental. A forma como o Nexus integra as ferramentas no fluxo de trabalho é algo que nunca vi antes."
  },
  {
    img: socialWoman2,
    name: "Juliana C.",
    role: "Copywriter",
    text: "O banco de prompts se pagou em 24h. Mas o valor real está na mentalidade. Hoje eu produzo por uma equipe inteira sozinha."
  }
]

const stackItems = [
  { icon: Layers, title: "O Protocolo Nexus (Manual Completo)", value: "R$ 197" },
  { icon: Cpu, title: "Banco de Prompts: Arquitetura de Comandos", value: "R$ 147" },
  { icon: Network, title: "Blueprint: Implementação de Negócios IA", value: "R$ 297" },
  { icon: Shield, title: "Atualizações do Sistema (Vitalício)", value: "Inestimável" },
]

const faqItems = [
  { q: "Preciso ser programador ou expert em TI?", a: "Não. O Nexus foi desenhado para atualizar o raciocínio humano, independente da área. Focamos na lógica e na estratégia, não no código." },
  { q: "A IA muda todo dia. O Nexus não vai ficar obsoleto?", a: "Ferramentas mudam, fundamentos não. O Nexus foca nos 'princípios imutáveis' da inteligência híbrida. Além disso, você tem acesso vitalício às atualizações." },
  { q: "Em quanto tempo vejo a 'evolução'?", a: "A mudança de mentalidade é imediata. A aplicação prática gera ganho de produtividade já nas primeiras 24 horas de uso do protocolo." },
  { q: "E se eu não me adaptar ao sistema?", a: "Você tem 7 dias de garantia incondicional. Se sentir que o Nexus não elevou seu nível cognitivo, devolvemos 100% do investimento." },
]

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
    window.fbq('track', 'InitiateCheckout')
  }
}

// --- NAVEGAÇÃO ---
const NAV_ITEMS = [
  { title: "INÍCIO", icon: Brain, id: "hero" },
  { title: "SISTEMA", icon: Layers, id: "bento" },
  { title: "PROTOCOLO", icon: Zap, id: "stack" },
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
    <header className="sticky top-0 z-50 w-full bg-[#050505]/80 backdrop-blur-md border-b border-[#222] shadow-2xl">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-4">
        <button onClick={() => handleScroll('hero')} className="flex items-center gap-2 cursor-pointer group">
          <div className="relative">
            <Brain className="w-8 h-8 text-[#2DD4BF] relative z-10" />
            <div className="absolute inset-0 bg-[#2DD4BF] blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
          </div>
          <span className="text-xl font-bold text-white tracking-wider">NEXUS<span className="text-[#2DD4BF]">.OS</span></span>
        </button>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="flex items-center text-xs font-bold text-gray-400 hover:text-[#2DD4BF] transition-all tracking-widest uppercase group"
            >
              <item.icon className="w-4 h-4 mr-2 text-gray-600 group-hover:text-[#2DD4BF] transition-colors" />
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
          <Button className="h-10 px-6 text-xs font-bold bg-[#FF6B35] hover:bg-[#ff8555] text-white transition-all tracking-widest uppercase shadow-[0_0_15px_rgba(255,107,53,0.3)] hover:shadow-[0_0_25px_rgba(255,107,53,0.5)] border border-[#FF6B35]/50">
            INICIAR DOWNLOAD
          </Button>
        </a>
      </div>
    </header>
  )
}

function App() {
  const [heroRef, heroVisible] = useScrollAnimation()
  
  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 font-sans selection:bg-[#2DD4BF] selection:text-black">
      <Header />

      {/* HERO SECTION - RECONSTRUÍDA */}
      <section id="hero" ref={heroRef} className="relative pt-20 pb-32 overflow-hidden min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <img 
            src={brainNetworkImg} 
            alt="Neural Network Background" 
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2DD4BF]/10 via-transparent to-transparent"></div>
        </div>

        <div className={`max-w-7xl mx-auto px-4 relative z-10 text-center transition-all duration-1000 transform ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2DD4BF]/5 border border-[#2DD4BF]/20 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse"></span>
            <span className="text-[#2DD4BF] text-xs font-bold tracking-[0.2em] uppercase">Sistema v3.0 Disponível</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
            A EVOLUÇÃO BIOLÓGICA<br/>
            É <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#22D3EE] relative">
              LENTA DEMAIS
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#2DD4BF] opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Você não precisa temer a substituição. Você precisa liderar a fusão. 
            <br/><strong className="text-white font-semibold">Nexus</strong> é o manual de instalação para o seu novo sistema operacional mental na era da Inteligência Artificial.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={handleTrackCheckout}>
              <Button className="h-16 px-10 text-lg font-bold bg-[#FF6B35] hover:bg-[#ff8555] text-white rounded-xl shadow-[0_0_30px_rgba(255,107,53,0.4)] hover:shadow-[0_0_50px_rgba(255,107,53,0.6)] transition-all hover:scale-105 border border-[#FF6B35]/50 flex items-center gap-3">
                <Zap className="w-6 h-6 fill-current" />
                INSTALAR PROTOCOLO NEXUS
              </Button>
            </a>
            <button onClick={() => document.getElementById('bento').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              Explorar o Sistema <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* BENTO GRID SECTION - RECONSTRUÍDA */}
      <section id="bento" className="py-24 bg-[#080808] relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Arquitetura do <span className="text-[#2DD4BF]">Sistema</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Não entregamos apenas conteúdo. Entregamos uma reestruturação da forma como você processa, cria e decide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px]">
            {bentoFeatures.map((feature, idx) => (
              <div key={idx} className={`${feature.colSpan} group relative rounded-3xl overflow-hidden border border-[#222] bg-[#111] hover:border-[#2DD4BF]/50 transition-all duration-500`}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-20" style={{ backgroundImage: `url(${feature.bgImage})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-[#000]/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#2DD4BF]/10 flex items-center justify-center mb-4 border border-[#2DD4BF]/20 text-[#2DD4BF] group-hover:bg-[#2DD4BF] group-hover:text-black transition-all">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - RECONSTRUÍDA */}
      <section className="py-24 bg-[#050505] border-y border-[#111]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-white mb-16">Resultados do <span className="text-[#2DD4BF]">Beta Test</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#0A0A0A] p-8 rounded-2xl border border-[#222] hover:border-[#2DD4BF]/30 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#FF6B35] text-[#FF6B35]" />)}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border border-[#333]" />
                  <div>
                    <div className="text-white font-bold">{t.name}</div>
                    <div className="text-xs text-[#2DD4BF] uppercase tracking-wide">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK / VALUE - RECONSTRUÍDA */}
      <section id="stack" className="py-24 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#111] rounded-3xl p-8 md:p-12 border border-[#222] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2DD4BF]/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Conteúdo do <span className="text-[#2DD4BF]">Protocolo Nexus</span></h2>
            
            <div className="space-y-6">
              {stackItems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-[#0A0A0A] border border-[#222] hover:border-[#333] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2DD4BF]/10 flex items-center justify-center text-[#2DD4BF]">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-gray-200 font-medium">{item.title}</span>
                  </div>
                  <span className="text-[#FF6B35] font-bold text-sm bg-[#FF6B35]/10 px-3 py-1 rounded-full">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center p-6 bg-[#2DD4BF]/5 rounded-xl border border-[#2DD4BF]/20">
              <p className="text-[#2DD4BF] text-lg font-bold">Total: <span className="line-through text-gray-500 mx-2">R$ 641,00</span></p>
              <p className="text-4xl font-black text-white mt-2">HOJE: R$ 19,90</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - RECONSTRUÍDA */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-[#0A0A0A] border border-[#222] rounded-xl overflow-hidden hover:border-[#333] transition-colors">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                    <span className="text-[#2DD4BF]">?</span> {item.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm pl-6 border-l-2 border-[#222]">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER SECTION - A PARTIR DAQUI O CÓDIGO SE CONECTA COM O QUE VOCÊ JÁ TINHA, MAS COM AJUSTES VISUAIS */}
      <section id="offer" className="py-24 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2DD4BF]/10 via-transparent to-transparent"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="bg-[#111]/80 backdrop-blur-xl border border-[#333] p-8 md:p-16 rounded-3xl shadow-2xl relative">
            {/* Efeito Glow */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-full max-w-lg h-40 bg-[#2DD4BF] blur-[100px] opacity-20 pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Última Chance para o <span className="text-[#2DD4BF]">Upgrade</span></h3>
              <p className="text-[#FF6B35] font-bold mb-12 uppercase tracking-widest text-sm bg-[#FF6B35]/10 inline-block px-4 py-2 rounded-lg border border-[#FF6B35]/20">Oferta de Lançamento por Tempo Limitado</p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#2DD4BF] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-xl"></div>
                  <img src={produtoImg} alt="Pack Nexus" className="w-72 rounded-xl shadow-2xl border border-[#333] relative z-10 rotate-[-3deg] group-hover:rotate-0 transition-all duration-500 transform" />
                </div>
                
                <div className="text-left space-y-6">
                  <div>
                    <div className="text-7xl font-black text-white mb-1 tracking-tighter">R$ 19<span className="text-3xl text-gray-500 font-light">,90</span></div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider">Pagamento Único • Acesso Vitalício</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center text-sm text-gray-300 bg-[#000]/50 p-2 rounded-lg border border-[#222]">
                      <CheckCircle className="w-5 h-5 text-[#2DD4BF] mr-3" /> 
                      Acesso Imediato ao Manual
                    </div>
                    <div className="flex items-center text-sm text-gray-300 bg-[#000]/50 p-2 rounded-lg border border-[#222]">
                      <Shield className="w-5 h-5 text-[#2DD4BF] mr-3" /> 
                      Garantia Blindada de 7 Dias
                    </div>
                    <div className="flex items-center text-sm text-gray-300 bg-[#000]/50 p-2 rounded-lg border border-[#222]">
                      <Database className="w-5 h-5 text-[#2DD4BF] mr-3" /> 
                      Atualizações Futuras Inclusas
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={CHECKOUT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-2xl mx-auto group"
                onClick={handleTrackCheckout}
              >
                <Button className="w-full h-auto py-6 text-white font-extrabold text-xl md:text-2xl rounded-2xl flex items-center justify-center gap-4 bg-[#FF6B35] hover:bg-[#ff8555] shadow-[0_0_40px_rgba(255,107,53,0.3)] hover:shadow-[0_0_60px_rgba(255,107,53,0.5)] transition-all transform hover:-translate-y-1 border border-[#FF6B35]/50">
                  <span className="relative z-10">QUERO ACESSAR O NEXUS AGORA</span>
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform relative z-10" />
                </Button>
                <p className="mt-4 text-xs text-gray-500 flex items-center justify-center gap-2">
                  <Lock className="w-3 h-3" /> Ambiente Criptografado e Seguro
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020202] pt-24 pb-12 px-4 border-t border-[#111] relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-8 h-8 text-[#2DD4BF]" />
              <span className="text-2xl font-bold text-white tracking-wider">NEXUS<span className="text-[#2DD4BF]">.OS</span></span>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-sm mb-6 text-sm">
              O manual definitivo para profissionais que desejam liderar a revolução da IA e instalar um exocórtex digital.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-[#2DD4BF] transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-[#2DD4BF] transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contato</h4>
            <p className="text-gray-500 mb-4 text-sm">suporte@nexus-manual.com.br</p>
            <a href="https://instagram.com/nexus0rigin" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-[#FF6B35] transition-colors gap-2 text-sm group">
              <div className="p-2 bg-[#111] rounded-full group-hover:bg-[#FF6B35] group-hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </div>
              <span>@nexus0rigin</span>
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto text-center pt-8 border-t border-[#111]">
          <p className="text-gray-700 text-xs mb-4">
            &copy; 2025 Nexus Manual. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  )
}

export default App

