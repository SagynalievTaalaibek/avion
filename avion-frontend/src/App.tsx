import { Route, Routes } from 'react-router-dom';
import BaseLayout from './app/layout/BaseLayout/BaseLayout';
import Home from './pages/Home/Home';
import AboutPage from './pages/AboutPage/AboutPage';
import Products from './pages/Products/Products';
import ProductForm from './pages/ProductForm/ProductForm';
import Profile from './pages/Profile/Profile';
import Login from './pages/users/Login';
import RegisterUser from './pages/users/RegisterUser';
import NotFound from './components/NotFound/NotFound';
import OneProductItem from './pages/OneProductItem/OneProductItem';
import Cards from './pages/Cards/Cards';

const App = () => {
  return (
    <BaseLayout>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/product'} element={<Products />} />
        <Route path={'/create-product'} element={<ProductForm />} />
        <Route path={'/product/:id'} element={<OneProductItem />} />
        <Route path={'/cards'} element={<Cards />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<RegisterUser />} />
        {/*<Route path="/register" element={<Register />} />*/}
        {/*<Route path="/login" element={<Login />} />*/}
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </BaseLayout>
  );
};

export default App;
