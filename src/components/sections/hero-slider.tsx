"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  headline: string;
  subtext: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage: string;
}

const slideData: Slide[] = [
  {
    headline: "THAI-NIPPON SUSHI-BAR",
    subtext: "Authentische asiatische Küche im Herzen von Berlin-Marienfelde\nFrische Sushi-Spezialitäten, Thai-Gerichte und vietnamesische Klassiker",
    buttonText: "Jetzt bestellen",
    buttonLink: "tel:015563136888",
    backgroundImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/3-1762007355929.jpeg?width=1920&height=1080&resize=contain",
  },
  {
    headline: "SUSHI MEISTERWERKE",
    subtext: "Von klassischen Maki und Nigiri bis zu kunstvollen Special Rolls\nJedes Stück wird mit Präzision und Leidenschaft zubereitet",
    buttonText: "Zur Speisekarte",
    buttonLink: "#menu",
    backgroundImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/5-1762007355932.jpeg?width=1920&height=1080&resize=contain",
  },
  {
    headline: "EXQUISITE SASHIMI",
    subtext: "Frischeste Qualität und kunstvolle Präsentation\nErleben Sie die Reinheit authentischer japanischer Küche",
    buttonText: "Entdecken Sie mehr",
    buttonLink: "#galery",
    backgroundImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/7-1762007355876.jpeg?width=1920&height=1080&resize=contain",
  },
  {
    headline: "KULINARISCHE PERFEKTION",
    subtext: "Traditionelle Handwerkskunst trifft moderne Interpretation\nGenießen Sie Sushi auf höchstem Niveau",
    buttonText: "Zur Speisekarte",
    buttonLink: "#menu",
    backgroundImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/17-1762007355588.jpeg?width=1920&height=1080&resize=contain",
  },
  {
    headline: "FRISCHE QUALITÄT",
    subtext: "Täglich frische Zutaten und traditionelle Zubereitungsmethoden\nFür ein authentisches kulinarisches Erlebnis",
    buttonText: "Jetzt anrufen",
    buttonLink: "tel:015563136888",
    backgroundImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/19-1762007355720.jpeg?width=1920&height=1080&resize=contain",
  },
];

const HeroSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((prevIndex) => (prevIndex === slideData.length - 1 ? 0 : prevIndex + 1));
        setTimeout(() => setIsTransitioning(false), 1000);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((prevIndex) => (prevIndex === 0 ? slideData.length - 1 : prevIndex - 1));
        setTimeout(() => setIsTransitioning(false), 1000);
    };

    const goToSlide = (index: number) => {
        if (isTransitioning || index === activeIndex) return;
        setIsTransitioning(true);
        setActiveIndex(index);
        setTimeout(() => setIsTransitioning(false), 1000);
    };

    const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        if (link.startsWith('#')) {
            e.preventDefault();
            const element = document.getElementById(link.substring(1));
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-black font-body group">
            <div className="relative w-full h-full">
                {slideData.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                          activeIndex === index ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
                        }`}
                    >
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center"
                            style={{
                              backgroundImage: `url('${slide.backgroundImage}')`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>
                        
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                            <div 
                              key={`content-${activeIndex}`}
                              className={`max-w-[800px] mx-auto ${
                                activeIndex === index ? 'animate-slide-text-in' : 'opacity-0'
                              }`}
                            >
                                <h2
                                    className="font-display text-[#d4af7a] uppercase text-[40px] sm:text-[50px] md:text-[64px] font-semibold tracking-[2px] mb-5"
                                    style={{ textShadow: '3px 3px 12px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.7)' }}
                                >
                                    {slide.headline}
                                </h2>
                                <p 
                                    className="text-[#e8d5b7] text-lg md:text-xl leading-relaxed whitespace-pre-line mb-[30px]"
                                    style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)' }}
                                >
                                    {slide.subtext}
                                </p>
                                {slide.buttonText && slide.buttonLink && (
                                    <a
                                        href={slide.buttonLink}
                                        onClick={(e) => handleButtonClick(e, slide.buttonLink!)}
                                        className="inline-block text-sm font-semibold tracking-[1.5px] uppercase text-[#0d1f0f] bg-[#d4af7a] border-2 border-[#d4af7a] py-[14px] px-8 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#e6c896] hover:border-[#e6c896] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(212,175,122,0.4)]"
                                    >
                                        {slide.buttonText}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Arrows - Smaller size (40px) */}
            <div className="absolute z-20 top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-10 pointer-events-none">
                <button
                    onClick={prevSlide}
                    disabled={isTransitioning}
                    className="text-white hover:text-white/80 transition-all duration-500 pointer-events-auto opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 disabled:opacity-50"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={40} strokeWidth={2} />
                </button>
                <button
                    onClick={nextSlide}
                    disabled={isTransitioning}
                    className="text-white hover:text-white/80 transition-all duration-500 pointer-events-auto opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 disabled:opacity-50"
                    aria-label="Next slide"
                >
                    <ChevronRight size={40} strokeWidth={2} />
                </button>
            </div>

            {/* Dots */}
            <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
                {slideData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        disabled={isTransitioning}
                        className={`transition-all duration-500 ease-in-out disabled:opacity-50 ${
                          activeIndex === index 
                            ? 'w-[30px] h-3 bg-[#d4af7a] rounded-md' 
                            : 'w-3 h-3 bg-white/30 rounded-full hover:bg-white/50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;