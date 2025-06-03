import { Layout } from '@layout/Layout/Layout';
import { HomePage } from '@pages/HomePage/HomePage';
import { AuthContextProvider } from './context/Auth/AuthContextProvider';
import { ThemeContextProvider } from './context/Theme/ThemeContextProvider';

export const App = () => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Layout>
          <HomePage/>
        </Layout>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};
