#!/bin/bash

# Portfolio Setup Script
# This script sets up the development environment for the portfolio

echo "🚀 Setting up Portfolio Development Environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Install global development tools
echo "📦 Installing development tools..."
npm install -g html-validate linkcheck

# Validate HTML
echo "🔍 Validating HTML..."
if html-validate index.html; then
    echo "✅ HTML validation passed"
else
    echo "❌ HTML validation failed"
fi

# Check basic file structure
echo "📁 Checking project structure..."
required_files=("index.html" "README.md" "images/profile.jpg")
required_dirs=("qa-prompts" "job-search-automation" "docs" "scripts")

for file in "${required_files[@]}"; do
    if [[ -f "$file" ]]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
    fi
done

for dir in "${required_dirs[@]}"; do
    if [[ -d "$dir" ]]; then
        echo "✅ $dir/ directory exists"
    else
        echo "❌ $dir/ directory missing"
    fi
done

echo "🎉 Setup complete! Your portfolio is ready for development."
echo "   To test locally, open index.html in your browser."
echo "   To deploy, push changes to the main branch."
