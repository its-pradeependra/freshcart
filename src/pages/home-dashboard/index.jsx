import React from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import HeroSlider from './components/HeroSlider';
import CategoryCards from './components/CategoryCards';
import FeaturedBrands from './components/FeaturedBrands';
import PopularProducts from './components/PopularProducts';
import RecentlyPurchased from './components/RecentlyPurchased';

const HomeDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="mb-12">
          <HeroSlider />
        </section>

        {/* Categories Section */}
        <section className="mb-12">
          <CategoryCards />
        </section>

        {/* Featured Brands Section */}
        <section className="mb-12">
          <FeaturedBrands />
        </section>

        {/* Popular Products Section */}
        <section className="mb-12">
          <PopularProducts />
        </section>

        {/* Recently Purchased Section */}
        <section className="mb-12">
          <RecentlyPurchased />
        </section>

        {/* Newsletter Signup */}
        <section className="mb-12">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h2 className="text-2xl font-heading font-bold mb-2">
              Stay Updated with Fresh Deals
            </h2>
            <p className="font-body mb-6 opacity-90">
              Get exclusive offers, seasonal recipes, and fresh product updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:flex-1 px-4 py-3 rounded-lg text-text-primary font-body focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="w-full sm:w-auto bg-white text-primary font-body font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <span className="font-heading font-bold text-xl">FreshCart</span>
              </div>
              <p className="text-gray-300 font-body text-sm leading-relaxed">
                Your trusted partner for fresh groceries delivered fast. Quality products, competitive prices, exceptional service.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/product-categories-browse" className="text-gray-300 hover:text-white transition-colors">Categories</a></li>
                <li><a href="/shopping-cart" className="text-gray-300 hover:text-white transition-colors">Cart</a></li>
                <li><a href="/order-history-tracking" className="text-gray-300 hover:text-white transition-colors">Orders</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wishlist</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Delivery Info</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📞 1-800-FRESH-99</p>
                <p>✉️ support@freshcart.com</p>
                <p>📍 123 Fresh Street, City, ST 12345</p>
                <p>🕒 Mon-Sun: 6AM - 11PM</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300 text-sm font-caption">
              © {new Date().getFullYear()} FreshCart. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeDashboard;