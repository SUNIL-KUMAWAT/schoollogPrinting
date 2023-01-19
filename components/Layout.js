import { Box } from "@chakra-ui/react";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Services from "./Services";
import Offerings from "./Offerings";
import ChooseUs from "./ChooseUs";
const Layout = ({ children }) => {
    return (
        <Box>
             {/* <DrawerMenu />  */}
            {/* <Icons /> */}
            <Header/>
           
       
            {/* <CarouselTesting/> */}
            {children}
            <Footer/>
        </Box>
    );
}

export default Layout;