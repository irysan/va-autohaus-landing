# V&A Autohaus Deployment Guide

This guide will help you deploy your V&A Autohaus website to GitHub Pages with the custom domain `vaautohaus.com`.

## 🚀 Quick Deployment Steps

### 1. Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `va-autohaus-landing` (or any name you prefer)
3. Make it **public** (required for GitHub Pages on free plan)
4. Don't initialize with README (we already have files)

### 2. Connect Local Repository to GitHub
```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/va-autohaus-landing.git

# Push existing code to GitHub
git branch -M main
git push -u origin main
```

### 3. Deploy to GitHub Pages
```bash
# Build and deploy in one command
npm run deploy
```

### 4. Configure Custom Domain (vaautohaus.com)

#### A. In GitHub Repository Settings:
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Custom domain**, enter: `vaautohaus.com`
5. Check **Enforce HTTPS**

#### B. Configure DNS Records:
You need to configure these DNS records with your domain provider:

**For Root Domain (vaautohaus.com):**
```
Type: A
Name: @
Value: 185.199.108.153
```
```
Type: A  
Name: @
Value: 185.199.109.153
```
```
Type: A
Name: @
Value: 185.199.110.153
```
```
Type: A
Name: @
Value: 185.199.111.153
```

**For WWW Subdomain (optional):**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

## 📋 Available Deployment Commands

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy

# Build and deploy (automatic)
npm run predeploy && npm run deploy
```

## 🔧 Configuration Files Added

### 1. Package.json Updates
- Added `gh-pages` dependency
- Added deployment scripts
- Set homepage to `https://vaautohaus.com`

### 2. CNAME File
- Created `public/CNAME` with your domain
- Automatically copied to build folder

### 3. GitHub Actions Workflow
- Automatic deployment on push to main branch
- Runs tests before deployment
- Uses latest Node.js and dependencies

## 🌐 DNS Configuration Details

### Where to Configure DNS:
Configure these records where you purchased `vaautohaus.com`:
- **GoDaddy**: DNS Management
- **Namecheap**: Advanced DNS
- **Cloudflare**: DNS Records
- **Route 53**: Hosted Zone Records

### DNS Propagation:
- Changes can take 24-48 hours to propagate globally
- Use [DNS Checker](https://dnschecker.org) to verify propagation

## 🔍 Verification Steps

### 1. Check GitHub Pages Status:
1. Go to repository **Settings > Pages**
2. Should show: "Your site is published at https://vaautohaus.com"

### 2. Test the Website:
- Visit `https://vaautohaus.com`
- Test both English and Spanish versions
- Verify mobile responsiveness
- Check all navigation links

### 3. SSL Certificate:
- GitHub automatically provides SSL certificate
- May take a few minutes after domain configuration

## 🚨 Troubleshooting

### Domain Not Working:
1. Check DNS records are correct
2. Wait for DNS propagation (up to 48 hours)
3. Verify CNAME file exists in repository
4. Check GitHub Pages settings

### Build Failures:
1. Check GitHub Actions tab for error details
2. Ensure all dependencies are installed
3. Verify tests are passing locally

### SSL Issues:
1. Wait 24 hours after domain configuration
2. Try accessing with `https://` explicitly
3. Check GitHub Pages settings for SSL status

## 📱 Post-Deployment Checklist

- [ ] Website loads at `https://vaautohaus.com`
- [ ] SSL certificate is active (green lock icon)
- [ ] Both English and Spanish versions work
- [ ] Mobile navigation (hamburger menu) works
- [ ] Phone numbers are clickable on mobile
- [ ] All images load correctly
- [ ] Google Maps embed works
- [ ] Language toggle functions properly

## 🔄 Future Updates

To update the website:
1. Make changes locally
2. Test with `npm start`
3. Commit changes: `git commit -m "feat: your changes"`
4. Push to GitHub: `git push`
5. Deploy: `npm run deploy`

Or use automatic deployment:
1. Push to main branch
2. GitHub Actions will automatically build and deploy

## 📞 Support

If you encounter issues:
1. Check GitHub repository Issues tab
2. Verify DNS configuration with your domain provider
3. Test locally first with `npm start`
4. Check browser console for errors
