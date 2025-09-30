import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ManifestoFooter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Text content - vertically aligned column */}
          <div className="flex flex-col space-y-8 text-center md:text-left">
            {/* Main heading */}
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Power the Future with GPUs
            </h2>
            
            {/* Waiting List Form */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-medium text-foreground">
                Compute Without Limits.
              </h3>
              <p className="text-sm text-muted-foreground">
                Reserve your place before we go live.
              </p>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-background border-border focus:border-green-500 focus:ring-green-500"
                  />
                  <Button 
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-medium px-6"
                  >
                    Notify Me
                  </Button>
                </form>
              ) : (
                <div className="flex items-center gap-2 text-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p className="text-sm font-medium">congrats ! you're on the list.</p>
                </div>
              )}
            </div>
            
            {/* Location */}
            <div className="pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground tracking-wider !whitespace-pre-line">crafted at 🌏 13.0827° N, 80.2707° E

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