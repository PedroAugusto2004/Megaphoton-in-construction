import { useState, useEffect } from "react";

export const ConstructionProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between text-sm text-solar-green-light mb-2">
        <span>Construindo o futuro solar</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <div 
          className="h-full solar-gradient transition-all duration-300 ease-out rounded-full relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};