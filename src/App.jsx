import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
// Ícones importados
import {
  ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp,
  CheckCircle, Sparkles, User, Lightbulb, Search, Eye,
  ClipboardEdit, Code, BarChart, Layout, BrainCircuit, AlertTriangle,
  Clock, Shield, Users, Cpu, Database, Cloud, Server
} from 'lucide-react'
import './App.css' 

// Importando o componente de animação
import AnimatedSection from '@/components/ui/AnimatedSection.jsx'; 

// Importando as imagens existentes
import brainNetworkImg from './assets/1000393266.jpg'
import nexusLogoImg from './assets/1000393277.png'
import platosCaveImg from './assets/1000396070.jpg'
import dataAnalysisImg from './assets/1000395918.jpg'
import newProductImg from './assets/1000396691.jpg'
import testimonial1Img from './assets/1000396866.jpg'
import testimonial2Img from './assets/1000396868.jpg'
import testimonial3Img from './assets/1000396866.jpg'
import laptopNeuralImg from './assets/1000393263.jpg'
import brainAIImg from './assets/1000393262.jpg'
import digitalToolsImg from './assets/1000395915.jpg'
import neuronImg from './assets/1000393265.jpg'
import neuralNetworkImg from './assets/1000393264.jpg'
import ebookImg from './assets/1000393237.png'
import servicosIAImg from './assets/servicos-ia.jpg';
import produtividadeImg from './assets/produtividade.jpg';
import redeNeuralAbstrataImg from './assets/rede-neural-abstrata.jpg';
import xadrezStrategiaImg from './assets/xadrez-estrategia.jpg';

// Componente de Partículas Interativas
const InteractiveParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 30;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
        this.alpha = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-20"
      style={{ zIndex: 1 }}
    />
  );
};

// Componente de Card com Efeito Magnético
const MagneticCard = ({ children, delay = 0 }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateY = (x - centerX) / 20;
      const rotateX = (centerY - y) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="magnetic-card transition-all duration-500 ease-out"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      {children}
    </div>
  );
};

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1016] font-['Poppins',sans-serif] overflow-x-hidden">
      
      {/* Barra de Progresso */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#FF6B35] via-[#4FD1C5] to-[#FF8E53] z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24 lg:py-32 overflow-hidden">
        <InteractiveParticles />
        
        {/* Elementos de fundo */}
        <div className="hidden lg:block absolute top-20 left-20 w-72 h-72 bg-[#0D3A46]/20 rounded-full blur-3xl animate-pulse" />
        <div className="hidden lg:block absolute bottom-20 right-20 w-96 h-96 bg-[#0D3A46]/15 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Imagem de Fundo */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src={brainNetworkImg} 
            alt="Rede Neural de Fundo" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1016]/80 via-[#14222E]/60 to-[#0B1016]/80" />

        {/* Conteúdo Principal */}
        <div className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8E53]/20 border border-[#FF6B35]/40 rounded-full text-[#FF8E53] text-sm font-medium mb-12 backdrop-blur-sm animate-pulse">
            <AlertTriangle className="w-4 h-4 mr-2" />
            ATENÇÃO: A IA está evoluindo mais rápido que sua capacidade de aprendizado
          </div>

          {/* Headline Principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Cansado de se sentir{' '}
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] bg-clip-text text-transparent">
              ultrapassado
            </span>{' '}
            pela velocidade da IA?
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            <span className="text-[#FF8E53] font-semibold">Toda semana surge uma ferramenta nova</span>, 
            todo mês uma atualização revolucionária, e você fica sempre{' '}
            <span className="text-[#FF6B35] font-semibold">correndo atrás do prejuízo</span>, 
            sem nunca conseguir dominar de verdade.
          </p>

          {/* Pontos de Dor */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {[
              "Você investe tempo aprendendo uma ferramenta e ela já está desatualizada",
              "O excesso de informações paralisa sua capacidade de decisão", 
              "Seus concorrentes estão usando IA e você está ficando para trás"
            ].map((text, index) => (
              <div key={index} className="flex items-start space-x-4 text-gray-300 p-4 rounded-xl bg-[#14222E]/30 backdrop-blur-sm">
                <div className="w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="w-3 h-3 text-white" />
                </div>
                <span className="text-left text-lg leading-relaxed">{text}</span>
              </div>
            ))}
          </div>

          {/* Solução */}
          <div className="bg-gradient-to-r from-[#14222E]/50 to-[#1C2A35]/50 p-10 rounded-3xl border border-[#0D3A46]/30 mb-16 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              E se você pudesse{' '}
              <span className="text-[#4FD1C5]">dominar as bases fundamentais</span>{' '}
              que funcionam independentemente das ferramentas que surgirem?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              O Nexus não ensina ferramentas passageiras, mas sim os{' '}
              <span className="text-[#38B2AC] font-semibold">princípios imutáveis</span>{' '}
              da alta performance com IA que vão mantê-lo relevante pelos próximos 10 anos.
            </p>
          </div>

          {/* Botão 1 */}
          <div className="pulse-button-container max-w-sm mx-auto mb-16">
            <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF6B35]/90 hover:to-[#FF8E53]/90 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105 border-0 pulse-button">
                <Zap className="w-5 h-5 mr-2" />
                ACESSO IMEDIATO
              </Button>
            </a>
          </div>

          {/* Garantias */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 text-gray-400">
            {[
              "7 dias de garantia incondicional",
              "Acesso vitalício às atualizações", 
              "Suporte direto com especialistas"
            ].map((text, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-[#4FD1C5] mr-3" />
                <span className="text-lg">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Ticker */}
      <section className="py-6 bg-gradient-to-r from-[#14222E] to-[#1C2A35] border-y border-[#0D3A46]/50 overflow-hidden">
        <div className="ticker-wrap">
          <div className="ticker-move">
            {[...Array(2)].map((_, iteration) => (
              <div key={iteration} className="flex items-center">
                <div className="ticker-item">🚀 Engenharia de Contexto Avançada</div>
                <div className="ticker-item-separator">
                  <Sparkles className="w-4 h-4 text-[#4FD1C5]" />
                </div>
                <div className="ticker-item">🎯 Domínio de Criação de Páginas</div>
                <div className="ticker-item-separator">
                  <Sparkles className="w-4 h-4 text-[#4FD1C5]" />
                </div>
                <div className="ticker-item">📊 Análise de Dados Aplicada</div>
                <div className="ticker-item-separator">
                  <Sparkles className="w-4 h-4 text-[#4FD1C5]" />
                </div>
                <div className="ticker-item">🐍 Python para Projetos de IA</div>
                <div className="ticker-item-separator">
                  <Sparkles className="w-4 h-4 text-[#4FD1C5]" />
                </div>
                <div className="ticker-item">🧠 Aprendizado Otimizado com IA</div>
                <div className="ticker-item-separator">
                  <Sparkles className="w-4 h-4 text-[#4FD1C5]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section id="sobre" className="py-24 lg:py-32 px-6 bg-[#0B1016]">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Pare de{' '}
                <span className="text-[#FF6B35]">correr atrás</span>{' '}
                e comece a{' '}
                <span className="bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] bg-clip-text text-transparent">
                  liderar
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B35] to-[#4FD1C5] mx-auto mb-8" />
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Enquanto outros se perdem no excesso de ferramentas, você dominará os 
                princípios fundamentais que tornam qualquer tecnologia útil.
              </p>
            </div>
          </AnimatedSection>
          
          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: Globe,
                title: "Mentalidade Antifrágil",
                description: "Aprenda a se adaptar a qualquer nova ferramenta em dias, não meses. Transforme a velocidade da IA em vantagem.",
                image: redeNeuralAbstrataImg,
                gradient: "from-[#0D3A46] to-[#14222E]"
              },
              {
                icon: Zap,
                title: "Filtro de Qualidade", 
                description: "Saiba identificar quais ferramentas valem seu tempo e ignore o ruído. Foque no que realmente importa.",
                image: servicosIAImg,
                gradient: "from-[#14222E] to-[#0D3A46]"
              },
              {
                icon: Key,
                title: "Vantagem Competitiva",
                description: "Entregue mais rápido, com mais qualidade e torne-se referência absoluta em sua área.",
                image: produtividadeImg, 
                gradient: "from-[#0D3A46] to-[#14222E]"
              },
              {
                icon: ClipboardEdit,
                title: "Engenharia de Contexto",
                description: "Aprenda a 'conversar' com a IA em nível profissional para extrair respostas precisas e criativas.",
                image: xadrezStrategiaImg,
                gradient: "from-[#0D3A46] to-[#14222E]"
              },
              {
                icon: Code,
                title: "Python para IA",
                description: "Vá além do básico. Entenda os fundamentos de Python para automatizar tarefas e prototipar soluções de IA.",
                image: laptopNeuralImg,
                gradient: "from-[#0D3A46] to-[#14222E]"
              },
              {
                icon: BarChart, 
                title: "Decisões Baseadas em Dados",
                description: "Pare de 'achar'. Aprenda a coletar, analisar e visualizar dados para decisões estratégicas com base em fatos.",
                image: dataAnalysisImg,
                gradient: "from-[#0D3A46] to-[#14222E]"
              },
              {
                icon: Layout,
                title: "Páginas que Convertem",
                description: "Domine o design persuasivo e UX para criar landing pages que transformam visitantes em clientes.",
                image: digitalToolsImg,
                gradient: "from-[#0D3A46] to-[#14222E]"
              },
              {
                icon: BrainCircuit,
                title: "Aprendizado Otimizado", 
                description: "Use a IA para aprender qualquer coisa mais rápido, sintetizar informações e criar planos de estudo personalizados.",
                image: brainAIImg,
                gradient: "from-[#0D3A46] to-[#14222E]"
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <MagneticCard delay={index}>
                  <div className="group bg-gradient-to-br from-[#14222E] to-[#1C2A35] p-8 rounded-3xl border border-[#0D3A46]/30 hover:border-[#4FD1C5]/60 transition-all duration-500 h-full flex flex-col">
                    <div className="absolute inset-0 opacity-10 rounded-3xl overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#4FD1C5] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-base leading-relaxed flex-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </MagneticCard>
              </AnimatedSection>
            ))}
          </div>

          {/* Botão 2 */}
          <AnimatedSection delay={0.5}>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#14222E] to-[#1C2A35] p-12 rounded-3xl border border-[#0D3A46]/30 mb-8">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Não Espere Para se Tornar Obsoleto
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  A cada dia que passa, mais pessoas dominam essas habilidades e aumentam a distância.{' '}
                  <span className="text-[#FF8E53] font-semibold">Sua hora de agir é agora.</span>
                </p>
                
                <div className="pulse-button-container max-w-sm mx-auto">
                  <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF6B35]/90 hover:to-[#FF8E53]/90 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105 border-0 pulse-button">
                      <Rocket className="w-5 h-5 mr-2" />
                      GARANTIR MINHA VAGA
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Comparação */}
          <AnimatedSection delay={0.7}>
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8E53]/10 p-8 rounded-3xl border border-[#FF6B35]/30">
                <h3 className="text-2xl font-bold text-[#FF6B35] mb-6">ANTES DO NEXUS</h3>
                <ul className="space-y-4">
                  {[
                    "Frustração constante com ferramentas novas",
                    "Tempo desperdiçado aprendendo coisas desnecessárias",
                    "Sensação de estar sempre atrás dos concorrentes"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <AlertTriangle className="w-5 h-5 text-[#FF6B35] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-[#4FD1C5]/10 to-[#38B2AC]/10 p-8 rounded-3xl border border-[#4FD1C5]/30">
                <h3 className="text-2xl font-bold text-[#4FD1C5] mb-6">DEPOIS DO NEXUS</h3>
                <ul className="space-y-4">
                  {[
                    "Clareza para focar no que realmente importa",
                    "Confiança para adotar qualquer nova tecnologia", 
                    "Vantagem competitiva sustentável"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <CheckCircle className="w-5 h-5 text-[#4FD1C5] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Seção de Autoridade */}
      <section className="py-24 lg:py-32 px-6 bg-gradient-to-br from-[#14222E] to-[#1C2A35] relative">
        <div className="absolute inset-0 opacity-10">
          <img src={neuralNetworkImg} alt="Rede Neural" className="w-full h-full object-cover" />
        </div>
        
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              Alta Performance não é mais{' '}
              <span className="bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] bg-clip-text text-transparent">
                opção
              </span>{' '}
              — é{' '}
              <span className="bg-gradient-to-r from-[#38B2AC] to-[#4FD1C5] bg-clip-text text-transparent">
                requisito
              </span>
            </h2>
            <div className="bg-gradient-to-br from-[#1C2A35] to-[#14222E] p-12 rounded-3xl border border-[#0D3A46]/40 backdrop-blur-sm">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Empresas, profissionais e líderes que dominam o modelo{' '}
                <strong className="text-[#4FD1C5]">econômico informacional</strong>{' '}
                estão sempre à frente. O Nexus traduz essa realidade em{' '}
                <strong className="text-[#38B2AC]">passos aplicáveis</strong>{' '}
                para o seu dia a dia, unindo ciência, tecnologia e estratégia de performance.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Chamada Final */}
      <section id="cta" className="py-24 lg:py-32 px-6 bg-[#0B1016]">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              O Futuro Não Espera por Ninguém
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              <span className="text-[#FF6B35] font-semibold">72% dos profissionais</span>{' '}
              que não se adaptarem à IA nos próximos 2 anos serão substituídos.{' '}
              <span className="text-[#4FD1C5] font-semibold">Escolha de qual lado você quer estar.</span>
            </p>

            {/* Benefícios */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Clock, title: "Acesso Imediato", desc: "Comece em minutos após a compra" },
                { icon: Shield, title: "Garantia de 7 Dias", desc: "Sem perguntas, sem riscos" },
                { icon: Users, title: "Suporte Exclusivo", desc: "Tire dúvidas diretamente" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-[#14222E] to-[#1C2A35] border border-[#0D3A46]/30">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-[#4FD1C5]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-lg">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Botão 3 */}
            <div className="pulse-button-container max-w-sm mx-auto mb-8">
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF6B35]/90 hover:to-[#FF8E53]/90 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105 border-0 pulse-button">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  QUERO ME ATUALIZAR AGORA
                </Button>
              </a>
            </div>

            {/* Garantia Final */}
            <div className="text-gray-400">
              <p className="flex items-center justify-center text-lg">
                <CheckCircle className="w-5 h-5 text-[#4FD1C5] mr-2" />
                <span>Compra 100% segura • Acesso imediato • Suporte prioritário</span>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#0B1016] border-t border-[#1C2A35]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <p className="text-gray-400 text-lg">
              © 2025 NEXUS - Manual de Alta Performance com IA. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              {[Cpu, Database, Cloud, Server].map((Icon, index) => (
                <Icon 
                  key={index}
                  className="w-6 h-6 text-[#4FD1C5]"
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 

export default App
