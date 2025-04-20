import { useEffect, useState } from 'react';
import Section1Settings from './Section1Settings';
import { useLocation, useNavigate } from 'react-router-dom';
import { useReadHomePageListQuery, useUpdateHomePageListMutation } from "../../../features/productApi";

const Section1 = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [imageCount, setImageCount] = useState(0);
    const storagePassword = sessionStorage.getItem('isCorrectPassword');
    const { data, isLoading } = useReadHomePageListQuery();
    const [updateHomePageList] = useUpdateHomePageListMutation();
    const imageList = data?.[0]?.homeSection1 || [];

    useEffect(() => {
        const isPasswordCorrect = storagePassword ? JSON.parse(storagePassword) : false;
        if(!isPasswordCorrect && location.pathname.includes('dashboard')){
            navigate('/enterPassword');
        }
    }, [storagePassword, navigate]);
  
    useEffect(() => {
      const imageInt = setInterval(() => {
        setImageCount(prev => prev >= imageList.length - 1 ? 0 : prev + 1);
      }, 5000);
  
      return () => clearInterval(imageInt);
    }, [imageList]);

    const handleRemoveImage = (link) => {
        if(confirm('Confirm deleting image?')){
            const newList = imageList.filter(image => image !== link);
            updateHomePageList({ homeSection1: newList });
        }
    }

    return (
        <section className="homePageSection1">
            <div className="homePageImageSlideshow">
                {location.pathname === '/home/dashboard' &&
                <Section1Settings
                    isLoading={isLoading}
                    imageList={imageList}
                    handleRemoveImage={handleRemoveImage}
                    updateHomePageList={updateHomePageList}
                />}
                {imageList.map((image, index) => 
                    <img key={index} style={{ opacity: index === imageCount ? 1 : 0, transform: `translate(${index === imageCount ? '-50%, -50%' : '-20%, -50%'})` }} src={image} alt="Image" />
                )}
                </div>
                <div>
                <h2>Lorem ipsum dolor sit amet</h2>
                <h1>LOREM_IPSUM</h1>
                <div>
                    <button>Check our products</button>
                    <h5><strong>Lorem ipsum dolor sit amet</strong> consectetur adipisicing elit. Magnam numquam nemo possimus quod consequatur eaque ut assumenda praesentium doloremque! Porro aut delectus aperiam soluta fugiat explicabo rem earum repellendus laboriosam.</h5>
                </div>
            </div>
        </section>
    )
}

export default Section1;