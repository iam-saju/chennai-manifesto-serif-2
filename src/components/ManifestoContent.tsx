import { useEffect, useRef, useState } from "react";

interface ManifestoContentProps {
  onComplete?: (isComplete: boolean) => void;
  isSolarized?: boolean;
}

const ManifestoContent = ({ onComplete, isSolarized = false }: ManifestoContentProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [visibleElements, setVisibleElements] = useState<number[]>([]);

  const manifestoLines = [
    "We are The Chennai Compute Company.",
    "We believe compute is the fundamental force shaping tomorrow. Every breakthrough begins with computational power.",
    "From Chennai, we're building India's AI revolution. Intelligence amplified, not replaced.",
    "We pursue relentless optimization. Every algorithm improved. Every system more efficient.",
    "Ethics guide our design. Transparency drives our innovation. Open source accelerates our progress.",
    "The computational future is being written today."
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrollPercent);
      
      // Debug: log scroll percentage
      console.log('Scroll percentage:', scrollPercent);

      const newVisibleElements: number[] = [];
      
      // "To the Future," appears at 35%
      if (scrollPercent >= 35) {
        newVisibleElements.push(0);
      }
        
      // Each manifesto line appears every 5% starting from 42%
      for (let i = 0; i < manifestoLines.length; i++) {
        const threshold = 42 + (i * 5);
        if (scrollPercent >= threshold) {
          newVisibleElements.push(i + 1);
        }
      }
      
      // Grey line and images appear at 73%
      if (scrollPercent >= 73) {
        newVisibleElements.push(manifestoLines.length + 1); // Grey line
        newVisibleElements.push(manifestoLines.length + 2); // Signature
        newVisibleElements.push(manifestoLines.length + 3); // Stamp
      }
      
      setVisibleElements(newVisibleElements);
      
      // Debug: log visible elements
      console.log('Visible elements:', newVisibleElements);

      // Mark as complete when reaching 80%
      if (scrollPercent >= 80) {
        onComplete?.(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [manifestoLines.length, onComplete]);

  return (
    <section className={`pt-4 md:pt-8 pb-24 md:pb-40 transition-colors duration-500 ${
      isSolarized ? 'bg-solarized-base' : 'bg-black'
    }`}>
      {/* Letter paper effect - subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 24px,
            rgba(0,0,0,0.1) 24px,
            rgba(0,0,0,0.1) 25px
          )`
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10 py-4 md:py-8">
        {/* Manifesto Header */}
        <div className="text-center mb-16 md:mb-24 pb-8 md:pb-12 mt-8 md:mt-12">
          <h1 className={`font-serif text-2xl md:text-5xl lg:text-6xl font-bold leading-none mb-4 transition-colors duration-500 ${
            isSolarized ? 'text-red-700' : 'text-white'
          }`}>
            <span className={`block text-lg md:text-3xl font-light mb-4 transition-colors duration-500 ${
              isSolarized ? 'text-orange-600' : 'text-gray-400'
            }`}>The</span>
            <span className={`transition-colors duration-500 ${
              isSolarized ? 'text-red-600' : 'text-emerald-500'
            }`}>Purpose</span>
          </h1>
        </div>
        
        <div className={`border-l-4 pl-4 md:pl-12 py-4 md:py-8 transition-colors duration-500 ${
          isSolarized ? 'border-red-500' : 'border-green-500'
        }`}>
          {/* Letter salutation - appears at 35% */}
          <p className={`text-lg md:text-xl mb-4 md:mb-8 font-light font-serif transition-all duration-1000 ease-out ${
            isSolarized ? 'text-orange-600' : 'text-gray-400'
          } ${visibleElements.includes(0) ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'}`}>
            To the Future,
          </p>
          
          {/* Letter content - each line appears every 5% starting from 42% */}
          <div className={`space-y-4 md:space-y-8 font-serif tracking-tight transition-colors duration-500 mt-4 md:mt-8 pb-8 md:pb-12 ${
            isSolarized ? 'text-red-800' : 'text-white'
          }`}>
            {manifestoLines.map((line, idx) => (
              <p 
                key={idx} 
                className={`text-base md:text-lg leading-relaxed transition-all duration-1000 ease-out ${
                  visibleElements.includes(idx + 1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {line}
              </p>
            ))}
          </div>
          
          {/* Grey separator line - appears at 73% */}
          <div className={`border-t border-gray-800 my-8 transition-all duration-1000 ease-out ${
            visibleElements.includes(manifestoLines.length + 1) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}></div>
          
          {/* Signature and stamp - appear at 73% */}
          <div className={`flex items-end justify-between mt-12 transition-all duration-1000 ease-out ${
            visibleElements.includes(manifestoLines.length + 2) || visibleElements.includes(manifestoLines.length + 3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
                        {/* Signature on the left */}
                        <img
                          src={isSolarized ? "/Gemini_Generated_Image_bn95dhbn95dhbn95.png" : "/chensign.jpeg"}
                          alt="Signature"
                          className={`h-12 md:h-16 w-auto object-contain transition-all duration-1000 ease-out ${
                            visibleElements.includes(manifestoLines.length + 2) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                          }`}
                          onError={(e) => {
                            console.log('Signature image failed to load');
                            e.currentTarget.style.display = 'none';
                          }}
                        />
            {/* Stamp on the right */}
            <img
              src={isSolarized ? "/Untitled (16) (1).jpg" : "/stamp.jpeg"}
              alt="Official stamp"
              className={`h-16 md:h-20 w-auto object-contain transition-all duration-1000 ease-out ${
                visibleElements.includes(manifestoLines.length + 3) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
              onError={(e) => {
                console.log('Stamp image failed to load');
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>);

};

export default ManifestoContent;