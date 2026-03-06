import { useState } from 'react'
import { Mail, Phone, MapPin, Send, User } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      info: '+977 9801234567',
      subtext: 'Available Mon-Fri 9AM-6PM'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'support@kidshop.com',
      subtext: 'Reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      info: '123 Kids Street, Ithari',
      subtext: 'Visit our physical store'
    }
  ]

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We offer 30-day returns on most items. Products must be in original condition with packaging.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days. Express shipping available for 2-3 days.'
    },
    {
      question: 'Are all products safe for kids?',
      answer: 'Yes! All our products undergo rigorous safety testing and meet international standards.'
    },
    {
      question: 'Do you offer bulk discounts?',
      answer: 'Yes! Contact us at support@kidshop.com for custom bulk orders and discounts.'
    },
    {
      question: 'Is there a warranty on products?',
      answer: 'Most toys and products come with a 1-year manufacturer warranty.'
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes! You will receive a tracking number via email once your order ships.'
    }
  ]

  return (
    <div className="fade-in bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-dark mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Contact us for any questions!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon
            return (
              <div
                key={idx}
                className="card p-8 text-center hover:shadow-lg transition-all"
              >
                <Icon
                  size={48}
                  className="mx-auto text-secondary mb-4"
                />
                <h3 className="text-xl font-bold text-dark mb-2">
                  {method.title}
                </h3>
                <p className="text-lg font-semibold text-primary mb-2">
                  {method.info}
                </p>
                <p className="text-gray-600 text-sm">
                  {method.subtext}
                </p>
              </div>
            )
          })}
        </div>

        {/* Contact Form and FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="card p-8">
            <h2 className="text-3xl font-bold text-dark mb-6">Send us a Message</h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  Thank You!
                </h3>
                <p className="text-green-700">
                  We've received your message and will get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    <User size={16} className="inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    <Mail size={16} className="inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us more..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 text-lg"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold text-dark mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="card p-4 cursor-pointer group"
                >
                  <summary className="font-bold text-dark flex justify-between items-center group-open:text-primary transition-colors">
                    <span>{faq.question}</span>
                    <span className="transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-3 pt-3 border-t border-gray-200">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
       
      </div>
    </div>
  )
}

export default Contact
