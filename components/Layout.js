import { Box } from "@chakra-ui/react";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Services from "./Services";
import Offerings from "./Offerings";
const Layout = ({ children }) => {
    return (
        <Box>
             {/* <DrawerMenu />  */}
            {/* <Icons /> */}
            <Header/>
            <Navbar /> 
            <AboutUs/>
            <Services/>
            <ContactUs/>
       <Offerings/>
       <Footer/>
            {/* <CarouselTesting/> */}
            {children}
        </Box>
    );
}

export default Layout;