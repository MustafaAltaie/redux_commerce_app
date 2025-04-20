import { useEffect, useState } from "react";
import Section2Settings from "./Section2Settings";
import { useReadSec2CardQuery } from "../../../features/productApi";
import Section2Card from "./Section2Card";
import { useLocation } from 'react-router-dom';

const Section2 = () => {
    const [menu, setMenu] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [color, setColor] = useState('#ffffff');
    const [isBlack, setIsBlack] = useState(true);
    const [currentId, setCurrentId] = useState('');
    const { data: cards, isLoading } = useReadSec2CardQuery();
    const location = useLocation();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if(e.target.className !== 'homePageSection2Cards' &&
                e.target.className !== 'homePageSec2SettingMenu' &&
                e.target.className !== 'homePageSeceSettingMenu' &&
                e.target.className !== 'sec2MenuOption') {
                setMenu(false);
                setCurrentId('');
            }
        }
        document.addEventListener('click', handleClickOutside);
        return() => document.removeEventListener('click', handleClickOutside);
    }, []);

    if(isLoading) return <p>Loading...</p>

    const handlePrepareUpdate = (card) => {
        setMenu(true);
        setCurrentId(card._id);
        setTitle(card.title);
        setDescription(card.description);
        setCategory(card.category);
        setImage(card.image);
        setColor(card.color);
        setIsBlack(card.isBlack);
    }

    return (
        <section className="homePageSection2">
            <h3>Lorem Ipsum</h3>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sint esse nemo laborum provident omnis error facere nesciunt delectus? Dolor natus ut perspiciatis alias labore est quis modi nisi odio.</h5>
            <div>
                {cards.map(card => 
                    <Section2Card
                        key={card._id}
                        card={card}
                        handlePrepareUpdate={handlePrepareUpdate}
                    />
                )}
                {menu && !currentId && location.pathname === '/home/dashboard' &&
                <div className="homePageSection2Cards">
                    <div>
                        <b>{title}</b>
                        <h5>{description}</h5>
                        <h1>{category}</h1>
                        <button style={{ color: isBlack ? 'black' : 'white', background: color || '#fff' }}>Learn more</button>
                    </div>
                    <img src={image || 'https://static.thenounproject.com/png/212328-200.png'} alt="Image" />
                </div>}
                {!menu && location.pathname === '/home/dashboard' &&
                <div
                    className="homePageSection2Cards"
                    style={{ justifyContent: 'center', cursor: 'pointer' }}
                    onClick={() => setMenu(true)}
                >
                    <h1 style={{ fontSize: '40px', pointerEvents: 'none' }}>+</h1>
                </div>}
                {location.pathname === '/home/dashboard' &&
                <Section2Settings
                    menu={menu}
                    setMenu={setMenu}
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                    category={category}
                    setCategory={setCategory}
                    image={image}
                    setImage={setImage}
                    color={color}
                    setColor={setColor}
                    isBlack={isBlack}
                    setIsBlack={setIsBlack}
                    currentId={currentId}
                    setCurrentId={setCurrentId}
                />}
            </div>
        </section>
    )
}

export default Section2;