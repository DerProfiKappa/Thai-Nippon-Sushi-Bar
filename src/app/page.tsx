import { Metadata } from "next";
import Header from "@/components/sections/header";
import HeroSlider from "@/components/sections/hero-slider";
import OpeningHoursReservation from "@/components/sections/opening-hours-reservation";
import FeaturesIcons from "@/components/sections/features-icons";
import LunchOffer from "@/components/sections/lunch-offer";
import AboutRestaurant from "@/components/sections/about-restaurant";
import MenuShowcase from "@/components/sections/menu-showcase";
import EventServiceSection from "@/components/sections/event-service";
import PhotoGallery from "@/components/sections/photo-gallery";
import SocialFollow from "@/components/sections/social-follow";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Thai-Nippon Sushi-Bar | Sushi & Asiatische Küche Berlin-Marienfelde",
  description: "Frische Sushi-Spezialitäten, Thai-Gerichte und Vietnam Pho im Kaufland Berlin-Marienfelde. Lieferservice verfügbar. Tel: 0155 6313 6888",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Header />
      <main className="pt-20">
        <HeroSlider />
        <OpeningHoursReservation />
        <FeaturesIcons />
        <LunchOffer />
        <AboutRestaurant />
        <MenuShowcase />
        <EventServiceSection />
        <PhotoGallery />
        <SocialFollow />
      </main>
      <Footer />
    </div>
  );
}