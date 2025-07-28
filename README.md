# Digital Agency Website

![Digital Agency Website](https://imgix.cosmicjs.com/972142a0-6bd9-11f0-a051-23c10f41277a-photo-1556742049-0cfed4f6a45d-1753724272102.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A professional digital agency website built with Next.js 15 and Cosmic CMS. Showcases services, team members, case studies, and client testimonials with a modern, responsive design.

## Features

- 🎯 **Service Showcase** - Dynamic service listings with detailed descriptions and pricing
- 👥 **Team Directory** - Professional team member profiles with bios and social links
- 📊 **Case Studies** - Detailed project portfolios with challenge/solution/results format
- 💬 **Client Testimonials** - Star ratings and client feedback with photos
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ⚡ **Performance Optimized** - Fast loading with Next.js 15 and image optimization
- 🔍 **SEO Ready** - Structured data and meta tags for search engines

## Clone this Bucket

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6887ae472dcc7fbc00c94dff&clone_repository=6887b838e62f297e7fb6052c)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Create a content model for a company website with services, team members, testimonials, and case studies

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket. set apiEnvironment: staging in cosmic config

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless content management
- **React** - Component-based UI library

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Create a `.env.local` file with your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

const services = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Team Members
```typescript
const teamMembers = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Case Studies
```typescript
const caseStudies = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with your Cosmic bucket to display:

- **Services** - Dynamic service listings with descriptions, features, and pricing
- **Team Members** - Staff profiles with photos, bios, and contact information
- **Case Studies** - Project portfolios with detailed challenge/solution/results
- **Testimonials** - Client feedback with ratings and related services

All content is dynamically fetched from your Cosmic bucket using the Cosmic SDK with staging environment configuration.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Netlify
1. Build the application: `bun run build`
2. Deploy the `out` folder to Netlify
3. Configure environment variables in Netlify dashboard

For production, make sure to set your environment variables in your hosting platform's dashboard.
<!-- README_END -->