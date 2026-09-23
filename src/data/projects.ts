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
    title: 'ADO Prism | MRTAthon 2025',
    description: 'ADO PRism discovers hidden knowledge inside Azure DevOps pull request discussions in real time. It uses Azure OpenAI to classify comments into actionable categories, then delivers structured signals through markdown files and APIs — so teams never have to rebuild knowledge extraction from scratch, and important insights are never overlooked. Hosted by Microsoft\'s Messaging and Real-Time Analytics org.',
    icon: '🤖',
    technologies: ['C#', 'HTML', 'Azure OpenAI Foundry', 'Azure DevOps API', 'NLP'],
    repoUrl: 'https://github.com/allyyim/MRTAthon_hack2025',
    featured: true,
  },
  {
    id: 'predictive-autoscaling',
    title: 'Predictive Autoscaling | Microsoft Hackathon 2024',
    description: 'Extended Azure Monitor predictive autoscaling with memory utilization metrics and expanded training datasets. Tuned ML.NET regression models with regularization for accurate resource forecasting.',
    icon: '📈',
    technologies: ['C#', 'ML.NET', 'Azure Monitor', 'OxyPlot', 'TimeSeries'],
    repoUrl: 'https://github.com/allyyim/predictive_autoscaling',
    featured: true,
  },
  {
    id: 'readhot',
    title: 'ReadHot | FinTech Focus 2020',
    description: 'Co-created a Flask web app that generates custom Spotify playlists matching the themes of a book. Combines Google Books, Open Library, IBM Watson NLP, and the Spotify API. Built during Wells Fargo\'s FinTech Focus fellowship — a four-week program hosted by Bank of America, Goldman Sachs, JPMorgan Chase, Morgan Stanley, and Wells Fargo.',
    icon: '📚',
    technologies: ['Python', 'Flask', 'MongoDB', 'HTML', 'CSS', 'Bootstrap', 'Spotify API', 'Open Library API', 'IBM Watson'],
    repoUrl: 'https://github.com/bernardw11/ReadHot-project',
    featured: true,
  },
];
