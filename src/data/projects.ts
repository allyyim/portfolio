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
    description: 'Offline-first PWA to track and rate matcha drinks, with a TensorFlow.js recommendation engine and a PostgreSQL backend. Shipped to web and the Microsoft Store.',
    icon: '🍵',
    technologies: ['TypeScript', 'JavaScript', 'React', 'HTML', 'CSS', 'Bootstrap', 'Node.js', 'Python', 'PostgreSQL', 'TensorFlow.js', 'GitHub Actions'],
    repoUrl: 'https://github.com/allyyim/matcha_ratings',
    liveUrl: 'https://allyyim.github.io/matchaRatings/',
    storeUrl: 'https://apps.microsoft.com/detail/9plprt4v9c7d?hl=en-US&gl=US',
    featured: true,
  },
  {
    id: 'ado-prism',
    title: 'ADO Prism | MRTAthon 2025',
    description: 'A .NET 8 service that pulls Azure DevOps PRs via the REST API, uses Azure OpenAI to filter noise, and surfaces real engineering insight as markdown and a live dashboard.',
    icon: '🤖',
    technologies: ['C#', '.NET 8', 'HTML', 'JavaScript', 'CSS', 'Azure OpenAI Foundry', 'Azure DevOps REST API'],
    repoUrl: 'https://github.com/allyyim/MRTAthon_hack2025',
    featured: true,
  },
  {
    id: 'predictive-autoscaling',
    title: 'Predictive Autoscaling | Microsoft Hackathon 2024',
    description: 'Extended Azure Monitor autoscaling with memory metrics and tuned ML.NET regression models to forecast resource needs before load spikes.',
    icon: '📈',
    technologies: ['C#', '.NET', 'ML.NET', 'Azure Monitor', 'TimeSeries', 'OxyPlot'],
    repoUrl: 'https://github.com/allyyim/predictive_autoscaling',
    featured: true,
  },
  {
    id: 'pythia',
    title: 'Pythia',
    description: 'A TypeScript app on the Goodreads API that surfaces similar titles and subgenres from a book you already love, built for friends who always ask me for recs.',
    icon: '📖',
    technologies: ['TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Goodreads API'],
    repoUrl: 'https://github.com/allyyim/Pythia',
    featured: true,
  },
  {
    id: 'readhot',
    title: 'ReadHot | FinTech Focus 2020',
    description: 'A Flask + MongoDB app that turns book summaries into a matching playlist, using IBM Watson NLP for theme and tone and Spotify\'s audio features.',
    icon: '📚',
    technologies: ['Python', 'Flask', 'MongoDB', 'HTML', 'CSS', 'Bootstrap', 'IBM Watson', 'Google Books API', 'Open Library API', 'Spotify API'],
    repoUrl: 'https://github.com/bernardw11/ReadHot-project',
    featured: true,
  },
];
