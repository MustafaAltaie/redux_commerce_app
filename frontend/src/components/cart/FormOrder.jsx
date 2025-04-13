

const FormOrder = ({ storageItems }) => {
    return (
        storageItems.map( item => (
            <div className="paymentFormOrder" key={item._id}>
            <div className="paymentFormImageWrapper">
                <img src={item.imageUrls[0]} alt="Image" />
            </div>
            <div className="paymentFormOrderDetails">
                <div>
                    <h4>Price details</h4>
                    <div>
                        <p><span className="greySmall">Price:</span> {(item.discount ? Math.floor(item.price * (1 - item.discount / 100)) : item.price) * item.count}:-</p>
                        {item.discount &&
                        <p><span className="greySmall">Save:</span> {(item.price - Math.floor(item.price * (1 - item.discount / 100)))*item.count}:-</p>}
                    </div>
                    {item.discount &&
                    <div>
                        <p className="oldPrice">{item.price * item.count}:-</p>
                        <p>{item.discount}% <span className="greySmall">OFF:</span></p>
                    </div>}
                </div>
                <p className="greySmall">Quantity: {item.count}</p>
                <h4 style={{ color: '#07a' }}>{item.title}</h4>
                <p className="greySmall">{item.description.slice(0, 70)}...</p>
            </div>
        </div>
        ))
    )
}

export default FormOrder;