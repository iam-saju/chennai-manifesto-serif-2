import { useState } from "react";
import ManifestoHero from "@/components/ManifestoHero";
import ManifestoContent from "@/components/ManifestoContent";
import ManifestoFooter from "@/components/ManifestoFooter";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  const [isManifestoComplete, setIsManifestoComplete] = useState(false);
  const [isSolarized, setIsSolarized] = useState(false);

  return (
    <main className={`min-h-screen font-serif transition-colors duration-[800ms] ease-in-out scroll-smooth ${
      isSolarized ? 'bg-solarized-base' : 'bg-background'
    }`}>
      <ThemeToggle onThemeChange={setIsSolarized} />
      
      <ManifestoHero isSolarized={isSolarized} />
      <ManifestoContent onComplete={setIsManifestoComplete} isSolarized={isSolarized} />
      {isManifestoComplete && (
        <>
          {/* Spacer between content and footer with gradient */}
          <div className={`relative h-32 md:h-20 transition-colors duration-[800ms] ease-in-out ${
            isSolarized ? 'bg-solarized-base' : 'bg-black'
          }`}>
            <div className={`absolute inset-0 bg-gradient-to-b ${
              isSolarized 
                ? 'from-solarized-base/50 to-solarized-base' 
                : 'from-black/50 to-black'
            }`}></div>
          </div>
          <ManifestoFooter isSolarized={isSolarized} />
        </>
      )}
    </main>
  );
};

export default Index;
