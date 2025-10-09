#!/bin/bash

# Chennai Manifesto - Netlify Deployment Script
echo "🚀 Chennai Manifesto - Netlify Deployment"
echo "=========================================="

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI not found. Installing..."
    npm install -g netlify-cli
fi

# Build the project
echo "🏗️ Building project..."
npm run build:netlify

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    
    # Deploy to Netlify
    echo "🌐 Deploying to Netlify..."
    netlify deploy --prod --dir=dist
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "🌐 Your site is now live on Netlify!"
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
