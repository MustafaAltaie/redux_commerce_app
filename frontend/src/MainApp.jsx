import Header from "./components/header/Header";
import '../src/ProductApp.css';
import ProductApp from './components/ProductApp';

const MainApp = () => {
    return (
        <div className="appMainWrapper">
            <Header />
            <ProductApp />
        </div>
    )
}

export default MainApp;