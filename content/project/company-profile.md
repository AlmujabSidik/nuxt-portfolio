---
title: Modern Company Profile with Nuxt 3
description: A sleek and professional company profile website built using Nuxt 3 and TailwindCSS, featuring smooth animations, dynamic content management, and optimized performance.
stars: 78
publishedAt: 2024-02-03
image: /images/projects/company-profile.png
github: https://github.com/yourusername/company-profile-nuxt
demo: https://yourdemo.com
tech:
  - Nuxt 3
  - TailwindCSS
  - GSAP
  - Nuxt Content
  - TypeScript
status: completed
features:
  - Responsive design
  - Dynamic content management
  - SEO optimized
  - Performance focused
  - Smooth page transitions
---

# Company Profile Website

## Project Overview 🏢

A modern and dynamic company profile website that showcases the company's services, portfolio, and team members. Built with Nuxt 3 for optimal performance and SEO, featuring smooth animations and intuitive content management.

## Key Features ✨

- **Dynamic Content Management**

  - Easy content updates via Nuxt Content
  - Markdown support for blog posts
  - Dynamic routing for services and portfolio

- **Performance Optimized**

  - Server-Side Rendering (SSR)
  - Image optimization
  - Lazy loading components
  - Minified assets

- **Interactive Elements**
  - Smooth scroll animations
  - Interactive service cards
  - Team member profiles
  - Contact form with validation

## Technical Implementation 💻

### Page Structure

```vue
<!-- pages/about.vue -->
<script setup lang="ts">
interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
}

const team = ref<TeamMember[]>([
  {
    id: 1,
    name: "John Doe",
    position: "CEO",
    image: "/images/team/john-doe.jpg",
    bio: "20+ years of industry experience",
  },
  // More team members...
]);

onMounted(() => {
  // GSAP animations
  gsap.from(".team-member", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
  });
});
</script>

<template>
  <main>
    <!-- Hero Section -->
    <section class="hero-section">
      <h1 class="text-4xl font-bold">About Our Company</h1>
      <p class="text-xl text-gray-600">Building the future together</p>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="member in team" :key="member.id" class="team-member">
          <img
            :src="member.image"
            :alt="member.name"
            class="w-full rounded-lg"
          />
          <h3 class="text-xl font-bold mt-4">{{ member.name }}</h3>
          <p class="text-gray-600">{{ member.position }}</p>
        </div>
      </div>
    </section>
  </main>
</template>
```

### Navigation Component

```vue
<!-- components/AppHeader.vue -->
<script setup lang="ts">
const isMenuOpen = ref(false);
const route = useRoute();

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];
</script>

<template>
  <header class="fixed w-full bg-white shadow-sm z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold"> CompanyName </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navigation"
            :key="item.path"
            :to="item.path"
            class="nav-link"
            :class="{ active: route.path === item.path }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden" @click="isMenuOpen = !isMenuOpen">
          <span class="sr-only">Menu</span>
          <!-- Menu Icon -->
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-show="isMenuOpen" class="md:hidden">
        <div class="py-2 space-y-2">
          <NuxtLink
            v-for="item in navigation"
            :key="item.path"
            :to="item.path"
            class="block px-4 py-2"
            :class="{ active: route.path === item.path }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>
```

## Project Structure 📁

```plaintext
company-profile/
├── assets/
│   └── css/
│       └── main.css
├── components/
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── ServiceCard.vue
│   └── TeamMember.vue
├── content/
│   ├── services/
│   └── blog/
├── layouts/
│   └── default.vue
├── pages/
│   ├── index.vue
│   ├── about.vue
│   ├── services/
│   ├── portfolio/
│   └── contact.vue
├── public/
│   └── images/
└── composables/
    └── useAnimations.ts
```

## SEO Implementation 🔍

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      title: "Company Name - Professional Services",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Professional company profile website showcasing our services and portfolio",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
```

## Performance Optimizations ⚡

1. **Image Optimization**

   - Automatic WebP conversion
   - Responsive images
   - Lazy loading

2. **Code Splitting**

   - Component lazy loading
   - Route-based code splitting
   - Dynamic imports

3. **Caching Strategies**
   - Static asset caching
   - API response caching
   - Component caching

## Features and Pages 📱

1. **Home Page**

   - Hero section with CTA
   - Featured services
   - Client testimonials
   - Latest news/blog posts

2. **About Page**

   - Company history
   - Team members
   - Mission & vision
   - Company values

3. **Services Page**

   - Service categories
   - Detailed service descriptions
   - Service request form

4. **Portfolio Page**

   - Project showcase
   - Project filters
   - Case studies
   - Client feedback

5. **Contact Page**
   - Contact form
   - Office locations
   - Google Maps integration
   - Social media links

## Getting Started 🚀

```bash
# Clone the project
git clone https://github.com/yourusername/company-profile-nuxt

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Future Enhancements 🔮

1. Multi-language support
2. Admin dashboard
3. Live chat integration
4. Analytics dashboard
5. Newsletter integration

---

**Last Updated:** February 2024
