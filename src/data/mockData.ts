import { StudentProfile, AnalysisResult, RoadmapStage } from '../types';

export const DEGREE_OPTIONS = [
  'B.Tech',
  'B.E.',
  'B.Sc',
  'B.A.',
  'BBA',
  'B.Com',
  'M.Sc',
  'M.A.',
  'MBA',
  'MCA',
  'Other',
];

export const SPECIALIZATION_OPTIONS = [
  'Information Technology',
  'Computer Science',
  'Business Administration',
  'Commerce',
  'Mathematics',
  'Physics',
  'English',
  'Economics',
  'Management',
  'Data Science',
  'Finance',
  'Marketing',
  'Other',
];

export const STATUS_OPTIONS = [
  'Fresh Graduate',
  'Final Year Student',
  '2nd/3rd Year Student',
  'Career Switcher',
];

export const CAREER_ROLE_OPTIONS = [
  'Data Analyst',
  'Business Intelligence Analyst',
  'Front-End Developer',
  'Web Developer',
  'Content Writer',
  'Digital Marketing Executive',
  'Communications Specialist',
  'Business Analyst',
  'Operations Analyst',
  'Software Developer',
  'UI/UX Designer',
  'Research Assistant',
  'AI/ML Engineer',
];

export const DEFAULT_PROFILE: StudentProfile = {
  name: 'Aisha',
  education: 'B.Sc',
  department: 'Computer Science',
  currentStatus: 'Fresh Graduate',
  year: '2026 Graduate',
  skills: 'Python, SQL, Excel, Power BI',
  projects: 'Sales data analysis using Python and a Power BI dashboard',
  certifications: 'Python for Data Analysis, Power BI',
  interests: 'Data Analytics, Data Visualization',
  preferredRole: 'Data Analyst, Business Intelligence Analyst',
};

export const PRESET_PROFILES: { label: string; badge: string; profile: StudentProfile }[] = [
  {
    label: 'Aisha · Tech/Data',
    badge: 'B.Sc CS · Data Analyst',
    profile: DEFAULT_PROFILE,
  },
  {
    label: 'Rahul · Front-End',
    badge: 'B.Tech IT · Front-End Developer',
    profile: {
      name: 'Rahul',
      education: 'B.Tech',
      department: 'Information Technology',
      currentStatus: 'Fresh Graduate',
      year: '2026 Graduate',
      skills: 'HTML, CSS, JavaScript, React',
      projects: 'Student feedback website and portfolio website',
      certifications: 'Responsive Web Design',
      interests: 'Web Development, UI Design',
      preferredRole: 'Front-End Developer, Web Developer',
    },
  },
  {
    label: 'Elena · Content & Media',
    badge: 'B.A English · Content Writer',
    profile: {
      name: 'Elena',
      education: 'B.A.',
      department: 'English',
      currentStatus: 'Fresh Graduate',
      year: '2026 Graduate',
      skills: 'Communication, Writing, Canva, Presentation',
      projects: 'College magazine and social media content project',
      certifications: 'Inbound Marketing',
      interests: 'Writing, Media, Marketing',
      preferredRole: 'Content Writer, Digital Marketing, Communications',
    },
  },
  {
    label: 'Marcus · Business',
    badge: 'BBA · Business Analyst',
    profile: {
      name: 'Marcus',
      education: 'BBA',
      department: 'Business Administration',
      currentStatus: 'Final Year Student',
      year: 'Final Year',
      skills: 'Excel, Communication, Presentation, Business Analysis',
      projects: 'Market study and business process analysis',
      certifications: 'Business Foundations',
      interests: 'Business Strategy, Operations',
      preferredRole: 'Business Analyst, Operations Analyst',
    },
  },
  {
    label: 'Sarah · Software Dev',
    badge: 'B.Tech CS · Software Engineer',
    profile: {
      name: 'Sarah',
      education: 'B.Tech',
      department: 'Computer Science',
      currentStatus: 'Fresh Graduate',
      year: '2026 Graduate',
      skills: 'Java, Python, SQL, C++, Git',
      projects: 'E-commerce RESTful API service with relational database',
      certifications: 'Java SE Certified, AWS Cloud Fundamentals',
      interests: 'Backend Systems, Algorithms, API Design',
      preferredRole: 'Software Developer, Backend Developer',
    },
  },
  {
    label: 'Priya · UI/UX Design',
    badge: 'B.Des · Product Designer',
    profile: {
      name: 'Priya',
      education: 'B.Des',
      department: 'Design & Interaction',
      currentStatus: 'Final Year Student',
      year: 'Final Year',
      skills: 'Figma, Wireframing, UI Design, Prototyping, User Research',
      projects: 'Campus mobile app redesign and user onboarding case study',
      certifications: 'Google UX Design Professional Certificate',
      interests: 'Design Systems, User Research, Interaction Design',
      preferredRole: 'UI/UX Designer, Product Designer',
    },
  },
];

export const DEFAULT_ANALYSIS_RESULT: AnalysisResult = {
  skillStrengths: [
    { skill: 'Python', percentage: 85 },
    { skill: 'Excel & Spreadsheet Modeling', percentage: 82 },
    { skill: 'Power BI & Dashboards', percentage: 78 },
    { skill: 'Data Visualization', percentage: 75 },
  ],
  careerInsight:
    "Your profile shows a strong foundation in analytics-related skills. Strengthening SQL and statistics could improve your readiness for Data Analyst opportunities.",
  topCareerMatches: [
    'Data Analyst',
    'Business Intelligence Analyst',
    'Data Visualization Specialist',
  ],
  opportunities: [
    {
      id: 'opp-da-1',
      title: 'Data Analyst Intern',
      company: 'Nova Analytics',
      location: 'Remote',
      workType: 'Remote',
      requiredSkills: ['Python', 'Excel', 'Power BI'],
      matchPercentage: 92,
      stipend: '$28 - $35 / hr',
      postedDate: '2 days ago',
      description:
        'Collaborate with analytics team members to prepare datasets, build automated dashboard reports, and support executive KPI reviews.',
      whyYouMatch:
        'Your practical projects, Excel proficiency, and Power BI familiarity directly align with daily reporting tasks.',
      skillsToImprove: [
        'Production SQL window functions',
        'Data cleaning automation with Pandas',
        'Cross-functional metric storytelling',
      ],
    },
    {
      id: 'opp-da-2',
      title: 'Business Intelligence Intern',
      company: 'Insight Labs',
      location: 'Hybrid · San Francisco, CA',
      workType: 'Hybrid',
      requiredSkills: ['Power BI', 'SQL', 'Data Modeling'],
      matchPercentage: 87,
      stipend: '$26 - $33 / hr',
      postedDate: 'Just now',
      description:
        'Design intuitive business intelligence reports and transform raw database records into clear executive summaries.',
      whyYouMatch:
        'Strong overlap with your dashboard building experience and analytical coursework.',
      skillsToImprove: [
        'Advanced DAX calculations',
        'ETL pipeline fundamentals',
        'Executive presentation delivery',
      ],
    },
    {
      id: 'opp-da-3',
      title: 'Data Visualization Intern',
      company: 'MetricFlow Systems',
      location: 'Remote',
      workType: 'Remote',
      requiredSkills: ['Tableau', 'Power BI', 'Python'],
      matchPercentage: 83,
      stipend: '$25 - $32 / hr',
      postedDate: '3 days ago',
      description:
        'Create intuitive visual storytelling dashboards and interactive user engagement charts for product health metrics.',
      whyYouMatch:
        'Demonstrated flair for interactive chart design and visual exploratory analysis.',
      skillsToImprove: [
        'Information hierarchy standards',
        'Statistical variance testing',
        'Stakeholder review cycles',
      ],
    },
    {
      id: 'opp-da-4',
      title: 'Operations Analytics Intern',
      company: 'Apex Intelligence',
      location: 'Hybrid · Austin, TX',
      workType: 'Hybrid',
      requiredSkills: ['Excel', 'Statistics', 'Problem Solving'],
      matchPercentage: 78,
      stipend: '$24 - $30 / hr',
      postedDate: '5 days ago',
      description:
        'Support operational teams with ongoing KPI monitoring, dataset reconciliation, and weekly reporting summaries.',
      whyYouMatch:
        'Foundational spreadsheet modeling and quantitative reasoning fit operational analysis needs.',
      skillsToImprove: [
        'Automated macro workflows',
        'Database query optimization',
        'Root-cause anomaly detection',
      ],
    },
  ],
  skillGap: {
    targetRole: 'Data Analyst',
    readinessPercentage: 78,
    skillsHave: [
      'Python',
      'Excel',
      'Power BI',
      'Data Visualization',
      'Data Preparation',
    ],
    skillsRecommended: [
      'SQL',
      'Statistics',
      'Data Cleaning',
      'Advanced Excel',
      'Python for Analytics',
    ],
    nextSteps: [
      'Strengthen SQL queries (joins, window functions, aggregations).',
      'Practice data cleaning with real-world messy datasets.',
      'Learn statistics and exploratory hypothesis testing.',
      'Build an end-to-end sales analytics dashboard.',
    ],
    nextRecommendedAction:
      'Build a practical sales analytics dashboard project demonstrating SQL and data visualization to strengthen your profile.',
  },
  roadmapStages: [
    {
      id: 1,
      title: 'Build Foundation',
      shortDesc: 'Excel, SQL, and foundational statistics.',
      fullDesc:
        'Focus on mastering data manipulation fundamentals, spreadsheet calculations, and core relational database querying.',
      actionItems: [
        'Complete core SQL querying modules (SELECT, JOIN, GROUP BY)',
        'Practice spreadsheet lookup and pivot tables',
        'Understand fundamental descriptive statistics and distributions',
      ],
      status: 'Foundation',
    },
    {
      id: 2,
      title: 'Choose Skill Gaps',
      shortDesc: 'Identify missing SQL and Power BI skills.',
      fullDesc:
        'Pinpoint the exact gaps between basic data entry and industry-level data analytics workflows.',
      actionItems: [
        'Audit proficiency against junior data analyst job requirements',
        'Practice intermediate SQL window functions and subqueries',
        'Learn Power BI data modeling and DAX expressions',
      ],
      status: 'Skill Assessment',
    },
    {
      id: 3,
      title: 'Build Projects',
      shortDesc: 'Create a sales analytics dashboard.',
      fullDesc:
        'Apply analytical techniques to synthesize insights from raw data and present interactive visual reports.',
      actionItems: [
        'Build an interactive sales or customer analytics dashboard',
        'Clean and transform an open-source dataset with documented steps',
        'Publish your project findings and dashboard screenshots online',
      ],
      status: 'Practical Execution',
    },
    {
      id: 4,
      title: 'Gain Experience',
      shortDesc: 'Analytics internship or practical reporting project.',
      fullDesc:
        'Collaborate on practical analytics tasks for student groups, faculty labs, or open-source community challenges.',
      actionItems: [
        'Analyze operational data for a student club or local initiative',
        'Participate in public data visualization exercises (e.g. MakeoverMonday)',
        'Seek feedback from senior analysts on KPI presentation clarity',
      ],
      status: 'Hands-on Exposure',
    },
    {
      id: 5,
      title: 'Apply for Opportunities',
      shortDesc: 'Data Analyst internships and entry-level positions.',
      fullDesc:
        'Submit targeted applications showcasing your verified dashboard projects and database querying capability.',
      actionItems: [
        'Target remote and hybrid junior analyst roles with high match scores',
        'Tailor portfolio links directly to your sales dashboard repository',
        'Prepare for analytical case study and SQL screening questions',
      ],
      status: 'Career Launch',
    },
  ],
};

export const PROBLEM_CARDS = [
  {
    id: 'too-many-opportunities',
    title: 'Too Many Opportunities',
    description:
      'Students are overwhelmed by thousands of listings, making it difficult to identify relevant opportunities.',
    detail:
      'Navigating massive boards without guidance creates choice overload and confusion about which roles genuinely fit their background.',
    iconName: 'Layers',
  },
  {
    id: 'keyword-search',
    title: 'Keyword-Based Search',
    description:
      'Traditional platforms may rely heavily on keywords instead of understanding practical capabilities demonstrated through projects and experience.',
    detail:
      'Resumes get filtered out by rigid keyword scanners even when candidates have completed substantial coursework and practical projects.',
    iconName: 'SearchCode',
  },
  {
    id: 'missed-opportunities',
    title: 'Missed Opportunities',
    description:
      'Students may apply to unsuitable roles or overlook opportunities that match their actual abilities.',
    detail:
      'Without clear visibility into requirements, students frequently miss high-potential opportunities across disciplines.',
    iconName: 'TargetOff',
  },
  {
    id: 'unknown-skill-gaps',
    title: 'Unknown Skill Gaps',
    description:
      'Students often don\'t know which specific skills they should develop to become ready for their desired career.',
    detail:
      'Generic career advice often lacks actionable specificity, leaving students unsure of their immediate next learning priority.',
    iconName: 'HelpCircle',
  },
];

export const SOLUTION_STEPS = [
  {
    step: '01',
    title: 'Student Profile',
    desc: 'Students provide their education, skills, projects, certifications, interests and career goals.',
    icon: 'UserCheck',
  },
  {
    step: '02',
    title: 'AI Analysis',
    desc: 'SkillBridge analyzes the information to identify practical capabilities and career interests.',
    icon: 'Brain',
  },
  {
    step: '03',
    title: 'Opportunity Matching',
    desc: 'Relevant opportunities are recommended based on the student\'s profile.',
    icon: 'Sparkles',
  },
  {
    step: '04',
    title: 'Skill Gap Analysis',
    desc: 'SkillBridge identifies skills that may be useful for the student\'s target career.',
    icon: 'Compass',
  },
  {
    step: '05',
    title: 'Career Roadmap',
    desc: 'Students receive actionable next steps to move toward their career goal.',
    icon: 'Milestone',
  },
];

export const DIFFERENTIATION_CARDS = [
  {
    title: 'AI-Powered Matching',
    description:
      'Considers multiple profile factors rather than relying only on keywords.',
    badge: 'Comprehensive',
  },
  {
    title: 'Skill Gap Analysis',
    description:
      'Shows skills that may help users progress toward their target role.',
    badge: 'Diagnostics',
  },
  {
    title: 'Personalized Career Roadmap',
    description:
      'Turns recommendations into actionable next steps.',
    badge: 'Actionable',
  },
  {
    title: 'Project-Based Understanding',
    description:
      'Uses practical project experience as part of the student\'s profile.',
    badge: 'Holistic',
  },
  {
    title: 'Career Growth',
    description:
      'Helps students understand what they can do next.',
    badge: 'Growth-Focused',
  },
];

export const IMPACT_CARDS = [
  {
    stakeholder: 'Students',
    benefit:
      'Discover relevant opportunities and understand what skills to develop next.',
    highlight: 'Clearer Direction',
    highlightDesc: 'Actionable guidance based on true capabilities',
  },
  {
    stakeholder: 'Recruiters',
    benefit: 'Find candidates based on broader skill profiles.',
    highlight: 'Better Alignment',
    highlightDesc: 'Look beyond degrees to evaluated practical potential',
  },
  {
    stakeholder: 'Educational Institutions',
    benefit: 'Support students with structured career guidance.',
    highlight: 'Career Support',
    highlightDesc: 'Equip career centers with structured capability roadmaps',
  },
  {
    stakeholder: 'Society',
    benefit: 'Help reduce the gap between education and employment.',
    highlight: 'Employability Bridge',
    highlightDesc: 'Democratize access to rewarding opportunities across disciplines',
  },
];

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    id: 1,
    title: 'Build Foundation',
    shortDesc: 'Strengthen your core skills and concepts.',
    fullDesc:
      'Focus on mastering the underlying principles of your chosen discipline through dedicated coursework, foundational tutorials, and conceptual mastery.',
    actionItems: [
      'Complete core domain curriculum modules',
      'Read canonical textbooks and industry standard documentation',
      'Establish consistent weekly study and practice routines',
    ],
    status: 'Foundation',
  },
  {
    id: 2,
    title: 'Choose Skill Gaps',
    shortDesc: 'Identify the skills needed for your target role.',
    fullDesc:
      'Compare your existing profile against current industry requirements to highlight specific toolsets, frameworks, and methodologies worth learning.',
    actionItems: [
      'Audit your current skills against target job specifications',
      'Prioritize 2-3 high-impact bridge skills for immediate focus',
      'Find structured courses or project tutorials for missing competencies',
    ],
    status: 'Skill Assessment',
  },
  {
    id: 3,
    title: 'Build Projects',
    shortDesc: 'Create practical projects that demonstrate your capabilities.',
    fullDesc:
      'Apply your skills to build realistic portfolio pieces that solve real problems, demonstrate initiative, and showcase end-to-end thinking.',
    actionItems: [
      'Develop at least one comprehensive capstone project',
      'Write clear project documentation and clean source code or reports',
      'Publish your work on GitHub, portfolio websites, or case study decks',
    ],
    status: 'Practical Execution',
  },
  {
    id: 4,
    title: 'Gain Experience',
    shortDesc: 'Explore internships, volunteering, freelancing or relevant practical experience.',
    fullDesc:
      'Collaborate in team environments, contribute to open source or student initiatives, and engage in real-world practical work to build interpersonal and workplace readiness.',
    actionItems: [
      'Participate in hackathons, business case competitions, or student clubs',
      'Pursue initial internship or volunteer opportunities',
      'Gather constructive feedback and peer code/work reviews',
    ],
    status: 'Hands-on Exposure',
  },
  {
    id: 5,
    title: 'Apply for Opportunities',
    shortDesc: 'Use your improved profile to discover and apply for relevant opportunities.',
    fullDesc:
      'Leverage your refined profile, demonstrable portfolio, and target skill alignment to submit thoughtful applications to well-matched opportunities.',
    actionItems: [
      'Target roles with high prototype match scores',
      'Tailor application notes highlighting your most relevant projects',
      'Prepare to speak confidently about your project decisions and learnings',
    ],
    status: 'Career Launch',
  },
];

export const FUTURE_ROADMAP_PHASES = [
  {
    phase: 'Phase 1',
    name: 'Prototype',
    status: 'Current Prototype Demo',
    description:
      'Core features currently demonstrated in this pitch: AI profile analysis, sample opportunity matching, skill gap recommendations, and career roadmap.',
    items: [
      'AI profile analysis',
      'Sample opportunity matching',
      'Skill gap recommendations',
      'Career roadmap',
    ],
    isCurrent: true,
  },
  {
    phase: 'Phase 2',
    name: 'Smart Platform',
    status: 'Future Scope',
    description:
      'Planned platform expansion incorporating live partner integrations, structured recruiter workflows, and automated coaching modules.',
    items: [
      'Real opportunity integration',
      'AI resume analysis',
      'Recruiter dashboard',
      'AI interview preparation',
      'Personalized learning recommendations',
    ],
    isCurrent: false,
  },
  {
    phase: 'Phase 3',
    name: 'Career Ecosystem',
    status: 'Future Scope',
    description:
      'Full-scale multi-university and global employer network providing real-time career matching and active industry mentorship.',
    items: [
      'Mobile application',
      'Mentorship matching',
      'Global opportunities',
      'Real-time opportunity integration',
    ],
    isCurrent: false,
  },
];

export const TARGET_AUDIENCES = [
  {
    role: 'College Students',
    desc: 'Discover career opportunities across disciplines that match your classroom learnings, projects, and genuine interests.',
  },
  {
    role: 'Fresh Graduates',
    desc: 'Overcome the lack of prior corporate experience by highlighting evaluated practical capabilities and project work.',
  },
  {
    role: 'Career Switchers',
    desc: 'Identify transferable capabilities and pinpoint the specific bridge skills needed to pivot into new career domains.',
  },
  {
    role: 'Recruiters',
    desc: 'Discover promising candidates based on diverse skill profiles and practical capabilities rather than rigid keyword filters.',
  },
  {
    role: 'Educational Institutions',
    desc: 'Equip career guidance centers with structured, personalized roadmaps to help students across departments succeed.',
  },
];
