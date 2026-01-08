
import React from 'react';
import { EXPERT } from '../constants.ts';
import { Send, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

interface QuizResultProps {
  answers: string[];
  onContinue: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ answers, onContinue }) => {
  const whatsappMessage = encodeURIComponent(
    `Olá Dra. Laís! Acabei de realizar minha avaliação personalizada.\n\n` +
    `Principais incômodos: ${answers[0]}\n` +
    `Histórico: ${answers[1]}\n` +
    `Objetivo: ${answers[2]}\n\n` +
    `Gostaria de agendar uma consulta!`
  );

  const handleSendToDra = () => {
    window.open(`${EXPERT.whatsapp}?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppOnly = () => {
    window.open(EXPERT.whatsapp, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-4 text-white overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15)_0%,_transparent_70%)]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-[100px]" />
      </div>

      <div className="z-10 w-full max-w-md bg-[#111111]/90 backdrop-blur-2xl p-6 md:p-8 rounded-[3rem] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col items-center text-center animate-fade-in">
        
        {/* Perfectly Centralized Hero Image Section */}
        <div className="relative mb-6 flex justify-center w-full">
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-[3px] border-[#d4af37] overflow-hidden shadow-2xl animate-float relative z-10 bg-[#0d0d0d]">
              <img 
                src={EXPERT.mainPhoto} 
                alt={EXPERT.name} 
                className="w-full h-full object-cover object-center scale-110 transition-transform duration-700 group-hover:scale-125" 
              />
            </div>
            
            {/* Verification Badge */}
            <div className="absolute bottom-1 right-2 bg-[#d4af37] p-2 rounded-full border-[3px] border-[#111111] z-20 shadow-xl flex items-center justify-center">
              <CheckCircle2 size={16} className="text-[#0a0a0a]" />
            </div>

            {/* Glowing Aura */}
            <div className="absolute inset-0 -m-3 border border-[#d4af37]/30 rounded-full animate-pulse blur-[2px]" />
            <div className="absolute inset-0 -m-1 border border-white/5 rounded-full" />
          </div>
        </div>

        <div className="space-y-3 mb-8 w-full">
          <div className="inline-block px-3 py-1 bg-[#d4af37]/10 rounded-full border border-[#d4af37]/20 mb-2">
            <h2 className="text-[#d4af37] text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase">
              Perfil Compatível • Paciente ideal
            </h2>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-serif font-bold leading-tight">
            Seu perfil é <span className="gold-text italic">perfeito</span> para o meu método.
          </h1>
          
          <p className="text-gray-400 text-sm leading-relaxed max-w-[300px] mx-auto">
            Com base nas suas respostas, o Método da <span className="text-white font-bold">{EXPERT.name}</span> consegue entregar exatamente a <span className="italic">naturalidade</span> e <span className="italic">segurança</span> que você procura.
          </p>
        </div>

        {/* Action Buttons Stack */}
        <div className="w-full space-y-3">
          <button 
            onClick={handleSendToDra}
            className="w-full group relative flex items-center justify-center gap-3 py-4 bg-[#d4af37] text-[#0a0a0a] rounded-2xl font-black text-sm uppercase tracking-wider overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-[#d4af37]/30"
          >
            <div className="absolute inset-0 shimmer opacity-40" />
            <Send size={18} className="relative z-10" />
            <span className="relative z-10">1- Enviar avaliação à Dra.</span>
          </button>

          <button 
            onClick={handleWhatsAppOnly}
            className="w-full flex items-center justify-center gap-3 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-sm hover:bg-white/10 transition-all uppercase tracking-wider active:scale-95"
          >
            <MessageSquare size={18} className="text-[#d4af37]" />
            2- Chamar no Whats sem compromisso
          </button>

          <button 
            onClick={onContinue}
            className="w-full flex items-center justify-center gap-2 py-4 bg-transparent border border-white/5 text-gray-500 rounded-2xl font-medium text-xs hover:text-white transition-all uppercase tracking-widest active:scale-95 group"
          >
            <span>3- Não enviar e continuar no site</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-8 flex items-center gap-3 opacity-30">
           <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#d4af37]" />
           <p className="text-[8px] text-gray-400 uppercase tracking-[0.4em] font-medium whitespace-nowrap">
             Análise de compatibilidade 100% concluída
           </p>
           <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
