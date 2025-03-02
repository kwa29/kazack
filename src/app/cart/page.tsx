'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trash2, Plus, Minus } from 'lucide-react'

// Mock data for cart items
const initialCartItems = [
  {
    id: 1,
    name: 'Organic Cavendish Bananas',
    description: 'Sweet and creamy classic bananas, perfect for everyday enjoyment.',
    price: 4.99,
    image: '/images/cavendish.jpg',
    category: 'Organic',
    quantity: 2,
  },
  {
    id: 2,
    name: 'Red Bananas',
    description: 'Sweeter than yellow bananas with a hint of raspberry flavor.',
    price: 6.99,
    image: '/images/red-banana.jpg',
    category: 'Exotic',
    quantity: 1,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 0 ? 5.99 : 0
  const total = subtotal + shipping

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🍌</div>
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            Looks like you haven&apos;t added any bananas to your cart yet.
          </p>
          <Link href="/products">
            <Button className="bg-yellow-500 hover:bg-yellow-600">
              Browse Products
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-40 h-40 bg-muted">
                    {/* Placeholder for product image - in production, use real images */}
                    <div className="w-full h-full flex items-center justify-center bg-yellow-100">
                      <span className="text-6xl">🍌</span>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex flex-col sm:flex-row justify-between mb-4">
                      <div>
                        <Badge className="mb-2 bg-yellow-100 text-yellow-800 border-yellow-200">
                          {item.category}
                        </Badge>
                        <h3 className="text-lg font-medium">
                          <Link href={`/products/${item.id}`} className="hover:text-yellow-500 transition-colors">
                            {item.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                      <div className="text-right mt-4 sm:mt-0">
                        <div className="font-bold">${item.price.toFixed(2)}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border rounded-md">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
                  Proceed to Checkout
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
} 