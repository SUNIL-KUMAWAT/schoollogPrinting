import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, HStack, Image, Input, Spacer, Stack, Text, useNumberInput } from "@chakra-ui/react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Img, Divider, } from '@chakra-ui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { map } from "lodash";
import { useMemo, useState } from "react";
import { PRODUCTS } from "../constants";

const SelectedItemPage = ({ details }) => {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: 1,
            min: 0,
            max: 100000000,
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps();
  
    console.log("details", details)


    if(!details) return;
    return <Box id={'SelectedItemPage'} my={12} mx={{ base: 'none', md: '2%', lg: '10%' }}>
        <Card
            direction={{ base: 'column', sm: 'row', }}
            overflow='hidden'
        // variant='outline'
        >
            <Box>
                <Image
                    objectFit='cover'
                    display={{ base: 'none', md: 'block' }}
                    maxW={{ base: '100%', md: '400px', lg: '500px' }}
                    src={details.thumbnail}
                    alt='Caffe Latte'
                />
                <Box maxW={{ base: '100%', md: '400px', lg: '500px' }}>
                    <Box display={{ base: 'none', lg: 'block' }}>
                        <MultipleCaroselImage images={details.images} showArrow />
                    </Box>
                    <Box display={{ base: 'block', lg: 'none' }}>
                        <MultipleCaroselImage images={details.images} showDot />
                    </Box>
                </Box>
            </Box>
            <Stack>
                <CardBody>
                    <Heading size='md'>{details.title}</Heading>
                    <Text mt={2} > <b>Price:</b>  &#8377; {details.price}</Text>

                    <Text fontFamily={'opensans'} py='2'>
                       {details.details}
                    </Text>
                </CardBody>

                <CardFooter px={{ base: '5%', md: '10%', lg: '20%' }}>
                    <HStack maxW='160px' >
                        <Button bgColor={'#FFB200'} {...dec}>-</Button>
                        <Input textAlign={'center'} px={1} borderColor={'#FFB200'} {...input} />
                        <Button bgColor={'#FFB200'}  {...inc}>+</Button>
                    </HStack>
                    <Spacer />
                    <Button variant='solid' colorScheme='blue'>
                        Buy Now
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
        <Otherproducts type={details.type} preSelected={details.slug}/>
    </Box>
}

export default SelectedItemPage;


export const MultipleCaroselImage = ({ responsiveData = {}, showDot = false, showArrow = false , images}) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    };
    const ProductImages = [
        {
            image: 'IVYlogo.jpeg',
            Name: 'Marketing and advertising support',
        },
        {
            image: 'IVYlogo.jpeg',
            Name: 'Competitive Pricing Structure',
        },
        {
            image: 'IVYlogo.jpeg',
            Name: 'Innovation',
        },
        {
            image: 'IVYlogo.jpeg',
            Name: 'Innovation',
        },
        {
            image: 'IVYlogo.jpeg',
            Name: 'Innovation',
        },
       
    ]
    const [imageShow, setImageShow] = useState()
    return (
        <Carousel
            responsive={responsive}
            showDots={showDot}
            arrows={showArrow}
        >
      {map(images,(image)=>
            <CarouselImage src={image} clickHanlder={setImageShow} />
            )}
        </Carousel>
    )

}

const CarouselImage = ({ src, clickHanlder }) => {
    return (
        <Box w={{ base: '100%', md: '96%', lg: '96%' }} h={{ base: 500, md: 170, lg: 170 }} onClick={() => clickHanlder(src)} > <Img w='100%' h='100%' mt={4} borderRadius={20} border={'1px solid black'} objectFit='contain' src={src} alt="image" /></Box>

    )
}


const Otherproducts = () => {

    const Gallery = [
        {
            image: 'IVYlogo.jpeg',
            Name: 'Marketing and advertising support',
        },
        {
            image: 'IVYlogo.jpeg',
            Name: 'Competitive Pricing Structure',
        },
        {
            image: 'IVYlogo.jpeg',
            Name: 'Innovation',
        },
        {
            image: 'IVYlogo.jpeg',
            Name: 'Innovation',
        },
        {
            image: 'IVYlogo.jpeg',
            Name: 'Competitive Pricing Structure',
        },
        {
            image: 'IVYlogo.jpeg',
            Name: 'Innovation',
        },
        {
            image: 'IVYlogo.jpeg',
            Name: 'Innovation',
        },
        {
            image: 'IVYlogo.jpeg',
            Name: 'Innovation',
        },
    ]

    return <Box>

        <Flex mt={'50px'} justify={'center'}>
            <Divider w={{ base: '50px', md: '200px', lg: '200px' }} mt={'16px'} />
            <Heading lineHeight={'30px'} fontFamily="['Montserrat, sans-serif']" fontSize={{ base: '25px', md: '25px', lg: '30px' }} >
                Other Products
            </Heading>
            <Divider w={{ base: '50px', md: '200px', lg: '200px' }} mt={'16px'} />
        </Flex>

        <Flex
            wrap={{ base: 'none', md: 'wrap', lg: 'wrap' }}

            overflowX={{ base: 'scroll' }}
            spacing={5}

            mt={10}
            pb={2}
            css={{
                '&::-webkit-scrollbar': {
                    width: '6px',
                    height: '6px'
                }, '&::-webkit-scrollbar-thumb': {
                    background: '#c1c1c1'
                }
            }}
        >
            {map(Gallery, (image) => {
                return (
                    <Box m={4} boxShadow={'0px 0px 30px -17px #0000001c'} align={'center'} mb={4}>
                        <Img
                            // boxSize='230px'
                            minW={220}
                            h={220}
                            borderRadius={10}
                            objectFit='cover'
                            src={image.image}
                            alt='Dan Abramov'
                        />
                        <Text mb={4}>title</Text>
                    </Box>
                )
            })
            }
        </Flex>

    </Box>
}
