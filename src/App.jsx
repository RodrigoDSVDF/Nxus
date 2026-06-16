import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import {
  ArrowRight, Zap, Target, Rocket, Brain,
  CheckCircle, Shield, ChevronRight,
  Cpu, Network, Layers, Check, Star,
  Instagram, PlayCircle, BarChart3,
  Cpu as CpuIcon, Brain as BrainIcon,
  BookOpen, X
} from 'lucide-react'
import './App.css'

// ── IMAGENS ──
import logoImg        from './assets/nxus.webp'
import brainNetworkImg from './assets/1000393266.jpg'
import neuralNetworkImg from './assets/1000393264.jpg'
import produtoImg     from './assets/produto.jpg'
import produtividadeImg from './assets/produtividade.jpg'
import servicosIaImg  from './assets/servicos-ia.jpg'
import xadrezImg      from './assets/xadrez-estrategia.webp'
import promptImg      from './assets/engenharia_prompt.png'
import socialWoman2   from './assets/femele_social02.png'
import socialWoman1   from './assets/femele_social.png'
import socialMan      from './assets/masculino_social.png'

const CHECKOUT_LINK   = "https://pay.cakto.com.br/5dUKrWD"
const YOUTUBE_VIDEO_ID = "F5fJ_56-wr8"

// ── PALETA CENTRAL (usada inline onde Tailwind não alcança) ──
const C = {
  ink:       '#050810',
  navy:      '#0A1628',
  steel:     '#1C2E4A',
  sapphire:  '#2563EB',
  sapphire2: '#3B82F6',
  ice:       '#E8F0FE',
  silver:    '#94A3B8',
}

// ── DADOS ──
const bentoFeatures = [
  { colSpan:"md:col-span-2", bgImage:xadrezImg,      icon:Brain,   title:"⚙️ O Manual: Seu Mapa de Orientação",   desc:"Abordagem sistematizada do uso da IA para potencializar foco, atenção e produtividade — com atualização contínua sobre tecnologias emergentes." },
  { colSpan:"md:col-span-1", bgImage:servicosIaImg,  icon:Target,  title:"⚔️ O Arsenal: Metodologias Ativas",      desc:"Aprenda como um atleta de elite. Palácio da memória, revisão espaçada e frameworks que fixam o que você estuda." },
  { colSpan:"md:col-span-1", bgImage:promptImg,      icon:Cpu,     title:"⚡ O Processador: Hub de Ferramentas",   desc:"Acesso às principais ferramentas com um clique. Ecossistema de IAs curado e atualizado sob demanda." },
  { colSpan:"md:col-span-1", bgImage:produtividadeImg,icon:Layers, title:"🤖 O Co-Piloto: Inteligência Estratégica","desc":"Engenharia de contexto — não prompts mágicos. Use a IA como braço direito executivo, não como ferramenta de busca." },
  { colSpan:"md:col-span-2", bgImage:neuralNetworkImg,icon:BarChart3,title:"📊 O Painel: Análise e Iteração",       desc:"O que é medido, é melhorado. Logbook de performance para garantir evolução consistente de 1% ao dia." },
]

const testimonials = [
  {
    initials: "RC",
    color: "#2563EB",
    name: "Rafael C.",
    role: "Analista de TI · Brasília, DF",
    verified: "Compra verificada",
    text: "Comprei sem muita expectativa pelo preço baixo. Fiquei surpreso: o hub de ferramentas sozinho já pagou o investimento. Parei de perder 40 minutos por dia procurando qual IA usar para cada tarefa."
  },
  {
    initials: "CL",
    color: "#1d4ed8",
    name: "Camila L.",
    role: "Gestora de Projetos · São Paulo, SP",
    verified: "Compra verificada",
    text: "O que me fisgou foi a seção de engenharia de contexto. Não é sobre prompts prontos — é sobre como estruturar o raciocínio antes de abrir qualquer IA. Mudou como eu conduzo reuniões e entrego relatórios."
  },
  {
    initials: "SM",
    color: "#1e40af",
    name: "Sandra M.",
    role: "Empreendedora · Recife, PE",
    verified: "Compra verificada",
    text: "Tentei outros materiais sobre IA antes. Todos envelheciam em semanas. O Nexus é diferente porque o foco é no processo, não na ferramenta. Três meses depois ainda uso o framework todo dia."
  },
]

const stackItems = [
  { icon:Layers,  title:"Nexus Manual (E-Book Digital)",          value:"R$ 57",       desc:"O guia mestre com toda a teoria e protocolos do sistema." },
  { icon:Network, title:"HUB de Produtividade (7 Dias)",          value:"R$ 49",       desc:"Plano passo a passo para instalar o sistema na sua rotina." },
  { icon:Cpu,     title:"Banco de Prompts Estratégicos",          value:"R$ 19",       desc:"Modelos prontos para delegar tarefas operacionais à IA." },
  { icon:Shield,  title:"Acesso Vitalício + Atualizações",        value:"Inestimável", desc:"Todas as atualizações futuras do framework sem custo adicional." },
  { icon:Brain,   title:"Aulas Gravadas — Do Caos ao Controle",   value:"Bônus",       desc:"Demonstração prática da montagem do seu painel de bordo." },
]

const faqItems = [
  { q:"Isso é mais um curso de ChatGPT?",        a:"Não. Ferramentas mudam toda semana. O Nexus ensina você a estruturar processos — a IA é o motor, não o produto. Incluímos um HUB curado das ferramentas mais relevantes do mercado." },
  { q:"Sou iniciante. Serve para mim?",           a:"Sim. O sistema foi desenhado como guia progressivo: do básico até formas avançadas de uso estratégico da IA, sem pressupor experiência prévia." },
  { q:"O material é vídeo ou texto?",             a:"Você recebe o E-book (consulta rápida), Vídeo-Aulas práticas de implementação, banco de prompts e acesso ao HUB de ferramentas." },
  { q:"Como funciona a garantia de 7 dias?",      a:"Teste o sistema por 7 dias. Se não sentir melhora tangível na sua clareza e produtividade, um e-mail devolve 100% do investimento. Sem burocracia." },
  { q:"Por que o preço está tão baixo?",          a:"O Nexus está em fase de lançamento e queremos que os primeiros usuários ajudem a moldar o produto. Em troca, você acessa tudo por R$ 47,00 e recebe todas as atualizações futuras sem pagar nada a mais. O preço sobe conforme novos módulos forem adicionados." },
]

const NAV_ITEMS = [
  { title:"INÍCIO",      icon:Brain,      id:"hero" },
  { title:"VÍDEO",       icon:PlayCircle, id:"video" },
  { title:"O QUE É?",    icon:Layers,     id:"about" },
  { title:"PILARES",     icon:Cpu,        id:"bento" },
  { title:"O QUE RECEBE",icon:Zap,        id:"stack" },
  { title:"GARANTIA",    icon:Shield,     id:"offer" },
]

// ── HOOKS ──
function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true) },
      { threshold, rootMargin:'0px 0px -80px 0px' }
    )
    if (ref.current) obs.observe(ref.current)
    return () => ref.current && obs.unobserve(ref.current)
  }, [threshold])
  return [ref, isVisible]
}

const trackCheckout = () => {
  if (typeof window !== 'undefined' && window.fbq) window.fbq('track','InitiateCheckout')
}

// ── MODAL ──
function ManualModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])
  return (
    <div
      onClick={onClose}
      style={{ position:'fixed', inset:0, zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem', background:'rgba(5,8,16,0.9)', backdropFilter:'blur(10px)' }}
    >
      <div onClick={e=>e.stopPropagation()} style={{ position:'relative', width:'100%', maxWidth:'900px', height:'90vh' }}>
        {/* Barra topo */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0.75rem 1.25rem', background:C.navy, border:`1px solid ${C.steel}`, borderBottom:'none', borderRadius:'12px 12px 0 0' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'0.6rem' }}>
            <BookOpen size={16} color={C.sapphire2} />
            <span style={{ color:C.ice, fontWeight:600, fontSize:'0.85rem', letterSpacing:'0.02em' }}>Manual Prático de IA no Dia a Dia</span>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
            <a
              href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={trackCheckout}
              style={{ display:'none', alignItems:'center', gap:'6px', padding:'6px 16px', borderRadius:'6px', background:C.sapphire, color:'#fff', fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.05em', textDecoration:'none', border:`1px solid rgba(255,255,255,0.15)` }}
              className="modal-cta-btn"
            >
              ACESSAR O NEXUS →
            </a>
            <button onClick={onClose} style={{ display:'flex', alignItems:'center', justifyContent:'center', width:'30px', height:'30px', borderRadius:'6px', background:'transparent', border:`1px solid ${C.steel}`, color:C.silver, cursor:'pointer' }}>
              <X size={14} />
            </button>
          </div>
        </div>
        <iframe
          src="/manual-ia-pratico.html"
          title="Manual Prático de IA"
          style={{ width:'100%', height:'calc(90vh - 52px)', border:`1px solid ${C.steel}`, borderTop:'none', borderRadius:'0 0 12px 12px', background:'#f7f5f0', display:'block' }}
        />
      </div>
    </div>
  )
}

// ── HEADER ──
function Header({ onOpenManual }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior:'smooth' })
  }
  return (
    <header style={{ position:'sticky', top:0, zIndex:50, background:'rgba(5,8,16,0.92)', backdropFilter:'blur(16px)', borderBottom:`1px solid ${C.steel}` }}>
      <div style={{ maxWidth:'1280px', margin:'0 auto', height:'64px', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 1rem', gap:'12px' }}>

        {/* LOGO — limitado para não vazar em mobile */}
        <button onClick={()=>scrollTo('hero')} style={{ background:'none', border:'none', cursor:'pointer', flexShrink:0, minWidth:0 }}>
          <img
            src={logoImg}
            alt="Nexus Manual"
            style={{ width:'auto', height:'36px', maxWidth:'140px', objectFit:'contain', display:'block' }}
          />
        </button>

        {/* NAV — só aparece em desktop (lg:) */}
        <nav className="hidden lg:flex" style={{ alignItems:'center', gap:'1.25rem', flex:1, justifyContent:'center' }}>
          {NAV_ITEMS.map(item => (
            <button key={item.id} onClick={()=>scrollTo(item.id)}
              style={{ background:'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', gap:'4px', fontSize:'0.68rem', fontWeight:600, color:C.silver, letterSpacing:'0.08em', textTransform:'uppercase', transition:'color 0.2s', whiteSpace:'nowrap' }}
              onMouseEnter={e=>e.currentTarget.style.color=C.ice}
              onMouseLeave={e=>e.currentTarget.style.color=C.silver}
            >
              <item.icon size={12} color={C.sapphire2} />
              {item.title}
            </button>
          ))}
          <button onClick={onOpenManual}
            style={{ display:'flex', alignItems:'center', gap:'5px', padding:'5px 12px', borderRadius:'6px', border:`1px solid ${C.steel}`, background:'transparent', color:C.sapphire2, fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.06em', cursor:'pointer', whiteSpace:'nowrap' }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=C.sapphire2; e.currentTarget.style.color=C.ice}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor=C.steel; e.currentTarget.style.color=C.sapphire2}}
          >
            <BookOpen size={12} /> MANUAL GRÁTIS
          </button>
        </nav>

        {/* BOTÃO CTA — compacto em mobile */}
        <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={trackCheckout}
          style={{ flexShrink:0, padding:'9px 16px', borderRadius:'7px', background:C.sapphire, color:'#fff', fontWeight:700, fontSize:'0.72rem', letterSpacing:'0.05em', textDecoration:'none', border:'1px solid rgba(255,255,255,0.15)', whiteSpace:'nowrap' }}
          onMouseEnter={e=>e.currentTarget.style.background=C.sapphire2}
          onMouseLeave={e=>e.currentTarget.style.background=C.sapphire}
        >
          ACESSO
        </a>
      </div>
    </header>
  )
}

// ── APP ──
export default function App() {
  const [heroRef,    heroV]    = useScrollAnimation()
  const [videoRef,   videoV]   = useScrollAnimation(0.15)
  const [aboutRef,   aboutV]   = useScrollAnimation(0.15)
  const [bentoRef,   bentoV]   = useScrollAnimation(0.08)
  const [stackRef,   stackV]   = useScrollAnimation(0.08)
  const [reviewsRef, reviewsV] = useScrollAnimation(0.08)
  const [offerRef,   offerV]   = useScrollAnimation(0.08)

  const [activeFeature, setActiveFeature] = useState(bentoFeatures[0])
  const [openFAQ,       setOpenFAQ]       = useState(null)
  const [showManual,    setShowManual]    = useState(false)

  const trans = (vis) => ({ transition:'all 0.8s ease', opacity:vis?1:0, transform:vis?'translateY(0)':'translateY(24px)' })

  return (
    <div style={{ minHeight:'100vh', background:C.ink, color:C.ice, fontFamily:'Inter, sans-serif', overflowX:'hidden' }}>

      {showManual && <ManualModal onClose={()=>setShowManual(false)} />}

      <Header onOpenManual={()=>setShowManual(true)} />

      {/* ── BANNER TOPO ── */}
      <div className="horizontal-banner-wrapper">
        <div className="horizontal-banner">
          <div className="banner-content">
            {['OFERTA DE LANÇAMENTO','ACESSO VITALÍCIO','GARANTIA DE 7 DIAS','BLUEPRINT DE 7 DIAS','PREÇO ESPECIAL'].flatMap((t,i)=>[
              <span key={i}  className="banner-item"><Zap size={12}/>{t}</span>,
              <span key={i+'b'} className="banner-item"><Zap size={12}/>{t}</span>,
            ])}
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <section id="hero" ref={heroRef} style={{ position:'relative', zIndex:10, paddingTop:'100px', paddingBottom:'120px', textAlign:'center', overflow:'hidden' }}>
        {/* fundo sutil */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
          <div style={{ position:'absolute', top:'-20%', left:'50%', transform:'translateX(-50%)', width:'800px', height:'600px', background:'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)', borderRadius:'50%' }}/>
          <img src={brainNetworkImg} alt="" aria-hidden style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', opacity:0.06, filter:'grayscale(80%) contrast(1.2)' }}/>
        </div>

        <div style={{ ...trans(heroV), maxWidth:'800px', margin:'0 auto', padding:'0 1.5rem', position:'relative' }}>
          {/* eyebrow */}
          <div style={{ display:'inline-flex', alignItems:'center', gap:'10px', marginBottom:'28px', padding:'7px 18px', border:`1px solid ${C.steel}`, borderRadius:'999px', background:C.navy }}>
            <span style={{ width:'7px', height:'7px', borderRadius:'50%', background:C.sapphire, display:'inline-block', boxShadow:`0 0 8px ${C.sapphire}` }}/>
            <span className="eyebrow">O Sistema Operacional para Alta Performance</span>
          </div>

          <h1 style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'clamp(3rem,8vw,5.5rem)', fontWeight:800, lineHeight:1.0, letterSpacing:'-0.04em', color:C.ice, marginBottom:'16px' }} className="neon-text">
            NEXUS MANUAL
          </h1>

          {/* linha assinatura */}
          <div className="hero-rule" style={{ margin:'24px auto', maxWidth:'400px' }}/>

          <h2 style={{ fontSize:'clamp(1.2rem,3vw,1.75rem)', fontWeight:500, color:C.silver, lineHeight:1.4, marginBottom:'20px', letterSpacing:'-0.01em' }}>
            Alta Performance na Era da{' '}
            <span style={{ color:C.ice, fontWeight:700 }}>Sobrecarga Cognitiva</span>
          </h2>

          <p style={{ fontSize:'1.05rem', color:C.silver, maxWidth:'580px', margin:'0 auto 44px', lineHeight:1.75 }}>
            Framework estratégico para profissionais que exigem{' '}
            <span style={{ color:C.ice, fontWeight:600 }}>decisões mais precisas</span> e a integração da IA como extensão natural da inteligência.
          </p>

          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'14px' }}>
            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={trackCheckout}
              style={{ display:'inline-flex', alignItems:'center', gap:'10px', padding:'16px 36px', borderRadius:'8px', background:C.sapphire, color:'#fff', fontWeight:700, fontSize:'0.95rem', letterSpacing:'0.06em', textDecoration:'none', border:'1px solid rgba(255,255,255,0.15)', transition:'background 0.2s, box-shadow 0.2s', width:'100%', maxWidth:'420px', justifyContent:'center' }}
              onMouseEnter={e=>{e.currentTarget.style.background=C.sapphire2; e.currentTarget.style.boxShadow=`0 0 32px rgba(37,99,235,0.35)`}}
              onMouseLeave={e=>{e.currentTarget.style.background=C.sapphire; e.currentTarget.style.boxShadow='none'}}
            >
              ACESSAR O SISTEMA AGORA <ArrowRight size={18}/>
            </a>

            <button onClick={()=>setShowManual(true)}
              style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'12px 24px', borderRadius:'8px', border:`1px solid ${C.steel}`, background:'transparent', color:C.silver, fontSize:'0.85rem', fontWeight:500, cursor:'pointer', letterSpacing:'0.02em', transition:'all 0.2s' }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=C.sapphire2; e.currentTarget.style.color=C.ice}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=C.steel; e.currentTarget.style.color=C.silver}}
            >
              <BookOpen size={15}/> Ver Manual Gratuito de IA no Dia a Dia
            </button>

            <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'20px', fontSize:'0.78rem', color:C.silver, marginTop:'4px' }}>
              <span style={{ display:'flex', alignItems:'center', gap:'6px' }}><Shield size={13} color={C.sapphire2}/> Compra Segura</span>
              <span style={{ display:'flex', alignItems:'center', gap:'6px' }}><Rocket size={13} color={C.sapphire2}/> Acesso Imediato</span>
              <span style={{ display:'flex', alignItems:'center', gap:'6px' }}><CheckCircle size={13} color={C.sapphire2}/> Garantia 7 Dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── VÍDEO ── */}
      <section id="video" ref={videoRef} style={{ position:'relative', zIndex:10, padding:'80px 1.5rem', background:C.navy }}>
        <div style={{ ...trans(videoV), maxWidth:'960px', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'48px' }}>
            <div className="eyebrow" style={{ marginBottom:'12px' }}>Demonstração</div>
            <h2 style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'clamp(1.6rem,4vw,2.4rem)', fontWeight:700, color:C.ice, letterSpacing:'-0.03em', marginBottom:'14px' }}>
              <span className="dynamic-gradient">Veja o Sistema Nexus em Ação</span>
            </h2>
            <p style={{ color:C.silver, fontSize:'1rem', maxWidth:'520px', margin:'0 auto' }}>
              Demonstração de <strong style={{ color:C.ice }}>2 minutos</strong> — entenda como o Nexus transforma produtividade em resultado mensurável.
            </p>
          </div>

          {/* Player */}
          <div style={{ position:'relative', borderRadius:'12px', overflow:'hidden', border:`1px solid ${C.steel}`, boxShadow:`0 32px 64px rgba(0,0,0,0.4)` }}>
            <div style={{ position:'relative', aspectRatio:'16/9', background:C.ink }}>
              <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:'12px' }}>
                <PlayCircle size={48} color={C.sapphire2} style={{ opacity:0.5 }}/>
                <span style={{ color:C.silver, fontSize:'0.85rem' }}>Carregando vídeo...</span>
              </div>
              <iframe width="100%" height="100%"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=0&rel=0&modestbranding=1`}
                title="Nexus Manual — Demonstração" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} loading="lazy"
              />
            </div>
            <div style={{ padding:'20px 24px', background:C.navy, borderTop:`1px solid ${C.steel}`, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'12px' }}>
              <div>
                <div style={{ fontWeight:600, color:C.ice, fontSize:'0.95rem' }}>Demonstração do Sistema Nexus</div>
                <div style={{ color:C.silver, fontSize:'0.78rem', marginTop:'2px' }}>Visão geral do framework · Duração: 2:15</div>
              </div>
              <span style={{ padding:'5px 14px', borderRadius:'999px', border:`1px solid ${C.sapphire}`, color:C.sapphire2, fontSize:'0.75rem', fontWeight:600 }}>
                Demonstração Prática
              </span>
            </div>
          </div>

          {/* Stats — dados reais do produto, não métricas inventadas */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'12px', marginTop:'32px' }}>
            {[
              ['5 módulos','Estrutura completa'],
              ['+30 ferramentas','No HUB curado'],
              ['7 dias','Para ver resultado'],
              ['Vitalício','Sem mensalidade'],
            ].map(([v,l],i)=>(
              <div key={i} style={{ textAlign:'center', padding:'20px 12px', background:C.ink, border:`1px solid ${C.steel}`, borderRadius:'10px' }}>
                <div style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'1.1rem', fontWeight:800, color:C.sapphire2, lineHeight:1.2 }}>{v}</div>
                <div style={{ color:C.silver, fontSize:'0.72rem', marginTop:'6px', letterSpacing:'0.04em' }}>{l}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign:'center', marginTop:'40px' }}>
            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={trackCheckout}
              style={{ display:'inline-flex', alignItems:'center', gap:'10px', padding:'15px 36px', borderRadius:'8px', background:C.sapphire, color:'#fff', fontWeight:700, fontSize:'0.9rem', letterSpacing:'0.05em', textDecoration:'none', border:'1px solid rgba(255,255,255,0.1)' }}
              onMouseEnter={e=>e.currentTarget.style.background=C.sapphire2}
              onMouseLeave={e=>e.currentTarget.style.background=C.sapphire}
            >
              APLICAR O SISTEMA NA MINHA ROTINA <ArrowRight size={17}/>
            </a>
          </div>
        </div>
      </section>

      {/* ── PROVA SOCIAL ── */}
      <div style={{ borderTop:`1px solid ${C.steel}`, borderBottom:`1px solid ${C.steel}`, padding:'28px 1.5rem', background:C.ink }}>
        <div style={{ maxWidth:'1000px', margin:'0 auto', textAlign:'center' }}>
          <div className="eyebrow" style={{ marginBottom:'20px', color:C.silver }}>Aplicado por profissionais de</div>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'12px' }}>
            {[
              'Tecnologia da Informação',
              'Gestão e Projetos',
              'Marketing Digital',
              'Segurança Pública',
              'Educação',
              'Empreendedorismo',
            ].map((n,i)=>(
              <span key={i} style={{
                fontSize:'0.75rem', fontWeight:600, color:C.silver,
                fontFamily:'Space Grotesk, sans-serif',
                padding:'6px 14px', borderRadius:'999px',
                border:`1px solid ${C.steel}`,
                background:`rgba(28,46,74,0.5)`,
                letterSpacing:'0.04em'
              }}>{n}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── O QUE É ── */}
      <section id="about" ref={aboutRef} style={{ position:'relative', zIndex:10, padding:'96px 1.5rem' }}>
        <div style={{ ...trans(aboutV), maxWidth:'900px', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'60px' }}>
            <div className="eyebrow" style={{ marginBottom:'14px' }}>Sobre o Produto</div>
            <h2 style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'clamp(1.8rem,4vw,2.8rem)', fontWeight:700, color:C.ice, letterSpacing:'-0.03em', marginBottom:'16px' }}>
              <span className="dynamic-gradient">O que é o Nexus?</span>
            </h2>
            <p style={{ color:C.silver, fontSize:'1.05rem', maxWidth:'640px', margin:'0 auto', lineHeight:1.75 }}>
              Não é apenas um e-book. É o seu novo <strong style={{ color:C.ice }}>ecossistema de produtividade</strong> — projetado para profissionais que precisam de clareza em meio à velocidade das mudanças tecnológicas.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }} className="md:grid-cols-2 grid-cols-1">
            {[
              { icon:CpuIcon, label:'O HARDWARE', sub:'(Sua Biologia)', color:C.sapphire2, text:'Energia, foco, estado mental — a base que nenhuma estratégia sustenta sem ela.' },
              { icon:Layers,  label:'O SOFTWARE', sub:'(Sua Estratégia)', color:C.ice,     text:'Direção, decisão, forma de pensar. É isso que transforma esforço em resultado real.' },
            ].map((c,i)=>(
              <div key={i} className="nexus-card" style={{ padding:'32px 28px' }}>
                <div style={{ width:'44px', height:'44px', background:`rgba(37,99,235,0.1)`, border:`1px solid ${C.sapphire}33`, borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'18px' }}>
                  <c.icon size={22} color={c.color}/>
                </div>
                <h3 style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'1.15rem', fontWeight:700, color:C.ice, marginBottom:'4px' }}>{c.label}</h3>
                <div style={{ fontSize:'0.8rem', color:C.silver, marginBottom:'12px', letterSpacing:'0.04em' }}>{c.sub}</div>
                <p style={{ color:C.silver, fontSize:'0.95rem', lineHeight:1.7 }}>{c.text}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop:'20px', padding:'24px 28px', background:C.navy, border:`1px solid ${C.steel}`, borderRadius:'10px', textAlign:'center' }}>
            <p style={{ color:C.ice, fontSize:'1rem', fontWeight:500, lineHeight:1.6 }}>
              Dois eixos: <span className="animated-gradient-title" style={{ fontWeight:700 }}>Otimizar seus processos (Hardware)</span> e{' '}
              <span className="animated-gradient-title" style={{ fontWeight:700 }}>Amplificar seu entendimento (Software).</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── 5 PILARES ── */}
      <section id="bento" ref={bentoRef} style={{ position:'relative', zIndex:10, padding:'80px 1.5rem', background:C.navy }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'64px' }}>
            <div className="eyebrow" style={{ marginBottom:'14px' }}>Framework</div>
            <h2 style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'clamp(1.8rem,5vw,3rem)', fontWeight:800, letterSpacing:'-0.04em', marginBottom:'14px' }}>
              <span className="gradient-blue-green glow-text">Os 5 Pilares do Protocolo</span>
            </h2>
            <p style={{ color:C.silver, fontSize:'1rem', maxWidth:'480px', margin:'0 auto' }}>
              Sistema integrado de produtividade, metodologia e tecnologia.
            </p>
          </div>

          <div style={{ ...trans(bentoV) }} className="bento-grid">
            {bentoFeatures.map((item,i)=>(
              <div key={i}
                onClick={()=>setActiveFeature(item)}
                className={item.colSpan}
                style={{
                  position:'relative', borderRadius:'12px', overflow:'hidden', cursor:'pointer', minHeight:'220px',
                  border: activeFeature?.title===item.title ? `1px solid ${C.sapphire}` : `1px solid ${C.steel}`,
                  boxShadow: activeFeature?.title===item.title ? `0 0 32px rgba(37,99,235,0.2)` : 'none',
                  transition:'all 0.3s ease',
                }}
              >
                {item.bgImage && (
                  <div style={{ position:'absolute', inset:0 }}>
                    <img src={item.bgImage} alt="" aria-hidden style={{ width:'100%', height:'100%', objectFit:'cover', opacity:0.15, filter:'grayscale(60%)', transition:'opacity 0.4s' }}/>
                    <div style={{ position:'absolute', inset:0, background:`linear-gradient(to top, ${C.ink} 40%, transparent 100%)` }}/>
                  </div>
                )}
                <div style={{ position:'relative', zIndex:2, padding:'28px 24px', height:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
                  <div style={{ width:'40px', height:'40px', background:`rgba(37,99,235,${activeFeature?.title===item.title?'0.2':'0.08'})`, border:`1px solid ${activeFeature?.title===item.title?C.sapphire:C.steel}`, borderRadius:'9px', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'14px' }}>
                    <item.icon size={20} color={activeFeature?.title===item.title ? C.sapphire2 : C.silver}/>
                  </div>
                  <h3 style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'1rem', fontWeight:700, color: activeFeature?.title===item.title ? C.ice : C.ice, marginBottom:'8px', lineHeight:1.3 }}>{item.title}</h3>
                  <p style={{ fontSize:'0.85rem', color:C.silver, lineHeight:1.65 }}>{item.desc}</p>
                  {activeFeature?.title===item.title && (
                    <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={e=>{e.stopPropagation();trackCheckout()}}
                      style={{ display:'inline-flex', alignItems:'center', gap:'4px', marginTop:'14px', fontSize:'0.78rem', fontWeight:700, color:C.sapphire2, textDecoration:'none', letterSpacing:'0.05em' }}>
                      ACESSAR O SISTEMA <ChevronRight size={14}/>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign:'center', marginTop:'48px' }}>
            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={trackCheckout}
              style={{ display:'inline-flex', alignItems:'center', gap:'10px', padding:'16px 40px', borderRadius:'8px', background:C.sapphire, color:'#fff', fontWeight:700, fontSize:'0.9rem', letterSpacing:'0.05em', textDecoration:'none', border:'1px solid rgba(255,255,255,0.12)' }}
              onMouseEnter={e=>e.currentTarget.style.background=C.sapphire2}
              onMouseLeave={e=>e.currentTarget.style.background=C.sapphire}
            >
              QUERO OS 5 PILARES AGORA <ArrowRight size={17}/>
            </a>
          </div>
        </div>
      </section>

      {/* ── BANNER MID ── */}
      <div className="horizontal-banner-mid-section">
        <div className="horizontal-banner-wrapper" style={{ background:C.steel, opacity:1, borderColor:`rgba(37,99,235,0.2)` }}>
          <div className="horizontal-banner">
            <div className="banner-content" style={{ animationDuration:'20s' }}>
              {['BIOHACKING DO FOCO','METODOLOGIAS ATIVAS','DEEP WORK','INTELIGÊNCIA ESTRATÉGICA'].flatMap((t,i)=>[
                <span key={i}   className="banner-item"><BrainIcon size={13}/>{t}</span>,
                <span key={i+'b'} className="banner-item"><BrainIcon size={13}/>{t}</span>,
              ])}
            </div>
          </div>
        </div>
      </div>

      {/* ── O QUE VOCÊ RECEBE ── */}
      <section id="stack" ref={stackRef} style={{ position:'relative', zIndex:10, padding:'96px 1.5rem' }}>
        <div style={{ ...trans(stackV), maxWidth:'820px', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <div className="eyebrow" style={{ marginBottom:'14px' }}>Conteúdo</div>
            <h2 style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'clamp(1.6rem,4vw,2.4rem)', fontWeight:700, color:C.ice, letterSpacing:'-0.03em', marginBottom:'14px' }}>
              <span className="animated-gradient-title">O que você recebe</span>
            </h2>
            <div style={{ display:'inline-block', padding:'10px 24px', border:`1px solid ${C.steel}`, borderRadius:'8px', background:C.navy }}>
              <span className="shimmer-title" style={{ fontSize:'1rem', fontWeight:700 }}>PACOTE NEXUS — ACESSO VITALÍCIO</span>
            </div>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
            {stackItems.map((item,i)=>(
              <div key={i} className="nexus-card" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'20px 24px', flexWrap:'wrap', gap:'12px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'16px' }}>
                  <div style={{ width:'40px', height:'40px', flexShrink:0, background:'rgba(37,99,235,0.08)', border:`1px solid ${C.sapphire}33`, borderRadius:'9px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <item.icon size={18} color={C.sapphire2}/>
                  </div>
                  <div>
                    <div style={{ fontWeight:600, color:C.ice, fontSize:'0.95rem' }}>{item.title}</div>
                    <div style={{ color:C.silver, fontSize:'0.82rem', marginTop:'2px' }}>{item.desc}</div>
                  </div>
                </div>
                <div style={{ padding:'5px 16px', borderRadius:'999px', border:`1px solid ${C.sapphire}44`, background:`rgba(37,99,235,0.08)`, color:C.sapphire2, fontSize:'0.8rem', fontWeight:700, fontFamily:'Space Grotesk, sans-serif', whiteSpace:'nowrap' }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop:'48px', textAlign:'center' }}>
            {/* Aviso de janela de acesso */}
            <div style={{ padding:'16px 24px', background:'rgba(37,99,235,0.06)', border:`1px solid ${C.sapphire}44`, borderRadius:'10px', marginBottom:'20px', display:'flex', alignItems:'flex-start', gap:'12px', textAlign:'left' }}>
              <Shield size={18} color={C.sapphire2} style={{ flexShrink:0, marginTop:'2px' }}/>
              <div>
                <div style={{ color:C.ice, fontWeight:600, fontSize:'0.88rem', marginBottom:'3px' }}>Período de acesso antecipado</div>
                <div style={{ color:C.silver, fontSize:'0.82rem', lineHeight:1.6 }}>
                  O Nexus está em fase de lançamento. O preço atual é válido para os primeiros compradores — o valor sobe conforme o produto ganha atualizações e novos módulos.
                </div>
              </div>
            </div>

            <div style={{ padding:'20px 24px', background:C.navy, border:`1px solid ${C.steel}`, borderRadius:'10px', marginBottom:'28px' }}>
              <div style={{ color:C.silver, fontSize:'0.85rem', marginBottom:'6px' }}>Valor total do stack</div>
              <div style={{ fontSize:'1.4rem', fontWeight:700, color:'#EF4444', textDecoration:'line-through' }}>R$ 641,00</div>
            </div>

            <div style={{ marginBottom:'28px' }}>
              <div style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'clamp(2rem,5vw,3rem)', fontWeight:800, color:C.ice, letterSpacing:'-0.03em' }}>
                R$ 19<span style={{ fontSize:'1.2rem', color:C.silver }}>,90</span>
              </div>
              <div style={{ color:C.silver, fontSize:'0.85rem', marginTop:'4px' }}>ou 12× de R$ 6,80 · pagamento único, sem mensalidades</div>
              <div className="eyebrow" style={{ marginTop:'10px', color:C.sapphire2 }}>Preço de acesso antecipado</div>
            </div>

            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={trackCheckout}
              style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', gap:'10px', padding:'18px 44px', borderRadius:'8px', background:C.sapphire, color:'#fff', fontWeight:700, fontSize:'0.95rem', letterSpacing:'0.05em', textDecoration:'none', border:'1px solid rgba(255,255,255,0.12)', width:'100%', maxWidth:'480px' }}
              onMouseEnter={e=>e.currentTarget.style.background=C.sapphire2}
              onMouseLeave={e=>e.currentTarget.style.background=C.sapphire}
            >
              GARANTIR MEU ACESSO ANTECIPADO <ArrowRight size={18}/>
            </a>

            <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'20px', marginTop:'18px', fontSize:'0.78rem', color:C.silver }}>
              {[['Acesso imediato via e-mail',Shield],['Compra 100% segura',CheckCircle],['Garantia de 7 dias',Rocket]].map(([t,Icon],i)=>(
                <span key={i} style={{ display:'flex', alignItems:'center', gap:'5px' }}><Icon size={13} color={C.sapphire2}/>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section id="reviews" ref={reviewsRef} style={{ padding:'80px 1.5rem', background:C.navy, borderTop:`1px solid ${C.steel}`, borderBottom:`1px solid ${C.steel}` }}>
        <div style={{ ...trans(reviewsV), maxWidth:'1100px', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <div className="eyebrow" style={{ marginBottom:'12px' }}>O que dizem os usuários</div>
            <h2 style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'clamp(1.6rem,4vw,2.2rem)', fontWeight:700, color:C.ice, letterSpacing:'-0.03em' }}>
              <span className="dynamic-gradient">Quem já implementou o sistema</span>
            </h2>
            <p style={{ color:C.silver, fontSize:'0.88rem', marginTop:'12px' }}>
              Primeiros usuários do período de acesso antecipado
            </p>
          </div>

          <div style={{ display:'grid', gap:'14px' }} className="grid-cols-1 md:grid-cols-3">
            {testimonials.map((item,i)=>(
              <div key={i} className="nexus-card" style={{ padding:'28px 24px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                <div>
                  {/* estrelas */}
                  <div style={{ display:'flex', gap:'3px', marginBottom:'16px' }}>
                    {[...Array(5)].map((_,j)=><Star key={j} size={14} color={C.sapphire2} fill={C.sapphire2}/>)}
                  </div>
                  <p style={{ color:C.silver, fontSize:'0.9rem', lineHeight:1.75, marginBottom:'20px' }}>"{item.text}"</p>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:'12px', paddingTop:'16px', borderTop:`1px solid ${C.steel}` }}>
                  {/* Avatar com iniciais — sem foto de banco */}
                  <div style={{
                    width:'40px', height:'40px', borderRadius:'50%', flexShrink:0,
                    background: item.color, display:'flex', alignItems:'center', justifyContent:'center',
                    fontFamily:'Space Grotesk, sans-serif', fontWeight:700, fontSize:'0.9rem', color:'#fff',
                    border:`2px solid ${C.steel}`
                  }}>
                    {item.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight:600, color:C.ice, fontSize:'0.88rem' }}>{item.name}</div>
                    <div style={{ color:C.silver, fontSize:'0.72rem', marginTop:'2px' }}>{item.role}</div>
                    <div style={{ display:'flex', alignItems:'center', gap:'4px', marginTop:'3px' }}>
                      <CheckCircle size={11} color="#22c55e"/>
                      <span style={{ color:'#22c55e', fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.04em' }}>{item.verified}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Aviso honesto */}
          <div style={{ marginTop:'28px', textAlign:'center', padding:'14px 20px', background:`rgba(37,99,235,0.04)`, border:`1px solid ${C.steel}`, borderRadius:'8px', maxWidth:'560px', margin:'28px auto 0' }}>
            <p style={{ color:C.silver, fontSize:'0.78rem', lineHeight:1.6 }}>
              Produto em fase de lançamento. Os depoimentos acima são de usuários do período de acesso antecipado.{' '}
              <strong style={{ color:C.ice }}>Você tem 7 dias de garantia</strong> para testar sem risco.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding:'80px 1.5rem' }}>
        <div style={{ maxWidth:'700px', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'48px' }}>
            <div className="eyebrow" style={{ marginBottom:'12px' }}>FAQ</div>
            <h2 style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'clamp(1.6rem,4vw,2.2rem)', fontWeight:700, color:C.ice, letterSpacing:'-0.03em' }}>
              <span className="animated-gradient-title">Perguntas Frequentes</span>
            </h2>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
            {faqItems.map((item,i)=>(
              <div key={i} className="nexus-card" style={{ overflow:'hidden' }}>
                <button onClick={()=>setOpenFAQ(openFAQ===i?null:i)}
                  style={{ width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 24px', background:'none', border:'none', cursor:'pointer', textAlign:'left', color:C.ice }}
                >
                  <span style={{ fontWeight:600, fontSize:'0.95rem', paddingRight:'16px' }}>{item.q}</span>
                  <ChevronRight size={16} color={C.sapphire2} style={{ transform: openFAQ===i ? 'rotate(90deg)' : 'none', transition:'transform 0.2s', flexShrink:0 }}/>
                </button>
                {openFAQ===i && (
                  <div style={{ padding:'0 24px 20px', color:C.silver, fontSize:'0.9rem', lineHeight:1.75, borderTop:`1px solid ${C.steel}`, paddingTop:'16px' }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFERTA FINAL ── */}
      <section id="offer" ref={offerRef} style={{ padding:'96px 1.5rem', background:C.navy, borderTop:`1px solid ${C.steel}` }}>
        <div style={{ ...trans(offerV), maxWidth:'860px', margin:'0 auto', textAlign:'center' }}>
          <Shield size={48} color={C.sapphire2} style={{ margin:'0 auto 24px', display:'block' }} className="float-animation"/>
          <div className="eyebrow" style={{ marginBottom:'14px' }}>Risco Zero</div>
          <h2 style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'clamp(1.8rem,5vw,3rem)', fontWeight:800, color:C.ice, letterSpacing:'-0.04em', marginBottom:'16px' }}>
            <span className="dynamic-gradient glow-text">Garantia de 7 Dias</span>
          </h2>
          <p style={{ color:C.silver, fontSize:'1rem', maxWidth:'560px', margin:'0 auto 56px', lineHeight:1.8 }}>
            Teste o sistema por 7 dias. Se não sentir melhora tangível na sua clareza e produtividade,{' '}
            <strong style={{ color:C.ice }}>um e-mail devolve 100% do investimento.</strong> O risco é inteiramente nosso.
          </p>

          <div style={{ background:C.ink, border:`1px solid ${C.sapphire}55`, borderRadius:'16px', padding:'48px 40px', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:`linear-gradient(90deg, transparent, ${C.sapphire}, transparent)` }}/>
            
            <h3 style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'1.4rem', fontWeight:700, color:C.ice, marginBottom:'6px' }}>
              <span className="shimmer-title">Preço de Lançamento — Acesso Vitalício</span>
            </h3>
            <p className="eyebrow" style={{ marginBottom:'36px', color:C.silver }}>Todos os bônus incluídos</p>

            <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'24px', marginBottom:'36px' }}>
              <img src={produtoImg} alt="Nexus Pack" style={{ width:'180px', borderRadius:'10px', border:`1px solid ${C.steel}`, boxShadow:`0 20px 48px rgba(0,0,0,0.5)`, transform:'rotate(-2deg)' }} className="product-image"/>
              <div>
                <div style={{ fontFamily:'Space Grotesk, sans-serif', fontSize:'3.5rem', fontWeight:900, color:C.ice, lineHeight:1, letterSpacing:'-0.04em' }}>
                  R$ 19<span style={{ fontSize:'1.5rem', color:C.silver }}>,90</span>
                </div>
                <div style={{ color:C.silver, fontSize:'0.85rem', marginTop:'6px' }}>Pagamento único · Sem mensalidades</div>
                <div style={{ display:'flex', flexDirection:'column', gap:'6px', marginTop:'16px', textAlign:'left' }}>
                  {['E-book Digital + Vídeo-Aulas','Blueprint de Implementação (7 Dias)','Banco de Prompts Estratégicos','Atualizações Vitalícias Inclusas'].map((t,i)=>(
                    <div key={i} style={{ display:'flex', alignItems:'center', gap:'8px', fontSize:'0.85rem', color:C.silver }}>
                      <Check size={14} color={C.sapphire2}/>{t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" onClick={trackCheckout}
              style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', padding:'18px 44px', borderRadius:'8px', background:C.sapphire, color:'#fff', fontWeight:700, fontSize:'1rem', letterSpacing:'0.05em', textDecoration:'none', border:'1px solid rgba(255,255,255,0.12)', maxWidth:'480px', margin:'0 auto', width:'100%' }}
              onMouseEnter={e=>e.currentTarget.style.background=C.sapphire2}
              onMouseLeave={e=>e.currentTarget.style.background=C.sapphire}
            >
              ACESSAR MEU SISTEMA NEXUS AGORA <ArrowRight size={18}/>
            </a>
          </div>
        </div>
      </section>

      {/* ── BOTÃO FLUTUANTE ── */}
      <button onClick={()=>setShowManual(true)}
        style={{ position:'fixed', bottom:'24px', left:'24px', zIndex:40, display:'flex', alignItems:'center', gap:'8px', padding:'10px 18px', borderRadius:'8px', background:C.navy, border:`1px solid ${C.steel}`, color:C.silver, fontSize:'0.78rem', fontWeight:600, cursor:'pointer', letterSpacing:'0.06em', boxShadow:`0 8px 24px rgba(0,0,0,0.4)`, transition:'border-color 0.2s, color 0.2s' }}
        onMouseEnter={e=>{e.currentTarget.style.borderColor=C.sapphire2; e.currentTarget.style.color=C.ice}}
        onMouseLeave={e=>{e.currentTarget.style.borderColor=C.steel; e.currentTarget.style.color=C.silver}}
      >
        <BookOpen size={14}/> <span className="hidden sm:inline">MANUAL GRÁTIS</span>
      </button>

      {/* ── FOOTER ── */}
      <footer style={{ background:C.ink, borderTop:`1px solid ${C.steel}`, padding:'64px 1.5rem 32px' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto', marginBottom:'48px' }} className="footer-grid">
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'16px' }}>
              <Brain size={22} color={C.sapphire2}/>
              <span style={{ fontFamily:'Space Grotesk, sans-serif', fontWeight:700, fontSize:'1.1rem', color:C.ice }}>NEXUS MANUAL</span>
            </div>
            <p style={{ color:C.silver, fontSize:'0.88rem', lineHeight:1.75, maxWidth:'320px' }}>
              O sistema operacional para profissionais que exigem domínio da atenção, decisões precisas e IA como extensão da inteligência.
            </p>
          </div>
          <div>
            <div style={{ fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:C.silver, marginBottom:'16px' }}>Links</div>
            <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
              {['Política de Privacidade','Termos de Uso','Suporte'].map((l,i)=>(
                <a key={i} href="#" style={{ color:C.silver, fontSize:'0.88rem', textDecoration:'none', transition:'color 0.2s' }}
                  onMouseEnter={e=>e.currentTarget.style.color=C.ice}
                  onMouseLeave={e=>e.currentTarget.style.color=C.silver}
                >{l}</a>
              ))}
              <button onClick={()=>setShowManual(true)}
                style={{ background:'none', border:'none', cursor:'pointer', color:C.sapphire2, fontSize:'0.88rem', textAlign:'left', display:'flex', alignItems:'center', gap:'6px', padding:0 }}
              >
                <BookOpen size={13}/> Manual Gratuito
              </button>
            </div>
          </div>
          <div>
            <div style={{ fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:C.silver, marginBottom:'16px' }}>Contato</div>
            <p style={{ color:C.silver, fontSize:'0.88rem', marginBottom:'12px' }}>rodrigoeng857@gmail.com</p>
            <a href="https://instagram.com/nexus0rigin" target="_blank" rel="noopener noreferrer"
              style={{ display:'flex', alignItems:'center', gap:'8px', color:C.silver, textDecoration:'none', fontSize:'0.88rem', transition:'color 0.2s' }}
              onMouseEnter={e=>e.currentTarget.style.color=C.ice}
              onMouseLeave={e=>e.currentTarget.style.color=C.silver}
            >
              <Instagram size={15}/> @nexus0rigin
            </a>
          </div>
        </div>
        <div style={{ borderTop:`1px solid ${C.steel}`, paddingTop:'24px', textAlign:'center' }}>
          <p style={{ color:C.silver, fontSize:'0.78rem', opacity:0.5, marginBottom:'6px' }}>© 2026 Nexus Manual. Todos os direitos reservados.</p>
          <p style={{ color:C.silver, fontSize:'0.72rem', opacity:0.35 }}>Este produto não garante resultados específicos. Os resultados variam de acordo com a dedicação de cada indivíduo.</p>
        </div>
      </footer>

    </div>
  )
}
