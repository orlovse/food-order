import { Provider } from 'react-redux';
import { Layout } from '@layout/Layout/Layout';
import { HomePage } from '@pages/HomePage/HomePage';
import { store } from '@store/store';
import { AuthContextProvider } from './context/Auth/AuthContextProvider';
import { ThemeContextProvider } from './context/Theme/ThemeContextProvider';

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <HomePage/>
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>

  );
};
