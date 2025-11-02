"use client";

import { useEffect, useState, useRef } from 'react';

interface ParallaxOptions {
  speed?: number; // Multiplier for parallax speed (0.1 = slow, 1 = normal speed)
  direction?: 'up' | 'down'; // Direction of parallax movement
  disable?: boolean; // Disable on mobile for performance
}

export function useParallax(options: ParallaxOptions = {}) {
  const { speed = 0.5, direction = 'up', disable = false } = options;
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disable || typeof window === 'undefined') return;

    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate parallax offset based on element position
      const scrollProgress = (scrolled + windowHeight - elementTop) / (windowHeight + elementHeight);
      
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const parallaxOffset = (scrolled - elementTop) * speed;
        setOffset(direction === 'up' ? -parallaxOffset : parallaxOffset);
      }
    };

    // Use requestAnimationFrame for smooth performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll(); // Initial calculation
    window.addEventListener('scroll', scrollListener, { passive: true });

    return () => window.removeEventListener('scroll', scrollListener);
  }, [speed, direction, disable]);

  return { elementRef, offset };
}
