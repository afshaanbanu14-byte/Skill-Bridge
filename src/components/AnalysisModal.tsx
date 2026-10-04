import React, { useEffect, useState } from 'react';
import { Cpu, CheckCircle2, Loader2, Sparkles } from 'lucide-react';

interface AnalysisModalProps {
  isOpen: boolean;
  onComplete: () => void;
}

const STEPS = [
  'Analyzing your skills...',
  'Understanding your projects...',
  'Identifying suitable opportunities...',
  'Finding skill gaps...',
];

export const AnalysisModal: React.FC<AnalysisModalProps> = ({
  isOpen,
  onComplete,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const onCompleteRef = React.useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (!isOpen) {
      setCurrentStepIndex(0);
      return;
    }

    setCurrentStepIndex(0);
    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < STEPS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            onCompleteRef.current();
          }, 250);
          return prev;
        }
      });
    }, 320);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const progress = Math.min(
    100,
    Math.round(((currentStepIndex + 1) / STEPS.length) * 100)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
        {/* Top glowing bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 mb-4 animate-pulse">
            <Cpu className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center gap-2">
            <span>SkillBridge AI Engine</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Synthesizing candidate profile against current career opportunities
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-slate-100 rounded-full h-2.5 mb-6 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Step List */}
        <div className="space-y-3.5 mb-6">
          {STEPS.map((step, idx) => {
            const isCompleted = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;

            return (
              <div
                key={step}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                  isCurrent
                    ? 'bg-blue-50/80 border border-blue-200 text-blue-900 font-semibold'
                    : isCompleted
                    ? 'text-slate-700 bg-slate-50/60'
                    : 'text-slate-400 opacity-60'
                }`}
              >
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 animate-in zoom-in-75 duration-200" />
                  ) : isCurrent ? (
                    <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  )}
                </div>
                <span className="text-sm">{step}</span>
              </div>
            );
          })}
        </div>

        <div className="text-center text-xs text-slate-400">
          Generating personalized match scores & roadmap...
        </div>
      </div>
    </div>
  );
};
