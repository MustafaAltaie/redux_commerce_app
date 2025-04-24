import { useState } from "react";
import { useDeleteSec4OfferMutation, useUpdateSec4OfferMutation } from "../../../features/productApi";
import { useLocation } from "react-router-dom";

const Section4Card = ({ setLeftValue, savedOffer, offerObject, setUpdateMode, setOffer, setCurrentId, currentId }) => {
    const [menu, setMenu] = useState(false);
    const location = useLocation();
    const [deleteSec4Offer] = useDeleteSec4OfferMutation();
    const [updateSec4Offer] = useUpdateSec4OfferMutation();

    const handleDeleteOffer = async () => {
        if(confirm('Confirm deleting offer')){
            const res = await deleteSec4Offer(savedOffer._id);
            alert(res.data.message);
        }
    }

    const handlePrepareUpdate = (e) => {
        setLeftValue(e.clientX);
        setMenu(false);
        setUpdateMode(true);
        const updated = offerObj(savedOffer.isSpecial);
        setOffer(updated);
        setCurrentId(savedOffer._id);
    }

    const handleUpdateIsSpecial = () => {
        const updated = offerObj(!savedOffer.isSpecial);
        setOffer(updated);
        updateSec4Offer(updated);
        setMenu(false);
    }

    const offerObj = (special) => ({
        id: savedOffer._id,
        imageLink: savedOffer.imageLink,
        title: savedOffer.title,
        titleColor: savedOffer.titleColor,
        description: savedOffer.description,
        descriptionColor: savedOffer.descriptionColor,
        list: savedOffer.list,
        isBlack: savedOffer.isBlack,
        isSpecial: Boolean(special)
    });

    return (
        <div className={savedOffer.isSpecial ? 'secSpecial4Offer sec4Offer' : 'sec4Offer'}>
            {savedOffer.isSpecial &&
            <div className="offerGoldenLabel">
                <p>Lorem ipsum dolor Lorem</p>
                <h5>Premium Offer</h5>
                <h4>100%</h4>
            </div>}
            {savedOffer.isSpecial &&
            <div className="offerGoldenLabel2"></div>}
            {location.pathname === '/home/dashboard' &&
            <div className="sec4OfferSettings" onClick={() => setMenu(true)}>
                <div></div>
                <div></div>
                <div></div>
            </div>}
            {menu &&
            <div className="sec4OfferSettingMenu">
                <p className="sec4Option" onClick={e => handlePrepareUpdate(e)}><i className="fa-solid fa-pen"></i>Update details</p>
                <p onClick={handleDeleteOffer}><i className="fa-solid fa-trash"></i>Delete offer</p>
                <p onClick={handleUpdateIsSpecial}><i className="fa-solid fa-coins"></i>{savedOffer.isSpecial ? 'Remove premium status' : 'Mark as a premium offer'}</p>
                <p onClick={() => setMenu(false)}><i className="fa-solid fa-circle-xmark"></i>Close menu</p>
            </div>}
            <div className="sec4OfferImageWrapper">
                <img src={currentId === savedOffer._id ? offerObject.imageLink : savedOffer.imageLink} alt="Broken" />
            </div>
            <h3 style={{ color: currentId === savedOffer._id ? offerObject.titleColor : savedOffer.titleColor }}>{currentId === savedOffer._id ? offerObject.title : savedOffer.title}</h3>
            <h5 style={{ color: currentId === savedOffer._id ? offerObject.descriptionColor : savedOffer.descriptionColor }}>{currentId === savedOffer._id ? offerObject.description : savedOffer.description}</h5>
            <ul>
                {currentId === savedOffer._id ? offerObject.list.map(option => <li key={option}>- {option}</li>) : savedOffer.list.map(option => <li key={option}>- {option}</li>)}
            </ul>
            <button style={{ background: currentId === savedOffer._id ? offerObject.titleColor : savedOffer.titleColor, color: currentId === savedOffer._id ? offerObject.isBlack ? '#000' : '#fff' : savedOffer.isBlack ? '#000' : '#fff' }}>Lorem ipsum dolor</button>
        </div>
    )
}

export default Section4Card;