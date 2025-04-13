import { createSlice } from "@reduxjs/toolkit";

let cart = [];
const raw = localStorage.getItem('cart');
if (raw && raw !== "undefined") {
    cart = JSON.parse(raw);
}

const initialState = {
    storageItems: cart,
    totalPrice: cart.reduce((acc, item) => {
        const price = Number(item.price);
        const discount = Number(item.discount);
        const count = Number(item.count) || 1;
    
        if (!isNaN(price) && !isNaN(count)) {
          if (discount) {
            acc += Math.floor(price * (1 - discount / 100)) * count;
          } else {
            acc += price * count;
          }
        }

        return acc;
    }, 0),
    totalMoneySaved: cart.reduce((acc, item) => {
        const price = Number(item.price);
        const discount = Number(item.discount);
        const count = Number(item.count) || 1;

        if (!isNaN(price) && !isNaN(discount) && discount > 0) {
          acc += (price - Math.floor(price * (1 - discount / 100))) * count;
        }

        return acc;
    }, 0),
    totalQuantity: cart.reduce((acc, item) => {
        const count = Number(item.count);
        if(!isNaN(count)) {
            acc += item.count;
        }
        return acc;
    }, 0),
    freeShippingThreshold: 3000,
    shippingCosts: 250,
    showBrand: ''
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        handleAddToCart: (state, action) => { // Add to cart
            const newItem = { ...action.payload, count: 1 };
            state.storageItems = [...state.storageItems, newItem];
            localStorage.setItem('cart', JSON.stringify(state.storageItems));
            // Add to total price the actual item price based on discount
            state.totalPrice += action.payload.discount ?
            Math.floor(action.payload.price * (1 - action.payload.discount / 100)) :
            action.payload.price;
            // Add to how much money saved
            state.totalMoneySaved += action.payload.discount ?
            action.payload.price - Math.floor(action.payload.price * (1 - action.payload.discount / 100)) : 0
            // Set total quantity
            state.totalQuantity += 1;
        },
        setStorageItems: (state, action) => { //Delete from cart
            const { oneItemPrice, count, item } = action.payload;
            // Remove item from storage list
            state.storageItems = state.storageItems.filter(i => i._id !== item._id);
            localStorage.setItem('cart', JSON.stringify(state.storageItems));
            // Minimize the total price by the removed item price
            state.totalPrice = state.totalPrice - (oneItemPrice * count);
            // Minimize the total saved money by the removed item price
            if(item.discount){
                state.totalMoneySaved -= ((item.price - Math.floor(item.price * (1 - item.discount / 100))) * count);
            }
            // Set total quantity
            state.totalQuantity -= Number(item.count);
        },
        increaseTotalPrice: (state, action) => {
            const { currentItemPrice, itemSavedMoney, productId, count } = action.payload;
            state.totalPrice += currentItemPrice;
            state.totalMoneySaved += itemSavedMoney;
            const item = state.storageItems.find(item => item._id === productId);
            if(item){
                item.count = count + 1;
            }
            localStorage.setItem('cart', JSON.stringify(state.storageItems));
            // Set total quantity
            state.totalQuantity ++;
        },
        decreaseTotalPrice: (state, action) => {
            const { currentItemPrice, itemSavedMoney, productId, count } = action.payload;
            state.totalPrice -= currentItemPrice;
            state.totalMoneySaved -= itemSavedMoney;
            const item = state.storageItems.find(item => item._id === productId);
            if(item){
                item.count = count - 1;
            }
            localStorage.setItem('cart', JSON.stringify(state.storageItems));
            // Set total quantity
            state.totalQuantity --;
        },
        handleShowBrand: (state, action) => {
            state.showBrand = action.payload;
        }
    }
});

export const {
    handleAddToCart,
    setStorageItems,
    increaseTotalPrice,
    decreaseTotalPrice,
    handleShowBrand
} = cartSlice.actions;

export default cartSlice.reducer;