import Link from 'next/link'

export default function AboutPage() {
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
              <li className="font-medium text-foreground">About Us</li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About BananaZon</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The world&apos;s premier destination for premium banana products.
            </p>
          </div>

          {/* Company Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              {/* Placeholder for company image - in production, use real images */}
              <div className="w-full h-full flex items-center justify-center bg-yellow-100">
                <span className="text-9xl">🍌</span>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2024, BananaZon began with a simple mission: to provide the highest quality bananas to customers worldwide. What started as a small family business has grown into the leading online marketplace for premium banana products.
              </p>
              <p className="text-muted-foreground">
                We work directly with sustainable farms across the globe to ensure that every banana we sell meets our strict quality standards. Our commitment to ethical sourcing means that farmers receive fair compensation for their work, and environmentally friendly farming practices are always prioritized.
              </p>
              <p className="text-muted-foreground">
                Today, BananaZon offers a wide variety of banana products, from classic Cavendish bananas to exotic varieties rarely found in traditional markets. We&apos;re proud to serve customers who share our passion for this versatile and nutritious fruit.
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div className="pt-10 border-t">
            <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-muted/30 rounded-lg">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  We partner with farms that use sustainable growing practices to minimize environmental impact and preserve natural resources for future generations.
                </p>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Fair Trade</h3>
                <p className="text-muted-foreground">
                  We believe in fair compensation for farmers and workers throughout our supply chain, ensuring that everyone benefits from our business.
                </p>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality. Every banana we sell meets our strict standards for taste, appearance, and nutritional value.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="pt-10 border-t">
            <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="aspect-square bg-muted rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <div className="w-full h-full flex items-center justify-center bg-yellow-100/50">
                    <span className="text-4xl">👨‍💼</span>
                  </div>
                </div>
                <h3 className="font-bold">John Banana</h3>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
              </div>
              <div className="text-center">
                <div className="aspect-square bg-muted rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <div className="w-full h-full flex items-center justify-center bg-yellow-100/50">
                    <span className="text-4xl">👩‍💼</span>
                  </div>
                </div>
                <h3 className="font-bold">Sarah Plantain</h3>
                <p className="text-sm text-muted-foreground">COO</p>
              </div>
              <div className="text-center">
                <div className="aspect-square bg-muted rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <div className="w-full h-full flex items-center justify-center bg-yellow-100/50">
                    <span className="text-4xl">👨‍🌾</span>
                  </div>
                </div>
                <h3 className="font-bold">Miguel Cavendish</h3>
                <p className="text-sm text-muted-foreground">Head of Sourcing</p>
              </div>
              <div className="text-center">
                <div className="aspect-square bg-muted rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <div className="w-full h-full flex items-center justify-center bg-yellow-100/50">
                    <span className="text-4xl">👩‍🔬</span>
                  </div>
                </div>
                <h3 className="font-bold">Lisa Manzano</h3>
                <p className="text-sm text-muted-foreground">Quality Control</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 