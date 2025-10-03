import companyLogo from "@/assets/company-logo.jpg";

interface ManifestoHeroProps {
  isSolarized?: boolean;
}

const ManifestoHero = ({ isSolarized = false }: ManifestoHeroProps) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${
      isSolarized ? 'bg-solarized-base' : 'bg-black'
    }`}>
      {/* Animated background elements - floating and moving */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 md:w-40 md:h-40 bg-manifesto-glow rounded-full blur-3xl animate-float-1"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 md:w-32 md:h-32 bg-manifesto-accent rounded-full blur-3xl animate-float-2"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 md:w-24 md:h-24 bg-emerald-500 rounded-full blur-2xl animate-float-3"></div>
        <div className="absolute top-3/4 left-1/3 w-20 h-20 md:w-36 md:h-36 bg-green-400 rounded-full blur-3xl animate-float-4"></div>
        <div className="absolute top-1/3 right-1/2 w-14 h-14 md:w-28 md:h-28 bg-teal-500 rounded-full blur-2xl animate-float-5"></div>
        <div className="absolute bottom-1/4 left-1/2 w-18 h-18 md:w-32 md:h-32 bg-cyan-400 rounded-full blur-3xl animate-float-6"></div>
        <div className="absolute top-2/3 right-1/5 w-12 h-12 md:w-20 md:h-20 bg-emerald-400 rounded-full blur-xl animate-float-7"></div>
      </div>
      
      <div className="mx-auto px-4 md:px-6 relative z-10">
        <div className="relative">
          <img
            src={isSolarized ? "/Untitled (14) (1).jpg" : "/hero-image.png"}
            alt="The Chennai Compute Company"
            loading="eager"
            decoding="async"
            className="w-32 h-32 md:w-72 md:h-72 object-contain" />
        </div>
        
        <div className="">
          <img
            src="/765d4ab84d3609432554d5ef5e0df07a (1).jpg"
            alt="The Chennai Compute Company - Digital Connection"
            loading="eager"
            decoding="async"
            className="w-full max-w-sm md:max-w-3xl h-auto object-contain rounded-lg shadow-2xl shadow-black/50 hover:shadow-3xl hover:shadow-black/70 transition-shadow duration-300" />
        </div>
        
      </div>
    </section>);
};

export default ManifestoHero;