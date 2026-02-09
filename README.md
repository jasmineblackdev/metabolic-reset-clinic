# Metabolic Reset Clinic - Vanilla HTML/CSS/JavaScript Website

This is a complete conversion of the React-based Metabolic Reset Clinic website to vanilla HTML, CSS, and JavaScript.

## 📁 Project Structure

```
metabolic-reset-vanilla/
├── index.html                 # Homepage
├── about.html                 # About Us page
├── medical-weight-loss.html   # Medical Weight Loss page
├── metabolic-reset.html       # Metabolic Reset Program page
├── chronic-disease.html       # Chronic Disease Management page
├── contact.html               # Contact page
├── css/
│   └── styles.css            # Main stylesheet
├── js/
│   └── main.js               # Main JavaScript file
├── images/
│   └── hero-clinic.jpg       # Hero image
└── README.md                 # This file
```

## 🚀 Features

- **Fully Responsive**: Works on all devices (mobile, tablet, desktop)
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks required
- **SEO Optimized**: Includes meta tags, structured data, and semantic HTML
- **Smooth Animations**: Fade-in effects and smooth scrolling
- **Mobile Menu**: Fully functional hamburger menu for mobile devices
- **Service Cards**: Expandable service descriptions
- **Fast Loading**: Optimized CSS and JavaScript

## 🎨 Design System

### Colors
- **Primary**: `hsl(242, 40%, 34%)` - Deep blue-purple
- **Secondary**: `hsl(96, 52%, 50%)` - Fresh green
- **Gold/CTA**: `hsl(96, 52%, 50%)` - Vibrant green
- **Background**: `hsl(120, 20%, 97%)` - Light cream

### Typography
- **Headings**: 'DM Serif Display', serif
- **Body**: 'DM Sans', sans-serif

## 📝 Customization Guide

### Updating Content

#### 1. Services
Edit the `servicesData` array in `js/main.js`:

```javascript
const servicesData = [
    {
        icon: `<svg>...</svg>`,      // SVG icon code
        title: "Service Name",
        short: "Short description",
        long: "Full description",
        href: "service-page.html"
    },
    // ... more services
];
```

#### 2. Testimonials
Edit the testimonial cards directly in `index.html` within the `.testimonials-grid` section.

#### 3. Colors
Modify CSS variables in `css/styles.css`:

```css
:root {
    --primary: hsl(242, 40%, 34%);
    --secondary: hsl(96, 52%, 50%);
    /* ... other variables */
}
```

### Adding New Pages

1. Copy an existing HTML file (e.g., `about.html`)
2. Update the content within the `<main>` tag
3. Keep the header and footer unchanged
4. Add navigation links in header if needed

## 🔧 Setup Instructions

### Option 1: Local Development

1. **Download/Clone** the project
2. **Open `index.html`** in your browser
3. That's it! No build process required.

### Option 2: Web Server

For a production environment:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 🌐 Deployment

### Deploy to Netlify

1. Drag and drop the entire folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly!

### Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push all files to the repository
3. Go to Settings → Pages
4. Select branch and save
5. Your site will be live at `https://username.github.io/repo-name`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (iOS 12+)
- Android Chrome (Android 5+)

## ⚡ Performance

- No JavaScript frameworks = Faster load times
- Minimal CSS (single file)
- Optimized images
- Inline SVG icons (no icon font downloads)

## 🔍 SEO Features

- Semantic HTML5 elements
- Meta descriptions
- Open Graph tags
- Schema.org structured data
- Proper heading hierarchy
- Alt text for images
- Canonical URLs

## 📞 Contact Information

Update contact details in:
- Header phone link
- Footer contact section
- Contact page form action
- Schema.org structured data in `<head>`

## 🎯 Key Features Implemented

✅ Sticky header with scroll effect  
✅ Mobile hamburger menu  
✅ Smooth scroll navigation  
✅ Animated sections on scroll  
✅ Expandable service cards  
✅ Responsive grid layouts  
✅ CTA buttons and forms  
✅ Social media links  
✅ Google Maps integration (contact page)  
✅ Multi-page structure  

## 📄 License

This is a client project for Metabolic Reset Clinic, LLC.

## 🆘 Support

For questions or issues:
1. Check the code comments in each file
2. Refer to this README
3. Contact the development team

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**
