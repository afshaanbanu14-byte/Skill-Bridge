import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ProfileBuilder } from './components/ProfileBuilder';
import { AnalysisModal } from './components/AnalysisModal';
import { AiCareerProfile } from './components/AiCareerProfile';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { OpportunityModal } from './components/OpportunityModal';
import { SkillGapSection } from './components/SkillGapSection';
import { CareerRoadmapSection } from './components/CareerRoadmapSection';
import { HowItWorks } from './components/HowItWorks';
import { DifferentiationSection } from './components/DifferentiationSection';
import { ImpactSection } from './components/ImpactSection';
import { FutureScopeSection } from './components/FutureScopeSection';
import { AboutSection } from './components/AboutSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

import { StudentProfile, AnalysisResult, Opportunity } from './types';
import { DEFAULT_PROFILE } from './data/mockData';
import { simulateAiAnalysis } from './utils/aiSimulator';

export default function App() {
  // Local state for candidate profile
  const [profile, setProfile] = useState<StudentProfile>(DEFAULT_PROFILE);

  // Computed / simulated AI analysis result
  const [analysis, setAnalysis] = useState<AnalysisResult>(() =>
    simulateAiAnalysis(DEFAULT_PROFILE)
  );

  // Modal states
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [profileToAnalyze, setProfileToAnalyze] = useState<StudentProfile>(DEFAULT_PROFILE);
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Helper smooth scrolling
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartAnalysis = (currentProf?: StudentProfile) => {
    const target = currentProf || profile;
    setProfile(target);
    setProfileToAnalyze(target);
    // Compute analysis immediately
    const newResult = simulateAiAnalysis(target);
    setAnalysis(newResult);
    setIsAnalyzing(true);
  };

  const handleSelectPreset = (preset: StudentProfile) => {
    setProfile(preset);
    setProfileToAnalyze(preset);
    const result = simulateAiAnalysis(preset);
    setAnalysis(result);
  };

  const handleAnalysisCompleted = () => {
    const target = profileToAnalyze || profile;
    const newResult = simulateAiAnalysis(target);
    setAnalysis(newResult);
    setIsAnalyzing(false);

    // Smooth scroll down to AI Profile Analysis
    setTimeout(() => {
      scrollTo('ai-profile');
    }, 150);

    setToastMessage(
      `AI analysis complete for ${target.name || 'Candidate'}! Opportunities and skill gaps updated.`
    );
  };

  const handleApplyOpportunity = (opp: Opportunity) => {
    setToastMessage(
      `Application flow for "${opp.title}" at ${opp.company} would be connected here in the real platform.`
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Navigation */}
      <Navbar onGetStartedClick={() => scrollTo('profile-builder')} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onBuildProfileClick={() => scrollTo('profile-builder')}
          onExploreOpportunitiesClick={() => scrollTo('opportunities')}
        />

        {/* 2. Problem Section */}
        <ProblemSection />

        {/* 3. Solution Section ("Meet SkillBridge") */}
        <SolutionSection />

        {/* 4. Interactive Profile Builder */}
        <ProfileBuilder
          profile={profile}
          setProfile={setProfile}
          onAnalyze={handleStartAnalysis}
          onSelectPreset={handleSelectPreset}
          isAnalyzing={isAnalyzing}
        />

        {/* 5. AI Profile Analysis Dashboard */}
        <AiCareerProfile analysis={analysis} profile={profile} />

        {/* 6. Matched Opportunities Section */}
        <OpportunitiesSection
          opportunities={analysis.opportunities}
          onSelectOpportunity={(opp) => setSelectedOpportunity(opp)}
        />

        {/* 7. Skill Gap Analysis Section */}
        <SkillGapSection
          skillGap={analysis.skillGap}
          onViewRoadmapClick={() => scrollTo('roadmap')}
        />

        {/* 8. Career Roadmap Section */}
        <CareerRoadmapSection
          skillGap={analysis.skillGap}
          roadmapStages={analysis.roadmapStages}
          onExploreOpportunitiesClick={() => scrollTo('opportunities')}
        />

        {/* 9. How It Works Section */}
        <HowItWorks />

        {/* 10. Differentiation Section ("More Than Just a Job Board") */}
        <DifferentiationSection />

        {/* 11. Impact Section */}
        <ImpactSection />

        {/* 12. Future Scope Section */}
        <FutureScopeSection />

        {/* 13. About Section */}
        <AboutSection />

        {/* 14. Final Call to Action */}
        <FinalCta onBuildProfileClick={() => scrollTo('profile-builder')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Animated AI Analysis Progress Modal */}
      <AnalysisModal
        isOpen={isAnalyzing}
        onComplete={handleAnalysisCompleted}
      />

      {/* Opportunity Details Modal */}
      <OpportunityModal
        opportunity={selectedOpportunity}
        onClose={() => setSelectedOpportunity(null)}
        onApply={handleApplyOpportunity}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
