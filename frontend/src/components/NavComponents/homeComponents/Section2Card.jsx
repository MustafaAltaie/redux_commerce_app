import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDeleteSec2CardMutation } from "../../../features/productApi";

const Section2Card = (props) => {
    const [cardmenu, setCardMenu] = useState(false);
    const [deleteSec2Card] = useDeleteSec2CardMutation();
    const location = useLocation(0);

    const handleDelete = () => {
        if(confirm('Confirm deleting card')){
            deleteSec2Card(props.card._id);
        }
        setCardMenu(false);
    }

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
                <p className="sec2MenuOption" onClick={() => {props.handlePrepareUpdate(props.card); setCardMenu(false)}}><i style={{ paddingRight: '10px' }} className="fa-solid fa-pen"></i>Edit card</p>
                <p onClick={handleDelete}><i style={{ paddingRight: '10px' }} className="fa-solid fa-trash"></i>Delete card</p>
                <p onClick={() => setCardMenu(false)}><i style={{ paddingRight: '10px' }} className="fa-solid fa-circle-xmark"></i>Close menu</p>
            </div>}
            <div>
                <b>{props.currentId === props.card._id ? props.title : props.card.title}</b>
                <h5>{props.currentId === props.card._id ? props.description : props.card.description}</h5>
                <h1>{props.currentId === props.card._id ? props.category : props.card.category}</h1>
                <button style={props.currentId !== props.card._id ? { color: props.card.isBlack ? 'black' : 'white', background: props.card.color || '#fff' } : {color: props.isBlack ? 'black' : 'white', background: props.color || '#fff'}}>Learn more</button>
            </div>
            <img src={props.card._id === props.currentId ? (props.image) : (props.card.image || 'https://static.thenounproject.com/png/212328-200.png')} alt="Image" />
        </div>
    )
}

export default Section2Card;