import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [numOfItems, setNumOfItems] = useState(0);

    const gotoChart = () => {
        navigate('/cart');
    }

    useEffect(() => {
        const numOfStorageItems = localStorage.getItem('cart');
        if(numOfStorageItems){
            let num = JSON.parse(numOfStorageItems).length;
            setNumOfItems(num)
        }
    }, []);

    return (
        <header>
            <div>
            <div className="logo">APP LOGO</div>
            <nav>
                <p>item</p>
                <p>item</p>
                <p>item</p>
                <p>item</p>
                <p>item</p>
                <p>item</p>
            </nav>
            <div className='signIn-Up-Cart-Wrapper'>
                <input type="text" placeholder='Search' />
                <button>Sign in</button>
                <button>Sign up</button>
                <div className='cartWrapper' onClick={gotoChart}>
                <h1>🛒</h1>
                <p>{numOfItems}</p>
                </div>
            </div>
            </div>
        </header>
    )
}

export default Header;