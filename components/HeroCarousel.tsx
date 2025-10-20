import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const heroSlides = [
  {
    id: 1,
    city: 'Baependi',
    image: 'https://images.unsplash.com/photo-1544456808-7530b2d112df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGNodXJjaCUyMGJyYXppbCUyMGNvbG9uaWFsfGVufDF8fHx8MTc2MDc4ODQ5OHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    city: 'Caxambu',
    image: 'https://images.unsplash.com/photo-1598569642283-b6212ee48cc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5hcyUyMGdlcmFpcyUyMGxhbmRzY2FwZSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NjA3ODg0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    city: 'São Lourenço',
    image: 'https://images.unsplash.com/photo-1754797007248-12a4a9550102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbmlhbCUyMHRvd24lMjBhZXJpYWwlMjB2aWV3JTIwYnJhemlsfGVufDF8fHx8MTc2MDc4ODQ5OXww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-[#006BA6] overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 relative z-10">
            <h1 className="text-white text-[24px] font-[Roboto]">
              Bem-vindo ao Circuito das Águas
            </h1>
            <p className="text-white/90 max-w-lg font-[Roboto]">
              O Circuito das Águas de Minas Gerais é uma instância de Governança Regional do Turismo cujo objetivo é ordenar o turismo na região, utilizando-se de uma rede de parceiros na organização e na promoção da atividade turística regional, de forma sustentável, através da integração contínua dos municípios para consolidar uma identidade regional. Atualmente o Circuito das Águas é composto por 15 municípios.
            </p>
            <Button 
              variant="secondary" 
              className="bg-white text-[#006BA6] hover:bg-white/90"
            >
              Saiba mais →
            </Button>
          </div>

          {/* Right Carousel */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.city}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded">
                    <span className="text-[#006BA6] font-[Roboto]">{slide.city}</span>
                  </div>
                </div>
              ))}
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 100" className="w-full h-auto">
          <path
            d="M0,50 C300,80 600,20 900,50 C1050,65 1200,50 1200,50 L1200,100 L0,100 Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
