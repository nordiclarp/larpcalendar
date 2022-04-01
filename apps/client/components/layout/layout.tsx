import Body from '../body/body';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Body>{children}</Body>
    <Footer />
  </>
);
