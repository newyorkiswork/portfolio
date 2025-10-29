# Robert Petillo's Portfolio

A modern, minimal portfolio website for Robert Petillo, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Clean, professional design with Poppins font
- 📱 Fully responsive mobile-first layout
- ⚡ Built with Next.js 14 App Router for optimal performance
- 🎯 Four main pages: Home, About, Portfolio, and Contact
- 🚀 Ready for deployment on Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── portfolio/      # Portfolio page
│   ├── layout.tsx      # Root layout with navigation
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   └── Navigation.tsx  # Navigation component
└── public/             # Static assets
```

## Customization

### Adding Your Content

1. **Home Page**: Edit `app/page.tsx` to update your hero section and featured content
2. **About Page**: Edit `app/about/page.tsx` to add your story, expertise, and values
3. **Portfolio**: Edit `app/portfolio/page.tsx` to showcase your businesses and projects
4. **Contact**: Edit `app/contact/page.tsx` to update contact information

### Adding Images

Place your images in the `public/` folder and reference them like:

```jsx
<img src="/your-image.jpg" alt="Description" />
```

Or use Next.js Image component for optimization:

```jsx
import Image from 'next/image';
<Image src="/your-image.jpg" alt="Description" width={500} height={300} />
```

## Deployment on Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure the build
5. Click "Deploy"

Your site will be live in minutes!

## Next Steps

- Add actual content to all pages
- Add images for your portfolio projects
- Consider adding a blog section
- Integrate contact form with email service (Resend, SendGrid, etc.)
- Add analytics (Vercel Analytics, Google Analytics, etc.)
- Consider adding a CMS for easier content management

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Poppins (Google Fonts)
- **Deployment**: Vercel

## License

This project is for personal portfolio use.

