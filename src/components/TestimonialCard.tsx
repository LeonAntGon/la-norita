import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  
  text: string;
  rating: number;
  date?: string;
}

const TestimonialCard = ({ name, text, rating, date }: TestimonialCardProps) => {
  return (
    <div className="relative bg-card p-6 md:p-8 rounded-2xl shadow-card hover:shadow-medium transition-all duration-300 group">
      {/* Quote icon */}
      <Quote className="absolute top-4 right-4 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
      
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${i < rating ? "fill-accent text-accent" : "fill-muted text-muted"} transition-colors`}
          />
        ))}
      </div>
      
      {/* Text */}
      <p className="font-body text-foreground/85 leading-relaxed mb-6 italic">
        "{text}"
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="font-display text-primary font-semibold text-sm">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-display font-semibold text-foreground text-sm">{name}</p>
          
        </div>
        {date && (
          <span className="ml-auto text-xs text-muted-foreground font-body">{date}</span>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
