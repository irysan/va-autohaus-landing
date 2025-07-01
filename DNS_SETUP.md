# DNS Configuration for vaautohaus.com

## Required DNS Records

Configure these DNS records with your domain provider for `vaautohaus.com`:

### A Records (Required)
Add these 4 A records pointing to GitHub Pages servers:

```
Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.108.153
TTL: 3600 (or default)

Type: A  
Name: @ (or leave blank for root domain)
Value: 185.199.109.153
TTL: 3600 (or default)

Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.110.153
TTL: 3600 (or default)

Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.111.153
TTL: 3600 (or default)
```

### CNAME Record (Optional but Recommended)
For www subdomain:

```
Type: CNAME
Name: www
Value: irysan.github.io
TTL: 3600 (or default)
```

## GitHub Pages Configuration

1. Go to your repository: https://github.com/irysan/va-autohaus-landing
2. Click **Settings** tab
3. Scroll to **Pages** section in the left sidebar
4. Under **Source**: Select "Deploy from a branch"
5. Under **Branch**: Select "gh-pages" and "/ (root)"
6. Under **Custom domain**: Enter `vaautohaus.com`
7. Check **"Enforce HTTPS"** (wait for SSL certificate to be ready)
8. Click **Save**

## Domain Provider Instructions

### GoDaddy
1. Login to GoDaddy account
2. Go to "My Products" > "DNS"
3. Find your domain and click "DNS"
4. Add the 4 A records above
5. Add the CNAME record for www (optional)

### Namecheap
1. Login to Namecheap account
2. Go to "Domain List"
3. Click "Manage" next to your domain
4. Go to "Advanced DNS" tab
5. Add the 4 A records above
6. Add the CNAME record for www (optional)

### Cloudflare
1. Login to Cloudflare account
2. Select your domain
3. Go to "DNS" > "Records"
4. Add the 4 A records above
5. Add the CNAME record for www (optional)
6. Make sure proxy status is "DNS only" (gray cloud)

## Verification Steps

### 1. DNS Propagation Check
Use online tools to verify DNS propagation:
- https://dnschecker.org
- https://www.whatsmydns.net
- Enter `vaautohaus.com` and check A records

### 2. GitHub Pages Status
- Go to repository Settings > Pages
- Should show: "Your site is published at https://vaautohaus.com"
- Green checkmark indicates successful setup

### 3. SSL Certificate
- GitHub automatically provides SSL certificate
- May take 10-60 minutes after domain configuration
- Site should be accessible via https://vaautohaus.com

## Timeline

- **DNS Changes**: 15 minutes to 48 hours (usually 1-4 hours)
- **GitHub Pages Recognition**: 10-30 minutes after DNS propagation
- **SSL Certificate**: 10-60 minutes after GitHub recognizes domain
- **Full Propagation**: Up to 48 hours globally

## Troubleshooting

### Domain Not Working
1. Verify all 4 A records are correct
2. Check DNS propagation with online tools
3. Wait up to 48 hours for full propagation
4. Ensure GitHub Pages custom domain is set correctly

### SSL Certificate Issues
1. Wait 24 hours after domain configuration
2. Try accessing with https:// explicitly
3. Check GitHub Pages settings for SSL status
4. Disable and re-enable "Enforce HTTPS" if needed

### 404 Errors
1. Verify gh-pages branch has content
2. Check CNAME file exists in repository
3. Ensure GitHub Pages source is set to gh-pages branch
4. Clear browser cache and try incognito mode

## Support

If issues persist:
1. Check GitHub Pages documentation
2. Verify with your domain provider
3. Use browser developer tools to check for errors
4. Test with different browsers/devices
