import { Provider } from 'react-redux';
import { Layout } from '@layout/Layout/Layout';
import { HomePage } from '@pages/HomePage/HomePage';
import { store } from '@store/store';
import { AuthContextProvider } from './context/Auth/AuthContextProvider';
import { ThemeContextProvider } from './context/Theme/ThemeContextProvider';
import { BrowserRouter, Route, Routes } from 'react-router';
import { RestaurantsPage } from './pages/Restaurants/RestaurantsPage';
import { Restaurant } from '@components/Restaurant/Restaurant';
import { CartPage } from './pages/CartPage/CartPage';
import { Menu } from '@components/MenuItem/Menu';
import { Reviews } from '@components/Reviews/Reviews';

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
          <Layout>
            <Routes>
              <Route 
                path="/"
                element={<HomePage/>}
              />

              <Route 
                path="/restaurants"
                element={<RestaurantsPage/>}
              >
                <Route 
                  path=":restaurantId"
                  element={<Restaurant/>}
                >
                <Route
                  index 
                  element={<Menu/>} 
                />
                <Route
                  path="menu"
                  element={<Menu/>}
                />
                <Route 
                  path="reviews"
                  element={<Reviews/>}
                />
                </Route>
              </Route>

              <Route 
                path="/cart"
                element={<CartPage/>}
              />
            </Routes>
          </Layout>
          </BrowserRouter>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
