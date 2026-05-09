import { motion } from "motion/react";
import { FormInput, Share2, ImagePlus, TrendingUp, Trophy } from "lucide-react";

const steps = [
  {
    icon: <FormInput className="w-6 h-6" />,
    title: "Register Online",
    desc: "Fill out the application form"
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Refer & Earn",
    desc: "Invite friends to join the challenge"
  },
  {
    icon: <ImagePlus className="w-6 h-6" />,
    title: "Post Content",
    desc: "Show your style and creativity"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Get Ranked",
    desc: "Top performers move ahead"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Win & Shine",
    desc: "Become the face of InstaModel 2026"
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white container mx-auto px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">How It Works</h2>
        <p className="text-lg text-text-brand/70">
          The path to becoming the next digital star is simple. Follow these steps to begin.
        </p>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gray-100 -translate-y-1/2 z-0" />
        
        <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-12 lg:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center text-center group">
              <motion.div 
                className="w-16 h-16 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center text-secondary relative mb-6 group-hover:border-secondary transition-colors duration-300 shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                whileHover={{ scale: 1.1 }}
              >
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-md">
                  0{index + 1}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-text-brand/70 text-sm max-w-[200px] mx-auto">{step.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
