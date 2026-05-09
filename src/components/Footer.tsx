import { Instagram, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-text-brand text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold font-serif mb-2 text-white">InstaModel 2026</h3>
          <p className="text-white/60 text-sm max-w-sm">
            Stay updated with the latest announcements and updates. The search for new faces begins here.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <a 
            href="https://www.instagram.com/officialinstamodel2026?igsh=ejl6emdjc242ZmJq" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-white transition-colors mb-4 group"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
               <Instagram className="w-5 h-5" />
            </div>
            <span className="font-medium">@OfficialInstaModel2026</span>
          </a>
          
          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40 flex items-center justify-center gap-1">
        © 2026 InstaModel. Built with <Heart className="w-4 h-4 text-red-500 mx-1" /> for future stars.
      </div>
    </footer>
  );
}
