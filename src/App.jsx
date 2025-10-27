import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
// Ícones importados
import {
  ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp,
  CheckCircle, Sparkles, User, Lightbulb, Search, Eye,
  ClipboardEdit, Code, BarChart, Layout, BrainCircuit, AlertTriangle,
  Clock, Shield, Users
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
import testimonial1Img from './assets/1000396866.jpg' // Imagem para depoimentos
import testimonial2Img from './assets/1000396868.jpg' // Imagem para depoimentos
import testimonial3Img from './assets/1000396866.jpg' // Imagem para depoimentos
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

// Importando os novos arquivos de mídia
import meuVideo from './assets/meu-video.mp4';
import fundo02Img from './assets/fundo02.jpg';
import produtoImg from './assets/produto.jpg';


function App() {
  const [isVisible, setIsVisible] = useState(false) 

  useEffect(() => {
    setIsVisible(true)
  }, []) 

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  } 

  return (
    <div className="min-h-screen bg-[#0B1016] font-['Poppins',sans-serif] overflow-x-hidden">
      
      {/* ======================================================
          SEÇÃO 1: HERO (Problema, Agitação, Solução)
      ====================================================== */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Elementos de fundo */}
        <div className="hidden md:block absolute top-20 left-20 w-72 h-72 bg-[#0D3A46]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-[#0D3A46]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Vídeo de Fundo */}
        <div className="absolute inset-0 opacity-30">
          <video
            src={meuVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-right"
            alt="Vídeo de fundo da Nexus"
          />
        </div>

        {/* Overlay com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1016]/70 via-[#14222E]/60 to-[#0B1016]/70"></div>

        {/* Conteúdo Principal (Hero) */}
        <AnimatedSection>
          <div className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Badge de Urgência */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8E53]/20 border border-[#FF6B35]/40 rounded-full text-[#FF8E53] text-sm font-medium mb-8 backdrop-blur-sm animate-pulse">
              <AlertTriangle className="w-4 h-4 mr-2" />
              ATENÇÃO: A IA está evoluindo mais rápido que sua capacidade de aprendizado
            </div>

            {/* HEADLINE PRINCIPAL - Focada na Dor */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Cansado de se sentir <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] bg-clip-text text-transparent">ultrapassado</span> pela velocidade da IA?
            </h1>

            {/* SUBHEADLINE - Problema Específico */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              <span className="text-[#FF8E53] font-semibold">Toda semana surge uma ferramenta nova</span>, todo mês uma atualização revolucionária, e você fica sempre 
              <span className="text-[#FF6B35] font-semibold"> correndo atrás do prejuízo</span>, sem nunca conseguir dominar de verdade.
            </p>

            {/* CARTÕES: Pain Points List (MANTIDOS) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="flex items-start space-x-3 text-gray-300">
                <div className="w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="w-3 h-3 text-white" />
                </div>
                <span className="text-left">Você investe tempo aprendendo uma ferramenta e ela já está desatualizada</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <div className="w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="w-3 h-3 text-white" />
                </div>
                <span className="text-left">O excesso de informações paralisa sua capacidade de decisão</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <div className="w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="w-3 h-3 text-white" />
                </div>
                <span className="text-left">Seus concorrentes estão usando IA e você está ficando para trás</span>
              </div>
            </div>

            {/* CARTÃO: Solução - Transformação (MANTIDO) */}
            <div className="bg-gradient-to-r from-[#14222E]/50 to-[#1C2A35]/50 p-8 rounded-2xl border border-[#0D3A46]/30 mb-12 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                E se você pudesse <span className="text-[#4FD1C5]">dominar as bases fundamentais</span> que funcionam independentemente das ferramentas que surgirem?
              </h2>
              <p className="text-lg text-gray-300">
                O Nexus não te ensina ferramentas passageiras, mas sim os <span className="text-[#38B2AC] font-semibold">princípios imutáveis</span> da alta performance com IA que vão mantê-lo relevante pelos próximos 10 anos.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ======================================================
          NOVA SEÇÃO 2: Prova Social (com fundo02.jpg)
      ====================================================== */}
      <section 
        id="secao-2" 
        className="relative py-20 px-4 bg-cover bg-center bg-fixed" // bg-fixed cria o efeito parallax
        style={{ backgroundImage: `url(${fundo02Img})` }}
      >
        {/* Overlay para legibilidade */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <AnimatedSection>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              Não Acredite Apenas na Nossa Palavra
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
              Veja o que profissionais como você estão dizendo após dominar os princípios do Nexus.
            </p>
            
            {/* Depoimentos (usando as imagens que você importou) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Depoimento 1 */}
              <div className="bg-[#14222E]/60 p-8 rounded-2xl border border-[#0D3A46]/30 backdrop-blur-sm">
                <img src={testimonial1Img} alt="Depoimento 1" className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-[#4FD1C5]" />
                <p className="text-gray-300 mb-4 italic">"Eu estava perdido. Agora, finalmente sinto que estou no controle da tecnologia, e não o contrário."</p>
                <h4 className="text-white font-semibold">Andre S.</h4>
                <p className="text-[#4FD1C5]">Desenvolvedor Sênior</p>
              </div>
              {/* Depoimento 2 */}
              <div className="bg-[#14222E]/60 p-8 rounded-2xl border border-[#0D3A46]/30 backdrop-blur-sm">
                <img src={testimonial2Img} alt="Depoimento 2" className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-[#4FD1C5]" />
                <p className="text-gray-300 mb-4 italic">"O módulo sobre princípios imutáveis mudou meu jogo. Parei de correr atrás de 'ferramentas da moda'."</p>
                <h4 className="text-white font-semibold">Juliana M.</h4>
                <p className="text-[#4FD1C5]">UX Designer</p>
              </div>
              {/* Depoimento 3 */}
              <div className="bg-[#14222E]/60 p-8 rounded-2xl border border-[#0D3A46]/30 backdrop-blur-sm">
                <img src={testimonial3Img} alt="Depoimento 3" className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-[#4FD1C5]" />
                <p className="text-gray-300 mb-4 italic">"Essencial. Direto ao ponto. É o manual que faltava para quem não tem tempo a perder."</p>
                <h4 className="text-white font-semibold">Marcos P.</h4>
                <p className="text-[#4FD1C5]">Gestor de Projetos</p>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </section>

      {/* ======================================================
          SEÇÃO 3: FECHAMENTO (Benefícios, Produto, CTA)
      ====================================================== */}
      <section className="relative px-4 py-20 overflow-hidden">
        <AnimatedSection>
          <div className="relative z-10 text-center max-w-6xl mx-auto">
            {/* Título e Subtítulo da Seção CTA */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              O Futuro Não Espera por Ninguém
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              <span className="text-[#FF6B35] font-semibold">72% dos profissionais</span> que não se adaptarem à IA nos próximos 2 anos serão substituídos. 
              <span className="text-[#4FD1C5] font-semibold"> Escolha de qual lado você quer estar.</span>
            </p>

            {/* CARTÕES: Benefícios Rápidos (MANTIDOS) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-[#4FD1C5]" />
                </div>
                <h4 className="text-white font-semibold mb-2">Acesso Imediato</h4>
                <p className="text-gray-400">Comece em minutos após a compra</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-[#4FD1C5]" />
                </div>
                <h4 className="text-white font-semibold mb-2">Garantia de 7 Dias</h4>
                <p className="text-gray-400">Sem perguntas, sem riscos</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-[#4FD1C5]" />
                </div>
                <h4 className="text-white font-semibold mb-2">Suporte Exclusivo</h4>
                <p className="text-gray-400">Tire dúvidas diretamente</p>
              </div>
            </div>

            {/* Imagem do Produto (Adicionada) */}
            <div className="my-12 px-4">
              <img 
                src={produtoImg} 
                alt="Imagem do Produto Nexus" 
                className="w-full max-w-2xl mx-auto rounded-xl shadow-2xl border-2 border-[#1C2A35]"
              />
            </div>

            {/* Botão Final CTA (Abaixo da Imagem) */}
            <div className="pulse-button-container max-w-md mx-auto">
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full h-16 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF6B35]/90 hover:to-[#FF8E53]/90 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105 border-0 pulse-button">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  QUERO ME ATUALIZAR AGORA
                </Button>
              </a>
            </div>

            {/* Garantia Final */}
            <div className="mt-8 text-gray-400">
              <p className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#4FD1C5] mr-2" />
                <span>Compra 100% segura • Acesso imediato • Suporte prioritário</span>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ======================================================
          SEÇÃO 4: FOOTER
      ====================================================== */}
      <section>
        <AnimatedSection>
          <footer className="py-12 px-4 bg-[#0B1016] border-t border-[#1C2A35]">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-gray-400 text-lg">
                © 2024 NEXUS - Manual de Alta Performance com IA. Todos os direitos reservados.
              </p>
            </div>
          </footer>
        </AnimatedSection>
      </section>
    </div>
  )
} 

export default App
