# Projects Quantum - Next.js Website

A fully animated single-page website for Projects Quantum, a leading construction engineering and quantity surveying company.

## Features

- ✨ **Fully Animated**: Smooth animations using Framer Motion
- 🎨 **Custom Color Scheme**: Professional dark blue and gold accent colors
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🚀 **Next.js 14**: Latest Next.js framework
- 💼 **13 Sections**: Complete website with all necessary sections
- 📧 **Contact Form**: Functional contact form with validation
- 🏢 **Professional Layout**: Clean and modern design

## Sections

1. **Hero Section** - Eye-catching introduction with animations
2. **About Us** - Company overview and key benefits
3. **Services** - Core service offerings
4. **Quantity Surveying** - QS-specific services
5. **Temporary Works** - Scaffolding and formwork solutions
6. **Training** - CIOB and RICS training programs
7. **Why Choose Us** - Key differentiators
8. **Process** - 4-step project process
9. **Projects** - Portfolio showcase
10. **Stats** - Company achievements
11. **Testimonials** - Client reviews
12. **FAQ** - Frequently asked questions
13. **Contact** - Contact form and information

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Customization

### Colors
Update colors in `tailwind.config.js`:
```js
colors: {
  primary: {
    dark: '#0a2540',  // Main dark blue
    light: '#1a4a6e', // Light blue
    accent: '#5a7a8a', // Accent blue-grey
  },
  accent: '#D4A574', // Gold accent
}
```

### Content
Replace dummy data in individual component files with your real content.

### Images
Add your images to the `public/images` folder and reference them in components.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Optimized animations with Framer Motion
- Lazy loading sections with `whileInView`
- Responsive images and responsive design
- Fast load times with Next.js optimization

## License

All rights reserved © Projects Quantum 2026
