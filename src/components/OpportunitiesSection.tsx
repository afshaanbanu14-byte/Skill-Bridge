import React, { useState } from 'react';
import {
  Briefcase,
  MapPin,
  Sparkles,
  ArrowRight,
  Building,
  Info,
} from 'lucide-react';
import { Opportunity } from '../types';

interface OpportunitiesSectionProps {
  opportunities: Opportunity[];
  onSelectOpportunity: (opportunity: Opportunity) => void;
}

export const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({
  opportunities,
  onSelectOpportunity,
}) => {
  const [filter, setFilter] = useState<'all' | 'high-match' | 'remote' | 'hybrid'>('all');

  const filteredOpportunities = opportunities.filter((opp) => {
    if (filter === 'high-match') return opp.matchPercentage >= 85;
    if (filter === 'remote') return opp.workType === 'Remote';
    if (filter === 'hybrid') return opp.workType === 'Hybrid';
    return true;
  });

  return (
    <section id="opportunities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-100 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Tailored Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Opportunities Matched For You
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Personalized recommendations based on your profile.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Matches ({opportunities.length})
            </button>
            <button
              onClick={() => setFilter('high-match')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'high-match'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              85%+ Match
            </button>
            <button
              onClick={() => setFilter('remote')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'remote'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Remote
            </button>
            <button
              onClick={() => setFilter('hybrid')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'hybrid'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hybrid
            </button>
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredOpportunities.map((opp) => {
            const isTopMatch = opp.matchPercentage >= 90;
            return (
              <div
                key={opp.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Role & Match % */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 mb-1">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>Company:</span>
                        <strong className="text-slate-900">{opp.company}</strong>
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {opp.title}
                      </h3>
                    </div>

                    <div
                      className={`text-right px-3 py-1.5 rounded-xl border flex flex-col items-end ${
                        isTopMatch
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-blue-50 text-blue-800 border-blue-200'
                      }`}
                    >
                      <span className="text-base font-extrabold tabular-nums leading-tight">
                        {opp.matchPercentage}%
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider">
                        Prototype Match Score
                      </span>
                    </div>
                  </div>

                  {/* Location & Work Type */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                    <span className="font-semibold text-slate-700">Location:</span>
                    <span>{opp.location}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-600 font-medium">{opp.stipend}</span>
                  </div>

                  {/* Skills Section */}
                  <div className="mb-5 pt-3 border-t border-slate-100">
                    <div className="text-xs font-semibold text-slate-600 mb-2">
                      Skills:
                    </div>
                    <div className="text-sm font-semibold text-slate-800 flex items-center gap-2 flex-wrap">
                      {opp.requiredSkills.map((sk, sIdx) => (
                        <React.Fragment key={sk}>
                          <span className="bg-slate-100 text-slate-800 px-2.5 py-0.5 rounded-md text-xs">
                            {sk}
                          </span>
                          {sIdx < opp.requiredSkills.length - 1 && (
                            <span className="text-slate-300" aria-hidden="true">
                              •
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Highlight Reason preview */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-6">
                    {opp.whyYouMatch}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    Sample demonstration role
                  </span>
                  <button
                    onClick={() => onSelectOpportunity(opp)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 hover:text-blue-800 transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prototype Clarification Note */}
        <div className="mt-8 text-center text-xs text-slate-500 bg-slate-50 py-3 px-4 rounded-xl border border-slate-200/80 flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            Sample opportunities for prototype demonstration. Match scores are illustrative estimates based on the prototype profile.
          </span>
        </div>
      </div>
    </section>
  );
};
