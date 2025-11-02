"use client";

import React from 'react';
import { Phone, MapPin, Clock, Truck } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const EventServiceSection = () => {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section 
      id="contact" 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`relative bg-background py-24 overflow-hidden scroll-mt-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
              <span className="text-primary text-sm font-body uppercase tracking-widest">Lieferservice</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-off-white mb-6">
              Genießen Sie zu Hause
            </h2>
            <p className="text-cream-beige text-lg max-w-2xl mx-auto leading-relaxed">
              Frische Sushi-Spezialitäten und asiatische Delikatessen direkt zu Ihnen nach Hause. Schnell, frisch und lecker!
            </p>
          </div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Phone Card */}
            <div className="group bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary rounded-2xl p-8 hover:border-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Phone className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-body text-sm font-bold tracking-wider uppercase text-primary mb-2">
                    Telefon
                  </h3>
                  <a
                    href="tel:015563136888"
                    className="font-display text-2xl text-off-white font-semibold hover:text-primary transition-colors duration-300 block"
                  >
                    0155 6313 6888
                  </a>
                  <p className="text-cream-beige/70 text-sm mt-2">Rufen Sie uns an!</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group bg-gradient-to-br from-tertiary-bg to-background border-2 border-primary/30 rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/20 border-2 border-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-body text-sm font-bold tracking-wider uppercase text-primary mb-2">
                    Adresse
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/PqW3nrTvH7L3Wz3Q7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-base text-off-white leading-relaxed hover:text-primary transition-colors duration-300 block"
                  >
                    Im Kaufland<br />
                    Buckower Chaussee 100-102<br />
                    12277 Berlin-Marienfelde
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="group bg-gradient-to-br from-tertiary-bg to-background border-2 border-primary/30 rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/20 border-2 border-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-body text-sm font-bold tracking-wider uppercase text-primary mb-2">
                    Öffnungszeiten
                  </h3>
                  <div className="space-y-1">
                    <p className="font-body text-base text-off-white">
                      <span className="font-semibold">Mo-Sa:</span> 10:00-20:30 Uhr
                    </p>
                    <p className="font-body text-base text-off-white">
                      <span className="font-semibold">Sonntag:</span> Geschlossen
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Info Card */}
            <div className="group bg-gradient-to-br from-tertiary-bg to-background border-2 border-primary/30 rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/20 border-2 border-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Truck className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-body text-sm font-bold tracking-wider uppercase text-primary mb-2">
                    Lieferung
                  </h3>
                  <div className="space-y-1">
                    <p className="font-body text-base text-off-white">
                      <span className="font-semibold">Umkreis:</span> 4 km
                    </p>
                    <p className="font-body text-base text-off-white">
                      <span className="font-semibold">Mindestbestellwert:</span> 20€
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-primary via-gold-highlight to-primary p-1 rounded-2xl">
            <div className="bg-background rounded-xl p-10 text-center">
              <p className="font-display text-2xl text-off-white mb-6">
                Bestellen Sie jetzt Ihre Lieblingsgerichte!
              </p>
              <a
                href="tel:015563136888"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-body font-bold text-lg uppercase tracking-wider py-4 px-12 rounded-xl transition-all duration-300 hover:bg-gold-highlight hover:shadow-2xl hover:shadow-primary/40 hover:scale-110"
              >
                <Phone className="w-6 h-6" style={{ color: '#1a0f0a' }} />
                0155 6313 6888
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventServiceSection;