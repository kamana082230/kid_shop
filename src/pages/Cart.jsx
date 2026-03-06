import { Trash2, Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart()

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingCost = subtotal > 2500 ? 0 : 500
  const tax = subtotal * 0.1
  const total = subtotal + shippingCost + tax

  const handleRemoveItem = (id) => {
    removeFromCart(id)
  }

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, newQuantity)
  }

  return (
    <div className="fade-in bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-dark mb-12">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-6 space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0"
                  >
                    {/* Item Image */}
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg flex items-center justify-center text-5xl flex-shrink-0">
                      {item.emoji}
                    </div>

                    {/* Item Details */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-dark mb-2">
                        {item.name}
                      </h3>
                      <p className="text-2xl font-bold text-primary">
                        ₹{item.price.toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100"
                          >
                            <Minus size={18} />
                          </button>
                          <span className="px-4 font-semibold text-dark">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100"
                          >
                            <Plus size={18} />
                          </button>
                        </div>

                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-2">Subtotal</p>
                      <p className="text-2xl font-bold text-dark">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <div className="mt-6">
                <Link
                  to="/shop"
                  className="inline-block btn-secondary"
                >
                  Continue Shopping 🛍️
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 sticky top-24">
                <h3 className="text-2xl font-bold text-dark mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-dark">
                    <span>Subtotal:</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-dark">
                    <span>Shipping:</span>
                    <span className={shippingCost === 0 ? 'text-green-600 font-bold' : ''}>
                      {shippingCost === 0 ? 'FREE' : `₹${shippingCost.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="flex justify-between text-dark">
                    <span>Tax (10%):</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>

                  {shippingCost === 0 && (
                    <p className="text-sm text-green-600 font-semibold">
                      ✨ Free shipping on orders over ₹2500!
                    </p>
                  )}
                </div>

                <div className="border-t-2 border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-2xl font-bold text-dark">
                    <span>Total:</span>
                    <span className="text-primary">₹{total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary mb-2"
                  />
                  <button className="w-full py-2 bg-gray-200 text-dark rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                    Apply Code
                  </button>
                </div>

                {/* Checkout Button */}
                <button className="w-full btn-primary text-lg mb-4">
                  Proceed to Checkout 💳
                </button>

                {/* Payment Methods */}
                <div className="text-center space-y-2 text-sm text-gray-600">
                  <p>We Accept:</p>
                  <p className="text-lg">💳 💰 🏦</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-7xl mb-6">🛒</div>
            <h2 className="text-4xl font-bold text-dark mb-4">Your Cart is Empty</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's add some fun toys and products to your cart!
            </p>
            <Link to="/shop" className="btn-primary text-lg">
              Start Shopping 🎉
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
