import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CabinCard from "@/components/CabinCard";
import { Helmet } from "react-helmet-async";
import TestimonialCard from "@/components/TestimonialCard";
import heroImage from "@/../public/cabaña-la-norita/1.jpg";
import cabanaNorita from "@/../public/cabaña-la-norita/1.jpg";
import monoambiente from "@/../public/monoambiente/1.jpg";
import candelaPriscilla from "@/../public/dpto/portada.jpg";

const cabins = [
  {
    name: "Cabaña La Norita",
    capacity: "Hasta 8 personas",
    benefits: [
      "3 habitaciones, 2 baños",
      "Deck con vista al río",
      "Parrilla y horno de barro",
      "Muelle privado",
    ],
    image: cabanaNorita,
    href: "/cabana-la-norita/#top",
  },
  {
    name: "Monoambiente La Norita",
    capacity: "2 personas",
    benefits: [
      "Ideal para parejas",
      "WiFi y TV",
      "Kayak y canoa incluidos",
      "Baño completo",
    ],
    image: monoambiente,
    href: "/monoambiente-la-norita/#top",
  },
  {
    name: "Dpto en Candela Priscilla",
    capacity: "Hasta 6 personas",
    benefits: [
      "1 habitación + cuchetas",
      "Galería amueblada",
      "Parrilla y disco",
      "Muelle y deck",
    ],
    image: candelaPriscilla,
    href: "/dpto-en-candela-priscilla/#top",
  },
];

const testimonials = [
  {
    name: "Xanlaks Ortiz",
    text: "Juntada de exalumnas durante 3 días lástima el clima, pero eso no nos afecto. Todos los años hacemos una juntadita para despedir el año y contarnos todos lo que nos ha pasado en el transcurso del año. Esta vez \"La norita cabañas\" fue la elegida y no nos equivocamos, fue espectacular ambiente calido, limpieza, comodisimo, amplio. Por eso y mucho mas les doy 5 ✨️✨️✨️✨️✨️ la volveria a elegir. Gracias🙌🙏🏼👍",
    rating: 5,
    date: "Dic 2025",
  },
  {
    name: "Sabrina Lorante",
    text: "Muy lindas",
    rating: 5,
    date: "Feb 2025",
  },
];


const Index = () => {
  return (
    <>
      {/* 🔹 SEO / META */}
      <Helmet>
        <title>Cabañas La Norita | Delta de Tigre</title>
        <meta
          name="description"
          content="Cabañas totalmente equipadas, ideales para descansar y desconectarte. Naturaleza, río y confort en un entorno único."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Cabañas La Norita | Delta de Tigre" />
        <meta
          property="og:description"
          content="Un refugio de paz y naturaleza en el Delta. Reservá directo y sin comisiones."
        />
        <meta property="og:image" content="/og-index.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <WhatsAppButton />

        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden md:h-[100vh]">
          <img
            src={heroImage}
            alt="Cabañas en el Delta del Tigre"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 animate-fade-in">
              <h1 className="font-display text-2xl md:text-6xl font-bold text-cream mb-4 drop-shadow-lg">
                "Aquí encontrarás un refugio de paz y calidez,
              </h1>
              <p className="font-body text-lg md:text-xl text-cream/90 font-bold max-w-xl mx-auto">
                donde cada momento se siente especial."
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

        {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-sand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-body mb-4">
              Testimonios
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Lo que dicen nuestros huéspedes
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Experiencias reales de quienes ya disfrutaron de La Norita
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TestimonialCard {...testimonial} />
              </div>
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
              📍 Río Capitán 885, Tigre, Provincia de Buenos Aires
            </p>

            <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.2262484493895!2d-58.62520082484421!3d-34.55528665494118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbbf367ae665d%3A0x1bd051b6d4880687!2sLa%20norita%20caba%C3%B1as!5e1!3m2!1ses-419!2sar!4v1766006613933!5m2!1ses-419!2sar"
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
    </>
  );
};

export default Index;
