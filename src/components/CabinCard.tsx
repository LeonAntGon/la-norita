import { Link } from "react-router-dom";
import { Users, ArrowRight } from "lucide-react";

interface CabinCardProps {
  name: string;
  capacity: string;
  benefits: string[];
  image: string;
  href: string;
}

const CabinCard = ({ name, capacity, benefits, image, href }: CabinCardProps) => {
  return (
    <Link
      to={href}
      className="group block bg-card rounded-lg overflow-hidden shadow-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-xl font-semibold text-cream">{name}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <Users size={18} />
          <span className="text-sm font-body">{capacity}</span>
        </div>
        
        <ul className="space-y-2 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-sm text-foreground/80 font-body flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {benefit}
            </li>
          ))}
        </ul>
        
        <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
          Ver más detalles
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
};

export default CabinCard;
