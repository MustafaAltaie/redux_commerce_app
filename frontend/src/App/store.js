import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '../features/productApi.js';
import cartReducer from '../features/cartSlice.js';

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});