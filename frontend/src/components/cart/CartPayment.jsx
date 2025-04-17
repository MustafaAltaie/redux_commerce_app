import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFindPromoCodeQuery } from '../../features/productApi';
import { promoCodeDiscountHandler, promoCodesHandler } from '../../features/cartSlice';

const CartPayment = () => {
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const totalMoneySaved = useSelector(state => state.cart.totalMoneySaved);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const freeShippingThreshold = useSelector(state => state.cart.freeShippingThreshold);
    const shippingCosts = useSelector(state => state.cart.shippingCosts);
    const promoDiscount = useSelector(state => state.cart.promoCodeDiscount);
    const foundPromos = useSelector(state => state.cart.promoCodes);
    const dispatch = useDispatch();
    const [progress, setProgress] = useState(500);
    const [promoText, setPromoText] = useState();
    const isFreeShipping = totalPrice >= freeShippingThreshold;
    const navigate = useNavigate();

    const [searchPromo, setSearchPromo] = useState('');

    const { data: promoCode, isLoading, isError } = useFindPromoCodeQuery(searchPromo, {
        skip: !searchPromo,
    });

    useEffect(() => {
        if (promoCode && !isLoading && !isError) {
            if(!foundPromos.includes(promoCode)){
               dispatch(promoCodesHandler(promoCode));
               dispatch(promoCodeDiscountHandler(promoDiscount + promoCode.discount));
            } else {
                alert('Promo-code is already added')
            }
        }
    }, [promoCode, isLoading, isError]);

    useEffect(() => {
        setProgress((totalPrice / freeShippingThreshold) * 100);
    }, [totalPrice]);

    const handleFindPromoCode = () => {
        setSearchPromo(promoText);
        setPromoText('');
    }

    return (
        <div className="cartPaymentMainWrapper">
            <h4 style={{ marginBottom: '10px', color: '#17a' }}>Order Summary</h4>
            <div className="cartPaymentWrapper">
                <div className="detailsCartWrapper">
                    <p style={{ textDecoration: promoDiscount ? 'line-through' : '' }}><span>Total Price:</span> {totalPrice}:-</p>
                    {totalMoneySaved !== 0 &&
                    <p><span>You save</span> {totalMoneySaved}:-<span>on your order today</span></p>}
                    <p><span>Total Quantity:</span> {totalQuantity}<span>items</span></p>
                    <p><span>Shipping Costs:</span>{isFreeShipping ? 'Free' : shippingCosts}:-</p>
                    {promoDiscount > 0 &&
                    <h5 style={{ paddingLeft: '5px' }}>Promo-code discount is {promoDiscount}%. <b>The new total price is {totalPrice - (Math.round(totalPrice * (promoDiscount / 100)))}:-</b></h5>}
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
                    {foundPromos.length > 0 &&
                    <div className='promoCodeContainer' style={{ paddingBottom: '20px' }}>
                        {foundPromos.map(promo =>
                        <div key={promo.promoCode} className='promoCodeContainer'>
                            <div className="promoCode">
                                <div className="promoCodeInnerFrame">
                                    <h6>{promo.discount}% discount</h6>
                                    <h5>{promo.promoCode}</h5>
                                    <h6>Harry up! Valid until {new Date(promo.expiresAt).toLocaleDateString()}</h6>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>}
                    {isError && <p style={{ color: 'red', padding: '10px' }}>No promo-code found</p>}
                    {isLoading && <p style={{ padding: '10px' }}>Searching...</p>}
                    <div>
                        <input type="text" placeholder="promo_code" value={promoText || ''} onChange={e => setPromoText(e.target.value)} />
                        <button onClick={handleFindPromoCode}>Apply</button>
                    </div>
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