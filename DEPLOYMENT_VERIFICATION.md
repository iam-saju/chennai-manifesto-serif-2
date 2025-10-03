# Deployment Verification Checklist

## Ensuring Localhost and Vercel Match Exactly

### Steps to Verify Deployment:

1. **Clear Build Cache (Local)**
   ```bash
   rm -rf dist node_modules/.vite
   npm run build
   npm run preview
   ```

2. **Force Rebuild on Vercel**
   - Go to Vercel Dashboard
   - Navigate to your project
   - Go to "Deployments" tab
   - Click "..." menu on latest deployment
   - Select "Redeploy"
   - Check "Use existing Build Cache" is UNCHECKED
   - Click "Redeploy"

3. **Compare Both Environments**
   - Open localhost:4173 (after `npm run preview`)
   - Open your Vercel deployment URL
   - Compare side-by-side:
     - Font sizes (especially manifesto content)
     - Spacing and margins
     - Line heights
     - Overall layout

4. **Check Browser Console**
   - Open DevTools on both
   - Look for font loading errors
   - Check for CSS warnings
   - Verify no 404s for resources

## Fixed Issues:

### Font Loading
- ✅ Added `preconnect` for Google Fonts (faster loading)
- ✅ Changed `display=swap` to `display=block` (prevents FOUT)
- ✅ Added font smoothing CSS properties
- ✅ Added text rendering optimization

### Viewport Settings
- ✅ Added `maximum-scale=1.0` to prevent zoom on mobile
- ✅ Prevents accidental text size adjustments

### Text Rendering
- ✅ `-webkit-font-smoothing: antialiased` (better rendering)
- ✅ `-moz-osx-font-smoothing: grayscale` (consistent on Firefox/Mac)
- ✅ `text-rendering: optimizeLegibility` (better kerning)

## If Issues Persist:

### Hard Refresh Both Sites
- **Chrome/Edge**: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)
- **Firefox**: Ctrl+F5 (Windows) / Cmd+Shift+R (Mac)
- **Safari**: Cmd+Option+R

### Check Font Cache
```bash
# Clear font cache on localhost
# Close all browser windows
# Delete browser cache via Settings
# Restart browser
```

### Verify Build Output
```bash
# Check dist folder matches what Vercel deploys
npm run build
ls -lh dist/assets/

# Compare file sizes with Vercel deployment
# Vercel deployment files available in:
# https://your-site.vercel.app/_next/static/
```

## Common Causes of Differences:

1. **Font Loading**
   - Localhost: Fonts may be cached
   - Vercel: Fresh font downloads
   - **Fix**: Use `display=block` (now applied)

2. **Browser Zoom**
   - Check browser zoom is 100% on both
   - Reset: Ctrl/Cmd + 0

3. **Device Pixel Ratio**
   - Retina displays may render differently
   - Check Settings > Display > Scaling

4. **Browser Extensions**
   - Ad blockers may affect font loading
   - Test in Incognito/Private mode

5. **CSS Cache**
   - Vercel CDN may serve old CSS
   - Force redeploy without cache

## Testing Protocol:

1. Open both sites in **same browser**
2. Set zoom to **100%** on both
3. Use **Incognito/Private mode** (no extensions)
4. Test on **same device/monitor**
5. Compare at **same viewport size**
6. Take screenshots if needed

## Expected Result:
After these fixes, localhost preview and Vercel deployment should be **pixel-perfect identical**.
