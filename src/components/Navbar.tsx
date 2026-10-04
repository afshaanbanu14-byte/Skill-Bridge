import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onGetStartedClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onGetStartedClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Competition Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 text-center border-b border-slate-800 flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span className="font-medium text-white">Idea Pitching Competition Prototype</span>
        <span className="text-slate-500">·</span>
        <span className="text-slate-300">
          Career Opportunity Platform Across Disciplines
        </span>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20 text-white transition-transform group-hover:scale-105">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                  Skill<span className="text-blue-600">Bridge</span>
                </span>
                <span className="text-[10px] text-slate-500 font-medium tracking-wide">
                  AI Career Discovery
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <button
                onClick={() => scrollToSection('home')}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('opportunities')}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Opportunities
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                About
              </button>
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onGetStartedClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm hover:shadow-md hover:shadow-blue-500/20 active:scale-98 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left py-2 px-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-left py-2 px-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('opportunities')}
                className="text-left py-2 px-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Opportunities
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left py-2 px-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                About
              </button>

              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onGetStartedClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-center font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-colors"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
