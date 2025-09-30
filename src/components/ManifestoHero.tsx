import companyLogo from "@/assets/company-logo.jpg";

const ManifestoHero = () => {
  return (
    <section className="relative min-h-screen bg-manifesto-hero flex items-start justify-center overflow-hidden w-full h-[739px] pt-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 w-full h-[667px]">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-manifesto-glow rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-manifesto-accent rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10 pt-8 md:pt-12 pb-8">
        <div className="mb-8 flex justify-center">
          <img
            src="/hero1.jpg"
            alt="The Chennai Compute Company"
            className="w-full max-w-2xl h-auto object-contain" />
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-manifesto-text leading-none lg:text-pink-900 mt-16 md:mt-24 lg:mt-32">
          <span className="block text-manifesto-muted text-2xl md:text-3xl font-light mb-4">The</span>
          <span className="text-emerald-500">Manifesto</span>
        </h1>
      </div>
    </section>);
};

export default ManifestoHero;