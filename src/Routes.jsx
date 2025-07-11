import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import HomeDashboard from "pages/home-dashboard";
import ProductCategoriesBrowse from "pages/product-categories-browse";
import ShoppingCart from "pages/shopping-cart";
import OrderHistoryTracking from "pages/order-history-tracking";
import ProductDetails from "pages/product-details";
import Checkout from "pages/checkout";
import UserProfileAccountSettings from "pages/user-profile-account-settings";
import SearchResults from "pages/search-results";
import WishlistSavedItems from "pages/wishlist-saved-items";
import HelpPage from "pages/help";
import SignIn from "pages/auth/SignIn";
import SignUp from "pages/auth/SignUp";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/home-dashboard" element={<HomeDashboard />} />
        <Route path="/product-categories-browse" element={<ProductCategoriesBrowse />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/order-history-tracking" element={<OrderHistoryTracking />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/user-profile-account-settings" element={<UserProfileAccountSettings />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/wishlist-saved-items" element={<WishlistSavedItems />} />
        <Route path="/help" element={<HelpPage />} />
        
        {/* Auth routes */}
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/register" element={<SignUp />} />
        
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </ErrorBoundary>
  );
};

export default Routes;