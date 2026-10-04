import React from 'react';
import {
  CheckCircle2,
  Circle,
  ArrowRight,
  TrendingUp,
  Target,
  Lightbulb,
  Info,
} from 'lucide-react';
import { SkillGapData } from '../types';

interface SkillGapSectionProps {
  skillGap: SkillGapData;
  onViewRoadmapClick: () => void;
}

export const SkillGapSection: React.FC<SkillGapSectionProps> = ({
  skillGap,
  onViewRoadmapClick,
}) => {
  return (
    <section id="skill-gap" className="py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>Target Role Alignment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Skill Gap — Know What to Learn Next
          </h2>
          <p className="mt-2 text-base text-slate-600">
            A targeted comparison between your current strengths and industry expectations.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-800 shadow-2xs">
            <span className="text-slate-500 font-normal">Target Role:</span>
            <span className="text-blue-600 font-bold">{skillGap.targetRole}</span>
          </div>
        </div>

        {/* Two Columns + Progress Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-5xl mx-auto mb-12">
          
          {/* Visual Progress Indicator */}
          <div className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                Target Role Alignment
              </div>
              <div className="text-xl font-extrabold text-slate-900">
                {skillGap.readinessPercentage}% Skills Identified from Profile
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Key competencies identified from your submitted coursework, projects, and certifications.
              </p>
            </div>

            <div className="w-full sm:w-48 bg-white/90 rounded-full h-3.5 border border-blue-200 overflow-hidden p-0.5 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-700"
                style={{ width: `${skillGap.readinessPercentage}%` }}
              />
            </div>
          </div>

          {/* Two Columns: Skills Already Present vs Recommended Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Column 1: Skills Already Present */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Skills Already Present
                </h3>
              </div>

              <div className="space-y-3">
                {skillGap.skillsHave.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100 text-slate-800 font-semibold text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Recommended Skills */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  ○
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Recommended Skills
                </h3>
              </div>

              <div className="space-y-3">
                {skillGap.skillsRecommended.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-blue-50/40 border border-blue-100 text-slate-800 font-semibold text-sm hover:bg-blue-50 transition-colors"
                  >
                    <Circle className="w-5 h-5 text-blue-500 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Recommended Next Steps */}
          <div className="mt-10 pt-8 border-t border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span>Suggested Learning & Project Activities</span>
              </h4>
              <span className="text-xs text-slate-400">Non-mandatory recommendations</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillGap.nextSteps.map((step, idx) => (
                <div
                  key={step}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between"
                >
                  <div>
                    <span className="w-6 h-6 rounded-md bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-2">
                      {idx + 1}
                    </span>
                    <p className="text-xs font-semibold text-slate-800 leading-snug">
                      {step}
                    </p>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-3 font-medium flex items-center gap-1">
                    <Lightbulb className="w-3 h-3 text-amber-500" />
                    Suggested activity
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* View Career Roadmap CTA */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              <span>Skill gaps are identified from the submitted profile, not external official audits.</span>
            </div>
            <button
              onClick={onViewRoadmapClick}
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 active:scale-98 transition-all cursor-pointer text-sm shrink-0"
            >
              <span>View Career Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
