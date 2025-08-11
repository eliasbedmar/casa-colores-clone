import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Heart, Star, Award, Smile } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Aprendizaje Lúdico",
      description: "Metodología basada en el juego para un desarrollo integral y divertido."
    },
    {
      icon: Users,
      title: "Grupos Reducidos",
      description: "Atención personalizada con grupos pequeños para cada niño."
    },
    {
      icon: Heart,
      title: "Cuidado Especializado",
      description: "Personal cualificado que cuida con amor y profesionalidad."
    },
    {
      icon: Smile,
      title: "Ambiente Feliz",
      description: "Espacios diseñados para la alegría y el bienestar infantil."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection />
      
      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Reconocidos por nuestra excelencia
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Nuestro Centro</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pensar. Razonar. Cuestionar. Experimentar. Estas son sólo algunas de las habilidades 
              y cualidades que los niños desarrollarán en La casita de colores. Todas las actividades 
              están diseñadas para nutrir adecuadamente el crecimiento emocional e intelectual de 
              nuestros niños.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Awards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">APARECEMOS EN:</h2>
          <div className="flex justify-center">
            <div className="bg-accent/10 rounded-full p-8 max-w-sm">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Star className="w-8 h-8 text-accent fill-current" />
                <Star className="w-8 h-8 text-accent fill-current" />
                <Star className="w-8 h-8 text-accent fill-current" />
                <Star className="w-8 h-8 text-accent fill-current" />
                <Star className="w-8 h-8 text-accent fill-current" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">2024</h3>
              <p className="text-lg font-semibold">MEJORES DE GRANADA</p>
              <p className="text-muted-foreground">Ranking Guarderías</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar esta aventura?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a nuestra familia y descubre cómo tu hijo puede crecer y aprender jugando.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
              <Link to="/contacto">
                Solicitar Información
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary">
              <Link to="/horarios">
                Ver Horarios
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
