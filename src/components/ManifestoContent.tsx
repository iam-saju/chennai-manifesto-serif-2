const ManifestoContent = () => {
  return (
    <section className="py-20 bg-background !w-full min-h-[808px]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-left">
          <div className="border-l-4 border-manifesto-accent pl-8 !w-full !h-full">
            <p className="text-xl text-manifesto-muted mb-6 font-light">To the Future,</p>
            
            <div className="space-y-4 text-manifesto-text !text-[10px]">
              <p className="leading-relaxed !text-base">We are The Chennai Compute Company.</p>
              
              <p className="leading-relaxed !text-base">We believe compute is the fundamental force shaping tomorrow. Every breakthrough begins with computational power.</p>
              
              <p className="leading-relaxed !text-base">From Chennai, we're building India's AI revolution. Intelligence amplified, not replaced.</p>
              
              <p className="leading-relaxed !text-base">We pursue relentless optimization. Every algorithm improved. Every system more efficient.</p>
              
              <p className="leading-relaxed !text-base">Ethics guide our design. Transparency drives our innovation. Open source accelerates our progress.</p>
              
              <p className="leading-relaxed !text-base">The computational future is being written today.</p>
            </div>
            
            <div className="mt-12 border-t border-manifesto-accent/30 pt-8 !w-[684px] !h-[60px]">
              <div className="flex justify-between items-end !w-[190px] !h-[46px]">
                <div className="space-y-1 !bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/7812d2c3-5e27-4241-b46b-e59b14fe0fc0/visual-edit-uploads/1759221981776-i3tlv140p.jpeg)] !bg-cover !bg-center !bg-none !bg-cover !bg-center">
                  <p className="text-lg text-manifesto-text !whitespace-pre-line"></p>
                  <p className="text-sm text-manifesto-muted !w-full !h-5 !whitespace-pre-line"></p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-manifesto-accent font-mono tracking-wider !whitespace-pre-line"></p>
                  <p className="text-xs text-manifesto-muted font-mono mt-1"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ManifestoContent;