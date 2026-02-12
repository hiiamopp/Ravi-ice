
import { Product, Category } from './types';

export const BRANDS = ['Ravi\'s Special', 'Magnum', 'Ben & Jerry\'s', 'Häagen-Dazs', 'Amul', 'Baskin Robbins'];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Classic Vanilla Bean',
    brand: 'Ravi\'s Special',
    price: 4.50,
    description: 'Made with organic Madagascar vanilla beans.',
    category: Category.SCOOPS,
    image: 'https://picsum.photos/seed/ice1/400/400',
    rating: 4.8,
    isPopular: true
  },
  {
    id: '2',
    name: 'Belgian Chocolate Luxe',
    brand: 'Magnum',
    price: 5.99,
    description: 'Thick Belgian chocolate shell with creamy chocolate ice cream.',
    category: Category.BARS,
    image: 'https://picsum.photos/seed/ice2/400/400',
    rating: 4.9,
    isPopular: true
  },
  {
    id: '3',
    name: 'Cookie Dough Craze',
    brand: 'Ben & Jerry\'s',
    price: 8.50,
    description: 'Loaded with chunks of chocolate chip cookie dough.',
    category: Category.TUBS,
    image: 'https://picsum.photos/seed/ice3/400/400',
    rating: 4.7
  },
  {
    id: '4',
    name: 'Almond Praline Cones',
    brand: 'Häagen-Dazs',
    price: 6.25,
    description: 'Crunchy almond pieces in a caramel swirl cone.',
    category: Category.CONES,
    image: 'https://picsum.photos/seed/ice4/400/400',
    rating: 4.6
  },
  {
    id: '5',
    name: 'Mango Sorbet Splash',
    brand: 'Amul',
    price: 3.50,
    description: 'Refreshing Alphonso mango pulp sorbet.',
    category: Category.SCOOPS,
    image: 'https://picsum.photos/seed/ice5/400/400',
    rating: 4.5
  },
  {
    id: '6',
    name: 'Mississippi Mud Cake',
    brand: 'Baskin Robbins',
    price: 12.00,
    description: 'Triple layer chocolate fudge and brownie ice cream.',
    category: Category.SUNDAES,
    image: 'https://picsum.photos/seed/ice6/400/400',
    rating: 4.9,
    isPopular: true
  },
  {
    id: '7',
    name: 'Pistachio Paradise',
    brand: 'Ravi\'s Special',
    price: 5.00,
    description: 'Hand-picked roasted pistachios in creamy milk.',
    category: Category.SCOOPS,
    image: 'https://picsum.photos/seed/ice7/400/400',
    rating: 4.8
  },
  {
    id: '8',
    name: 'Strawberry Cheesecake',
    brand: 'Ben & Jerry\'s',
    price: 8.50,
    description: 'Graham cracker swirls and real strawberry chunks.',
    category: Category.TUBS,
    image: 'https://picsum.photos/seed/ice8/400/400',
    rating: 4.7
  },
  {
    id: '9',
    name: 'Caramel Macchiato',
    brand: 'Häagen-Dazs',
    price: 7.00,
    description: 'Coffee infused ice cream with rich caramel ripples.',
    category: Category.BARS,
    image: 'https://picsum.photos/seed/ice9/400/400',
    rating: 4.4
  }
];
