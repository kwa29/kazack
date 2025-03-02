'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Define the category type
interface Category {
  id: number
  name: string
  image: string
  count: number
  description: string
  emoji: string
  bgColor: string
}

// Mock data for categories with more detailed descriptions
const categories: Category[] = [
  { 
    id: 1, 
    name: 'Organic', 
    image: '/images/organic-bananas.jpg', 
    count: 12,
    description: 'Grown without synthetic pesticides or fertilizers, our organic bananas are environmentally friendly and free from harmful chemicals.',
    emoji: '🌱',
    bgColor: 'bg-green-50'
  },
  { 
    id: 2, 
    name: 'Exotic', 
    image: '/images/exotic-bananas.jpg', 
    count: 8,
    description: 'Discover unique banana varieties from around the world, featuring distinctive flavors, colors, and textures not found in common varieties.',
    emoji: '✨',
    bgColor: 'bg-purple-50'
  },
  { 
    id: 3, 
    name: 'Specialty', 
    image: '/images/specialty-bananas.jpg', 
    count: 15,
    description: 'Premium banana varieties selected for their exceptional taste, appearance, or nutritional properties.',
    emoji: '⭐',
    bgColor: 'bg-amber-50'
  },
  { 
    id: 4, 
    name: 'Cooking', 
    image: '/images/cooking-bananas.jpg', 
    count: 7,
    description: 'Starchier varieties perfect for cooking, including plantains and green bananas that are ideal for savory dishes.',
    emoji: '🍳',
    bgColor: 'bg-yellow-50'
  },
]

export default function CategoriesPage() {
  return (
    <div className="container py-10">
      {/* Page Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Banana Categories</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our extensive selection of premium bananas, organized by category to help you find exactly what you&apos;re looking for.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {categories.map((category) => (
          <Card key={category.id} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-5 h-full">
              {/* Category Image - Left side on desktop, top on mobile */}
              <div className={`md:col-span-2 relative h-48 md:h-full ${category.bgColor}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-6xl mb-2">{category.emoji}</span>
                    <span className="text-6xl">🍌</span>
                  </div>
                </div>
              </div>
              
              {/* Category Content - Right side on desktop, bottom on mobile */}
              <div className="md:col-span-3 p-6 flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                <p className="text-sm text-muted-foreground mb-2">{category.count} products</p>
                <p className="mb-6 flex-grow">{category.description}</p>
                <div className="mt-auto">
                  <Link href={`/products?category=${category.name.toLowerCase()}`}>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
                      Browse {category.name} Bananas
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="bg-muted/30 rounded-lg p-8 mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Bananas?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-background rounded-lg p-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🌱</span>
            </div>
            <h3 className="font-medium mb-2">Sustainably Sourced</h3>
            <p className="text-sm text-muted-foreground">All our bananas are ethically and sustainably sourced from trusted farmers around the world.</p>
          </div>
          <div className="bg-background rounded-lg p-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🚚</span>
            </div>
            <h3 className="font-medium mb-2">Fresh Delivery</h3>
            <p className="text-sm text-muted-foreground">We ensure our bananas are delivered at the perfect ripeness, ready for you to enjoy.</p>
          </div>
          <div className="bg-background rounded-lg p-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🔍</span>
            </div>
            <h3 className="font-medium mb-2">Quality Guaranteed</h3>
            <p className="text-sm text-muted-foreground">Every banana is inspected for quality, ensuring you receive only the best products.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="font-medium mb-2">What&apos;s the difference between cooking and eating bananas?</h3>
            <p className="text-muted-foreground">Cooking bananas, like plantains, are starchier and less sweet than dessert bananas. They&apos;re typically cooked before eating and used in savory dishes.</p>
          </div>
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="font-medium mb-2">How should I store my bananas?</h3>
            <p className="text-muted-foreground">For ripe bananas, store at room temperature and consume within a few days. To slow ripening, keep them in the refrigerator (the skin will darken but the fruit inside will remain fresh).</p>
          </div>
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="font-medium mb-2">Are all your bananas organic?</h3>
            <p className="text-muted-foreground">We offer both organic and conventionally grown bananas. Our organic selection is clearly labeled and certified by recognized organic certification bodies.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 