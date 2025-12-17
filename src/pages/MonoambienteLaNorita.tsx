import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageCarousel from "@/components/ImageCarousel";
import { Link } from "react-router-dom";
import { ArrowLeft, Wifi, Tv, BedDouble, Refrigerator, ShowerHead, UtensilsCrossed, Waves, Heart } from "lucide-react";
import monoambiente1 from "@/../public/monoambiente/1.jpg"
import monoambiente2 from "@/../public/monoambiente/2.jpg";
import monoambiente3 from "@/../public/monoambiente/3.jpg";
import monoambiente4 from "@/../public/monoambiente/4.jpg";
import monoambiente5 from "@/../public/monoambiente/5.jpg";
import monoambiente6 from "@/../public/monoambiente/6.jpg";


const amenities = [
  { icon: Heart, text: "Monoambiente ideal para parejas" },
  { icon: BedDouble, text: "Habitación con cama matrimonial" },
  { icon: Tv, text: "Televisión" },
  { icon: Wifi, text: "WiFi" },
  { icon: Refrigerator, text: "Heladera" },
  { icon: UtensilsCrossed, text: "Cocina equipada" },
  { icon: ShowerHead, text: "Baño completo" },
  { icon: Waves, text: "Kayak y Canoa incluidos" },
];

const MonoambienteLaNorita = () => {
  const images = [monoambiente1, monoambiente2, monoambiente3, monoambiente4, monoambiente5, monoambiente6 ];

  return (
    <div className="min-h-screen bg-background" id="top">
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
          <ImageCarousel images={images} alt="Monoambiente La Norita" />
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                <Heart size={14} /> Ideal para parejas - 2 personas
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                Monoambiente La Norita
              </h1>
              <p className="font-display text-xl md:text-2xl text-primary mb-6">
                Tu Refugio Romántico en el Delta
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                ✨ Islas Delta | 🏡 Paisajes naturales | 🌱 Contacto con la naturaleza
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mt-4">
                Ubicado en Río Capitán 885, 1616 Tigre, Provincia de Buenos Aires. 
                El escape perfecto para parejas que buscan tranquilidad y conexión con la naturaleza.
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                ¿Qué incluye?
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

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="font-body text-muted-foreground mb-4">
                ¿Te interesa reservar este monoambiente?
              </p>
              <a
                href="https://wa.me/5491163308592?text=Hola! Me interesa reservar el Monoambiente La Norita"
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

export default MonoambienteLaNorita;
