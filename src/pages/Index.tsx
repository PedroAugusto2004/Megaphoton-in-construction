import { SolarIcon } from "@/components/SolarIcon";
import { ConstructionProgress } from "@/components/ConstructionProgress";
import { Wrench, Zap, Leaf, Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-solar-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-solar-green/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-solar-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Logo and Company Name */}
        <div className="text-center mb-12 float">
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/c9b00463-0d2b-4bf2-8f25-da5dfe292c51.png" 
              alt="Megaphoton Logo" 
              className="h-32 w-auto solar-glow"
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-solar-orange to-solar-light bg-clip-text text-transparent">
              Megaphoton
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-solar-green font-medium">
            Energia Solar Sustentável
          </p>
        </div>

        {/* Construction Notice */}
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-2xl mx-auto text-center solar-shadow border border-border/50">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Wrench className="w-16 h-16 text-solar-orange animate-bounce" />
              <SolarIcon size={24} className="absolute -top-2 -right-2" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Em Construção
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Estamos construindo algo incrível para o futuro da energia solar no Brasil. 
            Nossa plataforma estará disponível em breve com as melhores soluções em energia renovável.
          </p>

          <ConstructionProgress />

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-solar-orange/10 rounded-full mb-4">
                <Zap className="w-6 h-6 text-solar-orange" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Energia Limpa</h3>
              <p className="text-sm text-muted-foreground">Soluções em energia solar fotovoltaica</p>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-solar-green/10 rounded-full mb-4">
                <Leaf className="w-6 h-6 text-solar-green" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Sustentabilidade</h3>
              <p className="text-sm text-muted-foreground">Compromisso com o meio ambiente</p>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-solar-light/20 rounded-full mb-4">
                <SolarIcon size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Inovação</h3>
              <p className="text-sm text-muted-foreground">Tecnologia de ponta em energia solar</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-muted-foreground mb-4">
              Interessado em nossas soluções? Entre em contato:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:contato@megaphoton.com.br" 
                className="inline-flex items-center gap-2 text-solar-orange hover:text-solar-light transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato@megaphoton.com.br
              </a>
              <a 
                href="tel:+5511999999999" 
                className="inline-flex items-center gap-2 text-solar-green hover:text-solar-green-light transition-colors"
              >
                <Phone className="w-4 h-4" />
                (11) 99999-9999
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Megaphoton. Transformando energia solar em realidade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
