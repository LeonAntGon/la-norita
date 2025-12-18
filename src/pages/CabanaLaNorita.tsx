import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageCarousel from "@/components/ImageCarousel";
import { Link } from "react-router-dom";
import { ArrowLeft, Wifi, Waves, Home, Users, Ship, TreePine, UtensilsCrossed } from "lucide-react";
import cabanaNorita1 from "@/../public/cabaña-la-norita/1.jpg";
import cabanaNorita2 from "@/../public/cabaña-la-norita/2.jpg";
import cabanaNorita3 from "@/../public/cabaña-la-norita/3.jpg";
import cabanaNorita4 from "@/../public/cabaña-la-norita/4.jpg";
import cabanaNorita5 from "@/../public/cabaña-la-norita/5.jpg";
import cabanaNorita6 from "@/../public/cabaña-la-norita/6.jpg";
import cabanaNorita7 from "@/../public/cabaña-la-norita/7.jpg";
import cabanaNorita8 from "@/../public/cabaña-la-norita/8.jpg";
import cabanaNorita9 from "@/../public/cabaña-la-norita/9.jpg";
import cabanaNorita10 from "@/../public/cabaña-la-norita/10.jpg";
import cabanaNorita11 from "@/../public/cabaña-la-norita/11.jpg";
import cabanaNorita12 from "@/../public/cabaña-la-norita/12.jpg";
import cabanaNorita13 from "@/../public/cabaña-la-norita/13.jpg";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet-async";


const amenities = [
  { icon: Home, text: "3 habitaciones, 2 baños" },
  { icon: UtensilsCrossed, text: "Cocina en isla, living, comedor y biblioteca" },
  { icon: TreePine, text: "Deck con vista al río" },
  { icon: UtensilsCrossed, text: "Parrilla, horno de barro y heladera" },
  { icon: Wifi, text: "WiFi incluido" },
  { icon: Waves, text: "Playa privada" },
  { icon: Ship, text: "Canoa disponible" },
  { icon: TreePine, text: "Gran parque con senderos" },
  { icon: Ship, text: "Muelle con escaleras y amarras" },
  { icon: Ship, text: "Bajada para helicópteros" },
];

const CabanaLaNorita = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#top') {
      const el = document.getElementById('top');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  
  const images = [cabanaNorita1, cabanaNorita2, cabanaNorita3, cabanaNorita4, cabanaNorita5, cabanaNorita6, cabanaNorita7, cabanaNorita8, cabanaNorita9, cabanaNorita10, cabanaNorita11, cabanaNorita12, cabanaNorita13]; 

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
          <ImageCarousel images={images} alt="Cabaña La Norita" />
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Hasta 8 personas
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                Cabaña La Norita
              </h1>
              <p className="font-display text-xl md:text-2xl text-primary mb-6">
                Tu Escapada Completa en el Delta
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                Descubre La Norita, una hermosa casa de estilo único ubicada estratégicamente 
                en el Río Capitán 867, a metros del Río Paraná. Te ofrecemos todo para una 
                estadía perfecta en el Delta.
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
                ¿Te interesa reservar esta cabaña?
              </p>
              <a
                href="https://wa.me/5491163308592?text=Hola! Me interesa reservar la Cabaña La Norita"
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
    </>
  );
};

export default CabanaLaNorita;
