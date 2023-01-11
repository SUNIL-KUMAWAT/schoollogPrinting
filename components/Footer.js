import { Box, Text, Flex, AspectRatio, Divider, Stack, Button, Spacer } from "@chakra-ui/react";
import { map } from "lodash";
import Link from "next/link";
import { AiOutlineCopyright, AiOutlineGlobal, AiOutlineInstagram, AiOutlineMail, AiOutlineMobile, AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {

  const services = [
   {service:'RIGHTS RESERVED'},
   {service:'RIGHTS RESERVED'},
   {service:'RIGHTS RESERVED'},
   {service:'RIGHTS RESERVED'},
   {service:'RIGHTS RESERVED'},
   {service:'RIGHTS RESERVED'},
   {service:'RIGHTS RESERVED'},
   {service:'RIGHTS RESERVED'},
 
  ]

   return (
      <Flex justify={'space-between'} id={'Footer'} position={'relative'} direction={{ base: 'column', md: 'row' }} w={'100%'} bg={'#1f2e2e'} >
         <Box p={'30px'} minW={{ base: 'auto', md: '300px' }} w={{ base: 'auto', md: '200px', lg: '400px' }} ml={{ base: '1px', md: '50px' }} >
            <AspectRatio >
               <iframe
                  referrerpolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14236.64720321506!2d75.7212008!3d26.8666!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf19f4c9751fc9734!2sSchoollog%20ERP%20Software!5e0!3m2!1sen!2sin!4v1669709618032!5m2!1sen!2sin" >
               </iframe>
            </AspectRatio>
         </Box>
         <Box mt={{ base: '40px', md: '30px' }} >
             {map(services,(service)=>{
               return(
                    <Text mt={1} color={'white'}>{service.service}</Text>
               )
             })}
            
         </Box>
         <Box mt={{ base: '40px', md: '30px' }}
            mr={{ base: 'none', md: '100px', lg: '150px' }}     
         >
             {map(services,(service)=>{
               return(
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

