import { motion } from "motion/react";
import { Link, Users, Star, ArrowRight } from "lucide-react";

export function ReferralSystem() {
  return (
    <section className="py-24 bg-background-brand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center border border-primary/80">
          
          {/* Left Text Content */}
          <div className="flex-1 p-10 md:p-14 lg:p-20 text-white z-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Earn Points & <span className="text-accent underline decoration-accent/50 underline-offset-4">Boost Your Rank</span>
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-md">
                Share the challenge and grow your network! The more you refer, the higher your chances of moving to the next round.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-lg font-medium">50 Points for every successful referral</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-lg font-medium">Minimum 10 referrals required</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUpIcon />
                  </div>
                  <span className="text-lg font-medium">More referrals = Higher ranking</span>
                </li>
              </ul>
              
              <a 
                href="https://forms.gle/4VtUjbrhLGFMf2S98"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-secondary/90 transition-colors"
               >
                 Start Referring Now <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Visual Element */}
          <div className="flex-1 relative w-full min-h-[400px] md:h-auto overflow-hidden bg-primary-dark/20">
             {/* Abstract Network Illustration Using CSS */}
             <div className="absolute inset-0 bg-gradient-to-tr from-primary to-[#186477]" />
             
             {/* Main Hub */}
             <motion.div 
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/10 border-2 border-accent/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(255,215,0,0.2)]"
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             >
                <Link className="w-10 h-10 text-accent/80" />
             </motion.div>

             {/* Connecting Nodes */}
             <Node x="-100px" y="-120px" delay={0} icon={<img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" className="w-full h-full rounded-full object-cover opacity-80" alt="Avatar"/>} />
             <Node x="120px" y="-80px" delay={0.5} icon={<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" className="w-full h-full rounded-full object-cover opacity-80" alt="Avatar"/>} />
             <Node x="-80px" y="120px" delay={1} icon={<img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop" className="w-full h-full rounded-full object-cover opacity-80" alt="Avatar"/>} />
             <Node x="100px" y="100px" delay={1.5} icon={<img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop" className="w-full h-full rounded-full object-cover opacity-80" alt="Avatar"/>} />

             {/* Connecting lines SVG */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <motion.line x1="50%" y1="50%" x2="calc(50% - 100px)" y2="calc(50% - 120px)" stroke="#FFD700" strokeWidth="2" strokeDasharray="4 4" 
                  animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                <motion.line x1="50%" y1="50%" x2="calc(50% + 120px)" y2="calc(50% - 80px)" stroke="#2EC4B6" strokeWidth="2" strokeDasharray="4 4"
                  animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                <motion.line x1="50%" y1="50%" x2="calc(50% - 80px)" y2="calc(50% + 120px)" stroke="#2EC4B6" strokeWidth="2" strokeDasharray="4 4"
                  animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                <motion.line x1="50%" y1="50%" x2="calc(50% + 100px)" y2="calc(50% + 100px)" stroke="#FFD700" strokeWidth="2" strokeDasharray="4 4"
                  animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
             </svg>
          </div>

        </div>
      </div>
    </section>
  );
}

function TrendingUpIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
      <polyline points="16 7 22 7 22 13"></polyline>
    </svg>
  )
}

function Node({ x, y, delay, icon }: { x: string, y: string, delay: number, icon: React.ReactNode }) {
  return (
    <motion.div 
      className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm flex items-center justify-center p-1"
      style={{ marginLeft: x, marginTop: y, x: "-50%", y: "-50%" }}
      animate={{ y: ["-50%", `calc(-50% - 10px)`, "-50%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {icon}
    </motion.div>
  )
}
