import { Heart, Mail, Phone, MapPin } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { title: 'About Us', items: ['Our Story', 'Mission', 'Team'] },
    { title: 'Support', items: ['Contact Us', 'FAQ', 'Shipping Info'] },
    { title: 'Legal', items: ['Privacy Policy', 'Terms & Conditions', 'Refund Policy'] },
  ]

  const socialLinks = [
    { icon: '📧', name: 'Email' },
    { icon: '📱', name: 'Instagram' },
    { icon: '👍', name: 'Facebook' },
  ]

  return (
    <footer className="bg-dark text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="fade-in">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🎀</div>
              <h3 className="text-xl font-bold">KidShop</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Your one-stop shop for quality toys, clothes, and accessories for kids of all ages.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <button
                  key={idx}
                  className="text-2xl hover:transform hover:scale-110 transition-transform"
                  title={social.name}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="fade-in">
              <h4 className="font-bold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-secondary" />
              <span>+977 9801234567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-secondary" />
              <span>support@kidshop.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-secondary" />
              <span>123 Kids Street, Joy City</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; {currentYear} KidShop. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-300 mt-4 md:mt-0">
            Made with <Heart size={16} className="text-primary" /> for kids
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
