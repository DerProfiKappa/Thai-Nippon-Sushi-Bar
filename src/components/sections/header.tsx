"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import tnLogo from "../../../Logo/1.png";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/#aboutus", label: "Über Uns" },
  { href: "/#menu", label: "Speisekarte" },
  { href: "/#contact", label: "Kontakt" },
  { href: "/#galery", label: "Galerie" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      e.preventDefault();
      const id = href.split("#")[1];
      const element = document.getElementById(id);
      
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      
      if (isMenuOpen) setIsMenuOpen(false);
    } else {
      if (isMenuOpen) setIsMenuOpen(false);
    }
  };

  const renderLink = (link: typeof navLinks[0], isMobile: boolean) => {
    const isExternal = link.href.startsWith("http");
    const isActive = pathname === link.href && !link.href.includes("#");

    const classes = cn(
      "font-body font-medium tracking-[1px] text-off-white hover:text-primary transition-colors duration-300",
      isMobile ? "text-xl" : "text-base",
      { "text-primary": isActive }
    );

    if (isExternal) {
      return (
        <a 
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={classes}
        >
          {link.label}
        </a>
      );
    }
    return (
      <a
        href={link.href}
        className={classes}
        onClick={(e) => handleNavClick(e, link.href)}
      >
        {link.label}
      </a>
    );
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full h-20 bg-[#041c00] shadow-[0_1px_0_0_rgba(212,175,122,0.1)]">
        <div className="container flex items-center justify-between h-full px-[15px] max-w-[1080px]">
          <Link href="/" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14">
                <Image
                  src={tnLogo}
                  alt="Thai Nippon Sushi Bar logo"
                  fill
                  priority
                  sizes="(max-width: 1024px) 48px, 56px"
                  className="object-contain drop-shadow-[0_0_8px_rgba(212,175,122,0.4)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-primary text-lg font-semibold leading-tight">THAI-NIPPON</span>
                <span className="font-body text-cream-beige text-xs tracking-wider">SUSHI-BAR</span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-x-[22px]">
              {navLinks.map((link) => (
                <li key={link.label}>{renderLink(link, false)}</li>
              ))}
            </ul>
          </nav>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-off-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slide-out */}
      <div
        className={cn(
          "fixed top-20 left-0 z-40 h-[calc(100vh_-_80px)] w-full bg-[#041c00] transition-transform duration-300 ease-in-out lg:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex items-center justify-center h-full">
          <ul className="flex flex-col items-center gap-y-8">
            {navLinks.map((link) => (
              <li key={`mobile-${link.label}`}>{renderLink(link, true)}</li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
