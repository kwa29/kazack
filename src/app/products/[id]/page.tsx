// This is a Server Component
import { notFound } from 'next/navigation'
import { ProductDetail } from './product-detail'

// Define the correct types for the page props
interface Params {
  id: string
}

interface PageProps {
  params: Promise<Params>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

// Define product types
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

export interface Product {
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

// Mock data for products
const products: Product[] = [
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
const relatedProducts: Product[] = [
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

// This is the main page component that handles the async params
export default async function ProductPage(props: PageProps) {
  // Await and extract the params
  const params = await props.params
  const productId = parseInt(params.id)
  const product = products.find(p => p.id === productId)
  
  if (!product) {
    notFound()
  }
  
  // Render the client component with the resolved data
  return <ProductDetail product={product} relatedProducts={relatedProducts} />
} 