import { Box, Img, Text } from '@chakra-ui/react';
import { map } from 'lodash';
import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';


const CarouselMultiImage = () => {
    const images = [
        {
            src: 'IVYlogo.jpeg',
            alt: 'Marketing ',
        },
        {
            src: '001.png',
            alt: 'Marketing and advertis',
        },
        {
            src: 'IVYlogo.jpeg',
            alt: 'Marketing and advertising ',
        },
        {
            src: '001.png',
            alt: 'support',
        },
       

    ]

const imagess = map(images,(number) => ({
    src: number.src
  }));

  return (
    <Box >
        <Carousel 
        thumbnailWidth={140}
        thumbnailHeight={100}
        maxIcon
        thumbnails
        hasIndexBoard 
        playIcon
        images={imagess} style={{ height: 400, width: 500 }} />

    </Box>
  );
};

export default CarouselMultiImage;