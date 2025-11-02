import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-bg border-t-2 border-primary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          
          {/* Left: Copyright */}
          <div className="text-cream-beige/80 text-sm font-body">
            <p className="flex items-center justify-center md:justify-start gap-2">
              © {new Date().getFullYear()} Thai-Nippon Sushi-Bar
              <Heart className="w-4 h-4 text-primary fill-primary inline-block animate-pulse" />
            </p>
          </div>

          {/* Center: Brand */}
          <div className="text-primary font-display text-lg font-semibold tracking-wider">
            THAI-NIPPON
          </div>

          {/* Right: Links */}
          <div className="flex gap-6 text-sm font-body">
            <a
              href="#"
              className="text-cream-beige/80 hover:text-primary transition-colors duration-300"
            >
              Datenschutz
            </a>
            <span className="text-cream-beige/40">|</span>
            <a
              href="#"
              className="text-cream-beige/80 hover:text-primary transition-colors duration-300"
            >
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;