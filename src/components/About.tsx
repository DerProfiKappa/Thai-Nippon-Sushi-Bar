import interiorImage from "@/assets/restaurant-interior.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-slide-up">
            <img
              src={interiorImage}
              alt="Thai-Nippon-Sushi-Bar Restaurant Interieur"
              className="rounded-2xl shadow-elegant w-full h-auto"
            />
          </div>
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Unsere Geschichte</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Thai-Nippon-Sushi-Bar entstand aus dem Traum einer thailändischen Familie, 
              die authentischen Aromen Bangkoks mit der pulsierenden Stadt Berlin zu teilen. 
              Nach Jahren der Perfektionierung traditioneller Rezepte, die über Generationen 
              weitergegeben wurden, haben wir unsere Türen geöffnet, um Ihnen das authentischste 
              thailändische Esserlebnis außerhalb Thailands zu bieten.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Jedes Gericht, das wir servieren, wird mit Leidenschaft zubereitet, unter 
              Verwendung frischester Zutaten und traditionsreicher Kochtechniken. Von unseren 
              duftenden Currys bis zu unserem perfekt ausbalancierten Pad Thai erzählt jeder 
              Teller eine Geschichte des thailändischen kulinarischen Erbes.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-foreground">
              "Thailändisches Essen zu kochen ist nicht nur unser Job — es ist unsere Art, 
              Glück zu teilen."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
