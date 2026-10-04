import React, { useState } from 'react';
import {
  X,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  Send,
  Info,
} from 'lucide-react';
import { Opportunity } from '../types';

interface OpportunityModalProps {
  opportunity: Opportunity | null;
  onClose: () => void;
  onApply: (opportunity: Opportunity) => void;
}

export const OpportunityModal: React.FC<OpportunityModalProps> = ({
  opportunity,
  onClose,
  onApply,
}) => {
  const [applied, setApplied] = useState(false);

  if (!opportunity) return null;

  const handleApplyClick = () => {
    setApplied(true);
    onApply(opportunity);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="p-6 sm:p-7 border-b border-slate-100 flex items-start justify-between bg-slate-50/70">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                {opportunity.company}
              </span>
              <span className="text-slate-300">·</span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {opportunity.location}
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              {opportunity.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-7 space-y-6 overflow-y-auto">
          {/* Match Score Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200/70 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-slate-900">
                  Prototype Match Score: {opportunity.matchPercentage}%
                </div>
                <div className="text-xs text-slate-600">
                  Illustrative score based on the prototype profile
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                {opportunity.stipend}
              </span>
            </div>
          </div>

          {/* Role Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Role Overview
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {opportunity.description}
            </p>
          </div>

          {/* Required Skills */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Required Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {opportunity.requiredSkills.map((sk) => (
                <span
                  key={sk}
                  className="px-3 py-1 bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold border border-slate-200"
                >
                  {sk}
                </span>
              ))}
            </div>
          </div>

          {/* Why The Student Matches */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-900 mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Why Your Profile Matches</span>
            </div>
            <p className="text-xs sm:text-sm text-blue-900 leading-relaxed font-medium">
              {opportunity.whyYouMatch}
            </p>
          </div>

          {/* Skills to Improve */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/70">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900 mb-2">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Skills Recommended to Improve for This Role</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {opportunity.skillsToImprove.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer with Apply Action */}
        <div className="p-5 sm:p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Info className="w-4 h-4 text-slate-400" />
            <span>Sample opportunity for prototype demonstration</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleApplyClick}
              disabled={applied}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 active:scale-98 transition-all cursor-pointer disabled:bg-emerald-600 disabled:shadow-none"
            >
              {applied ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Application Simulated!</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Apply for Role</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
