# Deployment Guide for SwipeScale

## GitHub Repository Setup

### 1. Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository name: `swipescale` (or your preferred name)
5. Description: `SwipeScale - Theme pages that print attention`
6. Make it **Public** (for free Vercel deployment)
7. **Don't** initialize with README, .gitignore, or license (we already have these)
8. Click "Create repository"

### 2. Connect Local Repository to GitHub
After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/swipescale.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Vercel Deployment (Recommended)

### 1. Deploy to Vercel
1. Go to [Vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your `swipescale` repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy"

### 2. Custom Domain (Optional)
1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `swipescale.co`)

## Alternative: Netlify Deployment

### 1. Deploy to Netlify
1. Go to [Netlify.com](https://netlify.com) and sign in with GitHub
2. Click "New site from Git"
3. Choose your `swipescale` repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Click "Deploy site"

## Environment Variables

If you need to add environment variables later:
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables

## Continuous Deployment

Both Vercel and Netlify will automatically deploy when you push to the `main` branch.

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Repository Structure

```
swipescale/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API routes
│   │   ├── book/           # Booking page
│   │   ├── privacy/        # Privacy policy
│   │   ├── terms/          # Terms of service
│   │   └── ...
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── layout/        # Layout components
│   │   └── sections/      # Page sections
│   └── ...
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
└── README.md             # Project documentation
```

## Features Included

- ✅ Responsive landing page with modern design
- ✅ Interactive pricing calculator with sliders
- ✅ Contact form with API endpoint
- ✅ SEO optimized (metadata, sitemap, robots.txt)
- ✅ TypeScript support
- ✅ Tailwind CSS styling
- ✅ Framer Motion animations
- ✅ Mobile-first design
- ✅ Accessibility features
- ✅ Performance optimized 