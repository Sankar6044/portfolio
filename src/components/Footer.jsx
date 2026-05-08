import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 py-8 border-t border-white/10 bg-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Sankar A. All rights reserved.
        </p>
        
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-neonBlue hover:border-neonBlue hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
}
