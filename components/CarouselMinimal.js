import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Box, Img, Text } from "@chakra-ui/react";

const CarouselMinimal = () => {

  return <>
    <Carousel autoPlay interval={3000}
      infiniteLoop>
      <Box>
        <Img src='./001.png' alt="image1" />
      </Box>
      <Box >
        <Img src='./002.png' alt="image1" />
      </Box>
      <Box >
        <Img src='./003.png' alt="image1" />
      </Box>
      <Box >
        <Img src='./004.png' alt="image1" />
      </Box>
      <Box >
        <Img src='./005.png' alt="image1" />
      </Box>
    </Carousel>
    <Box align='center' bgColor={'White'}
      borderTop={'5px solid #FFFF00'}
      borderBottom={'0px solid yellow '}
      opacity={.91}
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
  </>
}

export default CarouselMinimal;