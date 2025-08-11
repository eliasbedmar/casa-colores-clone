import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Music, 
  BookOpen, 
  Calculator, 
  Globe, 
  Puzzle,
  Users,
  Heart
} from "lucide-react";

const AprendeJugando = () => {
  const activities = [
    {
      icon: Palette,
      title: "Arte y Creatividad",
      description: "Expresión artística libre que desarrolla la creatividad y motricidad fina.",
      age: "2-6 años",
      color: "bg-red-500"
    },
    {
      icon: Music,
      title: "Música y Movimiento", 
      description: "Actividades musicales que estimulan el ritmo y la coordinación.",
      age: "1-6 años",
      color: "bg-blue-500"
    },
    {
      icon: BookOpen,
      title: "Cuentos y Lectura",
      description: "Fomento del amor por la lectura a través de cuentos interactivos.",
      age: "2-6 años", 
      color: "bg-green-500"
    },
    {
      icon: Calculator,
      title: "Matemáticas Divertidas",
      description: "Conceptos matemáticos básicos a través de juegos y manipulativos.",
      age: "3-6 años",
      color: "bg-yellow-500"
    },
    {
      icon: Globe,
      title: "Exploración del Mundo",
      description: "Descubrimiento del entorno natural y social que nos rodea.",
      age: "2-6 años",
      color: "bg-purple-500"
    },
    {
      icon: Puzzle,
      title: "Juegos de Lógica",
      description: "Desarrollo del pensamiento lógico mediante puzzles y rompecabezas.",
      age: "3-6 años",
      color: "bg-pink-500"
    }
  ];

  const methodology = [
    {
      icon: Users,
      title: "Aprendizaje Colaborativo",
      description: "Los niños aprenden unos de otros en un ambiente de cooperación y respeto mutuo."
    },
    {
      icon: Heart,
      title: "Educación Emocional",
      description: "Desarrollamos la inteligencia emocional para niños seguros y empáticos."
    },
    {
      icon: BookOpen,
      title: "Metodología Montessori",
      description: "Respetamos el ritmo natural de cada niño con materiales adaptados a su desarrollo."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Metodología Educativa
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-primary">Aprende</span>{" "}
            <span className="text-secondary italic">Jugando</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            En La casita de colores creemos que el juego es la forma natural de aprender. 
            Nuestras actividades están diseñadas para estimular la curiosidad y el desarrollo 
            integral de cada niño.
          </p>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Nuestras Actividades</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada actividad está cuidadosamente planificada para estimular diferentes 
              áreas del desarrollo infantil.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 ${activity.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-center">{activity.title}</CardTitle>
                  <Badge variant="secondary" className="mx-auto w-fit">
                    {activity.age}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Nuestra Metodología</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combinamos las mejores prácticas educativas para crear un ambiente 
              de aprendizaje único y efectivo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodology.map((method, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {method.description}
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              ¿Por qué elegir nuestro método?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="text-left">
                  <h3 className="text-2xl font-semibold mb-3 text-primary">
                    Desarrollo Integral
                  </h3>
                  <p className="text-muted-foreground">
                    Estimulamos todas las áreas del desarrollo: cognitiva, emocional, 
                    social y física, asegurando un crecimiento equilibrado.
                  </p>
                </div>
                
                <div className="text-left">
                  <h3 className="text-2xl font-semibold mb-3 text-secondary">
                    Respeto al Ritmo Individual
                  </h3>
                  <p className="text-muted-foreground">
                    Cada niño es único y tiene su propio ritmo de aprendizaje. 
                    Adaptamos nuestras actividades a las necesidades individuales.
                  </p>
                </div>
                
                <div className="text-left">
                  <h3 className="text-2xl font-semibold mb-3 text-accent">
                    Preparación para el Futuro
                  </h3>
                  <p className="text-muted-foreground">
                    Desarrollamos habilidades fundamentales que serán la base 
                    para el éxito académico y personal futuro.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8">
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold text-primary">100%</div>
                  <p className="text-xl font-semibold">Diversión Garantizada</p>
                  <p className="text-muted-foreground">
                    Nuestros niños aprenden mientras se divierten, 
                    creando asociaciones positivas con el aprendizaje.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AprendeJugando;