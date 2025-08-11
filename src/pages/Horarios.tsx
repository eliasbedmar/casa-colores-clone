import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Calendar, 
  MapPin, 
  Phone,
  Coffee,
  Utensils,
  Moon,
  Sun
} from "lucide-react";
import { Link } from "react-router-dom";

const Horarios = () => {
  const schedule = [
    { day: "Lunes", hours: "9:00 - 15:00", extended: "7:30 - 17:00" },
    { day: "Martes", hours: "9:00 - 15:00", extended: "7:30 - 17:00" },
    { day: "Miércoles", hours: "9:00 - 15:00", extended: "7:30 - 17:00" },
    { day: "Jueves", hours: "9:00 - 15:00", extended: "7:30 - 17:00" },
    { day: "Viernes", hours: "9:00 - 15:00", extended: "7:30 - 17:00" },
    { day: "Sábado", hours: "Cerrado", extended: "Cerrado" },
    { day: "Domingo", hours: "Cerrado", extended: "Cerrado" }
  ];

  const dailySchedule = [
    {
      time: "7:30 - 9:00",
      activity: "Recepción y Desayuno",
      description: "Acogida de los niños y desayuno opcional",
      icon: Coffee
    },
    {
      time: "9:00 - 10:30",
      activity: "Actividades Educativas",
      description: "Proyectos temáticos y actividades dirigidas",
      icon: Sun
    },
    {
      time: "10:30 - 11:00",
      activity: "Recreo y Merienda",
      description: "Descanso, juego libre y merienda saludable",
      icon: Coffee
    },
    {
      time: "11:00 - 12:30",
      activity: "Talleres Especializados",
      description: "Arte, música, psicomotricidad según planificación",
      icon: Sun
    },
    {
      time: "12:30 - 13:30",
      activity: "Comida",
      description: "Almuerzo equilibrado y educación nutricional",
      icon: Utensils
    },
    {
      time: "13:30 - 15:00",
      activity: "Descanso y Juego",
      description: "Siesta para los pequeños y juego tranquilo",
      icon: Moon
    },
    {
      time: "15:00 - 17:00",
      activity: "Horario Ampliado",
      description: "Actividades lúdicas y merienda (opcional)",
      icon: Sun
    }
  ];

  const pricing = [
    {
      service: "Guardería (0-3 años)",
      price: "380€",
      period: "mes",
      includes: ["Material escolar", "Seguro", "Informes"]
    },
    {
      service: "Educación Infantil (3-6 años)",
      price: "420€",
      period: "mes", 
      includes: ["Material escolar", "Inglés", "Actividades"]
    },
    {
      service: "Comedor Escolar",
      price: "150€",
      period: "mes",
      includes: ["Menú casero", "Dietas especiales", "Educación nutricional"]
    },
    {
      service: "Horario Ampliado",
      price: "80€",
      period: "mes",
      includes: ["7:30-9:00 y 15:00-17:00", "Merienda", "Actividades"]
    },
    {
      service: "Matrícula",
      price: "100€",
      period: "única",
      includes: ["Reserva de plaza", "Material inicial", "Tramitación"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">
            <Clock className="w-4 h-4 mr-2" />
            Información práctica
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-primary">Horarios</span>{" "}
            <span className="text-secondary italic">y Precios</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Toda la información que necesitas sobre nuestros horarios, precios y servicios.
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Horario Semanal</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos flexibilidad horaria para adaptarnos a las necesidades de cada familia.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>Horario Regular</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {schedule.map((day, index) => (
                      <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${
                        day.hours === "Cerrado" ? "bg-muted/50" : "bg-primary/5"
                      }`}>
                        <span className="font-medium">{day.day}</span>
                        <span className={day.hours === "Cerrado" ? "text-muted-foreground" : "text-primary font-semibold"}>
                          {day.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <Clock className="w-5 h-5 text-secondary" />
                    <span>Horario Ampliado</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {schedule.map((day, index) => (
                      <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${
                        day.extended === "Cerrado" ? "bg-muted/50" : "bg-secondary/5"
                      }`}>
                        <span className="font-medium">{day.day}</span>
                        <span className={day.extended === "Cerrado" ? "text-muted-foreground" : "text-secondary font-semibold"}>
                          {day.extended}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Rutina Diaria</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una jornada estructurada que combina aprendizaje, juego y cuidado.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dailySchedule.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-sm font-bold text-primary">{item.time}</div>
                    <CardTitle className="text-lg">{item.activity}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Tarifas y Precios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Precios transparentes y competitivos para servicios de calidad.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricing.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">{item.service}</CardTitle>
                    <div className="text-3xl font-bold text-primary">
                      {item.price}
                      <span className="text-sm font-normal text-muted-foreground">/{item.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {item.includes.map((include, includeIndex) => (
                        <div key={includeIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{include}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-accent/10 rounded-lg">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Descuentos Disponibles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Hermanos:</strong> 10% descuento en el segundo hijo
                  </div>
                  <div>
                    <strong>Anual:</strong> 5% descuento pagando curso completo
                  </div>
                  <div>
                    <strong>Familias numerosas:</strong> Consultar descuentos especiales
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Información de Contacto</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-8 h-8 text-white/80" />
                <h3 className="font-semibold">Ubicación</h3>
                <p className="text-white/90 text-center">
                  Centro de Granada<br />
                  España
                </p>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <Phone className="w-8 h-8 text-white/80" />
                <h3 className="font-semibold">Teléfono</h3>
                <p className="text-white/90">+34 123 456 789</p>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <Clock className="w-8 h-8 text-white/80" />
                <h3 className="font-semibold">Visitas</h3>
                <p className="text-white/90 text-center">
                  Lunes a Viernes<br />
                  10:00 - 14:00
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
                <Link to="/contacto">
                  Solicitar Visita
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Horarios;