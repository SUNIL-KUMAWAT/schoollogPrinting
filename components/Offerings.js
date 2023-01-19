import { Box, Button, Image, Text } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Offerings = () => {

  const items = [
    <Image w={'310px'} h={'280px'}   className="item" data-value="1" src='./plasticHolder.jpeg' key="1" alt="" role="presentation" />,
    <Image w={'310px'} h={'280px'}   className="item" data-value="2" src='./miSheet.jpeg' key="2" alt="" role="presentation" />,
    <Image w={'310px'} h={'280px'}   className="item" data-value="3" src='./multiIdCard.jpeg' key="3" alt="" role="presentation" />,
    <Image w={'310px'} h={'280px'}   className="item" data-value="4" src='./pvcHolder.jpeg' key="4" alt="" role="presentation" />,
    <Image w={'310px'} h={'280px'}   className="item" data-value="5" src='./rfidCard.jpeg' key="5" alt="" role="presentation" />,
    <Image w={'310px'} h={'280px'}   className="item" data-value="6" src='./idCard.jpeg' key="6" alt="" role="presentation" />,
    <Image w={'310px'} h={'280px'}   className="item" data-value="7" src='./hook.jpeg' key="7" alt="" role="presentation" />,
    <Image w={'310px'} h={'280px'}   className="item" data-value="8" src='./idCardSheets.jpeg' key="8" alt="" role="presentation" />,
    <Image w={'310px'} h={'280px'}   className="item" data-value="9" src='./miIdCard.jpeg' key="9" alt="" role="presentation" />,

  ];

  return (
    <Box align={'center'} id={'Offerings'}>
    <Box align={'center'}  mx={{base:10,md:10,lg:14}} >
      <Text fontSize={32}>Offerings</Text>
      <Box margin={'auto'}  >
        <AliceCarousel paddingLeft disableButtonsControls autoWidth autoPlay
          animationDuration={'2000'}  infinite
          // responsive={responsive}
          mouseTracking items={items} />
      </Box>
    </Box>
    <Button bgColor={'#FC814A'} borderRadius={12} _hover={{bgColor:'rgba(252,129,74,0.9)'}} my={10} fontSize={24} size={'lg'} >Book Now</Button>
    </Box>
  );
}

export default Offerings;
