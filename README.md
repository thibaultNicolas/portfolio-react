# Nicolas Thibault - Portfolio

A modern, minimalistic, and animated web portfolio built with Next.js, TypeScript, and GSAP.

## Features

- **Modern Design**: Clean, minimalistic, and elegant design
- **Responsive**: Fully responsive across all devices
- **Animations**: Smooth GSAP animations throughout the site
- **Bilingual**: English and French language support
- **TypeScript**: Type-safe development
- **TailwindCSS**: Utility-first CSS framework
- **SEO Optimized**: Meta tags and structured data

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: GSAP
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

## Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Locale-specific routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── Projects.tsx      # Projects showcase
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── hooks/                # Custom React hooks
│   └── useGSAP.ts        # GSAP animation hooks
├── lib/                  # Utility functions
│   └── data.ts           # Static data
├── types/                # TypeScript type definitions
│   └── index.ts          # Main types
└── i18n.ts              # Internationalization config
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Adding New Projects

Edit `src/lib/data.ts` to add new projects to the portfolio.

### Updating Content

Content is managed through translation files in the `messages/` directory:

- `messages/en.json` - English content
- `messages/fr.json` - French content

### Styling

The design system is configured in `tailwind.config.ts`. Custom colors, fonts, and animations can be modified there.

## Deployment

The project is ready for deployment on Vercel, Netlify, or any other platform that supports Next.js.

## License

This project is open source and available under the [MIT License](LICENSE).
