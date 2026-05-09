import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function StickyHeader() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > 100) {
      setAtTop(false);
    } else {
      setAtTop(true);
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${atTop ? 'bg-transparent py-6' : 'bg-white/90 backdrop-blur-md shadow-sm py-4 border-b border-gray-100'}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        <div className={`font-serif text-2xl font-bold transition-colors ${atTop ? 'text-primary' : 'text-primary'}`}>
          InstaModel
        </div>

        <motion.a
          href="https://forms.gle/4VtUjbrhLGFMf2S98"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold transition-all text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 ${atTop ? 'bg-white text-primary hover:bg-gray-50' : 'bg-primary text-white hover:bg-primary/90'}`}
        >
          Register <ArrowRight className="w-4 h-4 hidden sm:block" />
        </motion.a>
      </div>
    </motion.header>
  );
}
