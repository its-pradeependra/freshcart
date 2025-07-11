import React from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import HeroSlider from './components/HeroSlider';
import CategoryCards from './components/CategoryCards';
import FeaturedBrands from './components/FeaturedBrands';
import PopularProducts from './components/PopularProducts';
import RecentlyPurchased from './components/RecentlyPurchased';
import Footer from '../../components/ui/Footer';

const HomeDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
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
      <Footer />
    </div>
  );
};

export default HomeDashboard;