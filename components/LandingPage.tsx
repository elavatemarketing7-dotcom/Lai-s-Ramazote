
import React from 'react';
import { EXPERT, SOCIAL_PROOF_IMAGES, METHOD_IMAGES, TESTIMONIALS } from '../constants';
import Gallery from './Gallery';
import { CheckCircle2, MessageSquare, PlayCircle, MapPin, Instagram, Sparkles, ShieldCheck, Heart, Star, Quote, ArrowRight, Navigation } from 'lucide-react';

const LandingPage: React.FC = () => {
  const handleWhatsApp = () => {
    window.open(EXPERT.whatsapp, '_blank', 'noopener,noreferrer');
  };

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(EXPERT.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center pt-10 md:pt-0 overflow-hidden">
        {/* Abstract Gold Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-[120px] -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full blur-[100px] -ml-20 -mb-20" />
        
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
          <div className="order-2 md:order-1 space-y-10 animate-fade-in-up">
            <div className="space-y-6">
              <span className="text-[#d4af37] font-bold tracking-[0.4em] text-xs uppercase flex items-center gap-2">
                <Sparkles size={14} /> Especialista em Harmonização Facial
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                Realce sua <span className="gold-text">Beleza Única</span> com Naturalidade
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light leading-relaxed">
                Descubra o equilíbrio perfeito entre técnica avançada e sensibilidade estética. 
                Protocolos exclusivos desenhados para realçar o que há de melhor em você.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleWhatsApp}
                className="px-10 py-5 bg-[#d4af37] text-[#0a0a0a] rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-[#d4af37]/20 flex items-center justify-center gap-2 group"
              >
                <MessageSquare size={20} />
                AGENDAR CONSULTA
              </button>
              <a 
                href={EXPERT.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Instagram size={20} />
                VER NO INSTAGRAM
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-[#d4af37]">5+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">Anos de Exp.</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-[#d4af37]">1k+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">Resultados</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-[#d4af37]">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">Exclusivo</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
              <img src={EXPERT.mainPhoto} alt={EXPERT.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-2xl p-6 rounded-3xl border border-white/20 shadow-2xl animate-float max-w-[200px]">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-[#d4af37] text-[#d4af37]" />)}
              </div>
              <p className="text-sm font-medium italic">"A melhor experiência em harmonização que já tive. Super natural!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VIDEO INTRO */}
      <section className="py-24 md:py-32 bg-[#0d0d0d] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Uma jornada de <span className="gold-text">autocuidado</span> e autoestima.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed italic max-w-3xl mx-auto">
              "{EXPERT.introText}"
            </p>
          </div>

          <div className="relative w-full max-w-6xl mx-auto aspect-video rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_0_80px_rgba(212,175,55,0.15)] border border-white/10 group">
             <video 
              src={EXPERT.introVideo} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              controls 
              poster={EXPERT.secondaryPhotos[0]}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 3. THE METHOD SECTION */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="gold-text uppercase tracking-[0.4em] text-xs font-bold">Protocolos Exclusivos</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">O Método <span className="gold-text">Ramazote</span></h2>
            <p className="text-gray-400 text-lg">Um olhar artístico sobre a anatomia individual, buscando o rejuvenescimento sem perder a sua identidade.</p>
          </div>
          
          <Gallery images={METHOD_IMAGES} />
        </div>
      </section>

      {/* 4. RESULTS GALLERY */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-bold">Resultados <span className="gold-text">Reais</span></h2>
            <p className="text-gray-400 text-lg">Impactos profundos na autoestima das minhas pacientes.</p>
          </div>
          <button onClick={handleWhatsApp} className="text-[#d4af37] font-bold uppercase tracking-widest hover:underline flex items-center gap-2 group">
            Quero um resultado assim <PlayCircle size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <Gallery images={SOCIAL_PROOF_IMAGES} />
      </section>

      {/* 5. PATIENT FEEDBACK - FULL VISIBILITY VERSION */}
      <section className="py-32 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-20 space-y-6">
            <div className="bg-[#d4af37]/10 p-4 rounded-full inline-block mb-4 border border-[#d4af37]/20">
              <MessageSquare size={32} className="text-[#d4af37]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              O que dizem as <span className="gold-text italic">Nossas Pacientes</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl font-light">
              Transparência e resultados reais através das palavras de quem confiou no Método Ramazote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.map((img, i) => (
              <div 
                key={i} 
                className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#111111] p-1 shadow-xl transition-all duration-500 hover:border-[#d4af37]/40"
              >
                <div className="relative rounded-[1.8rem] overflow-hidden">
                  <img 
                    src={img} 
                    alt="Feedback de Paciente" 
                    className="w-full h-auto object-contain block opacity-100 grayscale-0 transition-all duration-500" 
                  />
                </div>
                {/* Visual anchor for authenticity */}
                <div className="absolute bottom-4 right-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Relato Real</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button 
              onClick={handleWhatsApp}
              className="px-12 py-6 bg-[#d4af37] text-[#0a0a0a] rounded-[2rem] font-bold text-lg hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto shadow-2xl shadow-[#d4af37]/20 group"
            >
              <span>AGENDAR MINHA AVALIAÇÃO AGORA</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-xs text-gray-500 italic uppercase tracking-widest font-medium">Restam poucas vagas para este mês</p>
          </div>
        </div>
      </section>

      {/* NEW: MAP & LOCATION SECTION */}
      <section className="py-24 bg-[#0d0d0d] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-[#d4af37] font-bold tracking-widest text-xs uppercase">Onde estamos</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold">Localização <span className="gold-text italic">Privilegiada</span></h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Localizada no coração do Multi Open Shopping em Florianópolis, nossa clínica oferece um ambiente exclusivo, discreto e sofisticado para o seu atendimento.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/10">
                  <MapPin className="text-[#d4af37] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Endereço</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{EXPERT.address}</p>
                  </div>
                </div>

                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(EXPERT.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/20 rounded-2xl text-white font-bold hover:bg-white/10 transition-all group"
                >
                  <Navigation size={20} className="text-[#d4af37]" />
                  COMO CHEGAR PELO GPS
                </a>
              </div>
            </div>

            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl h-[450px] group">
              <iframe 
                src={mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.6) invert(0.9) contrast(1.2)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-700 group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-100"
              />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.4)]" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. LOCATION / FOOTER */}
      <footer className="py-24 border-t border-white/5 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <h2 className="text-5xl font-serif font-bold gold-text">{EXPERT.name}</h2>
              <p className="text-gray-400 max-w-md mx-auto md:mx-0">{EXPERT.profession} - Elevando o padrão da estética facial com sofisticação e ciência.</p>
            </div>
            
            <div className="flex justify-center md:justify-start gap-6">
              <a href={EXPERT.instagram} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all border border-white/10">
                <Instagram size={24} />
              </a>
              <a href={EXPERT.whatsapp} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all border border-white/10">
                <MessageSquare size={24} />
              </a>
            </div>
          </div>
          
          <div className="bg-[#111111] p-12 rounded-[3.5rem] border border-[#d4af37]/20 space-y-8 text-center shadow-[0_0_50px_rgba(212,175,55,0.1)]">
            <div className="space-y-3">
              <h3 className="text-3xl font-serif font-bold text-white">Pronta para sua transformação?</h3>
              <p className="text-gray-400 font-light">As vagas para atendimento personalizado são extremamente limitadas.</p>
            </div>
            <button 
              onClick={handleWhatsApp}
              className="w-full py-6 bg-[#d4af37] text-[#0a0a0a] rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-xl shadow-[#d4af37]/30 flex items-center justify-center gap-3"
            >
              <MessageSquare size={24} fill="#0a0a0a" />
              FALAR COM A EQUIPE
            </button>
          </div>
        </div>
        
        <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-[10px] uppercase tracking-[0.4em]">
          <p>© {new Date().getFullYear()} {EXPERT.name}. Todos os direitos reservados. Design Premium.</p>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
