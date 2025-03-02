import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'

export default function ContactPage() {
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
              <li className="font-medium text-foreground">Contact</li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions or feedback? We&apos;d love to hear from you!
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is your message about?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-xl mt-1">📍</div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">
                        123 Banana Street<br />
                        Fruit District<br />
                        Tropical City, TC 98765
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-xl mt-1">📞</div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-xl mt-1">✉️</div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">
                        info@bananazon.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-xl mt-1">🕒</div>
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Find Us</h2>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-yellow-100/50">
                    <span className="text-4xl">🗺️</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Interactive map would be displayed here in production.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="pt-10 border-t">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-bold">How long does shipping take?</h3>
                <p className="text-muted-foreground">
                  Standard shipping typically takes 2-3 business days. Express shipping is available for next-day delivery in select areas.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Do you ship internationally?</h3>
                <p className="text-muted-foreground">
                  Yes, we ship to select international destinations. Shipping times and fees vary by location.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">What is your return policy?</h3>
                <p className="text-muted-foreground">
                  If you&apos;re not satisfied with your purchase, contact us within 24 hours of delivery for a refund or replacement.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">How do I track my order?</h3>
                <p className="text-muted-foreground">
                  Once your order ships, you&apos;ll receive a tracking number via email that you can use to monitor your delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 