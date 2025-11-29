import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import {
  ArrowRight, Zap, Target, Key, Rocket, Brain,
  CheckCircle, AlertTriangle, Shield, ChevronRight,
  Terminal, Cpu, Network, Layers, Check, Sparkles, Star,
  Instagram, HelpCircle, ChevronDown, Menu, X
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

// --- CONFIGURAÇÕES ---
const CHECKOUT_LINK = "https://ecossistema-beta.streamlit.app/";
const PIXEL_ID = "640277028566260";

// --- DADOS ESTRUTURADOS ---

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

// Dados FAQ (Reconstruídos para adicionar volume)
const faqItems = [
    { q: "Para quem é o Nexus Manual?", a: "Para profissionais, empreendedores e criadores que sentem que estão ficando para trás na revolução da IA e querem um método claro, não apenas ferramentas soltas." },
    { q: "Preciso saber programar?", a: "Absolutamente não. O foco é na lógica cognitiva e na Engenharia de Prompt, que é baseada em linguagem natural, não em código." },
    { q: "O acesso é vitalício?", a: "Sim! Garantindo sua vaga hoje pelo preço de lançamento, você terá acesso vitalício a todo o conteúdo atual e futuras atualizações." },
    { q: "Como recebo o material?", a: "Imediatamente após a aprovação do pagamento, você receberá um e-mail com seus dados de acesso à nossa plataforma exclusiva." },
    { q: "E se eu não gostar?", a: "Oferecemos uma garantia incondicional de 7 dias. Se você achar que o conteúdo não é para você, devolvemos 100% do seu investimento." }
];

function App() {
  const [openFaq, setOpenFaq] = useState(null);

  // --- PIXEL DO META ---
  useEffect(() => {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
  }, []);

  const handleTrackCheckout = () => {
    console.log("Checkout iniciado para: " + CHECKOUT_LINK);
    if (window.fbq) window.fbq('track', 'InitiateCheckout');
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="App min-h-screen bg-black text-white font-sans selection:bg-[#00E5E5] selection:text-black">
      
      {/* NOSCRIPT PIXEL */}
      <noscript>
        <img height="1" width="1" style={{display: 'none'}} 
        src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`} 
        alt="" />
      </noscript>

      {/* 0. HERO SECTION (RECONSTRUÍDA COM IMAGEM BRAINNETWORK) */}
      <header className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img src={brainNetworkImg} alt="Neural Network Background" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in-down">
                <Sparkles className="w-4 h-4 text-[#00E5E5]" />
                <span className="text-sm font-medium text-gray-300">A Revolução Cognitiva Começou</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white">
                Não Seja Substituído.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5E5] to-[#2563EB]">Seja Aumentado.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                O Nexus Manual não é apenas um curso. É o seu sistema operacional para a Era da Inteligência Artificial. Domine a simbiose homem-máquina.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                <a 
                    href={CHECKOUT_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={handleTrackCheckout}
                    className="w-full md:w-auto"
                >
                    <Button className="w-full md:w-auto px-8 py-6 bg-[#00E5E5] hover:bg-[#00CCCC] text-black font-bold text-lg rounded-full flex items-center gap-2 transition-transform hover:scale-105 shadow-[0_0_30px_rgba(0,229,229,0.3)]">
                        ACESSAR O SISTEMA
                        <ArrowRight className="w-5 h-5" />
                    </Button>
                </a>
                <button className="text-gray-400 hover:text-white flex items-center gap-2 font-medium transition-colors">
                    <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center">
                        <ChevronDown className="w-5 h-5" />
                    </div>
                    Saiba mais
                </button>
            </div>
        </div>
      </header>

      {/* 1. SEÇÃO BENTO GRID */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Domine os 4 Pilares</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Uma estrutura completa para transformar você em um profissional híbrido de alta performance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {bentoFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.colSpan} relative group overflow-hidden rounded-3xl border border-white/10 h-[450px] transition-all hover:border-[#00E5E5]/30`}
            >
              <div className="absolute inset-0 z-0">
                <img src={feature.bgImage} alt={feature.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
                <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center mb-6 border border-white/10 group-hover:bg-[#00E5E5]/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-[#00E5E5]" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. SEÇÃO INTERMEDIÁRIA (USANDO IMAGEM LAPTOPNEURAL) */}
      <section className="py-24 bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
                <img src={laptopNeuralImg} alt="Interface Neural" className="rounded-3xl shadow-2xl border border-white/10" />
            </div>
            <div className="flex-1 space-y-8">
                <div className="inline-block px-4 py-1 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] text-xs font-bold tracking-widest uppercase">
                    Metodologia Proprietária
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    A Ponte Entre o Biológico e o Digital
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                    A maioria dos cursos ensina você a "usar o ChatGPT". Nós ensinamos você a pensar como a máquina. O Nexus é um framework mental que permite decompor problemas complexos e instruir a IA para resolvê-los com precisão cirúrgica.
                </p>
                <ul className="space-y-4">
                    {['Engenharia de Contexto Avançada', 'Arquitetura de Prompts em Cadeia', 'Automação de Fluxos Cognitivos'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-[#00E5E5]" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </section>

      {/* 3. SEÇÃO ECOSSISTEMA */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-4xl md:text-5xl font-bold text-center mb-24">
             O Ecossistema <span className="text-[#00E5E5]">Nexus</span>
           </h2>
           <div className="space-y-32">
             {ecosystemFeatures.map((item, index) => (
               <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
                 <div className="flex-1 w-full">
                   <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video bg-[#111]">
                     <div className="absolute inset-0 bg-[#00E5E5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                     <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                   </div>
                 </div>
                 <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="h-[1px] w-8 bg-[#F97316]"></div>
                        <p className="text-[#F97316] font-bold tracking-widest uppercase text-sm">{item.tagline}</p>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight">{item.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 4. SEÇÃO DEPOIMENTOS */}
      <section className="py-24 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E5E5]/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Resultados Reais</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/10 hover:border-[#00E5E5]/30 transition-all hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-6">
                            <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border border-gray-700 object-cover" />
                            <div>
                                <p className="font-bold text-white">{t.name}</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">{t.role}</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex gap-1 text-[#F97316]">
                                {[...Array(5)].map((_, starI) => <Star key={starI} size={14} fill="currentColor" />)}
                            </div>
                        </div>
                        <p className="text-gray-300 italic leading-relaxed">"{t.text}"</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. SEÇÃO FAQ (ADICIONADA PARA VOLUME) */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
            <div className="space-y-4">
                {faqItems.map((item, index) => (
                    <div key={index} className="border border-white/10 rounded-lg overflow-hidden bg-[#050505]">
                        <button 
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                        >
                            <span className="font-medium text-lg">{item.q}</span>
                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                        </button>
                        {openFaq === index && (
                            <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                {item.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 6. SEÇÃO OFERTA (PRICING) */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E5E5]/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4">
            <div className="relative z-10 text-center max-w-4xl mx-auto bg-[#111]/80 backdrop-blur-xl border border-white/10 p-8 md:p-16 rounded-3xl shadow-2xl">
                <div className="inline-block px-4 py-1 mb-6 rounded-full bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest border border-red-500/20">
                    Oferta por Tempo Limitado
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Acesso Vitalício ao Nexus</h3>
                <p className="text-gray-400 mb-12 text-lg">Junte-se a centenas de profissionais na vanguarda da tecnologia.</p>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-[#00E5E5] blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <img src={produtoImg} alt="Pack Nexus" className="relative w-72 rounded-xl shadow-2xl border border-white/20 rotate-[-3deg] group-hover:rotate-0 transition-all duration-500 z-10" />
                    </div>
                    
                    <div className="text-left space-y-6">
                        <div>
                            <span className="text-gray-500 line-through text-xl">R$ 297,00</span>
                            <div className="text-6xl font-extrabold text-white">R$ 47<span className="text-2xl text-gray-400">,00</span></div>
                            <p className="text-[#00E5E5] text-sm font-medium mt-2">Pagamento único • Acesso imediato</p>
                        </div>
                        
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center text-gray-300"><Check className="w-5 h-5 text-[#00E5E5] mr-3" /> Comunidade Exclusiva</div>
                            <div className="flex items-center text-gray-300"><Check className="w-5 h-5 text-[#00E5E5] mr-3" /> Atualizações Semanais</div>
                            <div className="flex items-center text-gray-300"><Check className="w-5 h-5 text-[#00E5E5] mr-3" /> Garantia de 7 Dias</div>
                        </div>
                    </div>
                </div>

                <a 
                    href={CHECKOUT_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full max-w-lg mx-auto"
                    onClick={handleTrackCheckout}
                >
                    <Button className="w-full py-6 md:h-20 bg-[#00E5E5] hover:bg-[#00CCCC] text-black font-extrabold text-lg md:text-2xl rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-[0_0_40px_rgba(0,229,229,0.3)] hover:shadow-[0_0_60px_rgba(0,229,229,0.5)]">
                        GARANTIR MINHA VAGA AGORA
                        <ArrowRight className="w-6 h-6" />
                    </Button>
                </a>
                
                <p className="mt-6 text-xs text-gray-500 flex items-center justify-center gap-2">
                    <Shield className="w-3 h-3" /> Pagamento 100% Seguro e Criptografado
                </p>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] pt-24 pb-12 px-4 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2 space-y-6">
                <div className="flex items-center gap-3">
                    <Brain className="w-8 h-8 text-[#00E5E5]" />
                    <span className="text-2xl font-bold text-white tracking-tight">NEXUS MANUAL</span>
                </div>
                <p className="text-gray-500 leading-relaxed max-w-sm">
                    O manual definitivo para profissionais que desejam liderar a revolução da IA, integrando capacidades humanas e artificiais.
                </p>
                <div className="flex gap-4 pt-4">
                    {/* Placeholder social icons */}
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#00E5E5] hover:text-black transition-colors cursor-pointer"><Instagram size={18} /></div>
                </div>
            </div>
            <div>
                <h4 className="text-white font-bold mb-6 text-lg">Navegação</h4>
                <ul className="space-y-4 text-gray-500">
                    <li><a href="#" className="hover:text-[#00E5E5] transition-colors">Início</a></li>
                    <li><a href="#" className="hover:text-[#00E5E5] transition-colors">Módulos</a></li>
                    <li><a href="#" className="hover:text-[#00E5E5] transition-colors">Garantia</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
                <ul className="space-y-4 text-gray-500">
                    <li><a href="#" className="hover:text-[#00E5E5] transition-colors">Termos de Uso</a></li>
                    <li><a href="#" className="hover:text-[#00E5E5] transition-colors">Política de Privacidade</a></li>
                    <li><a href="mailto:suporte@nexusorigin.com" className="hover:text-[#00E5E5] transition-colors">Suporte</a></li>
                </ul>
            </div>
        </div>
        <div className="max-w-6xl mx-auto text-center pt-8 border-t border-white/5">
          <p className="text-gray-600 text-sm">
            &copy; 2025 Nexus Manual. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  )
}

export default App
