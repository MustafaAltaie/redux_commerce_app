import { useCreateSec2CardMutation, useUpdateSec2CardMutation } from "../../../features/productApi";

const Section2Settings = (props) => {
    const [createSec2Card] = useCreateSec2CardMutation();
    const [updateSec2Card] = useUpdateSec2CardMutation();

    const handleCreateCard = () => {
        const newObj = {
            id: props.currentId || '',
            title: props.title,
            description: props.description,
            category: props.category,
            image: props.image,
            color: props.color,
            isBlack: props.isBlack,
        }
        if(props.currentId) {
            updateSec2Card(newObj);
        } else {
            createSec2Card(newObj);
        }
        handleClearMenu();
        props.setMenu(false);
    }

    const handleClearMenu = () => {
        props.setCurrentId('');
        props.setTitle('');
        props.setDescription('');
        props.setCategory('');
        props.setImage('');
        props.setColor('');
        props.setIsBlack(true);
    }

    return (
        props.menu &&
        <div className="homePageSec2SettingMenu">
            <input className="sec2MenuOption" type="text" name='title' placeholder="Title" value={props.title} onChange={e => props.setTitle(e.target.value)} />
            <input className="sec2MenuOption" type="text" name='description' placeholder="Description" value={props.description} onChange={e => props.setDescription(e.target.value)} />
            <input className="sec2MenuOption" type="text" name='category' placeholder="Category" value={props.category} onChange={e => props.setCategory(e.target.value)} />
            <input className="sec2MenuOption" type="text" name='image' placeholder="Image link" value={props.image} onChange={e => props.setImage(e.target.value)} />
            <div className="sec2MenuOption">
                <h5 className="sec2MenuOption">Button's colors</h5>
                <input className="sec2MenuOption" type="color" name='color' value={props.color} onChange={e => props.setColor(e.target.value)} />
                <button className="sec2MenuOption" onClick={() => props.setIsBlack(!props.isBlack)}><h5 className="sec2MenuOption">{props.isBlack ? 'Black text' : 'White text'}</h5></button>
            </div>
            <div className="sec2MenuOption" style={{ gap: '5px' }}>
                <button className="sec2MenuOption" onClick={handleCreateCard} style={{ width: '100%' }}><h5 className="sec2MenuOption">{props.currentId ? 'Update' : 'Add'}</h5></button>
                {(props.title || props.description || props.category || props.image) &&
                <button className="sec2MenuOption" onClick={handleClearMenu} style={{ width: '100%' }}><h5 className="sec2MenuOption">Clear fields</h5></button>}
            </div>
        </div>
    )
}

export default Section2Settings;