'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the newsletter subscription
    console.log('Subscribing email:', email)
    // Reset the form
    setEmail('')
    // Show success message or handle errors
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-2" suppressHydrationWarning>
      <div className="flex space-x-2">
        <Input
          type="email"
          placeholder="Enter your email"
          className="max-w-[200px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          suppressHydrationWarning
        />
        <Button 
          type="submit" 
          variant="default" 
          className="bg-yellow-500 hover:bg-yellow-600"
          suppressHydrationWarning
        >
          Subscribe
        </Button>
      </div>
    </form>
  )
} 