import { useState, useEffect } from 'react';
// Ícones importados da biblioteca lucide-react (verifique se ela está instalada)
import { ArrowRight, Zap, Target, Rocket, Brain, Sparkles, TrendingUp } from 'lucide-react';
import './App.css';

/* LEMBRETE: Verifique se os nomes dos arquivos de imagem na sua pasta 'src/assets'
  são EXATAMENTE os mesmos que estão listados abaixo.
*/

// Imagens existentes
import brainNetworkImg from './assets/1000393266.jpg';
import neuronImg from './assets/1000393265.jpg';
import neuralNetworkImg from './assets/1000393264.jpg';
import laptopNeuralImg from './assets/1000393263.jpg';
import nexusLogoImg from './assets/1000393277.png';
import brainAIImg from './assets/1000393262.jpg';
import platosCaveImg from './assets/1000396070.jpg';
import digitalToolsImg from './assets/1000395915.jpg';
import dataAnalysisImg from './assets/1000395918.jpg';
import ebookImg from './assets/1000393237.png';
import newProductImg from './assets/1000396691.jpg';
import testimonial1Img from './assets/1000396866.jpg';
import testimonial2Img from './assets/1000396868.jpg';
import testimonial3Img from './assets/1000396870.jpg';

// Novas imagens adicionadas
import servicosIaImg from './assets/servicos-ia.jpg';
import produtividadeImg from './assets/produtividade.jpg';


function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white font-['Poppins',sans-serif] overflow-x-hidden">
      
      {/* --- Seção Hero --- */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Efeitos de Fundo */}
        <div className="hidden md:block absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 text-center container mx-auto">
          <img src={nexusLogoImg} alt="Nexus Logo" className="w-24 h-24 mx-auto mb-6"/>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            Desbloqueie o Potencial da Inteligência Artificial
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-8">
            Soluções inovadoras para otimizar seus processos, aumentar a produtividade e gerar vantagem competitiva para o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Botão padrão HTML */}
            <button className="flex items-center justify-center w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            {/* Botão padrão HTML (estilo outline) */}
            <button className="flex items-center justify-center w-full sm:w-auto border border-slate-400 bg-transparent hover:bg-slate-800/50 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Fale Conosco
            </button>
          </div>
        </div>
      </section>

      {/* --- Seção: Ferramentas Práticas (com imagem de fundo) --- */}
      <section 
        id="ferramentas" 
        className="relative py-20 px-4 text-center bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${servicosIaImg})` }}
      >
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto">
          <Sparkles className="mx-auto h-12 w-12 text-emerald-400 mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ferramentas Práticas para Resultados Reais
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-12">
            Nossas soluções de IA são projetadas para se integrar perfeitamente ao seu fluxo de trabalho, fornecendo insights acionáveis e automação inteligente para impulsionar seu sucesso.
          </p>
        </div>
      </section>

      {/* --- Seção: Vantagem Competitiva (com imagem ao lado do texto) --- */}
      <section id="vantagem" className="py-20 px-4 bg-slate-800">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <Rocket className="h-12 w-12 text-emerald-400 mb-4 inline-block"/>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Obtenha Vantagem Competitiva
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Em um mercado em constante mudança, a agilidade é tudo. Aumente a produtividade da sua equipe, otimize operações e tome decisões mais inteligentes baseadas em dados para se manter sempre à frente da concorrência.
            </p>
            {/* Botão padrão HTML */}
            <button className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Descubra Como <TrendingUp className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="flex justify-center">
            <img 
              src={produtividadeImg} 
              alt="Pessoas trabalhando com alta produtividade e tecnologia" 
              className="rounded-xl shadow-2xl w-full max-w-md h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
      
      {/* --- Seção de Features/Soluções --- */}
      <section id="features" className="py-20 px-4">
          <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold mb-12">Nossas Soluções</h2>
              <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-slate-800 p-8 rounded-lg transform hover:-translate-y-2 transition-transform duration-300">
                      <Brain className="h-10 w-10 mb-4 mx-auto text-emerald-400"/>
                      <h3 className="font-bold text-xl mb-2">Análise Preditiva</h3>
                      <p className="text-slate-400">Antecipe tendências e tome decisões proativas.</p>
                  </div>
                  <div className="bg-slate-800 p-8 rounded-lg transform hover:-translate-y-2 transition-transform duration-300">
                      <Zap className="h-10 w-10 mb-4 mx-auto text-emerald-400"/>
                      <h3 className="font-bold text-xl mb-2">Automação de Processos</h3>
                      <p className="text-slate-400">Reduza tarefas manuais e foque no que importa.</p>
                  </div>
                  <div className="bg-slate-800 p-8 rounded-lg transform hover:-translate-y-2 transition-transform duration-300">
                      <Target className="h-10 w-10 mb-4 mx-auto text-emerald-400"/>
                      <h3 className="font-bold text-xl mb-2">Personalização</h3>
                      <p className="text-slate-400">Ofereça experiências únicas para cada cliente.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-900 py-8 px-4 border-t border-slate-700">
        <div className="container mx-auto text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Nexus AI. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
