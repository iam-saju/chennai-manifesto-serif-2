# Netlify Deployment Guide

## 🚀 Quick Deploy to Netlify

### Option 1: Deploy from Git (Recommended)

1. **Connect your repository to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub/GitLab repository
   - Select this repository

2. **Build settings (automatically detected):**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `18`

3. **Environment variables (if needed):**
   - Add any environment variables in Netlify dashboard
   - No additional variables required for basic deployment

### Option 2: Manual Deploy

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Drag and drop the `dist` folder to Netlify dashboard
   - Or use Netlify CLI: `netlify deploy --prod --dir=dist`

## 📁 Project Structure

```
chennai-manifesto-serif-2/
├── dist/                    # Build output (Netlify publish directory)
├── src/                     # Source code
├── public/                  # Static assets
├── netlify.toml            # Netlify configuration
├── _redirects              # SPA redirects
└── netlify-build.sh        # Custom build script
```

## ⚙️ Netlify Configuration

The `netlify.toml` file includes:

- **Build settings:** Optimized for Vite + React
- **Redirects:** SPA routing support
- **Headers:** Security and caching headers
- **Cache control:** Optimized for static assets

## 🔧 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Netlify-specific build
npm run build:netlify

# Preview build locally
npm run preview
```

## 🌐 Deployment Features

- ✅ **SPA Routing:** All routes redirect to index.html
- ✅ **Asset Optimization:** Cached static assets
- ✅ **Security Headers:** XSS protection, content type options
- ✅ **Performance:** Optimized chunks and minification
- ✅ **Mobile Responsive:** Optimized for all devices

## 🚀 Custom Domain Setup

1. Go to Site settings → Domain management
2. Add your custom domain
3. Configure DNS records as instructed
4. Enable HTTPS (automatic with Netlify)

## 📊 Performance Monitoring

- Netlify Analytics (if enabled)
- Lighthouse scores
- Core Web Vitals monitoring

## 🔄 Continuous Deployment

- Automatic deployments on git push
- Preview deployments for pull requests
- Rollback capabilities

## 🛠️ Troubleshooting

### Build Failures
- Check Node.js version (18+)
- Ensure all dependencies are installed
- Check for TypeScript errors

### Routing Issues
- Verify `_redirects` file is in `dist/`
- Check `netlify.toml` redirects configuration

### Asset Loading Issues
- Verify public folder assets
- Check image paths and formats
- Ensure proper caching headers

## 📞 Support

For deployment issues:
1. Check Netlify build logs
2. Verify build settings
3. Test locally with `npm run preview`
