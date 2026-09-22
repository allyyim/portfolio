# 💻 Alison Yim | Portfolio Website

A professional portfolio website built with React, TypeScript, and Bootstrap featuring a whimsical programmer theme with glass-morphism design.

## 🌟 Features

- **Glass-Morphism Design**: Modern frosted glass effect cards with smooth animations
- **Responsive Layout**: Fully responsive design that works on mobile, tablet, and desktop
- **Project Showcase**: Interactive project cards with tech stacks and GitHub links
- **Professional Sections**: Home, Projects, About pages
- **Smooth Navigation**: React Router for seamless page transitions
- **Dark Theme**: Eye-friendly dark mode with vibrant accent colors

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type-safe development
- **Bootstrap 5** - Responsive grid and utilities
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **CSS 3** - Glass-morphism effects and animations

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── GlassCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Hero.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   └── About.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   └── bio.ts
│   ├── styles/
│   │   ├── globals.css
│   │   └── glass-theme.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/allyyim/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Customization

### Update Your Information

Edit `src/data/bio.ts` to add your personal information:
- Name, title, and bio
- Skills and technologies
- Contact information

### Add/Edit Projects

Edit `src/data/projects.ts` to add or modify projects:
```typescript
{
  id: 'unique-id',
  title: 'Project Name',
  description: 'Project description',
  icon: '🎨',
  technologies: ['React', 'TypeScript'],
  repoUrl: 'https://github.com/username/repo',
  featured: true,
}
```

### Customize Theme

Colors and styles are defined in `src/styles/globals.css` and `src/styles/glass-theme.css`. Modify CSS variables in the `:root` selector to change the color scheme.

## 🌐 Deployment

### Deploy to GitHub Pages

1. Update the `homepage` field in `package.json`:
```json
"homepage": "https://yourusername.github.io"
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

The site will be live at `https://yourusername.github.io`

## 📦 Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## 🎨 Design Highlights

- **Glass-Morphism**: Backdrop blur effects with semi-transparent backgrounds
- **Smooth Animations**: Floating effects, glow animations, and hover transitions
- **Responsive Grid**: Bootstrap 5 grid system for perfect alignment
- **Dark Theme**: Reduced eye strain with professional dark color palette
- **Accessibility**: Clean typography and high contrast ratios

## 🤝 Contributing

Feel free to fork, modify, and customize this portfolio for your own use!

## 📄 License

This project is open source and available under the MIT License.

---

Built with 💜 and TypeScript
