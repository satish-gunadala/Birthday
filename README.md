# 💕 Birthday App - React + Vanilla CSS

A beautiful, elegant birthday celebration app built with **React** and **Vite**, featuring stunning image galleries and animated carousels!

## 🎂 Features

✨ **Rotating Hero Image** - Auto-playing slideshow with smooth transitions  
🎠 **Interactive Carousel** - Browse through memories with next/previous controls  
📸 **Beautiful Gallery Grid** - All 23+ photos in a responsive masonry layout  
💌 **Sweet Messages** - Personalized birthday wishes and celebrations  
🎉 **Animations & Effects** - Hover effects, smooth transitions, and bouncing emojis  
📱 **Fully Responsive** - Looks perfect on desktop, tablet, and mobile  
🎨 **Vanilla CSS** - Pure CSS with no dependencies, fast and lightweight  

## 📦 Project Structure

```
Birthday/
├── Images/              # Your photos folder
├── App.jsx              # Main React component
├── App.css              # Beautiful styling
├── main.jsx             # React entry point
├── style.css            # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies
└── README.md            # This file
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16+)
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open your browser to `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## 🖼️ Adding Your Own Photos

1. Place all your photos in the `Images/` folder
2. Update the `images` array in `App.jsx` with your photo filenames
3. Photos are automatically included in all three sections:
   - **Hero Section**: Auto-rotates every 5 seconds
   - **Carousel**: Browse one at a time with controls
   - **Gallery Grid**: View all at once

## 🎨 Customization

### Change the Message
Edit the text in `App.jsx` to personalize the birthday message.

### Modify Colors
Edit `App.css` to change the gradient colors and theme.

### Adjust Image Timing
In `App.jsx`, find `setInterval` and change `5000` (5 seconds) to your preferred interval.

### Update Emojis
Replace emojis throughout the code for different celebrations!

## 📝 Features Explained

- **Hero Section**: Full-screen image with gradient overlay and message
- **Carousel**: Browse photos one by one with counter (e.g., "5/23")
- **Message**: Heartfelt birthday wishes section
- **Gallery**: All photos in a beautiful grid with hover animations
- **Celebration**: Final festive section with bouncing emojis

## 🎯 Made with 💕 for Someone Special

Enjoy your elegant birthday app!
