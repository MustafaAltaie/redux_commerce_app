import { useState, useRef, useEffect } from "react";
import {  } from "../../../features/productApi";

const Section1Settings = ({ isLoading, imageList, handleRemoveImage, updateHomePageList }) => {
    const [menu, setMenu] = useState(false);
    const [gallery, setGallery] = useState(false);
    const [linkText, setLinkText] = useState(false);
    const [imageLink, setImageLink] = useState('');
    const textRef = useRef(null);

    useEffect(() => {
        textRef.current?.focus();
    }, [linkText]);

    useEffect(() => {
        const clickOutside = (e) => {
            if(e.target.className !== 'section1SettingMenu' &&
                e.target.className !== 'dashboardSettingWrapper'&&
                e.target.className !== 'sec1MenuOption'){
                setMenu(false);
                setGallery(false);
                setLinkText(false);
                setImageLink('');
            }
        }

        document.addEventListener('click', clickOutside);
        return () => document.removeEventListener('click', clickOutside);
    }, []);

    const handleAddImage = () => {
        if(!imageList.includes(imageLink)){
            if(imageLink.trim()) {
                const newList = [...imageList, imageLink];
                updateHomePageList({ homeSection1: newList });
            }
        } else {
            alert('Image is alreade existed');
        }
        textRef.current.focus();
        setImageLink('');
    }

    return (
        <div className="section1Settings">
            <div>
                {menu &&
                <div className="section1SettingMenu">
                    <p className="sec1MenuOption" onClick={() => setLinkText(!linkText)}>Add Image</p>
                    {linkText &&
                    <input
                        className="sec1MenuOption"
                        type="text"
                        ref={textRef}
                        placeholder="Image link"
                        value={imageLink}
                        onChange={e => setImageLink(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleAddImage(e)}
                    />}
                    {imageLink &&
                    <button className="sec1MenuOption" onClick={handleAddImage}>Add</button>}
                    <p className="sec1MenuOption" onClick={() => setGallery(!gallery)}>Images gallery</p>
                    {gallery && !isLoading && 
                        <div className="sec1MenuOption">
                            {imageList.map(image => 
                                <div className="sec1MenuOption" key={image} onClick={() => handleRemoveImage(image)}>
                                    <img className="sec1MenuOption" src={image} alt="Image" />
                                </div>  
                            )}
                        </div>
                    }
                </div>}
                <div className="dashboardSettingWrapper" onClick={() => setMenu(true)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Section1Settings;