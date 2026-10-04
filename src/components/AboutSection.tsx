import React from 'react';
import {
  Info,
  GraduationCap,
  Sparkles,
  RefreshCw,
  Building2,
  School,
  CheckCircle2,
} from 'lucide-react';
import { TARGET_AUDIENCES } from '../data/mockData';

export const AboutSection: React.FC = () => {
  const getAudienceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case 1:
        return <Sparkles className="w-5 h-5 text-indigo-600" />;
      case 2:
        return <RefreshCw className="w-5 h-5 text-purple-600" />;
      case 3:
        return <Building2 className="w-5 h-5 text-emerald-600" />;
      default:
        return <School className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-blue-800 text-xs font-semibold mb-3">
            <Info className="w-3.5 h-3.5" />
            <span>Mission & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About SkillBridge
          </h2>
          
          <div className="mt-6 space-y-4 max-w-3xl mx-auto text-left sm:text-center">
            <p className="text-lg sm:text-xl text-slate-800 font-semibold leading-relaxed">
              "SkillBridge is an AI-powered career opportunity concept designed to
              bridge the gap between student potential and career opportunities."
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              "Unlike a traditional job search approach, SkillBridge considers a student's
              education, skills, projects, certifications, interests and career goals to
              provide more personalized guidance."
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Degree-Independent Career Intelligence Across Disciplines</span>
            </div>
          </div>
        </div>

        {/* Target Users Showcase */}
        <div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-8">
            Target Users Across the Career Ecosystem
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {TARGET_AUDIENCES.map((item, idx) => (
              <div
                key={item.role}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                    {getAudienceIcon(idx)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.role}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-blue-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Supported User</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
