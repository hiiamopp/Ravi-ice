
import React from 'react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Your Sweet Bag</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <span className="text-6xl mb-4 block">🍦</span>
              <p className="text-gray-400 font-medium">Your bag is empty. Time for a treat?</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 border-b border-pink-50 pb-4">
                <img src={item.image} className="w-20 h-20 object-cover rounded-2xl" alt={item.name} />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800">{item.name}</h4>
                  <p className="text-xs text-pink-500 font-medium uppercase">{item.brand}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm font-bold">${item.price.toFixed(2)} × {item.quantity}</span>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-red-400 hover:text-red-600 text-xs font-bold uppercase tracking-widest"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-pink-50 border-t space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-2xl font-black text-gray-900">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-pink-200 transition-all">
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
