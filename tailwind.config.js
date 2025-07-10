/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#2D7D32', // green-800
        'primary-foreground': '#FFFFFF', // white
        
        // Secondary Colors
        'secondary': '#558B2F', // light-green-700
        'secondary-foreground': '#FFFFFF', // white
        
        // Accent Colors
        'accent': '#FF8F00', // orange-600
        'accent-foreground': '#FFFFFF', // white
        
        // Background Colors
        'background': '#FAFAFA', // gray-50
        'surface': '#FFFFFF', // white
        
        // Text Colors
        'text-primary': '#212121', // gray-800
        'text-secondary': '#757575', // gray-500
        
        // Status Colors
        'success': '#4CAF50', // green-500
        'success-foreground': '#FFFFFF', // white
        'warning': '#FF9800', // orange-500
        'warning-foreground': '#FFFFFF', // white
        'error': '#F44336', // red-500
        'error-foreground': '#FFFFFF', // white
        
        // Border Colors
        'border': '#E0E0E0', // gray-300
        'border-light': '#F5F5F5', // gray-100
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Source Sans Pro', 'sans-serif'],
        'caption': ['Roboto', 'sans-serif'],
        'data': ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        'heading-normal': '400',
        'heading-medium': '600',
        'heading-bold': '700',
        'body-normal': '400',
        'body-medium': '600',
        'caption-normal': '400',
        'data-medium': '500',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'modal': '0 4px 16px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'card': '8px',
        'button': '4px',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'scale-hover': 'scale-hover 150ms ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'scale-hover': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' },
        },
      },
      spacing: {
        'nav-height': '60px',
        'nav-height-mobile': '56px',
      },
      zIndex: {
        'nav': '1000',
        'dropdown': '1010',
        'overlay': '1020',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}