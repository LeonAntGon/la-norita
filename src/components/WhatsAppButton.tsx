import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5491163308592";
  const message = "Hola! Me interesa hacer una reserva en Cabañas La Norita";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-medium hover:scale-110 transition-transform duration-300 animate-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="text-cream" fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
