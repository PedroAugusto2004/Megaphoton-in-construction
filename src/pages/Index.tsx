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
        </div>

        {/* Construction Notice */}
        <div className="bg-card rounded-3xl p-12 md:p-16 max-w-2xl mx-auto text-center border border-border/10 shadow-lg">
          <div className="flex justify-center mb-8">
            <div className="relative p-4 bg-solar-orange/10 rounded-full">
              <Wrench className="w-8 h-8 text-solar-orange" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-solar-orange rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground tracking-wide">
            Em Construção
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-lg mx-auto">
            Estamos desenvolvendo nossa nova plataforma.<br />
            Em breve, você encontrará aqui as melhores soluções em energia solar.
          </p>

          <div className="space-y-6">
            <ConstructionProgress />
            
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-solar-orange rounded-full animate-pulse"></div>
              <span>Plataforma em desenvolvimento</span>
              <div className="w-2 h-2 bg-solar-green rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

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
            © 2025 Megaphoton - Energia inteligente
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Feito por{" "}
            <a 
              href="https://pedrodev.website/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-solar-orange hover:text-solar-light transition-colors"
            >
              Pedro Developments
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
