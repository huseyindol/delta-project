import productReducer from '@/store/productSlice';
import userReducer from '@/store/userSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage için

// Product için özel persist config
const productPersistConfig = {
  key: 'product',
  storage,
  blacklist: ['filterCategoryId', 'searchTerm'],
};
// User için özel persist config
const userPersistConfig = {
  key: 'user',
  storage,
  blacklist: ['searchTerm'],
};

// Root reducer oluştur
const rootReducer = combineReducers({
  product: persistReducer(productPersistConfig, productReducer),
  user: persistReducer(userPersistConfig, userReducer),
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
