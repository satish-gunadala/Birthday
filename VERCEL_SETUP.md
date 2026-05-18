# Deploy to Vercel

Follow these steps to deploy your Birthday App to Vercel:

## Prerequisites
✅ Code pushed to GitHub
✅ `public/Images/` folder with all photos
✅ `vercel.json` configuration file
✅ vite.config.js has NO `base` path for Vercel

## Step 1: Connect to Vercel
1. Go to **https://vercel.com**
2. Click **Import Project**
3. Select your GitHub repository (P_Birthday)
4. Click **Import**

## Step 2: Configure Project
- **Project Name**: birthday-app (or your choice)
- **Framework Preset**: Vite
- **Root Directory**: Birthday (where your package.json is)
- **Build Command**: `npm run build` (usually auto-detected)
- **Output Directory**: `dist` (usually auto-detected)
- **Environment Variables**: (leave empty unless needed)

## Step 3: Deploy
Click **Deploy** - Vercel will automatically:
- Install dependencies
- Build your app
- Deploy to production

## Your App URL
After deployment, you'll get a URL like:
```
https://your-app-name.vercel.app/
```

## Troubleshooting

**Images not loading?**
- Make sure `public/Images/` folder is in your repo
- Check that vite.config.js has `publicDir: 'public'`
- Verify images are committed to Git

**Build failing?**
- Check Vercel's build logs
- Make sure `npm run build` works locally: `npm run build`
- Verify all files are pushed to GitHub

**Redeploying**
- Just push changes to GitHub - Vercel will auto-redeploy
- Or manually trigger from Vercel dashboard

## Tips
- Vercel automatically detects Vite projects
- No need for GitHub Actions - Vercel handles CI/CD
- Free tier includes unlimited deployments
- Preview deployments on every pull request
