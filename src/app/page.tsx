'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useCartStore } from '@/lib/cart'

// Define the product type
interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
}

// Mock data for featured products
const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Organic Cavendish Bananas',
    description: 'Sweet and creamy classic bananas, perfect for everyday enjoyment.',
    price: 4.99,
    image: '/images/cavendish.jpg',
    category: 'Organic',
  },
  {
    id: 2,
    name: 'Red Bananas',
    description: 'Sweeter than yellow bananas with a hint of raspberry flavor.',
    price: 6.99,
    image: '/images/red-banana.jpg',
    category: 'Exotic',
  },
  {
    id: 3,
    name: 'Baby Bananas (Manzano)',
    description: 'Small, sweet bananas with a slight apple flavor.',
    price: 7.99,
    image: '/images/baby-banana.jpg',
    category: 'Specialty',
  },
  {
    id: 4,
    name: 'Plantains',
    description: 'Starchy cooking bananas, perfect for frying or baking.',
    price: 5.99,
    image: '/images/plantain.jpg',
    category: 'Cooking',
  },
]

// Mock data for categories
const categories = [
  { id: 1, name: 'Organic', image: '/images/organic.jpg', count: 12 },
  { id: 2, name: 'Exotic', image: '/images/exotic.jpg', count: 8 },
  { id: 3, name: 'Specialty', image: '/images/specialty.jpg', count: 15 },
  { id: 4, name: 'Cooking', image: '/images/cooking.jpg', count: 7 },
]

export default function Home() {
  // Get the addItem function from the cart store
  const addItem = useCartStore((state) => state.addItem)

  // Handle adding a product to the cart
  const handleAddToCart = (product: Product) => {
    addItem(product, 1)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-yellow-50 py-20 md:py-32">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-6 max-w-xl">
            <Badge className="bg-yellow-500 hover:bg-yellow-600">New Season</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Premium Bananas Delivered to Your Door
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover our wide selection of sustainably grown, organic bananas from around the world.
              Fresh, delicious, and delivered right to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600">
                Shop Now
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-md aspect-square">
            {/* Placeholder for hero image - in production, use a real image */}
            <div className="w-full h-full rounded-full bg-yellow-300 flex items-center justify-center">
              <span className="text-8xl">🍌</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Bananas</h2>
              <p className="text-muted-foreground mt-2">Our most popular banana varieties</p>
            </div>
            <Link href="/products" className="text-yellow-500 hover:underline mt-4 md:mt-0">
              View All Bananas →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-square relative bg-muted">
                  {/* Placeholder for product image - in production, use real images */}
                  <div className="w-full h-full flex items-center justify-center bg-yellow-100">
                    <span className="text-6xl">🍌</span>
                  </div>
                </div>
                <CardHeader className="p-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">
                      {product.category}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-2 h-10">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <span className="font-bold">${product.price.toFixed(2)}</span>
                  <Button 
                    size="sm" 
                    className="bg-yellow-500 hover:bg-yellow-600"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/categories/${category.name.toLowerCase()}`}>
                <Card className="overflow-hidden transition-all hover:shadow-md h-full">
                  <div className="aspect-video relative bg-muted">
                    {/* Placeholder for category image - in production, use real images */}
                    <div className="w-full h-full flex items-center justify-center bg-yellow-100">
                      <span className="text-4xl">🍌</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-lg">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} products</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Why Choose BananaZon?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Get your bananas delivered within 24 hours of harvesting for maximum freshness.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Organic & Sustainable</h3>
              <p className="text-muted-foreground">
                All our bananas are grown using sustainable farming practices and are certified organic.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <span className="text-2xl">💯</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                Not satisfied with your bananas? We offer a 100% satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Go Bananas?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who have made BananaZon their go-to source for premium bananas.
          </p>
          <Button size="lg" className="bg-white text-yellow-500 hover:bg-yellow-50">
            Start Shopping Now
          </Button>
        </div>
      </section>
    </div>
  )
}
