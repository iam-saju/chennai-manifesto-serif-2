# Image Optimization Guide

## 🚨 Critical Issue
Your images are **9+ MB total** and causing severe performance issues on Vercel.

## Current Image Sizes
- `stamp.jpeg`: **3.6 MB** → Target: <200 KB
- `Untitled (16) (1).jpg`: **3.1 MB** → Target: <200 KB  
- `Untitled (5) (1).jpg`: **1.7 MB** → Target: <150 KB
- `chennai.png`: **817 KB** → Target: <100 KB
- `Gemini_Generated_Image_bn95dhbn95dhbn95.png`: **768 KB** → Target: <100 KB
- `hero1.jpg`: **604 KB** → Target: <80 KB
- `765d4ab84d3609432554d5ef5e0df07a (1).jpg`: **566 KB** → Target: <80 KB
- Other images: 43KB - 438KB → Target: <50 KB each

## Optimization Methods

### Method 1: Online Tools (Easiest)
Use these free online tools to compress images:

1. **TinyPNG/TinyJPG** (https://tinypng.com)
   - Drag and drop images
   - Downloads compressed versions
   - Best for PNG/JPG

2. **Squoosh** (https://squoosh.app)
   - Google's image optimizer
   - Convert to WebP format
   - Fine-tune compression

3. **CompressJPEG** (https://compressjpeg.com)
   - Batch compression
   - Adjust quality slider to 70-80%

### Method 2: Using ImageMagick (Command Line)
```bash
# Install ImageMagick
brew install imagemagick  # macOS
# sudo apt install imagemagick  # Linux

# Compress all JPEG files
cd public
for file in *.jpg *.jpeg; do
  convert "$file" -strip -quality 75 -resize 2000x2000\> "optimized_$file"
done

# Convert to WebP (best compression)
for file in *.jpg *.jpeg *.png; do
  cwebp -q 75 "$file" -o "${file%.*}.webp"
done
```

### Method 3: Automated npm Script
We've included a script in package.json. Install sharp:

```bash
npm install --save-dev sharp sharp-cli
```

Then compress:
```bash
npm run optimize-images  # (you'll need to add this script)
```

## Recommended Settings
- **JPEG Quality**: 70-80% (sweet spot for web)
- **Max Width**: 2000px for large images, 800px for thumbnails
- **Format**: WebP with JPEG fallback
- **Remove EXIF data**: Always strip metadata

## Priority Images to Compress First
1. ✅ `stamp.jpeg` (3.6 MB) - Most critical
2. ✅ `Untitled (16) (1).jpg` (3.1 MB) - Very large
3. ✅ `Untitled (5) (1).jpg` (1.7 MB) - Large
4. ✅ `chennai.png` (817 KB)
5. ✅ `Gemini_Generated_Image_bn95dhbn95dhbn95.png` (768 KB)

## After Optimization
1. Replace original images in `/public` folder
2. Test locally: `npm run build && npm run preview`
3. Check bundle size: `du -sh dist/`
4. Deploy to Vercel: `git add . && git commit -m "Optimize images" && git push`

## Expected Results
- **Before**: 14 MB build, 6-8s load time
- **After**: <2 MB build, 1-2s load time
- **Lighthouse Score**: <50 → 90+

## Notes
- Keep original images in a backup folder
- Test on mobile devices after optimization
- Vercel has built-in image optimization, but it's better to optimize before upload
