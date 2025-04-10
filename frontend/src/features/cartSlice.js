import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('cart')) || [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setStorageItems: (state, action) => {

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

export const { setTotalPrice, increaseTotalPrice, decreaseTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;