import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const requirements = [
  "Female candidates only",
  "Age between 15 to 21 years",
  "Minimum 1,000 Instagram followers",
  "Active account with real engagement"
];

export function Eligibility() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image / Blur */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=2000" 
          alt="Background" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-md" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 flex justify-center">
        <motion.div 
          className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-10 md:p-14 rounded-3xl shadow-2xl text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Eligibility Criteria
            </h2>
            <p className="text-white/80 text-lg">
              Before applying, make sure you meet the following requirements.
            </p>
          </div>

          <div className="space-y-4">
            {requirements.map((req, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-lg font-medium">{req}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
