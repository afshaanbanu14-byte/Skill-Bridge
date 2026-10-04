export interface StudentProfile {
  name: string;
  education: string; // Degree / Program: B.Tech, B.Sc, B.A, BBA, B.Com, MBA, etc.
  department: string; // Field / Specialization: IT, Economics, Business, etc.
  currentStatus: string; // Student / Fresh Graduate / Career Switcher
  year: string;
  skills: string;
  projects: string; // Projects / Practical Experience
  certifications: string;
  interests: string;
  preferredRole: string;
}

export interface SkillStrength {
  skill: string;
  percentage: number;
}

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  workType: 'Remote' | 'Hybrid' | 'On-site';
  requiredSkills: string[];
  matchPercentage: number;
  description: string;
  whyYouMatch: string;
  skillsToImprove: string[];
  stipend: string;
  postedDate: string;
}

export interface SkillGapData {
  targetRole: string;
  readinessPercentage: number;
  skillsHave: string[];
  skillsRecommended: string[];
  nextSteps: string[];
  nextRecommendedAction: string;
}

export interface RoadmapStage {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  actionItems: string[];
  status: string;
}

export interface AnalysisResult {
  skillStrengths: SkillStrength[];
  careerInsight: string;
  topCareerMatches: string[];
  opportunities: Opportunity[];
  skillGap: SkillGapData;
  roadmapStages: RoadmapStage[];
}
