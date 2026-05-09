import { motion } from "motion/react";
import { User, Calendar, Users, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-background-brand flex items-center overflow-hidden">
      {/* Background Gradient/Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex flex-col md:flex-row items-center gap-12 z-10 py-20">
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-primary font-medium text-sm mb-6 shadow-sm border border-accent/30">
            <Award className="w-4 h-4 text-accent drop-shadow-sm" />
            <span>Win worth of ₹1,00,000 Plus Brand Deals</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            InstaModel 2026 <br className="hidden md:block"/> 
            <span className="text-primary italic">The Search for New Faces</span>
          </h1>

          <p className="text-xl md:text-2xl text-text-brand/80 mb-8 font-light">
            ✨ Are you ready to become the next social media star?
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm font-medium text-sm text-text-brand/80 border border-gray-100">
              <User className="w-5 h-5 text-secondary" />
              Female Only
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm font-medium text-sm text-text-brand/80 border border-gray-100">
              <Calendar className="w-5 h-5 text-secondary" />
              Age 15–21
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm font-medium text-sm text-text-brand/80 border border-gray-100">
              <Users className="w-5 h-5 text-secondary" />
              1K+ Followers
            </div>
          </div>

          <motion.a
            href="https://forms.gle/4VtUjbrhLGFMf2S98"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-lg font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            👉 Register Now
          </motion.a>
        </motion.div>

        {/* Right Image area */}
        <motion.div 
          className="flex-1 w-full max-w-lg md:max-w-none relative aspect-[4/5] object-cover"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main composite/image */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000" 
              alt="InstaModel 2026" 
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/0 to-transparent" />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
             <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100" alt="Model" />
                <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100" alt="Model" />
                <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Model" />
                <div className="w-12 h-12 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  500+
                </div>
             </div>
             <p className="text-xs font-medium text-text-brand mt-2 text-center">Already Joined</p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
