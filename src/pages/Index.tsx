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
              src="/image/megaphoton.png" 
              alt="Megaphoton Logo" 
              className="h-24 w-auto"
            />
          </div>
        </div>

        {/* Construction Notice */}
        <div className="bg-card rounded-xl p-16 md:p-20 max-w-3xl mx-auto text-center border border-border/5 shadow-sm">
          
          <h2 className="text-5xl md:text-6xl font-extralight mb-8 text-foreground tracking-wider">
            Em Construção
          </h2>
          
          <div className="w-16 h-0.5 bg-solar-orange mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 leading-relaxed font-light max-w-2xl mx-auto">
            Estamos desenvolvendo nossa nova plataforma.<br />
            Em breve, você encontrará aqui as melhores soluções em energia solar.
          </p>

          <div className="space-y-8">
            <ConstructionProgress />
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
