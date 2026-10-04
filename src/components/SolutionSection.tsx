import React from 'react';
import {
  UserCheck,
  Brain,
  Sparkles,
  Compass,
  Milestone,
  ArrowRight,
  ArrowDown,
} from 'lucide-react';
import { SOLUTION_STEPS } from '../data/mockData';

export const SolutionSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-blue-600" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-purple-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-emerald-600" />;
      case 'Milestone':
      default:
        return <Milestone className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
            <span>The Intelligent Bridge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet SkillBridge
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            "SkillBridge understands what a student can do and connects their
            potential with relevant career opportunities."
          </p>
        </div>

        {/* Visual Flow: 5 Steps */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 -translate-y-8 bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {SOLUTION_STEPS.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-50 transition-all">
                      {getIcon(item.icon)}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100/80 px-2 py-0.5 rounded">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400">
                    Stage {idx + 1}
                  </span>
                  {idx < SOLUTION_STEPS.length - 1 && (
                    <div className="text-blue-500 flex items-center">
                      <ArrowRight className="hidden lg:block w-4 h-4" />
                      <ArrowDown className="lg:hidden w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
