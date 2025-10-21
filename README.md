# 🌿 Cherne Langeveldt Physiotherapy - React Website

A modern, responsive React website for a professional physiotherapy practice with olive green branding.

## 🚀 Quick Start

### Running the Website

```bash
# Navigate to the react-app directory
cd react-app

# Install dependencies (if not already installed)
npm install

# Start the development server
npm run dev
```

The website will open at: **http://localhost:5173**

## 📁 Project Structure

```
react-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header with mobile menu
│   │   ├── Header.css
│   │   ├── Hero.jsx         # Hero section with CTA
│   │   ├── Hero.css
│   │   ├── Services.jsx     # 4 service cards
│   │   ├── Services.css
│   │   ├── About.jsx        # About Cherne section
│   │   ├── About.css
│   │   ├── Contact.jsx      # Contact form & info
│   │   ├── Contact.css
│   │   ├── Footer.jsx       # Footer component
│   │   └── Footer.css
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   └── main.jsx             # Entry point
├── index.html               # HTML template
└── package.json             # Dependencies
```

## ✨ Features

### React Features
- ✅ **Component-Based Architecture** - Modular, reusable components
- ✅ **React Hooks** - useState, useEffect for state management
- ✅ **Smooth Scrolling** - Custom scroll handlers
- ✅ **Active Link Tracking** - Highlights current section in navigation
- ✅ **Mobile Menu** - Hamburger menu with state management
- ✅ **Form Handling** - Controlled components for contact form
- ✅ **Animations** - CSS animations triggered by React

### Design Features
- ✅ **Olive Green Color Scheme** (#92a184)
- ✅ **Fully Responsive** - Mobile, tablet, desktop
- ✅ **Modern Typography** - Poppins + Open Sans
- ✅ **Professional Icons** - Font Awesome integration
- ✅ **Smooth Animations** - Hover effects, transitions
- ✅ **Accessible** - Semantic HTML, proper ARIA labels

## 🎨 Components Overview

### Header Component
- Sticky navigation bar
- Mobile hamburger menu
- Active link highlighting based on scroll position
- Smooth scroll to sections

### Hero Component
- Eye-catching headline
- Call-to-action button
- Gradient placeholder for hero image

### Services Component
- 4 service cards:
  - Sports Injuries
  - Post-Operative Rehab
  - Chronic Pain Management
  - Back & Neck Pain
- Animated card reveals
- Hover effects

### About Component
- Professional bio section
- Credentials showcase
- Photo placeholder

### Contact Component
- Functional contact form with React state
- Form validation
- Success message display
- Contact information cards
- Map placeholder

### Footer Component
- Copyright information

## 🛠️ Customization

### Update Contact Information

Edit `src/components/Contact.jsx`:
```jsx
// Lines with phone, email, and address
<p>+27 (0)21 123 4567</p>  // Change this
<p>info@chernephysio.co.za</p>  // Change this
<p>123 Main Street...</p>  // Change this
```

### Change Colors

Edit `src/App.css`:
```css
:root {
    --primary-color: #92a184;  /* Change this for different color */
    --primary-dark: #6d7a62;
    --primary-light: #a8b598;
}
```

### Add Your Photo

Replace the placeholder in `src/components/About.jsx`:
```jsx
<div className="about__image">
  <img src="/path-to-your-photo.jpg" alt="Cherne Langeveldt" />
</div>
```

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Building for Production

```bash
# Create optimized production build
npm run build

# The build will be in the 'dist' folder
# Upload the contents of 'dist' to your web host
```

## 🚀 Deployment Options

### Netlify (Recommended)
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Push code to GitHub
2. Import project to Vercel
3. Vercel auto-detects Vite settings

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json scripts:
# "deploy": "gh-pages -d dist"
npm run build
npm run deploy
```

## 🔧 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool (fast, modern)
- **CSS3** - Styling (CSS Modules per component)
- **Font Awesome 6** - Icons
- **Google Fonts** - Typography

## 📱 Responsive Breakpoints

- **Mobile**: ≤ 768px
- **Tablet**: 768px - 968px
- **Desktop**: ≥ 968px

## ✅ Features Checklist

- ✅ Sticky navigation with active link highlighting
- ✅ Mobile hamburger menu
- ✅ Smooth scrolling between sections
- ✅ Hero section with CTA
- ✅ 4 service cards with animations
- ✅ About section with credentials
- ✅ Contact form with validation
- ✅ Success message on form submit
- ✅ Contact information display
- ✅ Fully responsive design
- ✅ Hover effects and transitions
- ✅ Professional olive green theme

## 🎯 Next Steps

1. **Customize Content**
   - Update contact information
   - Add your professional photo
   - Customize bio text

2. **Enhance Features**
   - Connect contact form to email service (EmailJS, Formspree)
   - Add Google Maps integration
   - Add patient testimonials

3. **Deploy**
   - Build for production
   - Deploy to Netlify, Vercel, or your preferred host

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Font Awesome Icons](https://fontawesome.com/icons)

## 📄 License

This project is created for Cherne Langeveldt Physiotherapy. Free to customize and use.

---

**Created**: October 8, 2025  
**Technology**: React 18 + Vite  
**Design Theme**: Olive Green Professional Medical  
**Status**: ✅ Complete and Ready to Use

