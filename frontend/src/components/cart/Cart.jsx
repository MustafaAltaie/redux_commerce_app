import { useState } from "react";
import '../../style/cart.css';
import CartItem from "./CartItem";
import CartPayment from "./CartPayment";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setStorageItems } from "../../features/cartSlice";

const Chart = () => {
    const cart = useSelector(state => state.cart.storageItems);
    const dispatch = useDispatch();
    const [deleted, setDeleted] = useState('');
    const navigate = useNavigate();

    const handleStoredItem = (item, count) => {
        const oneItemPrice = item.discount ? Math.floor(item.price * (1 - item.discount / 100)) : item.price;
        setTimeout(() => {
            dispatch(setStorageItems({ oneItemPrice, count, item }));
        }, 300);
    }

    return (
        <>
            <div style={{ padding: '10px', color: 'white', background: '#17a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>{cart.length > 0 ? 'Your shopping cart' : 'Your shopping cart is empty'}</h2>
                <div className="logo" onClick={() => navigate('/')}>APP LOGO</div>
            </div>
            {cart.length > 0 &&
            <div className="cartMainWrapper">
                <div className="cartItemWrapper">
                {cart.length > 0 &&
                <div style={{ display: 'flex', color: '#777' }}>
                    <p style={{ width: '55%' }}>Product details</p>
                    <p style={{ width: '20%' }}>Price</p>
                    <p style={{ width: '15%' }}>Total price</p>
                    <p style={{ width: '10%' }}>Delete</p>
                </div>}
                    {cart.map(product => (
                        <CartItem
                            key={product._id}
                            product={product}
                            handleStoredItem={handleStoredItem}
                            setDeleted={setDeleted}
                            deleted={deleted}
                        />
                    ))}
                </div>
                <CartPayment />
            </div>}
            {cart.length <= 0 &&
            <button className="continueShoppingButton" onClick={() => navigate('/')}>Continue Shopping</button>}
        </>
    )
}

export default Chart;