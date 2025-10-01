import { useState, useEffect } from "react";
import ManifestoHero from "@/components/ManifestoHero";
import ManifestoContent from "@/components/ManifestoContent";
import ManifestoFooter from "@/components/ManifestoFooter";

const Index = () => {
  const [isManifestoComplete, setIsManifestoComplete] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

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
    <main className="min-h-screen bg-background font-serif">

      <ManifestoHero />
      <ManifestoContent onComplete={setIsManifestoComplete} />
      {isManifestoComplete && <ManifestoFooter />}
    </main>
  );
};

export default Index;
