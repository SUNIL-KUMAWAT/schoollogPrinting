import { Box, Text, Flex, Img } from "@chakra-ui/react";
import { map } from "lodash";
import { AiOutlineCopyright } from "react-icons/ai";

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
            <Img w={'200px'} h={20} src="/IVYLogo.jpeg" alt="image"></Img>
            <Text color={'white'} mt={2} fontSize={32}>IVY Prints Co.</Text>
            <Text color={'white'} >We lead your ideas into creative world</Text>
            <Flex mt={4}>
               <Img src="/whatsapp_icon.png" boxSize={12} alt="image"></Img>
               <Img src="/instagram_icon.png" boxSize={12} alt="image"></Img>
               <Img src="/facebook_icon.png" boxSize={12} alt="image"></Img>
            </Flex>
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

