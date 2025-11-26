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
                
                {/* Botão Mobile CTA */}
                <a 
                  href={CHECKOUT_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleTrackCheckout}
                  className="lg:hidden"
                >
                  <Button className="bg-[--color-nexus-orange] hover:bg-[--color-nexus-orange]/90 text-white font-bold px-4 py-2 rounded-lg text-sm">
                    COMPRAR AGORA
                  </Button>
                </a>
            </div>
        </header>
    );
}

// --- COMPONENTE PRINCIPAL ---
function App() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Header />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#1a0b2e] z-0"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            DOMINE A <span className="text-[--color-nexus-teal]">INTELIGÊNCIA ARTIFICIAL</span>
            <br />E TENHA UMA 
            <span className="text-[--color-nexus-orange]"> VANTAGEM INJUSTA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            O manual definitivo que vai te ensinar a usar a IA como um sênior. 
            <span className="text-[--color-nexus-teal]"> Estratégias reais</span> que vão te poupar 
            <span className="text-[--color-nexus-orange]"> anos de tentativa e erro</span>.
          </p>

          {/* CTA Principal */}
          <a 
            href={CHECKOUT_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleTrackCheckout}
          >
            <Button className="pulse-button bg-gradient-to-r from-[--color-nexus-teal] to-[--color-nexus-orange] hover:from-[--color-nexus-teal]/90 hover:to-[--color-nexus-orange]/90 text-white font-black text-lg md:text-xl px-12 py-6 rounded-2xl flex items-center gap-3 mx-auto hover:scale-105 transition-transform">
              QUERO MINHA VANTAGEM AGORA
              <ArrowRight className="w-6 h-6" />
            </Button>
          </a>
        </div>
      </section>

      {/* NOVA SEÇÃO: ECOSSISTEMA NEXUS */}
      <section id="ecosystem" className="py-24 px-4 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
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

      {/* BENTO GRID SECTION */}
      <section id="bento" className="py-24 px-4 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              O QUE VOCÊ VAI <span className="text-[--color-nexus-orange]">DOMINAR</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Um sistema completo que vai te transformar em um expert em IA, não apenas um usuário básico
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {bentoFeatures.map((feature, index) => (
              <div
                key={index}
                className={`${feature.colSpan} relative group rounded-3xl overflow-hidden border border-[#333] bg-cover bg-center min-h-[300px] flex flex-col justify-end p-8 transition-all duration-500 hover:scale-[1.02] hover:border-[--color-nexus-teal]`}
                style={{ backgroundImage: `url(${feature.bgImage})` }}
              >
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[--color-nexus-teal] rounded-lg">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK SECTION */}
      <section id="stack" className="py-24 px-4 bg-gradient-to-b from-[#0A0A0A] to-[#0f172a] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              O QUE VOCÊ <span className="text-[--color-nexus-teal]">VAI RECEBER</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Um arsenal completo para sua dominância digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {stackItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-8 hover:border-[--color-nexus-teal] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[--color-nexus-teal] rounded-xl group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-white mb-2">{item.title}</h3>
                    <div className="text-2xl font-black text-[--color-nexus-orange]">{item.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section id="offer" className="py-24 px-4 bg-gradient-to-b from-[#0f172a] to-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#333] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[--color-nexus-teal] rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[--color-nexus-orange] rounded-full filter blur-3xl opacity-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                OFERTA <span className="text-[--color-nexus-orange]">EXCLUSIVA</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Acesso imediato a todo o ecossistema Nexus
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <img src={produtoImg} alt="Pack Nexus" className="w-48 md:w-64 rounded-xl shadow-2xl border border-[#333] rotate-[-5deg] hover:rotate-0 transition-all duration-500" />
                <div className="text-center md:text-left">
                  <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">
                    R$ 47<span className="text-2xl text-gray-400">,00</span>
                  </div>
                  <p className="text-gray-400 mb-4">Pagamento único. Sem mensalidades.</p>
                  <div className="flex flex-col gap-2 items-center md:items-start">
                    <div className="flex items-center text-sm text-gray-300">
                      <Check className="w-4 h-4 text-[--color-nexus-teal] mr-2" /> 
                      Acesso Imediato via E-mail
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Check className="w-4 h-4 text-[--color-nexus-teal] mr-2" /> 
                      Plataforma Segura e Confiável
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Oferta Final */}
              <a 
                href={CHECKOUT_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block max-w-2xl mx-auto"
                onClick={handleTrackCheckout}
              >
                <Button className="pulse-button w-full h-auto py-4 md:py-6 text-white font-extrabold text-lg md:text-2xl rounded-2xl flex items-center justify-center gap-2 md:gap-4 hover:scale-[1.02] transition-transform">
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
