import { useState } from "react";
import { useLocation } from "react-router-dom";

const Section2Card = ({ card, handlePrepareUpdate }) => {
    const [cardmenu, setCardMenu] = useState(false);
    const location = useLocation(0);

    return (
        <div className="homePageSection2Cards">
            {location.pathname === '/home/dashboard' &&
            <div className="sec2CardSetting" onClick={() => setCardMenu(true)}>
                <div></div>
                <div></div>
                <div></div>
            </div>}
            {cardmenu && location.pathname === '/home/dashboard' &&
            <div className="sec2CardSettingMenu">
                <p className="sec2MenuOption" onClick={() => {handlePrepareUpdate(card); setCardMenu(false)}}>Edit card</p>
                <p>Delete card</p>
                <p onClick={() => setCardMenu(false)}>Close menu</p>
            </div>}
            <div>
                <b>{card.title}</b>
                <h5>{card.description}</h5>
                <h1>{card.category}</h1>
                <button style={{ color: card.isBlack ? 'black' : 'white', background: card.color || '#fff' }}>Learn more</button>
            </div>
            <img src={card.image || 'https://static.thenounproject.com/png/212328-200.png'} alt="Image" />
        </div>
    )
}

export default Section2Card;