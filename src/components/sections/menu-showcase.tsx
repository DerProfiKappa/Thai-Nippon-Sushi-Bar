"use client";

import React from 'react';
import Image from 'next/image';
import { FileText, ShoppingBag } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const MenuShowcase = () => {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? '';
  const normalizedBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
  const normalizedSiteUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
  const menuPdfPath = normalizedSiteUrl
    ? `${normalizedSiteUrl}/menu.pdf`
    : `${normalizedBasePath ? `${normalizedBasePath}/` : ''}menu.pdf`;

  return (
    <section
      id="menu"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`relative bg-gradient-to-b from-background via-tertiary-bg to-background py-24 overflow-hidden scroll-mt-20 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`
      }>

      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Card */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-gradient-to-br from-tertiary-bg to-background border-4 border-primary/40 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
            
            {/* Image Gallery Side - 2 columns */}
            <div className="lg:col-span-2 relative min-h-[400px] lg:min-h-0">
              <div className="grid grid-rows-2 gap-0 h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/4-1762007355880.jpeg?width=800&height=600&resize=contain"
                    alt="Fresh Sushi Selection"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1023px) 100vw, 40vw" />

                  <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent"></div>
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/16-1762007355766.jpeg?width=800&height=600&resize=contain"
                    alt="Premium Sashimi Platter"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1023px) 100vw, 40vw" />

                  <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Text Content Side - 3 columns */}
            <div className="lg:col-span-3 p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-cream-beige/95 to-cream-beige">
              <div className="inline-block bg-primary/20 border border-primary rounded-full px-4 py-1 mb-6 self-start">
                <span className="text-primary-foreground text-xs font-body uppercase tracking-widest font-bold">Speisekarte</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
                Unsere<br />
                <span className="text-primary-foreground">Köstlichkeiten</span>
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-primary-foreground to-transparent mb-8"></div>
              
              <div className="font-body text-base text-text-dark/80 mb-10 space-y-3">
                <p className="font-semibold text-text-dark text-lg">Entdecken Sie unsere vielfältige Auswahl:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-primary-foreground mt-1">✦</span>
                    <span>Sushi (Maki, Nigiri, Gunkan)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-foreground mt-1">✦</span>
                    <span>Special & Tempura Rolls</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-foreground mt-1">✦</span>
                    <span>Vietnam Pho Suppen</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-foreground mt-1">✦</span>
                    <span>Thai Spezialitäten</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-foreground mt-1">✦</span>
                    <span>Gebratene Nudeln & Reis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-foreground mt-1">✦</span>
                    <span>Vorspeisen & Mehr</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={menuPdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-off-white rounded-xl py-4 px-8 font-body text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-text-dark hover:shadow-xl hover:scale-105">

                  <FileText className="w-5 h-5" />
                  Speisekarte PDF
                </a>
                <a
                  href="tel:015563136888"
                  className="inline-flex items-center justify-center gap-3 bg-transparent border-3 border-primary-foreground text-text-dark rounded-xl py-4 px-8 font-body text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-primary-foreground hover:text-off-white">

                  <ShoppingBag className="w-5 h-5" />
                  Jetzt Bestellen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default MenuShowcase;
