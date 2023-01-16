import { Box, Text, Flex, AspectRatio, Divider, Stack, Button, Spacer, Img } from "@chakra-ui/react";
import { map } from "lodash";
import Link from "next/link";
import { AiOutlineCopyright, AiOutlineGlobal, AiOutlineInstagram, AiOutlineMail, AiOutlineMobile, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {

   const services = [
      { service: 'Product Offerings' },
      { service: 'Product Offerings' },
      { service: 'Product Offerings' },
      { service: 'Product Offerings' },
      { service: 'Product Offerings' },
      { service: 'RIGHTS RESERVED' },
      { service: 'RIGHTS RESERVED' },
      { service: 'RIGHTS RESERVED' },

   ]

   return (
      <Flex p={8} justify={'space-between'}  direction={{ base: 'column', md: 'row' }} w={'100%'} bg={'rgba(2, 62, 138, 0.81)'} >
         <Box ml={{base:1,md:12,lg:12}}  >
            <Img w={'200px'} h={20} src="1.png" alt="image"></Img>
            <Text color={'white'} mt={2} fontSize={32}>IVY Prints Co.</Text>
            <Text color={'white'} >We lead your ideas into creative world</Text>
            <Flex mt={4}>
               <Img src="whatsapp_icon.png" boxSize={12} alt="image"></Img>
               <Img src="instagram_icon.png" boxSize={12} alt="image"></Img>
               <Img src="facebook_icon.png" boxSize={12} alt="image"></Img>
            </Flex>
            {/* <AspectRatio w={40} >
               <iframe
                  referrerpolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14236.64720321506!2d75.7212008!3d26.8666!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf19f4c9751fc9734!2sSchoollog%20ERP%20Software!5e0!3m2!1sen!2sin!4v1669709618032!5m2!1sen!2sin" >
               </iframe>
            </AspectRatio> */}
         </Box>
         <Box mt={{ base: '40px', md: '30px',lg:'10px' }} >
            {map(services, (service) => {
               return (
                  <Text mt={1} color={'white'}>{service.service}</Text>
               )
            })}

         </Box>
         <Box mt={{ base: '40px', md: '30px',lg:'10px'  }}
            mr={{ base: 'none', md: '100px', lg: '100px' }}
         >
            {map(services, (service) => {
               return (
                  <Text mt={1} color={'white'}>{service.service}</Text>
               )
            })}

         </Box>
         <Flex position={'absolute'} style={{ bottom: '0px', right: '0px' }}>
            <AiOutlineCopyright color='white' style={{ marginTop: '2px' }} />
            <Text fontSize={'12'} color={'white'} >  <b>Schoollog All</b> RIGHTS RESERVED</Text>
         </Flex>
      </Flex>
   );
}

export default Footer;

