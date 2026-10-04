import React from 'react';
import {
  Sparkles,
  RotateCcw,
  User,
  GraduationCap,
  BookOpen,
  Calendar,
  Code2,
  FolderGit2,
  Award,
  Heart,
  Target,
  Wand2,
  UserCheck,
} from 'lucide-react';
import { StudentProfile } from '../types';
import {
  PRESET_PROFILES,
  DEFAULT_PROFILE,
  DEGREE_OPTIONS,
  SPECIALIZATION_OPTIONS,
  STATUS_OPTIONS,
  CAREER_ROLE_OPTIONS,
} from '../data/mockData';

interface ProfileBuilderProps {
  profile: StudentProfile;
  setProfile: React.Dispatch<React.SetStateAction<StudentProfile>>;
  onAnalyze: (submittedProfile?: StudentProfile) => void;
  onSelectPreset?: (presetProfile: StudentProfile) => void;
  isAnalyzing: boolean;
}

export const ProfileBuilder: React.FC<ProfileBuilderProps> = ({
  profile,
  setProfile,
  onAnalyze,
  onSelectPreset,
  isAnalyzing,
}) => {
  const handleChange = (field: keyof StudentProfile, value: string) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const loadPreset = (presetProfile: StudentProfile) => {
    setProfile(presetProfile);
    if (onSelectPreset) {
      onSelectPreset(presetProfile);
    }
  };

  return (
    <section id="profile-builder" className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Multi-Disciplinary Prototype Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Build Your Skill Profile
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            SkillBridge supports students across arts, science, commerce, management, and technology.
            We evaluate skills, practical projects, certifications and interests rather than just your degree title.
          </p>
        </div>

        {/* Demo Preset Selector Bar demonstrating cross-discipline capabilities */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-indigo-50/70 to-purple-50/80 border border-blue-200/70 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
            <Wand2 className="w-4 h-4 text-blue-600" />
            <span>Demo Presets Across Disciplines:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {PRESET_PROFILES.map((preset) => {
              const isActive = profile.name === preset.profile.name;
              return (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => loadPreset(preset.profile)}
                  className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span className="font-bold">{preset.label}</span>
                  <span className={`text-[10px] ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                    ({preset.badge})
                  </span>
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => setProfile(DEFAULT_PROFILE)}
              title="Reset to default"
              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-white rounded-lg transition-colors cursor-pointer border border-transparent hover:border-slate-200"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Profile Form Card */}
        <div className="bg-slate-50/50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onAnalyze(profile);
            }}
            className="space-y-6"
          >
            {/* Row 1: Name, Degree / Program, Field / Specialization, Current Status, Year */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-600" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="e.g. Aisha"
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all font-medium"
                  required
                />
              </div>

              {/* Degree / Program (Multi-Disciplinary Dropdown) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                  Degree / Program
                </label>
                <select
                  value={profile.education}
                  onChange={(e) => handleChange('education', e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all font-medium cursor-pointer"
                  required
                >
                  {DEGREE_OPTIONS.map((deg) => (
                    <option key={deg} value={deg}>
                      {deg}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field / Specialization */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  Field / Specialization
                </label>
                <input
                  type="text"
                  list="specialization-options"
                  value={profile.department}
                  onChange={(e) => handleChange('department', e.target.value)}
                  placeholder="e.g. Computer Science"
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all font-medium"
                  required
                />
                <datalist id="specialization-options">
                  {SPECIALIZATION_OPTIONS.map((spec) => (
                    <option key={spec} value={spec} />
                  ))}
                </datalist>
              </div>

              {/* Current Status (Student / Fresh Graduate / Career Switcher) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                  Current Status
                </label>
                <select
                  value={profile.currentStatus}
                  onChange={(e) => handleChange('currentStatus', e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all font-medium cursor-pointer"
                  required
                >
                  {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year of Study */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  Year of Study
                </label>
                <input
                  type="text"
                  value={profile.year}
                  onChange={(e) => handleChange('year', e.target.value)}
                  placeholder="e.g. 2026 Graduate"
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all font-medium"
                  required
                />
              </div>
            </div>

            {/* Row 2: Skills & Preferred Career Role */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-7">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-blue-600" />
                  Skills (comma separated)
                </label>
                <input
                  type="text"
                  value={profile.skills}
                  onChange={(e) => handleChange('skills', e.target.value)}
                  placeholder="e.g. Python, Excel, Power BI, Market Research, Copywriting..."
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all font-medium"
                  required
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Include technical tools, analytical frameworks, communication, or software skills.
                </span>
              </div>

              <div className="lg:col-span-5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-blue-600" />
                  Preferred Career Role
                </label>
                <input
                  type="text"
                  list="career-roles-list"
                  value={profile.preferredRole}
                  onChange={(e) => handleChange('preferredRole', e.target.value)}
                  placeholder="e.g. Data Analyst, Business Analyst..."
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all font-medium"
                  required
                />
                <datalist id="career-roles-list">
                  {CAREER_ROLE_OPTIONS.map((role) => (
                    <option key={role} value={role} />
                  ))}
                </datalist>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Supports diverse paths across tech, business, research, creative and education.
                </span>
              </div>
            </div>

            {/* Row 3: Projects / Practical Experience */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FolderGit2 className="w-3.5 h-3.5 text-indigo-600" />
                Projects / Practical Experience (Coursework, portfolio pieces, campaigns or case studies)
              </label>
              <textarea
                rows={2}
                value={profile.projects}
                onChange={(e) => handleChange('projects', e.target.value)}
                placeholder="Student Feedback Management System, AI Job Market Analytics Dashboard..."
                className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all font-medium resize-none"
                required
              />
              <span className="text-[11px] text-slate-400 mt-0.5 block">
                Practical experience helps SkillBridge evaluate hands-on capabilities beyond static resumes.
              </span>
            </div>

            {/* Row 4: Certifications & Interests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-purple-600" />
                  Certifications
                </label>
                <input
                  type="text"
                  value={profile.certifications}
                  onChange={(e) => handleChange('certifications', e.target.value)}
                  placeholder="e.g. Power BI, Project Management, HubSpot, IoT..."
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-500" />
                  Interests
                </label>
                <input
                  type="text"
                  value={profile.interests}
                  onChange={(e) => handleChange('interests', e.target.value)}
                  placeholder="e.g. Data Analytics, Product Strategy, Brand Storytelling..."
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all font-medium"
                />
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 flex flex-col items-center justify-center gap-2">
              <button
                type="submit"
                disabled={isAnalyzing}
                className="w-full sm:w-auto min-w-[280px] inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-xl shadow-blue-500/25 active:scale-98 transition-all cursor-pointer text-base disabled:opacity-70"
              >
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <span>{isAnalyzing ? 'Running AI Engine...' : 'Analyze My Profile'}</span>
              </button>
              <span className="text-[11px] text-slate-400">
                Simulated AI diagnostic for prototype demonstration
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
