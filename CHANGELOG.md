# Changelog

All notable changes to the BananaZon project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.1] - 2024-03-04

### Fixed
- Fixed non-functional buttons on the homepage by adding proper navigation
- Added navigation links to "Shop Now" and "Learn More" buttons in the hero section
- Added navigation link to "Start Shopping Now" button in the CTA section

## [0.4.0] - 2024-03-04

### Added
- Implemented functional search feature across the application
- Created dedicated search results page with filtering logic
- Added search form submission handling in the header component
- Implemented responsive search UI for both desktop and mobile views

## [0.3.9] - 2024-03-04

### Fixed
- Fixed Next.js build error related to useSearchParams() by adding proper Suspense boundaries
- Restructured products page to separate components that use client-side hooks
- Added loading skeleton UI for products page during initial load
- Improved compliance with Next.js App Router best practices

## [0.3.8] - 2024-03-04

### Changed
- Improved responsive layout with better content centering
- Added max-width constraint to main layout for consistent display on large screens
- Enhanced container class with responsive padding and proper centering
- Optimized layout for all device sizes from mobile to large desktop

## [0.3.7] - 2024-03-04

### Fixed
- Fixed hydration mismatch errors caused by browser extensions like Dashlane
- Added suppressHydrationWarning to form elements, inputs, and buttons in Header and NewsletterForm components
- Improved compatibility with password manager browser extensions
- Fixed date rendering in Footer component to prevent hydration warnings

## [0.3.6] - 2024-03-04

### Fixed
- Fixed category filters on the products page to properly filter products
- Implemented filtering by category, price range, and rating
- Added visual indicators for active filters
- Improved user experience with "no results" message and clear filters option

## [0.3.5] - 2024-03-04

### Fixed
- Fixed TypeScript errors in BananaImage component by adding proper type definitions
- Improved type safety with explicit VarietyKey type and Record type usage
- Enhanced findBestMatch function with generic type parameters

## [0.3.4] - 2024-03-04

### Fixed
- Fixed BananaImage component to better handle product variety names that don't exactly match icon mappings
- Improved icon selection logic with a more flexible matching approach

## [0.3.3] - 2024-03-04

### Changed
- Updated BananaImage component to use Lucide icons instead of emojis
- Added variety-specific icons and colors for different banana types
- Improved visual presentation with appropriate icons for each banana variety

## [0.3.2] - 2024-03-04

### Fixed
- Fixed hydration error in the footer component by moving the newsletter subscription form to a client component
- Improved compatibility with browser extensions like Dashlane that modify the DOM

## [0.3.1] - 2024-03-04

### Fixed
- Fixed type error in product detail page by removing invalid export and properly defining types

## [0.3.0] - 2024-03-04

### Added
- Categories page with detailed category information
- Prepared for real banana images with updated BananaImage component
- Category-specific styling and emojis for visual distinction

### Changed
- Updated BananaImage component to support real images (with emoji placeholders until images are available)
- Enhanced visual presentation of categories with custom background colors and emojis

## [0.2.1] - 2024-03-03

### Fixed
- Fixed type error in product detail page by separating server and client components
- Fixed hydration error in header component by properly handling client-side cart state
- Improved compatibility with Next.js 15 by correctly handling async route parameters

## [0.2.0] - 2024-03-02

### Added
- Cart functionality using Zustand for state management
- Add to cart capability on all product pages
- Cart page with item management (add, remove, update quantities)
- Cart count indicator in the header
- Persistent cart storage using localStorage
- About Us page with company information
- Contact page with contact form and information

### Changed
- Updated product detail page to include quantity selector
- Improved responsive design across all pages
- Enhanced product cards with add to cart functionality

### Fixed
- Fixed dynamic route parameter handling in product detail page

## [0.1.0] - 2024-03-01

### Added
- Initial project setup with Next.js, TypeScript, and Tailwind CSS
- Basic page structure (home, products, product detail, cart)
- Header component with navigation
- Footer component with site information
- Product listing page with filtering options
- Product detail page with product information
- Basic cart page structure
- Mock data for products and categories
- Responsive design for all screen sizes 