import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import {
  ArrowRight, Zap, Target, Globe, Key, Rocket, Brain, TrendingUp,
  CheckCircle, AlertTriangle, Shield, Users, Star, ChevronRight,
  Terminal, Cpu, Network, Layers, Check
} from 'lucide-react'
import './App.css' 

// --- IMPORTAÇÃO DE IMAGENS (Mantendo as suas existentes) ---
import brainNetworkImg from './assets/1000393266.jpg'
import neuralNetworkImg from './assets/1000393264.jpg'
import laptopNeuralImg from './assets/1000393263.jpg'
import brainAIImg from './assets/1000393262.jpg'
import produtoImg from './assets/produto.jpg'
import fundo02 from './assets/fundo02.jpg'

// Link do Checkout Centralizado
const CHECKOUT_LINK = "https://pay.cakto.com.br/5dUKrWD";

// --- DADOS ESTRUTURADOS ---

// Dados do Bento Grid (Nova estrutura de features)
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

// Dados do Stack (O que está incluso)
const stackItems = [
    { icon: Layers, title: "O Manual Nexus Origin (E-book Premium)", value: "R$ 197" },
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


// --- HOOKS ---
// Hook de Scroll Animation (Mantido e otimizado)
function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Apenas ativa, não desativa para evitar "flicker" ao rolar para cima
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
  // Refs para animações de seção
  const [heroRef, heroVisible] = useScrollAnimation()
  const [painRef, painVisible] = useScrollAnimation(0.2)
  const [bentoRef, bentoVisible] = useScrollAnimation(0.1)
  const [stackRef, stackVisible] = useScrollAnimation(0.1)
  const [reviewsRef, reviewsVisible] = useScrollAnimation(0.1)
  const [offerRef, offerVisible] = useScrollAnimation(0.1)

  return (
    // Adicionado 'selection' para cor de seleção de texto personalizada
    <div className="min-h-screen bg-[#050A0F] font-['Poppins',sans-serif] overflow-x-hidden text-slate-100 selection:bg-[#FF6B35] selection:text-white">
      
      {/* --- BACKGROUND DINÂMICO GLOBAL --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Orbs pulsantes */}
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#4FD1C5]/5 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#FF6B35]/5 rounded-full blur-[100px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          {/* Grid Overlay Sutil */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      </div>

      {/* 1. FAIXA DE URGÊNCIA (SCROLL HORIZONTAL) */}
      <div className="relative z-20 bg-[#0F161E]/80 backdrop-blur-sm border-b border-[#FF6B35]/20 py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-8 text-xs font-medium text-[#FF8E53] tracking-widest">
               <span className="flex items-center"><Zap className="w-3 h-3 mr-2"/>OFERTA DE LANÇAMENTO POR TEMPO LIMITADO</span>
               <span className="flex items-center"><CheckCircle className="w-3 h-3 mr-2"/>ACESSO VITALÍCIO + ATUALIZAÇÕES</span>
               <span className="flex items-center"><Shield className="w-3 h-3 mr-2"/>GARANTIA BLINDADA DE 7 DIAS</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. HERO SECTION REVAMPED (Sem Vídeo, Foco em Copy e Visual Abstrato) */}
      <section ref={heroRef} className="relative z-10 pt-20 pb-32 px-4 overflow-hidden">
        <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge de Autoridade Animado */}
          <div className="inline-flex items-center relative mb-8 group cursor-default">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B35] to-[#4FD1C5] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative px-6 py-2 bg-[#0F161E] border border-[#1C2A35] rounded-full flex items-center gap-3">
               <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4FD1C5] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4FD1C5]"></span>
               </span>
               <span className="text-sm font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-wide">
                 Sistema Operacional de Alta Performance com IA
               </span>
            </div>
          </div>

          {/* Headline Massiva */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8 tracking-tight">
            Domine a IA Antes Que <br />
            <span className="relative whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8E53] to-[#FF6B35] animate-gradient-x">
              Ela Substitua Você.
            </span>
          </h1>

          {/* Subheadline Focada no Benefício */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Pare de correr atrás de ferramentas novas toda semana. Descubra os <span className="text-[#4FD1C5] font-semibold">princípios imutáveis</span> da inteligência artificial que colocarão você no top 1% do mercado pelos próximos 10 anos.
          </p>

          {/* CTA Principal Com Efeito de Glow */}
          <div className="flex flex-col items-center gap-6 animate-scale-in">
            <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="group relative inline-block">
              <div className="absolute -inset-px bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:duration-200 animate-pulse-slow"></div>
              <Button className="relative w-full md:w-auto h-16 px-12 bg-[#FF6B35] hover:bg-[#e05a2b] text-white font-bold text-xl rounded-xl flex items-center justify-center gap-3 transition-transform group-hover:-translate-y-1">
                QUERO ACESSO VITALÍCIO AGORA
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center"><Shield className="w-4 h-4 text-[#4FD1C5] mr-2"/> Compra Segura</span>
              <span className="flex items-center"><Rocket className="w-4 h-4 text-[#4FD1C5] mr-2"/> Acesso Imediato</span>
            </div>
          </div>
        </div>

        {/* Imagem Abstrata de Fundo (Substituindo o vídeo como elemento visual) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl opacity-30 pointer-events-none -z-10 mix-blend-screen">
            <img src={brainNetworkImg} alt="" className="w-full h-auto mask-radial-faded animate-float-slow" />
        </div>
      </section>

      {/* 3. BARRA DE PROVA SOCIAL (Placeholders para Autoridade) */}
      <div className="relative z-10 border-y border-[#1C2A35] bg-[#0F161E]/50 backdrop-blur-md py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
              <p className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-widest">Método utilizado por profissionais de:</p>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
                  {/* Logos Placeholder - Substitua por SVGs reais se tiver */}
                  <div className="text-2xl font-bold font-mono">TECH<span className="text-[#4FD1C5]">CORP</span></div>
                  <div className="text-2xl font-bold font-sans italic">InnovateLabs</div>
                  <div className="text-xl font-bold uppercase tracking-tighter">Future<span className="text-[#FF6B35] font-extrabold">/</span>Work</div>
                  <div className="text-2xl font-semibold">Global<span className="font-light">Systems</span></div>
              </div>
          </div>
      </div>

      {/* 4. A DOR (AGITAÇÃO MODERNA) */}
      <section ref={painRef} className={`relative z-10 py-32 px-4 transition-all duration-1000 delay-200 ${painVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-2 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/30 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                    <img src={fundo02} alt="Caos Digital" className="relative rounded-3xl shadow-2xl border-2 border-[#1C2A35] z-10 rotate-3 group-hover:rotate-0 transition-all duration-700 grayscale hover:grayscale-0" />
                </div>
                <div className="md:col-span-3 space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        A "Corrida dos Ratos" Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8E53]">Está Te Deixando Para Trás.</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Enquanto você gasta horas tentando entender a "ferramenta de IA da semana", os top performers do mercado já estão usando sistemas validados para produzir 10x mais rápido.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start p-4 bg-[#14222E]/50 border border-[#FF6B35]/20 rounded-xl">
                            <AlertTriangle className="w-6 h-6 text-[#FF6B35] mr-4 flex-shrink-0 mt-1" />
                            <span><strong className="text-white">Ansiedade Tecnológica:</strong> A sensação constante de que existe algo novo que você deveria saber, mas não sabe.</span>
                        </li>
                        <li className="flex items-start p-4 bg-[#14222E]/50 border border-[#FF6B35]/20 rounded-xl">
                            <AlertTriangle className="w-6 h-6 text-[#FF6B35] mr-4 flex-shrink-0 mt-1" />
                            <span><strong className="text-white">Medo da Irrelevância:</strong> Ver profissionais mais jovens e menos experientes te ultrapassarem porque dominam a IA.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* 5. A SOLUÇÃO: BENTO GRID (MODERNO E VISUAL) */}
      <section ref={bentoRef} className="relative z-10 py-32 px-4 bg-[#0F161E]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">O Ecossistema <span className="text-[#4FD1C5]">Nexus Origin</span></h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Não é um curso. É um sistema operacional mental para você navegar e liderar na era da Inteligência Artificial.
                </p>
            </div>

            {/* Bento Grid Layout */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${bentoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                {bentoFeatures.map((item, index) => (
                    <div key={index} className={`${item.colSpan} group relative bg-[#14222E] rounded-3xl border border-[#1C2A35] overflow-hidden hover:border-[#4FD1C5]/50 transition-all duration-500`}>
                        {/* Efeito de Hover Glow na Borda */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4FD1C5]/20 via-transparent to-[#FF6B35]/20 blur-xl"></div>
                        </div>

                        {/* Imagem de Fundo (se houver) */}
                        {item.bgImage && (
                            <div className="absolute inset-0 z-0">
                                <img src={item.bgImage} alt="" className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 mix-blend-overlay" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#14222E] via-[#14222E]/80 to-transparent"></div>
                            </div>
                        )}
                        
                        {/* Conteúdo */}
                        <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                            <div className="w-14 h-14 bg-[#0F161E]/80 backdrop-blur-xl border border-[#4FD1C5]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                <item.icon className="w-7 h-7 text-[#4FD1C5]" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#4FD1C5] transition-colors">{item.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 6. O STACK (O QUE ESTÁ INCLUSO) - NOVA SEÇÃO */}
      <section ref={stackRef} className="relative z-10 py-32 px-4">
          <div className="max-w-5xl mx-auto bg-[#14222E]/40 backdrop-blur-xl border border-[#1C2A35] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
              {/* Efeitos de Luz Internos */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4FD1C5]/10 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF6B35]/10 rounded-full blur-[100px] pointer-events-none"></div>

              <div className={`relative z-10 transition-all duration-1000 ${stackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O Arsenal Completo da Sua <span className="text-[#FF6B35]">Nova Carreira</span></h2>
                  
                  <div className="space-y-6">
                      {stackItems.map((item, index) => (
                          <div key={index} className="flex flex-col md:flex-row items-center justify-between p-6 bg-[#0F161E]/60 border border-[#1C2A35] rounded-2xl hover:border-[#FF6B35]/50 transition-colors duration-300 group" style={{transitionDelay: `${index * 100}ms`}}>
                              <div className="flex items-center gap-6 mb-4 md:mb-0">
                                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FF8E53] rounded-xl flex items-center justify-center shadow-lg shadow-[#FF6B35]/20 group-hover:scale-110 transition-transform">
                                      <item.icon className="w-6 h-6 text-white" />
                                  </div>
                                  <h3 className="text-xl font-bold">{item.title}</h3>
                              </div>
                              <div className="px-6 py-2 bg-[#1C2A35] rounded-full text-[#4FD1C5] font-mono font-bold border border-[#4FD1C5]/20">
                                  {item.value}
                              </div>
                          </div>
                      ))}
                  </div>

                  <div className="mt-16 text-center">
                      <p className="text-xl text-gray-400 mb-6">Valor Total do Stack: <span className="line-through">R$ 641,00</span></p>
                      <p className="text-3xl md:text-5xl font-extrabold text-white mb-8">
                          Hoje por apenas: <span className="text-[#4FD1C5]">R$ 37,00</span>
                      </p>
                      <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-md">
                        <Button className="w-full h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#e05a2b] hover:to-[#e07a46] text-white font-bold text-xl rounded-xl shadow-2xl shadow-[#FF6B35]/20 flex items-center justify-center gap-3 pulse-button animate-bounce-slow">
                            GARANTIR MEU ARSENAL AGORA
                        </Button>
                    </a>
                  </div>
              </div>
          </div>
      </section>

      {/* 7. TESTEMUNHOS (PROVA SOCIAL) - NOVA SEÇÃO */}
      <section ref={reviewsRef} className="relative z-10 py-24 px-4 bg-[#0F161E] border-y border-[#1C2A35]">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${reviewsVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O Que Estão Falando do <span className="text-[#4FD1C5]">Método Nexus</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((_, i) => (
                    <div key={i} className="p-8 bg-[#14222E] border border-[#1C2A35] rounded-3xl relative">
                        <div className="absolute -top-4 left-8 text-[#FF6B35] text-6xl opacity-20">"</div>
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-[#FF6B35] fill-current" />)}
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">"O material é direto ao ponto. Em uma tarde eu já estava aplicando conceitos que economizaram horas da minha semana. O melhor investimento que fiz esse ano."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-700 rounded-full"></div> {/* Placeholder Avatar */}
                            <div>
                                <h4 className="font-bold text-white">Carlos M.</h4>
                                <p className="text-sm text-gray-500">Analista de Marketing</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 8. FAQ (PERGUNTAS FREQUENTES) - NOVA SEÇÃO */}
      <section className="relative z-10 py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
            <div className="space-y-4">
                {faqItems.map((item, index) => (
                    <div key={index} className="bg-[#14222E]/50 border border-[#1C2A35] rounded-2xl overflow-hidden hover:border-[#4FD1C5]/30 transition-colors">
                        {/* Usando details/summary nativo para um accordion simples sem JS extra */}
                        <details className="group">
                            <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                                <h3 className="text-lg font-bold text-white">{item.q}</h3>
                                <ChevronRight className="w-5 h-5 text-[#4FD1C5] transform group-open:rotate-90 transition-transform" />
                            </summary>
                            <div className="px-6 pb-6 pt-2 text-gray-300 leading-relaxed border-t border-[#1C2A35]/50 bg-[#0F161E]/30">
                                {item.a}
                            </div>
                        </details>
                    </div>
                ))}
            </div>
          </div>
      </section>

      {/* 9. OFERTA FINAL & GARANTIA */}
      <section ref={offerRef} className="relative z-10 py-32 px-4 overflow-hidden">
        {/* Fundo gradiente intenso para a oferta final */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B35]/10 to-transparent pointer-events-none"></div>
        
        <div className={`max-w-4xl mx-auto text-center relative z-20 transition-all duration-1000 ${offerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="mb-12">
                 <Shield className="w-20 h-20 text-[#4FD1C5] mx-auto mb-6 animate-pulse-slow" />
                 <h2 className="text-4xl md:text-5xl font-bold mb-6">Garantia Blindada de 7 Dias</h2>
                 <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                     O risco é todo nosso. Acesse o material, aplique os blueprints. Se você não sentir que isso vale 10x o que você pagou, envie um único e-mail e devolvemos 100% do seu dinheiro.
                 </p>
            </div>

            <div className="bg-[#14222E] border-2 border-[#FF6B35] rounded-[3rem] p-12 shadow-2xl shadow-[#FF6B35]/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
                
                <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-2">Última Chance para Garantir o Preço de Lançamento</h3>
                    <p className="text-[#FF8E53] font-medium mb-8 uppercase tracking-wider">Acesso Vitalício + Bônus Exclusivos</p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                        <img src={produtoImg} alt="Pack Nexus" className="w-64 rounded-xl shadow-2xl border border-[#1C2A35] rotate-[-5deg] group-hover:rotate-0 transition-all duration-500" />
                        <div className="text-left">
                            <div className="text-6xl font-extrabold text-white mb-2">R$ 37<span className="text-2xl text-gray-400">,00</span></div>
                            <p className="text-gray-400 mb-4">Pagamento único. Sem mensalidades.</p>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[#4FD1C5] mr-2" /> Acesso Imediato via E-mail</div>
                                <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[#4FD1C5] mr-2" /> Plataforma Segura e Confiável</div>
                            </div>
                        </div>
                    </div>

                    <a href={CHECKOUT_LINK} target="_blank" rel="noopener noreferrer" className="block max-w-2xl mx-auto">
                        <Button className="w-full h-20 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#e05a2b] hover:to-[#e07a46] text-white font-extrabold text-2xl rounded-2xl shadow-2xl shadow-[#FF6B35]/30 flex items-center justify-center gap-4 pulse-button animate-bounce-slow hover:scale-[1.02] transition-transform">
                            QUERO COMEÇAR AGORA MESMO
                            <ArrowRight className="w-8 h-8" />
                        </Button>
                    </a>
                </div>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#030507] pt-24 pb-12 px-4 border-t border-[#1C2A35] relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                    <Brain className="w-8 h-8 text-[#FF6B35]" />
                    <span className="text-2xl font-bold text-white">NEXUS ORIGIN</span>
                </div>
                <p className="text-gray-500 leading-relaxed max-w-sm mb-6">
                    O manual definitivo para profissionais que desejam liderar a revolução da IA, focado em fundamentos estratégicos e implementação prática.
                </p>
            </div>
            <div>
                <h4 className="text-white font-bold mb-6">Links Úteis</h4>
                <ul className="space-y-3 text-gray-500">
                    <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Termos de Uso</a></li>
                    <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Política de Privacidade</a></li>
                    <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Suporte</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-6">Contato</h4>
                <p className="text-gray-500">suporte@nexusorigin.com</p>
            </div>
        </div>
        <div className="max-w-6xl mx-auto text-center pt-8 border-t border-[#1C2A35]/50">
          <p className="text-gray-600 text-sm mb-4">
            &copy; 2025 Nexus Origin. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs max-w-3xl mx-auto">
            Isenção de responsabilidade: Este produto não garante a obtenção de resultados financeiros. O sucesso depende do esforço, dedicação e capacidade de implementação de cada indivíduo. Os resultados podem variar.
          </p>
        </div>
      </footer>

    </div>
  )
}

export default App
