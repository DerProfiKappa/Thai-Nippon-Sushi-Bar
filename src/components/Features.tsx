import { Utensils, Sprout, Heart } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Authentische Rezepte",
    description: "Traditionelle Aromen direkt aus Bangkok",
  },
  {
    icon: Sprout,
    title: "Frische Zutaten",
    description: "Lokal bezogen und biologisch, wo möglich",
  },
  {
    icon: Heart,
    title: "Perfekte Atmosphäre",
    description: "Gemütlich, elegant und einladend",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
