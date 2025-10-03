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
    <section className={`h-[550vh] relative transition-all duration-1000 ease-in-out ${
      isSolarized ? 'bg-solarized-base' : 'bg-black'
    }`}>
      {/* Fixed canvas container */}
      <div className="sticky top-0 h-screen overflow-hidden">

        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10 h-full flex items-center md:items-start md:pt-20">
        
        <div className="w-full px-4 md:px-8">
          {/* Purpose Title */}
          <div className="pb-8 md:pb-12">
            <h2 className={`font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-none transition-colors duration-500 ${
              isSolarized ? 'text-red-700' : 'text-white'
            }`}>
              <span className={`block text-xl md:text-3xl font-light mb-3 md:mb-4 italic tracking-wide transition-colors duration-500 ${
                isSolarized ? 'text-solarized-orange' : 'text-gray-400'
              }`}>The</span> 
              <span className={`tracking-tight transition-colors duration-500 ${
                isSolarized ? 'text-red-600' : 'text-emerald-500'
              }`}>Purpose</span>
            </h2>
          </div>
          {/* Letter salutation - appears at 15% */}
          <p 
            className={`text-xl md:text-2xl mb-6 md:mb-10 font-light font-serif ${
            isSolarized ? 'text-solarized-orange' : 'text-gray-400'
          } ${visibleElements.includes(0) ? 'opacity-100' : 'opacity-0'}`}
            style={{
              transition: 'opacity 2000ms ease-in-out'
            }}
          >
            To the Future,
          </p>
          
          {/* Letter content - each line appears every 8% starting from 25% */}
          <div className={`space-y-4 md:space-y-8 font-serif tracking-tight transition-colors duration-500 ${
            isSolarized ? 'text-solarized-text-dark' : 'text-white'
          }`}>
            {manifestoLines.map((line, idx) => (
              <p 
                key={idx} 
                className={`text-lg md:text-xl leading-relaxed min-h-[2rem] md:min-h-[2.5rem] ${
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
            className={`border-t my-6 md:my-12 ${
            isSolarized ? 'border-solarized-orange/30' : 'border-gray-800'
          } ${
            visibleElements.includes(manifestoLines.length + 1) ? 'opacity-100' : 'opacity-0'
          }`}
            style={{
              transition: 'opacity 2000ms ease-in-out'
            }}
          ></div>
          
          {/* Signature and stamp - appear at 75% */}
          <div 
            className={`flex items-end justify-between mt-6 md:mt-12 ${
            visibleElements.includes(manifestoLines.length + 2) || visibleElements.includes(manifestoLines.length + 3) ? 'opacity-100' : 'opacity-0'
          }`}
            style={{
              transition: 'opacity 2000ms ease-in-out'
            }}
          >
                        {/* Signature on the left */}
                        <img
                          src={isSolarized ? "/Gemini_Generated_Image_bn95dhbn95dhbn95.png" : "/chensign.jpeg"}
                          alt="Signature"
                          className={`h-10 md:h-14 w-auto object-contain ${
                            visibleElements.includes(manifestoLines.length + 2) ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{
                            transition: 'opacity 2000ms ease-in-out'
                          }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
            {/* Stamp on the right */}
            <img
              src={isSolarized ? "/Untitled (16) (1).jpg" : "/stamp.jpeg"}
              alt="Official stamp"
              className={`h-12 md:h-16 w-auto object-contain ${
                visibleElements.includes(manifestoLines.length + 3) ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transition: 'opacity 2000ms ease-in-out'
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
        </div>
      </div>
    </section>);

};

export default ManifestoContent;