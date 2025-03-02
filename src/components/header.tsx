'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ShoppingCart, Menu, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useCartStore } from '@/lib/cart'

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState('')
  const router = useRouter()
  const cartItems = useCartStore((state) => state.items)
  
  // Calculate total items in cart
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsScrolled(offset > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-yellow-500">Banana</span>
              <span>Zon</span>
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/products"
              className="text-sm font-medium hover:text-yellow-500 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium hover:text-yellow-500 transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-yellow-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-yellow-500 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <form onSubmit={handleSearchSubmit} className="relative hidden md:flex items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search bananas..."
              className="w-full rounded-md pl-8 md:w-[200px] lg:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              suppressHydrationWarning
            />
            <Button 
              type="submit" 
              size="sm" 
              variant="ghost" 
              className="absolute right-0 h-full px-3"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
          <Link href="/cart">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-xs font-medium text-white">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight">
                    <span className="text-yellow-500">Banana</span>
                    <span>Zon</span>
                  </span>
                </Link>
                <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                  <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search bananas..."
                    className="w-full rounded-md pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/products"
                    className="text-sm font-medium hover:text-yellow-500 transition-colors"
                  >
                    Products
                  </Link>
                  <Link
                    href="/categories"
                    className="text-sm font-medium hover:text-yellow-500 transition-colors"
                  >
                    Categories
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-medium hover:text-yellow-500 transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm font-medium hover:text-yellow-500 transition-colors"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
} 