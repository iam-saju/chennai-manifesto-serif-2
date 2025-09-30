import { useState, useEffect, useRef } from "react";

const ManifestoContent = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isManifestoComplete, setIsManifestoComplete] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress through the section
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        // Calculate progress from 0 to 1 as user scrolls through the section
        const scrollStart = windowHeight; // When section top reaches viewport top
        const scrollEnd = windowHeight - sectionHeight; // When section bottom reaches viewport top
        const totalScrollDistance = scrollStart - scrollEnd;
        const currentScroll = windowHeight - sectionTop;
        
        const progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));
        setScrollProgress(progress);
        
        // Mark as complete when all content is revealed (95% threshold)
        if (progress >= 0.95) {
          setIsManifestoComplete(true);
        } else {
          setIsManifestoComplete(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate which elements should be visible based on scroll progress
  const getElementVisibility = (elementIndex: number, totalElements: number = 9) => {
    const threshold = (elementIndex + 1) / totalElements;
    return scrollProgress >= threshold;
  };

  return (
    <section 
      ref={sectionRef}
      className={`bg-black transition-all duration-500 ${
        isManifestoComplete ? 'h-auto' : 'h-screen sticky top-0'
      }`}
      style={{
        minHeight: isManifestoComplete ? 'auto' : '300vh' // Triple viewport height for more scroll space
      }}
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

      <div className="container mx-auto px-6 max-w-4xl relative z-10 py-32 md:py-40">
        <div className="border-l-4 border-green-500 pl-12 py-8">
          {/* Letter salutation - always visible */}
          <p className="text-xl text-gray-400 mb-8 font-light font-serif">
            To the Future,
          </p>
          
          {/* Letter content - appears line by line */}
          <div className="space-y-3 text-white font-serif tracking-tight">
            <p 
              className={`text-lg leading-relaxed transition-all duration-1000 ease-out ${
                getElementVisibility(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              We are The Chennai Compute Company.
            </p>
            
            <p 
              className={`text-lg leading-relaxed transition-all duration-1000 ease-out ${
                getElementVisibility(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              We believe compute is the fundamental force shaping tomorrow. Every breakthrough begins with computational power.
            </p>
            
            <p 
              className={`text-lg leading-relaxed transition-all duration-1000 ease-out ${
                getElementVisibility(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              From Chennai, we're building India's AI revolution. Intelligence amplified, not replaced.
            </p>
            
            <p 
              className={`text-lg leading-relaxed transition-all duration-1000 ease-out ${
                getElementVisibility(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              We pursue relentless optimization. Every algorithm improved. Every system more efficient.
            </p>
            
            <p 
              className={`text-lg leading-relaxed transition-all duration-1000 ease-out ${
                getElementVisibility(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Ethics guide our design. Transparency drives our innovation. Open source accelerates our progress.
            </p>
            
            <p 
              className={`text-lg leading-relaxed transition-all duration-1000 ease-out ${
                getElementVisibility(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              The computational future is being written today.
            </p>
          </div>
          
          {/* Letter signature section - appears last */}
          <div 
            className={`mt-16 pt-8 border-t border-gray-800 transition-all duration-1000 ease-out ${
              getElementVisibility(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <img 
                  src="/chensign.jpeg" 
                  alt="the chennai compute.inc" 
                  className={`h-12 md:h-16 w-auto object-contain transition-all duration-1000 ease-out ${
                    getElementVisibility(7) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                />
              </div>
              <div className="flex items-end gap-4">
                <img 
                  src="/stamp.jpeg" 
                  alt="Official stamp" 
                  className={`h-16 md:h-20 w-auto object-contain transition-all duration-1000 ease-out ${
                    getElementVisibility(8) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ManifestoContent;