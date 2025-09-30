const ManifestoContent = () => {
  return (
    <section className="py-32 md:py-40 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="border-l-4 border-green-500 pl-12 py-8">
          <p className="text-xl text-gray-400 mb-8 font-light font-serif">To the Future,</p>
          
          <div className="space-y-3 text-white font-serif tracking-tight">
            <p className="text-lg leading-relaxed">We are The Chennai Compute Company.</p>
            
            <p className="text-lg leading-relaxed">We believe compute is the fundamental force shaping tomorrow. Every breakthrough begins with computational power.</p>
            
            <p className="text-lg leading-relaxed">From Chennai, we're building India's AI revolution. Intelligence amplified, not replaced.</p>
            
            <p className="text-lg leading-relaxed">We pursue relentless optimization. Every algorithm improved. Every system more efficient.</p>
            
            <p className="text-lg leading-relaxed">Ethics guide our design. Transparency drives our innovation. Open source accelerates our progress.</p>
            
            <p className="text-lg leading-relaxed">The computational future is being written today.</p>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <img 
                  src="/signature.png" 
                  alt="the chennai compute.inc" 
                  className="h-16 md:h-20 w-auto object-contain brightness-0 invert"
                />
              </div>
              <div className="text-right space-y-1">
                <p className="text-sm text-green-500 font-mono tracking-wider flex items-center justify-end gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  DIGITALLY SIGNED
                </p>
                <p className="text-sm text-gray-400 font-mono">2025.01.01</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ManifestoContent;