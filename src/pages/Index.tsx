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
        <ManifestoFooter isSolarized={isSolarized} />
      )}
    </main>
  );
};

export default Index;
