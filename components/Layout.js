import { Box } from "@chakra-ui/react";
import Header from "./Header";
const Layout = ({ children }) => {
    return (
        <Box>
             {/* <DrawerMenu />  */}
            {/* <Icons /> */}
            <Header/>
            {children}
        </Box>
    );
}

export default Layout;