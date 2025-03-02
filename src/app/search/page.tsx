'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useCartStore } from '@/lib/cart'
import { BananaImage } from '@/components/banana-image'
import { Suspense } from 'react'
import { Search } from 'lucide-react'

// Define the product type
interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
}

// Mock data for products (same as in products page)
const products: Product[] = [
  {
    id: 1,
    name: 'Organic Cavendish Bananas',
    description: 'Sweet and creamy classic bananas, perfect for everyday enjoyment.',
    price: 4.99,
    image: '/images/cavendish.jpg',
    category: 'Organic',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Red Bananas',
    description: 'Sweeter than yellow bananas with a hint of raspberry flavor.',
    price: 6.99,
    image: '/images/red-banana.jpg',
    category: 'Exotic',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Baby Bananas (Manzano)',
    description: 'Small, sweet bananas with a slight apple flavor.',
    price: 7.99,
    image: '/images/baby-banana.jpg',
    category: 'Specialty',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Plantains',
    description: 'Starchy cooking bananas, perfect for frying or baking.',
    price: 5.99,
    image: '/images/plantain.jpg',
    category: 'Cooking',
    rating: 4.6,
  },
  {
    id: 5,
    name: 'Lady Finger Bananas',
    description: 'Small, sweet bananas with a honey-like flavor.',
    price: 8.99,
    image: '/images/lady-finger.jpg',
    category: 'Specialty',
    rating: 4.9,
  },
  {
    id: 6,
    name: 'Blue Java Bananas',
    description: 'Known as "Ice Cream Bananas" for their creamy, vanilla custard flavor.',
    price: 12.99,
    image: '/images/blue-java.jpg',
    category: 'Exotic',
    rating: 4.8,
  },
  {
    id: 7,
    name: 'Burro Bananas',
    description: 'Squared-shaped bananas with a lemony flavor.',
    price: 7.49,
    image: '/images/burro.jpg',
    category: 'Specialty',
    rating: 4.3,
  },
  {
    id: 8,
    name: 'Green Cooking Bananas',
    description: 'Unripe bananas perfect for savory dishes.',
    price: 4.49,
    image: '/images/green-cooking.jpg',
    category: 'Cooking',
    rating: 4.5,
  },
]

// Search content component
function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  
  // Get the addItem function from the cart store
  const addItem = useCartStore((state) => state.addItem)

  // Handle adding a product to the cart
  const handleAddToCart = (product: Product) => {
    addItem(product, 1)
  }
  
  // Filter products based on search query
  const searchResults = products.filter(product => {
    const searchTerms = query.toLowerCase().split(' ')
    
    // Check if any search term is found in product name, description, or category
    return searchTerms.some(term => 
      product.name.toLowerCase().includes(term) || 
      product.description.toLowerCase().includes(term) || 
      product.category.toLowerCase().includes(term)
    )
  })

  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Search Results</h1>
          <p className="text-muted-foreground mt-2">
            {searchResults.length} results for &ldquo;{query}&rdquo;
          </p>
        </div>

        {/* Search Results */}
        <div className="flex flex-col space-y-6">
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((product) => (
                <Card key={product.id} className="overflow-hidden transition-all hover:shadow-md">
                  <Link href={`/products/${product.id}`}>
                    <div className="aspect-square relative bg-muted">
                      <BananaImage 
                        variety={product.name}
                        size="lg"
                        className="w-full h-full"
                      />
                    </div>
                  </Link>
                  <CardHeader className="p-4">
                    <div className="flex justify-between items-start">
                      <Link href={`/products/${product.id}`}>
                        <CardTitle className="text-lg hover:text-yellow-500 transition-colors">
                          {product.name}
                        </CardTitle>
                      </Link>
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
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-medium mb-2">No results found</h2>
              <p className="text-muted-foreground mb-6">
                We couldn&apos;t find any bananas matching &ldquo;{query}&rdquo;. Try a different search term or browse our categories.
              </p>
              <Link href="/products">
                <Button className="bg-yellow-500 hover:bg-yellow-600">
                  Browse All Bananas
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Loading fallback component
function SearchLoading() {
  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-6">
        <div>
          <div className="h-8 w-48 bg-muted animate-pulse rounded-md"></div>
          <div className="h-4 w-96 bg-muted animate-pulse rounded-md mt-2"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="aspect-square bg-muted animate-pulse"></div>
              <div className="p-4">
                <div className="h-5 w-32 bg-muted animate-pulse rounded-md mb-2"></div>
                <div className="h-4 w-full bg-muted animate-pulse rounded-md"></div>
                <div className="h-4 w-3/4 bg-muted animate-pulse rounded-md mt-1"></div>
                <div className="flex justify-between items-center mt-4">
                  <div className="h-5 w-12 bg-muted animate-pulse rounded-md"></div>
                  <div className="h-8 w-24 bg-muted animate-pulse rounded-md"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Main search page component with Suspense
export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchContent />
    </Suspense>
  )
} 