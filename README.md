# Modern Portfolio Website

A beautiful, responsive portfolio website built with modern web technologies including React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite
- **Beautiful Animations**: Framer Motion for smooth, engaging animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Toggle between light and dark themes
- **Performance Optimized**: Fast loading with Vite bundler
- **SEO Ready**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-v2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx     # Navigation component
│   ├── Hero.tsx       # Hero section
│   ├── About.tsx      # About section
│   ├── Skills.tsx     # Skills section
│   ├── Projects.tsx   # Projects showcase
│   ├── Contact.tsx    # Contact form
│   └── Footer.tsx     # Footer component
├── App.tsx            # Main App component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Update name and title
- `src/components/About.tsx` - Update about content
- `src/components/Skills.tsx` - Update skills and technologies
- `src/components/Projects.tsx` - Add your projects
- `src/components/Contact.tsx` - Update contact information

### Styling
- Colors: Modify `tailwind.config.js` for custom color schemes
- Fonts: Update Google Fonts link in `index.html`
- Animations: Customize Framer Motion animations in components

### Content
- Replace placeholder text with your actual content
- Add your real projects with screenshots
- Update social media links
- Add your actual contact information

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🌙 Dark Mode

The portfolio includes a built-in dark mode toggle that:
- Persists user preference
- Provides smooth transitions
- Maintains accessibility standards

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ using React, TypeScript, and Tailwind CSS 