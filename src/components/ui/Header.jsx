import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

import Input from './Input';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItemCount] = useState(3); // This would come from cart context
  const [isAuthenticated] = useState(true); // This would come from auth context
  
  const location = useLocation();
  const searchRef = useRef(null);
  const userDropdownRef = useRef(null);

  const navigationItems = [
    { name: 'Home', path: '/home-dashboard', icon: 'Home' },
    { name: 'Categories', path: '/product-categories-browse', icon: 'Grid3X3' },
    { name: 'Cart', path: '/shopping-cart', icon: 'ShoppingCart' },
    { name: 'Orders', path: '/order-history-tracking', icon: 'Package' },
  ];

  const userMenuItems = [
    { name: 'Profile', icon: 'User', action: () => console.log('Profile') },
    { name: 'Settings', icon: 'Settings', action: () => console.log('Settings') },
    { name: 'Help', icon: 'HelpCircle', action: () => console.log('Help') },
    { name: 'Logout', icon: 'LogOut', action: () => console.log('Logout') },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchExpanded(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Search for:', searchQuery);
      // Navigate to search results or filter products
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-nav bg-surface border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-nav-height-mobile lg:h-nav-height">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/home-dashboard" className="flex items-center space-x-2 transition-smooth hover:opacity-80">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="ShoppingBag" size={20} color="white" />
              </div>
              <span className="font-heading font-heading-bold text-xl text-primary hidden sm:block">
                FreshCart
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-button text-sm font-body font-body-medium transition-smooth hover:bg-border-light ${
                  isActivePath(item.path)
                    ? 'text-primary bg-border-light' :'text-text-primary hover:text-primary'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span>{item.name}</span>
                {item.name === 'Cart' && cartItemCount > 0 && (
                  <span className="bg-accent text-accent-foreground text-xs font-data font-data-medium px-2 py-1 rounded-full min-w-[20px] text-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <Input
                type="search"
                placeholder="Search for fresh groceries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
              <Icon
                name="Search"
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary"
              />
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              className="lg:hidden p-2 text-text-primary hover:text-primary transition-smooth"
            >
              <Icon name="Search" size={20} />
            </button>

            {/* Cart Icon - Mobile */}
            <Link
              to="/shopping-cart"
              className="lg:hidden relative p-2 text-text-primary hover:text-primary transition-smooth"
            >
              <Icon name="ShoppingCart" size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-data font-data-medium px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* User Account Dropdown */}
            {isAuthenticated && (
              <div className="relative" ref={userDropdownRef}>
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  className="flex items-center space-x-2 p-2 text-text-primary hover:text-primary transition-smooth"
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} color="white" />
                  </div>
                  <Icon name="ChevronDown" size={16} className="hidden sm:block" />
                </button>

                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-surface border border-border rounded-card shadow-modal z-dropdown">
                    <div className="py-2">
                      {userMenuItems.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            item.action();
                            setIsUserDropdownOpen(false);
                          }}
                          className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-text-primary hover:bg-border-light hover:text-primary transition-smooth"
                        >
                          <Icon name={item.icon} size={16} />
                          <span>{item.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-text-primary hover:text-primary transition-smooth"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchExpanded && (
          <div className="lg:hidden pb-4" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="relative">
              <Input
                type="search"
                placeholder="Search for fresh groceries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
                autoFocus
              />
              <Icon
                name="Search"
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary"
              />
            </form>
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-surface border-t border-border z-overlay">
          <div className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-card text-base font-body font-body-medium transition-smooth ${
                  isActivePath(item.path)
                    ? 'text-primary bg-border-light' :'text-text-primary hover:bg-border-light hover:text-primary'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span>{item.name}</span>
                {item.name === 'Cart' && cartItemCount > 0 && (
                  <span className="bg-accent text-accent-foreground text-xs font-data font-data-medium px-2 py-1 rounded-full min-w-[20px] text-center ml-auto">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;