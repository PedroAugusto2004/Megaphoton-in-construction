import { SolarIcon } from "@/components/SolarIcon";
import { ConstructionProgress } from "@/components/ConstructionProgress";
import { Wrench, Zap, Leaf, Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-solar-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Logo and Company Name */}
        <div className="text-center mb-16">
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/c9b00463-0d2b-4bf2-8f25-da5dfe292c51.png" 
              alt="Megaphoton Logo" 
              className="h-24 w-auto"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-3">
            <span className="bg-gradient-to-r from-solar-orange to-solar-light bg-clip-text text-transparent">
              Megaphoton
            </span>
          </h1>
          <p className="text-lg md:text-xl text-solar-green font-medium">
            Energia Solar Sustentável
          </p>
        </div>

        {/* Construction Notice */}
        <div className="bg-card rounded-2xl p-8 md:p-10 max-w-xl mx-auto text-center border border-border/20">
          <div className="flex justify-center mb-6">
            <Wrench className="w-12 h-12 text-solar-orange" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Em Construção
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
            Estamos desenvolvendo nossa nova plataforma. 
            Em breve, você encontrará aqui as melhores soluções em energia solar.
          </p>

          <ConstructionProgress />

          {/* Contact Info */}
          <div className="mt-10 pt-6 border-t border-border/30">
            <p className="text-muted-foreground mb-4 text-sm">
              Entre em contato conosco:
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:megaphoton.ei@gmail.com" 
                className="inline-flex items-center gap-2 text-solar-orange hover:text-solar-light transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                megaphoton.ei@gmail.com
              </a>
              <br />
              <a 
                href="tel:+5534992320853" 
                className="inline-flex items-center gap-2 text-solar-green hover:text-solar-green-light transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                (34) 99232-0853
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-xs">
            © 2024 Megaphoton - Energia Solar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
