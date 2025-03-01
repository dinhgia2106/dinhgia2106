# Dinh Gia - AI & Machine Learning Engineer Portfolio

A modern, interactive portfolio website for showcasing AI and machine learning expertise.

![Portfolio Preview](preview.png)

## Features

- Responsive design works on all devices
- Dark/light theme toggle
- Interactive particle background
- Dynamic typing effect
- Animated counters and statistics
- Skill and project filtering
- Contact form
- Smooth animations
- GitHub statistics integration
- Modern UI with cohesive color scheme

## Getting Started

### Prerequisites

- A web server or hosting service (GitHub Pages, Netlify, Vercel, etc.)
- Basic knowledge of HTML/CSS/JavaScript

### Installation

1. Clone or download this repository
2. Upload the files to your web server or hosting service
3. Replace placeholder content with your own information

### Customization

#### Update Personal Information

- Edit the `index.html` file to update:
  - Name and title
  - About section information
  - Skills and technologies
  - Projects
  - Contact information
  - Social media links

#### Customize Colors

The website uses CSS variables for easy color customization:

```css
:root {
  --primary-color: #36bcf7;
  --secondary-color: #8f44fd;
  /* Other colors and variables */
}
```

Edit these variables in the `assets/css/style.css` file to match your preferred color scheme.

#### GitHub Stats Integration

This portfolio uses [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats) for displaying GitHub statistics. Replace `dinhgia2106` with your GitHub username in these locations:

```html
<img
  src="https://github-readme-stats.vercel.app/api?username=dinhgia2106&show_icons=true&count_private=true&hide_border=true&title_color=36BCF7&icon_color=36BCF7&text_color=c9d1d9&bg_color=0d1117"
  alt="GitHub Stats"
/>
```

#### Profile Picture

Replace the profile image URL with your own:

```html
<img
  src="https://avatars.githubusercontent.com/u/dinhgia2106"
  alt="Dinh Gia"
  class="profile-image"
/>
```

## Usage Notes

### Typing Effect

The typing effect on the home page displays these phrases in sequence:

```javascript
const texts = [
  "AI & Machine Learning Engineer",
  "Data Scientist",
  "Deep Learning Researcher",
  "Always exploring new algorithms",
];
```

Edit this array in `assets/js/main.js` to customize the typing effect.

### Contact Form

The contact form is set up for demonstration purposes. To make it functional, you'll need to implement server-side processing or use a form submission service like Formspree. Update the form action accordingly:

```html
<form
  id="contact-form"
  class="contact-form"
  action="https://formspree.io/your-email@example.com"
  method="POST"
></form>
```

## Current Website Information

- Last updated: 2025-03-01
- Current user: dinhgia2106

## License

This project is open source and available under the [MIT License](LICENSE).
