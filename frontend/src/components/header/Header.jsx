import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useReadProductQuery } from "../../features/productApi";
import { useRef, useState } from "react";
import { handleShowBrand } from "../../features/cartSlice";
import '../../style/subNavModels.css';
import Laptops from "../subNavModels/Laptops";
import Headsets from "../subNavModels/Headsets";
import Mobiles from "../subNavModels/Mobiles";
import Ipads from "../subNavModels/Ipads";
import Drones from "../subNavModels/Drones";
import Accessories from "../subNavModels/Accessories";
import Watches from "../subNavModels/Watches";
import Keyboards from "../subNavModels/Keyboards";
import Mice from "../subNavModels/Mice";
import Gaming from "../subNavModels/Gaming";
import Screens from "../subNavModels/Screens";

const Header = () => {
    const numOfItems = useSelector(state => state.cart.storageItems.length) || 0;
    const { data, isLoading } = useReadProductQuery();
    const [toggleQuickSearch, setToggleQuickSearch] = useState(false);
    const dispatch = useDispatch();
    // Models
    const [laptopModel, setLaptopModel] = useState(false);
    const [headsetModel, setHeadsetModel] = useState(false);
    const [mobileModel, setMobileModel] = useState(false);
    const [ipadModel, setIpadModel] = useState(false);
    const [tvModel, setTvModel] = useState(false);
    const [accessoryModel, setAccessoryModel] = useState(false);
    const [watchModel, setWatchModel] = useState(false);
    const [keyboardModel, setKeyboardModel] = useState(false);
    const [mouseModel, setMouseModel] = useState(false);
    const [gamingModel, setGamingModel] = useState(false);
    const [screenModel, setScreenModel] = useState(false);
    const location = useLocation();
    const timeoutRef = useRef(null);

    if(isLoading) return;

    const brandList = [...new Set(data.map(item => item.brand).filter(brand => brand && brand.trim() !== ''))];

    const mouseEnterDelay = (setStateFn) => {
        timeoutRef.current = setTimeout(() => {
            setStateFn(true);
        }, 300);
    }

    const mouseLeave = (setStateFn) => {
        clearTimeout(timeoutRef.current);
        setStateFn(false);
    }

    return (
        <header>
            <div>
                <Link to='/' className="logo">APP LOGO</Link>
                <nav className="mainNav">
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
                    <Link to="/cart" className="cartWrapper">
                        <h1 style={{ filter: 'brightness(120%)' }}>🛒</h1>
                        {numOfItems > 0 && <p>{numOfItems}</p>}
                    </Link>
                </div>
            </div>
            {!location.pathname.includes('product') && !location.pathname.includes('payment') && !location.pathname.includes('cart') &&
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
                <nav className="subNav">
                    <p onMouseEnter={() => mouseEnterDelay(setHeadsetModel)} onMouseLeave={() => mouseLeave(setHeadsetModel)} className={headsetModel ? 'subNavOptionActive' : ''}>Headsets</p>
                    <p onMouseEnter={() => mouseEnterDelay(setLaptopModel)} onMouseLeave={() => mouseLeave(setLaptopModel)} className={laptopModel ? 'subNavOptionActive' : ''}>Laptops</p>
                    <p onMouseEnter={() => mouseEnterDelay(setMobileModel)} onMouseLeave={() => mouseLeave(setMobileModel)} className={mobileModel ? 'subNavOptionActive' : ''}>Mobile Phones</p>
                    <p onMouseEnter={() => mouseEnterDelay(setIpadModel)} onMouseLeave={() => mouseLeave(setIpadModel)} className={ipadModel ? 'subNavOptionActive' : ''}>iPads</p>
                    <p onMouseEnter={() => mouseEnterDelay(setTvModel)} onMouseLeave={() => mouseLeave(setTvModel)} className={tvModel ? 'subNavOptionActive' : ''}>Drones</p>
                    <p onMouseEnter={() => mouseEnterDelay(setAccessoryModel)} onMouseLeave={() => mouseLeave(setAccessoryModel)} className={accessoryModel ? 'subNavOptionActive' : ''}>Accessories</p>
                    <p onMouseEnter={() => mouseEnterDelay(setWatchModel)} onMouseLeave={() => mouseLeave(setWatchModel)} className={watchModel ? 'subNavOptionActive' : ''}>Smart Watches</p>
                    <p onMouseEnter={() => mouseEnterDelay(setKeyboardModel)} onMouseLeave={() => mouseLeave(setKeyboardModel)} className={keyboardModel ? 'subNavOptionActive' : ''}>Keyboards</p>
                    <p onMouseEnter={() => mouseEnterDelay(setMouseModel)} onMouseLeave={() => mouseLeave(setMouseModel)} className={mouseModel ? 'subNavOptionActive' : ''}>Computer Mice</p>
                    <p onMouseEnter={() => mouseEnterDelay(setGamingModel)} onMouseLeave={() => mouseLeave(setGamingModel)} className={gamingModel ? 'subNavOptionActive' : ''}>Gaiming</p>
                    <p onMouseEnter={() => mouseEnterDelay(setScreenModel)} onMouseLeave={() => mouseLeave(setScreenModel)} className={screenModel ? 'subNavOptionActive' : ''}>Screens</p>
                </nav>
            </div>}
            {laptopModel &&
            <div onMouseEnter={() => setLaptopModel(true)} onMouseLeave={() => setLaptopModel(false)}><Laptops /></div>}
            {headsetModel &&
            <div onMouseEnter={() => setHeadsetModel(true)} onMouseLeave={() => setHeadsetModel(false)}><Headsets /></div>}
            {mobileModel &&
            <div onMouseEnter={() => setMobileModel(true)} onMouseLeave={() => setMobileModel(false)}><Mobiles /></div>}
            {ipadModel &&
            <div onMouseEnter={() => setIpadModel(true)} onMouseLeave={() => setIpadModel(false)}><Ipads /></div>}
            {tvModel &&
            <div onMouseEnter={() => setTvModel(true)} onMouseLeave={() => setTvModel(false)}><Drones /></div>}
            {accessoryModel &&
            <div onMouseEnter={() => setAccessoryModel(true)} onMouseLeave={() => setAccessoryModel(false)}><Accessories /></div>}
            {watchModel &&
            <div onMouseEnter={() => setWatchModel(true)} onMouseLeave={() => setWatchModel(false)}><Watches /></div>}
            {keyboardModel &&
            <div onMouseEnter={() => setKeyboardModel(true)} onMouseLeave={() => setKeyboardModel(false)}><Keyboards /></div>}
            {mouseModel &&
            <div onMouseEnter={() => setMouseModel(true)} onMouseLeave={() => setMouseModel(false)}><Mice /></div>}
            {gamingModel &&
            <div onMouseEnter={() => setGamingModel(true)} onMouseLeave={() => setGamingModel(false)}><Gaming /></div>}
            {screenModel &&
            <div onMouseEnter={() => setScreenModel(true)} onMouseLeave={() => setScreenModel(false)}><Screens /></div>}
        </header>
    )
}

export default Header;