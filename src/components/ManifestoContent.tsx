import { useEffect, useRef, useState } from "react";

interface ManifestoContentProps {
  onComplete?: (isComplete: boolean) => void;
}

const ManifestoContent = ({ onComplete }: ManifestoContentProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [imagesShown, setImagesShown] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [visibleSentences, setVisibleSentences] = useState<number[]>([]);
  const [mouseEntered, setMouseEntered] = useState(false);

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
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress through the section
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        const sectionHeight = rect.height;
        
        // Calculate progress based on how much of the section is visible
        let progress = 0;
        if (sectionTop <= windowHeight && sectionBottom >= 0) {
          // Section is in view - calculate how much has been scrolled through
          const viewportCenter = windowHeight / 2;
          const sectionCenter = sectionTop + (sectionHeight / 2);
          const distanceFromCenter = Math.abs(viewportCenter - sectionCenter);
          const maxDistance = windowHeight + sectionHeight;
          progress = Math.max(0, Math.min(1, 1 - (distanceFromCenter / maxDistance)));
        } else if (sectionTop > windowHeight) {
          // Section hasn't entered view yet
          progress = 0;
        } else {
          // Section has completely passed
          progress = 1;
        }
        
        setScrollProgress(progress);
        
        // Set in view when section starts appearing
        if (progress > 0.05 && !isInView) {
          setIsInView(true);
        }
        
        // Start animation when entering the manifesto content section
        if (progress > 0.1 && !animationStarted) {
          setAnimationStarted(true);
        }
        
        // Mark images as shown when they appear
        if (progress >= 0.85 && !imagesShown) {
          setImagesShown(true);
        }
        
        // Mark as complete when most of section is scrolled through
        if (progress >= 0.9) {
          onComplete?.(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInView, onComplete]);

  // Handle mouse enter to start animation
  const handleMouseEnter = () => {
    if (!animationStarted) {
      setAnimationStarted(true);
      setMouseEntered(true);
    }
  };

  // Handle progressive sentence appearance with mist-to-clear effect
  useEffect(() => {
    if (animationStarted && visibleSentences.length < manifestoLines.length) {
      const nextSentenceIndex = visibleSentences.length;
      // Progressive delay: starts at 1000ms, decreases by 100ms each time
      const baseDelay = 1000;
      const delayReduction = 100;
      const delay = Math.max(200, baseDelay - (nextSentenceIndex * delayReduction));
      
      const timer = setTimeout(() => {
        setVisibleSentences(prev => [...prev, nextSentenceIndex]);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [animationStarted, visibleSentences.length, manifestoLines.length]);

  return (
    <section 
      ref={sectionRef}
      onMouseEnter={handleMouseEnter}
      className={`bg-black py-20 transition-all duration-1000 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
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
          {/* Letter salutation - always visible */}
          <p className={`text-xl text-gray-400 mb-8 font-light font-serif transition-all duration-1500 ease-out ${
            (scrollProgress > 0.1 || mouseEntered) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            To the Future,
          </p>
          
          {/* Letter content - all text visible */}
          <div className="space-y-8 text-white font-serif tracking-tight">
            {manifestoLines.map((line, idx) => (
              <p 
                key={idx}
                className={`text-lg leading-relaxed transition-all duration-2500 ease-out ${
                  visibleSentences.includes(idx) ? 'opacity-100 translate-y-0 blur-0' : 'opacity-10 translate-y-2 blur-sm'
                }`}
                style={{
                  transitionDelay: visibleSentences.includes(idx) ? '0ms' : '200ms'
                }}
              >
                {line}
              </p>
            ))}
          </div>
          
          {/* Grey separator line */}
          <div className={`border-t border-gray-800 my-8 transition-all duration-1000 ${
            scrollProgress > 0.9 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}></div>
          
          {/* Signature and stamp - appear at the very end and stay visible */}
          <div className={`flex items-end justify-between mt-12 transition-all duration-1000 ${
            (scrollProgress > 0.85 || imagesShown) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {/* Signature on the left */}
            <img
              src="/chensign.jpeg"
              alt="Signature"
              className={`h-12 md:h-16 w-auto object-contain transition-all duration-1000 ${
                (scrollProgress > 0.9 || imagesShown) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
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
              className={`h-16 md:h-20 w-auto object-contain transition-all duration-1000 ${
                (scrollProgress > 0.95 || imagesShown) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
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