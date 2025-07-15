# Deployment Guide

## Simple Netlify Deployment with Git Sync

This project is configured for automatic deployment to Netlify whenever you push to the master branch.

### Setup Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin master
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with your GitHub account
   - Click "New site from Git"
   - Choose your GitHub repository
   - Netlify will automatically detect the build settings from `netlify.toml`

3. **That's it!** 🎉
   - Every push to master will trigger a new deployment
   - Contact form will work automatically (no backend needed)
   - Site will be available at `https://your-site-name.netlify.app`

### Build Configuration

The `netlify.toml` file contains:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18
- **Form handling**: Automatic for forms with `data-netlify="true"`

### Custom Domain (Optional)

To use your own domain:
1. In Netlify dashboard, go to Site settings > Domain management
2. Add your custom domain
3. Follow the DNS configuration instructions

### Environment Variables

If you need environment variables:
1. Go to Site settings > Environment variables
2. Add your variables
3. Redeploy the site

### Local Development

```bash
npm run dev    # Start development server
npm run build  # Build for production
```