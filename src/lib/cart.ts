import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Define the cart item type
export interface CartItem {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  quantity: number
}

// Define the cart store state and actions
interface CartState {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getItemCount: () => number
  getSubtotal: () => number
}

// Create the cart store with persistence
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      // Add an item to the cart
      addItem: (item, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id)
          
          if (existingItem) {
            // If item already exists, update quantity
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
            }
          } else {
            // If item doesn't exist, add it
            return {
              items: [...state.items, { ...item, quantity }],
            }
          }
        })
      },
      
      // Remove an item from the cart
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }))
      },
      
      // Update the quantity of an item
      updateQuantity: (id, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }))
      },
      
      // Clear the cart
      clearCart: () => {
        set({ items: [] })
      },
      
      // Get the total number of items in the cart
      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },
      
      // Get the subtotal of all items in the cart
      getSubtotal: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )
      },
    }),
    {
      name: 'bananazon-cart', // Name for localStorage
    }
  )
) 