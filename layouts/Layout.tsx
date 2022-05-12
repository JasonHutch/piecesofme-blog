import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({children}) => {
    return (
        <>
            <Navbar title={"Pieces of Me"} menuItems={[{title:"Test", link:"https://google.com"}]}/>
                <main>{children}</main>
            <Footer/>
        </>
    );
}

export default Layout;