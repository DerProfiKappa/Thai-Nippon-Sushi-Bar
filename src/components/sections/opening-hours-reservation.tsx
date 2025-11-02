"use client";

import React from 'react';
import { Clock, Phone, MapPin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const OpeningHoursReservation = () => {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`relative bg-gradient-to-b from-tertiary-bg to-background py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Center Card Design */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Opening Hours Card */}
            <div className="bg-gradient-to-br from-tertiary-bg to-background border-2 border-primary/40 rounded-xl p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-4 uppercase">
                Öffnungszeiten
              </h3>
              <div className="space-y-2 text-cream-beige">
                <p className="font-body text-base">
                  <span className="font-bold text-off-white">Mo-Sa:</span><br />10:00-20:30 Uhr
                </p>
                <p className="font-body text-base">
                  <span className="font-bold text-off-white">Sonntag:</span><br />Geschlossen
                </p>
              </div>
            </div>

            {/* Phone Order Card */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary rounded-xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-off-white mb-3 uppercase">
                Jetzt Bestellen
              </h3>
              <a
                href="tel:015563136888"
                className="inline-block bg-primary text-primary-foreground font-body font-bold text-lg py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gold-highlight hover:scale-110"
              >
                0155 6313 6888
              </a>
              <p className="text-cream-beige text-sm mt-4">
                Lieferung ab 20€
              </p>
            </div>

            {/* Location Card */}
            <div className="bg-gradient-to-br from-tertiary-bg to-background border-2 border-primary/40 rounded-xl p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <a
                href="https://maps.app.goo.gl/PqW3nrTvH7L3Wz3Q7"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <h3 className="font-display text-xl font-semibold text-primary mb-4 uppercase group-hover:text-gold-highlight transition-colors duration-300">
                  Standort
                </h3>
                <p className="font-body text-sm text-cream-beige leading-relaxed group-hover:text-off-white transition-colors duration-300">
                  Im Kaufland<br />
                  Buckower Chaussee<br />
                  100-102<br />
                  Berlin-Marienfelde
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHoursReservation;