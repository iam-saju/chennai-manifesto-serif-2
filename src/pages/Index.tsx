import { useState } from "react";
import ManifestoHero from "@/components/ManifestoHero";
import ManifestoContent from "@/components/ManifestoContent";
import ManifestoFooter from "@/components/ManifestoFooter";

const Index = () => {
  const [isManifestoComplete, setIsManifestoComplete] = useState(false);

  return (
    <main className="min-h-screen bg-background font-serif">

      <ManifestoHero />
      <ManifestoContent onComplete={setIsManifestoComplete} />
      {isManifestoComplete && <ManifestoFooter />}
    </main>
  );
};

export default Index;
