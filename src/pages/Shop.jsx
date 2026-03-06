import { useState } from 'react'
import { Filter } from 'lucide-react'
import ProductCard from '../components/ProductCard'

function Shop() {
  // Sample Products Data
  const allProducts = [
    {
      id: 1,
      name: 'Colorful Building Blocks Set',
      emoji: '🧱',
      price: 24.99,
      discount: 10,
      category: 'Toys',
      rating: 5,
      reviews: 128,
      description: 'Safe, non-toxic building blocks for creative play',
      stock: 15
    },
    {
      id: 2,
      name: 'Plush Teddy Bear',
      emoji: '🧸',
      price: 19.99,
      discount: 0,
      category: 'Toys',
      rating: 4,
      reviews: 95,
      description: 'Soft and cuddly teddy bear for younger kids',
      stock: 20
    },
    {
      id: 3,
      name: 'Kids T-Shirt Pack',
      emoji: '👕',
      price: 29.99,
      discount: 15,
      category: 'Clothing',
      rating: 4,
      reviews: 67,
      description: 'Comfortable cotton t-shirts with fun designs',
      stock: 30
    },
    {
      id: 4,
      name: 'Math Game',
      emoji: '🎲',
      price: 14.99,
      discount: 5,
      category: 'Educational',
      rating: 4,
      reviews: 52,
      description: 'Fun way to learn math and numbers',
      stock: 10
    },
    {
      id: 5,
      name: 'Soccer Ball',
      emoji: '⚽',
      price: 22.99,
      discount: 0,
      category: 'Sports',
      rating: 5,
      reviews: 84,
      description: 'Kids friendly soccer ball for outdoor fun',
      stock: 25
    },
    {
      id: 6,
      name: 'Puzzle Game',
      emoji: '🧩',
      price: 16.99,
      discount: 20,
      category: 'Educational',
      rating: 5,
      reviews: 110,
      description: 'Challenging but fun puzzle for all ages',
      stock: 18
    },
  ]

  const categories = ['All', 'Toys', 'Clothing', 'Educational', 'Sports']
  const priceRanges = [
    { label: 'Under ₹1000', min: 0, max: 1000 },
    { label: '₹1000 - ₹2500', min: 1000, max: 2500 },
    { label: '₹2500 - ₹5000', min: 2500, max: 5000 },
    { label: 'Over ₹5000', min: 5000, max: Infinity },
  ]

  // State Management
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('popular')

  // Filter and Sort Logic using map and ternary operators
  const filteredProducts = allProducts
    .filter(product =>
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      (selectedPrice === null || (product.price >= selectedPrice.min && product.price <= selectedPrice.max)) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'newest':
          return b.id - a.id
        case 'rating':
          return b.rating - a.rating
        default:
          return 0
      }
    })

  return (
    <div className="fade-in bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-dark mb-4">Shop Our Products</h1>
          <p className="text-lg text-gray-600">
            Discover our wide range of toys, clothes, and educational items for kids
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-secondary bg-white"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-2">
                <Filter size={20} />
                Filters
              </h3>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="font-bold text-dark mb-4">Category</h4>
                <div className="space-y-2">
                  {categories.map((category, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all font-semibold ${
                        selectedCategory === category
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-dark hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="font-bold text-dark mb-4">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map((range, idx) => (
                    <button
                      key={idx}
                      onClick={() =>
                        setSelectedPrice(
                          selectedPrice?.min === range.min
                            ? null
                            : range
                        )
                      }
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all font-semibold ${
                        selectedPrice?.min === range.min
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-dark hover:bg-gray-200'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters Button */}
              {(selectedCategory !== 'All' || selectedPrice !== null) && (
                <button
                  onClick={() => {
                    setSelectedCategory('All')
                    setSelectedPrice(null)
                  }}
                  className="w-full btn-secondary text-white"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort Dropdown */}
            <div className="mb-8 flex justify-between items-center">
              <p className="text-dark font-semibold">
                Showing {filteredProducts.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-dark mb-2">
                  No Products Found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your filters or search term
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
