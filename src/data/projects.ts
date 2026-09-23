export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  repoUrl: string;
  liveUrl?: string;
  storeUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'matcha-ratings',
    title: 'Sip & Score (Matcha Ratings)',
    description: 'An offline-first PWA rating and recommendation system for matcha beverages. Features JWT-secured REST APIs, real-time recommendation engine with TensorFlow.js, and PostgreSQL backend.',
    icon: '🍵',
    technologies: ['React', 'TypeScript', 'Bootstrap', 'Node.js', 'PostgreSQL', 'TensorFlow.js', 'GitHub Actions'],
    repoUrl: 'https://github.com/allyyim/matcha_ratings',
    liveUrl: 'https://allyyim.github.io/matchaRatings/',
    storeUrl: 'https://apps.microsoft.com/detail/9plprt4v9c7d?hl=en-US&gl=US',
    featured: true,
  },
  {
    id: 'ado-prism',
    title: 'ADO Prism',
    description: 'AI-powered internal engineering assistant that queries pull requests and reduces manual knowledge triage. Built at Microsoft\'s MRTAthon 2025 (Messaging and Real-Time Analytics hackathon) using semantic NLP for critical PR comment classification.',
    icon: '🤖',
    technologies: ['C#', 'HTML', 'Azure OpenAI', 'NLP'],
    repoUrl: 'https://github.com/allyyim/MRTAthon_hack2025',
    featured: true,
  },
  {
    id: 'predictive-autoscaling',
    title: 'Predictive Autoscaling',
    description: 'Built at Microsoft Hackathon 2024. Extended Azure Monitor predictive autoscaling with memory utilization metrics and expanded training datasets. Tuned ML.NET regression models with regularization for accurate resource forecasting.',
    icon: '📈',
    technologies: ['C#', 'ML.NET', 'Azure Monitor', 'OxyPlot', 'TimeSeries'],
    repoUrl: 'https://github.com/allyyim/predictive_autoscaling',
    featured: true,
  },
];
