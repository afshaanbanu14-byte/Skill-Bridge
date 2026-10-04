import React from 'react';
import {
  Brain,
  Compass,
  Milestone,
  FolderGit2,
  TrendingUp,
  Sparkles,
  Quote,
} from 'lucide-react';
import { DIFFERENTIATION_CARDS } from '../data/mockData';

export const DifferentiationSection: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Brain className="w-5 h-5 text-blue-600" />;
      case 1:
        return <Compass className="w-5 h-5 text-purple-600" />;
      case 2:
        return <Milestone className="w-5 h-5 text-indigo-600" />;
      case 3:
        return <FolderGit2 className="w-5 h-5 text-amber-600" />;
      default:
        return <TrendingUp className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Competitive Edge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            More Than Just a Job Board
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Why traditional listing directories fail early-career talent and how
            SkillBridge provides a more holistic, capability-focused approach.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {DIFFERENTIATION_CARDS.map((item, idx) => (
            <div
              key={item.title}
              className={`bg-slate-50/70 rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between ${
                idx === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-2xs">
                    {getIcon(idx)}
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/60 text-[11px] text-slate-400 font-medium">
                Core Feature 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Pitch Statement Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white p-8 sm:p-10 shadow-xl relative overflow-hidden text-center">
          <div className="absolute top-2 left-6 text-blue-500/20">
            <Quote className="w-16 h-16" />
          </div>

          <p className="relative z-10 text-xl sm:text-2xl font-extrabold leading-snug tracking-tight text-white max-w-2xl mx-auto">
            "SkillBridge doesn't just ask what job you want. It understands what
            you can do and helps you discover what you can become."
          </p>

          <div className="mt-4 text-xs font-semibold text-blue-300 uppercase tracking-widest">
            The SkillBridge Philosophy
          </div>
        </div>

      </div>
    </section>
  );
};
