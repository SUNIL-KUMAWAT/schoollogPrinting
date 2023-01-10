
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
    <Box>
      <Box bgColor='blackAlpha.100' align='center'
        borderTop={'5px solid #FFFF00'}
        borderBottom={'0px solid yellow '}
        opacity={.91}
        mt={'-5px'}
      >
        <Img alt=""
          objectFit={'cover'}
          src="schoollogo.png"
          w={{ base: '190px', md: '280', lg: '300px' }}
        >
        </Img>
        <Text fontSize={{ base: '18px', md: '24', lg: '30px' }}
          style={{ letterSpacing: '1px', wordSpacing: '1px', }}
          color={'blabk'} fontFamily={"['Montserrat, sans-serif']"}>
          Want To Grow Your School Online?
        </Text>
        <Text pb={'15px'} fontSize={{ base: '18px', md: '24', lg: '30px' }}
          style={{ letterSpacing: '0px', wordSpacing: '0px' }}
          fontFamily={""}>
          <strong> We Provide Complete Digital Marketing Solutions</strong>
        </Text>
      </Box>
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
    </Box>
  )
}
export default Navbar;
