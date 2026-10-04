import React from 'react';
import { Sparkles, Brain, Award, Briefcase, Zap, Info } from 'lucide-react';
import { AnalysisResult, StudentProfile } from '../types';

interface AiCareerProfileProps {
  analysis: AnalysisResult;
  profile: StudentProfile;
}

export const AiCareerProfile: React.FC<AiCareerProfileProps> = ({
  analysis,
  profile,
}) => {
  return (
    <section id="ai-profile" className="py-16 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Personalized Candidate Diagnostics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Your AI Career Profile
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Capability breakdown based on submitted education, projects, certifications, skills and interests.
            </p>
          </div>

          {/* Candidate Identifier Badge */}
          <div className="bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
              {profile.name.charAt(0)}
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900">{profile.name}</div>
              <div className="text-[11px] text-slate-500 font-medium">
                {profile.education} · {profile.department}
              </div>
            </div>
          </div>
        </div>

        {/* 2 Column Layout: Skill Strengths & AI Insight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Skill Strengths Progress Bars */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Skill Strengths</h3>
                  <p className="text-xs text-slate-500">
                    Profile-based analysis derived from submitted coursework and practical work
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                Illustrative Profile Indicator
              </span>
            </div>

            {/* Progress Bars */}
            <div className="space-y-5 pt-1">
              {analysis.skillStrengths.map((item, idx) => {
                const getGradient = (i: number) => {
                  switch (i) {
                    case 0:
                      return 'bg-gradient-to-r from-blue-600 to-indigo-600';
                    case 1:
                      return 'bg-gradient-to-r from-indigo-600 to-blue-500';
                    case 2:
                      return 'bg-gradient-to-r from-blue-500 to-cyan-500';
                    default:
                      return 'bg-gradient-to-r from-slate-600 to-blue-600';
                  }
                };

                return (
                  <div key={item.skill} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-semibold text-slate-800">
                      <span>{item.skill}</span>
                      <span className="tabular-nums font-bold text-slate-900">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden p-0.5">
                      <div
                        className={`h-full rounded-full ${getGradient(
                          idx
                        )} transition-all duration-700 ease-out`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Simulated prototype evaluation based on candidate profile inputs</span>
            </div>
          </div>

          {/* Right Column (5 cols): AI Career Insight & Top Matches */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* AI Career Insight Card */}
            <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-6 sm:p-7 shadow-lg relative overflow-hidden">
              <div className="absolute right-0 top-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-400/20 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
                    AI Career Insight
                  </div>
                  <div className="text-sm font-bold text-white">Profile Synthesis</div>
                </div>
              </div>

              <blockquote className="text-sm text-blue-100/90 leading-relaxed font-normal">
                "{analysis.careerInsight}"
              </blockquote>

              <div className="mt-5 pt-4 border-t border-blue-800/60 flex items-center justify-between text-xs text-blue-300/80">
                <span className="font-medium">Confidence: High</span>
                <span>Profile-to-role matching active</span>
              </div>
            </div>

            {/* Top Career Matches Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Your Top Career Matches</h3>
                  <p className="text-xs text-slate-500">Roles with strong profile alignment</p>
                </div>
              </div>

              <div className="space-y-2.5">
                {analysis.topCareerMatches.map((matchRole, idx) => (
                  <div
                    key={matchRole}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/50 hover:border-blue-200 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-bold text-slate-900">{matchRole}</span>
                    </div>
                    <span className="text-xs font-semibold text-blue-600 bg-white px-2 py-1 rounded border border-slate-200">
                      {analysis.careerInsight.toLowerCase().includes('transition') && idx === 0
                        ? 'Transition Path'
                        : idx === 0
                        ? 'Primary Match'
                        : 'Suggested Path'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
