import { Box, Button, Img, Text } from "@chakra-ui/react";
import Link from "next/link";
import BreakDesign from "../components/BreakDesign";
import CorePeople from "../components/CorePeople";
import Footer from "../components/Footer";

const ReadMore = () => {
    return (<Box
        style={{
            backgroundImage: `url(nav.jpg)`,
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'

        }}
    >
        <Box bg={'white'} pb={'30px'}>
            <Box w={'100%'} ><Img src='/nav.jpg' alt="" width={'100%'} h={'100%'} objectFit={'contain'} />  </Box>
            <Text align={'center'} letterSpacing={'1px'} my={'30px'} fontSize={'34'} color={'gray.500'} style={{ letterSpacing: '1px' }} fontFamily={"['Montserrat, sans-serif']"} fontWeight={'hairline'}>About Us</Text>
            <Box align='center'>
                <Img src="schoollogo.png" w={{ base: '200px', md: '260', lg: '300px' }} ></Img>
            </Box>
            <Text align={'center'} lineHeight={'40px'} fontFamily="['Montserrat, sans-serif']" color={'#33334d'} mt={'10px'} fontSize={{ base: '25', lg: '30' }} >
                &ldquo;A
                <b> creative adult </b>
                is a
                <b> child who survived!</b>&rdquo;
            </Text>
            <Text align={'center'} lineHeight={'40px'} fontFamily="['Montserrat, sans-serif']" color={'#33334d'} mt={'10px'} fontSize={{ base: '24', lg: '30' }} >
                That&apos;s
                <b> schoollog in a nutshell! </b>
            </Text>
            <Text mx={{ base: '20px', md: '80px', lg: '178px' }} align={'center'} lineHeight={'30px'} fontFamily="['Montserrat, sans-serif']" mt={'50px'} fontSize={'20px'} >
                We, as a&nbsp;
                <b>professional Digital Marketing Agency, </b>
                started out in the early days of the decade and now we&apos;ve reached the end of it! The world
                has changed in ways we never even dreamed. The vines of the&nbsp;
                <b>Schoollog also grew along. </b>
                Today, with us, you&apos;ll find all the right ingredients required for your online presence.&nbsp;
                <b>From Web Designing to Social Media Marketing,</b>
                &nbsp;we do it all! And our ultimate goal is to bring you optimum business.
            </Text>
            <Text mx={{ base: '20px', md: '80px', lg: '178px' }} align={'center'} lineHeight={'30px'} fontFamily="['Montserrat, sans-serif']" mt={'50px'} fontSize={'20px'} >
                <b>We&apos;re no beginners but we </b>
                still hold the
                <b> curiosity and excitement</b>
                of a beginner and
                <b> approach </b>
                each of our projects with that attitude.
            </Text>
            <Text mx={{ base: '20px', md: '80px', lg: '178px' }} align={'center'} lineHeight={'30px'} fontFamily="['Montserrat, sans-serif']" mt={'50px'} fontSize={'20px'} >
                A
                <b> well-balanced team </b>
                with super-fresh brains and super-experienced ninjas is our
                <b> core strength! </b>
                With the fast-paced world, we&apos;re evolving too! Little by little, each day, we&apos;re
                <b> refreshing ourselves </b>
                with new challenges and creative solutions.
            </Text>
            <Text mx={{ base: '20px', md: '80px', lg: '178px' }} align={'center'} lineHeight={'30px'} fontFamily="['Montserrat, sans-serif']" fontSize={'20px'} >
                Here&apos;s to more challenges!
            </Text>
            <Text mx={{ base: '20px', md: '80px', lg: '178px' }} align={'center'} lineHeight={'30px'} fontFamily="['Montserrat, sans-serif']" fontSize={'20px'} >
                And to more <b> schoollog magic!</b>
            </Text>
        </Box>
        <BreakDesign />
        <Box bg={'white'} pt={'50px'}>
            <Text mx={{ base: '20px', md: '80px', lg: '178px' }} mt={'20px'} align={'center'} lineHeight={'30px'} fontFamily="['Montserrat, sans-serif']" fontSize={'30px'} >
                <b>Mission </b> & <b> Vission</b>
            </Text>
            <Text mt={'60px'} mx={{ base: '20px', md: '80px', lg: '178px' }} align={'center'} lineHeight={'30px'} fontFamily="['Montserrat, sans-serif']" fontSize={'20px'} >
                We&apos;re a part of the dynamic digital world that influences our life daily. Our focus
                is on bringing value and a positive culture to the digital sphere! With all the
                socializing tools available on the web, we&apos;re deep into cultivating a good business
                and social culture in this world. The change is now on your fingertips!
            </Text>
            <Text mt={'60px'} mx={{ base: '20px', md: '80px', lg: '190px' }} align={'center'} lineHeight={'30px'} fontFamily="['Montserrat, sans-serif']" fontSize={'20px'} >
                To be the best advertising company to provide customized
                and innovative concepts and campaigns which hit the target
                around the globe. To be a full fledged agency to provide all
                promotional services available, affordable and convenient to the client.
            </Text>
            <Box bg={'#1c1c1c'} mt={'60px'} py={'60px'}>
                <Text color={'white'} mx={{ base: '20px', md: '80px', lg: '190px' }} align={'center'} lineHeight={'30px'} fontFamily="['Montserrat, sans-serif']" fontSize={'30px'} >
                    WHY CHOOSE US
                </Text>
                <Text color={'#6f6f6f'} mt={'30px'} mx={{ base: '20px', md: '80px', lg: '170px' }} align={'center'} lineHeight={'26px'} fontFamily="['Montserrat, sans-serif']" fontSize={'18px'} >
                    Because client satisfaction is our priority No. 1. We focus on building a good
                    client relationship culture and that has worked well for us. Most of the works
                    we get are by reference from our awesome clients! So far we could serve 500+
                    companies in 10 countries from 3 continents. We wouldn&apos;t have been able to accomplish
                    this much if it wasn&apos;t by reference. If we could create one satisfied client, we can
                    create a million more! That is our experience.
                </Text>
            </Box>
            <CorePeople />
            <Box bg={'#1c1c1c'} my={'60px'} py={'60px'} align={'center'}>
                <Text color={'white'} mx={{ base: '20px', md: '80px', lg: '190px' }} align={'center'} lineHeight={'30px'} fontFamily="['Montserrat, sans-serif']" fontSize={'30px'} >
                    Thanks for the surprise visit!
                </Text>
                <Button mt={'40px'} align={'center'} backgroundColor={'white'} fontFamily={'sans-serif'} border={'1px solid gray'} size={'sm'} _hover={{ color: 'white', backgroundColor: 'black' }} borderRadius={'20px'} px={'25px'}  >
                    <Link href="/">TAKE ME HOME</Link>
                </Button>
            </Box>
            <Footer />
        </Box>
    </Box>);
}

export default ReadMore;