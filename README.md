# SwipeScale Landing Site

A modern, deploy-ready landing site for SwipeScale built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, techy aesthetic with sharp edges and subtle glass effects
- **Responsive**: Mobile-first design with perfect mobile experience
- **Animations**: Smooth framer-motion animations throughout
- **SEO Optimized**: Complete metadata, OG tags, and sitemap
- **Contact Form**: Functional contact form with API route
- **Analytics Ready**: Vercel Analytics integration

## 🎨 Design System

### Colors
- **Primary**: Deep blue-purple (#1B1E3B)
- **Accent**: Vibrant orange (#FF7A1A)
- **Neutrals**: Clean grays for text and backgrounds

### Typography
- **Font**: Inter (with system-ui fallback)
- **Weights**: 300, 400, 500, 600, 700

### Components
- Glass cards with backdrop blur
- Gradient accents and borders
- Smooth animations (8-12% translateY, 200-300ms)
- Consistent spacing and layout

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd swipe-marketing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── book/              # Booking page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
```

## 🎯 Customization

### Colors
Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  primary: {
    DEFAULT: '#1B1E3B',
    600: '#242A52',
    700: '#151833',
  },
  accent: {
    DEFAULT: '#FF7A1A',
    600: '#FF6A00',
  },
  // ... more colors
}
```

### Content
Update content in the section components:
- `src/components/sections/Hero.tsx` - Main headline and value props
- `src/components/sections/Pricing.tsx` - Pricing information
- `src/components/sections/FAQ.tsx` - FAQ items

### Contact Form
The contact form submits to `/api/contact` and shows a success message. In production:
1. Add form validation
2. Integrate with your CRM/email service
3. Add rate limiting

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository**
   - Push to GitHub/GitLab
   - Connect in Vercel dashboard

2. **Deploy**
   - Vercel will auto-detect Next.js
   - Build and deploy automatically

3. **Environment Variables** (if needed)
   - Add any API keys in Vercel dashboard

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Pages & Routes

- `/` - Homepage with all sections
- `/book` - Booking page (Calendly placeholder)
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/api/contact` - Contact form API

## 🎨 Brand Guidelines

### Voice & Tone
- **Confident**: Direct, no fluff
- **Concise**: Clear value propositions
- **Transparent**: Honest about pricing and limitations

### Key Messages
- "Theme pages that print attention"
- "$3,000/month + $0.15 CPM"
- "No attribution headaches—pay for reach"

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Sections

1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Follow the existing pattern with motion animations

### Styling Guidelines

- Use Tailwind utility classes
- Follow the established color system
- Maintain consistent spacing (16px, 24px, 32px)
- Use glass effects sparingly for emphasis

## 📊 Analytics

Vercel Analytics is included by default. To add other analytics:

1. Install your preferred analytics package
2. Add to `src/app/layout.tsx`
3. Configure tracking events as needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to SwipeScale.

---

**Built with ❤️ for SwipeScale** 