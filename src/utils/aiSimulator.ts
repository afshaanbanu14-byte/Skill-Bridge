import { StudentProfile, AnalysisResult, RoadmapStage, SkillStrength, Opportunity, SkillGapData } from '../types';

interface DomainTemplate {
  key: string;
  defaultRole: string;
  topCareerMatches: string[];
  skillsPresentPool: string[];
  skillsRecommendedPool: string[];
  nextSteps: string[];
  recommendedAction: string;
  roadmapStages: RoadmapStage[];
  opportunities: Opportunity[];
}

export const DOMAIN_TEMPLATES: Record<string, DomainTemplate> = {
  data_analyst: {
    key: 'data_analyst',
    defaultRole: 'Data Analyst',
    topCareerMatches: [
      'Data Analyst',
      'Business Intelligence Analyst',
      'Reporting Analyst',
    ],
    skillsPresentPool: [
      'Excel',
      'Power BI',
      'Python',
      'SQL',
      'Data Visualization',
    ],
    skillsRecommendedPool: [
      'Statistics',
      'Advanced SQL',
      'Data Cleaning',
      'Dashboard Design',
      'Data Storytelling',
    ],
    nextSteps: [
      'Build an end-to-end sales analytics dashboard',
      'Practice advanced SQL queries',
      'Create a real-world customer analysis project',
      'Publish analytics projects on GitHub',
    ],
    recommendedAction:
      'Build an end-to-end sales analytics dashboard and practice advanced SQL queries to strengthen your portfolio.',
    roadmapStages: [
      {
        id: 1,
        title: 'Strengthen SQL and statistics',
        shortDesc: 'Master data querying, window functions, and fundamental business statistics.',
        fullDesc:
          'Deepen your command of relational databases and statistical metrics essential for commercial reporting.',
        actionItems: [
          'Practice SQL joins, subqueries, and window functions on real datasets',
          'Learn fundamental business statistics (distributions, correlation, sampling)',
          'Complete guided exercises on database normalization and aggregations',
        ],
        status: 'Foundation',
      },
      {
        id: 2,
        title: 'Build 2 practical analytics projects',
        shortDesc: 'Develop end-to-end data analysis answering business questions.',
        fullDesc:
          'Transform raw, messy data into structured insights answering specific business questions.',
        actionItems: [
          'Clean an open-source sales or customer dataset using Python or SQL',
          'Calculate key performance indicators (churn rate, CLV, month-over-month growth)',
          'Document data cleaning and transformation methodologies in structured notebooks',
        ],
        status: 'Skill Assessment',
      },
      {
        id: 3,
        title: 'Improve Power BI dashboard skills',
        shortDesc: 'Design interactive, production-ready Power BI reports.',
        fullDesc:
          'Build executive-level dashboards with intuitive navigation, drill-throughs, and DAX calculations.',
        actionItems: [
          'Design interactive dashboards with automated date hierarchies and filters',
          'Implement DAX measures for dynamic time-intelligence calculations',
          'Ensure strong visual storytelling and executive accessibility standards',
        ],
        status: 'Practical Execution',
      },
      {
        id: 4,
        title: 'Create a project portfolio',
        shortDesc: 'Package your analytics projects with documented case studies on GitHub.',
        fullDesc:
          'Package your analytics projects into public repositories with concise executive summaries.',
        actionItems: [
          'Create dedicated GitHub repositories with polished README files and screenshots',
          'Write an analytical case study detailing business recommendations',
          'Seek peer review from working data analysts and industry mentors',
        ],
        status: 'Hands-on Exposure',
      },
      {
        id: 5,
        title: 'Apply for Data Analyst and BI entry-level roles',
        shortDesc: 'Target Data Analyst, BI, and Reporting Analyst openings.',
        fullDesc:
          'Submit targeted applications highlighting your demonstrated project portfolio and dashboard links.',
        actionItems: [
          'Target entry-level Data Analyst, BI Analyst, and Reporting Analyst positions',
          'Tailor resume bullet points with quantified project achievements',
          'Prepare for technical SQL live queries and business case study interviews',
        ],
        status: 'Career Launch',
      },
    ],
    opportunities: [
      {
        id: 'opp-da-1',
        title: 'Data Analyst Intern',
        company: 'Nova Analytics',
        location: 'Remote',
        workType: 'Remote',
        requiredSkills: ['Python', 'SQL', 'Excel', 'Power BI'],
        matchPercentage: 92,
        stipend: '$28 - $35 / hr',
        postedDate: 'Just now',
        description:
          'Assist senior analysts with dataset preparation, routine KPI metric calculation, and dashboard maintenance for commercial clients.',
        whyYouMatch:
          'Your practical experience with Python, Excel, and Power BI aligns directly with team reporting workflows.',
        skillsToImprove: [
          'Advanced SQL CTEs and window queries',
          'Automated data cleaning routines',
          'Executive KPI storytelling',
        ],
      },
      {
        id: 'opp-da-2',
        title: 'Junior Data Analyst',
        company: 'Insight Labs',
        location: 'Hybrid · San Francisco, CA',
        workType: 'Hybrid',
        requiredSkills: ['SQL', 'Excel', 'Data Visualization', 'Python'],
        matchPercentage: 88,
        stipend: '$30 - $38 / hr',
        postedDate: '2 days ago',
        description:
          'Analyze customer journey datasets, generate weekly business intelligence reports, and support executive strategy reviews.',
        whyYouMatch:
          'Demonstrated analytical mindset and hands-on portfolio projects in dataset manipulation.',
        skillsToImprove: [
          'Statistical hypothesis testing',
          'Data warehouse concepts (Snowflake/BigQuery)',
          'Stakeholder presentation skills',
        ],
      },
      {
        id: 'opp-da-3',
        title: 'Business Intelligence Intern',
        company: 'MetricFlow Systems',
        location: 'Remote',
        workType: 'Remote',
        requiredSkills: ['Power BI', 'SQL', 'Dashboard Design'],
        matchPercentage: 84,
        stipend: '$26 - $33 / hr',
        postedDate: '3 days ago',
        description:
          'Design interactive business intelligence views and collaborate with cross-functional teams to automate report distribution.',
        whyYouMatch:
          'Solid familiarity with dashboard building and relational data modeling fundamentals.',
        skillsToImprove: [
          'DAX formulas for time-intelligence',
          'ETL pipeline workflows',
          'Cross-departmental metric governance',
        ],
      },
      {
        id: 'opp-da-4',
        title: 'Reporting Analyst Trainee',
        company: 'Apex Intelligence',
        location: 'Hybrid · Austin, TX',
        workType: 'Hybrid',
        requiredSkills: ['Excel', 'SQL', 'Data Storytelling'],
        matchPercentage: 79,
        stipend: '$25 - $31 / hr',
        postedDate: '5 days ago',
        description:
          'Support operations teams with ongoing report auditing, spreadsheet reconciliation, and weekly anomaly detection.',
        whyYouMatch:
          'Spreadsheet proficiency and structured analytical problem-solving foundation.',
        skillsToImprove: [
          'Spreadsheet automation macros',
          'Data cleaning at scale',
          'Root-cause reporting frameworks',
        ],
      },
    ],
  },

  frontend_developer: {
    key: 'frontend_developer',
    defaultRole: 'Front-End Developer',
    topCareerMatches: [
      'Front-End Developer',
      'Web Developer',
      'UI Engineer',
    ],
    skillsPresentPool: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'UI Design',
    ],
    skillsRecommendedPool: [
      'TypeScript',
      'REST APIs',
      'Git/GitHub',
      'Responsive Design',
      'Testing',
    ],
    nextSteps: [
      'Build a responsive web application',
      'Connect a React app with an external API',
      'Publish your portfolio and projects on GitHub',
      'Deploy your website using Vercel or Netlify',
    ],
    recommendedAction:
      'Build a responsive web application connecting React with external REST APIs and publish it on GitHub.',
    roadmapStages: [
      {
        id: 1,
        title: 'Master JavaScript and modern CSS',
        shortDesc: 'Deepen core browser fundamentals, ES6+ syntax, and responsive layouts.',
        fullDesc:
          'Solidify DOM manipulation, modern async/await patterns, flexbox, CSS grid, and semantic accessibility.',
        actionItems: [
          'Build responsive page layouts using modern CSS Grid and Flexbox',
          'Master modern JavaScript ES6+ features (destructuring, array methods, async/await)',
          'Ensure accessibility compliance (WCAG standards and semantic tags)',
        ],
        status: 'Foundation',
      },
      {
        id: 2,
        title: 'Learn React, TypeScript and APIs',
        shortDesc: 'Transition to modern declarative component development with strict typing.',
        fullDesc:
          'Understand component lifecycles, hooks, typed props, and asynchronous data fetching.',
        actionItems: [
          'Build modular React components with custom hooks for state logic',
          'Add TypeScript interfaces to enforce strict typing across props and API payloads',
          'Practice fetching, parsing, and caching REST API data',
        ],
        status: 'Skill Assessment',
      },
      {
        id: 3,
        title: 'Build 2-3 responsive web applications',
        shortDesc: 'Develop complete, feature-rich portfolio applications.',
        fullDesc:
          'Create real-world applications demonstrating user interaction, state management, and responsive layouts.',
        actionItems: [
          'Develop a multi-page web application featuring dynamic search and filters',
          'Implement responsive design tested across mobile and desktop viewports',
          'Include error boundary handling and skeleton loading states',
        ],
        status: 'Practical Execution',
      },
      {
        id: 4,
        title: 'Publish code and live demos on GitHub',
        shortDesc: 'Deploy applications and maintain clean Git commits with live hosting.',
        fullDesc:
          'Showcase your coding discipline through structured pull requests, README guides, and live hosted links.',
        actionItems: [
          'Host live projects on Vercel or Netlify with custom domains or clear links',
          'Write comprehensive README files with feature gifs and architecture notes',
          'Contribute UI component improvements to an open-source repository',
        ],
        status: 'Hands-on Exposure',
      },
      {
        id: 5,
        title: 'Apply for junior front-end and web roles',
        shortDesc: 'Target Front-End Developer and junior web engineering jobs.',
        fullDesc:
          'Apply to tech companies and digital agencies with a clean portfolio displaying live interactive applications.',
        actionItems: [
          'Apply for Front-End Developer, Junior Web Developer, and UI Engineer openings',
          'Direct recruiters straight to live interactive demo links in your application',
          'Prepare for JavaScript core questions and live UI component build assessments',
        ],
        status: 'Career Launch',
      },
    ],
    opportunities: [
      {
        id: 'opp-fe-1',
        title: 'Front-End Developer Intern',
        company: 'TechSphere',
        location: 'Remote',
        workType: 'Remote',
        requiredSkills: ['HTML', 'CSS', 'JavaScript', 'React'],
        matchPercentage: 93,
        stipend: '$28 - $36 / hr',
        postedDate: 'Just now',
        description:
          'Build responsive UI views, modular React components, and accessible user flows across customer-facing web products.',
        whyYouMatch:
          'Your hands-on web projects, HTML/CSS proficiency, and React experience match team engineering tasks.',
        skillsToImprove: [
          'TypeScript static typing',
          'REST API integration error handling',
          'Web accessibility (WCAG)',
        ],
      },
      {
        id: 'opp-fe-2',
        title: 'Junior Web Developer',
        company: 'Nexa UI Studios',
        location: 'Hybrid · San Francisco, CA',
        workType: 'Hybrid',
        requiredSkills: ['JavaScript', 'React', 'Responsive Design'],
        matchPercentage: 87,
        stipend: '$30 - $38 / hr',
        postedDate: '2 days ago',
        description:
          'Convert design prototypes into performant, responsive web components and interactive web pages.',
        whyYouMatch:
          'Solid understanding of frontend architecture and modern responsive styling layouts.',
        skillsToImprove: [
          'Client-side state management patterns',
          'CSS animation performance',
          'Cross-browser rendering quirks',
        ],
      },
      {
        id: 'opp-fe-3',
        title: 'React Developer Intern',
        company: 'CloudCraft Labs',
        location: 'Remote',
        workType: 'Remote',
        requiredSkills: ['React', 'Git/GitHub', 'REST APIs'],
        matchPercentage: 82,
        stipend: '$25 - $32 / hr',
        postedDate: '4 days ago',
        description:
          'Connect modern frontend client components with cloud APIs, manage state, and refine user onboarding flows.',
        whyYouMatch:
          'Demonstrated component modularity and interest in modern web user interface design.',
        skillsToImprove: [
          'Next.js framework principles',
          'REST API data caching strategies',
          'Automated unit testing with Jest',
        ],
      },
      {
        id: 'opp-fe-4',
        title: 'UI Engineering Trainee',
        company: 'Vertex Digital',
        location: 'Hybrid · Seattle, WA',
        workType: 'Hybrid',
        requiredSkills: ['HTML', 'CSS', 'UI Design'],
        matchPercentage: 77,
        stipend: '$24 - $30 / hr',
        postedDate: '5 days ago',
        description:
          'Implement accessible design system components and maintain responsive UI consistency across product modules.',
        whyYouMatch:
          'Eye for design fidelity and clean, structured semantic markup.',
        skillsToImprove: [
          'Component documentation with Storybook',
          'TypeScript interfaces',
          'Performance profiling with Chrome DevTools',
        ],
      },
    ],
  },

  content_marketing: {
    key: 'content_marketing',
    defaultRole: 'Content Writer',
    topCareerMatches: [
      'Content Writer',
      'Digital Marketing Executive',
      'Social Media Coordinator',
    ],
    skillsPresentPool: [
      'Written Communication',
      'Content Creation',
      'Presentation',
      'Canva',
      'Research',
    ],
    skillsRecommendedPool: [
      'SEO',
      'Content Strategy',
      'Social Media Analytics',
      'Digital Marketing Fundamentals',
      'Copywriting',
    ],
    nextSteps: [
      'Create an online writing portfolio',
      'Design a social media content campaign',
      'Write SEO-friendly blog articles',
      'Manage content for a club or local initiative',
    ],
    recommendedAction:
      'Create an online writing portfolio and design a multi-channel social media content campaign to demonstrate written and visual storytelling.',
    roadmapStages: [
      {
        id: 1,
        title: 'Improve content writing and communication foundations',
        shortDesc: 'Refine rhetorical clarity, audience focus, and editorial standards.',
        fullDesc:
          'Master versatile tone of voice, editorial proofreading standards, and engaging narrative hooks.',
        actionItems: [
          'Master editorial style guides and persuasive writing structures',
          'Practice drafting concise summaries, long-form articles, and social copy',
          'Analyze top digital publications to understand contemporary online reading habits',
        ],
        status: 'Foundation',
      },
      {
        id: 2,
        title: 'Learn SEO and digital content strategy',
        shortDesc: 'Understand search intent, keyword mapping, and distribution channels.',
        fullDesc:
          'Learn to align creative content with measurable search visibility and audience growth metrics.',
        actionItems: [
          'Learn keyword research tools and search intent mapping',
          'Understand editorial calendar planning and multi-channel content repurposing',
          'Study core digital metrics (impressions, CTR, engagement rate, bounce rate)',
        ],
        status: 'Skill Assessment',
      },
      {
        id: 3,
        title: 'Build a writing and design portfolio',
        shortDesc: 'Curate writing samples, case studies, and visual collateral with Canva.',
        fullDesc:
          'Publish a polished portfolio showcasing your best articles, campaigns, and visual graphics.',
        actionItems: [
          'Publish 3-5 high-quality articles across different topics or formats',
          'Create a digital portfolio site with clean presentation and clear author bio',
          'Include visual graphics and social collateral created with Canva',
        ],
        status: 'Practical Execution',
      },
      {
        id: 4,
        title: 'Gain hands-on social media or content experience',
        shortDesc: 'Manage live campaigns, student projects, or editorial initiatives.',
        fullDesc:
          'Drive real engagement by creating content for college societies, local businesses, or online communities.',
        actionItems: [
          'Manage content calendars for a student club, non-profit, or publication',
          'Track content performance and refine messaging based on audience feedback',
          'Seek mentorship and feedback from experienced content marketers',
        ],
        status: 'Hands-on Exposure',
      },
      {
        id: 5,
        title: 'Apply for content and junior marketing roles',
        shortDesc: 'Apply for Content Writer, Digital Marketing, and Communications roles.',
        fullDesc:
          'Submit applications with targeted writing samples and demonstrated social media campaign outcomes.',
        actionItems: [
          'Apply for Content Writer, Digital Marketing Executive, and Communications positions',
          'Attach 2-3 tailored writing samples directly matching the hiring company voice',
          'Prepare to discuss your content research and editorial process in interviews',
        ],
        status: 'Career Launch',
      },
    ],
    opportunities: [
      {
        id: 'opp-cm-1',
        title: 'Content Writing Intern',
        company: 'Insight Media Labs',
        location: 'Remote',
        workType: 'Remote',
        requiredSkills: ['Writing', 'Communication', 'Research', 'Canva'],
        matchPercentage: 94,
        stipend: '$25 - $32 / hr',
        postedDate: 'Just now',
        description:
          'Draft engaging blog features, newsletter copy, and interview briefs for an active digital audience.',
        whyYouMatch:
          'Your strong written communication, editorial experience, and creative Canva design skills directly match this role.',
        skillsToImprove: [
          'SEO keyword optimization',
          'Content management systems (CMS)',
          'Conversion copywriting principles',
        ],
      },
      {
        id: 'opp-cm-2',
        title: 'Junior Content Writer',
        company: 'Horizon Digital',
        location: 'Hybrid · Austin, TX',
        workType: 'Hybrid',
        requiredSkills: ['Copywriting', 'Content Creation', 'Presentation'],
        matchPercentage: 89,
        stipend: '$26 - $34 / hr',
        postedDate: '2 days ago',
        description:
          'Write website copy, social media announcements, and marketing campaign briefs across diverse brand categories.',
        whyYouMatch:
          'Demonstrated storytelling agility and ability to communicate complex topics with clarity.',
        skillsToImprove: [
          'Search engine rankings (SEO)',
          'Audience engagement tracking',
          'Brand voice style guide formulation',
        ],
      },
      {
        id: 'opp-cm-3',
        title: 'Digital Marketing Executive Trainee',
        company: 'BrandCraft Studio',
        location: 'Remote',
        workType: 'Remote',
        requiredSkills: ['Content Creation', 'Canva', 'Social Media'],
        matchPercentage: 83,
        stipend: '$24 - $30 / hr',
        postedDate: '3 days ago',
        description:
          'Assist the marketing team in producing visual assets, scheduling social posts, and monitoring organic reach metrics.',
        whyYouMatch:
          'Eye for visual presentation, Canva familiarity, and strong communication skills.',
        skillsToImprove: [
          'Paid social ad campaigns',
          'Google Analytics fundamentals',
          'Email marketing automation',
        ],
      },
      {
        id: 'opp-cm-4',
        title: 'Social Media Coordinator Intern',
        company: 'Global Perspectives Press',
        location: 'Hybrid · New York, NY',
        workType: 'Hybrid',
        requiredSkills: ['Social Media', 'Writing', 'Canva'],
        matchPercentage: 78,
        stipend: '$23 - $29 / hr',
        postedDate: '5 days ago',
        description:
          'Support multi-channel social media engagement, draft newsletter campaigns, and coordinate weekly community updates.',
        whyYouMatch:
          'Nuanced written command, social media interest, and structured visual storytelling abilities.',
        skillsToImprove: [
          'Community growth analytics',
          'Audience segmentation models',
          'Campaign conversion metrics',
        ],
      },
    ],
  },

  business_analyst: {
    key: 'business_analyst',
    defaultRole: 'Business Analyst',
    topCareerMatches: [
      'Business Analyst',
      'Operations Analyst',
      'Market Research Analyst',
    ],
    skillsPresentPool: [
      'Excel',
      'Communication',
      'Presentation',
      'Business Analysis',
      'Market Research',
    ],
    skillsRecommendedPool: [
      'Requirements Gathering',
      'SQL',
      'Power BI',
      'Process Mapping',
      'Stakeholder Management',
    ],
    nextSteps: [
      'Create a business requirements document (BRD)',
      'Build an operational process map',
      'Create an Excel or Power BI business dashboard',
      'Analyze a real-world business case study',
    ],
    recommendedAction:
      'Create a formal business requirements document (BRD) and model an operational process map to demonstrate analysis capabilities.',
    roadmapStages: [
      {
        id: 1,
        title: 'Strengthen business communication and advanced Excel',
        shortDesc: 'Solidify structured business analysis, lookup formulas, and spreadsheet modeling.',
        fullDesc:
          'Develop executive presentation clarity, advanced spreadsheet modeling, and business problem framing.',
        actionItems: [
          'Master spreadsheet lookup formulas, pivot tables, and scenario modeling',
          'Study core corporate financial models and unit economics',
          'Practice concise, executive-level communication and slide structuring',
        ],
        status: 'Foundation',
      },
      {
        id: 2,
        title: 'Learn requirements gathering and SQL basics',
        shortDesc: 'Bridge business needs with technical delivery through structured documentation.',
        fullDesc:
          'Learn to author comprehensive requirement documents, user stories, and basic SQL data extraction.',
        actionItems: [
          'Study user story mapping, acceptance criteria, and stakeholder interviewing',
          'Learn fundamental SQL SELECT, JOIN, and GROUP BY querying',
          'Understand process mapping notation (BPMN / swimlane diagrams)',
        ],
        status: 'Skill Assessment',
      },
      {
        id: 3,
        title: 'Build business case studies and reports',
        shortDesc: 'Develop portfolio projects evaluating operational challenges and proposing solutions.',
        fullDesc:
          'Apply analytical methodologies to evaluate real business scenarios and author actionable recommendations.',
        actionItems: [
          'Author a Business Requirements Document (BRD) for an existing digital service',
          'Map a current-state operational workflow and propose future-state efficiencies',
          'Build a market competitor analysis matrix with strategic recommendations',
        ],
        status: 'Practical Execution',
      },
      {
        id: 4,
        title: 'Gain practical consulting or business project experience',
        shortDesc: 'Join case competitions, student initiatives, or business internships.',
        fullDesc:
          'Apply business analysis frameworks to solve practical challenges in team-based environments.',
        actionItems: [
          'Participate in collegiate business case study competitions',
          'Assist university committees or student clubs with process optimization',
          'Practice conducting structured stakeholder requirement interviews',
        ],
        status: 'Hands-on Exposure',
      },
      {
        id: 5,
        title: 'Apply for junior business analyst or operations roles',
        shortDesc: 'Target Business Analyst, Operations, and Consulting entry roles.',
        fullDesc:
          'Submit applications highlighting your demonstrated requirement documents and analytical problem-solving projects.',
        actionItems: [
          'Target Business Analyst, Operations Analyst, and Associate Consultant positions',
          'Highlight your case study reports and business documentation in your portfolio',
          'Prepare for structured business case interview scenarios and estimation questions',
        ],
        status: 'Career Launch',
      },
    ],
    opportunities: [
      {
        id: 'opp-ba-1',
        title: 'Business Analyst Intern',
        company: 'Global Strategy Partners',
        location: 'Hybrid · Chicago, IL',
        workType: 'Hybrid',
        requiredSkills: ['Business Analysis', 'Excel', 'Communication'],
        matchPercentage: 91,
        stipend: '$28 - $34 / hr',
        postedDate: '1 day ago',
        description:
          'Evaluate business requirements, document operational workflows, and prepare executive briefing decks for leadership.',
        whyYouMatch:
          'Your business administration background, strong presentation capabilities, and spreadsheet skills meet core internship requirements.',
        skillsToImprove: [
          'Basic SQL querying',
          'Formal process mapping (BPMN)',
          'Financial sensitivity models',
        ],
      },
      {
        id: 'opp-ba-2',
        title: 'Operations Analyst Intern',
        company: 'Nova Analytics',
        location: 'Remote',
        workType: 'Remote',
        requiredSkills: ['Process Analysis', 'Documentation', 'Excel'],
        matchPercentage: 86,
        stipend: '$26 - $32 / hr',
        postedDate: '2 days ago',
        description:
          'Assist operational teams in analyzing cross-functional workflows, tracking team milestones, and standardizing reporting.',
        whyYouMatch:
          'Strong organizational, documentation, and stakeholder communication competencies.',
        skillsToImprove: [
          'Power BI dashboarding',
          'Jira / Agile workflow management',
          'KPI variance analysis',
        ],
      },
      {
        id: 'opp-ba-3',
        title: 'Market Research Analyst Intern',
        company: 'Consumer Pulse Lab',
        location: 'Hybrid · San Francisco, CA',
        workType: 'Hybrid',
        requiredSkills: ['Market Research', 'Presentation', 'Data Analysis'],
        matchPercentage: 82,
        stipend: '$25 - $31 / hr',
        postedDate: '4 days ago',
        description:
          'Conduct competitor analysis, synthesize customer feedback surveys, and build presentation summaries for brand strategy.',
        whyYouMatch:
          'Experience in structured survey analysis and executive report writing.',
        skillsToImprove: [
          'Statistical sampling methods',
          'Data visualization tools',
          'Consumer cohort modeling',
        ],
      },
      {
        id: 'opp-ba-4',
        title: 'Product Strategy Analyst Trainee',
        company: 'TechSphere',
        location: 'Remote',
        workType: 'Remote',
        requiredSkills: ['Requirements Gathering', 'Agile', 'Documentation'],
        matchPercentage: 76,
        stipend: '$24 - $30 / hr',
        postedDate: '5 days ago',
        description:
          'Collaborate with product managers to write user stories, document feature specifications, and summarize user feedback.',
        whyYouMatch:
          'Communication clarity and structured analytical thinking translate well to product coordination.',
        skillsToImprove: [
          'Technical architecture basics',
          'User experience wireframing',
          'Roadmap prioritization frameworks',
        ],
      },
    ],
  },

  software_developer: {
    key: 'software_developer',
    defaultRole: 'Software Developer',
    topCareerMatches: [
      'Software Developer',
      'Backend Developer',
      'Junior Systems Engineer',
    ],
    skillsPresentPool: [
      'Java',
      'Python',
      'SQL',
      'C++',
      'Git',
    ],
    skillsRecommendedPool: [
      'Data Structures & Algorithms',
      'RESTful APIs',
      'System Design Basics',
      'Docker',
      'Unit Testing',
    ],
    nextSteps: [
      'Build a scalable backend REST API with database integration',
      'Practice algorithmic problem-solving on LeetCode/HackerRank',
      'Containerize applications using Docker',
      'Publish clean modular codebases on GitHub',
    ],
    recommendedAction:
      'Build an end-to-end backend service utilizing REST APIs, database persistence, and Docker containerization.',
    roadmapStages: [
      {
        id: 1,
        title: 'Master core data structures & OOP principles',
        shortDesc: 'Solidify arrays, hash maps, trees, graph fundamentals, and object-oriented architecture.',
        fullDesc:
          'Deepen computer science algorithmic foundations and write clean, maintainable modular code.',
        actionItems: [
          'Practice time & space complexity analysis (Big-O notation)',
          'Implement core data structures and search/sort algorithms from scratch',
          'Follow clean code principles and design patterns',
        ],
        status: 'Foundation',
      },
      {
        id: 2,
        title: 'Build robust backend services with REST APIs & databases',
        shortDesc: 'Develop relational database models, authentication, and structured endpoints.',
        fullDesc:
          'Design resilient web service backends with relational database schemas, transactions, and error handling.',
        actionItems: [
          'Create CRUD API endpoints with input validation and authentication',
          'Design normalized database schemas with foreign keys and indexes',
          'Implement automated unit and integration tests',
        ],
        status: 'Skill Assessment',
      },
      {
        id: 3,
        title: 'Learn testing, debugging, and containerization with Docker',
        shortDesc: 'Isolate runtimes, write reproducible test suites, and streamline local builds.',
        fullDesc:
          'Learn modern DevOps practices to containerize services and configure continuous integration.',
        actionItems: [
          'Write comprehensive test suites achieving over 80% coverage',
          'Create multi-stage Dockerfiles for lightweight application containers',
          'Set up GitHub Actions for automated linting and test execution',
        ],
        status: 'Practical Execution',
      },
      {
        id: 4,
        title: 'Publish active repositories and open-source contributions',
        shortDesc: 'Document system architecture with diagrams, benchmarks, and clean Git history.',
        fullDesc:
          'Demonstrate real-world engineering hygiene with clear README documentation and modular pull requests.',
        actionItems: [
          'Publish 2 production-grade backend projects with live hosted endpoints',
          'Document API endpoints using OpenAPI / Swagger specifications',
          'Submit contributions to established open-source community libraries',
        ],
        status: 'Hands-on Exposure',
      },
      {
        id: 5,
        title: 'Apply for software developer and backend roles',
        shortDesc: 'Target Software Developer, Backend Developer, and Junior Engineer openings.',
        fullDesc:
          'Submit applications with targeted technical resumes highlighting backend architecture and live API links.',
        actionItems: [
          'Target Junior Software Engineer, Backend Developer, and Systems Trainee roles',
          'Prepare for data structure coding interviews and system architecture walkthroughs',
          'Participate in mock technical interviews with peers and engineering mentors',
        ],
        status: 'Career Launch',
      },
    ],
    opportunities: [
      {
        id: 'opp-sw-1',
        title: 'Software Engineer Intern',
        company: 'CodeWave Systems',
        location: 'Remote',
        workType: 'Remote',
        requiredSkills: ['Java', 'Python', 'SQL', 'Git'],
        matchPercentage: 92,
        stipend: '$30 - $40 / hr',
        postedDate: 'Just now',
        description:
          'Collaborate with agile engineering teams to develop microservices, maintain API documentation, and optimize database queries.',
        whyYouMatch:
          'Your solid programming foundations and practical backend projects align directly with engineering team standards.',
        skillsToImprove: [
          'Production system design',
          'Distributed caching with Redis',
          'Asynchronous message queues (Kafka)',
        ],
      },
      {
        id: 'opp-sw-2',
        title: 'Junior Backend Developer',
        company: 'CloudScale Networks',
        location: 'Hybrid · San Jose, CA',
        workType: 'Hybrid',
        requiredSkills: ['Python', 'RESTful APIs', 'SQL', 'Docker'],
        matchPercentage: 88,
        stipend: '$32 - $42 / hr',
        postedDate: '2 days ago',
        description:
          'Build scalable data ingestion pipelines, design secure authentication layers, and optimize database performance.',
        whyYouMatch:
          'Demonstrated grasp of API architectural patterns and relational database schema modeling.',
        skillsToImprove: [
          'Kubernetes container orchestration',
          'CI/CD pipeline scripts',
          'Database connection pooling',
        ],
      },
      {
        id: 'opp-sw-3',
        title: 'Systems Development Trainee',
        company: 'CoreLogic Infrastructure',
        location: 'Remote',
        workType: 'Remote',
        requiredSkills: ['C++', 'Data Structures', 'Linux'],
        matchPercentage: 83,
        stipend: '$28 - $36 / hr',
        postedDate: '4 days ago',
        description:
          'Participate in system performance tuning, benchmarking network throughput, and refactoring legacy utilities.',
        whyYouMatch:
          'Strong core algorithmic problem-solving orientation and low-level fundamentals.',
        skillsToImprove: [
          'Multithreaded concurrency',
          'Memory profiling tools (Valgrind)',
          'Linux kernel system calls',
        ],
      },
      {
        id: 'opp-sw-4',
        title: 'Associate Application Developer',
        company: 'Nexus Software',
        location: 'Hybrid · Boston, MA',
        workType: 'Hybrid',
        requiredSkills: ['Java', 'Spring Boot', 'Git'],
        matchPercentage: 78,
        stipend: '$27 - $35 / hr',
        postedDate: '5 days ago',
        description:
          'Assist senior developers in implementing business logic, writing automated unit tests, and triaging customer bug reports.',
        whyYouMatch:
          'Object-oriented programming rigor and structured software design methodology.',
        skillsToImprove: [
          'Enterprise design patterns',
          'GraphQL endpoint querying',
          'Automated regression suites',
        ],
      },
    ],
  },

  uiux_designer: {
    key: 'uiux_designer',
    defaultRole: 'UI/UX Designer',
    topCareerMatches: [
      'UI/UX Designer',
      'Product Designer',
      'Interaction Designer',
    ],
    skillsPresentPool: [
      'Figma',
      'Wireframing',
      'UI Design',
      'Prototyping',
      'User Research',
    ],
    skillsRecommendedPool: [
      'Design Systems',
      'Advanced Micro-interactions',
      'Usability Testing',
      'Information Architecture',
      'Accessibility (WCAG)',
    ],
    nextSteps: [
      'Conduct a complete user research and wireframing case study',
      'Build an interactive Figma prototype with responsive components',
      'Create a documented design system tokens library',
      'Publish detailed design case studies on Behance and Notion',
    ],
    recommendedAction:
      'Publish a comprehensive end-to-end UX case study documenting user research, wireframes, and interactive Figma prototypes.',
    roadmapStages: [
      {
        id: 1,
        title: 'Master user research & wireframing fundamentals',
        shortDesc: 'Conduct user interviews, persona mapping, and low-fidelity structural wireframing.',
        fullDesc:
          'Develop empathy for user needs, identify pain points, and map user journey flows before visual design.',
        actionItems: [
          'Conduct 5 user problem discovery interviews and synthesize affinity maps',
          'Design paper and low-fidelity digital wireframes for multi-step tasks',
          'Structure clear information architecture and navigation sitemaps',
        ],
        status: 'Foundation',
      },
      {
        id: 2,
        title: 'Build interactive high-fidelity prototypes in Figma',
        shortDesc: 'Master auto-layout, design components, responsive variants, and interactive prototypes.',
        fullDesc:
          'Transition to professional Figma workflows utilizing atomic design tokens, components, and fluid layouts.',
        actionItems: [
          'Master Figma auto-layout, constraints, and nested component variants',
          'Create realistic micro-interactions and animated state transitions',
          'Test designs across mobile, tablet, and widescreen viewports',
        ],
        status: 'Skill Assessment',
      },
      {
        id: 3,
        title: 'Create documented design systems & accessibility standards',
        shortDesc: 'Establish color tokens, typography scales, spacing grids, and WCAG accessibility.',
        fullDesc:
          'Build production-ready design systems that ensure design-to-code parity and inclusive accessibility.',
        actionItems: [
          'Define design system tokens (colors, typographic hierarchy, elevation)',
          'Verify color contrast ratios complying with WCAG AA/AAA standards',
          'Document component usage guidelines and edge cases',
        ],
        status: 'Practical Execution',
      },
      {
        id: 4,
        title: 'Conduct usability testing and publish portfolio case studies',
        shortDesc: 'Validate designs with real users and author compelling product case studies.',
        fullDesc:
          'Demonstrate product thinking by documenting the problem statement, hypotheses, iterations, and metrics.',
        actionItems: [
          'Run moderated usability testing sessions and log error rates',
          'Iterate on interface designs based on direct participant feedback',
          'Publish 2 polished product design case studies with high-fidelity visuals',
        ],
        status: 'Hands-on Exposure',
      },
      {
        id: 5,
        title: 'Apply for junior UI/UX and product design roles',
        shortDesc: 'Target UI/UX Designer, Product Designer, and Interaction Designer openings.',
        fullDesc:
          'Submit applications with an interactive portfolio showcasing product rationale and prototype links.',
        actionItems: [
          'Apply for Product Designer Intern and Junior UI/UX Designer positions',
          'Prepare for design portfolio walkthroughs and whiteboard challenge exercises',
          'Participate in design critiques with senior design practitioners',
        ],
        status: 'Career Launch',
      },
    ],
    opportunities: [
      {
        id: 'opp-ux-1',
        title: 'UI/UX Design Intern',
        company: 'PixelCraft Studios',
        location: 'Remote',
        workType: 'Remote',
        requiredSkills: ['Figma', 'Wireframing', 'UI Design'],
        matchPercentage: 93,
        stipend: '$28 - $36 / hr',
        postedDate: 'Just now',
        description:
          'Collaborate with product designers to create user interface wireframes, component libraries, and interactive click-through prototypes.',
        whyYouMatch:
          'Demonstrated eye for clean typography, user research mindset, and practical Figma project work.',
        skillsToImprove: [
          'Design token systems',
          'Quantitative usability testing metrics',
          'Developer handoff documentation',
        ],
      },
      {
        id: 'opp-ux-2',
        title: 'Junior Product Designer',
        company: 'DesignGrid Labs',
        location: 'Hybrid · New York, NY',
        workType: 'Hybrid',
        requiredSkills: ['Figma', 'User Research', 'Prototyping'],
        matchPercentage: 88,
        stipend: '$30 - $38 / hr',
        postedDate: '2 days ago',
        description:
          'Conduct customer journey mapping, create user test scripts, and build responsive mobile application interfaces.',
        whyYouMatch:
          'Strong empathy for user workflows and structured problem-solving case study approach.',
        skillsToImprove: [
          'Accessibility compliance (WCAG)',
          'Complex micro-interactions',
          'Cross-platform design guidelines (iOS/Android)',
        ],
      },
      {
        id: 'opp-ux-3',
        title: 'Interaction Design Intern',
        company: 'MotionUI Co.',
        location: 'Remote',
        workType: 'Remote',
        requiredSkills: ['Prototyping', 'Design Systems', 'Figma'],
        matchPercentage: 84,
        stipend: '$26 - $34 / hr',
        postedDate: '3 days ago',
        description:
          'Design interactive components, micro-animations, and transition flows for high-traffic web applications.',
        whyYouMatch:
          'Good command of prototype interactions and component modularity.',
        skillsToImprove: [
          'Advanced prototyping tools (ProtoPie)',
          'Motion design principles',
          'Design system governance',
        ],
      },
      {
        id: 'opp-ux-4',
        title: 'UX Research & Design Trainee',
        company: 'HumanCentered Tech',
        location: 'Hybrid · Austin, TX',
        workType: 'Hybrid',
        requiredSkills: ['User Research', 'Wireframing', 'Usability Testing'],
        matchPercentage: 79,
        stipend: '$25 - $32 / hr',
        postedDate: '5 days ago',
        description:
          'Assist in recruiting user test participants, facilitating usability sessions, and translating findings into wireframes.',
        whyYouMatch:
          'Methodical approach to gathering user evidence and translating insights into wireframes.',
        skillsToImprove: [
          'Heuristic evaluation frameworks',
          'Survey statistical analysis',
          'Information architecture card sorting',
        ],
      },
    ],
  },
};

/**
 * Fallback adaptive domain generator for specialized/custom student profiles
 */
function createAdaptiveDomain(profile: StudentProfile): DomainTemplate {
  const targetRole = profile.preferredRole
    ? profile.preferredRole.split(/[,/&]/)[0].trim()
    : `${profile.department || 'Specialist'} Associate`;

  const relatedRole1 = profile.preferredRole && profile.preferredRole.includes(',')
    ? profile.preferredRole.split(/[,/&]/)[1].trim()
    : `Junior ${targetRole}`;

  const relatedRole2 = `${profile.department || 'Domain'} Analyst`;

  const rawSkills = (profile.skills || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const fallbackSkills = rawSkills.length > 0 ? rawSkills : ['Analytical Thinking', 'Problem Solving', 'Communication', 'Research'];

  return {
    key: 'adaptive_career',
    defaultRole: targetRole,
    topCareerMatches: [targetRole, relatedRole1, relatedRole2],
    skillsPresentPool: fallbackSkills.slice(0, 5),
    skillsRecommendedPool: [
      'Advanced Industry Frameworks',
      'Data-Driven Decision Making',
      'Project Management',
      'Stakeholder Collaboration',
      'Domain Tooling & Automation',
    ],
    nextSteps: [
      `Build an end-to-end practical project focused on ${targetRole}`,
      'Document your problem-solving process and publish case study outcomes',
      'Engage with industry professionals and peer communities in your field',
      'Apply for internships and entry-level positions aligned with your target goals',
    ],
    recommendedAction: `Develop a comprehensive practical project showcasing hands-on capabilities in ${targetRole} to strengthen your profile.`,
    roadmapStages: [
      {
        id: 1,
        title: `Strengthen core ${profile.department || 'domain'} foundations`,
        shortDesc: 'Deepen domain fundamentals, conceptual theories, and core industry tools.',
        fullDesc: `Focus on mastering the underlying principles and standard tools utilized by ${targetRole} professionals.`,
        actionItems: [
          'Study core curriculum and contemporary industry practices',
          'Complete practical exercises reinforcing foundational knowledge',
          'Review top industry case studies and standard operating procedures',
        ],
        status: 'Foundation',
      },
      {
        id: 2,
        title: 'Bridge domain knowledge with practical execution',
        shortDesc: 'Apply theoretical principles to structured, real-world scenario challenges.',
        fullDesc: 'Transition from passive learning to active problem-solving through guided project challenges.',
        actionItems: [
          'Audit your current skills against entry-level job descriptions',
          'Identify specific technical or analytical gaps and practice dedicated drills',
          'Develop structured documentation demonstrating your workflow',
        ],
        status: 'Skill Assessment',
      },
      {
        id: 3,
        title: 'Develop 2 end-to-end portfolio projects',
        shortDesc: `Build complete portfolio pieces demonstrating ${targetRole} competence.`,
        fullDesc: 'Author comprehensive case studies detailing the challenge, your methodology, and tangible results.',
        actionItems: [
          'Complete a capstone project addressing a real industry problem',
          'Create clear presentations or reports communicating findings',
          'Publish your project outcomes on public portfolio repositories or blogs',
        ],
        status: 'Practical Execution',
      },
      {
        id: 4,
        title: 'Gain hands-on exposure & peer feedback',
        shortDesc: 'Collaborate with student clubs, local organizations, or academic labs.',
        fullDesc: 'Apply your abilities in collaborative environments to refine teamwork and delivery.',
        actionItems: [
          'Participate in case competitions, hackathons, or community projects',
          'Seek structured feedback from working professionals in the discipline',
          'Refine documentation and presentation decks based on critique',
        ],
        status: 'Hands-on Exposure',
      },
      {
        id: 5,
        title: `Apply for ${targetRole} opportunities`,
        shortDesc: 'Target entry-level openings and internships with an evidence-backed portfolio.',
        fullDesc: 'Submit tailored applications directing recruiters to your practical project accomplishments.',
        actionItems: [
          `Apply for ${targetRole} and related entry-level openings`,
          'Tailor resume bullets to quantify project results and tool proficiencies',
          'Prepare for domain-specific technical interviews and case discussions',
        ],
        status: 'Career Launch',
      },
    ],
    opportunities: [
      {
        id: 'opp-ad-1',
        title: `${targetRole} Intern`,
        company: 'Vanguard Innovations',
        location: 'Remote',
        workType: 'Remote',
        requiredSkills: fallbackSkills.slice(0, 3),
        matchPercentage: 91,
        stipend: '$26 - $34 / hr',
        postedDate: 'Just now',
        description: `Collaborate with cross-functional teams on core ${profile.department || 'domain'} deliverables and project workflows.`,
        whyYouMatch: `Your background in ${profile.education || 'Degree'} and demonstrated skills match team requirements.`,
        skillsToImprove: [
          'Domain automation tools',
          'Industry reporting standards',
          'Cross-departmental collaboration',
        ],
      },
      {
        id: 'opp-ad-2',
        title: `Junior ${targetRole}`,
        company: 'Apex Horizon Labs',
        location: 'Hybrid · San Francisco, CA',
        workType: 'Hybrid',
        requiredSkills: [...fallbackSkills.slice(0, 2), 'Project Coordination'],
        matchPercentage: 86,
        stipend: '$28 - $36 / hr',
        postedDate: '2 days ago',
        description: `Assist senior specialists with project execution, client deliverables, and workflow audits in ${profile.department || 'the field'}.`,
        whyYouMatch: 'Strong foundational preparation and structured analytical approach.',
        skillsToImprove: [
          'Advanced project tracking',
          'Stakeholder communication',
          'Quality assurance standards',
        ],
      },
      {
        id: 'opp-ad-3',
        title: `${relatedRole1} Trainee`,
        company: 'Nova Systems',
        location: 'Remote',
        workType: 'Remote',
        requiredSkills: fallbackSkills.slice(0, 3),
        matchPercentage: 82,
        stipend: '$25 - $32 / hr',
        postedDate: '4 days ago',
        description: 'Support ongoing operations and contribute to team research, documentation, and client solutions.',
        whyYouMatch: 'Alignment between submitted coursework and day-to-day team responsibilities.',
        skillsToImprove: [
          'Workflow optimization',
          'Documentation velocity',
          'Performance metrics',
        ],
      },
      {
        id: 'opp-ad-4',
        title: `${relatedRole2} Associate`,
        company: 'Global Frontier Partners',
        location: 'Hybrid · Austin, TX',
        workType: 'Hybrid',
        requiredSkills: fallbackSkills.slice(0, 3),
        matchPercentage: 78,
        stipend: '$24 - $30 / hr',
        postedDate: '5 days ago',
        description: 'Engage with strategic projects, evaluate workflow efficiencies, and present findings to leadership.',
        whyYouMatch: 'Demonstrated initiative and structured problem-solving foundation.',
        skillsToImprove: [
          'Executive presentation',
          'Data synthesis',
          'Strategic prioritization',
        ],
      },
    ],
  };
}

/**
 * Intelligent, rule-based simulated AI matching engine that evaluates:
 * 1. Full Name
 * 2. Education / Degree
 * 3. Department or Field
 * 4. Current status (Student / Fresh Graduate / Career Switcher)
 * 5. Skills
 * 6. Preferred Career Roles
 * 7. Projects
 * 8. Certifications
 * 9. Interests
 */
export function simulateAiAnalysis(profile: StudentProfile): AnalysisResult {
  const preferredRolesText = (profile.preferredRole || '').toLowerCase();
  const skillsText = (profile.skills || '').toLowerCase();
  const projectsText = (profile.projects || '').toLowerCase();
  const interestsText = (profile.interests || '').toLowerCase();
  const certsText = (profile.certifications || '').toLowerCase();
  const deptText = (profile.department || '').toLowerCase();
  const eduText = (profile.education || '').toLowerCase();

  // Multi-factor domain scoring
  const scores: Record<string, number> = {
    data_analyst: 0,
    frontend_developer: 0,
    content_marketing: 0,
    business_analyst: 0,
    software_developer: 0,
    uiux_designer: 0,
  };

  // Rule 1: Preferred Career Roles (Highest Weight: 100)
  // Data Analyst
  if (
    preferredRolesText.includes('data analyst') ||
    preferredRolesText.includes('business intelligence') ||
    preferredRolesText.includes('bi analyst') ||
    preferredRolesText.includes('reporting analyst') ||
    preferredRolesText.includes('analytics')
  ) {
    scores.data_analyst += 100;
  }

  // Front-End Developer
  if (
    preferredRolesText.includes('front-end') ||
    preferredRolesText.includes('frontend') ||
    preferredRolesText.includes('web developer') ||
    preferredRolesText.includes('react developer') ||
    preferredRolesText.includes('ui engineer') ||
    preferredRolesText.includes('ui developer')
  ) {
    scores.frontend_developer += 100;
  }

  // Content / Marketing
  if (
    preferredRolesText.includes('content') ||
    preferredRolesText.includes('writer') ||
    preferredRolesText.includes('writing') ||
    preferredRolesText.includes('digital marketing') ||
    preferredRolesText.includes('communications') ||
    preferredRolesText.includes('copywriter') ||
    preferredRolesText.includes('social media')
  ) {
    scores.content_marketing += 100;
  }

  // Business Analyst
  if (
    preferredRolesText.includes('business analyst') ||
    preferredRolesText.includes('operations analyst') ||
    preferredRolesText.includes('market research') ||
    preferredRolesText.includes('consultant') ||
    preferredRolesText.includes('product strategy')
  ) {
    scores.business_analyst += 100;
  }

  // Software Developer
  if (
    preferredRolesText.includes('software developer') ||
    preferredRolesText.includes('software engineer') ||
    preferredRolesText.includes('backend') ||
    preferredRolesText.includes('full stack') ||
    preferredRolesText.includes('systems engineer')
  ) {
    scores.software_developer += 100;
  }

  // UI/UX Designer
  if (
    preferredRolesText.includes('ui/ux') ||
    preferredRolesText.includes('ux designer') ||
    preferredRolesText.includes('product designer') ||
    preferredRolesText.includes('interaction designer')
  ) {
    scores.uiux_designer += 100;
  }

  // Rule 2: Skills Analysis (Weight: 20 per direct skill match)
  // Data
  if (skillsText.includes('python')) scores.data_analyst += 15;
  if (skillsText.includes('sql')) scores.data_analyst += 20;
  if (skillsText.includes('power bi') || skillsText.includes('tableau')) scores.data_analyst += 25;
  if (skillsText.includes('excel')) {
    scores.data_analyst += 15;
    scores.business_analyst += 15;
  }

  // Frontend
  if (skillsText.includes('html')) scores.frontend_developer += 20;
  if (skillsText.includes('css')) scores.frontend_developer += 20;
  if (skillsText.includes('javascript') || skillsText.includes('js')) scores.frontend_developer += 25;
  if (skillsText.includes('react')) scores.frontend_developer += 25;

  // Content
  if (skillsText.includes('writing') || skillsText.includes('written')) scores.content_marketing += 25;
  if (skillsText.includes('communication') || skillsText.includes('storytelling')) scores.content_marketing += 20;
  if (skillsText.includes('canva')) scores.content_marketing += 25;
  if (skillsText.includes('presentation')) {
    scores.content_marketing += 10;
    scores.business_analyst += 15;
  }

  // Business
  if (skillsText.includes('business analysis')) scores.business_analyst += 30;
  if (skillsText.includes('process') || skillsText.includes('requirements')) scores.business_analyst += 20;
  if (skillsText.includes('market research')) scores.business_analyst += 20;

  // Software
  if (skillsText.includes('java') || skillsText.includes('c++')) scores.software_developer += 30;
  if (skillsText.includes('backend') || skillsText.includes('spring') || skillsText.includes('node')) scores.software_developer += 25;
  if (skillsText.includes('dsa') || skillsText.includes('algorithms')) scores.software_developer += 25;

  // UI/UX
  if (skillsText.includes('figma')) scores.uiux_designer += 30;
  if (skillsText.includes('wireframing') || skillsText.includes('prototyping')) scores.uiux_designer += 25;
  if (skillsText.includes('user research')) scores.uiux_designer += 25;

  // Rule 3: Projects & Practical Experience (Weight: 25)
  if (projectsText.includes('sales') || projectsText.includes('dashboard') || projectsText.includes('data analysis')) {
    scores.data_analyst += 25;
  }
  if (projectsText.includes('feedback website') || projectsText.includes('portfolio website') || projectsText.includes('web app')) {
    scores.frontend_developer += 25;
  }
  if (projectsText.includes('magazine') || projectsText.includes('article') || projectsText.includes('social media content')) {
    scores.content_marketing += 25;
  }
  if (projectsText.includes('market study') || projectsText.includes('business process') || projectsText.includes('brd')) {
    scores.business_analyst += 25;
  }
  if (projectsText.includes('api') || projectsText.includes('backend') || projectsText.includes('management system')) {
    scores.software_developer += 25;
  }
  if (projectsText.includes('redesign') || projectsText.includes('ux case study') || projectsText.includes('user onboarding')) {
    scores.uiux_designer += 25;
  }

  // Rule 4: Certifications & Interests (Weight: 15)
  if (interestsText.includes('data') || certsText.includes('power bi') || certsText.includes('data analysis')) {
    scores.data_analyst += 15;
  }
  if (interestsText.includes('web') || certsText.includes('responsive web') || certsText.includes('react')) {
    scores.frontend_developer += 15;
  }
  if (interestsText.includes('media') || interestsText.includes('marketing') || certsText.includes('inbound')) {
    scores.content_marketing += 15;
  }
  if (interestsText.includes('business') || interestsText.includes('strategy') || certsText.includes('business')) {
    scores.business_analyst += 15;
  }
  if (interestsText.includes('software') || certsText.includes('java') || certsText.includes('aws')) {
    scores.software_developer += 15;
  }
  if (interestsText.includes('ui/ux') || interestsText.includes('ux design') || interestsText.includes('user experience') || certsText.includes('google ux') || certsText.includes('ux')) {
    scores.uiux_designer += 15;
  }

  // Rule 5: Department & Academic Background
  if (deptText.includes('english') || deptText.includes('literature') || deptText.includes('journalism') || eduText.includes('b.a.')) {
    scores.content_marketing += 15;
  }
  if (deptText.includes('business') || deptText.includes('commerce') || eduText.includes('bba') || eduText.includes('mba') || eduText.includes('b.com')) {
    scores.business_analyst += 15;
  }
  if (deptText.includes('interaction design') || deptText.includes('ui/ux') || deptText.includes('graphic design') || deptText.includes('visual communication')) {
    scores.uiux_designer += 20;
  }

  // Find winning domain
  let winningKey = '';
  let highestScore = 0;

  for (const [key, score] of Object.entries(scores)) {
    if (score > highestScore) {
      highestScore = score;
      winningKey = key;
    }
  }

  // If score is negligible and student provided custom inputs, adaptively generate!
  let template: DomainTemplate;
  if (!winningKey || highestScore < 15) {
    template = createAdaptiveDomain(profile);
  } else {
    template = DOMAIN_TEMPLATES[winningKey] || createAdaptiveDomain(profile);
  }

  // 1. Synthesize Top Career Matches tailored to student's inputs
  const normalizeRoleName = (role: string): string => {
    const trimmed = role.trim();
    if (trimmed.toLowerCase() === 'digital marketing') return 'Digital Marketing Executive';
    if (trimmed.toLowerCase() === 'communications' && template.key === 'content_marketing') return 'Social Media Coordinator';
    if (trimmed.toLowerCase() === 'communications') return 'Communications Specialist';
    return trimmed;
  };

  let topCareerMatches: string[] = [];
  if (profile.preferredRole) {
    const rolesEntered = profile.preferredRole
      .split(/[,/&]/)
      .map((r) => normalizeRoleName(r))
      .filter(Boolean);

    for (const r of rolesEntered) {
      if (!topCareerMatches.includes(r)) {
        topCareerMatches.push(r);
      }
    }
  }

  for (const match of template.topCareerMatches) {
    if (!topCareerMatches.some((m) => m.toLowerCase() === match.toLowerCase())) {
      topCareerMatches.push(match);
    }
    if (topCareerMatches.length >= 3) break;
  }
  topCareerMatches = topCareerMatches.slice(0, 3);

  // 2. Synthesize Skill Strengths directly from user's entered skills
  const rawSkills = (profile.skills || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  let synthesizedStrengths: SkillStrength[] = [];
  const basePercentages = [92, 88, 85, 82, 78];

  if (template.key === 'content_marketing' && rawSkills.some(s => s.toLowerCase().includes('communication') || s.toLowerCase().includes('writing'))) {
    // Exactly align with Example 3: Written Communication, Content Creation, Presentation, Canva, Research
    synthesizedStrengths = template.skillsPresentPool.map((sk, idx) => ({
      skill: sk,
      percentage: [94, 90, 86, 82, 78][idx] || 78,
    }));
  } else if (rawSkills.length > 0) {
    // If user entered skills, use them
    synthesizedStrengths = rawSkills.slice(0, 5).map((sk, idx) => ({
      skill: sk,
      percentage: basePercentages[idx] || 75,
    }));

    // If fewer than 5 skills, complement with domain skills (avoid duplicates)
    if (synthesizedStrengths.length < 5) {
      for (const poolSkill of template.skillsPresentPool) {
        if (!synthesizedStrengths.some((s) => s.skill.toLowerCase() === poolSkill.toLowerCase())) {
          synthesizedStrengths.push({
            skill: poolSkill,
            percentage: basePercentages[synthesizedStrengths.length] || 75,
          });
          if (synthesizedStrengths.length >= 5) break;
        }
      }
    }
  } else {
    synthesizedStrengths = template.skillsPresentPool.slice(0, 5).map((sk, idx) => ({
      skill: sk,
      percentage: basePercentages[idx] || 75,
    }));
  }

  // 3. Skills Already Present
  const skillsHave = rawSkills.length > 0 ? rawSkills : template.skillsPresentPool.slice(0, 4);

  // 4. Recommended Skills (Skills to bridge — strictly exclude exact skills user already has)
  const skillsRecommended = template.skillsRecommendedPool
    .filter(
      (recSkill) =>
        !skillsHave.some(
          (have) => have.toLowerCase().trim() === recSkill.toLowerCase().trim()
        )
    )
    .slice(0, 5);

  // 5. Candidate Identification and Personalized Insight
  const candidateName = profile.name || 'Candidate';
  const roleDisplay = topCareerMatches[0] || template.defaultRole;
  const statusDisplay = profile.currentStatus || 'Student / Fresh Graduate';
  const eduDisplay = profile.education ? `${profile.education} in ${profile.department || 'your field'}` : 'your academic background';

  let careerInsight = `Based on the submitted profile for ${candidateName} (${statusDisplay}, ${eduDisplay}), your skills and practical projects demonstrate strong alignment with ${roleDisplay} opportunities. Developing the recommended bridge skills will maximize your readiness for entry-level positions.`;

  // Cross-disciplinary transition insight
  const isArtsInTech = (eduText.includes('b.a') || deptText.includes('english')) && (template.key === 'frontend_developer' || template.key === 'data_analyst' || template.key === 'software_developer');
  if (isArtsInTech) {
    careerInsight = `Career transition pathway for ${candidateName}: Your background in ${profile.department || 'Arts'} paired with hands-on technical skills demonstrates strong initiative. Developing the recommended technical bridge skills will prepare you for competitive ${roleDisplay} roles.`;
  }

  const skillGap: SkillGapData = {
    targetRole: roleDisplay,
    readinessPercentage: 82,
    skillsHave,
    skillsRecommended,
    nextSteps: template.nextSteps,
    nextRecommendedAction: template.recommendedAction,
  };

  return {
    skillStrengths: synthesizedStrengths,
    careerInsight,
    topCareerMatches,
    opportunities: template.opportunities,
    skillGap,
    roadmapStages: template.roadmapStages,
  };
}
