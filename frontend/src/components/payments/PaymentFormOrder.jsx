import FormOrder from "../cart/FormOrder";
import { useSelector } from 'react-redux';

const PaymentFormOrder = () => {
    const storageItems = useSelector(state => state.cart.storageItems);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const totalMoneySaved = useSelector(state => state.cart.totalMoneySaved);
    const shippingCosts = useSelector(state => state.cart.shippingCosts);
    const freeShippingThreshold = useSelector(state => state.cart.freeShippingThreshold);
    const isFreeShipping = totalPrice >= freeShippingThreshold;

    return (
        <div className='paymentFormOrdersWrapper'>
            <FormOrder storageItems={storageItems} />
            <div className="paymentFormSubtotal">
                <div>
                    <p>Subtotal:</p>
                    <p>{totalPrice + totalMoneySaved}:-</p>
                </div>
                {totalMoneySaved > 0 &&
                <div>
                    <p>Saved:</p>
                    <p>-{totalMoneySaved}:-</p>
                </div>}
                <div>
                    <p>Shipment costs:</p>
                    <p className={isFreeShipping ? 'oldPrice' : ''}>{shippingCosts}:-</p>
                </div>
                <div>
                    <h4>Total To Pay:</h4>
                    <h4>{isFreeShipping ? totalPrice : totalPrice + shippingCosts}:-</h4>
                </div>
            </div>
        </div>
    )
}

export default PaymentFormOrder;