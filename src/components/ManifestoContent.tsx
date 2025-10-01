import { useEffect, useRef, useState } from "react";

interface ManifestoContentProps {
  onComplete?: (isComplete: boolean) => void;
}

const ManifestoContent = ({ onComplete }: ManifestoContentProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [visibleElements, setVisibleElements] = useState<{
    salutation: boolean;
    manifestoLines: boolean[];
    separator: boolean;
    signature: boolean;
    stamp: boolean;
  }>({
    salutation: false,
    manifestoLines: [false, false, false, false, false, false],
    separator: false,
    signature: false,
    stamp: false
  });

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
      const currentPercentage = Math.min(100, Math.max(0, scrollPercent));
      setScrollPercentage(currentPercentage);

      // Update visible elements based on scroll percentage
      const newVisibleElements = {
        salutation: currentPercentage >= 37,
        manifestoLines: [
          currentPercentage >= 41.8, // "We are The Chennai Compute Company" - appears after 4.8% more scrolling (37 + 4.8)
          currentPercentage >= 47.8, // 41.8 + 6
          currentPercentage >= 53.8, // 47.8 + 6
          currentPercentage >= 59.8, // 53.8 + 6
          currentPercentage >= 65.8, // 59.8 + 6
          currentPercentage >= 71.8  // 65.8 + 6
        ],
        separator: currentPercentage >= 75.75,
        signature: currentPercentage >= 75.75,
        stamp: currentPercentage >= 75.75
      };

      setVisibleElements(newVisibleElements);

      // Mark as complete when reaching 75.75%
      if (currentPercentage >= 75.75) {
        onComplete?.(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [onComplete]);

  return (
    <section className="bg-black py-20">
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

      <div className="container mx-auto px-6 max-w-4xl relative z-10 py-40 md:py-40">
        {/* Manifesto Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none mb-4">
            <span className="block text-gray-400 text-2xl md:text-3xl font-light mb-4">The</span>
            <span className="text-emerald-500">Manifesto</span>
          </h1>
        </div>
        
        <div className="border-l-4 border-green-500 pl-12 py-8">
          {/* Letter salutation - appears at 37% */}
          <p className={`text-xl text-gray-400 mb-8 font-light font-serif transition-all duration-1000 ease-out ${
            visibleElements.salutation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            To the Future,
          </p>
          
          {/* Letter content - first line at 41.8%, then every 6% */}
          <div className="space-y-8 text-white font-serif tracking-tight">
            {manifestoLines.map((line, idx) => (
              <p 
                key={idx} 
                className={`text-lg leading-relaxed transition-all duration-1000 ease-out ${
                  visibleElements.manifestoLines[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {line}
              </p>
            ))}
          </div>
          
          {/* Grey separator line - appears at 75.75% */}
          <div className={`border-t border-gray-800 my-8 transition-all duration-1000 ease-out ${
            visibleElements.separator ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}></div>
          
          {/* Signature and stamp - appear at 75.75% */}
          <div className={`flex items-end justify-between mt-12 transition-all duration-1000 ease-out ${
            visibleElements.signature && visibleElements.stamp ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {/* Signature on the left */}
            <img
              src="/chensign.jpeg"
              alt="Signature"
              className={`h-12 md:h-16 w-auto object-contain transition-all duration-1000 ease-out ${
                visibleElements.signature ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              onError={(e) => {
                console.log('Signature image failed to load');
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Stamp on the right */}
            <img
              src="/stamp.jpeg"
              alt="Official stamp"
              className={`h-16 md:h-20 w-auto object-contain transition-all duration-1000 ease-out ${
                visibleElements.stamp ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
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