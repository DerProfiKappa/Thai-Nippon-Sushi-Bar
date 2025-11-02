"use client";

import { Facebook, Instagram, Phone, MapPin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const SocialFollow = () => {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`relative bg-background py-32 px-4 overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto max-w-4xl text-center">
        
        {/* Main Card */}
        <div className="bg-gradient-to-br from-tertiary-bg via-background to-tertiary-bg border-4 border-primary/40 rounded-3xl p-12 md:p-16 shadow-2xl shadow-primary/20">
          
          <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
            <span className="text-primary text-sm font-body uppercase tracking-widest">Besuchen Sie Uns</span>
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Thai-Nippon<br />Sushi-Bar
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          
          <div className="space-y-4 mb-12">
            <div className="flex items-center justify-center gap-3 text-off-white text-xl">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="font-body">Im Kaufland Berlin-Marienfelde</span>
            </div>
            <p className="font-body text-lg text-cream-beige">
              Montag bis Samstag: 10:00-20:30 Uhr
            </p>
            <div className="flex items-center justify-center gap-3 text-primary text-2xl font-bold">
              <Phone className="w-6 h-6 flex-shrink-0" />
              <a href="tel:015563136888" className="hover:text-gold-highlight transition-colors duration-300">
                0155 6313 6888
              </a>
            </div>
          </div>
          
          {/* Social & Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:015563136888"
              className="inline-flex items-center justify-center gap-2 w-14 h-14 rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/50 hover:rotate-12"
              aria-label="Anrufen"
            >
              <Phone size={24} />
            </a>
            
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-14 h-14 rounded-full bg-[#1877f2] text-white transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/50 hover:rotate-12"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-14 h-14 rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/50 hover:rotate-12"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary text-primary rounded-full w-14 h-14 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-xl hover:shadow-primary/50"
              aria-label="Zur Speisekarte"
            >
              <span className="text-2xl">📄</span>
            </a>
          </div>

          {/* Bottom Text */}
          <p className="mt-10 text-cream-beige/70 text-sm font-body">
            Folgen Sie uns für aktuelle Angebote und kulinarische Inspirationen
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialFollow;