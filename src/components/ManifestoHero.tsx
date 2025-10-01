import companyLogo from "@/assets/company-logo.jpg";

interface ManifestoHeroProps {
  isSolarized?: boolean;
}

const ManifestoHero = ({ isSolarized = false }: ManifestoHeroProps) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${
      isSolarized ? 'bg-solarized-base' : 'bg-black'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 md:w-32 md:h-32 bg-manifesto-glow rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 md:w-24 md:h-24 bg-manifesto-accent rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>
      
      <div className=" mx-auto px-4 md:px-6 relative z-10 pb-4">
        <div className="relative">
          <img
            src={isSolarized ? "/Untitled (14) (1).jpg" : "/hero-image.png"}
            alt="The Chennai Compute Company"
            className="w-32 h-32 md:w-72 md:h-72 object-contain" />
        </div>
        
        <div className="">
          <img
            src="/765d4ab84d3609432554d5ef5e0df07a (1).jpg"
            alt="The Chennai Compute Company - Digital Connection"
            className="w-full max-w-sm md:max-w-3xl h-auto object-contain rounded-lg shadow-2xl shadow-black/50 hover:shadow-3xl hover:shadow-black/70 transition-shadow duration-300" />
        </div>
        
      </div>
    </section>);
};

export default ManifestoHero;