import { useState, useEffect } from "react";
import ManifestoHero from "@/components/ManifestoHero";
import ManifestoContent from "@/components/ManifestoContent";
import ManifestoFooter from "@/components/ManifestoFooter";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  const [isManifestoComplete, setIsManifestoComplete] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isSolarized, setIsSolarized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPercentage(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={`min-h-screen font-serif transition-colors duration-500 scroll-smooth ${
      isSolarized ? 'bg-solarized-base' : 'bg-background'
    }`}>
      <ThemeToggle onThemeChange={setIsSolarized} />
      
      <ManifestoHero isSolarized={isSolarized} />
      <ManifestoContent onComplete={setIsManifestoComplete} isSolarized={isSolarized} />
      {isManifestoComplete && (
        <>
          {/* Spacer between content and footer - desktop only */}
          <div className={`hidden md:block h-20 transition-colors duration-500 ${
            isSolarized ? 'bg-solarized-base' : 'bg-black'
          }`}></div>
          <ManifestoFooter isSolarized={isSolarized} />
        </>
      )}
    </main>
  );
};

export default Index;
