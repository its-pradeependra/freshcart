import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
  const [isWishlisted, setIsWishlisted] = useState(product.isWishlisted || false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    await onAddToCart(product);
    setIsAddingToCart(false);
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    onAddToWishlist(product, !isWishlisted);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Icon key={i} name="Star" size={14} className="text-warning fill-current" />);
    }

    if (hasHalfStar) {
      stars.push(<Icon key="half" name="Star" size={14} className="text-warning fill-current opacity-50" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Icon key={`empty-${i}`} name="Star" size={14} className="text-border" />);
    }

    return stars;
  };

  return (
    <div className="bg-surface border border-border rounded-card shadow-card hover:shadow-modal transition-smooth group">
      <div className="relative overflow-hidden">
        <Link to={`/product-details?id=${product.id}`}>
          <div className="aspect-square overflow-hidden rounded-t-card">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
        
        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-2 right-2 p-2 bg-surface bg-opacity-90 rounded-full shadow-card hover:bg-opacity-100 transition-smooth"
        >
          <Icon 
            name="Heart" 
            size={16} 
            className={isWishlisted ? 'text-error fill-current' : 'text-text-secondary'} 
          />
        </button>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {product.isOrganic && (
            <span className="bg-success text-success-foreground text-xs font-data font-data-medium px-2 py-1 rounded-button">
              Organic
            </span>
          )}
          {product.discount > 0 && (
            <span className="bg-error text-error-foreground text-xs font-data font-data-medium px-2 py-1 rounded-button">
              -{product.discount}%
            </span>
          )}
          {!product.inStock && (
            <span className="bg-text-secondary text-white text-xs font-data font-data-medium px-2 py-1 rounded-button">
              Out of Stock
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <Link to={`/product-details?id=${product.id}`}>
          <h3 className="font-body font-body-medium text-text-primary mb-2 line-clamp-2 hover:text-primary transition-smooth">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center space-x-2 mb-2">
          <div className="flex items-center space-x-1">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-text-secondary font-caption">
            ({product.reviewCount})
          </span>
        </div>

        <div className="flex items-center space-x-2 mb-3">
          <span className="text-lg font-heading font-heading-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-sm text-text-secondary line-through font-caption">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="text-sm text-text-secondary mb-3 font-caption">
          {product.unit}
        </div>

        <Button
          variant={product.inStock ? "primary" : "outline"}
          fullWidth
          disabled={!product.inStock}
          loading={isAddingToCart}
          onClick={handleAddToCart}
          iconName={product.inStock ? "ShoppingCart" : "Bell"}
          iconPosition="left"
        >
          {product.inStock ? "Add to Cart" : "Notify Me"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;