
import React, { useState } from 'react';
import { EXPERT, QUIZ_QUESTIONS } from '../constants';
import { ChevronRight, Loader2, X } from 'lucide-react';

interface QuizProps {
  onFinish: (answers: string[]) => void;
  isAnalyzing: boolean;
  onCancel: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onFinish, isAnalyzing, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinish(newAnswers);
    }
  };

  const progress = ((currentStep) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]">
      {/* Background Main Site Preview */}
      <div className="absolute inset-0 opacity-10 filter blur-md grayscale pointer-events-none overflow-hidden">
        <div className="p-10 text-center font-serif text-6xl text-white">LAÍS RAMAZOTE</div>
        <img src={EXPERT.mainPhoto} className="w-full h-full object-cover" alt="" />
      </div>

      <div className="relative w-full h-full max-w-lg md:h-auto md:max-h-[85vh] bg-[#141414]/95 backdrop-blur-2xl md:rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col p-5 md:p-8 overflow-hidden border border-white/10">
        
        {/* Compact Floating Hero Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
           <div className="flex items-center gap-2 md:gap-3">
              <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#d4af37] overflow-hidden bg-[#0a0a0a] shadow-[0_0_10px_rgba(212,175,55,0.2)] animate-float">
                <img src={EXPERT.mainPhoto} alt={EXPERT.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-[#d4af37]">Consulta Digital</h3>
                <h2 className="text-lg md:text-xl font-serif text-white">{EXPERT.name}</h2>
              </div>
           </div>
           <button onClick={onCancel} className="p-2 bg-white/5 rounded-full text-gray-500 hover:text-white transition-colors border border-white/5">
             <X size={18} />
           </button>
        </div>

        {!isAnalyzing ? (
          <div className="flex-1 flex flex-col">
            {/* Progress Bar */}
            <div className="w-full bg-white/5 h-1 rounded-full mb-6 md:mb-10 overflow-hidden">
              <div 
                className="h-full bg-[#d4af37] transition-all duration-500 ease-out shadow-[0_0_8px_rgba(212,175,55,0.5)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="space-y-6 md:space-y-8">
              <h4 className="text-xl md:text-2xl font-serif font-medium text-white leading-tight">
                {QUIZ_QUESTIONS[currentStep].question}
              </h4>
              <div className="grid gap-3 md:gap-4">
                {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(option)}
                    className="w-full p-4 md:p-6 text-left bg-white/5 border border-white/10 rounded-xl md:rounded-2xl hover:border-[#d4af37]/50 hover:bg-white/10 transition-all flex items-center justify-between group shadow-lg active:scale-[0.98]"
                  >
                    <span className="text-base md:text-lg font-medium text-gray-200 group-hover:text-white transition-colors">{option}</span>
                    <ChevronRight size={18} className="text-[#d4af37] opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-auto py-6">
              <button 
                onClick={onCancel}
                className="text-[10px] text-gray-500 font-medium w-full text-center hover:text-[#d4af37] transition-colors uppercase tracking-[0.2em]"
              >
                Voltar ao início
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center space-y-6 md:space-y-8 py-10">
            <div className="relative">
              <div className="w-20 h-20 md:w-28 md:h-28 border-4 border-[#d4af37]/10 rounded-full flex items-center justify-center">
                <Loader2 className="animate-spin text-[#d4af37]" size={40} md:size={48} />
              </div>
              <div className="absolute inset-0 bg-[#d4af37]/5 blur-xl rounded-full" />
            </div>
            <div className="text-center space-y-2 md:space-y-4 px-4">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white uppercase tracking-wider">Analisando Perfil</h3>
              <p className="text-sm md:text-base text-gray-400 font-light">Estamos selecionando os melhores protocolos para o seu rosto...</p>
            </div>
            <div className="w-full max-w-[200px] md:max-w-xs bg-white/5 h-1 rounded-full overflow-hidden">
              <div className="h-full bg-[#d4af37] shimmer w-full" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
