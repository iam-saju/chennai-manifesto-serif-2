import { useEffect, useState, useCallback, useMemo } from "react";

interface ManifestoContentProps {
  onComplete?: (isComplete: boolean) => void;
  isSolarized?: boolean;
}

const manifestoLines = [
  "We are The Chennai Compute Company.",
      "We believe compute is the fundamental force shaping tomorrow. Every breakthrough begins with computational power.",
  "From Chennai, we're building India's AI revolution. Intelligence amplified, not replaced.",
      "We pursue relentless optimization. Every algorithm improved. Every system more efficient.",
  "Ethics guide our design. Transparency drives our innovation. Open source accelerates our progress.",
  "The computational future is being written today."
];

const ManifestoContent = ({ onComplete, isSolarized = false }: ManifestoContentProps) => {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const newVisibleElements: number[] = [];
    
    // "To the Future," appears at 15%
    if (scrollPercent >= 15) {
      newVisibleElements.push(0);
    }
    
    // Each manifesto line appears every 8% starting from 25%
    for (let i = 0; i < manifestoLines.length; i++) {
      const threshold = 25 + (i * 8);
        if (scrollPercent >= threshold) {
        newVisibleElements.push(i + 1);
      }
    }
    
    // Grey line and images appear at 75%
    if (scrollPercent >= 75) {
      newVisibleElements.push(manifestoLines.length + 1); // Grey line
      newVisibleElements.push(manifestoLines.length + 2); // Signature
      newVisibleElements.push(manifestoLines.length + 3); // Stamp
    }
    
    setVisibleElements(newVisibleElements);

    // Mark as complete when reaching 85%
    if (scrollPercent >= 85) {
      onComplete?.(true);
    }
  }, [onComplete]);

  useEffect(() => {
    let rafId: number;
    const throttledHandleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleScroll();
        rafId = 0;
      });
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [handleScroll]);

  return (
    <section className={`h-[550vh] relative transition-all duration-[800ms] ease-in-out ${
        isSolarized ? 'bg-solarized-base' : 'bg-black'
    }`}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${
            isSolarized ? 'rgb(220, 50, 47)' : 'rgb(251, 146, 60)'
          } 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, transparent 0%, ${
            isSolarized ? 'rgba(220, 50, 47, 0.1)' : 'rgba(251, 146, 60, 0.1)'
          } 50%, transparent 100%)`,
          backgroundSize: '100px 1px',
          backgroundRepeat: 'repeat-y',
          backgroundPosition: '20px 0'
        }}></div>
      </div>
      
      {/* Fixed canvas container */}
      <div className="sticky top-0 h-screen overflow-hidden relative z-10">

        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 h-full flex items-center md:items-start md:pt-20">
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 py-8 md:py-0">
          {/* Mobile: Stamp first, Desktop: Content first */}
          <div className="lg:col-span-2 flex flex-col justify-center max-w-2xl order-2 lg:order-1">
          {/* Purpose Title */}
          <div className="pb-4 md:pb-12">
            <h2 className={`font-serif text-3xl md:text-6xl lg:text-7xl font-bold leading-none transition-colors duration-[800ms] ease-in-out ${
              isSolarized ? 'text-solarized-blue' : 'text-white'
            }`}>
              <span className={`block text-base md:text-3xl font-light mb-2 md:mb-4 italic tracking-wide transition-colors duration-[800ms] ease-in-out ${
                isSolarized ? 'text-solarized-orange' : 'text-gray-400'
              }`}>The</span> 
              <span className={`tracking-tight transition-colors duration-[800ms] ease-in-out ${
                isSolarized ? 'text-solarized-cyan' : 'text-emerald-500'
              }`}>Purpose</span>
            </h2>
          </div>
          {/* Letter salutation - appears at 15% */}
          <p 
            className={`text-lg md:text-2xl mb-4 md:mb-12 font-light font-serif leading-relaxed ${
            isSolarized ? 'text-solarized-orange' : 'text-gray-300'
          } ${visibleElements.includes(0) ? 'opacity-100' : 'opacity-0'}`}
            style={{
              transition: 'opacity 2000ms ease-in-out'
            }}
          >
            To the Future,
          </p>
          
          {/* Letter content - each line appears every 8% starting from 25% */}
          <div className={`space-y-2 md:space-y-6 font-serif tracking-tight transition-colors duration-[800ms] ease-in-out ${
            isSolarized ? 'text-solarized-orange' : 'text-gray-200'
          }`}>
            {manifestoLines.map((line, idx) => (
              <p 
                key={idx} 
                className={`text-sm md:text-xl leading-loose min-h-[1.5rem] md:min-h-[2.5rem] ${
                  visibleElements.includes(idx + 1) ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        transition: 'opacity 2000ms ease-in-out'
                      }}
                    >
                {line}
              </p>
            ))}
          </div>

          {/* Grey separator line - appears at 75% */}
          <div 
            className={`border-t my-0 mb-6 mt-8 md:my-12 ${
            isSolarized ? 'border-solarized-orange/30' : 'border-gray-800'
          } ${
            visibleElements.includes(manifestoLines.length + 1) ? 'opacity-100' : 'opacity-0'
          }`}
            style={{
              transition: 'opacity 2000ms ease-in-out'
            }}
          ></div>
          
          {/* Signature - appears at 75% */}
          <div 
            className={`relative z-20 ${
            visibleElements.includes(manifestoLines.length + 2) ? 'opacity-100' : 'opacity-0'
          }`}
            style={{
              transition: 'opacity 2000ms ease-in-out'
            }}
          >
            {/* Signature on the left - slightly bigger and vertically aligned */}
            <div className="flex items-center mt-2 mb-8 md:mb-0">
              <img
                src={isSolarized ? "/Gemini_Generated_Image_bn95dhbn95dhbn95.png" : "/chensign.jpeg"}
                alt="Signature"
                className={`h-10 md:h-14 lg:h-16 w-auto object-contain`}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
          
          </div>
          
          {/* Mobile: Stamp first, Desktop: Right side */}
          <div className="lg:col-span-1 flex items-center justify-center lg:justify-end order-1 lg:order-2">
            <div 
              className={`opacity-100 lg:${
                visibleElements.includes(manifestoLines.length + 3) ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transition: 'opacity 2000ms ease-in-out'
              }}
            >
              {/* Bandhani Dot Pattern Frame */}
              <div className="relative p-8">
                {/* Corner Mandalas */}
                {/* Top Left Corner */}
                <div className={`absolute -top-4 -left-4 w-24 h-24 ${
                  isSolarized ? 'text-solarized-orange' : 'text-orange-600'
                } opacity-60`}>
                  <svg viewBox="0 0 96 96" className="w-full h-full">
                    {/* Radiating dot pattern - 3 rings */}
                    <circle cx="48" cy="48" r="3" fill="currentColor" opacity="0.9"/>
                    <circle cx="48" cy="48" r="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                    <circle cx="48" cy="48" r="16" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                    <circle cx="48" cy="48" r="24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                    
                    {/* Inner ring dots */}
                    <circle cx="48" cy="32" r="2" fill="currentColor" opacity="0.8"/>
                    <circle cx="64" cy="48" r="2" fill="currentColor" opacity="0.8"/>
                    <circle cx="48" cy="64" r="2" fill="currentColor" opacity="0.8"/>
                    <circle cx="32" cy="48" r="2" fill="currentColor" opacity="0.8"/>
                    
                    {/* Outer ring dots */}
                    <circle cx="48" cy="16" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="72" cy="48" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="48" cy="72" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="24" cy="48" r="1.5" fill="currentColor" opacity="0.6"/>
                    
                    {/* Diagonal dots */}
                    <circle cx="56" cy="32" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="64" cy="40" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="40" cy="56" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="32" cy="64" r="1" fill="currentColor" opacity="0.5"/>
                  </svg>
                </div>
                
                {/* Top Right Corner */}
                <div className={`absolute -top-4 -right-4 w-24 h-24 ${
                  isSolarized ? 'text-solarized-orange' : 'text-orange-600'
                } opacity-60`}>
                  <svg viewBox="0 0 96 96" className="w-full h-full">
                    <circle cx="48" cy="48" r="3" fill="currentColor" opacity="0.9"/>
                    <circle cx="48" cy="48" r="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                    <circle cx="48" cy="48" r="16" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                    <circle cx="48" cy="48" r="24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                    
                    <circle cx="48" cy="32" r="2" fill="currentColor" opacity="0.8"/>
                    <circle cx="64" cy="48" r="2" fill="currentColor" opacity="0.8"/>
                    <circle cx="48" cy="64" r="2" fill="currentColor" opacity="0.8"/>
                    <circle cx="32" cy="48" r="2" fill="currentColor" opacity="0.8"/>
                    
                    <circle cx="48" cy="16" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="72" cy="48" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="48" cy="72" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="24" cy="48" r="1.5" fill="currentColor" opacity="0.6"/>
                    
                    <circle cx="56" cy="32" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="64" cy="40" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="40" cy="56" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="32" cy="64" r="1" fill="currentColor" opacity="0.5"/>
                  </svg>
                </div>
                
                {/* Bottom Left Corner */}
                <div className={`absolute -bottom-4 -left-4 w-24 h-24 ${
                  isSolarized ? 'text-solarized-orange' : 'text-orange-600'
                } opacity-60`}>
                  <svg viewBox="0 0 96 96" className="w-full h-full">
                    <circle cx="48" cy="48" r="3" fill="currentColor" opacity="0.9"/>
                    <circle cx="48" cy="48" r="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                    <circle cx="48" cy="48" r="16" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                    <circle cx="48" cy="48" r="24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                    
                    <circle cx="48" cy="32" r="2" fill="currentColor" opacity="0.8"/>
                    <circle cx="64" cy="48" r="2" fill="currentColor" opacity="0.8"/>
                    <circle cx="48" cy="64" r="2" fill="currentColor" opacity="0.8"/>
                    <circle cx="32" cy="48" r="2" fill="currentColor" opacity="0.8"/>
                    
                    <circle cx="48" cy="16" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="72" cy="48" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="48" cy="72" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="24" cy="48" r="1.5" fill="currentColor" opacity="0.6"/>
                    
                    <circle cx="56" cy="32" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="64" cy="40" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="40" cy="56" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="32" cy="64" r="1" fill="currentColor" opacity="0.5"/>
                  </svg>
                </div>
                
                {/* Bottom Right Corner */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 ${
                  isSolarized ? 'text-solarized-orange' : 'text-orange-600'
                } opacity-60`}>
                  <svg viewBox="0 0 96 96" className="w-full h-full">
                    <circle cx="48" cy="48" r="3" fill="currentColor" opacity="0.9"/>
                    <circle cx="48" cy="48" r="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                    <circle cx="48" cy="48" r="16" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                    <circle cx="48" cy="48" r="24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                    
                    <circle cx="48" cy="32" r="2" fill="currentColor" opacity="0.8"/>
                    <circle cx="64" cy="48" r="2" fill="currentColor" opacity="0.8"/>
                    <circle cx="48" cy="64" r="2" fill="currentColor" opacity="0.8"/>
                    <circle cx="32" cy="48" r="2" fill="currentColor" opacity="0.8"/>
                    
                    <circle cx="48" cy="16" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="72" cy="48" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="48" cy="72" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="24" cy="48" r="1.5" fill="currentColor" opacity="0.6"/>
                    
                    <circle cx="56" cy="32" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="64" cy="40" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="40" cy="56" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="32" cy="64" r="1" fill="currentColor" opacity="0.5"/>
                  </svg>
                </div>
                
                {/* Flowing Border Dots */}
                {/* Top Border */}
                <div className={`absolute -top-2 left-16 right-16 h-6 ${
                  isSolarized ? 'text-solarized-orange' : 'text-amber-500'
                } opacity-50`}>
                  <svg viewBox="0 0 300 24" className="w-full h-full">
                    <circle cx="20" cy="12" r="2" fill="currentColor" opacity="0.7"/>
                    <circle cx="40" cy="12" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="60" cy="12" r="2.5" fill="currentColor" opacity="0.8"/>
                    <circle cx="80" cy="12" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="100" cy="12" r="2" fill="currentColor" opacity="0.7"/>
                    <circle cx="120" cy="12" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="140" cy="12" r="2" fill="currentColor" opacity="0.7"/>
                    <circle cx="160" cy="12" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="180" cy="12" r="2.5" fill="currentColor" opacity="0.8"/>
                    <circle cx="200" cy="12" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="220" cy="12" r="2" fill="currentColor" opacity="0.7"/>
                    <circle cx="240" cy="12" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="260" cy="12" r="2" fill="currentColor" opacity="0.7"/>
                    <circle cx="280" cy="12" r="1.5" fill="currentColor" opacity="0.6"/>
                  </svg>
                </div>
                
                {/* Bottom Border */}
                <div className={`absolute -bottom-2 left-16 right-16 h-6 ${
                  isSolarized ? 'text-solarized-orange' : 'text-amber-500'
                } opacity-50`}>
                  <svg viewBox="0 0 300 24" className="w-full h-full">
                    <circle cx="20" cy="12" r="2" fill="currentColor" opacity="0.7"/>
                    <circle cx="40" cy="12" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="60" cy="12" r="2.5" fill="currentColor" opacity="0.8"/>
                    <circle cx="80" cy="12" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="100" cy="12" r="2" fill="currentColor" opacity="0.7"/>
                    <circle cx="120" cy="12" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="140" cy="12" r="2" fill="currentColor" opacity="0.7"/>
                    <circle cx="160" cy="12" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="180" cy="12" r="2.5" fill="currentColor" opacity="0.8"/>
                    <circle cx="200" cy="12" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="220" cy="12" r="2" fill="currentColor" opacity="0.7"/>
                    <circle cx="240" cy="12" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="260" cy="12" r="2" fill="currentColor" opacity="0.7"/>
                    <circle cx="280" cy="12" r="1.5" fill="currentColor" opacity="0.6"/>
                  </svg>
                </div>
                
                {/* Left Border */}
                <div className={`absolute -left-2 top-16 bottom-16 w-6 ${
                  isSolarized ? 'text-solarized-orange' : 'text-amber-500'
                } opacity-50`}>
                  <svg viewBox="0 0 24 200" className="w-full h-full">
                    <circle cx="12" cy="20" r="2" fill="currentColor" opacity="0.7"/>
                    <circle cx="12" cy="40" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="12" cy="60" r="2.5" fill="currentColor" opacity="0.8"/>
                    <circle cx="12" cy="80" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="12" cy="100" r="2" fill="currentColor" opacity="0.7"/>
                    <circle cx="12" cy="120" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="12" cy="140" r="2" fill="currentColor" opacity="0.7"/>
                    <circle cx="12" cy="160" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="12" cy="180" r="2.5" fill="currentColor" opacity="0.8"/>
                  </svg>
                </div>
                
                {/* Right Border */}
                <div className={`absolute -right-2 top-16 bottom-16 w-6 ${
                  isSolarized ? 'text-solarized-orange' : 'text-amber-500'
                } opacity-50`}>
                  <svg viewBox="0 0 24 200" className="w-full h-full">
                    <circle cx="12" cy="20" r="2" fill="currentColor" opacity="0.7"/>
                    <circle cx="12" cy="40" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="12" cy="60" r="2.5" fill="currentColor" opacity="0.8"/>
                    <circle cx="12" cy="80" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="12" cy="100" r="2" fill="currentColor" opacity="0.7"/>
                    <circle cx="12" cy="120" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="12" cy="140" r="2" fill="currentColor" opacity="0.7"/>
                    <circle cx="12" cy="160" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="12" cy="180" r="2.5" fill="currentColor" opacity="0.8"/>
                  </svg>
                </div>
                
                {/* Inner Halo - Delicate gold dots around stamp */}
                <div className={`absolute inset-8 ${
                  isSolarized ? 'text-solarized-yellow' : 'text-yellow-400'
                } opacity-40`}>
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Small scattered dots around stamp perimeter */}
                    <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.6"/>
                    <circle cx="180" cy="20" r="1" fill="currentColor" opacity="0.6"/>
                    <circle cx="20" cy="180" r="1" fill="currentColor" opacity="0.6"/>
                    <circle cx="180" cy="180" r="1" fill="currentColor" opacity="0.6"/>
                    <circle cx="100" cy="10" r="0.8" fill="currentColor" opacity="0.5"/>
                    <circle cx="10" cy="100" r="0.8" fill="currentColor" opacity="0.5"/>
                    <circle cx="190" cy="100" r="0.8" fill="currentColor" opacity="0.5"/>
                    <circle cx="100" cy="190" r="0.8" fill="currentColor" opacity="0.5"/>
                    <circle cx="50" cy="30" r="0.6" fill="currentColor" opacity="0.4"/>
                    <circle cx="150" cy="30" r="0.6" fill="currentColor" opacity="0.4"/>
                    <circle cx="50" cy="170" r="0.6" fill="currentColor" opacity="0.4"/>
                    <circle cx="150" cy="170" r="0.6" fill="currentColor" opacity="0.4"/>
                  </svg>
                </div>
                
                {/* Main Stamp */}
              <img
                src={isSolarized ? "/Untitled (16) (1).jpg" : "/stamp.jpeg"}
                  alt="Official stamp"
                  className={`h-72 md:h-96 lg:h-[28rem] w-auto object-contain max-w-full drop-shadow-lg hover:scale-110 hover:drop-shadow-2xl transition-all duration-300 cursor-pointer relative z-10`}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );

};

export default ManifestoContent;