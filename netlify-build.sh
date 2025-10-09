#!/bin/bash

# Netlify Build Script for Chennai Manifesto
echo "🚀 Starting Netlify build for Chennai Manifesto..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build the project
echo "🏗️ Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build output: dist/"
    echo "🌐 Ready for Netlify deployment!"
else
    echo "❌ Build failed!"
    exit 1
fi
