import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CabinCard from "@/components/CabinCard";
import heroImage from "@/assets/hero-delta.jpg";
import cabanaNorita from "@/assets/cabana-norita-1.jpg";
import monoambiente from "@/assets/monoambiente-1.jpg";
import candelaPriscilla from "@/assets/candela-priscilla-1.jpg";

const cabins = [
  {
    name: "Cabaña La Norita",
    capacity: "Hasta 8 personas",
    benefits: ["3 habitaciones, 2 baños", "Deck con vista al río", "Parrilla y horno de barro", "Muelle privado"],
    image: cabanaNorita,
    href: "/cabana-la-norita",
  },
  {
    name: "Monoambiente La Norita",
    capacity: "2 personas",
    benefits: ["Ideal para parejas", "WiFi y TV", "Kayak y canoa incluidos", "Baño completo"],
    image: monoambiente,
    href: "/monoambiente-la-norita",
  },
  {
    name: "Dpto en Candela Priscilla",
    capacity: "Hasta 6 personas",
    benefits: ["1 habitación + cuchetas", "Galería amueblada", "Parrilla y disco", "Muelle y deck"],
    image: candelaPriscilla,
    href: "/dpto-en-candela-priscilla",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt="Cabañas en el Delta del Tigre"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 animate-fade-in">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-4 drop-shadow-lg">
              Cabañas La Norita
            </h1>
            <p className="font-body text-lg md:text-xl text-cream/90 max-w-xl mx-auto">
              Tu refugio en el Delta del Tigre
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-sand-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Bienvenidos al Delta
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              La Norita Cabañas Delta es tu puerta de entrada a la serenidad del Delta. 
              Aquí encontrarás cabañas totalmente equipadas, diseñadas para brindarte 
              confort y funcionalidad en medio de un entorno natural privilegiado. 
              Nos apasiona ofrecerte una experiencia completa, donde no te falte nada 
              para disfrutar de la tranquilidad del río, los paisajes únicos y la 
              desconexión que tanto buscas.
            </p>
          </div>
        </div>
      </section>

      {/* Cabins Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            Nuestras Cabañas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cabins.map((cabin) => (
              <CabinCard key={cabin.name} {...cabin} />
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-4">
            Ubicación
          </h2>
          <p className="font-body text-muted-foreground text-center mb-8">
            📍 Río Capitán 885, 1616 Tigre, Provincia de Buenos Aires
          </p>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.0!2d-58.5!3d-34.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDI0JzAwLjAiUyA1OMKwMzAnMDAuMCJX!5e0!3m2!1ses!2sar!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Cabañas La Norita"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
