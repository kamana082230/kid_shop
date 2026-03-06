import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X, Home, Store, Phone } from 'lucide-react'
import { useCart } from '../context/CartContext'

function Header() {
  const { cartCount } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Shop', path: '/shop', icon: Store },
    { name: 'Contact', path: '/contact', icon: Phone },
  ]

  return (
    <header className="bg-gradient-to-r from-primary via-secondary to-accent sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-4xl">🎀</div>
            <h1 className="text-2xl font-bold text-dark hidden sm:block">KidShop</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link, idx) => {
              const Icon = link.icon
              return (
                <Link
                  key={idx}
                  to={link.path}
                  className="flex items-center gap-2 text-dark font-semibold hover:opacity-80 transition-opacity"
                >
                  <Icon size={20} />
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Cart Icon & Mobile Menu Toggle */}
          <div className="flex gap-4 items-center">
            <Link
              to="/cart"
              className="relative p-2 bg-dark bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
            >
              <ShoppingCart size={24} className="text-dark" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 bg-dark bg-opacity-20 rounded-lg"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            {navLinks.map((link, idx) => {
              const Icon = link.icon
              return (
                <Link
                  key={idx}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 text-dark font-semibold hover:opacity-70 py-2 px-4 bg-white bg-opacity-50 rounded-lg"
                >
                  <Icon size={20} />
                  {link.name}
                </Link>
              )
            })}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
