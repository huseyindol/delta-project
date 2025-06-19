import type { RootState } from '@/utils/store/store';
import type {
  Category,
  FilterProducts,
  Product,
  ProductFormValues,
  ProductState,
} from '@/utils/type/productsType';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ProductState = {
  products: [],
  tempProducts: [],
  categories: [],
  searchTerm: '',
  filterCategoryId: [] as number[],
};

export const productSlice = createSlice({
  name: 'product',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.tempProducts = action.payload;
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setFavorite: (state, action: PayloadAction<number>) => {
      state.products = state.products.map(product =>
        product.id === action.payload
          ? { ...product, favorite: !product.favorite }
          : product
      );
    },
    updateProduct: (state, action: PayloadAction<ProductFormValues>) => {
      state.products = state.products.map(product =>
        Number(product.id) === Number(action.payload.id)
          ? {
              ...action.payload,
              categoryId: Number(action.payload.categoryId.value),
            }
          : product
      );
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        product => Number(product.id) !== Number(action.payload)
      );
      state.tempProducts = state.tempProducts.filter(
        product => Number(product.id) !== Number(action.payload)
      );
    },
    addProduct: (state, action: PayloadAction<ProductFormValues>) => {
      state.products = [
        ...state.products,
        {
          ...action.payload,
          id: state.products.length + 1,
          categoryId: Number(action.payload.categoryId.value),
        },
      ];
    },
    filterProducts: (state, action: PayloadAction<FilterProducts>) => {
      const { searchTerm, categoryId } = action.payload;

      if (categoryId) {
        state.filterCategoryId = state.filterCategoryId.includes(
          Number(categoryId)
        )
          ? state.filterCategoryId.filter(
              id => Number(id) !== Number(categoryId)
            )
          : [...new Set([...state.filterCategoryId, Number(categoryId)])];
      }

      state.searchTerm =
        searchTerm === 'default' ? state.searchTerm : searchTerm || '';

      state.tempProducts = state.products
        .filter(product => {
          return state.filterCategoryId.length === 0
            ? true
            : state.filterCategoryId.includes(Number(product.categoryId));
        })
        .filter(product => {
          const trimmedValue = state.searchTerm?.trim().toLowerCase() || '';
          return trimmedValue === ''
            ? true
            : product.name.toLowerCase().includes(trimmedValue);
        });
    },
  },
});

export const {
  setProducts,
  setCategories,
  filterProducts,
  setFavorite,
  updateProduct,
  deleteProduct,
  addProduct,
} = productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.product;

export default productSlice.reducer;
