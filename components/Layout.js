import { Box } from "@chakra-ui/react";
import DrawerMenu from "./DrawerMenu";
import Icons from "./Icons";

const Layout = ({ children }) => {
    return (
        <Box>
             <DrawerMenu /> 
            <Icons />
            {children}
        </Box>
    );
}

export default Layout;