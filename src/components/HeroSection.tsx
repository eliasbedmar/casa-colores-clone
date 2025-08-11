import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23f8f4f9" width="1200" height="800"/><g fill-opacity="0.1"><polygon fill="%23ff6b9d" points="957.5,332.5 957.5,532.5 757.5,532.5"/><polygon fill="%234ecdc4" points="957.5,332.5 1157.5,332.5 1157.5,532.5"/><polygon fill="%23ffe66d" points="757.5,532.5 957.5,732.5 757.5,732.5"/></g></svg>')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Award Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Premio 2024 - Mejores de Granada</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary italic">La casita</span>
            <br />
            <span className="text-secondary italic">de colores</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 italic">
            Curiosidad sin límites
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Tu centro infantil ubicado en el centro de Granada donde cuidaremos de tus peques 
            con mucho cariño mientras aprenden jugando.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              <Link to="/contacto" className="flex items-center space-x-2">
                <span>Contáctanos</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2">
              <Link to="/servicios">
                Conoce nuestros servicios
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-accent/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-secondary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-8 h-8 bg-primary/30 rounded-full animate-bounce delay-300"></div>
      </div>
    </section>
  );
};

export default HeroSection;