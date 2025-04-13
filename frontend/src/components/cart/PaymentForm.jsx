import { useState } from 'react';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import '../../style/payment.css';

const PaymentForm = () => {
    const [option, setOption] = useState('');
    const [isInfoCompleted, setIsInfoCompleted] = useState(false);
  // State for form data
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
    });

    // Get Stripe and Elements objects
    const stripe = useStripe();
    const elements = useElements();

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        // Create token for the card details
        const { token, error } = await stripe.createToken(elements.getElement(CardNumberElement));

        if (error) {
        console.error(error);
        alert('Error while creating token');
        } else {
        // Send token and form data to the backend for payment processing
        const paymentData = {
            ...formData,
            token: token.id,
        };
        // Call your backend API here
        }
    };

    const handleOptions = (e) => {
        setOption(e.target.id);
    }

    const handleInfoCheck = () => {
        if(formData.email && formData.firstName && formData.lastName && formData.phone && formData.address){
            setIsInfoCompleted(true);
            setTimeout(() => {
                window.scrollTo(0, document.body.scrollHeight);
            })
        } else {
            alert('Fill all the fields');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='paymentUserInfo'>
                <h2>1- Information</h2>
                <div className='inputLabelWrapper'>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className='firstLastnamePaymentWrapper'>
                    <div className='inputLabelWrapper'>
                        <label>First name</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className='inputLabelWrapper'>
                        <label>Last name</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                </div>

                <div className='inputLabelWrapper'>
                    <label>Phone Number</label>
                    <input type="number" name="phone" value={formData.phone} onChange={handleChange} />
                </div>

                <div className='inputLabelWrapper'>
                    <label>Address</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                </div>
                <p className='btn' onClick={handleInfoCheck} style={{ marginTop: '15px' }}>Procees to payment</p>
            </div>

            <div className="cardDetailsWrapper">
                <h2 style={{ marginBottom: '15px' }}>2- Payment</h2>
                {isInfoCompleted &&
                <div className="paymentMethodsWrapper">
                    {/* Master card payment method */}
                    <div className="paymentMethod">
                        <div>
                            <div>
                                <input type="radio" id='cardPaymentOption' checked={option === 'cardPaymentOption'} onChange={handleOptions} />
                                <label htmlFor="cardPaymentOption">Pay with card</label>
                            </div>
                            <img src="https://pngimg.com/uploads/mastercard/mastercard_PNG7.png" alt="Mastercard" />
                        </div>
                        {option === 'cardPaymentOption' &&
                        <div className='cardElementMainWrapper'>
                            <div>
                                <div>
                                    <h5>Card number</h5>
                                    <CardNumberElement />
                                    <img src="https://www.freeiconspng.com/thumbs/credit-card-icon-png/credit-card-black-png-0.png" alt="CARD" />
                                    
                                </div>
                                <div>
                                    <h5>Expiration date</h5>
                                    <CardExpiryElement />
                                    <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-531/64/Pending_payment-512.png" alt="Expiration" />
                                </div>
                                <div>
                                    <h5>Security code</h5>
                                    <CardCvcElement />
                                    <img src="https://cdn2.iconfinder.com/data/icons/bank-card/100/credit_debit_card_bank_pay_payment-02-512.png" alt="CVC" />
                                </div>
                            </div>
                            <button>Pay</button>
                        </div>}
                    </div>
                    {/* Swish payment method */}
                    <div className="paymentMethod">
                        <div>
                            <div>
                                <input type="radio" id='swishPaymentOption' checked={option === 'swishPaymentOption'} onChange={handleOptions} />
                                <label htmlFor="swishPaymentOption">Pay with Swish</label>
                            </div>
                            <img src="https://www.bio-nology.com/wp-content/uploads/2023/06/Swish-Logo-Primary-PNG.png" alt="Swish" />
                        </div>
                        {option === 'swishPaymentOption' &&
                        <button>Procees with Swish</button>}
                    </div>
                    {/* Paypal payment method */}
                    <div className="paymentMethod">
                        <div>
                            <div>
                                <input type="radio" id='paypalPaymentOption' checked={option === 'paypalPaymentOption'} onChange={handleOptions} />
                                <label htmlFor="paypalPaymentOption">Pay with Paypal</label>
                            </div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="Paypal" />
                        </div>
                        {option === 'paypalPaymentOption' &&
                        <button>Procees with Paypal</button>}
                    </div>
                    {/* Klarna payment methods */}
                    <div className="paymentMethod">
                        <div>
                            <div>
                                <input type="radio" id='klarna1PaymentOption' checked={option === 'klarna1PaymentOption'} onChange={handleOptions} />
                                <label htmlFor="klarna1PaymentOption">Pay now with Klarna</label>
                            </div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Klarna_Payment_Badge.svg/2560px-Klarna_Payment_Badge.svg.png" alt="Klarna" />
                        </div>
                        {option === 'klarna1PaymentOption' &&
                        <button>Procees with Klarna</button>}
                    </div>
                    <div className="paymentMethod">
                        <div>
                            <div>
                                <input type="radio" id='klarna2PaymentOption' checked={option === 'klarna2PaymentOption'} onChange={handleOptions} />
                                <label htmlFor="klarna2PaymentOption">Pay later with Klarna</label>
                            </div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Klarna_Payment_Badge.svg/2560px-Klarna_Payment_Badge.svg.png" alt="Klarna" />
                        </div>
                        {option === 'klarna2PaymentOption' &&
                        <button>Procees with pay later with Klarna</button>}
                    </div>
                    <div className="paymentMethod">
                        <div>
                            <div>
                                <input type="radio" id='klarna3PaymentOption' checked={option === 'klarna3PaymentOption'} onChange={handleOptions} />
                                <label htmlFor="klarna3PaymentOption">Partial payment with Klarna</label>
                            </div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Klarna_Payment_Badge.svg/2560px-Klarna_Payment_Badge.svg.png" alt="Klarna" />
                        </div>
                        {option === 'klarna3PaymentOption' &&
                        <button>Procees with partial payment by Klarna</button>}
                    </div>
                </div>}
            </div>
            {/* <button type="submit" disabled={!stripe}>Pay</button> */}
        </form>
    )
}

export default PaymentForm;