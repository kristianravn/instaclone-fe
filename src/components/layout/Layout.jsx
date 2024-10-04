import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children, setLoggedUser, setIsLoggedIn}) => {
  return (
    <>
    <Header setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn}/>
        {children}
    <Footer />
    </>
  );
}

export default Layout