import companyLogo from "@/assets/company-logo.jpg";

const ManifestoHero = () => {
  return (
    <section className="relative min-h-screen bg-manifesto-hero flex items-start justify-center overflow-hidden w-full h-[739px] pt-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 w-full h-[667px]">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-manifesto-glow rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-manifesto-accent rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10 w-full h-[507px]">
        <div className="mb-2 block py-[49px] !w-full !h-[479px]">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/7812d2c3-5e27-4241-b46b-e59b14fe0fc0/visual-edit-uploads/1759178672907-3jj3793q6wh.jpg"
            alt="The Chennai Compute Company"
            className="mx-auto h-16 md:h-20 object-cover !w-[45%] lg:!h-[442px] !max-w-[45%]" />
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-manifesto-text leading-none lg:text-pink-900 w-full h-[125px] my-1.5 py-[57px]">
          <span className="block text-manifesto-muted text-2xl md:text-3xl font-light mb-4">The</span>
          <span className="bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/7812d2c3-5e27-4241-b46b-e59b14fe0fc0/visual-edit-uploads/1759178845989-xf3ielt6pjg.png)] bg-cover bg-center text-emerald-500">Manifesto</span>
        </h1>
      </div>
    </section>);
};

export default ManifestoHero;