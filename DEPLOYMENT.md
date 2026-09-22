# 🚀 GitHub Pages Deployment Guide

## Quick Start Deployment

### Step 1: Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/allyyim/portfolio.git
git push -u origin main
```

### Step 2: Create `allyyim.github.io` Repository
If using a user/organization site (recommended for simplicity):
1. Create a new repository named `allyyim.github.io` on GitHub
2. This URL will automatically be deployed to: `https://allyyim.github.io`

### Step 3: Update package.json
If using the project repository, ensure homepage is set:
```json
{
  "homepage": "https://allyyim.github.io",
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### Step 4: Install Dependencies & Deploy
```bash
npm install
npm run deploy
```

### Step 5: Enable GitHub Pages (if needed)
1. Go to repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose `gh-pages` branch
4. Click Save

Your site will be live at `https://allyyim.github.io` within a few minutes!

## Troubleshooting

### Site shows 404
- Check that the gh-pages branch exists in your repository
- Verify GitHub Pages is enabled in Settings
- Clear browser cache and try again

### Changes not reflecting
- Rebuild: `npm run build`
- Redeploy: `npm run deploy`
- Wait 2-3 minutes for GitHub to update

### Wrong base path
If deploying to a project repository (not user site):
- Update vite.config.ts: `base: '/portfolio/'`
- Update package.json: `"homepage": "https://allyyim.github.io/portfolio"`

## Custom Domain (Optional)

1. In repository Settings → Pages → Custom domain
2. Enter your domain (e.g., `alison.dev`)
3. Update DNS records with your domain provider
4. A CNAME file will be created automatically

## Updating Your Site

After making changes:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

That's it! Your changes will be live within a few minutes.
