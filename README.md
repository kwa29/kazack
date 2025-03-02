# BananaZon 🍌

BananaZon is a modern e-commerce platform specializing in premium banana products. Built with Next.js, TypeScript, and Tailwind CSS, it offers a seamless shopping experience for banana enthusiasts.

## Features

- **Product Browsing**: Browse a wide variety of banana products with detailed descriptions
- **Product Categories**: Filter products by category, price range, and rating
- **Product Details**: View detailed product information, nutrition facts, and customer reviews
- **Shopping Cart**: Add products to cart, adjust quantities, and proceed to checkout
- **Responsive Design**: Fully responsive layout that works on all devices

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS, Shadcn UI
- **State Management**: Zustand
- **Styling**: Tailwind CSS with custom components
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bananazon.git
   cd bananazon
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/app`: Next.js app router pages and layouts
- `/components`: Reusable UI components
- `/lib`: Utility functions and custom hooks
- `/public`: Static assets like images and icons
- `/styles`: Global styles and theme configuration

## Key Components

- **Header**: Navigation and cart summary
- **Product Cards**: Displays product information with add to cart functionality
- **Product Detail**: Comprehensive product information with quantity selector
- **Cart**: Shopping cart with item management
- **Cart Store**: Global state management for the shopping cart

## Cart Functionality

The cart functionality is implemented using Zustand for state management. The cart store provides the following features:

- Add items to cart
- Remove items from cart
- Update item quantities
- Calculate subtotal and total
- Persist cart data in localStorage

## Future Enhancements

- User authentication and account management
- Payment processing integration
- Order history and tracking
- Wishlist functionality
- Product reviews and ratings
- Admin dashboard for product management

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Lucide Icons](https://lucide.dev/)
