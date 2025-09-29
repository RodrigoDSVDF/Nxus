import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp, CheckCircle, Sparkles, User, Lightbulb, Search, Eye, ShieldCheck, Clock } from 'lucide-react'
import './App.css' 
// Adicionei mais ícones úteis, como ShieldCheck e Clock.

// Importando o componente de animação (Mantido - Essencial para o UX)
import AnimatedSection from '@/components/ui/AnimatedSection.jsx'; 

// Importando as imagens
import brainNetworkImg from './assets/1000393266.jpg'
import nexusLogoImg from './assets/1000393277.png'
import platosCaveImg from './assets/1000396070.jpg'
// ... (outras imagens)
import garantia7DiasImg from './assets/7-dias-garantido.jpg'; 
// Importações de imagem reduzidas por brevidade, mas mantidas as principais.


// Renomeado para LandingPage para maior clareza de contexto
export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false) 

  useEffect(() => {
    // Adiciona um pequeno delay para a transição inicial do Hero
    setTimeout(() => setIsVisible(true), 100); 
  }, []) 

  // Função de scroll (mantida, útil para navegação)
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  } 

  return (
    // Fundo mais escuro e sólido, com gradiente sutil, e fonte moderna (sans-serif)
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Efeitos de brilho e animação de fundo (mantido, mas simplificado o delay) */}
        <div className="hidden md:block absolute top-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-slow-pulse"></div>
        <div className="hidden md:block absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-slow-pulse delay-500"></div>
        <div className="absolute inset-0 opacity-10">
          <img 
            src={brainNetworkImg} 
            alt="Rede Neural Abstrata de Fundo" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Conteúdo Central do Hero com Animação de Entrada */}
        <div className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-12">
            
            {/* Tag de Destaque */}
            <div className="inline-flex items-center px-6 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium mb-8 uppercase tracking-widest">
              <Zap className="w-4 h-4 mr-2" />
              Domine a Nova Economia Digital
            </div>
            
            {/* Logo (mantido, centralizado) */}
            <div className="mb-8">
              <img 
                src={nexusLogoImg} 
                alt="NEXUS Logo" 
                className="w-56 h-auto mx-auto mb-6 opacity-90"
              />
            </div>
            
            {/* Título com Gradiente de Impacto */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              O Manual de <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Alta Performance</span> com <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Inteligência Artificial</span>
            </h1>
            
            {/* Subtítulos Otimizados para a Proposta de Valor */}
            <div className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light space-y-2">
              <span className="block">Transforme dados em **Decisões Estratégicas**.</span>
              <span className="block">Multiplique sua produtividade sem abrir mão do **Pensamento Crítico**.</span>
              <span className="font-semibold text-cyan-400 mt-2 block">Torne-se o profissional indispensável da Nova Era.</span>
            </div>
            
            {/* CTA Principal: Mais Vibrante e Clara */}
            <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" // Tamanho maior
                className="h-auto whitespace-normal text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 text-xl font-bold rounded-xl shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-[1.03] border-4 border-cyan-300/60"
              >
                <BookOpen className="w-6 h-6 mr-3" />
                Quero o Manual NEXUS e Minha Vantagem Competitiva
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      
      {/* Manifesto e Diferencial (Chamada: "Mais que Ferramentas") */}
      <section className="py-32 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Mais que Ferramentas. <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Uma Mentalidade.</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                No mar de conteúdo superficial sobre IA, o que realmente falta é **direção** e **sentido**. O NEXUS oferece ambos.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* O Problema e a Solução */}
            <AnimatedSection delay={0.3}>
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4 flex items-center"><Eye className="w-6 h-6 mr-3 text-emerald-400"/> O Problema: Sobrecarga e Ruído</h3>
                  <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-slate-700 pl-4">
                    As pessoas são ensinadas a usar **ferramentas**, mas não a desenvolver uma **mentalidade**. A I.A. mal utilizada se torna apenas mais uma fonte de distração e *paralisia por análise*.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-900/50 to-slate-800/50 p-8 rounded-3xl border border-blue-500/40 shadow-xl">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center"><Brain className="w-6 h-6 mr-3 text-cyan-400"/> Nossa Proposta: I.A. como Amplificador</h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Aqui, a I.A. é uma **ponte** para o seu **Pensamento Crítico** e **Intuição Humana**. Um guia para resolver problemas complexos, ampliar sua criatividade e garantir que você use a tecnologia para **liderar**, não apenas para seguir.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Pilares */}
            <AnimatedSection delay={0.5}>
              <div className="space-y-6 bg-slate-800/30 p-8 rounded-3xl border border-emerald-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">Pilares para seu Alto Desempenho Cognitivo:</h3>
                
                {[
                  { icon: Target, title: "Foco Profundo", description: "Domine a arte de direcionar a atenção para tarefas de alto valor, eliminando a distração digital.", color: "cyan" },
                  { icon: Lightbulb, title: "Criatividade Amplificada", description: "Use a IA como um 'sparring partner' para gerar ideias originais e soluções inovadoras.", color: "emerald" },
                  { icon: Search, title: "Prompt Engineering Estratégico", description: "Vá além dos comandos básicos. Aprenda a fazer as perguntas de alto nível para obter respostas extraordinárias.", color: "blue" },
                  { icon: User, title: "Posicionamento Insubstituível", description: "Posicione-se como um especialista raro que une competências humanas e tecnológicas.", color: "cyan" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-700/50 transition-colors duration-300 group">
                    <div className={`w-12 h-12 bg-gradient-to-r from-${item.color}-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}

      {/* Autoridade Conceitual - Caverna de Platão (Otimizada) */}
      <section className="py-32 px-4 relative">
        <AnimatedSection>
          <div className="absolute inset-0">
            <img 
              src={platosCaveImg} 
              alt="Caverna de Platão - Conceito Digital" 
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-slate-950/80"></div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Saia da <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Caverna Digital</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Muitos vivem presos às sombras da informação superficial. O NEXUS é a luz que o levará ao conhecimento de valor real.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                
                {/* Cartão de Destaque - Era Informacional */}
                <div className="flex items-start space-x-6 bg-slate-800/50 p-6 rounded-2xl border border-blue-500/30">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">A Nova Matriz Econômica</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      A produtividade real reside na tecnologia que transforma **dados em sabedoria**. O NEXUS te ensina a navegar e lucrar no modelo **econômico informacional**.
                    </p>
                  </div>
                </div>
                
                {/* Cartão de Destaque - Conhecimento de Valor */}
                <div className="flex items-start space-x-6 bg-slate-800/50 p-6 rounded-2xl border border-emerald-500/30">
                  <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Acelerador de Carreira</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Não se trata de automação, mas de **super-habilidades**. Use o manual para ter clareza, tomar decisões rápidas e se destacar como um líder no seu campo.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Box de Resumo e Chamada Secundária */}
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-800/80 to-blue-900/80 p-10 rounded-3xl border border-cyan-500/40 shadow-2xl">
                  <p className="text-2xl text-gray-100 font-medium leading-snug">
                    O Nexus não é teoria. É um **framework prático** que alinha sua performance pessoal com o poder da I.A., transformando-o no **centro da revolução**.
                  </p>
                  <div className="mt-8 text-center">
                    <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
                      <Button 
                        size="md" 
                        className="h-auto bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-900 px-6 py-3 text-lg font-bold rounded-xl shadow-lg hover:scale-[1.05] transition-transform"
                      >
                        Descubra o Framework NEXUS
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ---------------------------------------------------- */}

      {/* Benefícios Principais (Mais Visual e com Ícones Grandes) */}
      <section className="py-32 px-4 bg-slate-950/90">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Seus <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Resultados Garantidos</span> com o Manual
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Benefício 1: Produtividade */}
            <AnimatedSection delay={0.2}>
              <BenefitCard 
                icon={Rocket} 
                title="Produtividade Exponencial" 
                description="Use a IA como sua assistente 24/7 para eliminar a sobrecarga e focar em tarefas de impacto. Ganhe **horas** livres por dia."
                image={neuralNetworkImg}
              />
            </AnimatedSection>
            
            {/* Benefício 2: Clareza Estratégica */}
            <AnimatedSection delay={0.4}>
              <BenefitCard 
                icon={Target} 
                title="Clareza Estratégica" 
                description="Tenha um framework mental para cortar o ruído, priorizar o essencial e enxergar o caminho mais rápido para seus objetivos de longo prazo."
                image={xadrezStrategiaImg}
              />
            </AnimatedSection>
            
            {/* Benefício 3: Mentalidade Informacional */}
            <AnimatedSection delay={0.6}>
              <BenefitCard 
                icon={Brain} 
                title="Mentalidade Invencível" 
                description="Desenvolva a capacidade de aprender e reaprender rapidamente. Esteja sempre à frente, adaptando-se a qualquer nova tecnologia."
                image={brainAIImg}
              />
            </AnimatedSection>
            
            {/* Benefício 4: Ferramentas Práticas */}
            <AnimatedSection delay={0.3}>
              <BenefitCard 
                icon={Zap} 
                title="Ferramentas Práticas Desbloqueadas" 
                description="Chega de complicação. Tenha um 'guia de instruções' simplificado para extrair 100% de cada ferramenta de I.A. no seu dia a dia."
                image={servicosIAImg}
              />
            </AnimatedSection>

            {/* Benefício 5: Vantagem Competitiva */}
            <AnimatedSection delay={0.5}>
              <BenefitCard 
                icon={Key} 
                title="Vantagem Competitiva Única" 
                description="Seja a pessoa que entrega mais rápido, com mais qualidade e ideias mais inovadoras. Torne-se a referência em sua área."
                image={produtividadeImg}
              />
            </AnimatedSection>

             {/* Benefício 6: Risco Zero */}
            <AnimatedSection delay={0.7}>
              <BenefitCard 
                icon={ShieldCheck} 
                title="Garantia Incondicional" 
                description="Satisfação total ou seu dinheiro de volta em 7 dias. Seu único risco é perder a oportunidade de se transformar."
                image={garantia7DiasImg}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}

      {/* Chamada para Ação Final (Mais Impacto) */}
      <section id="cta" className="py-32 px-4 bg-gradient-to-r from-blue-900/30 to-emerald-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
              Transforme sua Performance em <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Poder de Decisão</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="bg-slate-800/80 p-12 rounded-3xl border border-cyan-500/40 shadow-2xl mb-12">
              <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
                Pare de assistir à revolução. **Lidere-a**.
              </p>
              <p className="text-xl text-cyan-300 font-semibold mb-10">
                Toque no botão e garanta acesso imediato ao Manual NEXUS para começar sua transformação agora.
              </p>
              
              {/* CTA Final: Laranja de Urgência e Animação Agitada */}
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="h-auto whitespace-normal text-center bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white px-10 py-5 text-2xl font-extrabold rounded-2xl shadow-3xl shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 border-4 border-orange-300/60 **animate-pulse-fast**" // Classe animada mais forte
                >
                  <Rocket className="w-7 h-7 mr-3" />
                  GARANTIR MEU ACESSO AGORA!
                  <ArrowRight className="w-7 h-7 ml-3" />
                </Button>
              </a>
            </div>
            
            {/* Ícone de Garantia */}
            <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-2 text-emerald-400 font-medium">
                    <Clock className="w-5 h-5"/>
                    <p>Risco Zero: 7 Dias de Garantia Incondicional</p>
                </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* ---------------------------------------------------- */}

      {/* Footer */}
      <AnimatedSection>
        <footer className="py-12 px-4 bg-slate-900 border-t border-slate-700">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400 text-sm">
              © 2024 NEXUS - Manual de Alta Performance com IA. Todos os direitos reservados.
            </p>
            <div className="flex justify-center mt-4 space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-cyan-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Termos de Uso</a>
            </div>
          </div>
        </footer>
      </AnimatedSection>
    </div>
  )
} 

// Componente auxiliar extraído para simplificar o JSX principal (Melhor Prática)
function BenefitCard({ icon: Icon, title, description, image }) {
  const gradientClass = title.includes('Estratégica') || title.includes('Competitiva') ? 'from-emerald-500 to-blue-500' : 'from-blue-500 to-emerald-500';

  return (
    <div className="group bg-slate-900/70 p-8 rounded-3xl border border-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-cyan-500/30 hover:transform hover:scale-[1.03] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10">
        <div className={`w-16 h-16 bg-gradient-to-r ${gradientClass} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
