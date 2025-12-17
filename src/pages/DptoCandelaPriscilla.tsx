import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageCarousel from "@/components/ImageCarousel";
import { Link } from "react-router-dom";
import { ArrowLeft, BedDouble, ShowerHead, Wind, Fan, Sofa, UtensilsCrossed, Ship, Waves, Users } from "lucide-react";
import candelaPriscilla1 from "@/../public/dpto/1.jpg";
import candelaPriscilla2 from "@/../public/dpto/2.jpg";
import candelaPriscilla3 from "@/../public/dpto/3.jpg";
import candelaPriscilla4 from "@/../public/dpto/4.jpg";
import candelaPriscilla5 from "@/../public/dpto/5.jpg";
import candelaPriscilla6 from "@/../public/dpto/6.jpg";
import candelaPriscilla7 from "@/../public/dpto/7.jpg";
import candelaPriscilla8 from "@/../public/dpto/8.jpg";
import candelaPriscilla9 from "@/../public/dpto/9.jpg";

const amenities = [
  { icon: BedDouble, text: "1 habitación con cama matrimonial + 2 camas cuchetas" },
  { icon: ShowerHead, text: "Baño completo" },
  { icon: Wind, text: "Aire acondicionado" },
  { icon: Fan, text: "Ventilador" },
  { icon: Sofa, text: "Galería amueblada con mesa y sillones" },
  { icon: UtensilsCrossed, text: "Parrilla y disco para asados 🍖🥩" },
  { icon: Ship, text: "Muelle privado 🏖️" },
  { icon: Waves, text: "Deck frente al río 🏊" },
];

const DptoCandelaPriscilla = () => {
  const images = [candelaPriscilla1, candelaPriscilla2, candelaPriscilla3, candelaPriscilla4, candelaPriscilla5, candelaPriscilla6, candelaPriscilla7, candelaPriscilla8, candelaPriscilla9];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      <main className="pt-20 md:pt-24">
        {/* Back Link */}
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
        </div>

        {/* Hero */}
        <section className="container mx-auto px-4 pb-12">
          <ImageCarousel images={images} alt="Departamento en Candela Priscilla" />
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                <Users size={14} /> Ideal para familias - Hasta 6 personas
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                Departamento en Candela Priscilla
              </h1>
              <p className="font-display text-xl md:text-2xl text-primary mb-6">
                Cerca de La Norita
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                Disfruta del Delta en nuestro departamento ubicado en el predio de 
                Candela Priscilla, Río Capitán 687, a solo 5 minutos de La Norita. 
                Ideal para familias o grupos de hasta 6 personas.
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Te ofrecemos
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <amenity.icon size={20} className="text-primary" />
                    </div>
                    <span className="font-body text-foreground">{amenity.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Note */}
            <div className="mt-8 p-6 bg-sand-light rounded-xl border border-border">
              <p className="font-body text-foreground text-center">
                📍 Ubicado en Río Capitán 687, a solo <strong>5 minutos de La Norita</strong>
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="font-body text-muted-foreground mb-4">
                ¿Te interesa reservar este departamento?
              </p>
              <a
                href="https://wa.me/5491163308592?text=Hola! Me interesa reservar el Departamento en Candela Priscilla"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-whatsapp text-cream font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Consultar disponibilidad
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DptoCandelaPriscilla;
