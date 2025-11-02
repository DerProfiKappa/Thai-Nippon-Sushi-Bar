"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Phone } from "lucide-react";

const AboutRestaurant = () => {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="aboutus"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`relative bg-background py-24 overflow-hidden scroll-mt-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(232, 184, 109, 0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div 
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/6-1762007355763.jpeg?width=800&height=1200&resize=contain"
                alt="Thai-Nippon Sushi-Bar Fresh Sushi"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary rounded-tl-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary rounded-br-3xl"></div>
          </div>

          {/* Content Side */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
              <span className="text-primary text-sm font-body uppercase tracking-widest">Über Uns</span>
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl font-bold text-off-white mb-6 leading-tight">
              Thai-Nippon<br />
              <span className="text-primary">Sushi-Bar</span>
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-8"></div>
            
            <div className="space-y-6 font-body text-cream-beige text-lg leading-relaxed">
              <p className="pl-4 border-l-4 border-primary/50">
                Willkommen bei Thai-Nippon Sushi-Bar im Kaufland Berlin-Marienfelde! Wir bieten Ihnen eine exquisite Auswahl an frisch zubereiteten Sushi-Spezialitäten, authentischen thailändischen und vietnamesischen Gerichten.
              </p>
              <p>
                Von klassischen Maki und Nigiri über kunstvolle Special Rolls bis hin zu aromatischen Pho-Suppen und gebratenen Nudeln – bei uns finden Sie kulinarische Vielfalt auf höchstem Niveau.
              </p>
              <p className="text-off-white/90 font-semibold">
                Unsere Küche vereint die besten Aromen Asiens: Frische Zutaten, traditionelle Zubereitungsmethoden und moderne Interpretationen klassischer Rezepte.
              </p>
              <p>
                Besuchen Sie uns im Kaufland oder nutzen Sie unseren Lieferservice. Wir freuen uns darauf, Sie mit den Delikatessen Asiens zu verwöhnen!
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:015563136888"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-bold text-base uppercase tracking-wider py-4 px-10 rounded-xl transition-all duration-300 hover:bg-gold-highlight hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
              >
                <Phone className="w-5 h-5" style={{ color: '#1a0f0a' }} />
                Jetzt Anrufen
              </a>
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('menu');
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="inline-block bg-transparent border-2 border-primary text-primary font-body font-bold text-base uppercase tracking-wider py-4 px-10 rounded-xl transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Zur Speisekarte
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRestaurant;