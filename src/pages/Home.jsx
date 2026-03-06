import { Link } from 'react-router-dom'
import { Zap, Gift, Award, Truck } from 'lucide-react'

// Professional Toy-themed Background
function ToyBackgroundSVG() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#FFFFFF', stopOpacity: 1}} />
          <stop offset="50%" style={{stopColor: '#F8F9FA', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#E8ECEF', stopOpacity: 1}} />
        </linearGradient>
        <linearGradient id="blockGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#FF6B6B', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#E85555', stopOpacity: 1}} />
        </linearGradient>
        <linearGradient id="blockGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#4ECDC4', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#43B7AD', stopOpacity: 1}} />
        </linearGradient>
        <linearGradient id="blockGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#FFE66D', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#F5D85E', stopOpacity: 1}} />
        </linearGradient>
        <linearGradient id="blockGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#95E1D3', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#7FD4C1', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      
      {/* Base background */}
      <rect width="1200" height="600" fill="url(#bgGradient)"/>
      
      {/* Subtle grid pattern */}
      <g stroke="#E0E0E0" strokeWidth="1" opacity="0.3">
        <line x1="0" y1="100" x2="1200" y2="100"/>
        <line x1="0" y1="200" x2="1200" y2="200"/>
        <line x1="0" y1="300" x2="1200" y2="300"/>
        <line x1="0" y1="400" x2="1200" y2="400"/>
        <line x1="0" y1="500" x2="1200" y2="500"/>
      </g>
      
      {/* Modern Toy Blocks - Left Side */}
      <g opacity="0.85">
        {/* Stack 1 */}
        <rect x="80" y="280" width="70" height="70" fill="url(#blockGrad1)" rx="6"/>
        <rect x="80" y="210" width="70" height="70" fill="url(#blockGrad2)" rx="6"/>
        <rect x="80" y="140" width="70" height="70" fill="url(#blockGrad3)" rx="6"/>
        
        {/* Stack 2 */}
        <rect x="170" y="280" width="70" height="70" fill="url(#blockGrad2)" rx="6"/>
        <rect x="170" y="210" width="70" height="70" fill="url(#blockGrad4)" rx="6"/>
        <rect x="170" y="140" width="70" height="70" fill="url(#blockGrad1)" rx="6"/>
      </g>
      
      {/* Modern Toy Blocks - Right Side */}
      <g opacity="0.85">
        {/* Stack 3 */}
        <rect x="1050" y="280" width="70" height="70" fill="url(#blockGrad3)" rx="6"/>
        <rect x="1050" y="210" width="70" height="70" fill="url(#blockGrad1)" rx="6"/>
        <rect x="1050" y="140" width="70" height="70" fill="url(#blockGrad4)" rx="6"/>
        
        {/* Stack 4 */}
        <rect x="960" y="280" width="70" height="70" fill="url(#blockGrad4)" rx="6"/>
        <rect x="960" y="210" width="70" height="70" fill="url(#blockGrad2)" rx="6"/>
        <rect x="960" y="140" width="70" height="70" fill="url(#blockGrad3)" rx="6"/>
      </g>
      
      {/* Decorative Shapes - Top Left */}
      <circle cx="120" cy="50" r="20" fill="#FF6B6B" opacity="0.6"/>
      <circle cx="180" cy="60" r="15" fill="#4ECDC4" opacity="0.5"/>
      <circle cx="140" cy="80" r="12" fill="#FFE66D" opacity="0.6"/>
      
      {/* Decorative Shapes - Top Right */}
      <circle cx="1050" cy="45" r="22" fill="#95E1D3" opacity="0.6"/>
      <circle cx="1100" cy="70" r="16" fill="#FF6B6B" opacity="0.5"/>
      <circle cx="1080" cy="90" r="14" fill="#4ECDC4" opacity="0.6"/>
      
      {/* Bottom decorative shape - left */}
      <path d="M 100 500 Q 150 480 200 500 L 200 520 Q 150 540 100 520 Z" fill="#FFE66D" opacity="0.4"/>
      
      {/* Bottom decorative shape - right */}
      <path d="M 1000 510 Q 1050 490 1100 510 L 1100 535 Q 1050 550 1000 535 Z" fill="#4ECDC4" opacity="0.4"/>
      
      {/* Floating circles accent */}
      <circle cx="600" cy="100" r="8" fill="#FF6B6B" opacity="0.3"/>
      <circle cx="620" cy="130" r="6" fill="#4ECDC4" opacity="0.3"/>
      <circle cx="580" cy="120" r="7" fill="#FFE66D" opacity="0.3"/>
      
      {/* Center accent line */}
      <line x1="600" y1="0" x2="600" y2="600" stroke="#FFE66D" strokeWidth="1" opacity="0.15"/>
    </svg>
  )
}

function Home() {
  const features = [
    {
      icon: Gift,
      title: 'Fun Toys',
      description: 'Exciting toys and games for kids of all ages'
    },
    {
      icon: Award,
      title: 'Quality Products',
      description: 'All products are tested for safety and quality'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick shipping to your doorstep'
    },
    {
      icon: Zap,
      title: 'Special Offers',
      description: 'Great discounts and seasonal sales'
    },
  ]

  const categories = [
    { name: 'Toys', emoji: '🧸', color: 'from-pink-300 to-pink-500' },
    { name: 'Clothing', emoji: '👕', color: 'from-blue-300 to-blue-500' },
    { name: 'Educational', emoji: '📚', color: 'from-green-300 to-green-500' },
    { name: 'Sports', emoji: '⚽', color: 'from-yellow-300 to-yellow-500' },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Parent',
      message: 'Amazing selection of toys! My kids love it.',
      avatar: '👩'
    },
    {
      name: 'Emily Davis',
      role: 'Parent',
      message: 'Great quality and fast shipping. Highly recommend!',
      avatar: '👵'
    },
    {
      name: 'James Wilson',
      role: 'Parent',
      message: 'Best kids shop online. Very responsive customer service.',
      avatar: '👨'
    },
  ]

  return (
    <div className="fade-in">
      {/* Hero Section with Professional Toy Background */}
      <section className="py-24 md:py-48 relative overflow-hidden bg-gradient-to-b from-blue-50 to-transparent">
        {/* Custom SVG Background */}
        <ToyBackgroundSVG />
        
        {/* Subtle Dark Overlay for Text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-dark mb-6 drop-shadow-lg">
              Welcome to KidShop
            </h1>
            <p className="text-xl md:text-2xl text-dark/80 mb-10 leading-relaxed">
              Your ultimate destination for quality toys, clothes, and everything for kids!
            </p>
            <Link 
              to="/shop" 
              className="btn-primary text-lg inline-block hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Shopping Now 🛍️
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-dark mb-12">
            Why Choose KidShop?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="card p-6 text-center hover:shadow-xl transition-all"
                >
                  <Icon
                    size={48}
                    className="mx-auto text-secondary mb-4"
                  />
                  <h3 className="text-xl font-bold text-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-dark mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <Link
                key={idx}
                to="/shop"
                className={`bg-gradient-to-br ${category.color} rounded-xl p-8 text-center text-white font-bold text-xl hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300 cursor-pointer`}
              >
                <div className="text-5xl mb-4">{category.emoji}</div>
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-dark mb-12">
            What Parents Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="card p-6 text-center hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{testimonial.avatar}</div>
                <h3 className="text-lg font-bold text-dark mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
                <p className="text-gray-700 italic">"{testimonial.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Special Offer This Month! 🎁
          </h2>
          <p className="text-xl text-white mb-8">
            Get 20% OFF on your first purchase with code: KIDSFUN20
          </p>
          <Link to="/shop" className="btn-secondary text-lg">
            Grab Your Deals 💝
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
