import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
};
