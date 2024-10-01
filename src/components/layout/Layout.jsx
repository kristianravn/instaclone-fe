import { BrowserRouter } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
    <Header />
        <BrowserRouter>
        {children}
        </BrowserRouter>
    <Footer />
    </>
  );
}

export default Layout