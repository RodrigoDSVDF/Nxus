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

// --- LINK DO CHECKOUT (ATUALIZADO) ---
const CHECKOUT_LINK = "https://ecossistema-beta.streamlit.app/";

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

// SEÇÃO: ECOSSISTEMA NEXUS
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

function App() {
  const handleTrackCheckout = () => {
    console.log("Checkout iniciado no link: " + CHECKOUT_LINK);
    // Aqui você pode adicionar lógica de Pixel do Facebook/Google se necessário
  };

  return (
    <div className="App min-h-screen bg-black text-white font-sans selection:bg-[#00E5E5] selection:text-black">
      
      {/* 1. SEÇÃO BENTO GRID (Renderização dos dados bentoFeatures) */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Domine a Nova Era
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {bentoFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.colSpan} relative group overflow-hidden rounded-3xl border border-white/10 h-[400px]`}
            >
              {/* Imagem de Fundo com Overlay */}
              <div className="absolute inset-0 z-0">
                <img src={feature.bgImage} alt={feature.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              
              {/* Conteúdo */}
              <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
                  <feature.icon className="w-6 h-6 text-[#00E5E5]" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. SEÇÃO ECOSSISTEMA (Renderização dos dados ecosystemFeatures) */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
             O Ecossistema <span className="text-[#00E5E5]">Nexus</span>
           </h2>
           <div className="space-y-24">
             {ecosystemFeatures.map((item, index) => (
               <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
                 <div className="flex-1">
                   <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                     <div className="absolute inset-0 bg-[#00E5E5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                     <img src={item.image} alt={item.title} className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                   </div>
                 </div>
                 <div className="flex-1 space-y-6">
                    <p className="text-[#F97316] font-bold tracking-widest uppercase text-sm">{item.tagline}</p>
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight">{item.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 3. SEÇÃO DEPOIMENTOS (Renderização dos dados testimonials) */}
      <section className="py-20 border-y border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O que dizem os membros</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-[#111] p-8 rounded-2xl border border-white/10 hover:border-[#00E5E5]/50 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border border-gray-700" />
                            <div>
                                <p className="font-bold text-white">{t.name}</p>
                                <p className="text-xs text-gray-500 uppercase">{t.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-300 italic">"{t.text}"</p>
                        <div className="flex gap-1 mt-4 text-[#F97316]">
                            {[...Array(5)].map((_, starI) => <Star key={starI} size={16} fill="currentColor" />)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 4. SEÇÃO DE OFERTA / PRICING (Código Original Mantido) */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Fundo decorativo se necessário */}
        <div className="absolute inset-0 bg-[url('./assets/fundo02.jpg')] opacity-10 bg-cover bg-center z-0"></div>
        
        <div className="container mx-auto px-4">
            <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold text-white mb-2">Última Chance para Garantir o Preço de Lançamento</h3>
                <p className="text-[#F97316] font-medium mb-8 uppercase tracking-wider">Acesso Vitalício + Bônus Exclusivos</p>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                    <img src={produtoImg} alt="Pack Nexus" className="w-64 rounded-xl shadow-2xl border border-[#333] rotate-[-5deg] hover:rotate-0 transition-all duration-500" />
                    <div className="text-left">
                        <div className="text-6xl font-extrabold text-white mb-2">R$ 47<span className="text-2xl text-gray-400">,00</span></div>
                        <p className="text-gray-400 mb-4">Pagamento único. Sem mensalidades.</p>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[#00E5E5] mr-2" /> Acesso Imediato via E-mail</div>
                            <div className="flex items-center text-sm text-gray-300"><Check className="w-4 h-4 text-[#00E5E5] mr-2" /> Plataforma Segura e Confiável</div>
                        </div>
                    </div>
                </div>

                {/* CTA Oferta Final com Link Atualizado */}
                <a 
                    href={CHECKOUT_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block max-w-2xl mx-auto"
                    onClick={handleTrackCheckout}
                >
                    <Button className="w-full h-auto py-4 md:h-20 bg-[#00E5E5] hover:bg-[#00CCCC] text-black font-extrabold text-sm md:text-2xl rounded-2xl flex items-center justify-center gap-2 md:gap-4 hover:scale-[1.02] transition-transform whitespace-normal text-center shadow-[0_0_20px_rgba(0,229,229,0.4)]">
                        QUERO COMEÇAR AGORA MESMO
                        <ArrowRight className="w-5 h-5 md:w-8 md:h-8 flex-shrink-0" />
                    </Button>
                </a>
            </div>
        </div>
      </section>

      {/* FOOTER (Código Original Mantido) */}
      <footer className="bg-[#0A0A0A] pt-24 pb-12 px-4 border-t border-[#111] relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                    <Brain className="w-8 h-8 text-[#00E5E5]" />
                    <span className="text-2xl font-bold text-white">NEXUS MANUAL</span>
                </div>
                <p className="text-gray-500 leading-relaxed max-w-sm mb-6">
                    O manual definitivo para profissionais que desejam liderar a revolução da IA.
                </p>
            </div>
            <div>
                <h4 className="text-white font-bold mb-6">Links Úteis</h4>
                <ul className="space-y-3 text-gray-500">
                    <li><a href="#" className="hover:text-[#00E5E5] transition-colors">Política de Privacidade</a></li>
                    <li><a href="#" className="hover:text-[#00E5E5] transition-colors">Suporte</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-6">Contato</h4>
                <p className="text-gray-500 mb-4">suporte@nexusorigin.com</p>
                <a href="https://instagram.com/nexus0rigin" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-[#F97316] transition-colors gap-2">
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
