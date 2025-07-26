# Orion Productions Website

A simple, elegant website for Orion Productions featuring multilingual support and responsive design.

## 🌟 Features

- **Multilingual Support**: 10 languages including English, French, Spanish, Portuguese, Italian, German, Japanese, Chinese, Korean, and Arabic
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Black background with elegant typography and smooth animations
- **Language Persistence**: Remembers user's language preference
- **RTL Support**: Full support for Arabic language (right-to-left text direction)
- **Accessibility**: Keyboard navigation and screen reader friendly

## 🚀 Quick Start

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Local Development

1. **Clone or download** this repository
2. **Add your logo**: Place your `orion-logo.png` file in the `assets/` folder
3. **Open the website**:
   - **Option 1**: Double-click `index.html` to open directly in your browser
   - **Option 2**: Use a local server for better development experience

### Using a Local Server (Recommended)

#### With Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### With Node.js:
```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server -p 8000
```

#### With PHP:
```bash
php -S localhost:8000
```

Then open your browser and navigate to: `http://localhost:8000`

## 📁 File Structure

```
website-basic/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── assets/             # Assets folder
│   └── orion-logo.png  # Your logo file (add this)
└── README.md           # This file
```

## 🎨 Customization

### Adding Your Logo
1. Place your logo file in the `assets/` folder
2. Name it `orion-logo.png` (or update the path in `index.html`)
3. Recommended logo size: 300px width, transparent background

### Modifying Colors
Edit `styles.css` to change:
- Background color: `background-color: #000000;`
- Text color: `color: #ffffff;`
- Accent color: `color: #ffd700;` (yellow)

### Adding More Languages
1. Add translations to the `translations` object in `script.js`
2. Add the language option to the select element in `index.html`
3. Update the `languageDirections` object if needed

## 🌐 Deployment to GitHub Pages

### Automatic Deployment
1. **Push your code** to the `main` branch of your GitHub repository
2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"
3. **Wait a few minutes** for deployment
4. **Access your site** at: `https://yourusername.github.io/website-basic`

### Manual Deployment
If you prefer manual deployment:
1. Create a `gh-pages` branch
2. Push your files to that branch
3. Configure GitHub Pages to use the `gh-pages` branch

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎯 Performance Features

- Minimal dependencies (no external libraries)
- Optimized CSS and JavaScript
- Fast loading times
- Smooth animations and transitions

## 🔒 Security

- No external dependencies
- No tracking or analytics
- Privacy-focused design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support, please contact Orion Productions.

---

**Built with ❤️ for Orion Productions** 