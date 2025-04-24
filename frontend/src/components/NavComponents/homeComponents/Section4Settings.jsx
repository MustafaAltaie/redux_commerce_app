

const Section4Settings = (props) => {
    return (
        <div className="sec4SettingMenu sec4SettingOption" style={{left: props.left - 270 + 'px'}}>
            <div className="sec4SettingOption sec4InputLabelWrapper">
                <h5>Image link</h5>
                <input type="text" className="sec4SettingOption" value={props.offer.imageLink}
                    onChange={e => props.setOffer(prev => ({
                        ...prev, imageLink: e.target.value
                    }))
                } />
            </div>
            <div className="sec4SettingOption sec4ImageWrapper">
                <img src={props.offer.imageLink || 'https://cdn-icons-png.flaticon.com/512/7729/7729432.png'} alt="Broken" />
            </div>
            <div className="sec4SettingOption sec4InputLabelWrapper" style={{ display: 'flex', gap: '10px' }}>
                <h5>Title and color</h5>
                <input type="text" className="sec4SettingOption" value={props.offer.title}
                    onChange={e => props.setOffer(prev => ({
                        ...prev, title: e.target.value
                    }))
                } />
                <input type="color" className="sec4SettingOption" style={{ width: '30%' }} value={props.offer.titleColor}
                    onChange={e => props.setOffer(prev => ({
                        ...prev, titleColor: e.target.value
                    }))
                } />
            </div>
            <div className="sec4SettingOption sec4InputLabelWrapper" style={{ display: 'flex', gap: '10px' }}>
                <h5>Description and color</h5>
                <input type="text" className="sec4SettingOption" value={props.offer.description}
                    onChange={e => props.setOffer(prev => ({
                        ...prev, description: e.target.value
                    }))}
                />
                <input type="color" className="sec4SettingOption" style={{ width: '30%' }} value={props.offer.descriptionColor}
                    onChange={e => props.setOffer(prev => ({
                        ...prev, descriptionColor: e.target.value
                    }))}
                />
            </div>
            <div className="sec4SettingOption sec4InputLabelWrapper">
                {props.offer.list.length <= 3 &&
                <h5>Add to list</h5>}
                {props.offer.list.length <= 3 &&
                <div className="sec4SettingOption sec4InputButtonWrapper">
                    <input type="text" className="sec4SettingOption" ref={props.listTextRef} value={props.listText} onChange={e => props.setListText(e.target.value)} onKeyDown={e => e.key === 'Enter' && props.handleAddToList(e)} />
                    <button className="sec4SettingOption" onClick={props.handleAddToList}>Add</button>
                </div>}
                {props.offer.list.length > 0 &&
                <ul className="sec4SettingOption">
                    {props.offer.list.map((option, index) =>
                        <li className="sec4SettingOption" style={{ opacity: option === props.deleted ? '0' : '1' }} key={index}><h5>{option}</h5><i className="fa-solid fa-trash sec4SettingOption" onClick={() => props.handleRemoveFromList(option)}></i></li>)}
                </ul>}
            </div>
            <div style={{ display: 'flex', gap: '0.5px', width: '100%' }}>
                <button className="sec4SettingOption" style={{ borderRadius: '20px 0 0 20px' }}
                    onClick={() => props.setOffer(prev => ({
                        ...prev, isBlack: !prev.isBlack
                    }))}>
                {props.offer.isBlack ? 'Black ' : 'White '} text</button>
                {(props.offer.imageLink || props.offer.title || props.offer.description || props.offer.list.length > 0) &&
                <button className="sec4SettingOption" onClick={props.clearOffer} style={{ borderRadius: '0' }}>Clear fields</button>}
                <button className="sec4SettingOption" onClick={props.handleCreateOffer}style={{ borderRadius: ' 0 20px 20px 0' }}>Save</button>
            </div>
        </div>
    )
}

export default Section4Settings;