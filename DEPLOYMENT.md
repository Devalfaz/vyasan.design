# Deployment Guide

## Current Setup

Your site is deployed as a **static export** on Firebase Hosting (Spark/Free plan).

### Live URLs
- **Primary**: https://vyasan-design.web.app
- **Custom Domain** (if configured): https://vyasan.design

## Deployment Commands

### Build and Deploy
```bash
npm run build
firebase deploy
```

### Preview Before Deploy
```bash
npm run build
firebase serve
```

## Configuration

### Next.js Configuration (`next.config.ts`)
```typescript
const nextConfig: NextConfig = {
  output: 'export',      // Static export for free hosting
  images: {
    unoptimized: true,   // Required for static export
  },
};
```

### Firebase Configuration (`firebase.json`)
```json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## Static Export Limitations

Since you're using static export (free plan), the following features are **not available**:
- Server-side rendering (SSR)
- API routes
- Image optimization (images are served unoptimized)
- Incremental Static Regeneration (ISR)

## Upgrading to Blaze Plan (Optional)

If you need dynamic features, you can upgrade to the Blaze (pay-as-you-go) plan:

1. Visit: https://console.firebase.google.com/project/vyasan-design/usage/details
2. Upgrade to Blaze plan
3. Update `next.config.ts`:
   ```typescript
   const nextConfig: NextConfig = {
     // Remove output: 'export'
     // Remove images.unoptimized
   };
   ```
4. Update `firebase.json`:
   ```json
   {
     "hosting": {
       "source": ".",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "frameworksBackend": {
         "region": "asia-east1"
       }
     }
   }
   ```
5. Deploy: `firebase deploy`

### Blaze Plan Benefits
- ✅ Image optimization
- ✅ Server-side rendering
- ✅ API routes
- ✅ Dynamic routes
- ✅ Automatic scaling
- 💰 Free tier included, pay only for usage beyond that

## SEO Files

All SEO files are included in the static export:
- ✅ `/sitemap.xml` - Auto-generated sitemap
- ✅ `/robots.txt` - Crawling instructions
- ✅ `/manifest.webmanifest` - PWA manifest

## Custom Domain Setup

To add your custom domain (vyasan.design):

1. Go to Firebase Console: https://console.firebase.google.com/project/vyasan-design/hosting
2. Click "Add custom domain"
3. Enter: `vyasan.design`
4. Follow the DNS configuration steps
5. Add the provided DNS records to your domain registrar
6. Wait for verification (can take up to 24 hours)

### DNS Records (Example)
```
Type: A
Name: @
Value: [Firebase IP provided]

Type: A
Name: www
Value: [Firebase IP provided]
```

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next out
npm run build
```

### Deploy Fails
```bash
# Check Firebase login
firebase login

# Check project
firebase projects:list

# Use specific project
firebase use vyasan-design
```

### Site Not Updating
```bash
# Clear browser cache or use incognito
# Wait 5-10 minutes for CDN propagation
```

## Continuous Deployment (Optional)

### GitHub Actions
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: vyasan-design
```

## Monitoring

### Firebase Console
- **Analytics**: https://console.firebase.google.com/project/vyasan-design/analytics
- **Hosting**: https://console.firebase.google.com/project/vyasan-design/hosting
- **Usage**: https://console.firebase.google.com/project/vyasan-design/usage

### Google Search Console
After deployment:
1. Go to: https://search.google.com/search-console
2. Add property: https://vyasan-design.web.app (or your custom domain)
3. Verify ownership
4. Submit sitemap: https://vyasan-design.web.app/sitemap.xml

## Performance

### Current Setup
- ✅ Static files served from CDN
- ✅ Automatic HTTPS
- ✅ Global CDN distribution
- ✅ Fast page loads

### Optimization Tips
1. **Images**: Already optimized in your design
2. **Caching**: Handled automatically by Firebase
3. **Compression**: Enabled by default
4. **CDN**: Global distribution included

## Support

- **Firebase Docs**: https://firebase.google.com/docs/hosting
- **Next.js Static Export**: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- **Firebase Support**: https://firebase.google.com/support

## Quick Commands Reference

```bash
# Development
npm run dev

# Build for production
npm run build

# Deploy to Firebase
firebase deploy

# Preview locally
firebase serve

# Check Firebase status
firebase projects:list

# View deployment history
firebase hosting:channel:list

# Rollback (if needed)
firebase hosting:clone SOURCE_SITE_ID:SOURCE_CHANNEL_ID TARGET_SITE_ID:live
```

---

**Last Deployed**: January 4, 2026
**Next.js Version**: 16.1.1
**Firebase CLI**: 15.1.0
**Deployment Type**: Static Export


