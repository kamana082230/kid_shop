import { Star, ShoppingCart, Heart } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

// Product Card Component with Props
function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [isFavorite, setIsFavorite] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    alert(`${product.name} added to cart! ✨`)
  }

  const isOnSale = product.discount > 0
  const salePrice = product.price - (product.price * product.discount) / 100

  return (
    <div className="card fade-in hover:transform hover:scale-105 transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48 bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center overflow-hidden group">
        <span className="text-6xl">{product.emoji}</span>

        {/* Sale Badge */}
        {isOnSale && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
            -{product.discount}%
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`absolute top-3 left-3 p-2 rounded-full transition-all ${
            isFavorite
              ? 'bg-red-500 text-white'
              : 'bg-white text-gray-600 hover:text-red-500'
          }`}
        >
          <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-dark mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Category Badge */}
        <span className="inline-block mb-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
          {product.category}
        </span>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < product.rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }
            />
          ))}
          <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-primary">
            ₹{isOnSale ? salePrice.toFixed(2) : product.price}
          </span>
          {isOnSale && (
            <span className="text-sm text-gray-500 line-through">
              ₹{product.price}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Stock Status */}
        <p className={`text-sm font-semibold mb-4 ${
          product.stock > 0
            ? 'text-green-600'
            : 'text-red-600'
        }`}>
          {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className={`w-full py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
            product.stock > 0
              ? 'btn-primary hover:scale-105'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart size={18} />
          {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
