
import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface GalleryProps {
  images: string[];
  title?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, title }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="w-full">
      {title && <h3 className="text-3xl font-serif text-center mb-10 text-white tracking-wide">{title}</h3>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 px-4 max-w-7xl mx-auto">
        {images.map((src, idx) => (
          <div 
            key={idx} 
            className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#111111] border border-white/5 group cursor-pointer"
            onClick={() => setSelectedImg(src)}
          >
            <img 
              src={src} 
              alt={`Resultado ${idx}`} 
              className="w-full h-full object-cover grayscale opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="p-4 bg-[#d4af37] rounded-full shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                <ZoomIn className="text-[#0a0a0a]" size={32} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 backdrop-blur-xl"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-[#d4af37] transition-all bg-white/10 p-3 rounded-full">
            <X size={32} />
          </button>
          <img 
            src={selectedImg} 
            className="max-w-full max-h-full object-contain rounded-3xl shadow-[0_0_100px_rgba(212,175,55,0.2)] border border-white/10"
            alt="Enlarged result"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
