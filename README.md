# Editkaro.in - Video Editing & Social Media Marketing Website

A modern, responsive website for Editkaro.in, a video editing and social media marketing service. The website showcases portfolio work, team information, and provides contact functionality for potential clients.

## 🎯 Project Overview

Editkaro.in is a boutique video editing studio specializing in:
- Social media marketing content
- Video editing and post-production
- Short films and advertisements
- Color grading
- Gaming edits
- eCommerce product videos
- Documentary content
- Anime edits
- Football highlights

## ✨ Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Portfolio Showcase**: Filterable portfolio with lightbox image viewer
- **Team Section**: Meet the creative team behind Editkaro
- **Contact Form**: Integrated contact form with Google Apps Script backend
- **Email Subscription**: Newsletter signup functionality
- **Modern UI**: Dark theme with gradient accents and glass morphism effects

## 🚀 Live Demo

Visit the live website: [Editkaro.in](https://editkaro.in)

## 📁 Project Structure

```
Editkaro Main/
├── index.html          # Homepage with hero section and email signup
├── about.html          # About page with team information
├── portfolio.html      # Portfolio showcase with filtering
├── contact.html        # Contact form page
├── assets/
│   ├── css/
│   │   └── style.css   # Main stylesheet with CSS variables
│   └── js/
│       └── main.js     # JavaScript for interactions and form handling
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: No frameworks, pure JS for functionality
- **Google Apps Script**: Backend form handling
- **Responsive Design**: Mobile-first approach

## 🎨 Design Features

- **Color Scheme**: Dark theme with pink (#ff0057) and orange (#ff7f00) accents
- **Typography**: Inter font family for modern readability
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Effects**: Hover animations, lightbox modals, and gradient backgrounds
- **Glass Morphism**: Subtle glass effects for modern UI elements

## 📱 Pages

### Homepage (`index.html`)
- Hero section with value proposition
- Email subscription form
- Call-to-action to view portfolio

### About (`about.html`)
- Company mission and vision
- Team member profiles with photos
- Professional background information

### Portfolio (`portfolio.html`)
- Filterable portfolio grid
- Categories: Short Form, Long Form, Gaming, Football, eCommerce, Documentary, Color Grading, Anime, Ads
- Lightbox image viewer for detailed viewing

### Contact (`contact.html`)
- Contact form with validation
- Fields: Name, Email, Phone, Message
- Integrated with Google Apps Script for form submission

## 🔧 Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd editkaro-website
   ```

2. **Open in browser**:
   - Simply open `index.html` in any modern web browser
   - Or use a local server for development:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     ```

3. **Configure Backend** (Optional):
   - Set up Google Apps Script for form handling
   - Update `APP_ENDPOINT` in HTML files with your script URL

## ⚙️ Configuration

### Google Apps Script Setup
1. Create a new Google Apps Script project
2. Deploy as a web app with execute permissions for "Anyone"
3. Update the `APP_ENDPOINT` variable in HTML files:
   ```javascript
   window.APP_ENDPOINT = "YOUR_GOOGLE_APPS_SCRIPT_URL";
   ```

### Customization
- **Colors**: Modify CSS variables in `:root` selector
- **Content**: Update HTML files with your information
- **Images**: Replace placeholder images with actual portfolio work
- **Styling**: Customize `assets/css/style.css` for different themes

## 📝 Form Handling

The website includes two forms:
1. **Email Subscription**: Collects email addresses for newsletter
2. **Contact Form**: Handles client inquiries with name, email, phone, and message

Both forms integrate with Google Apps Script for backend processing and data storage.

## 🎯 Portfolio Categories

- **Short Form**: Social media reels and short videos
- **Long Form**: Extended content and documentaries
- **Gaming**: Gaming highlights and montages
- **Football**: Sports highlights and content
- **eCommerce**: Product advertisements
- **Documentary**: Documentary-style content
- **Color Grading**: Color correction and enhancement
- **Anime**: Anime-style edits and content
- **Ads**: Commercial advertisements

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to Editkaro.in. All rights reserved.

## 📞 Contact

- **Website**: [Editkaro.in](https://editkaro.in)
- **Email**: Contact through the website contact form
- **Portfolio**: View our work at [Editkaro.in/portfolio](https://editkaro.in/portfolio)

## 🙏 Acknowledgments

- Team members: Aarav Kumar (Founder & Editor), Meera Joshi (Creative Director), Rohit Das (Motion Designer)
- Modern web design inspiration and best practices
- Google Apps Script for backend functionality

---

**Editkaro.in** - Crafting visual content that converts. 🎬✨
