import companyLogo from "@/assets/company-logo.jpg";

const ManifestoHero = () => {
  return (
    <section className="relative min-h-screen bg-black  flex items-start justify-center overflow-hidden w-full h-[739px] pt-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 w-full h-[667px]">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-manifesto-glow rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-manifesto-accent rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10 pt-4 pb-4">
        <div className="relative flex justify-center">
          <img
            src="/hero-image.png"
            alt="The Chennai Compute Company"
            className="w-50 h-50 md:w-72 md:h-72 object-contain" />
        </div>
        
        <div className="flex justify-center">
          <img
            src="/765d4ab84d3609432554d5ef5e0df07a (1).jpg"
            alt="The Chennai Compute Company - Digital Connection"
            className="w-full max-w-3xl h-auto object-contain rounded-lg shadow-2xl shadow-black/50 hover:shadow-3xl hover:shadow-black/70 transition-shadow duration-300" />
        </div>
        
      </div>
    </section>);
};

export default ManifestoHero;