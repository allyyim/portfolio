# 📋 Project Setup Guide

## What's Included

This portfolio project comes fully configured with:

✅ React 18 with TypeScript
✅ Bootstrap 5 for responsive design
✅ Vite for lightning-fast development
✅ Glass-morphism theme with animations
✅ React Router for page navigation
✅ Project showcase with 4 featured projects
✅ About & Resume sections
✅ Mobile-responsive design
✅ GitHub Pages deployment ready

## 🎯 Quick Start (5 Minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

This will start the dev server at `http://localhost:5173`

### 3. Make It Your Own

Edit `src/data/bio.ts`:
- Update your name, title, and bio
- Customize your skills and technologies
- Update contact information

Edit `src/data/projects.ts`:
- Your 4 projects are already configured
- Update project descriptions if needed
- Projects link to: 
  - marathon_hack2025
  - matcha_ratings
  - pythia
  - predictive_autoscaling

### 4. Customize Colors (Optional)

Edit `src/styles/globals.css` - look for the `:root` CSS variables:
```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.08);
  --primary: #6366f1;
  --secondary: #ec4899;
  --accent: #8b5cf6;
  /* ... more colors ... */
}
```

## 📁 File Organization

### Source Files
- **`src/components/`** - Reusable UI components
  - `Navbar.tsx` - Navigation bar
  - `GlassCard.tsx` - Base glass-effect card component
  - `ProjectCard.tsx` - Project display component
  - `Hero.tsx` - Hero section with intro
  - `Footer.tsx` - Footer with links

- **`src/pages/`** - Page components
  - `Home.tsx` - Landing page with featured projects
  - `Projects.tsx` - Full projects grid
  - `About.tsx` - About section with skills

- **`src/data/`** - Static data
  - `projects.ts` - Project configurations
  - `bio.ts` - Personal information

- **`src/styles/`** - Global styles
  - `globals.css` - Base styles and CSS variables
  - `glass-theme.css` - Glass-morphism utilities

### Configuration Files
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts
- `.prettierrc` - Code formatting rules

## 🎨 Design System

### Glass Cards
Use the `GlassCard` component for consistent glass-morphism effect:
```tsx
<GlassCard>
  Your content here
</GlassCard>
```

### Tech Badges
Automatically styled in `ProjectCard`, can be reused elsewhere:
```tsx
<span className="tech-badge">React</span>
```

### Glass Button
Use for call-to-action buttons:
```tsx
<a href="#" className="glass-button">Click Me</a>
```

### Animations
Pre-built classes:
- `.float` - Floating animation
- `.glow` - Glowing animation
- `.fade-in` - Fade in animation

## 🚀 Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run deploy   # Deploy to GitHub Pages
```

## 🌐 Deployment to GitHub Pages

See `DEPLOYMENT.md` for detailed instructions.

Quick version:
```bash
npm install gh-pages --save-dev
npm run deploy
```

Your site will be live at `https://allyyim.github.io`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Note:** Glass-morphism effect requires modern browsers with backdrop-filter support.

## 🔧 Environment Variables

No environment variables needed for basic setup. If you add features later (like forms, APIs), create a `.env.local` file:

```
VITE_API_URL=https://api.example.com
```

Then access in code:
```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

## 📚 Learn More

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0/)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router Docs](https://reactrouter.com)

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### Build errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### TypeScript errors in editor
Restart VS Code or reload the TypeScript server.

## ✨ Next Steps

1. ✅ Install & run locally
2. ✅ Customize bio and projects
3. ✅ Test locally (npm run dev)
4. ✅ Deploy to GitHub Pages
5. ✅ Share with the world! 🎉

Happy coding! 💻
