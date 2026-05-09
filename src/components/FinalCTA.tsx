import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1549438072-fe36dbbb61b6?auto=format&fit=crop&q=80&w=2000" 
          alt="Model Background" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-text-brand via-primary/80 to-primary/40 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 rounded-full border border-accent/40 bg-accent/10 text-accent font-medium text-sm mb-6 backdrop-blur-md">
            🔥 Your journey to becoming a star starts here!
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight drop-shadow-lg">
            👑 Your Journey <span className="italic text-accent">Starts Here</span>
          </h2>
          
          <a 
            href="https://forms.gle/4VtUjbrhLGFMf2S98"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 bg-secondary text-white px-10 py-5 rounded-full font-bold text-xl shadow-[0_0_40px_rgba(46,196,182,0.4)] hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-1"
          >
            Register Now <ArrowRight className="w-6 h-6" />
          </a>
          <p className="mt-6 text-sm text-white/60">Limited Spots Available</p>
        </motion.div>
      </div>
    </section>
  );
}
