# V&A Autohaus Landing Page

A bilingual (English/Spanish) luxury car dealership landing page built with React, Tailwind CSS, and react-i18next.

## Features

- **Dark luxury theme** with gray-900 background and yellow-400 accents
- **Bilingual support** (EN/ES) with automatic language detection
- **Fully responsive** design for all screen sizes
- **Modern React** functional components with hooks
- **Tailwind CSS** for utility-first styling
- **Static deployment ready** for AWS S3

## Sections

1. **Hero** - Welcome message with call-to-action
2. **Who We Are** - Founder bios (Alfonso & Victor)
3. **What We Do** - Mission and services description
4. **Gallery** - Premium car collection showcase
5. **Contact** - Contact form for inquiries
6. **Location** - Map and address information
7. **Footer** - Legal information

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with static files ready for deployment to AWS S3 or any static hosting service.

## Deployment to AWS S3

1. Build the project: `npm run build`
2. Upload the contents of the `build` folder to your S3 bucket
3. Enable static website hosting on the S3 bucket
4. Set `index.html` as the index document

## Language Support

The application automatically detects the user's browser language and defaults to English if Spanish is not detected. Users can manually switch languages using the EN/ES toggle in the header.

## Customization

- **Colors**: Modify `tailwind.config.js` to change the color scheme
- **Content**: Update translation files in `src/locales/` for text changes
- **Images**: Replace placeholder images in `src/components/Gallery.js`
- **Map**: Add your Google Maps embed URL in `src/components/Location.js`

## Technologies Used

- React 18
- Tailwind CSS 3
- react-i18next
- i18next-browser-languagedetector
- Inter font family
