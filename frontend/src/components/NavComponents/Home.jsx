import Header from '../header/Header';
import Footer from '../Footer';
import '../../style/home.css';
import Section1 from './homeComponents/Section1';
import Section2 from './homeComponents/Section2';
import Section3 from './homeComponents/Section3';
import Section4 from './homeComponents/Section4';

const Home = () => {
  return (
    <>
    <Header />
    <div className="homePageMainWrapper">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
    <Footer />
    </>
  )
}

export default Home;