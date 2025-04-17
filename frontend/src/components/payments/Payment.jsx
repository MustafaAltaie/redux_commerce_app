import Header from "../header/Header";
import PaymentForm from "./PaymentForm";
import PaymentFormOrder from "./PaymentFormOrder";

const Payment = () => {
    return (
        <>
        <Header />
        <div className='paymentFormMainWrapper'>
            <PaymentForm />
            <PaymentFormOrder />
        </div>
        </>
    );
};

export default Payment;