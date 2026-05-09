import { motion } from "motion/react";
import { Timer, ArrowRight, UsersRound } from "lucide-react";

export function Urgency() {
  return (
    <section className="py-20 bg-text-brand relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent pointer-events-none opacity-50" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 text-accent font-semibold mb-6">
            <UsersRound className="w-5 h-5" />
            <span className="tracking-wider uppercase text-sm">Be Among the 500 Selected Faces</span>
          </div>

          <h2 className="text-[36px] leading-[50px] font-bold mb-6">
            🔥 Limited Spots Available <br />
            <span className="text-white/80 font-normal">⏳ Applications Closing Soon</span>
          </h2>

          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Don’t miss your chance to stand out. Register now before the slots are filled and kickstart your modeling career.
          </p>

          <a 
            href="https://forms.gle/4VtUjbrhLGFMf2S98"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Submit Your Application Now <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
