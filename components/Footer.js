import { Box, Text, Flex, AspectRatio, Divider, Stack, Button, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineCopyright, AiOutlineGlobal, AiOutlineInstagram, AiOutlineMail, AiOutlineMobile, AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {

   const links = [
      {
         iconName: <FiFacebook />,
         path: 'https://www.facebook.com/schoollog/'
      },
      {
         iconName: <AiOutlineInstagram />,
         path: 'https://www.instagram.com/schoollog.in/channel/'
      },
      {
         iconName: <AiOutlineYoutube />,
         path: 'https://www.youtube.com/channel/UCpDf-7sWHt6lJxwnB_iuOMA'
      },
      {
         iconName: <FaLinkedinIn />,
         path: 'https://in.linkedin.com/school/schoollog/'
      },
   ]

   return (
      <Flex id={'Footer'} position={'relative'} direction={{ base: 'column', md: 'row' }} w={'100%'} bg={'#1f2e2e'} >
         <Box p={'30px'} minW={{ base: 'auto', md: '400px' }} w={{ base: 'auto', md: '300px', lg: '500px' }} ml={{ base: '1px', md: '50px' }} >
            <AspectRatio >
               <iframe
                  referrerpolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14236.64720321506!2d75.7212008!3d26.8666!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf19f4c9751fc9734!2sSchoollog%20ERP%20Software!5e0!3m2!1sen!2sin!4v1669709618032!5m2!1sen!2sin" >
               </iframe>
            </AspectRatio>
         </Box>
         <Spacer />
         <Box mt={{ base: '40px', md: '30px' }}
            mr={{ base: 'none', md: '100px', lg: '150px' }}     
         >

            <Stack p={'10px'} w={{ base: 'auto', md: '300px', lg: '400px' }} direction='row' h={{ base: 'auto', md: '70px', lg: '80px' }} marginX={{ base: 'auto', md: '1px' }} backgroundColor={'black'} >
               <AiOutlineMobile fontSize={'55px'} color={'white'} />
               <Divider orientation='vertical' />
               <Flex direction={'column'} pl={'15px'}>
                  <Text fontSize={'18'} color={'white'}>Reach Out Us!</Text>
                  <Link href="tel:8765444567">
                     <Text cursor={'pointer'} fontSize={'20'} _hover={{ color: 'gray.300' }} color={'white'}>+91 76964-37723</Text>
                  </Link>
               </Flex>
            </Stack>
            <Stack p={'10px'} w={{ base: 'auto', md: '300px', lg: '400px' }} direction='row' h={{ base: 'auto', md: '75px', lg: '80px' }} marginX={{ base: 'auto', md: '1px' }} backgroundColor={'black'} mt={'20px'}>
               <AiOutlineMail fontSize={'55px'} color={'white'} />
               <Divider orientation='vertical' />
               <Flex direction={'column'} pl={'15px'}>
                  <Text fontSize={'18'} color={'white'}>Mail to Us</Text>
                  <Link href="mailto:info@schoollog.in">
                     <Text cursor={'pointer'} _hover={{ color: 'gray.300' }} fontSize={'20'} color={'white'}>info@schoollog.in</Text>
                  </Link>
               </Flex>
            </Stack>
            <Stack p={'10px'} w={{ base: 'auto', md: '300px', lg: '400px' }} direction='row' h={{ base: 'auto', md: '80px', lg: '80px' }} marginX={{ base: 'auto', md: '1px' }} backgroundColor={'black'} mt={'20px'}>
               <AiOutlineGlobal fontSize={'55px'} color={'white'} />
               <Divider orientation='vertical' />
               <Flex mt={'20px'} pl={'20px'} direction={'column'}>
                  <Text fontSize={'18px'} color={'white'}  >Follow Us </Text>
                  <Flex direction={'row'} mt={'5px'} ml={'-12px'}>
                     {links.map((d) => {
                        return (
                           <Button key={d.path} color={'white'} fontSize={'20px'} _hover={{ transform: 'scale(.9)', border: '1px solid white', borderRadius: '50%', backgroundColor: '#1f2e2e', }} p={0} variant={'flused'}> <Link href={d.path} target="_blank">{d.iconName}</Link></Button>
                        )
                     })}

                  </Flex>
               </Flex>
            </Stack>
            <Stack w={{ base: 'auto', md: '300px', lg: '360px' }} direction='row' h='30px' marginX={{ base: 'auto', md: '1px' }} mt={'20px'}>
               <Divider orientation='horizontal' />
            </Stack>
            <Stack mb={'50px'} mt={'-20px'} w={{ base: 'auto', md: '320px', lg: '360px' }} direction='row' h='30px' marginX={{ base: '10px', md: '1px' }} >
               <Text fontSize={{ base: '14', md: '15', lg: '18' }} color={'white'}>Terms of Use</Text>
               <Divider orientation='vertical' />
               <Text fontSize={{ base: '14', md: '15', lg: '18' }} color={'white'}>Privacy Statement</Text>
               <Divider orientation='vertical' />
               <Text fontSize={{ base: '14', md: '15', lg: '18' }} color={'white'}>Partner Us</Text>
            </Stack>
         </Box>
         <Flex position={'absolute'} style={{ bottom: '0px', right: '0px' }}>
            <AiOutlineCopyright color='white' style={{ marginTop: '2px' }} />
            <Text fontSize={'12'} color={'white'} >  <b>Schoollog All</b> RIGHTS RESERVED</Text>
         </Flex>
      </Flex>
   );
}

export default Footer;

