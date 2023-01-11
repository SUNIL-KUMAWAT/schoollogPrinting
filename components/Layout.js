import { Box } from "@chakra-ui/react";
import { CarouselTesting } from "./CarouselTesting";
import Header from "./Header";
const Layout = ({ children }) => {
    return (
        <Box>
             {/* <DrawerMenu />  */}
            {/* <Icons /> */}
            <Header/>
            {/* <CarouselTesting/> */}
            {children}
        </Box>
    );
}

export default Layout;