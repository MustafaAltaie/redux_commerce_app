const PaymentFormUserInfo = ({ formData, handleChange, handleInfoCheck }) => {
  return (
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
  )
}

export default PaymentFormUserInfo;