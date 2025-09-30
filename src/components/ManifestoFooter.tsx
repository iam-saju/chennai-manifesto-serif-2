const ManifestoFooter = () => {
  return (
    <section className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-16 text-center md:text-left">
            {/* Main heading */}
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Power the Future with GPUs
            </h2>
            
            {/* Quote block */}
            <div className="space-y-6">
              <blockquote className="font-serif text-xl md:text-2xl text-foreground/90 font-light leading-relaxed">
                "Powering innovation through scalable GPU infrastructure. We provide the computational backbone for tomorrow's breakthroughs."
              </blockquote>
              <cite className="text-sm text-muted-foreground not-italic tracking-wide">
                THE CHENNAI COMPUTE COMPANY
              </cite>
            </div>
            
            {/* Location */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground tracking-wider !whitespace-pre-line">crafted at 13.0827° N, 80.2707° E

              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/7812d2c3-5e27-4241-b46b-e59b14fe0fc0/visual-edit-uploads/1759221396251-s1c5awphm8.jpg"
              alt="Thermal visualization"
              className="w-full max-w-xs rounded-lg" />

          </div>
        </div>
      </div>
    </section>);

};

export default ManifestoFooter;