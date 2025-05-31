import { Layout } from '@layout/Layout/Layout';
import { HomePage } from '@pages/HomePage/HomePage';
import { AuthContextProvider } from './context/Auth/AuthContextProvider';

export const App = () => {
  return (
    <AuthContextProvider>
      <Layout>
        <HomePage />
      </Layout>
    </AuthContextProvider>
  );
};
