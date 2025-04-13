import PaymentForm from "./PaymentForm";
import PaymentFormOrder from "./PaymentFormOrder";
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate();

    return (
        <>
        <div className="logo" style={{ background: '#487194', padding: '10px' }} onClick={() => navigate('/')}>APP LOGO</div>
        <div className='paymentFormMainWrapper'>
            <PaymentForm />
            <PaymentFormOrder />
        </div>
        </>
    );
};

export default Payment;