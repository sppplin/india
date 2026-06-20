import React, { useState, useEffect } from 'react';
import { Award, Zap, Library, Phone, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onContactClick: () => void;
  onCallClick: () => void;
}

const heroSlides = [
  {
    type: 'video',
    url: 'https://1l37nwyltkjspogd.public.blob.vercel-storage.com/4715932-hd_1920_1080_25fps.mp4',
    alt: 'Scientific glassware and liquid processing animation'
  },
  {
    type: 'image',
    url: 'https://1l37nwyltkjspogd.public.blob.vercel-storage.com/Green%20laboratory%20glassware%20on%20reflective%20surface.png',
    alt: 'Yukon India Scientific Research Facility and Lab Diagnostics Manufacture Noida'
  },
  {
    type: 'image',
    url: 'https://1l37nwyltkjspogd.public.blob.vercel-storage.com/banner_2.png',
    alt: 'Premium Laboratory Equipment and Glassware Solutions - Yukon India'
  }
];

export default function HeroSection({ onContactClick, onCallClick }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section className="relative w-full overflow-hidden border-b border-custom" id="hero-section">
      {/* Background Slider with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => {
          if (slide.type === 'video') {
            return (
              <video 
                key={slide.url}
                src={slide.url}
                autoPlay
                loop
                muted
                playsInline
                className={`absolute inset-0 w-full h-full object-cover object-center scale-100 transition-all duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-90' : 'opacity-0 pointer-events-none'
                } filter brightness-[0.70]`}
              />
            );
          }
          return (
            <img 
              key={slide.url}
              src={slide.url} 
              alt={slide.alt} 
              className={`absolute inset-0 w-full h-full object-cover object-center scale-102 transition-all duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-90 scale-100' : 'opacity-0 scale-102 pointer-events-none'
              } filter brightness-[0.80]`}
              fetchPriority={index === 0 ? "high" : "low"}
              loading={index === 0 ? "eager" : "lazy"}
              width="1920"
              height="1080"
              referrerPolicy="no-referrer"
            />
          );
        })}
        {/* Modern dark gradient for high typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/30 lg:from-black/75 lg:via-black/55 lg:to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-6 py-8 lg:py-14 flex flex-col justify-center min-h-[380px] lg:min-h-[460px] text-white">
        {/* Main Content Info Block (rendered compactly) */}
        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl space-y-4">
          {/* Top green banner badge */}
          <div className="inline-flex items-center space-x-2 bg-[#1E4D2B] border border-green-500/20 text-white rounded px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider animate-pulse max-w-max">
            <Zap className="w-3 h-3 shrink-0 text-amber-400 fill-amber-400" />
            <span>INNOVATION FOR TOMORROW</span>
          </div>

          <h2 className="font-heading font-bold text-2xl md:text-4xl lg:text-[38px] leading-tight tracking-tight text-white drop-shadow-md">
            Equipping Labs For<br className="hidden md:inline" /> The Next Generation
          </h2>

          <p className="text-gray-200 text-xs md:text-sm max-w-xl md:max-w-xl lg:max-w-2xl leading-relaxed drop-shadow-sm font-sans font-light">
            From Traditional Glassware to Advanced Instrumentation We Evolve With Science.
          </p>

          {/* Key lab stats block */}
          <div className="grid grid-cols-2 gap-3 max-w-md pt-1">
            <div className="bg-black/45 backdrop-blur-md border border-white/10 rounded p-2.5 flex space-x-2.5 items-center">
              <Award className="w-7 h-7 text-[#3B7D4F] shrink-0" />
              <div>
                <p className="text-[9px] text-gray-300 uppercase tracking-widest font-semibold">Quality Standards</p>
                <p className="text-xs font-bold text-white font-heading">ISO 9001:2015</p>
              </div>
            </div>
            <div className="bg-black/45 backdrop-blur-md border border-white/10 rounded p-2.5 flex space-x-2.5 items-center">
              <Library className="w-7 h-7 text-[#3B7D4F] shrink-0" />
              <div>
                <p className="text-[9px] text-gray-300 uppercase tracking-widest font-semibold">OEM Experience</p>
                <p className="text-xs font-bold text-white font-heading">30+ Years</p>
              </div>
            </div>
          </div>

          {/* Marketing Highlight Bar */}
          <div className="bg-white/5 border border-white/12 rounded p-2 max-w-xl text-xs text-green-300 font-medium">
            Premium Lab Solutions - Direct from Manufacturer. Instant Quote & On-Time Delivery across India.
          </div>

          {/* Actions */}
          <div className="flex flex-row gap-3 pt-2">
            <button
              onClick={onContactClick}
              className="h-[40px] rounded bg-[#1E4D2B] hover:bg-[#14361E] border border-green-600 px-6 text-xs font-bold tracking-wide uppercase transition-all duration-300 shadow-sm flex items-center justify-center space-x-1.5"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-green-300" />
            </button>
            
            <a
              href="tel:+918447512326"
              className="h-[40px] rounded bg-white hover:bg-gray-100 text-[#1E4D2B] px-6 text-xs font-bold tracking-wide uppercase transition-all duration-300 shadow-sm flex items-center justify-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#1E4D2B]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Manual Slide Navigation / Controls */}
      <button 
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Carousel Dots Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2 bg-black/20 backdrop-blur-xs px-2.5 py-1.5 rounded-full border border-white/5">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-[#1E4D2B] w-5' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
