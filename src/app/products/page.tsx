import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Mock data for products
const products = [
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

// Mock data for categories
const categories = [
  { id: 1, name: 'All', count: products.length },
  { id: 2, name: 'Organic', count: products.filter(p => p.category === 'Organic').length },
  { id: 3, name: 'Exotic', count: products.filter(p => p.category === 'Exotic').length },
  { id: 4, name: 'Specialty', count: products.filter(p => p.category === 'Specialty').length },
  { id: 5, name: 'Cooking', count: products.filter(p => p.category === 'Cooking').length },
]

export default function ProductsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">All Bananas</h1>
          <p className="text-muted-foreground mt-2">
            Browse our selection of premium bananas from around the world.
          </p>
        </div>

        {/* Filters and Products Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 space-y-6">
            {/* Categories */}
            <div className="space-y-4">
              <h3 className="font-medium">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center justify-between">
                    <Link 
                      href={category.name === 'All' ? '/products' : `/products?category=${category.name.toLowerCase()}`}
                      className="text-sm hover:underline"
                    >
                      {category.name}
                    </Link>
                    <Badge variant="outline" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-4">
              <h3 className="font-medium">Price Range</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Link href="/products?price=under5" className="text-sm hover:underline">
                    Under $5
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <Link href="/products?price=5to10" className="text-sm hover:underline">
                    $5 to $10
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <Link href="/products?price=over10" className="text-sm hover:underline">
                    Over $10
                  </Link>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="space-y-4">
              <h3 className="font-medium">Rating</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Link href="/products?rating=4plus" className="text-sm hover:underline">
                    4+ Stars
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <Link href="/products?rating=3plus" className="text-sm hover:underline">
                    3+ Stars
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-medium">{products.length}</span> products
              </p>
              <select className="text-sm border rounded-md p-2">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden transition-all hover:shadow-md">
                  <Link href={`/products/${product.id}`}>
                    <div className="aspect-square relative bg-muted">
                      {/* Placeholder for product image - in production, use real images */}
                      <div className="w-full h-full flex items-center justify-center bg-yellow-100">
                        <span className="text-6xl">🍌</span>
                      </div>
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
                    <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600">
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10">
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" disabled>
                  &lt;
                </Button>
                <Button variant="outline" size="icon" className="bg-yellow-500 text-white hover:bg-yellow-600">
                  1
                </Button>
                <Button variant="outline" size="icon">
                  2
                </Button>
                <Button variant="outline" size="icon">
                  3
                </Button>
                <Button variant="outline" size="icon">
                  &gt;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 