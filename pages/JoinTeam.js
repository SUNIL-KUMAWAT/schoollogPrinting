import { Box, Button, Heading, Img, Text } from "@chakra-ui/react"
import Link from "next/link";
import Footer from "../components/Footer";
import Form from "../components/Form";

const JoinTeam = () => {
    return <Box id={'jointeam'} align={'center'}>
        <Box w={'100%'} ><Img src='/nav.jpg' alt="" width={'100%'} h={'100%'} objectFit={'contain'} />  </Box>
        <Text fontWeight={'hairline'} fontSize={'40px'} mt={'20px'} style={{ wordSpacing: '2px', letterSpacing: '2px' }}>Join the Team</Text>
        <Text mt={'30px'} fontWeight='hairline' fontSize={{ base: '24px', lg: '30px' }} mx={{ base: '10px', md: '90px', lg: '170px' }}>The bigger the team, the better the fun! This is your place to bloom as
            a great team member and the best version of yourself simultaneously!
            Join us now!
        </Text>
        <Form />
        <Box bg={'#1c1c1c'} my={'60px'} py={'60px'} align={'center'}>
            <Text color={'white'} mx={{ base: '20px', md: '80px', lg: '190px' }} align={'center'} lineHeight={'30px'} fontFamily="['Montserrat, sans-serif']" fontSize={'30px'} >
                Thanks for the surprise visit!
            </Text>
            <Button mt={'40px'} align={'center'} backgroundColor={'white'} fontFamily={'sans-serif'} border={'1px solid gray'} size={'sm'} _hover={{ color: 'white', backgroundColor: 'black' }} borderRadius={'20px'} px={'25px'}  >
                <Link href="/">TAKE ME HOME</Link>
            </Button>
        </Box>
        <Footer />
    </Box>;
}

export default JoinTeam;