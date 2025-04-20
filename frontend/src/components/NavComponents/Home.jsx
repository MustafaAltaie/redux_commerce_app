import Header from '../header/Header';
import Footer from '../Footer';
import '../../style/home.css';
import Section1 from './homeComponents/Section1';
import Section2 from './homeComponents/Section2';

const Home = () => {

  return (
    <>
    <Header />
    <div className="homePageMainWrapper">
      <Section1 />
      <Section2 />
    </div>
    <Footer />
    </>
  )
}

export default Home;