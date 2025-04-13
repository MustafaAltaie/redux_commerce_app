import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartPayment = () => {
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const totalMoneySaved = useSelector(state => state.cart.totalMoneySaved);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const freeShippingThreshold = useSelector(state => state.cart.freeShippingThreshold);
    const shippingCosts = useSelector(state => state.cart.shippingCosts);
    const [progress, setProgress] = useState(500);
    const isFreeShipping = totalPrice >= freeShippingThreshold;
    const navigate = useNavigate();

    useEffect(() => {
        setProgress((totalPrice / freeShippingThreshold) * 100);
    }, [totalPrice]);

    return (
        <div className="cartPaymentMainWrapper">
            <h4 style={{ marginBottom: '10px', color: '#17a' }}>Order Summary</h4>
            <div className="cartPaymentWrapper">
                <div className="detailsCartWrapper">
                    <p><span>Total Price:</span> {totalPrice}:-</p>
                    {totalMoneySaved !== 0 &&
                    <p><span>You save</span> {totalMoneySaved}:-<span>on your order today</span></p>}
                    <p><span>Total Quantity:</span> {totalQuantity}<span>items</span></p>
                    <p><span>Shipping Costs:</span>{isFreeShipping ? 'Free' : shippingCosts}:-</p>
                    <i>Free shipping on orders over {freeShippingThreshold}:-</i>
                </div>
                <div className='freeShipmentWrapper'>
                    {!isFreeShipping ?
                    <i>🚚 <span>You're only</span>{freeShippingThreshold - totalPrice}:-<span>away from free shipping!</span></i>
                    : <i style={{ color: '#080' }}>🎉 Congratulations! You’ve unlocked free shipping!</i>}
                    <div className='shipmentProgressbarWrapper'>
                        <div className='shipmentProgressbar' style={{ width: `${progress}%`, background: isFreeShipping ? '#0a0' : '#28b' }}></div>
                    </div>
                </div>
                <div className="promoCodeCartWrapper">
                    <input type="text" placeholder="promo_code" />
                    <button>Apply</button>
                </div>
                <div className='checkoutButtonWrapper'>
                    <button className="checkoutButton" onClick={() => navigate('/payment')}>Checkout</button>
                </div>
                <div className="paymentCardMainWrapper">
                    <div className="paymentCardWrapper">
                        <img src="https://pngimg.com/uploads/mastercard/mastercard_PNG7.png" alt="mastercard" />
                    </div>
                    <div className="paymentCardWrapper">
                        <img src="https://www.bio-nology.com/wp-content/uploads/2023/06/Swish-Logo-Primary-PNG.png" alt="Swish" />
                    </div>
                    <div className="paymentCardWrapper">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="Paypal" />
                    </div>
                    <div className="paymentCardWrapper">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Klarna_Payment_Badge.svg/2560px-Klarna_Payment_Badge.svg.png" alt="Klarna" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPayment;