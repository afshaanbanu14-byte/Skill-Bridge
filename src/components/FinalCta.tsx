import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onBuildProfileClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onBuildProfileClick }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/20 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500/20 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Idea Pitching Competition Prototype</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Your Skills. Our AI.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                The Right Opportunities.
              </span>
            </h2>

            <p className="text-base sm:text-xl text-blue-100/90 max-w-xl mx-auto font-normal">
              Bridge the gap between potential and opportunity.
            </p>

            <div className="pt-4 flex justify-center">
              <button
                onClick={onBuildProfileClick}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-slate-950 bg-white hover:bg-blue-50 shadow-xl shadow-black/20 hover:shadow-2xl active:scale-98 transition-all cursor-pointer text-base"
              >
                <span>Build My Profile</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
