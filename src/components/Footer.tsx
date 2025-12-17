import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">
              Cabañas La Norita
            </h3>
            <p className="font-body text-primary-foreground/80 text-sm leading-relaxed">
              Tu puerta de entrada a la serenidad del Delta del Tigre. 
              Disfruta de la naturaleza en su máxima expresión.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Contacto</h4>
            <div className="space-y-3">
              <a 
                href="tel:+5491163308592" 
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone size={18} />
                <span>9 11 6330-8592</span>
              </a>
              <a 
                href="mailto:vanenn1303@gmail.com" 
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail size={18} />
                <span>vanenn1303@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>Río Capitán 885, 1616 Tigre, Provincia de Buenos Aires</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/vanespitteler.cabanasdelta?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/LaNoritaDelta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Cabañas La Norita. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
