import React from 'react';
import { Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800">
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-left space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Skill<span className="text-blue-500">Bridge</span>
              </span>
            </div>
            <p className="text-xs text-slate-400">
              "Your Skills. Our AI. The Right Opportunities."
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollTo('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('how-it-works')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo('opportunities')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Opportunities
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
          </nav>

          {/* Prototype Demo Tag */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Prototype Demo</span>
          </div>

        </div>

        {/* Quiet Bottom Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center sm:text-left">
          <div>
            SkillBridge &copy; 2026. Idea Pitching Competition Demonstration.
          </div>
          <div className="text-slate-400">
            Simulated AI intelligence with sample local state data.
          </div>
        </div>
      </div>
    </footer>
  );
};
