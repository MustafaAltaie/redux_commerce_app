import { useState, useEffect } from "react";
import '../../style/cart.css';
import CartItem from "./CartItem";
import CartPayment from "./CartPayment";
import { useNavigate } from 'react-router-dom';

const Chart = () => {
    const [cart, setCart] = useState([]);
    const [deleted, setDeleted] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    const handleStoredItem = (item) => {
        const storageList = JSON.parse(localStorage.getItem('cart')) || [];
        const newList = storageList.filter(i => i._id !== item._id);
        setTimeout(() => {
            setCart(newList);
            localStorage.setItem('cart', JSON.stringify(newList));
        }, 300);
    }

    return (
        <>
            <div style={{ padding: '10px', color: 'white', background: '#17a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>{cart.length > 0 ? 'Your shopping cart' : 'Your shopping cart is empty'}</h2>
                <div className="logo" onClick={() => navigate('/')}>APP LOGO</div>
            </div>
            <div className="cartMainWrapper">
                <div className="cartItemWrapper">
                {cart.length > 0 &&
                <div style={{ display: 'flex', color: '#777', padding: '10px 10px 0 10px' }}>
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
                            setTotalPrice={setTotalPrice}
                        />
                    ))}
                </div>
                <CartPayment totalPrice={totalPrice} />
            </div>
        </>
    )
}

export default Chart;