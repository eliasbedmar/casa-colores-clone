import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Heart, 
  Users, 
  Award,
  BookOpen,
  Smile,
  Star
} from "lucide-react";

const Equipo = () => {
  const team = [
    {
      name: "María González",
      role: "Directora y Educadora Infantil",
      experience: "15 años de experiencia",
      specialization: "Educación Temprana y Metodología Montessori",
      description: "Especialista en desarrollo infantil con formación en psicopedagogía.",
      image: "M"
    },
    {
      name: "Carmen Rodríguez", 
      role: "Educadora Infantil",
      experience: "10 años de experiencia",
      specialization: "Arte y Creatividad Infantil",
      description: "Experta en actividades artísticas y desarrollo de la creatividad.",
      image: "C"
    },
    {
      name: "Ana Martín",
      role: "Educadora Infantil",
      experience: "8 años de experiencia", 
      specialization: "Música y Psicomotricidad",
      description: "Especializada en educación musical y desarrollo motor.",
      image: "A"
    },
    {
      name: "Laura Fernández",
      role: "Auxiliar de Educación Infantil",
      experience: "5 años de experiencia",
      specialization: "Cuidados y Atención Personalizada",
      description: "Experta en cuidados especializados y atención individual.",
      image: "L"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Amor y Cariño",
      description: "Tratamos a cada niño con el amor y cuidado que merece, creando un ambiente cálido y seguro."
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboramos estrechamente con las familias para el mejor desarrollo de cada niño."
    },
    {
      icon: BookOpen,
      title: "Formación Continua",
      description: "Nuestro equipo se mantiene actualizado con las últimas metodologías educativas."
    },
    {
      icon: Smile,
      title: "Ambiente Positivo",
      description: "Creamos un entorno alegre donde los niños se sienten felices y motivados."
    }
  ];

  const qualifications = [
    {
      icon: GraduationCap,
      title: "Titulación Oficial",
      description: "Todo nuestro personal cuenta con titulación oficial en Educación Infantil"
    },
    {
      icon: Award,
      title: "Formación Especializada",
      description: "Formación continua en metodologías innovadoras y desarrollo infantil"
    },
    {
      icon: Heart,
      title: "Primeros Auxilios",
      description: "Certificación en primeros auxilios pediátricos y seguridad infantil"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Conoce a nuestro equipo
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-primary">Nuestro</span>{" "}
            <span className="text-secondary italic">Equipo</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un grupo de profesionales apasionados por la educación infantil, 
            comprometidos con el desarrollo integral de cada niño.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Conoce a Nuestras Educadoras</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profesionales cualificadas con vocación y experiencia en educación infantil.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl font-bold text-white">{member.image}</span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto w-fit">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm font-semibold text-primary">
                    {member.experience}
                  </p>
                  <p className="text-sm font-medium text-secondary">
                    {member.specialization}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Nuestros Valores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo diario con los niños y sus familias.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Cualificaciones y Formación</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nuestro compromiso con la excelencia se refleja en la preparación 
              continua de nuestro equipo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualifications.map((qual, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <qual.icon className="w-10 h-10 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{qual.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {qual.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="w-8 h-8 text-accent fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-light italic mb-8">
              "El equipo de La casita de colores ha sido fundamental en el desarrollo 
              de nuestra hija. Su profesionalidad y cariño son excepcionales."
            </blockquote>
            <cite className="text-lg opacity-90">
              - Familia García, padres de Sofía (4 años)
            </cite>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Equipo;