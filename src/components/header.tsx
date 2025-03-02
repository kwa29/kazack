'use client'

import Link from 'next/link'
import { ShoppingCart, Search, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Header() {
  // Using a simple variable instead of state since we're not updating it in this component
  const cartCount = 0

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-yellow-500">🍌 BananaZon</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/products" className="text-sm font-medium transition-colors hover:text-yellow-500">
            All Bananas
          </Link>
          <Link href="/categories" className="text-sm font-medium transition-colors hover:text-yellow-500">
            Categories
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-yellow-500">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-yellow-500">
            Contact
          </Link>
        </nav>

        {/* Search, Cart, and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:flex relative w-full max-w-sm items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search bananas..."
              className="w-full rounded-md pl-8 md:w-[200px] lg:w-[300px]"
            />
          </div>

          {/* Cart */}
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 text-[10px] font-medium text-white">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/products" className="text-sm font-medium transition-colors hover:text-yellow-500">
                  All Bananas
                </Link>
                <Link href="/categories" className="text-sm font-medium transition-colors hover:text-yellow-500">
                  Categories
                </Link>
                <Link href="/about" className="text-sm font-medium transition-colors hover:text-yellow-500">
                  About Us
                </Link>
                <Link href="/contact" className="text-sm font-medium transition-colors hover:text-yellow-500">
                  Contact
                </Link>
                <div className="relative w-full items-center mt-4">
                  <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search bananas..."
                    className="w-full rounded-md pl-8"
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
} 