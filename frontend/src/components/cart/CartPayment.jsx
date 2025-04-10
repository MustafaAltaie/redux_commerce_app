

const CartPayment = ({ totalPrice }) => {
    return (
        <div className="cartPaymentMainWrapper">
            <h1 style={{ marginBottom: '20px' }}>Order Summary</h1>
            <div className="cartPaymentWrapper">
                <div>
                    <p>Total Price: {totalPrice}:-</p>
                    <p>Save:</p>
                    <p>Total Quantity:</p>
                    <p>Shipping Costs: Free</p>
                </div>
                <div className="promoCodeCartWrapper">
                    <h4>Promo Code</h4>
                    <input type="text" placeholder="promo_code" />
                    <button>Apply</button>
                </div>
                <div>
                    <button className="checkoutButton">Checkout</button>
                </div>
                <div className="paymentCardMainWrapper">
                    <h4>Fast payment, no login required</h4>
                    <div className="paymentCardWrapper">
                        Buy now pay later with
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Klarna_Payment_Badge.svg/2560px-Klarna_Payment_Badge.svg.png" alt="Klarna" />
                    </div>
                    <div className="paymentCardWrapper">
                        Pay with card
                        <img src="https://pngimg.com/uploads/mastercard/mastercard_PNG7.png" alt="mastercard" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPayment;