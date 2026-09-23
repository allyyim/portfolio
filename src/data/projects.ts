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
    description: 'Matcha drinkers had no shared, offline-friendly way to track and compare drinks — so I built an offline-first PWA with JWT-secured REST APIs, a TensorFlow.js recommendation engine, and a PostgreSQL backend, shipped to the web and the Microsoft Store.',
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
    description: 'Critical context gets buried in Azure DevOps PR discussions and teams keep rebuilding the same extraction logic. ADO Prism uses Azure OpenAI to classify PR comments in real time and surface them as structured signals through markdown files and APIs.',
    icon: '🤖',
    technologies: ['C#', 'HTML', 'Azure OpenAI Foundry', 'Azure DevOps API', 'NLP'],
    repoUrl: 'https://github.com/allyyim/MRTAthon_hack2025',
    featured: true,
  },
  {
    id: 'predictive-autoscaling',
    title: 'Predictive Autoscaling | Microsoft Hackathon 2024',
    description: 'Azure Monitor autoscaling reacted to load instead of anticipating it. I extended it with memory metrics and richer training data, then tuned regularized ML.NET regression models to forecast resource needs more accurately.',
    icon: '📈',
    technologies: ['C#', 'ML.NET', 'Azure Monitor', 'OxyPlot', 'TimeSeries'],
    repoUrl: 'https://github.com/allyyim/predictive_autoscaling',
    featured: true,
  },
  {
    id: 'pythia',
    title: 'Pythia',
    description: 'Readers wanted a lightweight way to discover books matched to their taste without the noise of mainstream review sites. Pythia is a TypeScript frontend on the Goodreads API with a clean, responsive Bootstrap UI focused on the picking-your-next-read moment.',
    icon: '📖',
    technologies: ['TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Goodreads API'],
    repoUrl: 'https://github.com/allyyim/Pythia',
    featured: true,
  },
  {
    id: 'readhot',
    title: 'ReadHot | FinTech Focus 2020',
    description: 'Books and music both carry mood, but nothing bridged them. During Wells Fargo\'s FinTech Focus fellowship, I co-built a Flask + MongoDB app that combines Google Books, Open Library, IBM Watson NLP, and the Spotify API to generate playlists matching a book\'s themes.',
    icon: '📚',
    technologies: ['Python', 'Flask', 'MongoDB', 'HTML', 'CSS', 'Bootstrap', 'Spotify API', 'Open Library API', 'IBM Watson'],
    repoUrl: 'https://github.com/bernardw11/ReadHot-project',
    featured: true,
  },
];
