import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import {
  ArrowRight, Zap, Target, Key, Rocket, Brain,
  CheckCircle, AlertTriangle, Shield, ChevronRight,
  Terminal, Cpu, Network, Layers, Check, Sparkles, Star,
  Instagram, Database, Lock, TrendingUp, AlertCircle, Monitor
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

// --- CONFIGURAÇÕES ---
const CHECKOUT_LINK = "https://nexus-beta.streamlit.app/"

// --- DADOS ESTRUTURADOS ---
const featuresList = [
  {
    icon: Terminal,
    title: "Engenharia de Prompt Avançada",
    desc: "Pare de pedir favores à IA. Aprenda a comandar. Estruturas lógicas, cadeias de pensamento e prompts que geram resultados de nível sênior."
  },
  {
    icon: Monitor,
    title: "O Ecossistema de Ferramentas",
    desc: "O ChatGPT é apenas a ponta do iceberg. Descubra IAs para pesquisa acadêmica, design, síntese de dados e automação de rotinas."
  },
  {
    icon: Brain,
    title: "Aprendizado Acelerado Híbrido",
    desc: "A metodologia para absorver conteúdo complexo na metade do tempo, usando a IA para pré-processar e resumir informações para seu cérebro."
  }
]

const comparisonData = [
  { text: "Estuda de forma linear e lenta", type: "old" },
  { text: "Esquece 80% do que lê em uma semana", type: "old" },
  { text: "Sente-se ameaçado pela tecnologia", type: "old" },
  { text: "Absorção exponencial assistida por IA", type: "nexus" },
  { text: "Cria 'segundos cérebros' digitais", type: "nexus" },
  { text: "Usa a tecnologia como extensão do corpo", type: "nexus" },
]

const faqItems = [
  { q: "Para quem é o Nexus?", a: "Para estudantes, profissionais liberais e empreendedores que sentem que a quantidade de informação atual é impossível de acompanhar humanamente." },
  { q: "Preciso saber programar?", a: "Não. Ensinamos a lógica, não o código. O foco é a 'Linguagem Natural' e como estruturar seu pensamento para as máquinas." },
  { q: "O conteúdo é atualizado?", a: "Sim. O mundo da IA muda semanalmente. O Nexus é um manual vivo com atualizações constantes inclusas no acesso vitalício." },
  { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento, você recebe um e-mail com suas credenciais de acesso à área de membros exclusiva." },
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

// --- HEADER COMPONENT ---
function Header() {
  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050505]/90 backdrop-blur-md border-b border-[#222] shadow-2xl">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
        <button onClick={() => handleScroll('hero')} className="flex items-center gap-2 group">
          <Brain className="w-8 h-8 text-[#2DD4BF] group-hover:animate-pulse" />
          <span className="text-xl font-bold text-white tracking-widest">NEXUS<span className="text-[#2DD4BF]">.OS</span></span>
        </button>
        <div className="hidden md:flex gap-8">
          {['PROBLEMA', 'SOLUÇÃO', 'MÓDULOS', 'OFERTA'].map((item, i) => (
            <button key={i} onClick={() => handleScroll(['problem', 'solution', 'modules', 'offer'][i])} className="text-xs font-bold text-gray-400 hover:text-[#2DD4BF] tracking-widest transition-colors">
              {item}
            </button>
          ))}
        </div>
        <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer">
          <Button className="h-10 px-6 bg-[#FF6B35] hover:bg-[#E85D2B] text-white font-bold text-xs tracking-widest shadow-[0_0_15px_rgba(255,107,53,0.4)]">
            ACESSAR AGORA
          </Button>
        </a>
      </div>
    </header>
  )
}

function App() {
  const [heroRef, heroVisible] = useScrollAnimation()
  
  return (
    <div className="min-h-screen bg-[#020202] text-gray-100 font-sans selection:bg-[#2DD4BF] selection:text-black overflow-x-hidden">
      <Header />

      {/* 1. HERO SECTION - IMPACTO VISUAL */}
      <section id="hero" ref={heroRef} className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden border-b border-[#222]">
        <div className="absolute inset-0 z-0">
          <img src={brainNetworkImg} alt="Background" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2DD4BF]/5 via-transparent to-transparent"></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-6 text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse"></span>
            <span className="text-[#2DD4BF] text-xs font-bold tracking-[0.2em] uppercase">Protocolo Vida 3.0 Ativo</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
            A BIOLOGIA É <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#22D3EE]">
              LENTA DEMAIS.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            O mundo dobrou a velocidade. Seu cérebro continua o mesmo.
            <br/> <strong className="text-white font-semibold">Nexus</strong> não é um curso. É o manual de instalação do seu novo sistema operacional mental.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={handleTrackCheckout}>
              <Button className="h-16 px-12 text-lg font-bold bg-[#FF6B35] hover:bg-[#ff8555] text-white rounded-xl shadow-[0_0_30px_rgba(255,107,53,0.4)] hover:scale-105 transition-all flex items-center gap-3">
                <Zap className="w-6 h-6 fill-current" />
                INSTALAR PROTOCOLO
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 2. O PROBLEMA (FAIXA ESCURA) - PERSUASÃO NEGATIVA */}
      <section id="problem" className="py-24 bg-black border-b border-[#222]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Você está lutando uma guerra digital com <span className="text-[#FF6B35]">armas de pedra.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              A quantidade de informação produzida hoje em 24 horas supera o que um humano do século passado consumia em toda a vida. Tentar processar isso apenas com "leitura e resumo" não é apenas difícil. <strong>É matematicamente impossível.</strong>
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-[#111] rounded-lg border border-[#222]">
                <AlertTriangle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold">Obsolescência Programada</h4>
                  <p className="text-sm text-gray-500">O que você aprende hoje pode ser inútil amanhã se você não souber como se adaptar rápido.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-[#111] rounded-lg border border-[#222]">
                <AlertCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold">Fadiga Cognitiva</h4>
                  <p className="text-sm text-gray-500">Seu cérebro biológico não foi feito para o dilúvio de dados. O resultado é ansiedade e paralisia.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#FF6B35] blur-[80px] opacity-10"></div>
            <img src={laptopNeuralImg} alt="Caos Digital" className="relative z-10 rounded-2xl border border-[#333] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* 3. A SOLUÇÃO (FAIXA CINZA) - CONCEITO NEXUS */}
      <section id="solution" className="py-24 bg-[#080808] border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A Era do <span className="text-[#2DD4BF]">Exocórtex</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Não se trata de substituir o humano. Se trata de criar uma simbiose. O Nexus ensina a construir uma segunda camada de inteligência digital que trabalha para você.
          </p>
        </div>

        {/* BENTO GRID (Mantido mas com espaçamento melhorado) */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[320px]">
          <div className="md:col-span-2 group relative rounded-3xl overflow-hidden border border-[#222] bg-[#050505]">
            <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-20 transition-all duration-700" style={{ backgroundImage: `url(${xadrezImg})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <Brain className="w-10 h-10 text-[#2DD4BF] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Estratégia > Força Bruta</h3>
              <p className="text-gray-400">Não decore a enciclopédia. Aprenda a consultar o oráculo. O foco muda da retenção para a curadoria.</p>
            </div>
          </div>
          
          <div className="md:col-span-1 group relative rounded-3xl overflow-hidden border border-[#222] bg-[#050505]">
            <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-20 transition-all" style={{ backgroundImage: `url(${promptImg})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <Terminal className="w-10 h-10 text-[#2DD4BF] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Engenharia de Prompt</h3>
              <p className="text-gray-400 text-sm">O novo inglês. Quem sabe falar com a máquina domina o resultado.</p>
            </div>
          </div>

          <div className="md:col-span-1 group relative rounded-3xl overflow-hidden border border-[#222] bg-[#050505]">
             <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-20 transition-all" style={{ backgroundImage: `url(${servicosIaImg})` }}></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-8">
              <Zap className="w-10 h-10 text-[#2DD4BF] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Hipervelocidade</h3>
              <p className="text-gray-400 text-sm">Reduza processos de 4 horas para 15 minutos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARATIVO (FAIXA PRETA) - ANCORAGEM LÓGICA */}
      <section className="py-24 bg-black border-b border-[#222]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">A Evolução é <span className="text-[#2DD4BF]">Obrigatória</span></h2>
          <div className="grid md:grid-cols-2 gap-0 md:gap-12 relative">
             {/* Linha divisória vertical desktop */}
             <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#222]"></div>

             <div className="p-8 text-right opacity-60 hover:opacity-100 transition-opacity">
               <h3 className="text-xl font-bold text-gray-500 mb-8 uppercase tracking-widest">Método Obsoleto</h3>
               <ul className="space-y-6">
                 {comparisonData.filter(d => d.type === 'old').map((item, i) => (
                   <li key={i} className="flex items-center justify-end gap-4 text-gray-400">
                     {item.text} <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                   </li>
                 ))}
               </ul>
             </div>

             <div className="p-8">
               <h3 className="text-xl font-bold text-[#2DD4BF] mb-8 uppercase tracking-widest">Método Nexus</h3>
               <ul className="space-y-6">
                 {comparisonData.filter(d => d.type === 'nexus').map((item, i) => (
                   <li key={i} className="flex items-center gap-4 text-white font-medium">
                     <div className="w-2 h-2 bg-[#2DD4BF] rounded-full shadow-[0_0_10px_#2DD4BF]"></div> {item.text}
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>
      </section>

      {/* 5. MÓDULOS DETALHADOS (FAIXA CINZA ESCURO) - PROVA DE VALOR */}
      <section id="modules" className="py-24 bg-[#0A0A0A] border-b border-[#222]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="flex-1 space-y-12">
               <h2 className="text-4xl font-bold text-white mb-8">O Que Você Vai <br/><span className="text-[#2DD4BF]">Instalar na Sua Mente</span></h2>
               {featuresList.map((feature, i) => (
                 <div key={i} className="flex gap-6 group">
                   <div className="w-14 h-14 rounded-2xl bg-[#111] border border-[#222] flex items-center justify-center flex-shrink-0 group-hover:border-[#2DD4BF] transition-colors">
                     <feature.icon className="w-6 h-6 text-[#2DD4BF]" />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                     <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
             <div className="flex-1 relative">
                <div className="absolute inset-0 bg-[#2DD4BF] blur-[100px] opacity-10"></div>
                <img src={neuralNetworkImg} alt="Mente Digital" className="relative z-10 rounded-2xl border border-[#333] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" />
             </div>
          </div>
        </div>
      </section>

      {/* 6. PROVA SOCIAL (FAIXA PRETA) */}
      <section className="py-24 bg-black border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-white mb-16">Relatórios de <span className="text-[#2DD4BF]">Campo</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: socialMan, name: "Rodrigo S.", role: "Dev & Analista", text: "Achei que sabia usar IA. O Nexus me mostrou que eu estava usando uma bazuca para matar moscas. A estratégia mudou meu jogo." },
              { img: socialWoman1, name: "Fernanda L.", role: "Advogada", text: "Automatizei a triagem de processos. O que levava 3 dias, faço em 2 horas. O manual se pagou no primeiro dia." },
              { img: socialWoman2, name: "Carla M.", role: "Criadora de Conteúdo", text: "A Engenharia de Contexto é surreal. Consigo gerar pautas para um mês inteiro em 20 minutos com qualidade absurda." }
            ].map((t, i) => (
              <div key={i} className="bg-[#080808] p-8 rounded-2xl border border-[#181818] hover:border-[#2DD4BF]/30 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#FF6B35] text-[#FF6B35]" />)}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border border-[#333] object-cover" />
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

      {/* 7. FAQ (FAIXA CINZA) */}
      <section className="py-24 bg-[#050505] border-b border-[#222]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-[#0A0A0A] border border-[#222] rounded-xl overflow-hidden hover:border-[#333] transition-colors">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                    <span className="text-[#2DD4BF] text-xl">?</span> {item.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm pl-8">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OFERTA FINAL (FAIXA GRADIENTE ESCURA) */}
      <section id="offer" className="py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2DD4BF]/5 via-transparent to-transparent"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="bg-[#0A0A0A]/90 backdrop-blur-xl border border-[#222] p-8 md:p-16 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
            {/* Efeito Glow Fundo */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2DD4BF] blur-[150px] opacity-10 pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Comece Sua <span className="text-[#2DD4BF]">Atualização</span></h3>
              <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                O preço de um café para acessar o conhecimento que vai te colocar anos à frente do mercado. Não é sobre gastar, é sobre investir na sua única ferramenta real: <span className="text-white">sua mente.</span>
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16 bg-[#000]/40 p-8 rounded-2xl border border-[#222]">
                <img src={produtoImg} alt="Pack Nexus" className="w-64 rounded-xl shadow-2xl border border-[#333] rotate-[-3deg] hover:rotate-0 transition-all duration-500" />
                
                <div className="text-left space-y-4">
                  <div className="space-y-1">
                    <span className="text-gray-500 line-through text-lg">De R$ 97,00</span>
                    <div className="text-7xl font-black text-white tracking-tighter">
                      R$ 19<span className="text-2xl text-[#2DD4BF]">,90</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2DD4BF]" /> Acesso Vitalício</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2DD4BF]" /> Atualizações Inclusas</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2DD4BF]" /> Bônus: Lista de Prompts</li>
                  </ul>
                </div>
              </div>

              <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={handleTrackCheckout} className="block max-w-2xl mx-auto group">
                <Button className="w-full h-auto py-6 text-white font-extrabold text-xl md:text-2xl rounded-2xl flex items-center justify-center gap-4 bg-[#FF6B35] hover:bg-[#E85D2B] shadow-[0_0_40px_rgba(255,107,53,0.3)] hover:shadow-[0_0_60px_rgba(255,107,53,0.5)] transition-all transform hover:-translate-y-1 border border-[#FF6B35]/50">
                  <span className="relative z-10">QUERO O MANUAL NEXUS</span>
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform relative z-10" />
                </Button>
                <p className="mt-6 text-xs text-gray-500 flex items-center justify-center gap-2 opacity-80">
                  <Lock className="w-3 h-3" /> Pagamento processado com segurança bancária
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - FINALIZAÇÃO */}
      <footer className="bg-[#020202] pt-20 pb-10 px-6 border-t border-[#111] text-center md:text-left">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <Brain className="w-8 h-8 text-[#2DD4BF]" />
              <span className="text-2xl font-bold text-white tracking-wider">NEXUS<span className="text-[#2DD4BF]">.OS</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              O Nexus é uma iniciativa educacional focada na aceleração cognitiva humana através da simbiose com inteligência artificial.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><button onClick={() => document.getElementById('hero').scrollIntoView({behavior:'smooth'})} className="hover:text-[#2DD4BF]">Início</button></li>
              <li><button onClick={() => document.getElementById('modules').scrollIntoView({behavior:'smooth'})} className="hover:text-[#2DD4BF]">Módulos</button></li>
              <li><a href={CHECKOUT_LINK} className="hover:text-[#2DD4BF]">Comprar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contato</h4>
            <a href="https://instagram.com/nexus0rigin" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start text-gray-400 hover:text-[#FF6B35] transition-colors gap-2 text-sm">
              <Instagram className="w-5 h-5" /> @nexus0rigin
            </a>
            <p className="text-gray-600 text-xs mt-4">suporte@nexus-manual.com.br</p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto pt-8 border-t border-[#111]">
          <p className="text-gray-700 text-xs text-center">
            &copy; 2025 Nexus Manual. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
