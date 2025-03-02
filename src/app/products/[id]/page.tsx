import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

// Define the correct types for the page props
type Params = Promise<{ id: string }>

type ProductPageProps = {
  params: Params
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

// Mock data for products
const products = [
  {
    id: 1,
    name: 'Organic Cavendish Bananas',
    description: 'Sweet and creamy classic bananas, perfect for everyday enjoyment.',
    longDescription: 'Our Organic Cavendish Bananas are grown in the fertile soils of Ecuador, where the perfect climate produces the sweetest, creamiest bananas. These classic yellow bananas are perfect for everyday enjoyment, whether eaten fresh, added to smoothies, or used in baking. Each bunch contains 5-7 bananas at the perfect stage of ripeness, ready to enjoy or to ripen further at home. Certified organic and sustainably grown, these bananas are free from pesticides and chemicals.',
    price: 4.99,
    image: '/images/cavendish.jpg',
    category: 'Organic',
    rating: 4.8,
    reviews: [
      { id: 1, user: 'BananaLover123', rating: 5, comment: 'These are the best bananas I\'ve ever had! So sweet and creamy.', date: '2024-02-15' },
      { id: 2, user: 'FruitFanatic', rating: 4, comment: 'Great quality bananas, arrived perfectly ripe.', date: '2024-02-10' },
      { id: 3, user: 'HealthyEater', rating: 5, comment: 'Love that these are organic. Will definitely buy again!', date: '2024-01-28' },
    ],
    nutrition: {
      calories: 105,
      protein: '1.3g',
      fat: '0.4g',
      carbs: '27g',
      fiber: '3.1g',
      sugar: '14g',
    },
    origin: 'Ecuador',
    organic: true,
    inStock: true,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Red Bananas',
    description: 'Sweeter than yellow bananas with a hint of raspberry flavor.',
    longDescription: 'Red Bananas are a unique and exotic variety that offers a sweeter taste than traditional yellow bananas, with subtle hints of raspberry. Their striking reddish-purple skin makes them a beautiful addition to fruit displays, while their creamy flesh has a rich, sweet flavor. Slightly smaller than Cavendish bananas, Red Bananas are perfect for eating fresh or adding to desserts for a unique flavor profile. Sourced from sustainable farms in Central America.',
    price: 6.99,
    image: '/images/red-banana.jpg',
    category: 'Exotic',
    rating: 4.5,
    reviews: [
      { id: 1, user: 'ExoticFruitFan', rating: 5, comment: 'Amazing flavor! So much sweeter than regular bananas.', date: '2024-02-18' },
      { id: 2, user: 'CulinaryExplorer', rating: 4, comment: 'Love the raspberry notes. Great in smoothies!', date: '2024-02-05' },
    ],
    nutrition: {
      calories: 90,
      protein: '1.1g',
      fat: '0.3g',
      carbs: '22g',
      fiber: '2.8g',
      sugar: '12g',
    },
    origin: 'Costa Rica',
    organic: false,
    inStock: true,
    quantity: 1,
  },
]

// Mock data for related products
const relatedProducts = [
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
]

export default async function ProductPage({ params }: ProductPageProps) {
  // Get the ID from params
  const { id } = await params
  const productId = parseInt(id)
  const product = products.find(p => p.id === productId)
  
  if (!product) {
    notFound()
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
              {/* Placeholder for product image - in production, use real images */}
              <div className="w-full h-full flex items-center justify-center bg-yellow-100">
                <span className="text-9xl">🍌</span>
              </div>
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
                  <button className="px-3 py-2 text-lg">-</button>
                  <span className="px-3 py-2">{product.quantity || 1}</span>
                  <button className="px-3 py-2 text-lg">+</button>
                </div>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600">
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
                      {/* Placeholder for product image - in production, use real images */}
                      <div className="w-full h-full flex items-center justify-center bg-yellow-100">
                        <span className="text-6xl">🍌</span>
                      </div>
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
                    <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600">
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