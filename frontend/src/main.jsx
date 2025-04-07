import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './App/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ProductApp from './components/ProductApp';
import ProductView from './components/ProductView';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductApp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/product' element={<ProductView />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)