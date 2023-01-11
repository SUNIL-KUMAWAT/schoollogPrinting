import { Box, Image } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const CarouselSlide = () => {

  const items = [
    <Image w={'450px'} h={'380px'}   className="item" data-value="1" src='./1.png' key="1" alt="" role="presentation" />,
    <Image w={'450px'} h={'380px'}   className="item" data-value="1" src='./2.png' key="2" alt="" role="presentation" />,
    <Image w={'450px'} h={'380px'}   className="item" data-value="1" src='./3.png' key="3" alt="" role="presentation" />,
    <Image w={'450px'} h={'380px'}   className="item" data-value="1" src='./4.png' key="4" alt="" role="presentation" />,
    <Image w={'450px'} h={'380px'}   className="item" data-value="1" src='./5.png' key="5" alt="" role="presentation" />,
    <Image w={'450px'} h={'380px'}   className="item" data-value="1" src='./6.png' key="6" alt="" role="presentation" />,
    <Image w={'450px'} h={'380px'}   className="item" data-value="1" src='./7.png' key="7" alt="" role="presentation" />,
    <Image w={'450px'} h={'380px'}   className="item" data-value="1" src='./8.png' key="8" alt="" role="presentation" />,
    <Image w={'450px'} h={'380px'}   className="item" data-value="1" src='./9.png' key="9" alt="" role="presentation" />,

  ];
  // const responsive = {
  //   0: { items: 1 },
  //   146: { items: 2 },
  //   292: { items: 3 },
  //   348: { items: 4 },
  //   584: { items: 5 },
  //   730: { items: 6 },
  //   1024: { items: 7 }
  // };

  return (
    <Box bgColor={'white'} py={'20px'} id={'ourclient'}>
      <Box margin={'auto'}  >
        <AliceCarousel paddingLeft disableButtonsControls autoWidth autoPlay
          animationDuration={'2000'} disableDotsControls infinite
          // responsive={responsive}
          mouseTracking items={items} />
      </Box>
    </Box>
  );
}

export default CarouselSlide;
