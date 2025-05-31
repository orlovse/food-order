import { Layout } from '@layout/Layout/Layout';
import { HomePage } from '@pages/HomePage/HomePage';
import { AuthContextProvider } from './context/Auth/AuthContextProvider';
import { TheneContextProvider } from './context/Theme/ThemeContextProvider';

export const App = () => {
  return (
    <AuthContextProvider>
      <TheneContextProvider>
        <Layout>
          <HomePage/>
        </Layout>
      </TheneContextProvider>
    </AuthContextProvider>
  );
};
