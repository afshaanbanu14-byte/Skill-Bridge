import React, { useState } from 'react';
import {
  Milestone,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen,
  FolderGit2,
  Briefcase,
  Send,
  Lightbulb,
} from 'lucide-react';
import { SkillGapData, RoadmapStage } from '../types';

interface CareerRoadmapSectionProps {
  skillGap: SkillGapData;
  roadmapStages: RoadmapStage[];
  onExploreOpportunitiesClick: () => void;
}

export const CareerRoadmapSection: React.FC<CareerRoadmapSectionProps> = ({
  skillGap,
  roadmapStages,
  onExploreOpportunitiesClick,
}) => {
  // State for active clicked stage: default to Stage 1 or 2, fully clickable!
  const [selectedStageId, setSelectedStageId] = useState<number>(2);

  const stages = roadmapStages && roadmapStages.length > 0 ? roadmapStages : [];
  const activeStage =
    stages.find((s) => s.id === selectedStageId) || stages[0] || {
      id: 1,
      title: 'Build Foundation',
      shortDesc: 'Strengthen your core skills and concepts.',
      fullDesc: 'Focus on mastering the underlying principles of your chosen discipline.',
      actionItems: ['Complete core domain curriculum modules'],
      status: 'Foundation',
    };

  const getStageIcon = (id: number) => {
    switch (id) {
      case 1:
        return <BookOpen className="w-5 h-5" />;
      case 2:
        return <Clock className="w-5 h-5" />;
      case 3:
        return <FolderGit2 className="w-5 h-5" />;
      case 4:
        return <Briefcase className="w-5 h-5" />;
      case 5:
      default:
        return <Send className="w-5 h-5" />;
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Interactive 5-Stage Career Plan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Personalized Career Roadmap
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Target role:{' '}
            <strong className="text-slate-900">{skillGap.targetRole}</strong>
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Click on any stage below to inspect personalized milestones and suggested action items.
          </p>
        </div>

        {/* Recommended Action Card (Honest, no guaranteed percentage claims) */}
        <div className="max-w-4xl mx-auto mb-14 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1.5 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-200">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>Recommended Action</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold leading-snug">
              "{skillGap.nextRecommendedAction}"
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              Concrete projects help demonstrate your practical capabilities to potential hiring teams.
            </p>
          </div>

          <button
            onClick={onExploreOpportunitiesClick}
            className="self-start sm:self-center shrink-0 px-5 py-3 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-98 cursor-pointer flex items-center gap-2 whitespace-nowrap"
          >
            <span>Explore Opportunities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 5-Stage Interactive Progression Ribbon (ALL 5 ARE FULLY CLICKABLE) */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {stages.map((stage) => {
              const isSelected = stage.id === selectedStageId;

              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStageId(stage.id)}
                  type="button"
                  className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-blue-50/90 border-blue-500 shadow-md ring-2 ring-blue-500/20 -translate-y-1'
                      : 'bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700'
                        }`}
                      >
                        {getStageIcon(stage.id)}
                      </div>
                      <span
                        className={`text-xs font-mono font-bold ${
                          isSelected ? 'text-blue-700' : 'text-slate-400'
                        }`}
                      >
                        0{stage.id}
                      </span>
                    </div>

                    <h4
                      className={`text-sm font-bold mb-1.5 transition-colors ${
                        isSelected ? 'text-blue-900' : 'text-slate-900 group-hover:text-blue-600'
                      }`}
                    >
                      {stage.title}
                    </h4>

                    <p className="text-xs text-slate-500 leading-snug">
                      {stage.shortDesc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {isSelected ? 'Active View' : 'Click to inspect'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="max-w-5xl mx-auto bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-blue-200/80 shadow-xs animate-in fade-in duration-200">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
                <span>Stage 0{activeStage.id} Focus</span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-600 font-medium">{activeStage.status}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                {activeStage.title}
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                {activeStage.fullDesc}
              </p>
            </div>

            <div className="bg-white px-4 py-3 rounded-2xl border border-slate-200 shadow-2xs shrink-0 text-right">
              <span className="text-xs font-semibold text-slate-500 block">
                Roadmap Stage
              </span>
              <span className="text-lg font-extrabold text-blue-700">
                {activeStage.id} of 5 Active Milestones
              </span>
            </div>
          </div>

          {/* Actionable Next Steps for Selected Stage */}
          <div className="pt-6">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>Suggested Milestones for this Stage:</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeStage.actionItems.map((item, idx) => (
                <div
                  key={item}
                  className="bg-white p-4 rounded-xl border border-slate-200/90 flex items-start gap-3 shadow-2xs"
                >
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-medium text-slate-700 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
