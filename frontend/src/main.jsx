import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './App/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ProductView from './components/ProductView';
import MainApp from './MainApp';
import Cart from './components/cart/Cart';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainApp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/product/:id' element={<ProductView />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)