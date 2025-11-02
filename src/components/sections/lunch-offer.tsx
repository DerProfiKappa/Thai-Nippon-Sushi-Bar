"use client";

import React from "react";
import { ChefHat, Utensils, Soup, Phone, FileText } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const LunchOffer = () => {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section 
      id="lunch-offer" 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`relative bg-gradient-to-br from-tertiary-bg via-background to-tertiary-bg py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="container mx-auto px-4">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
            <span className="text-primary text-sm font-body uppercase tracking-widest">Unsere Spezialitäten</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-off-white mb-4">
            Menü-Highlights
          </h2>
          <p className="text-cream-beige text-lg max-w-2xl mx-auto">
            Entdecken Sie unsere beliebtesten Gerichte - von klassischen Sushi-Sets bis zu authentischen Pho-Suppen
          </p>
        </div>
        
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Sushi Column */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-tertiary-bg/50 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-10 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <ChefHat className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-3xl text-primary mb-6 font-semibold">Sushi-Menüs</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-primary/10 pb-3">
                  <span className="text-cream-beige font-body">Maki Set (18 Stk.)</span>
                  <span className="text-primary font-bold text-lg">11,90€</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-primary/10 pb-3">
                  <span className="text-cream-beige font-body">Inside Out (16 Stk.)</span>
                  <span className="text-primary font-bold text-lg">16,90€</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-primary/10 pb-3">
                  <span className="text-cream-beige font-body">Mix Set (22 Stk.)</span>
                  <span className="text-primary font-bold text-lg">24,90€</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-primary/10 pb-3">
                  <span className="text-cream-beige font-body">Set For 2 (44 Stk.)</span>
                  <span className="text-primary font-bold text-lg">43,90€</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-cream-beige font-body">Set For 4 (80 Stk.)</span>
                  <span className="text-primary font-bold text-lg">87,90€</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vietnam Pho Column */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-tertiary-bg/50 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-10 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Soup className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-3xl text-primary mb-6 font-semibold">Vietnam Pho</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-baseline border-b border-primary/10 pb-3">
                  <span className="text-cream-beige font-body">Pho mit Tofu</span>
                  <span className="text-primary font-bold text-lg">11,00€</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-primary/10 pb-3">
                  <span className="text-cream-beige font-body">Pho mit Hühnerfilet</span>
                  <span className="text-primary font-bold text-lg">11,50€</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-primary/10 pb-3">
                  <span className="text-cream-beige font-body">Pho mit Rindfleisch</span>
                  <span className="text-primary font-bold text-lg">12,00€</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-cream-beige font-body">Pho Kombiniert</span>
                  <span className="text-primary font-bold text-lg">13,00€</span>
                </div>
              </div>
              <p className="text-cream-beige/70 text-xs leading-relaxed italic">
                Traditionelle Reisbandnudelsuppe mit Sojasprossen, Zwiebeln und frischen Kräutern
              </p>
            </div>
          </div>

          {/* Thai Column */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-tertiary-bg/50 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-10 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Utensils className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-3xl text-primary mb-6 font-semibold">Thai Spezialitäten</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-baseline border-b border-primary/10 pb-3">
                  <span className="text-cream-beige font-body">Thai Curry</span>
                  <span className="text-primary font-bold text-lg">ab 9,50€</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-primary/10 pb-3">
                  <span className="text-cream-beige font-body">Thai Mango</span>
                  <span className="text-primary font-bold text-lg">ab 9,00€</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-primary/10 pb-3">
                  <span className="text-cream-beige font-body">Gebratene Nudeln</span>
                  <span className="text-primary font-bold text-lg">ab 7,50€</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-cream-beige font-body">Gebratener Reis</span>
                  <span className="text-primary font-bold text-lg">ab 8,00€</span>
                </div>
              </div>
              <p className="text-cream-beige/70 text-xs leading-relaxed italic">
                Mit frischem Gemüse und Ihrer Wahl an Protein, serviert mit Jasminreis
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-tertiary-bg/50 via-primary/10 to-tertiary-bg/50 border-2 border-primary/30 rounded-2xl p-12 max-w-3xl mx-auto">
          <p className="text-off-white text-xl mb-6 font-display">
            Vollständige Speisekarte mit allen Gerichten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-bold text-base uppercase tracking-wider py-4 px-10 rounded-xl transition-all duration-300 hover:bg-gold-highlight hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              <FileText className="w-5 h-5" style={{ color: '#1a0f0a' }} />
              Speisekarte Ansehen
            </a>
            <a
              href="tel:015563136888"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-primary text-primary font-body font-bold text-base uppercase tracking-wider py-4 px-10 rounded-xl transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:shadow-primary/30"
            >
              <Phone className="w-5 h-5" />
              Jetzt Bestellen
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
    </section>
  );
};

export default LunchOffer;