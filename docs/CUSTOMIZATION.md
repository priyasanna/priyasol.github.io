# Portfolio Template Customization Guide

This guide helps developers customize the AI-First Portfolio Template for their own use.

## Quick Customization Checklist

### 1. Personal Information
**File: `index.html`**
- [ ] Replace "Ela MCB" with your name (lines 6, profile section)
- [ ] Update email address (contact section)
- [ ] Replace LinkedIn URL with your profile
- [ ] Update GitHub username in social links

### 2. Profile Image
**File: `images/profile.jpg`**
- [ ] Replace with your professional headshot
- [ ] Recommended size: 300x300px or larger
- [ ] Format: JPG or PNG

### 3. Projects Section
**File: `index.html` (projects section)**
- [ ] Replace LLMGuardian with your flagship project
- [ ] Update Job Search Automation with your project
- [ ] Modify Algorithmic Trading or replace with relevant work
- [ ] Update technology stacks and results

### 4. Skills Section
**File: `index.html` (skills section)**
- [ ] Update technical skills to match your expertise
- [ ] Modify AI/ML technologies based on your experience
- [ ] Adjust programming languages list

### 5. Repository Customization
**File: `README.md`**
- [ ] Update repository name references
- [ ] Modify project descriptions
- [ ] Update contact information
- [ ] Add your own project screenshots

## Advanced Customization

### Color Scheme
**File: `index.html` (CSS variables section)**
```css
:root {
    --primary: #0a0a0f;      /* Dark background */
    --secondary: #00d4ff;     /* Accent blue */
    --accent: #7c3aed;        /* Purple accent */
    --neon-blue: #00f5ff;     /* Neon highlights */
    /* Customize these colors */
}
```

### Adding New Projects
1. Copy an existing project card structure
2. Update the content and links
3. Add corresponding project folder in repository
4. Update the README.md with new project details

### Modifying AI Demos
**Directory: `llm-guardian/`**
- Customize the LLMGuardian framework for your use case
- Update demo.html with your own examples
- Modify the interactive buttons and responses

### GitHub Actions Customization
**File: `.github/workflows/deploy.yml`**
- The CI/CD pipeline is pre-configured
- Modify validation steps if needed
- Add additional checks (security scanning, performance tests)

## SEO Optimization

### Meta Tags
Update these in `index.html`:
- Title tag
- Description meta tag
- Keywords meta tag
- Open Graph tags for social sharing

### Structured Data
The template includes structured data for:
- Person schema
- WebSite schema
- Organization schema

Update these with your information for better search visibility.

## Performance Tips

1. **Images**: Optimize all images (use WebP format if possible)
2. **CSS**: Minify CSS for production
3. **JavaScript**: Keep vanilla JS for best performance
4. **Fonts**: Use system fonts or optimized web fonts

## Browser Support

The template supports:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Mobile Responsiveness

The template is mobile-first. Test on:
- iPhone (various sizes)
- Android devices
- Tablets
- Desktop (1920px+)

## Accessibility

Built-in accessibility features:
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- High contrast colors
- Screen reader compatible

## Getting Help

- Check existing [Issues](https://github.com/ElaMCB/ElaMCB.github.io/issues)
- Open an [Issue](https://github.com/ElaMCB/ElaMCB.github.io/issues)
- Submit a [Bug Report](https://github.com/ElaMCB/ElaMCB.github.io/issues/new?template=bug_report.md)

## Sharing Your Customization

If you create an awesome customization:
1. Share your portfolio URL in Discussions
2. Consider contributing improvements back to the template
3. Help others by sharing your customization techniques
