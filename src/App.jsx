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
    const particleCount = 50;

    // Configurar canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Criar partículas
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
        this.alpha = Math.random() * 0.5 + 0.2;
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

    // Inicializar partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animação
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
      className="absolute inset-0 pointer-events-none opacity-30"
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
      
      const rotateY = (x - centerX) / 25;
      const rotateX = (centerY - y) / 25;
      
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
      className="magnetic-card"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      {children}
    </div>
  );
};

// Componente de Texto Animado
const AnimatedText = ({ text, delay = 0, className = "" }) => {
  const [animatedText, setAnimatedText] = useState("");
  
  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          currentText = text.slice(0, currentIndex);
          setAnimatedText(currentText);
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      
      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return <span className={className}>{animatedText}</span>;
};

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Efeito de parallax baseado na posição do mouse
  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
  };

  return (
    <div className="min-h-screen bg-[#0B1016] font-['Poppins',sans-serif] overflow-x-hidden">
      
      {/* Barra de Progresso Animada */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#FF6B35] via-[#4FD1C5] to-[#FF8E53] z-50 transition-all duration-100 shadow-lg"
        style={{ 
          width: `${scrollProgress}%`,
          boxShadow: '0 0 20px rgba(255, 107, 53, 0.5)'
        }}
      />

      {/* Hero Section com Efeitos Avançados */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <InteractiveParticles />
        
        {/* Elementos de fundo com parallax */}
        <div 
          className="hidden md:block absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#FF6B35] to-[#4FD1C5] rounded-full blur-3xl opacity-20 animate-float-slow"
          style={parallaxStyle}
        />
        <div 
          className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#4FD1C5] to-[#FF8E53] rounded-full blur-3xl opacity-15 animate-float-delayed"
          style={parallaxStyle}
        />

        {/* Imagem de Fundo com Parallax Avançado */}
        <div 
          className="absolute inset-0 opacity-20 transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) scale(1.1)`
          }}
        >
          <img 
            src={brainNetworkImg} 
            alt="Rede Neural de Fundo" 
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* Overlay com gradiente animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1016] via-[#14222E] to-[#0D3A46] animate-gradient-x" />

        {/* Conteúdo Principal */}
        <div className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge de Urgência com Efeito Pulsar */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8E53]/20 border border-[#FF6B35]/40 rounded-full text-[#FF8E53] text-sm font-medium mb-8 backdrop-blur-sm animate-pulse-glow">
            <AlertTriangle className="w-4 h-4 mr-2 animate-spin-slow" />
            ATENÇÃO: A IA está evoluindo mais rápido que sua capacidade de aprendizado
          </div>

          {/* HEADLINE PRINCIPAL - Com Efeito de Digitação */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Cansado de se sentir <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] bg-clip-text text-transparent animate-text-shimmer">ultrapassado</span> pela velocidade da IA?
          </h1>

          {/* SUBHEADLINE - Com Efeito Fade In Sequencial */}
          <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            <span className="text-[#FF8E53] font-semibold">Toda semana surge uma ferramenta nova</span>, todo mês uma atualização revolucionária, e você fica sempre 
            <span className="text-[#FF6B35] font-semibold"> correndo atrás do prejuízo</span>, sem nunca conseguir dominar de verdade.
          </div>

          {/* Pain Points List com Animação em Cascata */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              "Você investe tempo aprendendo uma ferramenta e ela já está desatualizada",
              "O excesso de informações paralisa sua capacidade de decisão",
              "Seus concorrentes estão usando IA e você está ficando para trás"
            ].map((text, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 text-gray-300 stagger-item"
                style={{ animationDelay: `${index * 0.2 + 2}s` }}
              >
                <div className="w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1 animate-bounce-soft">
                  <AlertTriangle className="w-3 h-3 text-white" />
                </div>
                <span className="text-left">{text}</span>
              </div>
            ))}
          </div>

          {/* Solução - Transformação com Efeito de Elevação */}
          <div className="bg-gradient-to-r from-[#14222E]/50 to-[#1C2A35]/50 p-8 rounded-2xl border border-[#0D3A46]/30 mb-12 backdrop-blur-sm hover-lift">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 slide-in-left">
              E se você pudesse <span className="text-[#4FD1C5] animate-pulse-soft">dominar as bases fundamentais</span> que funcionam independentemente das ferramentas que surgirem?
            </h2>
            <p className="text-lg text-gray-300 slide-in-right">
              O Nexus não ensina ferramentas passageiras, mas sim os <span className="text-[#38B2AC] font-semibold">princípios imutáveis</span> da alta performance com IA que vão mantê-lo relevante pelos próximos 10 anos.
            </p>
          </div>

          {/* BOTÃO 1 - NO INÍCIO */}
          <div className="pulse-button-container mb-16 max-w-md mx-auto">
            <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF6B35]/90 hover:to-[#FF8E53]/90 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105 border-0 pulse-button magnetic-btn">
                <Zap className="w-5 h-5 mr-2 animate-pulse" />
                ACESSO IMEDIATO
              </Button>
            </a>
          </div>

          {/* Garantia e Urgência com Animação Sequencial */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-gray-400">
            {[
              "7 dias de garantia incondicional",
              "Acesso vitalício às atualizações",
              "Suporte direto com especialistas"
            ].map((text, index) => (
              <div 
                key={index}
                className="flex items-center fade-in-stagger-item"
                style={{ animationDelay: `${index * 0.3 + 3}s` }}
              >
                <CheckCircle className="w-5 h-5 text-[#4FD1C5] mr-2 animate-bounce-soft" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Ticker Aprimorado */}
      <section className="py-6 bg-gradient-to-r from-[#14222E] to-[#1C2A35] border-y border-[#0D3A46]/50 overflow-hidden relative">
        <div className="ticker-wrap">
          <div className="ticker-move">
            {[...Array(3)].map((_, iteration) => (
              <div key={iteration} className="flex items-center">
                <div className="ticker-item hover-glow">🚀 Engenharia de Contexto Avançada</div>
                <div className="ticker-item-separator">
                  <Sparkles className="w-4 h-4 text-[#4FD1C5] animate-spin-slow" />
                </div>
                <div className="ticker-item hover-glow">🎯 Domínio de Criação de Páginas</div>
                <div className="ticker-item-separator">
                  <Sparkles className="w-4 h-4 text-[#4FD1C5] animate-spin-slow" />
                </div>
                <div className="ticker-item hover-glow">📊 Análise de Dados Aplicada</div>
                <div className="ticker-item-separator">
                  <Sparkles className="w-4 h-4 text-[#4FD1C5] animate-spin-slow" />
                </div>
                <div className="ticker-item hover-glow">🐍 Python para Projetos de IA</div>
                <div className="ticker-item-separator">
                  <Sparkles className="w-4 h-4 text-[#4FD1C5] animate-spin-slow" />
                </div>
                <div className="ticker-item hover-glow">🧠 Aprendizado Otimizado com IA</div>
                <div className="ticker-item-separator">
                  <Sparkles className="w-4 h-4 text-[#4FD1C5] animate-spin-slow" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Benefícios com Cards Magnéticos */}
      <section id="sobre" className="py-32 px-4 bg-[#0B1016] relative">
        <InteractiveParticles />
        <div className="max-w-7xl mx-auto">
          
          {/* Header Animado */}
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pare de <span className="text-[#FF6B35]">correr atrás</span> e comece a <span className="bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] bg-clip-text text-transparent">liderar</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#4FD1C5] mx-auto mb-6 animate-width-expand" />
              <p className="text-xl text-gray-400 max-w-3xl mx-auto slide-in-bottom">
                Enquanto outros se perdem no excesso de ferramentas, você dominará os princípios fundamentais que tornam qualquer tecnologia útil.
              </p>
            </div>
          </AnimatedSection>
          
          {/* Grid de Cards com Efeito Magnético */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className={`group bg-gradient-to-br from-[#14222E] to-[#1C2A35] p-8 rounded-3xl border border-[#0D3A46]/30 hover:border-[#4FD1C5]/60 transition-all duration-500 relative overflow-hidden h-full flex flex-col hover-glow-card`}>
                    <div className="absolute inset-0 opacity-20">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-float`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#4FD1C5] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm flex-1 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-full h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#4FD1C5] animate-pulse" />
                      </div>
                    </div>
                  </div>
                </MagneticCard>
              </AnimatedSection>
            ))}
          </div>

          {/* BOTÃO 2 - NO MEIO DO SITE */}
          <AnimatedSection delay={0.5}>
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-br from-[#14222E] to-[#1C2A35] p-12 rounded-3xl border border-[#0D3A46]/30 mb-8 hover-lift-large relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#4FD1C5]/5 animate-pan" />
                <h3 className="text-3xl font-bold text-white mb-4 relative z-10">
                  Não Espere Para se Tornar Obsoleto
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                  A cada dia que passa, mais pessoas dominam essas habilidades e aumentam a distância. 
                  <span className="text-[#FF8E53] font-semibold"> Sua hora de agir é agora.</span>
                </p>
                
                <div className="pulse-button-container max-w-md mx-auto relative z-10">
                  <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF6B35]/90 hover:to-[#FF8E53]/90 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105 border-0 pulse-button magnetic-btn">
                      <Rocket className="w-5 h-5 mr-2 animate-bounce" />
                      GARANTIR MINHA VAGA
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Seção de Comparação com Animação de Flip */}
          <AnimatedSection delay={0.7}>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8E53]/10 p-8 rounded-3xl border border-[#FF6B35]/30">
                    <h3 className="text-2xl font-bold text-[#FF6B35] mb-6">ANTES DO NEXUS</h3>
                    <ul className="space-y-4">
                      {[
                        "Frustração constante com ferramentas novas",
                        "Tempo desperdiçado aprendendo coisas desnecessárias",
                        "Sensação de estar sempre atrás dos concorrentes"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <AlertTriangle className="w-5 h-5 text-[#FF6B35] mr-3 mt-1 flex-shrink-0 animate-wiggle" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-gradient-to-br from-[#4FD1C5]/10 to-[#38B2AC]/10 p-8 rounded-3xl border border-[#4FD1C5]/30">
                    <h3 className="text-2xl font-bold text-[#4FD1C5] mb-6">DEPOIS DO NEXUS</h3>
                    <ul className="space-y-4">
                      {[
                        "Clareza para focar no que realmente importa",
                        "Confiança para adotar qualquer nova tecnologia",
                        "Vantagem competitiva sustentável"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <CheckCircle className="w-5 h-5 text-[#4FD1C5] mr-3 mt-1 flex-shrink-0 animate-bounce-soft" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Seção de Prova Social com Efeito Parallax Avançado */}
      <section className="py-32 px-4 bg-gradient-to-br from-[#14222E] to-[#1C2A35] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) scale(1.2)`
          }}
        >
          <img src={neuralNetworkImg} alt="Rede Neural" className="w-full h-full object-cover" />
        </div>
        
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              Alta Performance não é mais <span className="bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] bg-clip-text text-transparent">opção</span> — é <span className="bg-gradient-to-r from-[#38B2AC] to-[#4FD1C5] bg-clip-text text-transparent">requisito</span>
            </h2>
            <div className="bg-gradient-to-br from-[#1C2A35] to-[#14222E] p-12 md:p-16 rounded-3xl border border-[#0D3A46]/40 backdrop-blur-sm hover-lift glow-border">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Empresas, profissionais e líderes que dominam o modelo <strong className="text-[#4FD1C5]">econômico informacional</strong> estão sempre à frente. O Nexus traduz essa realidade em <strong className="text-[#38B2AC]">passos aplicáveis</strong> para o seu dia a dia, unindo ciência, tecnologia e estratégia de performance.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Chamada Final com Efeitos Especiais */}
      <section id="cta" className="py-32 px-4 bg-[#0B1016] relative overflow-hidden">
        <InteractiveParticles />
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              O Futuro Não Espera por Ninguém
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              <span className="text-[#FF6B35] font-semibold">72% dos profissionais</span> que não se adaptarem à IA nos próximos 2 anos serão substituídos. 
              <span className="text-[#4FD1C5] font-semibold"> Escolha de qual lado você quer estar.</span>
            </p>

            {/* Benefícios com Animação 3D */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Clock, title: "Acesso Imediato", desc: "Comece em minutos após a compra" },
                { icon: Shield, title: "Garantia de 7 Dias", desc: "Sem perguntas, sem riscos" },
                { icon: Users, title: "Suporte Exclusivo", desc: "Tire dúvidas diretamente" }
              ].map((item, index) => (
                <div key={index} className="stagger-item-3d" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-[#14222E] to-[#1C2A35] border border-[#0D3A46]/30 hover-lift">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-4 animate-rotate-3d">
                      <item.icon className="w-8 h-8 text-[#4FD1C5]" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTÃO 3 - NO FINAL */}
            <div className="pulse-button-container max-w-md mx-auto">
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF6B35]/90 hover:to-[#FF8E53]/90 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105 border-0 pulse-button magnetic-btn">
                  <TrendingUp className="w-5 h-5 mr-2 animate-bounce" />
                  QUERO ME ATUALIZAR AGORA
                </Button>
              </a>
            </div>

            {/* Garantia Final */}
            <div className="mt-8 text-gray-400 fade-in-delayed-2">
              <p className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#4FD1C5] mr-2 animate-pulse" />
                <span>Compra 100% segura • Acesso imediato • Suporte prioritário</span>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer Atualizado 2025 */}
      <footer className="py-16 px-4 bg-[#0B1016] border-t border-[#1C2A35] relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-lg animate-fade-in">
              © 2025 NEXUS - Manual de Alta Performance com IA. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              {[Cpu, Database, Cloud, Server].map((Icon, index) => (
                <Icon 
                  key={index}
                  className="w-6 h-6 text-[#4FD1C5] animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
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
