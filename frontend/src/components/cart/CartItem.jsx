import { useState } from "react";
import { useDispatch } from 'react-redux';
import { increaseTotalPrice, decreaseTotalPrice } from "../../features/cartSlice";

const CartItem = ({ product, handleStoredItem, deleted, setDeleted }) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const currentItemPrice = product.discount ? Math.floor(product.price * (1 - product.discount / 100)) : product.price;

    const handleIncreaseTotalPrice = () => {
        dispatch(increaseTotalPrice(currentItemPrice));
    }

    const handleDecreaseTotalPrice = () => {
        dispatch(decreaseTotalPrice(currentItemPrice));
    }

    const handleRemoveItem = () => {
        handleStoredItem(product, count);
        setDeleted(product._id);
    }

    return (
        <div className="cartItem" style={{ transform: deleted === product._id && 'translateX(-100%)' }}>
            <div>
                <img src={product.imageUrls[0]} alt="Image" />
                <div>
                    <h4>{product.title}</h4>
                    <p><span>Color: </span>{product.color}</p>
                    <p><span>Shipment in: </span>{product.shipment} days</p>
                </div>
            </div>
            <div>
                <p><span>Price: </span>{currentItemPrice}:-</p>
                {product.discount &&
                <p><span>Discount: </span>{product.discount}%</p>}
                {product.discount &&
                <p><span>Old price: </span>{product.price}:-</p>}
            </div>
            <div>
                <div>
                    <b onClick={() => {setCount(count - 1); handleDecreaseTotalPrice()}} style={{ pointerEvents: count <= 1 ? 'none' : 'unset' }}>-</b>
                    <p>{count}</p>
                    <b onClick={() => {setCount(count + 1); handleIncreaseTotalPrice()}}>+</b>
                </div>
                <h4>{currentItemPrice * count}:-</h4>
            </div>
            <div onClick={handleRemoveItem}>
                <h3>🗑️</h3>
            </div>
        </div>
    )
}

export default CartItem;