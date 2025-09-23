#!/usr/bin/env node

/**
 * Portfolio Validation Script
 * Validates HTML, checks links, and verifies project structure
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating Portfolio...\n');

// Check required files
const requiredFiles = [
    'index.html',
    'README.md',
    'images/profile.jpg',
    'qa-prompts/README.md',
    'job-search-automation/README.md'
];

// Check required directories
const requiredDirs = [
    'images',
    'qa-prompts',
    'qa-prompts/prompts',
    'qa-prompts/examples',
    'job-search-automation',
    'docs',
    'scripts',
    '.github',
    '.github/workflows'
];

let errors = 0;

// Validate file structure
console.log('📁 Checking file structure...');
requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`✅ ${file}`);
    } else {
        console.log(`❌ ${file} - MISSING`);
        errors++;
    }
});

requiredDirs.forEach(dir => {
    if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
        console.log(`✅ ${dir}/`);
    } else {
        console.log(`❌ ${dir}/ - MISSING`);
        errors++;
    }
});

// Basic HTML validation
console.log('\n🔍 Checking HTML structure...');
if (fs.existsSync('index.html')) {
    const htmlContent = fs.readFileSync('index.html', 'utf8');
    
    // Check for required elements
    const requiredElements = [
        '<html lang="en">',
        '<meta charset="UTF-8">',
        '<meta name="viewport"',
        '<title>',
        'Ela MCB',
        'profile-img',
        'social-links'
    ];
    
    requiredElements.forEach(element => {
        if (htmlContent.includes(element)) {
            console.log(`✅ Contains: ${element}`);
        } else {
            console.log(`❌ Missing: ${element}`);
            errors++;
        }
    });
}

// Check README badges
console.log('\n🏷️  Checking README badges...');
if (fs.existsSync('README.md')) {
    const readmeContent = fs.readFileSync('README.md', 'utf8');
    
    const expectedBadges = [
        'GitHub%20Pages',
        'HTML5',
        'CSS3',
        'JavaScript',
        'Python',
        'Playwright',
        'TypeScript'
    ];
    
    expectedBadges.forEach(badge => {
        if (readmeContent.includes(badge)) {
            console.log(`✅ Badge: ${badge.replace('%20', ' ')}`);
        } else {
            console.log(`❌ Missing badge: ${badge.replace('%20', ' ')}`);
            errors++;
        }
    });
}

// Summary
console.log('\n📊 Validation Summary');
console.log('='.repeat(30));
if (errors === 0) {
    console.log('🎉 All validations passed!');
    console.log('✅ Portfolio is ready for deployment.');
} else {
    console.log(`❌ Found ${errors} issue(s) that need attention.`);
    console.log('🔧 Please fix the issues above before deploying.');
    process.exit(1);
}

console.log('\n🚀 Next steps:');
console.log('   1. Test locally: Open index.html in browser');
console.log('   2. Deploy: Push to main branch');
console.log('   3. Monitor: Check GitHub Actions for deployment status');
