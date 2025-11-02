"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// High-quality optimized images
const galleryImages = [
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/1-1762021277971.jpeg?width=2400&height=1800', alt: 'Premium Sushi-Platter mit Restaurant-Flyer und Broschüre' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/2-1762021278022.jpeg?width=2400&height=1800', alt: 'Kunstvolle Sushi-Komposition auf schwarzer Platte' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/3-1762021278009.jpeg?width=2400&height=1800', alt: 'Elegante Sushi-Auswahl mit Tempura-Rollen' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/4-1762021278031.jpeg?width=2400&height=1800', alt: 'Großes Sushi-Platter mit vielfältigen Spezialitäten' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/5-1762021278035.jpeg?width=2400&height=1800', alt: 'Kunstvolle Sushi-Präsentation auf Steinplatte und Bambusmatte' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/6-1762021277813.jpeg?width=2400&height=1800', alt: 'Elegante Sushi-Komposition im traditionellen Restaurant-Ambiente' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/7-1762021278007.jpeg?width=2400&height=1800', alt: 'Vielfältige Sushi-Platte mit Sashimi und Special Rolls' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/8-1762021277791.jpeg?width=2400&height=1800', alt: 'Knusprige Frühlingsrollen mit süß-scharfer Soße' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/9-1762021277598.jpeg?width=2400&height=1800', alt: 'Frische Avocado-Sushi-Rolle auf schwarzem Teller' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/10-1762021277528.jpeg?width=2400&height=1800', alt: 'Premium Tempura-Inside-Out-Roll mit Kaviar-Topping' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/11-1762021335648.jpeg?width=2400&height=1800', alt: 'Frische Thunfisch-Nigiri mit Mikrogemüse-Garnitur' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/12-1762021335544.jpeg?width=2400&height=1800', alt: 'Sesam-Avocado-Sushi-Rollen auf schwarzer Platte' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/13-1762021335625.jpeg?width=2400&height=1800', alt: 'Gemischtes Sushi-Platter mit Lachs, Thunfisch und Gurken-Maki' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/14-1762021335665.jpeg?width=2400&height=1800', alt: 'Premium Lachs-Nigiri mit frischen Kräutern' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/16-1762021335714.jpeg?width=2400&height=1800', alt: 'Kunstvolles Lachs-Sashimi mit Gurken- und Karotten-Dekoration' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/17-1762021335550.jpeg?width=2400&height=1800', alt: 'Sojasoße wird auf gegrillte Sushi-Nigiri geträufelt' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/18-1762021335703.jpeg?width=2400&height=1800', alt: 'Traditionelle Thunfisch-Maki-Rollen mit Sesam' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/19-1762021335702.jpeg?width=2400&height=1800', alt: 'Exquisite Thunfisch-Nigiri mit Wasabi und Ingwer' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/20-1762021335544.jpeg?width=2400&height=1800', alt: 'Frische Lachs-Nigiri in Premium-Qualität' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/21-1762021481851.jpeg?width=2400&height=1800', alt: 'Elegante Sushi-Platte mit Gurken-Dekoration, Wasabi und Ingwer' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/22-1762021482082.jpeg?width=2400&height=1800', alt: 'Paniertes Hähnchen-Schnitzel mit Reis, Curry-Sauce und frischem Salat' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/23-1762021482112.jpeg?width=2400&height=1800', alt: 'Knuspriges Schnitzel mit Jasminreis, Thai-Curry und Gemüse-Salat' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/24-1762021482055.jpeg?width=2400&height=1800', alt: 'Gebratene Glasnudeln mit Gemüse, Meeresfrüchten und knuspriger Garnitur' },
];

const ITEMS_PER_PAGE = 9;

const PhotoGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.05 });
  
  const totalPages = Math.ceil(galleryImages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentImages = galleryImages.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    const element = document.getElementById('galery');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(startIndex + index);
    setLightboxOpen(true);
  };

  return (
    <section 
      id="galery" 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`bg-gradient-to-b from-background to-tertiary-bg py-24 scroll-mt-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Images className="w-6 h-6 text-primary" />
            <span className="text-primary text-sm font-body uppercase tracking-widest">Galerie</span>
            <Images className="w-6 h-6 text-primary" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-off-white mb-4">
            Unsere Kreationen
          </h2>
          <p className="text-cream-beige text-lg max-w-2xl mx-auto">
            Entdecken Sie die Vielfalt unserer handgefertigten Sushi-Spezialitäten und asiatischen Köstlichkeiten
          </p>
        </div>

        {/* Gallery Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentImages.map((image, index) => (
            <div 
              key={startIndex + index} 
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-tertiary-bg border-2 border-primary/20 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image Number Badge */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {startIndex + index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-3">
            {/* Previous Button */}
            {currentPage > 1 && (
              <button
                onClick={() => goToPage(currentPage - 1)}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-tertiary-bg border-2 border-primary/30 text-cream-beige hover:border-primary hover:bg-primary/10 transition-all duration-300 font-body font-semibold"
              >
                <ChevronLeft className="w-5 h-5" />
                Zurück
              </button>
            )}

            {/* Page Numbers */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={`w-12 h-12 rounded-xl font-body font-bold text-base transition-all duration-300 ${
                    currentPage === pageNum
                      ? 'bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/50'
                      : 'bg-tertiary-bg border-2 border-primary/30 text-cream-beige hover:border-primary hover:bg-primary/10'
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            {/* Next Button */}
            {currentPage < totalPages && (
              <button
                onClick={() => goToPage(currentPage + 1)}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-tertiary-bg border-2 border-primary/30 text-cream-beige hover:border-primary hover:bg-primary/10 transition-all duration-300 font-body font-semibold"
              >
                Weiter
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={galleryImages.map(img => ({ src: img.src, alt: img.alt }))}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
      />
    </section>
  );
};

export default PhotoGallery;