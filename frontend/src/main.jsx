import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './App/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ProductView from './components/ProductView';
import MainApp from './MainApp';
import Cart from './components/cart/Cart';
import PaymentForm from './components/payments/Payment';
import AboutUsPage from './components/NavComponents/AboutUsPage';
import HelpSupportPage from './components/NavComponents/HelpSupportPage';
import ContactUsPage from './components/NavComponents/ContactUsPage';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51RD6oCPZ9BkvK5dE6lPpAXfMxPw4SsmhSGNrgpjYoHBvnV4uVJ7IKYPWaSB9Ls3y8pu37rdYKBiQjomMpY1x985R00556ONNqf');

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainApp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/product/:id' element={<ProductView />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/payment' element={
            <Elements stripe={stripePromise}>
              <PaymentForm />
            </Elements>}
        />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/support' element={<HelpSupportPage />} />
        <Route path='/contact' element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
