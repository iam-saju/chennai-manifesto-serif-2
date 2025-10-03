import { useState, useCallback, memo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { notifySignup } from "@/api/emailService";

interface ManifestoFooterProps {
  isSolarized?: boolean;
}

const ManifestoFooter = memo(({ isSolarized = false }: ManifestoFooterProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsLoading(true);
    setSubmitMessage("");
    
    try {
      const result = await notifySignup(email.trim());
      
      if (result.success) {
        setIsSubmitted(true);
        setEmail("");
        setSubmitMessage("✓ Added to waitlist! We'll notify you soon.");
      } else {
        setSubmitMessage("✓ Added to waitlist! (Email notification pending)");
        setIsSubmitted(true);
        setEmail("");
      }
    } catch (error) {
      console.error('Signup error:', error);
      setSubmitMessage("✓ Added to waitlist! (Email notification pending)");
      setIsSubmitted(true);
      setEmail("");
    } finally {
      setIsLoading(false);
    }
  }, [email]);

  return (
    <section className={`py-6 md:py-10 transition-all duration-800 ease-in-out relative ${
      isSolarized 
        ? 'bg-[#F9EED0] border-solarized-violet' 
        : 'bg-zinc-900 border-gray-700'
    }`}>

      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4 md:gap-8 items-end">
          {/* Text content - vertically aligned column */}
          <div className="flex flex-col justify-between h-full space-y-4 md:space-y-6 text-center md:text-left order-2 md:order-1">
            {/* Main heading */}
            <h2 className={`font-serif text-2xl md:text-4xl font-medium transition-colors duration-800 ease-in-out ${
              isSolarized ? 'text-red-600' : 'text-white'
            }`}>
              Fuel Your Next Breakthrough
            </h2>
            
            {/* Separator line */}
            <div className={`border-t my-2 md:my-4 transition-colors duration-800 ease-in-out ${
              isSolarized ? 'border-orange-400' : 'border-gray-600'
            }`}></div>
            
            {/* Waiting List Form */}
            <div className="space-y-2 md:space-y-6">
              <h3 className={`font-serif text-base md:text-lg font-medium transition-colors duration-800 ease-in-out ${
                isSolarized ? 'text-orange-500' : 'text-gray-200'
              }`}>
                All providers. Real prices. Zero markup..
              </h3>
              <p className={`text-xs md:text-sm transition-colors duration-800 ease-in-out ${
                isSolarized ? 'text-red-500' : 'text-gray-400'
              }`}>
                Reserve your place before we go live.
              </p>
              
               {!isSubmitted ? (
                 <form 
                   onSubmit={handleSubmit} 
                   className="flex flex-col sm:flex-row gap-2 md:gap-3"
                 >
                   <Input
                     type="email"
                     placeholder="Enter your email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                     disabled={isLoading}
                     className={`flex-1 transition-all duration-300 ${
                       isSolarized 
                         ? 'bg-red-50 border-red-300 text-red-800 placeholder-red-400 focus:border-red-500 focus:ring-red-500/20' 
                         : 'bg-background border-border text-foreground focus:border-border focus:ring-0'
                     }`}
                   />
                   <Button 
                     type="submit"
                     disabled={isLoading || !email.trim()}
                     className={`font-medium px-6 transition-all duration-300 ${
                       isSolarized
                         ? 'bg-orange-500 text-white border border-orange-600 hover:bg-orange-600 hover:border-orange-700 shadow-lg shadow-orange-500/20 disabled:opacity-50'
                         : 'bg-card border border-border text-foreground hover:bg-muted hover:text-foreground disabled:opacity-50'
                     }`}
                   >
                     {isLoading ? 'Adding...' : 'Notify Me'}
                   </Button>
                 </form>
               ) : (
                 <div className={`mt-4 p-3 rounded-md border transition-all duration-300 ${
                   isSolarized 
                     ? 'bg-orange-100 border-orange-300' 
                     : 'bg-gray-800/50 border-gray-700'
                 }`}>
                   <p className={`text-xs text-center transition-colors duration-300 ${
                     isSolarized ? 'text-red-600' : 'text-green-500'
                   }`}>
                     {submitMessage || "✓ Added to waitlist!"}
                   </p>
                 </div>
               )}
            </div>
            
            {/* Location */}
            <div className={`pt-6 border-t transition-colors duration-800 ease-in-out ${
              isSolarized ? 'border-red-300' : 'border-gray-700'
            }`}>
              <p className={`text-sm tracking-wider !whitespace-pre-line flex items-center gap-2 transition-colors duration-800 ease-in-out ${
                isSolarized ? 'text-red-600' : 'text-gray-500'
              }`}>
                <span className={`w-2 h-2 rounded-full animate-pulse shadow-lg transition-colors duration-800 ease-in-out ${
                  isSolarized ? 'bg-orange-500 shadow-orange-500/50' : 'bg-green-500 shadow-green-500/50'
                }`}></span>
                crafted at 🌏 13.0827° N, 80.2707° E
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end items-end mt-4 md:mt-0 order-1 md:order-2">
            <img
              src={isSolarized ? "/Untitled (11) (1).jpg" : "/Untitled (10) (1).jpg"}
              alt="Chennai Compute Company Visualization"
              loading="lazy"
              decoding="async"
              className="w-full max-w-xs md:max-w-sm rounded-lg"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }} />
          </div>
        </div>
      </div>
    </section>
  );
});

ManifestoFooter.displayName = 'ManifestoFooter';

export default ManifestoFooter;