import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const numOfItems = useSelector(state => state.cart.storageItems.length) || 0;

    const gotoChart = () => {
        navigate('/cart');
    }

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
                {numOfItems > 0 &&
                <p>{numOfItems}</p>}
                </div>
            </div>
            </div>
        </header>
    )
}

export default Header;