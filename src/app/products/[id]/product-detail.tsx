'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useCartStore } from '@/lib/cart'
import { BananaImage, BananaBunch } from '@/components/banana-image'

// Define the Product interface here instead of importing it from page.tsx
interface Review {
  id: number
  user: string
  rating: number
  comment: string
  date: string
}

interface Nutrition {
  calories: number
  protein: string
  fat: string
  carbs: string
  fiber: string
  sugar: string
}

interface Product {
  id: number
  name: string
  description: string
  longDescription?: string
  price: number
  image: string
  category: string
  rating: number
  reviews?: Review[]
  nutrition?: Nutrition
  origin?: string
  organic?: boolean
  inStock?: boolean
  quantity?: number
}

// This is the client component that uses React hooks
export function ProductDetail({ 
  product, 
  relatedProducts 
}: { 
  product: Product, 
  relatedProducts: Product[] 
}) {
  // State for quantity
  const [quantity, setQuantity] = useState(1)
  
  // Get cart functions from store
  const addItem = useCartStore((state) => state.addItem)

  // Handle quantity changes
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }
  
  // Handle add to cart for the main product
  const handleAddToCart = () => {
    addItem(product, quantity)
  }
  
  // Handle add to cart for related products
  const handleAddRelatedToCart = (relatedProduct: Product) => {
    addItem(relatedProduct, 1)
  }

  return (
    <div className="flex justify-center w-full bg-background">
      <div className="w-full max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col space-y-10">
          {/* Breadcrumbs */}
          <nav className="flex text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li className="text-muted-foreground">/</li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground">
                  Products
                </Link>
              </li>
              <li className="text-muted-foreground">/</li>
              <li className="font-medium text-foreground">{product.name}</li>
            </ol>
          </nav>

          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="aspect-square bg-muted rounded-lg overflow-hidden mx-auto md:mx-0 max-w-md w-full">
              {/* Replace emoji placeholder with BananaBunch component for main product */}
              <BananaBunch 
                variety={product.name}
                size="xl"
                className="w-full h-full"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6 flex flex-col justify-center">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                    {product.category}
                  </Badge>
                  {product.organic && (
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      Organic
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex items-center space-x-2 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        {i < Math.floor(product.rating) ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews?.length || 0} reviews)
                  </span>
                </div>
              </div>

              <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>

              <p className="text-muted-foreground">{product.longDescription || product.description}</p>

              {product.origin && (
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-24 text-sm font-medium">Origin:</span>
                    <span>{product.origin}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-24 text-sm font-medium">Availability:</span>
                    <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                  <button 
                    onClick={decreaseQuantity} 
                    className="px-3 py-2 text-lg"
                  >
                    -
                  </button>
                  <span className="px-3 py-2">{quantity}</span>
                  <button 
                    onClick={increaseQuantity} 
                    className="px-3 py-2 text-lg"
                  >
                    +
                  </button>
                </div>
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600"
                  onClick={() => handleAddToCart()}
                  disabled={!product.inStock}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>

          {/* Nutrition Information */}
          {product.nutrition && (
            <div className="border rounded-lg p-4 sm:p-6 mx-auto w-full">
              <h2 className="text-xl font-bold mb-4 text-center sm:text-left">Nutrition Information</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
                <div className="text-center p-3 bg-muted/50 rounded-md">
                  <div className="text-sm text-muted-foreground">Calories</div>
                  <div className="font-bold">{product.nutrition.calories}</div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-md">
                  <div className="text-sm text-muted-foreground">Protein</div>
                  <div className="font-bold">{product.nutrition.protein}</div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-md">
                  <div className="text-sm text-muted-foreground">Fat</div>
                  <div className="font-bold">{product.nutrition.fat}</div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-md">
                  <div className="text-sm text-muted-foreground">Carbs</div>
                  <div className="font-bold">{product.nutrition.carbs}</div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-md">
                  <div className="text-sm text-muted-foreground">Fiber</div>
                  <div className="font-bold">{product.nutrition.fiber}</div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-md">
                  <div className="text-sm text-muted-foreground">Sugar</div>
                  <div className="font-bold">{product.nutrition.sugar}</div>
                </div>
              </div>
            </div>
          )}

          {/* Reviews */}
          {product.reviews && product.reviews.length > 0 && (
            <div className="w-full">
              <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Customer Reviews</h2>
              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">{review.user}</div>
                      <div className="text-sm text-muted-foreground">{review.date}</div>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">
                          {i < review.rating ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Products */}
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {relatedProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden transition-all hover:shadow-md flex flex-col h-full">
                  <Link href={`/products/${product.id}`} className="block">
                    <div className="aspect-square relative bg-muted">
                      {/* Replace emoji placeholder with BananaImage component for related products */}
                      <BananaImage 
                        variety={product.name}
                        size="lg"
                        className="w-full h-full"
                      />
                    </div>
                  </Link>
                  <CardHeader className="p-4 flex-grow">
                    <Link href={`/products/${product.id}`} className="block">
                      <CardTitle className="text-lg hover:text-yellow-500 transition-colors">
                        {product.name}
                      </CardTitle>
                    </Link>
                    <CardDescription className="line-clamp-2 mt-2">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <span className="font-bold">${product.price.toFixed(2)}</span>
                    <Button 
                      size="sm" 
                      className="bg-yellow-500 hover:bg-yellow-600"
                      onClick={() => handleAddRelatedToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 