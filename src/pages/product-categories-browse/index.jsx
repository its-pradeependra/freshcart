import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/ui/Header';

import Button from '../../components/ui/Button';
import FilterChip from './components/FilterChip';
import SortDropdown from './components/SortDropdown';

import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import CategoryBreadcrumb from './components/CategoryBreadcrumb';

const ProductCategoriesBrowse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);
  const [currentSort, setCurrentSort] = useState('relevance');
  const [filters, setFilters] = useState({
    priceRange: { min: '', max: '' },
    brands: [],
    dietary: [],
    rating: [],
    inStock: false
  });

  const category = searchParams.get('category') || '';
  const subcategory = searchParams.get('subcategory') || '';

  // Mock product data
  const mockProducts = [
    {
      id: 1,
      name: "Fresh Organic Bananas",
      price: 2.99,
      originalPrice: 3.49,
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400",
      rating: 4.5,
      reviewCount: 128,
      unit: "per lb",
      inStock: true,
      isOrganic: true,
      discount: 14,
      brand: "Fresh Valley",
      category: "Fruits",
      subcategory: "Tropical Fruits",
      isWishlisted: false
    },
    {
      id: 2,
      name: "Whole Grain Bread",
      price: 3.49,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
      rating: 4.2,
      reviewCount: 89,
      unit: "per loaf",
      inStock: true,
      isOrganic: false,
      discount: 0,
      brand: "Organic Farm",
      category: "Bakery",
      subcategory: "Bread",
      isWishlisted: true
    },
    {
      id: 3,
      name: "Fresh Salmon Fillet",
      price: 12.99,
      originalPrice: 15.99,
      image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400",
      rating: 4.8,
      reviewCount: 67,
      unit: "per lb",
      inStock: false,
      isOrganic: false,
      discount: 19,
      brand: "Ocean Fresh",
      category: "Seafood",
      subcategory: "Fish",
      isWishlisted: false
    },
    {
      id: 4,
      name: "Organic Baby Spinach",
      price: 4.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400",
      rating: 4.6,
      reviewCount: 156,
      unit: "5 oz bag",
      inStock: true,
      isOrganic: true,
      discount: 0,
      brand: "Green Choice",
      category: "Vegetables",
      subcategory: "Leafy Greens",
      isWishlisted: false
    },
    {
      id: 5,
      name: "Greek Yogurt Plain",
      price: 5.49,
      originalPrice: 6.99,
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400",
      rating: 4.4,
      reviewCount: 203,
      unit: "32 oz",
      inStock: true,
      isOrganic: false,
      discount: 21,
      brand: "Nature\'s Best",
      category: "Dairy",
      subcategory: "Yogurt",
      isWishlisted: false
    },
    {
      id: 6,
      name: "Avocados - Hass",
      price: 1.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400",
      rating: 4.3,
      reviewCount: 94,
      unit: "each",
      inStock: true,
      isOrganic: true,
      discount: 0,
      brand: "Farm Fresh",
      category: "Fruits",
      subcategory: "Tropical Fruits",
      isWishlisted: true
    },
    {
      id: 7,
      name: "Free Range Eggs",
      price: 4.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400",
      rating: 4.7,
      reviewCount: 178,
      unit: "dozen",
      inStock: true,
      isOrganic: false,
      discount: 0,
      brand: "Pure Harvest",
      category: "Dairy",
      subcategory: "Eggs",
      isWishlisted: false
    },
    {
      id: 8,
      name: "Organic Quinoa",
      price: 8.99,
      originalPrice: 10.99,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
      rating: 4.5,
      reviewCount: 112,
      unit: "2 lb bag",
      inStock: true,
      isOrganic: true,
      discount: 18,
      brand: "Healthy Living",
      category: "Pantry",
      subcategory: "Grains",
      isWishlisted: false
    },
    {
      id: 9,
      name: "Fresh Strawberries",
      price: 3.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400",
      rating: 4.2,
      reviewCount: 87,
      unit: "1 lb container",
      inStock: true,
      isOrganic: false,
      discount: 0,
      brand: "Garden Select",
      category: "Fruits",
      subcategory: "Berries",
      isWishlisted: false
    },
    {
      id: 10,
      name: "Almond Milk Unsweetened",
      price: 3.49,
      originalPrice: 3.99,
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400",
      rating: 4.1,
      reviewCount: 145,
      unit: "64 fl oz",
      inStock: false,
      isOrganic: false,
      discount: 13,
      brand: "Pure Harvest",
      category: "Dairy",
      subcategory: "Plant-Based Milk",
      isWishlisted: false
    },
    {
      id: 11,
      name: "Organic Chicken Breast",
      price: 9.99,
      originalPrice: 11.99,
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400",
      rating: 4.6,
      reviewCount: 76,
      unit: "per lb",
      inStock: true,
      isOrganic: true,
      discount: 17,
      brand: "Farm Fresh",
      category: "Meat",
      subcategory: "Poultry",
      isWishlisted: false
    },
    {
      id: 12,
      name: "Bell Peppers Mixed",
      price: 4.49,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1525607551862-4d0b24fa4b35?w=400",
      rating: 4.4,
      reviewCount: 98,
      unit: "3 pack",
      inStock: true,
      isOrganic: false,
      discount: 0,
      brand: "Green Choice",
      category: "Vegetables",
      subcategory: "Peppers",
      isWishlisted: false
    }
  ];

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (category) {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by subcategory
    if (subcategory) {
      filtered = filtered.filter(product => 
        product.subcategory.toLowerCase() === subcategory.toLowerCase()
      );
    }

    // Apply filters
    if (filters.priceRange.min) {
      filtered = filtered.filter(product => product.price >= parseFloat(filters.priceRange.min));
    }
    if (filters.priceRange.max) {
      filtered = filtered.filter(product => product.price <= parseFloat(filters.priceRange.max));
    }
    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => filters.brands.includes(product.brand));
    }
    if (filters.dietary.length > 0) {
      filtered = filtered.filter(product => {
        if (filters.dietary.includes('organic') && !product.isOrganic) return false;
        return true;
      });
    }
    if (filters.rating.length > 0) {
      const minRating = Math.min(...filters.rating);
      filtered = filtered.filter(product => product.rating >= minRating);
    }
    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Apply sorting
    switch (currentSort) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // relevance - keep original order
        break;
    }

    setFilteredProducts(filtered);
  }, [products, filters, currentSort, category, subcategory]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearAllFilters = () => {
    setFilters({
      priceRange: { min: '', max: '' },
      brands: [],
      dietary: [],
      rating: [],
      inStock: false
    });
    setSearchParams({});
  };

  const handleAddToCart = async (product) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('Added to cart:', product);
  };

  const handleAddToWishlist = (product, isAdding) => {
    console.log(isAdding ? 'Added to wishlist:' : 'Removed from wishlist:', product);
  };

  const getActiveFilters = () => {
    const activeFilters = [];
    
    if (filters.priceRange.min || filters.priceRange.max) {
      const min = filters.priceRange.min || '0';
      const max = filters.priceRange.max || '∞';
      activeFilters.push({
        label: `$${min} - $${max}`,
        onRemove: () => handleFilterChange('priceRange', { min: '', max: '' })
      });
    }
    
    filters.brands.forEach(brand => {
      activeFilters.push({
        label: brand,
        onRemove: () => handleFilterChange('brands', filters.brands.filter(b => b !== brand))
      });
    });
    
    filters.dietary.forEach(diet => {
      activeFilters.push({
        label: diet.charAt(0).toUpperCase() + diet.slice(1),
        onRemove: () => handleFilterChange('dietary', filters.dietary.filter(d => d !== diet))
      });
    });
    
    filters.rating.forEach(rating => {
      activeFilters.push({
        label: `${rating}+ Stars`,
        onRemove: () => handleFilterChange('rating', filters.rating.filter(r => r !== rating))
      });
    });
    
    if (filters.inStock) {
      activeFilters.push({
        label: 'In Stock',
        onRemove: () => handleFilterChange('inStock', false)
      });
    }
    
    return activeFilters;
  };

  const activeFilters = getActiveFilters();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategoryBreadcrumb category={category} subcategory={subcategory} />
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearAll={handleClearAllFilters}
                isVisible={true}
                onClose={() => {}}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-4">
              <Button
                variant="outline"
                onClick={() => setIsFilterSidebarOpen(true)}
                iconName="Filter"
                iconPosition="left"
              >
                Filters {activeFilters.length > 0 && `(${activeFilters.length})`}
              </Button>
            </div>

            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {activeFilters.map((filter, index) => (
                    <FilterChip
                      key={index}
                      label={filter.label}
                      onRemove={filter.onRemove}
                    />
                  ))}
                </div>
                <Button
                  variant="text"
                  onClick={handleClearAllFilters}
                  iconName="X"
                  iconPosition="left"
                  className="text-sm"
                >
                  Clear all
                </Button>
              </div>
            )}

            {/* Sort and Results */}
            <SortDropdown
              currentSort={currentSort}
              onSortChange={setCurrentSort}
              resultsCount={filteredProducts.length}
            />

            {/* Product Grid */}
            <ProductGrid
              products={filteredProducts}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
              loading={loading}
            />
          </div>
        </div>
      </div>

      {/* Mobile Filter Sidebar */}
      <FilterSidebar
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearAll={handleClearAllFilters}
        isVisible={isFilterSidebarOpen}
        onClose={() => setIsFilterSidebarOpen(false)}
      />
    </div>
  );
};

export default ProductCategoriesBrowse;