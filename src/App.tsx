import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Mail,
  ShoppingBag,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import Logo from "./assets/Rafat.png";
// Bag categories and data
const categories = ["All", "Totes", "Crossbody", "Clutches", "Shoulder Bags"];

const bags = [
  {
    id: 1,
    name: "The Victoria Tote",
    category: "Totes",
    description: "Elegant leather tote with gold hardware",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=1200",
    price: "2,850",
    details: {
      material: "Premium Italian Leather",
      dimensions: '14"L x 11"H x 6"D',
      features: [
        "Gold-tone hardware",
        "Interior zip pocket",
        "Laptop compartment",
        "Adjustable straps",
      ],
      care: "Professional leather cleaning recommended",
    },
  },
  {
    id: 2,
    name: "Luna Crossbody",
    category: "Crossbody",
    description: "Minimalist crossbody in soft leather",
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=1200",
    price: "1,650",
    details: {
      material: "Soft Calfskin Leather",
      dimensions: '9"L x 6"H x 3"D',
      features: [
        "Adjustable strap",
        "Multiple card slots",
        "External slip pocket",
        "Magnetic closure",
      ],
      care: "Avoid water exposure, clean with leather conditioner",
    },
  },
  {
    id: 3,
    name: "Evening Pearl",
    category: "Clutches",
    description: "Sophisticated evening clutch with pearl details",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1200",
    price: "1,250",
    details: {
      material: "Satin & Pearl Embellishments",
      dimensions: '10"L x 5"H x 2"D',
      features: [
        "Pearl chain strap",
        "Silk lining",
        "Hidden magnetic closure",
        "Interior pocket",
      ],
      care: "Professional cleaning only",
    },
  },
  {
    id: 4,
    name: "Sofia Shoulder Bag",
    category: "Shoulder Bags",
    description: "Classic shoulder bag with modern twist",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1200",
    price: "2,150",
    details: {
      material: "Premium Grain Leather",
      dimensions: '12"L x 8"H x 4"D',
      features: [
        "Signature lock closure",
        "Multiple compartments",
        "Detachable shoulder strap",
        "Metal feet base",
      ],
      care: "Regular leather conditioning recommended",
    },
  },
];

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin mb-4"></div>
        <h2 className="text-xl font-light tracking-wider animate-pulse">
          LUXE
        </h2>
      </div>
    </div>
  );
}

function ContactPage({ bag, onClose }) {
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-light">Inquire About</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <img
                src={bag.image}
                alt={bag.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-medium">{bag.name}</h3>
              <p className="text-gray-600">${bag.price}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <Clock size={20} />
                <span>Response time: Within 24 hours</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin size={20} />
                <span>Location: New York Showroom</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone size={20} />
                <span>Private Appointment Available</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Contact Form</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBag, setSelectedBag] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const filteredBags =
    selectedCategory === "All"
      ? bags
      : bags.filter((bag) => bag.category === selectedCategory);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#faf9f8]">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* <h1 className="text-2xl font-light tracking-wider animate-fadeIn">
              LUXE
            </h1> */}
            <img
              src={Logo}
              alt="Logo"
              className="w-14 tracking-wider animate-fadeIn"
            />
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-sm tracking-wide transition-colors animate-fadeIn`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span
                    className={
                      selectedCategory === category
                        ? "text-black border-b-2 border-black pb-1"
                        : "text-gray-500 hover:text-black"
                    }
                  >
                    {category}
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <div className="space-y-2">
                <span
                  className={`block w-8 h-0.5 bg-gray-600 transition-transform ${
                    isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                ></span>
                <span
                  className={`block w-8 h-0.5 bg-gray-600 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-8 h-0.5 bg-gray-600 transition-transform ${
                    isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-64" : "max-h-0"
          } overflow-hidden bg-white`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-sm tracking-wide text-gray-500 hover:text-black"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-4 animate-fadeIn">
            Timeless Elegance
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto animate-fadeIn"
            style={{ animationDelay: "200ms" }}
          >
            Discover our curated collection of sophisticated handbags, where
            classic design meets contemporary style.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBags.map((bag, index) => (
            <div
              key={bag.id}
              className="group relative overflow-hidden cursor-pointer animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => setSelectedBag(bag)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={bag.image}
                  alt={bag.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full bg-white bg-opacity-90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium">{bag.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {bag.description}
                      </p>
                    </div>
                    <span className="text-lg font-medium">${bag.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Modal */}
      {selectedBag && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center py-12   p-4">
          <div className="bg-white max-w-4xl w-full rounded-lg overflow-hidden relative animate-fadeIn">
            <button
              onClick={() => setSelectedBag(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square">
                <img
                  src={selectedBag.image}
                  alt={selectedBag.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light mb-2">{selectedBag.name}</h3>
                <p className="text-xl font-medium mb-4">${selectedBag.price}</p>
                <p className="text-gray-600 mb-6">{selectedBag.description}</p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Details</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Material: {selectedBag.details.material}</li>
                      <li>• Dimensions: {selectedBag.details.dimensions}</li>
                      {selectedBag.details.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedBag(null);
                      setShowContact(selectedBag);
                    }}
                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag size={20} />
                    <span>Inquire About This Bag</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Page */}
      {showContact && (
        <ContactPage bag={showContact} onClose={() => setShowContact(false)} />
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Email: contact@luxe.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Location: New York, NY</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-200 rounded-l focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button className="px-6 py-2 bg-black text-white rounded-r hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
