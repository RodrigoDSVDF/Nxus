import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import {
  ArrowRight, Zap, Target, Key, Rocket, Brain,
  CheckCircle, AlertTriangle, Shield, ChevronRight,
  Terminal, Cpu, Network, Layers, Check, Sparkles, Star,
  Instagram, Database, Lock, TrendingUp, BookOpen,
  Menu, X, Laptop, FileText, Download, Award, AlertCircle
} from 'lucide-react'
import './App.css'

// --- IMPORTAÇÃO DE ASSETS (MANTIDOS) ---
import brainNetworkImg from './assets/1000393266.jpg'
import neuralNetworkImg from './assets/1000393264.jpg'
import laptopNeuralImg from './assets/1000393263.jpg'
import brainAIImg from './assets/1000393262.jpg'
import produtoImg from './assets/produto.jpg'
import fundo02 from './assets/fundo02.jpg'
import produtividadeImg from './assets/produtividade.jpg'
import servicosIaImg from './assets/servicos-ia.jpg'
import xadrezImg from './assets/xadrez-estrategia.jpg'
import promptImg from './assets/engenharia_prompt.png'
import socialWoman2 from './assets/femele_social02.png'
import socialWoman1 from './assets/femele_social.png'
import socialMan from './assets/masculino_social.png'

// --- CONFIGURAÇÕES GERAIS ---
const CHECKOUT_LINK = "https://nexus-beta.streamlit.app/"
const OLD_PRICE = "R$ 97,90"
const NEW_PRICE = "R$ 19,90"

// --- DADOS DO CONTEÚDO (RICO) ---
const modulesList = [
  {
    title: "Módulo 01: O Despertar (Mindset)",
    items: ["A falácia da 'substituição' vs. a realidade da 'simbiose'", "Superando o medo da tecnologia", "Configurando seu ambiente digital para alta performance"]
  },
  {
    title: "Módulo 02: A Linguagem da Máquina",
    items: ["Fundamentos da Engenharia de Prompt", "Estrutura C.R.I.A. (Contexto, Role, Instrução, Ação)", "Como calibrar a temperatura e o tom da IA"]
  },
  {
    title: "Módulo 03: Aceleração de Aprendizado",
    items: ["Leitura Sintópica com IA", "Criação de Mapas Mentais Automáticos", "O método de 'Feynman Digital': Ensinando a IA para aprender"]
  },
  {
    title: "Módulo 04: O Arsenal de Ferramentas",
    items: ["As melhores IAs para cada tarefa (Texto, Imagem, Código, Dados)", "Integração do Notion com IA", "Automação de e-mails e rotinas burocráticas"]
  }
]

const stackOffer = [
  { name: "Manual Nexus (E-book Premium)", price: "R$ 97,00", desc: "O guia estratégico completo com mais de 100 páginas de conteúdo prático.", icon: BookOpen },
  { name: "Banco de Prompts 'Copy & Paste'", price: "R$ 47,00", desc: "Biblioteca com 50+ comandos prontos para Copywriting, Programação e Gestão.", icon: Database },
  { name: "Blueprint: Ferramentas Secretas", price: "R$ 27,00", desc: "Lista curada das IAs que os profissionais usam e ninguém te conta.", icon: Key },
  { name: "Atualizações Vitalícias", price: "Inestimável", desc: "Acesso a todas as novas versões do manual conforme a tecnologia evolui.", icon: Rocket },
]

const faqItems = [
  { q: "Para quem é o Nexus?", a: "Para estudantes, profissionais liberais, nômades digitais e qualquer pessoa que sinta que a quantidade de informação no mundo está crescendo mais rápido do que sua capacidade de aprender." },
  { q: "Preciso saber programar?", a: "Absolutamente não. O Nexus foca na lógica e na estratégia usando Linguagem Natural (Português). Se você sabe escrever, você está apto a dominar o método." },
  { q: "O conteúdo serve para qual IA?", a: "Os princípios ensinados são universais (Model Agnostic). Funcionam no ChatGPT, Claude, Gemini, Llama ou qualquer LLM futuro. Focamos no fundamento, não apenas na ferramenta." },
  { q: "Como recebo o acesso?", a: "Imediatamente após a aprovação do pagamento, você receberá um e-mail com o link para download dos materiais e acesso à área de membros." },
  { q: "Tenho garantia?", a: "Sim. Risco zero. Você tem 7 dias para testar o método. Se achar que não evoluiu sua capacidade cognitiva, devolvemos 100% do seu dinheiro sem perguntas." },
]

// --- HOOKS ---
function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true) }, { threshold, rootMargin: '0px 0px -50px 0px' })
    if (ref.current) observer.observe(ref.current)
    return () => ref.current && observer.unobserve(ref.current)
  }, [threshold])
  return [ref, isVisible]
}
const handleTrackCheckout = () => { if (typeof window !== 'undefined' && window.fbq) window.fbq('track', 'InitiateCheckout') }

// --- COMPONENTES UI ---
const Badge = ({ text, color = "emerald" }) => {
  const colorClass = color === "orange" ? "bg-[#FF6B35]/10 text-[#FF6B35] border-[#FF6B35]/20" : "bg-[#2DD4BF]/10 text-[#2DD4BF] border-[#2DD4BF]/20"
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-bold tracking-widest uppercase mb-4 ${colorClass}`}>
      <span className={`w-2 h-2 rounded-full mr-2 animate-pulse ${color === "orange" ? "bg-[#FF6B35]" : "bg-[#2DD4BF]"}`}></span>
      {text}
    </span>
  )
}

// --- APP PRINCIPAL ---
function App() {
  const [heroRef, heroVisible] = useScrollAnimation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false) }
  }

  return (
    <div className="min-h-screen bg-[#020202] text-gray-100 font-sans selection:bg-[#2DD4BF] selection:text-black overflow-x-hidden">
      
      {/* HEADER FIXED */}
      <header className="fixed top-0 z-50 w-full bg-[#020202]/80 backdrop-blur-md border-b border-[#222] transition-all duration-300">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
          <div onClick={() => scrollTo('hero')} className="flex items-center gap-2 cursor-pointer group">
            <Brain className="w-8 h-8 text-[#2DD4BF] group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold text-white tracking-widest">NEXUS<span className="text-[#2DD4BF]">.OS</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {['O MÉTODO', 'MÓDULOS', 'DEPOIMENTOS', 'FAQ'].map((item, i) => (
              <button key={i} onClick={() => scrollTo(['method', 'modules', 'reviews', 'faq'][i])} className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors hover:scale-105">{item}</button>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:block">
              <Button className="h-10 px-6 bg-[#FF6B35] hover:bg-[#E85D2B] text-white font-bold text-xs tracking-widest border border-[#FF6B35]/50 transition-all">INICIAR PROTOCOLO</Button>
            </a>
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </header>

      {/* FAIXA 1: HERO (PRETO TOTAL) */}
      <section id="hero" ref={heroRef} className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[#020202] border-b border-[#222]">
        <div className="absolute inset-0 z-0">
          <img src={brainNetworkImg} className="w-full h-full object-cover opacity-20 grayscale mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#020202]/90 to-[#020202]"></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center md:text-left">
            <Badge text="Sistema v3.0 Disponível" color="emerald" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-[1]">
              EVOLUÇÃO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#22D3EE]">COGNITIVA</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed border-l-4 border-[#222] pl-6">
              Você não precisa temer a substituição pela IA. Você precisa liderar a fusão. <strong className="text-white">Nexus</strong> é o manual de instalação para o seu novo sistema operacional mental.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={handleTrackCheckout} className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto h-16 px-10 text-lg font-bold bg-[#FF6B35] hover:bg-[#E85D2B] text-white rounded-xl flex items-center justify-center gap-3 border border-[#FF6B35]/50">
                  <Download className="w-6 h-6" /> BAIXAR MANUAL
                </Button>
              </a>
              <button onClick={() => scrollTo('method')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest px-6 py-4 border border-transparent hover:border-[#333] rounded-xl">
                Entender o Sistema <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="relative hidden md:block group">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2DD4BF] rounded-full blur-[120px] opacity-10 animate-pulse"></div>
            <img src={produtoImg} alt="Nexus Manual Cover" className="relative z-10 w-full max-w-md mx-auto rounded-xl shadow-2xl border border-[#333] transform rotate-[-5deg] group-hover:rotate-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* FAIXA 2: A DOR (CINZA ESCURO) */}
      <section className="py-24 bg-[#0A0A0A] border-y border-[#222]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Badge text="O Problema" color="orange" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">O "Jeito Velho" de Aprender <span className="text-[#FF6B35]">Colapsou.</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            Tentar acompanhar o volume atual de informação usando apenas leitura e resumo (método biológico) é matematicamente impossível. O resultado é ansiedade e estagnação.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#111] p-6 rounded-xl border border-[#222] hover:border-[#FF6B35]/30 transition-colors">
              <AlertCircle className="w-8 h-8 text-[#FF6B35] mb-4 mx-auto" />
              <h3 className="text-white font-bold mb-2">Overload Cognitivo</h3>
              <p className="text-sm text-gray-500">Excesso de dados bloqueia sua decisão.</p>
            </div>
            <div className="bg-[#111] p-6 rounded-xl border border-[#222] hover:border-[#FF6B35]/30 transition-colors">
              <Laptop className="w-8 h-8 text-[#FF6B35] mb-4 mx-auto" />
              <h3 className="text-white font-bold mb-2">Obsolescência Rápida</h3>
              <p className="text-sm text-gray-500">O conhecimento de hoje expira amanhã.</p>
            </div>
            <div className="bg-[#111] p-6 rounded-xl border border-[#222] hover:border-[#FF6B35]/30 transition-colors">
              <AlertTriangle className="w-8 h-8 text-[#FF6B35] mb-4 mx-auto" />
              <h3 className="text-white font-bold mb-2">Medo da Substituição</h3>
              <p className="text-sm text-gray-500">Quem não usar IA será substituído.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAIXA 3: O MÉTODO / BENTO (PRETO TOTAL) */}
      <section id="method" className="py-24 bg-black border-y border-[#222]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge text="A Solução Nexus" color="emerald" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Instale o <span className="text-[#2DD4BF]">Exocórtex</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Entregamos uma reestruturação completa da forma como você pensa, cria e resolve problemas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
            <div className="md:col-span-2 group relative rounded-3xl overflow-hidden border border-[#222] bg-[#111] hover:border-[#2DD4BF]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${xadrezImg})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <Brain className="w-10 h-10 text-[#2DD4BF] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Estratégia > Força Bruta</h3>
                <p className="text-gray-400">Deixe a máquina processar. Você foca apenas na direção e no julgamento.</p>
              </div>
            </div>
            <div className="md:col-span-1 group relative rounded-3xl overflow-hidden border border-[#222] bg-[#111] hover:border-[#2DD4BF]/50 transition-all">
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${promptImg})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <Terminal className="w-8 h-8 text-[#2DD4BF] mb-3" />
                <h3 className="text-xl font-bold text-white">Code</h3>
                <p className="text-gray-400 text-xs mt-2">Domine a sintaxe natural.</p>
              </div>
            </div>
            <div className="md:col-span-1 group relative rounded-3xl overflow-hidden border border-[#222] bg-[#111] hover:border-[#2DD4BF]/50 transition-all">
               <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${servicosIaImg})` }}></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-8">
                <Zap className="w-8 h-8 text-[#2DD4BF] mb-3" />
                <h3 className="text-xl font-bold text-white">Speed</h3>
                <p className="text-gray-400 text-xs mt-2">Aceleração 100x.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAIXA 4: MÓDULOS DETALHADOS (CINZA ESCURO) */}
      <section id="modules" className="py-24 bg-[#0A0A0A] border-y border-[#222]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold text-white mb-6 sticky top-24">O que você vai <span className="text-[#2DD4BF]">Dominar</span></h2>
            <p className="text-gray-400 mb-8 sticky top-40">O manual é dividido em 4 pilares estratégicos para levar você do zero ao nível avançado.</p>
            <div className="sticky top-60">
              <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer"><Button className="w-full bg-[#2DD4BF] hover:bg-[#25bda9] text-black font-bold">Ver Índice Completo</Button></a>
            </div>
          </div>
          <div className="md:w-2/3 space-y-8">
            {modulesList.map((mod, idx) => (
              <div key={idx} className="bg-[#111] border border-[#222] rounded-2xl p-8 hover:border-[#2DD4BF]/30 transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-black text-[#222] group-hover:text-[#2DD4BF]/20 transition-colors">0{idx + 1}</span>
                  <h3 className="text-xl font-bold text-white">{mod.title}</h3>
                </div>
                <ul className="space-y-3 pl-4 border-l border-[#222]">
                  {mod.items.map((item, i) => (<li key={i} className="text-gray-400 text-sm flex items-start gap-2"><Check className="w-4 h-4 text-[#2DD4BF] mt-0.5" />{item}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAIXA 5: PROVA SOCIAL (PRETO TOTAL) */}
      <section id="reviews" className="py-24 bg-black border-y border-[#222]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-white mb-16">Quem já fez o <span className="text-[#2DD4BF]">Upgrade</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: socialMan, name: "Ricardo S.", role: "Engenheiro", text: "O Nexus me mostrou que eu estava usando uma Ferrari como triciclo. A produtividade triplicou." },
              { img: socialWoman1, name: "Amanda L.", role: "Redatora", text: "Aprendi a usar a IA como 'estagiária'. Hoje pego 5x mais clientes e trabalho menos." },
              { img: socialWoman2, name: "Carla D.", role: "Estudante", text: "O módulo de aprendizado acelerado é bruxaria. Resumo doutrinas inteiras em minutos." }
            ].map((t, i) => (
              <div key={i} className="bg-[#080808] p-8 rounded-2xl border border-[#181818] hover:border-[#2DD4BF]/30 transition-all flex flex-col justify-between h-full">
                <div>
                  <div className="flex gap-1 mb-6">{[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-[#FF6B35] text-[#FF6B35]" />)}</div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic text-sm">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-4 border-t border-[#222] pt-6">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border border-[#333] object-cover" />
                  <div><div className="text-white font-bold">{t.name}</div><div className="text-xs text-[#2DD4BF] uppercase tracking-wide">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAIXA 6: OFERTA (CINZA ESCURO + GRADIENTE) */}
      <section id="offer" className="py-24 bg-[#0A0A0A] border-y border-[#222] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-[#111] border border-[#222] rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-[#1a1a1a] p-8 text-center border-b border-[#222]">
              <h2 className="text-3xl font-bold text-white mb-2">Protocolo Nexus <span className="text-[#2DD4BF]">Completo</span></h2>
              <p className="text-gray-400">Tudo o que você precisa para evoluir, em um único pacote.</p>
            </div>
            <div className="p-8 md:p-12">
              <div className="space-y-6 mb-12">
                {stackOffer.map((item, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-[#222] pb-4 last:border-0 group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#222] rounded-lg flex items-center justify-center text-[#2DD4BF] group-hover:bg-[#2DD4BF] group-hover:text-black transition-colors"><item.icon className="w-6 h-6" /></div>
                      <div><h4 className="text-white font-bold">{item.name}</h4><p className="text-xs text-gray-500 hidden md:block">{item.desc}</p></div>
                    </div>
                    <span className="text-[#FF6B35] font-mono font-bold text-sm bg-[#FF6B35]/10 px-2 py-1 rounded">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#2DD4BF]/5 border border-[#2DD4BF]/20 rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#FF6B35] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">OFERTA LIMITADA</div>
                <p className="text-gray-500 text-sm mb-2 uppercase tracking-widest">Valor Total: <span className="line-through">{OLD_PRICE}</span></p>
                <div className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">{NEW_PRICE}</div>
                <p className="text-gray-400 text-sm mb-8">Pagamento único. Acesso vitalício.</p>
                <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={handleTrackCheckout} className="block group">
                  <Button className="w-full h-20 text-xl font-bold bg-[#FF6B35] hover:bg-[#E85D2B] text-white rounded-xl shadow-[0_0_40px_rgba(255,107,53,0.4)] transition-all flex items-center justify-center gap-4 border border-[#FF6B35]/50">
                    <span className="relative z-10">QUERO ACESSAR AGORA</span><ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAIXA 7: FAQ (PRETO TOTAL) */}
      <section id="faq" className="py-24 bg-black border-t border-[#222]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center my-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-[#080808] border border-[#222] rounded-xl overflow-hidden hover:border-[#333] transition-colors">
                <div className="p-6">
                  <h3 className="text-white font-bold mb-2 flex items-center gap-3"><span className="text-[#2DD4BF] font-mono">?</span> {item.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed pl-6 border-l border-[#222] ml-1">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER (PRETO TOTAL) */}
      <footer className="bg-[#020202] pt-24 pb-12 px-6 border-t border-[#222]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          <div className="md:col-span-2">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6"><Brain className="w-6 h-6 text-[#2DD4BF]" /><span className="text-lg font-bold text-white tracking-widest">NEXUS<span className="text-[#2DD4BF]">.OS</span></span></div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">Nexus é uma iniciativa educacional focada na aceleração cognitiva humana através da simbiose com IA.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-3 text-gray-500 text-sm"><li><button onClick={() => scrollTo('hero')} className="hover:text-[#2DD4BF]">Início</button></li><li><button onClick={() => scrollTo('method')} className="hover:text-[#2DD4BF]">O Método</button></li><li><button onClick={() => scrollTo('offer')} className="hover:text-[#2DD4BF]">Comprar</button></li></ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3 text-gray-500 text-sm"><li><a href="#" className="hover:text-[#2DD4BF]">Termos</a></li><li><a href="#" className="hover:text-[#2DD4BF]">Privacidade</a></li><li><a href="mailto:suporte@nexus.com" className="hover:text-[#2DD4BF]">Contato</a></li></ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-[#111] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs">&copy; 2025 Nexus Manual. Todos os direitos reservados.</p>
          <a href="https://instagram.com/nexus0rigin" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#FF6B35] transition-colors"><Instagram className="w-5 h-5" /></a>
        </div>
      </footer>
    </div>
  )
}

export default App
