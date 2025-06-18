export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  categoryId: number;
  favorite: boolean;
  description: string;
}

export interface ProductFormValues {
  id: number;
  name: string;
  price: number;
  image: string;
  categoryId: {
    label: string;
    value: number;
  };
  favorite: boolean;
  description: string;
}

export interface Category {
  id: number;
  name: string;
}

// Define a type for the slice state
export interface ProductState {
  products: Product[];
  tempProducts: Product[];
  categories: Category[];
  searchTerm: string;
  filterCategoryId: number[];
}

export interface FilterProducts {
  searchTerm?: string | 'default';
  categoryId?: number;
}
