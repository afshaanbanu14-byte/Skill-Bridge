import React from 'react';
import {
  Rocket,
  CheckCircle2,
  Clock,
  Sparkles,
  Info,
} from 'lucide-react';
import { FUTURE_ROADMAP_PHASES } from '../data/mockData';

export const FutureScopeSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Rocket className="w-3.5 h-3.5" />
            <span>Future Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Competition Prototype to Scalable AI Platform
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A clear three-phase development trajectory outlining future planned capabilities.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200">
            <Info className="w-3.5 h-3.5 text-blue-600" />
            <span>Phases 2 and 3 represent future development scope and are not currently active in this demo.</span>
          </div>
        </div>

        {/* 3 Phases Detailed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FUTURE_ROADMAP_PHASES.map((phase) => (
            <div
              key={phase.phase}
              className={`rounded-3xl p-6 sm:p-8 border transition-all duration-200 flex flex-col justify-between ${
                phase.isCurrent
                  ? 'bg-blue-50/70 border-blue-400 ring-2 ring-blue-500/20 shadow-md'
                  : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {phase.phase}
                  </span>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1.5 ${
                      phase.isCurrent
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-slate-600 border border-slate-200'
                    }`}
                  >
                    {phase.isCurrent ? (
                      <>
                        <Sparkles className="w-3 h-3 text-yellow-300" />
                        <span>{phase.status}</span>
                      </>
                    ) : (
                      <>
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{phase.status}</span>
                      </>
                    )}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                  {phase.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {phase.description}
                </p>

                {/* Feature List */}
                <div className="space-y-2.5 pt-2 border-t border-slate-200/80">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Scope Items
                  </div>
                  {phase.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-xs font-semibold text-slate-800 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs"
                    >
                      {phase.isCurrent ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                      )}
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>{phase.isCurrent ? 'Demonstrated Today' : 'Future Milestone'}</span>
                <span className="font-semibold text-slate-700">
                  {phase.isCurrent ? 'Working Prototype' : 'Roadmap Item'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
