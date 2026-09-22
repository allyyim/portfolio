#!/bin/bash
# Portfolio setup script

echo "🚀 Setting up your portfolio..."

# Clean any existing installations
echo "Cleaning up previous installation..."
rm -rf node_modules
rm -f package-lock.json

# Install dependencies
echo "Installing dependencies (this may take a minute)..."
npm install

if [ $? -eq 0 ]; then
  echo "✅ Installation complete!"
  echo ""
  echo "🎉 Next steps:"
  echo "   npm run dev    - Start development server"
  echo "   npm run build  - Build for production"
  echo "   npm run deploy - Deploy to GitHub Pages"
else
  echo "⚠️  Installation had issues. Try running manually:"
  echo "   npm install --legacy-peer-deps"
fi
