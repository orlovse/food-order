import { Provider } from 'react-redux';
import { Layout } from '@layout/Layout/Layout';
import { HomePage } from '@pages/HomePage/HomePage';
import { store } from '@store/store';
import { AuthContextProvider } from './context/Auth/AuthContextProvider';
import { ThemeContextProvider } from './context/Theme/ThemeContextProvider';
import { BrowserRouter, Route, Routes } from 'react-router';

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
            </Routes>
          </Layout>
          </BrowserRouter>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
