import { useState } from 'react';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import '../../style/payment.css';
import PaymentFormMethods from './PaymentFormMethods';
import PaymentFormUserInfo from './PaymentFormUserInfo';

const PaymentForm = () => {
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
            <PaymentFormUserInfo formData={formData} handleChange={handleChange} handleInfoCheck={handleInfoCheck} />

            <div className="cardDetailsWrapper">
                <h2 style={{ marginBottom: '15px' }}>2- Payment</h2>
                {isInfoCompleted &&
                <PaymentFormMethods
                    CardNumberElement={CardNumberElement}
                    CardExpiryElement={CardExpiryElement}
                    CardCvcElement={CardCvcElement}
                />
                }
            </div>
            {/* <button type="submit" disabled={!stripe}>Pay</button> */}
        </form>
    )
}

export default PaymentForm;