
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-50">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-pink-600 shadow-sm uppercase tracking-tighter">
          {product.brand}
        </div>
        {product.isPopular && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-white px-2 py-1 rounded-lg text-[10px] font-black uppercase">
            Popular
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800 leading-tight">{product.name}</h3>
          <span className="text-pink-600 font-bold">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-500 text-xs mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-yellow-500">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            <span className="ml-1 text-xs font-semibold text-gray-600">{product.rating}</span>
          </div>
          
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors shadow-md hover:shadow-lg active:scale-95 transform"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
