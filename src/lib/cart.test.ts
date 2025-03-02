import { beforeEach, describe, expect, it } from 'vitest'
import { useCartStore } from './cart'

// Mock product for testing
const mockProduct = {
  id: 1,
  name: 'Test Banana',
  description: 'A banana for testing',
  price: 4.99,
  image: '/images/test.jpg',
  category: 'Test',
}

describe('Cart Store', () => {
  // Reset the store before each test
  beforeEach(() => {
    const { clearCart } = useCartStore.getState()
    clearCart()
  })

  it('should add an item to the cart', () => {
    const { addItem, items } = useCartStore.getState()
    
    // Add an item to the cart
    addItem(mockProduct, 1)
    
    // Check if the item was added
    expect(items.length).toBe(1)
    expect(items[0].id).toBe(mockProduct.id)
    expect(items[0].quantity).toBe(1)
  })

  it('should update quantity when adding the same item', () => {
    const { addItem, items } = useCartStore.getState()
    
    // Add an item to the cart
    addItem(mockProduct, 1)
    
    // Add the same item again
    addItem(mockProduct, 2)
    
    // Check if the quantity was updated
    expect(items.length).toBe(1)
    expect(items[0].quantity).toBe(3)
  })

  it('should remove an item from the cart', () => {
    const { addItem, removeItem, items } = useCartStore.getState()
    
    // Add an item to the cart
    addItem(mockProduct, 1)
    
    // Remove the item
    removeItem(mockProduct.id)
    
    // Check if the item was removed
    expect(items.length).toBe(0)
  })

  it('should update item quantity', () => {
    const { addItem, updateQuantity, items } = useCartStore.getState()
    
    // Add an item to the cart
    addItem(mockProduct, 1)
    
    // Update the quantity
    updateQuantity(mockProduct.id, 5)
    
    // Check if the quantity was updated
    expect(items[0].quantity).toBe(5)
  })

  it('should calculate the correct subtotal', () => {
    const { addItem, getSubtotal } = useCartStore.getState()
    
    // Add items to the cart
    addItem(mockProduct, 2) // 2 * $4.99 = $9.98
    addItem({...mockProduct, id: 2, price: 6.99}, 1) // 1 * $6.99 = $6.99
    
    // Calculate the expected subtotal
    const expectedSubtotal = (2 * 4.99) + (1 * 6.99)
    
    // Check if the subtotal is correct
    expect(getSubtotal()).toBeCloseTo(expectedSubtotal)
  })

  it('should calculate the correct item count', () => {
    const { addItem, getItemCount } = useCartStore.getState()
    
    // Add items to the cart
    addItem(mockProduct, 2)
    addItem({...mockProduct, id: 2}, 3)
    
    // Check if the item count is correct
    expect(getItemCount()).toBe(5)
  })

  it('should clear the cart', () => {
    const { addItem, clearCart, items } = useCartStore.getState()
    
    // Add items to the cart
    addItem(mockProduct, 1)
    addItem({...mockProduct, id: 2}, 1)
    
    // Clear the cart
    clearCart()
    
    // Check if the cart is empty
    expect(items.length).toBe(0)
  })
}) 