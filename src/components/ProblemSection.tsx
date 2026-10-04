import React from 'react';
import { Layers, Search, AlertTriangle, HelpCircle } from 'lucide-react';
import { PROBLEM_CARDS } from '../data/mockData';

export const ProblemSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-rose-600" />;
      case 'SearchCode':
        return <Search className="w-6 h-6 text-amber-600" />;
      case 'TargetOff':
        return <AlertTriangle className="w-6 h-6 text-orange-600" />;
      case 'HelpCircle':
      default:
        return <HelpCircle className="w-6 h-6 text-purple-600" />;
    }
  };

  const getBorderColor = (index: number) => {
    switch (index) {
      case 0:
        return 'hover:border-rose-300 group-hover:bg-rose-50/30';
      case 1:
        return 'hover:border-amber-300 group-hover:bg-amber-50/30';
      case 2:
        return 'hover:border-orange-300 group-hover:bg-orange-50/30';
      default:
        return 'hover:border-purple-300 group-hover:bg-purple-50/30';
    }
  };

  const getBgIcon = (index: number) => {
    switch (index) {
      case 0:
        return 'bg-rose-50 border-rose-100';
      case 1:
        return 'bg-amber-50 border-amber-100';
      case 2:
        return 'bg-orange-50 border-orange-100';
      default:
        return 'bg-purple-50 border-purple-100';
    }
  };

  return (
    <section className="py-20 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
            The Industry Challenge
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Problem
          </h3>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Many students have skills, certifications and project experience, but
            struggle to identify opportunities that genuinely match their abilities.
          </p>
        </div>

        {/* 4 Visual Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEM_CARDS.map((card, idx) => (
            <div
              key={card.id}
              className={`group bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${getBorderColor(
                idx
              )} flex flex-col justify-between`}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${getBgIcon(
                    idx
                  )}`}
                >
                  {getIcon(card.iconName)}
                </div>

                <div className="text-xs font-bold text-slate-400 mb-1">
                  CHALLENGE 0{idx + 1}
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {card.title}
                </h4>

                <p className="text-sm font-semibold text-slate-700 mb-3 leading-snug">
                  {card.description}
                </p>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {card.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] text-slate-400 font-medium">
                Traditional portal limitation
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
