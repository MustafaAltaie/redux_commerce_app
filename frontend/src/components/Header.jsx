import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useReadProductQuery } from "../features/productApi";
import { useState } from "react";
import { handleShowBrand } from "../features/cartSlice";

const Header = () => {
    const navigate = useNavigate();
    const numOfItems = useSelector(state => state.cart.storageItems.length) || 0;
    const { data, isLoading } = useReadProductQuery();
    const [toggleQuickSearch, setToggleQuickSearch] = useState(false);
    const dispatch = useDispatch();

    if(isLoading) return <p>Loading...</p>

    const gotoChart = () => {
        navigate('/cart');
    }

    const brandList = [...new Set(data.map(item => item.brand).filter(brand => brand && brand.trim() !== ''))];

    return (
        <header>
            <div>
                <div className="logo">APP LOGO</div>
                <nav>
                    <p>Home</p>
                    <p>Contact us</p>
                    <p>About us</p>
                    <p>Help & Support</p>
                </nav>
                <div className='signIn-Up-Cart-Wrapper'>
                    <div>
                        <input type="text" placeholder='Search' />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="userIconWrapper">
                        <img src="https://www.freeiconspng.com/uploads/account-profile-icon-1.png" alt="User" />
                    </div>
                    <div className='cartWrapper' onClick={gotoChart}>
                        <h1 style={{ filter: 'brightness(120%)' }}>🛒</h1>
                        {numOfItems > 0 &&
                        <p>{numOfItems}</p>}
                    </div>
                </div>
            </div>
            <div className="quickSearchNav">
                <div title={toggleQuickSearch ? 'Close' : 'Open'} className="brandSearchListToggle" onClick={() => setToggleQuickSearch(!toggleQuickSearch)}>
                    <div style={toggleQuickSearch ? { transform: 'translate(0, 300%) rotate(45deg)' } : {}}></div>
                    <div style={toggleQuickSearch ? { opacity: 0 } : {}}></div>
                    <div style={toggleQuickSearch ? { transform: 'translate(0, -300%) rotate(-45deg)' } : {}}></div>
                </div>
                {toggleQuickSearch &&
                <div className="brandSearchWrapper">
                    {brandList.length > 0 && <i onClick={() => {dispatch(handleShowBrand('')); setToggleQuickSearch(false)}}>Show all</i>}
                    {brandList.map((brand, index) => (
                        <i key={index} onClick={() => {dispatch(handleShowBrand(brand)); setToggleQuickSearch(false)}}>{brand.charAt(0).toUpperCase() + brand.slice(1)}</i>
                    ))}
                </div>}
            </div>
        </header>
    )
}

export default Header;