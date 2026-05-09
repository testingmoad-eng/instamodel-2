import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is there any registration fee?",
    answer: "No, the registration process is simple and transparent. There are no hidden charges."
  },
  {
    question: "How are winners selected?",
    answer: "Selection is based on engagement, content quality, and your referral points. Top performers in all metrics move ahead."
  },
  {
    question: "Can beginners apply?",
    answer: "Yes, absolutely! If you meet the eligibility criteria (female, 15-21 years, 1K+ active followers), you are encouraged to apply."
  },
  {
    question: "When will results be announced?",
    answer: "Results will be shared after the final evaluation phase on our official social media channels and via email."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
          <p className="text-lg text-text-brand/70">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-background-brand"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg text-primary pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-secondary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-text-brand/70 border-t border-gray-100/50 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        {/* Trust Flags */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-text-brand/60">
          <div className="flex items-center gap-2">
            <span className="text-secondary">✓</span> Your data is safe and protected
          </div>
          <div className="flex items-center gap-2">
            <span className="text-secondary">✓</span> No hidden charges
          </div>
          <div className="flex items-center gap-2">
            <span className="text-secondary">✓</span> Fair and transparent selection
          </div>
        </div>
      </div>
    </section>
  );
}
