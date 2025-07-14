# Anil Karaca Portfolio - Development Roadmap

This document tracks the development process for building the portfolio website, following the provided project plan.

## Phase 1: Project Initialization & Foundational Setup
**Goal:** Create the project structure, configure tooling, and define the data models for the CMS.

- [x] **1.1: Initialize Next.js Project**: Execute the create-next-app script with specific options for a modern, TypeScript, and Tailwind CSS project.
- [x] **1.2: Initialize Git Repository**: Navigate into the project directory and initialize a new Git repository.
- [ ] **1.3: Define Sanity.io Schemas**: In your separate Sanity Studio project, define the data structures for 'Projects', 'Articles', and 'Skills'.

## Phase 2: Headless CMS Integration
**Goal:** Connect the Next.js frontend to the Sanity.io backend to enable data fetching.

- [x] **2.1: Install Sanity Client**: Install the necessary package to fetch data from Sanity.
- [x] **2.2: Configure Sanity Client**: Create a reusable Sanity client instance.
- [x] **2.3: Define GROQ Queries**: Centralize all data queries in a single file.
- [x] **2.4: Set Environment Variables**: Store sensitive keys and project-specific configuration.

## Phase 3: Core UI Component & Layout Development
**Goal:** Build the foundational, reusable UI elements and establish the main site layout.

- [x] **3.1: Create Core Layout Components**: Build the main Navigation and Footer components.
- [x] **3.2: Create Reusable Project Card Component**: Create a reusable component for displaying a project summary.
- [x] **3.3: Update Root Layout**: Integrate the Navbar, Footer, and a placeholder for Analytics into the root layout that wraps all pages.

## Phase 4: Page Construction
**Goal:** Build out all the individual pages of the website by fetching and displaying data from the CMS.

- [x] **4.1: Build the Homepage**: Assemble the main landing page, featuring a hero section and a grid of the latest projects.
- [x] **4.2: Build the Project Gallery Page**: Create a dedicated page to list all projects.
- [x] **4.3: Build the Dynamic Project Detail Page**: Create a dynamic page template for individual project details. It uses generateStaticParams for build-time optimization.
- [x] **4.4: Build the Articles Page**: Create a page to list published articles with links to external sources.
- [x] **4.5: Build the About Page**: Create the About page with a biography and a categorized list of skills.
- [x] **4.6: Add CV File**: Place a professionally formatted PDF resume in the `public` directory so it can be downloaded.

## Phase 5: Final SEO & Analytics Integration
**Goal:** Implement sitewide technical SEO features and finalize analytics integration.

- [x] **5.1: Create Google Analytics Component**: Create a client component to load the Google Analytics tracking script.
- [x] **5.2: Generate Dynamic Sitemap**: Dynamically generate a `sitemap.xml` file on every build for better search engine crawling.

## Phase 6: Deployment
**Goal:** Push the final code to a repository and deploy it to a global hosting platform.

- [ ] **6.1: Push to GitHub**: Commit all code changes and push the repository to GitHub.
- [ ] **6.2: Deploy on Vercel**: Import the repository into Vercel and configure it for automatic deployment.

## Phase 7: Validation & Quality Assurance
**Goal:** Perform final checks on the live site to ensure performance, accessibility, and correctness.

- [ ] **7.1: Performance Audit**: Use Google's Lighthouse tool to audit the live production URL. (Target: 95+ score)
- [ ] **7.2: Accessibility Check**: Run the Lighthouse accessibility audit. (Target: 100 score)
- [ ] **7.3: Responsive Design Testing**: Test layout on mobile, tablet, and desktop viewports.
- [ ] **7.4: Content & Functionality Verification**: Click every link, button, and download on the site.

## Phase 8: UI/UX Enhancements
**Goal:** Improve the visual appeal, interactivity, and overall user experience of the website.

- [x] **8.1: Implement Theme Toggle**: Added a light/dark mode theme toggle with persistence.
- [x] **8.2: Add Animations**: Implemented subtle fade-in and staggered animations on page load.
- [x] **8.3: Optimize Images**: Replaced `<img>` tags with Next.js `<Image>` for performance.
- [x] **8.4: Add Skeleton Loaders**: Implemented skeleton loading states for data fetching.
- [x] **8.5: Implement Filtering**: Added tag-based filtering for projects.
- [x] **8.6: Add Back to Top Button**: Implemented a button for easy navigation on long pages.
- [x] **8.7: Dynamic Open Graph Images**: Added dynamic OG images for better social sharing.
- [x] **8.8: Custom Favicon**: Provided instructions for adding a custom favicon. 