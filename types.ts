
export enum Category {
  CONES = 'Cones',
  TUBS = 'Tubs',
  BARS = 'Bars',
  SCOOPS = 'Scoops',
  SUNDAES = 'Sundaes'
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: number;
  isPopular?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
