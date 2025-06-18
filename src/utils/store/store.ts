import productReducer from '@/store/product/productSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage için

// Product için özel persist config
const productPersistConfig = {
  key: 'product',
  storage,
  blacklist: ['filterCategoryId', 'searchTerm'],
};

// Root reducer oluştur
const rootReducer = combineReducers({
  product: persistReducer(productPersistConfig, productReducer),
  // posts: postsReducer,
  // comments: commentsReducer,
  // users: usersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
