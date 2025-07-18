import { Sun } from "lucide-react";

interface SolarIconProps {
  size?: number;
  className?: string;
}

export const SolarIcon = ({ size = 40, className = "" }: SolarIconProps) => {
  return (
    <div className={`relative ${className}`}>
      <Sun 
        size={size} 
        className="text-solar-orange drop-shadow-lg rotate-slow" 
      />
      <div className="absolute inset-0 rounded-full bg-solar-light/20 blur-xl pulse-solar"></div>
    </div>
  );
};