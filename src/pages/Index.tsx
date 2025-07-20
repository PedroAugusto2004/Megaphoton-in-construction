import { SolarIcon } from "@/components/SolarIcon";
import { ConstructionProgress } from "@/components/ConstructionProgress";
import { Wrench, Zap, Leaf, Mail, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-solar-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Logo and Company Name */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <img 
              src="/image/megaphoton logo.png" 
              alt="Megaphoton Logo" 
              className="h-24 sm:h-32 md:h-40 w-auto"
            />
          </div>
        </div>

        {/* Construction Notice */}
        <div className="max-w-3xl mx-auto text-center w-full">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight mb-6 sm:mb-8 text-foreground tracking-wider">
            Em Construção
          </h2>
          
          <div className="w-12 sm:w-16 h-0.5 bg-solar-orange mx-auto mb-6 sm:mb-8"></div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 sm:mb-12 md:mb-16 leading-relaxed font-light max-w-2xl mx-auto px-2">
            Estamos desenvolvendo nossa nova plataforma.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Em breve, você encontrará aqui as melhores soluções em energia solar.
          </p>

          <div className="space-y-8">
            <ConstructionProgress />
          </div>

          {/* Contact Info */}
          <div className="mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-border/30">
            <p className="text-muted-foreground mb-4 sm:mb-5 text-xs sm:text-sm">
              Entre em contato conosco:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md mx-auto">
              <a 
                href="mailto:megaphoton.ei@gmail.com" 
                className="px-4 py-3 sm:py-2 rounded-md border border-solar-orange/30 bg-solar-orange/5 hover:bg-solar-orange/10 active:bg-solar-orange/20 inline-flex items-center justify-center gap-2 text-solar-orange transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                E-mail
              </a>
              <a 
                href="tel:+5534992320853" 
                className="px-4 py-3 sm:py-2 rounded-md border border-solar-green/30 bg-solar-green/5 hover:bg-solar-green/10 active:bg-solar-green/20 inline-flex items-center justify-center gap-2 text-solar-green transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Telefone
              </a>
              <a 
                href="https://wa.me/5534992320853?text=Olá,%20quero%20fazer%20um%20orçamento" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 sm:py-2 rounded-md border border-green-500/30 bg-green-500/5 hover:bg-green-500/10 active:bg-green-500/20 inline-flex items-center justify-center gap-2 text-green-500 transition-colors text-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div> 
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 text-center px-4">
          <p className="text-muted-foreground text-xs">
            © 2025 Megaphoton - Energia Inteligente
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
