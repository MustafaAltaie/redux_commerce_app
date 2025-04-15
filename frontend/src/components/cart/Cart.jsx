import { useState } from "react";
import '../../style/cart.css';
import CartItem from "./CartItem";
import CartPayment from "./CartPayment";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setStorageItems } from "../../features/cartSlice";

const Chart = () => {
    const cart = useSelector(state => state.cart.storageItems) || 0;
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
        <div className="cartMainWrapperBig">
            <div className="cartNav" style={{  }}>
                <h2>{cart.length > 0 ? 'Your shopping cart' : 'Your shopping cart is empty'}</h2>
                <div className="logo" onClick={() => navigate('/')} style={{ color: '#000' }}>APP LOGO</div>
            </div>
            {cart.length > 0 &&
            <div className="cartMainWrapper">
                <div className="cartItemWrapper">
                    {cart.length > 0 &&
                    <div style={{ display: 'flex', color: '#17a' }}>
                        <h4 style={{ width: '55%' }}>Product details</h4>
                        <h4 style={{ width: '20%' }}>Price</h4>
                        <h4 style={{ width: '15%' }}>Total price</h4>
                        <h4 style={{ width: '10%' }}>Delete</h4>
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
        </div>
    )
}

export default Chart;