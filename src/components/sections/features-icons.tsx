"use client";

import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface Feature {
  iconSrc: string;
  title: string;
  description: string;
  alt: string;
}

const features: Feature[] = [
  {
    iconSrc:
      'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3b17e36-65f6-46fc-9eba-32bf4a53bf7c-n14-stuttgart-de/assets/images/sushi-2.png',
    title: 'Frisches Sushi',
    description: 'Täglich frisch zubereitet mit Premium-Zutaten',
    alt: 'Sushi pieces icon',
  },
  {
    iconSrc:
      'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3b17e36-65f6-46fc-9eba-32bf4a53bf7c-n14-stuttgart-de/assets/images/food-drink-2-1.png',
    title: 'Thai & Vietnam',
    description: 'Authentische Rezepte aus Südostasien',
    alt: 'Asian food bowl icon',
  },
  {
    iconSrc:
      'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3b17e36-65f6-46fc-9eba-32bf4a53bf7c-n14-stuttgart-de/assets/images/food-drink-3-3.png',
    title: 'Getränke',
    description: 'Erfrischende Auswahl an asiatischen Getränken',
    alt: 'Drinks icon',
  },
  {
    iconSrc:
      'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3b17e36-65f6-46fc-9eba-32bf4a53bf7c-n14-stuttgart-de/assets/images/location2-4.png',
    title: 'Lieferservice',
    description: '4km Umkreis • Mindestbestellwert 20€',
    alt: 'Delivery location icon',
  },
];

const FeaturesIcons = () => {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`bg-background py-24 px-4 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm font-body uppercase tracking-wider">Unsere Stärken</span>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-off-white mb-4">
            Warum Thai-Nippon?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-b from-tertiary-bg/80 to-background border border-primary/20 rounded-2xl p-8 text-center transition-all duration-500 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
              }}
            >
              {/* Icon Container */}
              <div className="relative mb-6 mx-auto w-24 h-24">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-500"></div>
                <div className="relative h-full w-full flex items-center justify-center">
                  <Image
                    src={feature.iconSrc}
                    alt={feature.alt}
                    width={90}
                    height={90}
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <h4 className="font-display text-xl font-semibold text-primary mb-3 uppercase tracking-wide">
                {feature.title}
              </h4>
              <p className="font-body text-sm text-cream-beige/80 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesIcons;