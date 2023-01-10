
import { Box, Image, Img, Text } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Header = () => {
    const items = [
        <Image w={'100%'} maxH={'600px'} minH={'220px'} position={'relative'} zIndex={-1} className="item" data-value="1" src='/Main001.png' key="1" alt="" role="presentation" />,
        <Image w={'100%'} maxH={'600px'} minH={'220px'} zIndex={-1} className="item" data-value="2" src='nav.jpg' key="2" alt="" role="presentation" />,
        <Image w={'100%'} maxH={'600px'} minH={'220px'} zIndex={-1} className="item" data-value="2" src='/DigitalMarketingFrontPic.jpg' key="2" alt="" role="presentation" />,
    ];
    return <>
        <Box w={'100%'} h={'400px'} bgImage='url("./bg8.jpg")'>
            <Text>Hello</Text>
            <Img w={'300px'} h={'400px'} src="sleft.png" alt=""></Img>
        </Box>
        <Box w={'100%'}>
            <AliceCarousel paddingLeft disableButtonsControls autoPlay
                animationDuration={'1000'} disableDotsControls infinite
                mouseTracking items={items} />
        </Box>
        <Box display={'flex'}>
            <Box w={'20%'} h={'140px'} bgColor='#4DC2C1' align={'center'} color={'white'} fontSize={{ base: '14px', md: '24px' }} pt={'30px'}> Advance Digital Marketing</Box>
            <Box w={'20%'} h={'140px'} bgColor={'#F15A27'} align={'center'} color={'white'} fontSize={{ base: '14px', md: '24px' }} pt={'50px'}>Content Marketing</Box>
            <Box w={'20%'} h={'140px'} bgColor='#3CB979' align={'center'} color={'white'} fontSize={{ base: '14px', md: '24px' }} px={{ base: '0px', md: '15px' }} pt={'30px'}>Social Media Marketing</Box>
            <Box w={'20%'} h={'140px'} bgColor={'#ff9900'} align={'center'} color={'white'} fontSize={{ base: '13px', md: '24px' }} pt={'30px'}>Pay Per Click Management</Box>
            <Box w={'20%'} h={'140px'} bgColor={'white'} align={'center'} color={'black'} fontSize={{ base: '13px', md: '24px' }} pt={'30px'}>Search Engine Optimization</Box>
        </Box>
    </>
}

export default Header;