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
    technologies: ['TypeScript', 'JavaScript', 'React', 'HTML', 'CSS', 'Bootstrap', 'Node.js', 'Python', 'PostgreSQL', 'TensorFlow.js', 'GitHub Actions'],
    repoUrl: 'https://github.com/allyyim/matcha_ratings',
    liveUrl: 'https://allyyim.github.io/matchaRatings/',
    storeUrl: 'https://apps.microsoft.com/detail/9plprt4v9c7d?hl=en-US&gl=US',
    featured: true,
  },
  {
    id: 'ado-prism',
    title: 'ADO Prism | MRTAthon 2025',
    description: 'PR discussions on Azure DevOps hide real engineering knowledge (fixes, design decisions, conventions) under bot noise. ADO Prism is a .NET 8 service that pulls the last 30 days of PRs via the Azure DevOps REST API, uses Azure OpenAI to filter noise and categorize insights, and serves the results as markdown plus a live-progress HTML dashboard.',
    icon: '🤖',
    technologies: ['C#', '.NET 8', 'HTML', 'JavaScript', 'CSS', 'Azure OpenAI Foundry', 'Azure DevOps REST API'],
    repoUrl: 'https://github.com/allyyim/MRTAthon_hack2025',
    featured: true,
  },
  {
    id: 'predictive-autoscaling',
    title: 'Predictive Autoscaling | Microsoft Hackathon 2024',
    description: 'Azure Monitor autoscaling reacted to load instead of anticipating it. I extended it with memory metrics and richer training data, then tuned regularized ML.NET regression models to forecast resource needs more accurately.',
    icon: '📈',
    technologies: ['C#', '.NET', 'ML.NET', 'Azure Monitor', 'TimeSeries', 'OxyPlot'],
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
    description: 'ReadHot pitched a simple idea: every book deserves a soundtrack. During Wells Fargo\'s FinTech Focus fellowship, I co-built a Flask + MongoDB web app that pulls book metadata from Google Books and Open Library, runs the summaries through IBM Watson NLP to extract themes and tone, and maps those signals to Spotify audio features to generate a matching playlist per title.',
    icon: '📚',
    technologies: ['Python', 'Flask', 'MongoDB', 'HTML', 'CSS', 'Bootstrap', 'IBM Watson', 'Google Books API', 'Open Library API', 'Spotify API'],
    repoUrl: 'https://github.com/bernardw11/ReadHot-project',
    featured: true,
  },
];
