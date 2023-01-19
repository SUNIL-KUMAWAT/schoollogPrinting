

import { Box, Button, Image, } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { useState } from "react";


export const CarouselTesting = () => {

  const items = [
    <Image w={'100%'} mt={'10px'} objectFit={{ base: 'contain', md: 'cover', lg: 'cover', xl: 'cover' }} zIndex={-1} src='./001.png' key="1" alt="" />,
    <Image w={'100%'} mt={'10px'} objectFit={{ base: 'contain', md: 'cover', lg: 'cover' }} zIndex={-1} src='./002.png' key="2" alt="" />,
    <Image w={'100%'} mt={'10px'} objectFit={{ base: 'contain', md: 'cover', lg: 'cover' }} zIndex={-1} src='./003.png' key="3" alt="" />,
    <Image w={'100%'} mt={'10px'} objectFit={{ base: 'contain', md: 'cover', lg: 'cover' }} zIndex={-1} src='./004.png' key="4" alt="" />,
    <Image w={'100%'} mt={'10px'} objectFit={{ base: 'contain', md: 'cover', lg: 'cover' }} zIndex={-1} src='./005.png' key="5" alt="" />,
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  // const [items] = useState(createItems(5, [setActiveIndex]));

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

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
          mouseTracking items={items}   
           onSlideChanged={syncActiveIndex}
          />
          <Box className="b-refs-buttons">
              <Button onClick={slidePrev}>Prev</Button>
              <Button onClick={slideNext}>Next</Button>
          </Box>
      </Box>
  )
}





