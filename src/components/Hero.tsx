import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Search,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Cpu,
  GraduationCap,
  Briefcase,
  Zap,
  Info,
} from 'lucide-react';

interface HeroProps {
  onBuildProfileClick: () => void;
  onExploreOpportunitiesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBuildProfileClick,
  onExploreOpportunitiesClick,
}) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-blue-50/60 via-white to-slate-50/50"
    >
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-blue-200/30 to-purple-200/30 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-48 right-10 w-72 h-72 bg-blue-300/20 blur-2xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/70 text-blue-900 text-xs font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>Your Skills. Our AI. The Right Opportunities.</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Turn Your Skills Into{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Opportunities.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              SkillBridge uses AI-powered matching to connect your skills, projects,
              interests and career goals with opportunities that fit you.
            </p>

            {/* Core Positioning Callout */}
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-800">
                An AI-powered career opportunity platform for students and fresh graduates across disciplines.
              </p>
              <p className="text-sm font-medium text-slate-500 italic">
                "Bridge the gap between what you can do and where you can go."
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onBuildProfileClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 active:scale-98 transition-all cursor-pointer text-base"
              >
                <span>Build My Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreOpportunitiesClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-sm active:scale-98 transition-all cursor-pointer text-base"
              >
                <Search className="w-4 h-4 text-slate-500" />
                <span>Explore Opportunities</span>
              </button>
            </div>

            {/* Honest Capability Statements (Replacing unsupported numerical claims) */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="p-3 rounded-xl bg-white/70 border border-slate-200/80">
                <div className="text-sm font-extrabold text-slate-900">
                  AI-Powered Matching
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Beyond keyword search
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/70 border border-slate-200/80">
                <div className="text-sm font-extrabold text-blue-600">
                  Project-Aware
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Evaluates practical work
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/70 border border-slate-200/80">
                <div className="text-sm font-extrabold text-indigo-600">
                  Skill-Gap Driven
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Actionable learning steps
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Diagram: Student → AI → Career Opportunities */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Visual Container */}
            <div className="w-full max-w-md lg:max-w-lg bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-200/60 border border-slate-200/90 relative">
              
              {/* Floating Card 1: Prototype Match Score: 92% (Top Right) */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white rounded-2xl p-3 shadow-lg shadow-emerald-500/10 border border-emerald-100 flex items-center gap-2.5 z-20">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Prototype Match Score: 92%
                  </div>
                  <div className="text-[10px] text-emerald-700 font-medium">
                    Illustrative sample match
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Skill Gap Detected (Center Left) */}
              <div className="absolute top-1/2 -left-4 sm:-left-8 -translate-y-1/2 bg-white rounded-2xl p-3 shadow-lg shadow-purple-500/10 border border-purple-100 flex items-center gap-2.5 z-20">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Skill Gap Detected
                  </div>
                  <div className="text-[10px] text-purple-600 font-medium">
                    Target role learning path
                  </div>
                </div>
              </div>

              {/* Floating Card 3: Career Path Ready (Bottom Right) */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white rounded-2xl p-3 shadow-lg shadow-blue-500/10 border border-blue-100 flex items-center gap-2.5 z-20">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Career Path Ready
                  </div>
                  <div className="text-[10px] text-blue-600 font-medium">
                    Actionable 5-stage roadmap
                  </div>
                </div>
              </div>

              {/* Flow Title Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    AI Opportunity Flow
                  </span>
                </div>
                <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                  Prototype Example
                </span>
              </div>

              {/* 3 Step Visual Pipeline */}
              <div className="space-y-4 relative">
                {/* Step 1: Student Profile (Aisha example) */}
                <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/80 hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-blue-600">STEP 1 · STUDENT PROFILE</div>
                        <h4 className="text-sm font-bold text-slate-900">Aisha · B.Tech IT</h4>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-700 bg-white px-2 py-1 rounded border border-slate-200">
                      Goal: Data Analyst
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-slate-600 flex flex-wrap gap-1.5 pt-1">
                    <span className="bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] text-slate-700">Python</span>
                    <span className="bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] text-slate-700">Power BI</span>
                    <span className="bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] text-slate-700">Analytics Project</span>
                  </div>
                </div>

                {/* Connecting Pulse 1 */}
                <div className="flex justify-center -my-1">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-blue-400 to-indigo-500 relative flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping absolute" />
                  </div>
                </div>

                {/* Step 2: AI Neural Matching Engine */}
                <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 text-white rounded-2xl p-4 shadow-md relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/20 rounded-full blur-xl pointer-events-none" />
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/30 text-blue-300 border border-blue-400/30 flex items-center justify-center shrink-0">
                        <Cpu className="w-5 h-5 text-blue-200" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-blue-300">STEP 2 · AI ANALYSIS</div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                          <span>SkillBridge Intelligence</span>
                          <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                        </h4>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono bg-blue-500/20 text-blue-200 px-2 py-1 rounded border border-blue-400/30">
                      Processing
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-blue-200/90 leading-snug">
                    Synthesizing education, practical projects, certifications & target career interests.
                  </div>
                </div>

                {/* Connecting Pulse 2 */}
                <div className="flex justify-center -my-1">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-500 to-emerald-500 relative flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute" />
                  </div>
                </div>

                {/* Step 3: Career Matching */}
                <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-200/70 hover:border-emerald-300 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm shrink-0">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-emerald-700">STEP 3 · CAREER MATCHING</div>
                        <h4 className="text-sm font-bold text-slate-900">Data Analyst Intern</h4>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-extrabold text-emerald-700 bg-white px-2.5 py-1 rounded-lg border border-emerald-200 shadow-xs tabular-nums block">
                        92%
                      </span>
                      <span className="text-[9px] text-emerald-600 font-semibold block mt-0.5">
                        Match Score
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-slate-600 pt-1">
                    <span className="font-medium text-slate-700">Nova Analytics · Remote</span>
                    <span className="text-blue-600 font-semibold flex items-center gap-1">
                      Ready to review
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Info className="w-3 h-3 text-slate-400" />
                  Illustrative score generated for prototype demonstration.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
