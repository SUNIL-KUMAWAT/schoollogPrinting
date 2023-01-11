
import { Box, Image, Img, Text } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Navbar = () => {

  const items = [
    <Image w={'100%'} mt={'10px'} objectFit={{ base: 'contain', md: 'cover', lg: 'cover', xl: 'cover' }} zIndex={-1} src='./001.png' key="1" alt="" />,
    <Image w={'100%'} mt={'10px'} objectFit={{ base: 'contain', md: 'cover', lg: 'cover' }} zIndex={-1} src='./002.png' key="2" alt="" />,
    <Image w={'100%'} mt={'10px'} objectFit={{ base: 'contain', md: 'cover', lg: 'cover' }} zIndex={-1} src='./003.png' key="3" alt="" />,
    <Image w={'100%'} mt={'10px'} objectFit={{ base: 'contain', md: 'cover', lg: 'cover' }} zIndex={-1} src='./004.png' key="4" alt="" />,
    <Image w={'100%'} mt={'10px'} objectFit={{ base: 'contain', md: 'cover', lg: 'cover' }} zIndex={-1} src='./005.png' key="5" alt="" />,
  ];

  return (
      <Box bgColor={'white'} >
        <AliceCarousel keyboardNavigation
          // disableDotsControls
          keysControlDisabled
          // disableSlideInfo={false}
          mouseDragEnabled={true}
          autoPlayDirection="ltr"
          disableButtonsControls
          autoPlay
          infinite
          autoPlayInterval={3000}
          animationDuration={1000}
          mouseTracking items={items} />
      </Box>
  )
}
export default Navbar;
