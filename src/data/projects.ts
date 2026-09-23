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
    description: 'Matcha drinkers had no shared, offline-friendly way to track and compare drinks, so I built an offline-first PWA with JWT-secured REST APIs, a TensorFlow.js recommendation engine, and a PostgreSQL backend, shipped to the web and the Microsoft Store.',
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
    description: 'Friends kept asking me for book recs. They were usually stuck after a favorite read, or loved a genre but did not know which subgenre to explore next. Pythia is a TypeScript app on top of the Goodreads API with a clean, responsive Bootstrap UI that surfaces similar titles and subgenre threads from a book you already like.',
    icon: '📖',
    technologies: ['TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Goodreads API'],
    repoUrl: 'https://github.com/allyyim/Pythia',
    featured: true,
  },
  {
    id: 'readhot',
    title: 'ReadHot | FinTech Focus 2020',
    description: 'ReadHot was framed as soundtracks to the books we loved reading. During Wells Fargo\'s FinTech Focus fellowship, I co-built a Flask + MongoDB app that combines Google Books, Open Library, IBM Watson NLP, and the Spotify API to generate playlists matching the themes of a book.',
    icon: '📚',
    technologies: ['Python', 'Flask', 'MongoDB', 'HTML', 'CSS', 'Bootstrap', 'Spotify API', 'Open Library API', 'IBM Watson'],
    repoUrl: 'https://github.com/bernardw11/ReadHot-project',
    featured: true,
  },
];
