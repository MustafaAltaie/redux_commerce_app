import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    storageItems: JSON.parse(localStorage.getItem('cart')) || [],
    totalPrice: JSON.parse(localStorage.getItem('cart')).reduce((acc, item) => {
        if(item.discount) {
            acc += Math.floor(item.price * (1 - item.discount / 100));
        } else {
            acc += item.price
        }
        return acc;
    }, 0),
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        handleAddToCart: (state, action) => {
            state.storageItems = [...state.storageItems, action.payload];
            localStorage.setItem('cart', JSON.stringify(state.storageItems));
            state.totalPrice = action.payload.discount ?
            Math.floor(action.payload.price * (1 - action.payload.discount / 100)) :
            action.payload.price;
        },
        setStorageItems: (state, action) => {
            const { oneItemPrice, count, item } = action.payload;
            state.storageItems = state.storageItems.filter(i => i._id !== item._id);
            localStorage.setItem('cart', JSON.stringify(state.storageItems));
            state.totalPrice = state.totalPrice - (oneItemPrice * count);
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        increaseTotalPrice: (state, action) => {
            state.totalPrice += action.payload;
        },
        decreaseTotalPrice: (state, action) => {
            state.totalPrice -= action.payload;
        }
    }
});

export const { handleAddToCart, setStorageItems, setTotalPrice, increaseTotalPrice, decreaseTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;