import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Send,
  Calendar
} from "lucide-react";
import { useState } from "react";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo en breve.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      childAge: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: ["Centro de Granada", "Granada, España"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: ["+34 123 456 789"],
      color: "text-secondary"
    },
    {
      icon: Mail,
      title: "Email",
      content: ["info@lacasitadecolores.es", "admisiones@lacasitadecolores.es"],
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      content: ["Lunes a Viernes: 9:00 - 15:00", "Visitas: 10:00 - 14:00"],
      color: "text-primary"
    }
  ];

  const faqs = [
    {
      question: "¿Cuál es la edad mínima de admisión?",
      answer: "Admitimos niños desde los 4 meses hasta los 6 años."
    },
    {
      question: "¿Ofrecen período de adaptación?",
      answer: "Sí, ofrecemos un período de adaptación gradual personalizado para cada niño."
    },
    {
      question: "¿Qué documentación necesito para la matrícula?",
      answer: "DNI de los padres, libro de familia, cartilla de vacunación y certificado médico."
    },
    {
      question: "¿Tienen servicio de comedor?",
      answer: "Sí, contamos con cocina propia y menús equilibrados adaptados a cada edad."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">
            <MessageCircle className="w-4 h-4 mr-2" />
            Estamos aquí para ayudarte
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-primary">Contacta</span>{" "}
            <span className="text-secondary italic">con Nosotros</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ¿Tienes alguna pregunta? ¿Te gustaría conocer nuestras instalaciones? 
            Estaremos encantados de atenderte.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl">Solicita Información</CardTitle>
                <p className="text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="123 456 789"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="childAge">Edad del niño/a</Label>
                      <Select onValueChange={(value) => handleInputChange("childAge", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona edad" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 años</SelectItem>
                          <SelectItem value="1-2">1-2 años</SelectItem>
                          <SelectItem value="2-3">2-3 años</SelectItem>
                          <SelectItem value="3-4">3-4 años</SelectItem>
                          <SelectItem value="4-5">4-5 años</SelectItem>
                          <SelectItem value="5-6">5-6 años</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Servicio de interés</Label>
                    <Select onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="guarderia">Guardería (0-3 años)</SelectItem>
                        <SelectItem value="infantil">Educación Infantil (3-6 años)</SelectItem>
                        <SelectItem value="comedor">Comedor Escolar</SelectItem>
                        <SelectItem value="ampliado">Horario Ampliado</SelectItem>
                        <SelectItem value="informacion">Información General</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Información de Contacto</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="text-center">
                      <CardHeader>
                        <div className={`w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                          <info.icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <CardTitle className="text-lg">{info.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {info.content.map((line, lineIndex) => (
                          <p key={lineIndex} className="text-muted-foreground text-sm">
                            {line}
                          </p>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>Acciones Rápidas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar Ahora: +34 123 456 789
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Escribir Email
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Solicitar Visita
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Preguntas Frecuentes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resolvemos las dudas más comunes que nos plantean las familias.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Nuestra Ubicación</h2>
            <p className="text-lg text-muted-foreground">
              Nos encontramos en el centro de Granada, fácilmente accesible.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Centro de Granada</h3>
                    <p className="text-muted-foreground">
                      Ubicación céntrica con fácil acceso en transporte público
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;