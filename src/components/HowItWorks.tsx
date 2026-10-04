import React from 'react';
import {
  FileText,
  Brain,
  Search,
  Compass,
  Milestone,
  ArrowRight,
  Info,
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Build Your Profile',
      desc: 'Add your education, skills, projects, certifications, interests and career goals.',
      icon: FileText,
      accent: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
      num: '02',
      title: 'AI Understands Your Profile',
      desc: 'SkillBridge evaluates practical capabilities and interests beyond static keywords.',
      icon: Brain,
      accent: 'text-purple-600 bg-purple-50 border-purple-100',
    },
    {
      num: '03',
      title: 'Discover Opportunities',
      desc: 'Find career opportunities matched to your authentic capabilities.',
      icon: Search,
      accent: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      num: '04',
      title: 'Identify Skill Gaps',
      desc: 'Understand which specific skills will help you qualify for target roles.',
      icon: Compass,
      accent: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      num: '05',
      title: 'Follow Your Career Roadmap',
      desc: 'Follow a clear step-by-step path toward your career goals.',
      icon: Milestone,
      accent: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-blue-800 text-xs font-semibold mb-3">
            <span>Simple 5-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How SkillBridge Works
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A frictionless flow from student potential to structured industry opportunities.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-500 bg-white px-3 py-1 rounded-lg border border-slate-200">
            <Info className="w-3.5 h-3.5 text-blue-600" />
            <span>AI considers education, skills, projects, certifications, interests & goals across all disciplines.</span>
          </div>
        </div>

        {/* 5 Steps Grid with Connecting Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs group-hover:scale-105 transition-transform ${item.accent}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-mono font-extrabold text-slate-400">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Step {idx + 1} of 5</span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
