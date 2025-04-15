import PaymentForm from "./PaymentForm";
import PaymentFormOrder from "./PaymentFormOrder";
import { useNavigate, Link } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate();

    return (
        <>
        <div style={{ background: '#487194', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className="logo" onClick={() => navigate('/')} style={{ fontWeight: 'normal' }}>APP LOGO</h3>
            <Link to="/cart" className="cartWrapper">
                <h1 style={{ filter: 'brightness(120%)' }}>🛒</h1>
            </Link>
        </div>
        <div className='paymentFormMainWrapper'>
            <PaymentForm />
            <PaymentFormOrder />
        </div>
        </>
    );
};

export default Payment;