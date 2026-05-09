import { motion } from "motion/react";
import { Camera, Handshake, BookOpen, Crown } from "lucide-react";

const benefits = [
  {
    icon: <Camera className="w-8 h-8 text-secondary" />,
    title: "Professional Photoshoot",
    description: "Get a professional portfolio shot by top fashion photographers."
  },
  {
    icon: <Handshake className="w-8 h-8 text-secondary" />,
    title: "Brand Collaborations",
    description: "Connect with top brands and turn your presence into a business."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-secondary" />,
    title: "Magazine Features",
    description: "Exclusive feature in top digital and physical magazines."
  },
  {
    icon: <Crown className="w-8 h-8 text-secondary" />,
    title: "Top Digital Model",
    description: "Gain recognition and visibility as a premium influencer."
  }
];

export function WhyJoin() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Why Join InstaModel 2026?
            </h2>
            <p className="text-lg text-text-brand/70">
              Step into the world of fashion, influence, and opportunity. 
              InstaModel 2026 is your chance to turn your Instagram presence into a powerful personal brand.
              This is more than a competition — it’s your launchpad to fame.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-background-brand p-8 rounded-2xl border border-gray-100 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-secondary/20 group-hover:bg-secondary/10 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-text-brand/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
