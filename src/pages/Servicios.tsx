import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Users, 
  Utensils, 
  BookOpen,
  Heart,
  Star,
  Baby,
  GraduationCap,
  Palette,
  Music
} from "lucide-react";
import { Link } from "react-router-dom";

const Servicios = () => {
  const services = [
    {
      icon: Baby,
      title: "Guardería (0-3 años)",
      description: "Cuidado especializado para los más pequeños con atención personalizada.",
      features: ["Ratio 1:8", "Estimulación temprana", "Adaptación gradual", "Comunicación diaria"],
      price: "Desde 380€/mes",
      highlight: false
    },
    {
      icon: GraduationCap,
      title: "Educación Infantil (3-6 años)",
      description: "Preparación para la educación primaria con metodologías innovadoras.",
      features: ["Ratio 1:15", "Inglés diario", "Proyecto educativo", "Actividades extraescolares"],
      price: "Desde 420€/mes",
      highlight: true
    },
    {
      icon: Utensils,
      title: "Comedor Escolar",
      description: "Menús equilibrados elaborados en nuestras instalaciones.",
      features: ["Menús caseros", "Dietas especiales", "Educación nutricional", "Productos locales"],
      price: "150€/mes",
      highlight: false
    },
    {
      icon: Clock,
      title: "Horario Ampliado",
      description: "Flexibilidad horaria para adaptarse a las necesidades familiares.",
      features: ["Entrada desde 7:30h", "Salida hasta 17:00h", "Actividades lúdicas", "Merienda incluida"],
      price: "80€/mes",
      highlight: false
    }
  ];

  const activities = [
    {
      icon: Palette,
      title: "Talleres de Arte",
      description: "Expresión creativa y desarrollo de la motricidad fina"
    },
    {
      icon: Music,
      title: "Educación Musical",
      description: "Desarrollo del ritmo y estimulación auditiva"
    },
    {
      icon: BookOpen,
      title: "Cuentacuentos",
      description: "Fomento de la lectura y desarrollo del lenguaje"
    },
    {
      icon: Users,
      title: "Psicomotricidad",
      description: "Desarrollo físico y coordinación motora"
    }
  ];

  const benefits = [
    "Material escolar incluido",
    "Seguro de accidentes",
    "Informes de seguimiento",
    "Comunicación familia-escuela",
    "Actividades de temporada",
    "Celebración de cumpleaños"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            Servicios de calidad
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-primary">Nuestros</span>{" "}
            <span className="text-secondary italic">Servicios</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una gama completa de servicios educativos y de cuidado infantil 
            adaptados a las necesidades de cada familia.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Nuestros Programas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Programas educativos diseñados para cada etapa del desarrollo infantil.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow ${
                service.highlight ? 'ring-2 ring-primary shadow-lg' : ''
              }`}>
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Más Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto ${
                    service.highlight ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                  }`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary mb-2">{service.price}</p>
                      <Button 
                        variant={service.highlight ? "default" : "outline"} 
                        size="sm" 
                        className="w-full"
                      >
                        <Link to="/contacto">
                          Más Información
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Actividades Complementarias</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Actividades especiales incluidas en todos nuestros programas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <activity.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">¿Qué Incluyen Nuestros Servicios?</h2>
              <p className="text-lg text-muted-foreground">
                Todos nuestros programas incluyen una serie de beneficios adicionales 
                sin coste extra.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                {benefits.slice(3).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Necesitas más información?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Estaremos encantados de resolver todas tus dudas y mostrarte nuestras instalaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
              <Link to="/contacto">
                Solicitar Información
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary">
              <Link to="/horarios">
                Ver Horarios y Precios
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;