
import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import QuizResult from './components/QuizResult';
import { EXPERT } from './constants';

enum FlowState {
  WELCOME,
  QUIZ,
  ANALYZING,
  RESULT,
  MAIN_SITE
}

const App: React.FC = () => {
  const [flow, setFlow] = useState<FlowState>(FlowState.WELCOME);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  const handleStartQuiz = () => setFlow(FlowState.QUIZ);
  const handleGoToSite = () => setFlow(FlowState.MAIN_SITE);
  
  const handleQuizFinish = (answers: string[]) => {
    setQuizAnswers(answers);
    setFlow(FlowState.ANALYZING);
    setTimeout(() => {
      setFlow(FlowState.RESULT);
    }, 2500);
  };

  const handleDirectWhatsApp = () => {
    window.open(EXPERT.whatsapp, '_blank', 'noopener,noreferrer');
  };

  if (flow === FlowState.WELCOME) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Image for context */}
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center grayscale" 
          style={{ backgroundImage: `url(${EXPERT.mainPhoto})` }}
        />
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[120px]" />

        <div className="z-10 text-center space-y-8 max-w-md w-full bg-white/5 backdrop-blur-xl p-8 rounded-[40px] border border-white/10 shadow-3xl">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-28 h-28 rounded-full border-2 border-[#d4af37] overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.3)] animate-float">
               <img src={EXPERT.mainPhoto} alt={EXPERT.name} className="w-full h-full object-cover" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-white">Bem-vinda ao mundo de <span className="gold-text">{EXPERT.name}</span></h1>
            <p className="text-xs text-[#d4af37] uppercase tracking-[0.3em] font-semibold">Harmonização Facial de Alta Performance</p>
          </div>

          <div className="space-y-4">
            <button 
              onClick={handleStartQuiz}
              className="w-full py-5 bg-[#d4af37] text-[#0a0a0a] rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all shadow-xl shadow-[#d4af37]/20 flex items-center justify-center gap-2 relative overflow-hidden group"
            >
              <div className="absolute inset-0 shimmer opacity-30 group-hover:opacity-50" />
              <span className="relative z-10 uppercase tracking-wider">Avaliação Personalizada</span>
            </button>
            
            <button 
              onClick={handleGoToSite}
              className="w-full py-5 bg-transparent text-white border border-white/20 rounded-2xl font-medium text-lg hover:bg-white/5 transition-all shadow-md"
            >
              ACESSAR SITE DIRETAMENTE
            </button>
            
            <button 
              onClick={handleDirectWhatsApp}
              className="w-full py-4 text-[#d4af37] font-semibold text-lg hover:underline opacity-80 hover:opacity-100 transition-opacity"
            >
              CHAMAR DRA. NO WHATSAPP
            </button>
          </div>
          
          <p className="text-xs text-gray-500 italic">Uma experiência exclusiva para quem busca o melhor.</p>
        </div>
      </div>
    );
  }

  if (flow === FlowState.QUIZ || flow === FlowState.ANALYZING) {
    return (
      <Quiz 
        onFinish={handleQuizFinish} 
        isAnalyzing={flow === FlowState.ANALYZING} 
        onCancel={() => setFlow(FlowState.WELCOME)}
      />
    );
  }

  if (flow === FlowState.RESULT) {
    return (
      <QuizResult 
        answers={quizAnswers} 
        onContinue={() => setFlow(FlowState.MAIN_SITE)}
      />
    );
  }

  return <LandingPage />;
};

export default App;
