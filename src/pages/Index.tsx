import { useState, lazy, Suspense } from "react";
import ManifestoHero from "@/components/ManifestoHero";
import ManifestoContent from "@/components/ManifestoContent";
import ThemeToggle from "@/components/ThemeToggle";

// Lazy load footer since it's below the fold
const ManifestoFooter = lazy(() => import("@/components/ManifestoFooter"));

const Index = () => {
  const [isManifestoComplete, setIsManifestoComplete] = useState(false);
  const [isSolarized, setIsSolarized] = useState(false);

  return (
    <main className={`min-h-screen font-serif transition-colors duration-800 ease-in-out scroll-smooth ${
      isSolarized ? 'bg-solarized-base' : 'bg-background'
    }`}>
      <ThemeToggle onThemeChange={setIsSolarized} />
      
      <ManifestoHero isSolarized={isSolarized} />
      <ManifestoContent onComplete={setIsManifestoComplete} isSolarized={isSolarized} />
      {isManifestoComplete && (
        <Suspense fallback={<div className="h-20" />}>
          <ManifestoFooter isSolarized={isSolarized} />
        </Suspense>
      )}
    </main>
  );
};

export default Index;
