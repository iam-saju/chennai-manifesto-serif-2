import ManifestoHero from "@/components/ManifestoHero";
import ManifestoContent from "@/components/ManifestoContent";
import ManifestoFooter from "@/components/ManifestoFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background font-serif">
      <ManifestoHero />
      <ManifestoContent />
      <ManifestoFooter />
    </main>
  );
};

export default Index;
