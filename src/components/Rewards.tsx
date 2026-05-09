import { motion } from "motion/react";
import { Coins, Camera, BookOpen, Handshake } from "lucide-react";

export function Rewards() {
  const rewards = [
    {
      title: "₹1,00,000 Plus Brand Contract",
      icon: <Coins className="w-10 h-10 text-accent mb-4" />,
      colSpan: "md:col-span-2 shadow-[0_0_40px_rgba(255,215,0,0.15)] ring-1 ring-accent/30"
    },
    {
      title: "Professional Modeling Photoshoot",
      icon: <Camera className="w-10 h-10 text-primary mb-4" />,
      colSpan: "md:col-span-1 border border-primary/10"
    },
    {
      title: "Magazine Feature Opportunity",
      icon: <BookOpen className="w-10 h-10 text-primary mb-4" />,
      colSpan: "md:col-span-1 border border-primary/10"
    },
    {
      title: "Brand Deals & Collaborations",
      icon: <Handshake className="w-10 h-10 text-primary mb-4" />,
      colSpan: "md:col-span-2 border border-primary/10"
    }
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-3xl opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 z-10 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-accent/20 text-yellow-800 font-medium text-sm mb-4">
              Rewards & Benefits
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-brand leading-tight">
              This is your moment to shine ✨
            </h2>
            <p className="text-lg text-text-brand/70 max-w-2xl mx-auto">
              We reward our top talents with exclusive opportunities, contracts, and recognition. 
              The ultimate winner receives the official title of InstaModel 2026.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rewards.map((reward, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all hover:-translate-y-2 hover:shadow-xl ${reward.colSpan}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {reward.icon}
              <h3 className="text-xl md:text-2xl font-bold text-text-brand">
                {reward.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
