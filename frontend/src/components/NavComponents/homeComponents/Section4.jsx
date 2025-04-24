import Section4Card from "./Section4Card";
import Section4Settings from "./Section4Settings";
import { useRef, useState, useEffect } from 'react';
import { useCreateSec4OfferMutation, useReadSec4OffersQuery, useUpdateSec4OfferMutation } from '../../../features/productApi';
import { useLocation } from 'react-router-dom';

const Section4 = () => {
    const [menu, setMenu] = useState(false);
    const [leftValue, setLeftValue] = useState(10);
    const [updateMode, setUpdateMode] = useState(false);
    const [offer, setOffer] = useState({
        id: '',
        imageLink: '',
        title: '',
        titleColor: '#000',
        description: '',
        descriptionColor: '#000',
        list: [],
        isBlack: false,
        isSpecial: false
    });
    const [listText, setListText] = useState('');
    const [deleted, setDeleted] = useState('');
    const [currentId, setCurrentId] = useState('');
    const listTextRef = useRef();
    const location = useLocation();
    const [createSec4Offer] = useCreateSec4OfferMutation();
    const [updateSec4Offer] = useUpdateSec4OfferMutation();
    const { data: offers, isLoading } = useReadSec4OffersQuery();

    useEffect(() => {
        const xPosition = (e) => {
            if (e.target.classList.contains('sec4Option') ||
            e.target.classList.contains('sec4SettingOption')){
                if (!e.target.classList.contains('sec4AddOffer')) {
                    if(e.clientX >= document.documentElement.clientWidth/1.7) {
                        e.target.classList.contains('sec4Option') && setLeftValue(document.documentElement.clientWidth/1.6);
                    } else {
                        e.target.classList.contains('sec4Option') && setLeftValue(e.clientX + 550);
                    }
                } else {
                    setLeftValue(e.clientX + 300);
                }
                setMenu(true);
            }
        }

        document.addEventListener('click', xPosition);
        return () => document.removeEventListener('click', xPosition);
    }, []);

    useEffect(() => {
        const handleHideMenu = (e) => {
            if(!e.target.classList.contains('sec4Option') &&
                !e.target.classList.contains('sec4SettingOption')){
                setMenu(false);
                setTimeout(() => {
                    clearOffer();
                }, 10);
                setCurrentId('');
            }
        }

        document.addEventListener('mousedown', handleHideMenu);
        return () => document.removeEventListener('mousedown', handleHideMenu);
    }, []);

    if(isLoading) return <p>...Loading</p>

    const handleAddToList = () => {
        if(listText.trim()){
            if(!offer.list.includes(listText)){
                setOffer(prev => ({
                    ...prev, list: [...prev.list, listText]
                }));
                setListText('');
                listTextRef.current.focus();
            } else {
                alert('Option existed');
            }
        }
    }

    const handleRemoveFromList = (option) => {
        setDeleted(option);
        setTimeout(() => {
            setOffer(prev => ({
                ...prev, list: prev.list.filter(o => o !== option)
            }));
        }, 300);
    }

    // Create or update offers
    const handleCreateOffer = () => {
        if(offer.imageLink && offer.title && offer.description && offer.list.length > 0) {
            if(!updateMode) {
                createSec4Offer(offer);
            } else {
                updateSec4Offer(offer);
            }
            setTimeout(() => {
                setMenu(false);
            });
            clearOffer();
            setCurrentId('');
        } else {
            alert('All fields are required');
        }
    }

    const clearOffer = () => {
        setOffer({
            imageLink: '',
            title: '',
            titleColor: '#000',
            description: '',
            descriptionColor: '#000',
            list: [],
            isBlack: false,
            isSpecial: false
        })
    }

    return (
        <section className="homePageSection4">
            {offers.length < 4 && location.pathname === '/home/dashboard' &&
            <h1 className="sec4AddOffer sec4Option" onClick={() => {setUpdateMode(false); setCurrentId('')}}>+</h1>}
            {menu &&
            <Section4Settings
                left={leftValue}
                offer={offer}
                setOffer={setOffer}
                listText={listText}
                setListText={setListText}
                deleted={deleted}
                setDeleted={setDeleted}
                listTextRef={listTextRef}
                createSec4Offer={createSec4Offer}
                handleAddToList={handleAddToList}
                handleRemoveFromList={handleRemoveFromList}
                handleCreateOffer={handleCreateOffer}
                clearOffer={clearOffer}
            />}
            <div className="sec4mainWrapper">
                {offers.map(savedOffer => 
                    <Section4Card
                        key={savedOffer._id}
                        setLeftValue={setLeftValue}
                        savedOffer={savedOffer}
                        setOffer={setOffer}
                        setUpdateMode={setUpdateMode}
                        offerObject={offer}
                        setCurrentId={setCurrentId}
                        currentId={currentId}
                    />
                )}
                {menu && !updateMode && location.pathname === '/home/dashboard' &&
                <div className="sec4Offer">
                    <div className="sec4OfferImageWrapper">
                        <img src={offer.imageLink || "https://cdn-icons-png.flaticon.com/512/7729/7729432.png"} alt="img" />
                    </div>
                    <h3 style={{ color: offer.titleColor }}>{offer.title}</h3>
                    <h5 style={{ color: offer.descriptionColor }}>{offer.description}</h5>
                    <ul>
                        {offer.list.map(option => <li key={option}>- {option}</li>)}
                    </ul>
                    <button style={{ background: offer.titleColor, color: offer.isBlack ? '#000' : '#fff' }}>Lorem ipsum dolor</button>
                </div>}
            </div>
        </section>
    )
}

export default Section4;