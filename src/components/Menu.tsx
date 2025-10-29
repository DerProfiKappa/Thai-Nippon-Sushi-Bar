const menuData = {
  Vorspeisen: [
    { name: "Thailändische Frühlingsrollen", description: "Frisches Gemüse in Reispapier gewickelt, serviert mit süßer Chilisauce", price: "€7.50" },
    { name: "Satay Hähnchen", description: "Gegrillte Hähnchenspieße mit Erdnusssauce", price: "€8.90" },
    { name: "Papaya Salat (Som Tam)", description: "Grüne Papaya mit Chili, Limette und Erdnüssen", price: "€7.90" },
  ],
  "Suppen & Currys": [
    { name: "Tom Yum Goong", description: "Pikante und saure Suppe mit Garnelen, Zitronengras und Galgant", price: "€9.90" },
    { name: "Grünes Curry", description: "Kokosnuss-Curry mit Hähnchen, Auberginen und Thai-Basilikum", price: "€13.90" },
    { name: "Massaman Curry", description: "Reichhaltiges Curry mit Rindfleisch, Kartoffeln und gerösteten Erdnüssen", price: "€14.90" },
    { name: "Rotes Curry", description: "Würziges rotes Curry mit Ente und Ananas", price: "€15.90" },
  ],
  "Hauptgerichte": [
    { name: "Pad Thai", description: "Gebratene Reisnudeln mit Garnelen, Tofu, Ei und Erdnüssen", price: "€12.90" },
    { name: "Pad Kra Pao", description: "Thai-Basilikum-Pfanne mit Hähnchen und Chili", price: "€13.50" },
    { name: "Drunken Noodles", description: "Breite Reisnudeln mit Rindfleisch, Gemüse und Thai-Basilikum", price: "€13.90" },
    { name: "Thailändischer Gebratener Reis", description: "Jasminreis mit Gemüse, Ei und Ihrer Wahl an Protein", price: "€11.90" },
  ],
  Desserts: [
    { name: "Mango Sticky Rice", description: "Süßer Klebreis mit frischer Mango und Kokosnusssauce", price: "€6.90" },
    { name: "Frittierte Banane", description: "Bananenkrapfen mit Honig und Sesamsamen", price: "€5.50" },
    { name: "Thailändisches Kokosnusseis", description: "Hausgemachtes Kokosnusseis mit gerösteten Erdnüssen", price: "€5.90" },
  ],
  Getränke: [
    { name: "Thailändischer Eistee", description: "Süßer schwarzer Tee mit Kondensmilch und Eis", price: "€4.50" },
    { name: "Frisches Kokoswasser", description: "Erfrischendes junges Kokoswasser", price: "€4.90" },
    { name: "Zitronengras-Ingwer-Tee", description: "Heißer Kräutertee mit frischem Zitronengras und Ingwer", price: "€3.90" },
  ],
};

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Unsere Speisekarte</h2>
          <p className="text-muted-foreground text-lg">
            Entdecken Sie authentische thailändische Aromen, zubereitet mit Liebe
          </p>
        </div>

        <div className="grid gap-12 max-w-5xl mx-auto">
          {Object.entries(menuData).map(([category, items], categoryIndex) => (
            <div
              key={category}
              className="animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-3xl font-semibold mb-6 text-primary border-b-2 border-primary/20 pb-2">
                {category}
              </h3>
              <div className="grid gap-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                      <span className="text-xl font-semibold text-primary whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
