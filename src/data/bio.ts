export const bioData = {
  name: 'Alison Yim',
  title: 'Software Engineer @ Microsoft',
  subtitle: 'Systems, infrastructure, and full-stack development',
  bio: 'I\'m a software engineer at Microsoft building distributed systems and cloud infrastructure. I recently graduated from Lehigh University with a B.S. in Computer Science and Business. I\'m passionate about designing scalable systems, optimizing performance, and solving complex problems with code.',
  education: {
    school: 'Lehigh University',
    degree: 'B.S. Computer Science & Business (Honors)',
    period: 'August 2020 - May 2024',
  },
  skills: {
    languages: ['C#', 'Python', 'Java', 'C++', 'TypeScript', 'JavaScript', 'SQL', 'PowerShell', 'Rust'],
    frameworks: ['ASP.NET Core', 'React', 'Node.js', 'Azure', 'CosmosDB', 'PostgreSQL', 'MongoDB'],
    tools: ['Docker', 'Git', 'GitHub Actions', 'Azure DevOps', 'CI/CD', 'Linux', 'TensorFlow', 'Pandas', 'NumPy'],
  },
  experience: [
    {
      title: 'Software Engineer',
      company: 'Microsoft',
      period: 'July 2024 - Present',
      location: 'Redmond, WA',
      highlights: [
        'Engineer C# Azure control-plane infrastructure, reducing deployment overhead by ~80% via automated ARM-based workflows',
        'Develop distributed, concurrent backend services and scalable CosmosDB data models with production observability',
        'Migrate 50% of production service operations to event-driven RESTful APIs with comprehensive testing',
        'Extend backend validation pipelines with structured telemetry and request tracing for IAM/RBAC auditing',
      ],
    },
    {
      title: 'Software Engineering Intern',
      company: 'Microsoft',
      period: 'May - August 2023',
      location: 'Redmond, WA',
      highlights: [
        'Designed self-service backend platform enabling partner teams to subscribe to event-driven CRUD notifications',
        'Built fault-tolerant event-driven pipeline processing asynchronous workloads, eliminating 99.7% of manual operations',
        'Enhanced Azure Monitor regional onboarding infrastructure, improving deployment confidence by 20%',
      ],
    },
    {
      title: 'Explore Intern (PM & SWE)',
      company: 'Microsoft',
      period: 'May - August 2022',
      location: 'Redmond, WA',
      highlights: [
        'Designed VM-placement algorithm optimizing valid test configurations for maximum resource utilization',
        'Automated VM deployment and validation via PowerShell and Kusto, cutting log analysis time by 99.84%',
        'Led 3-intern team as PM with Agile deliverables; presented findings to Azure Server Performance team',
      ],
    },
    {
      title: 'Undergraduate Researcher',
      company: 'Nano Human Interfaces Lab',
      period: 'August 2023 - May 2024',
      location: 'Bethlehem, PA',
      highlights: [
        'Built Python (pandas) pipeline analyzing 833 data points into 7 MATLAB visualizations',
        'Classified open-ended responses from 110 users into themes via text analysis',
        'Synthesized 200+ research sources and 24 user-testing insights into evidence-based product strategy',
      ],
    },
  ],
  contact: {
    github: 'https://github.com/allyyim',
    email: 'alison@example.com',
  },
};
