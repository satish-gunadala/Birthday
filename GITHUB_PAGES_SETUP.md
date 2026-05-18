# Deploy to GitHub Pages

Follow these steps to deploy your Birthday App to GitHub Pages:

## Step 1: Make sure everything is ready
✅ `public/Images/` folder exists with all your photos
✅ `vite.config.js` has `base: '/P_Birthday/'` set
✅ `package.json` has build script

## Step 2: Push to GitHub
```bash
git add .
git commit -m "Add Birthday app with images"
git push origin main
```

## Step 3: Enable GitHub Pages in your repo
1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Select **Source**: "GitHub Actions"
   - Leave it as is (workflow will handle it)

## Step 4: Add the Workflow File
Create `.github/workflows/deploy.yml` in your repository with the content from `deploy.yml`

## Step 5: Deploy
The workflow will automatically run when you push. Your app will be live at:
**https://yourusername.github.io/P_Birthday/**

## Troubleshooting

**Images not showing?**
- Make sure all images are in `public/Images/`
- Check that `vite.config.js` has `base: '/P_Birthday/'`

**Build failing?**
- Run `npm install` locally
- Run `npm run build` to test build
- Check build output for errors

**Not deploying?**
- Make sure workflow file is at `.github/workflows/deploy.yml`
- Check GitHub Actions tab for errors
- Verify GitHub Pages is set to "GitHub Actions" in Settings
