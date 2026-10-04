import React from 'react';
import {
  GraduationCap,
  Building2,
  School,
  Globe2,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { IMPACT_CARDS } from '../data/mockData';

export const ImpactSection: React.FC = () => {
  const getIcon = (stakeholder: string) => {
    switch (stakeholder) {
      case 'Students':
        return <GraduationCap className="w-6 h-6 text-blue-600" />;
      case 'Recruiters':
        return <Building2 className="w-6 h-6 text-purple-600" />;
      case 'Educational Institutions':
        return <School className="w-6 h-6 text-emerald-600" />;
      case 'Society':
      default:
        return <Globe2 className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-blue-800 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Multi-Stakeholder Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Creating Value for Everyone
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A collaborative career ecosystem connecting academia with evolving workplace needs.
          </p>
        </div>

        {/* 4 Cards Grid (No unsupported percentage claims) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_CARDS.map((card) => (
            <div
              key={card.stakeholder}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 shadow-2xs">
                  {getIcon(card.stakeholder)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {card.stakeholder}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                  {card.benefit}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 bg-slate-50/60 -mx-6 -mb-6 p-5 rounded-b-3xl">
                <div className="text-sm font-extrabold text-blue-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>{card.highlight}</span>
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                  {card.highlightDesc}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
