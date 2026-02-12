
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import AIAssistant from './components/AIAssistant';
import { PRODUCTS, BRANDS } from './data';
import { Product, CartItem, Category } from './types';

const App: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesBrand = selectedBrand === 'All' || p.brand === selectedBrand;
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesBrand && matchesCategory && matchesSearch;
    });
  }, [selectedBrand, selectedCategory, searchQuery]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen pb-20">
      <Header cartCount={cart.reduce((s, i) => s + i.quantity, 0)} onOpenCart={() => setIsCartOpen(true)} />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden mb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/heroice/1200/600" 
            className="w-full h-full object-cover brightness-50"
            alt="Hero Background"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h2 className="text-5xl md:text-7xl font-cursive mb-4 drop-shadow-lg">Indulge in Happiness</h2>
          <p className="text-xl md:text-2xl font-medium mb-8 max-w-2xl mx-auto drop-shadow-md">
            From Ravi's hand-crafted specials to your favorite global brands, we bring the scoop of joy to your doorstep.
          </p>
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text"
              placeholder="Search for flavors or brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-8 py-4 rounded-full text-gray-800 bg-white/90 backdrop-blur shadow-2xl focus:outline-none focus:ring-4 focus:ring-pink-300 transition"
            />
            <button className="absolute right-3 top-2 bottom-2 bg-pink-500 text-white px-6 rounded-full font-bold">
              Find
            </button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 overflow-x-auto pb-2 scrollbar-hide">
            {['All', ...BRANDS].map(brand => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  selectedBrand === brand 
                    ? 'bg-pink-500 text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-pink-50 border border-pink-100'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Type:</span>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border border-pink-100 rounded-xl px-4 py-2 text-sm font-bold text-gray-700 focus:outline-none"
            >
              <option value="All">All Categories</option>
              {Object.values(Category).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart} 
            />
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <span className="text-5xl block mb-4">😿</span>
              <p className="text-xl text-gray-500 font-medium">Sorry! We couldn't find that flavor.</p>
              <button 
                onClick={() => {setSelectedBrand('All'); setSelectedCategory('All'); setSearchQuery('');}}
                className="mt-4 text-pink-500 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Cart & AI */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onRemove={removeFromCart}
      />
      <AIAssistant />

      {/* Footer Fun Fact */}
      <footer className="mt-20 py-10 border-t border-pink-100 text-center">
        <p className="text-pink-400 font-cursive text-xl mb-2">Made with 💖 by Ravi's Ice Cream</p>
        <p className="text-gray-400 text-xs uppercase tracking-[0.2em]">Crafting cold memories since 2010</p>
      </footer>
    </div>
  );
};

export default App;
