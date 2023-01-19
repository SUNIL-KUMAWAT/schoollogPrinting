import { Box, Flex, Img, Text } from "@chakra-ui/react";

const AboutUs = () => {

    return (
        <>
            <Box id={'AboutUs'} align={'center'} my={10} bgColor={'white'} >
                <Text fontSize={32}>About Us</Text>
                <Flex mt={{ base: 8, md: 16, lg: 16 }} gap={10} mx={'5%'} flexDir={{ base: "column-reverse", md: "column-reverse", lg: 'row' }}>
                    <Box align={'left'} w={{ base: 'auto', md: 'auto', lg: '650px' }} >
                        <Text fontSize={32}>IVY Printing Labs</Text>
                        <Text mt={5}>We are a well-acclaimed company successfully delivering unmatched
                            quality printing services since the last 72 years and is among the most
                            trusted names in the Printing Industry. With years of expertise, constant
                            up-gradation of Printing Infrastructure coupled with induction of new
                            techniques, we have virtually become a synonym of the most
                            dependable Printing Service Provider.

                        </Text>
                        <Text mt={6}>In Offset and Digital Printing, Jaipur Printers offers the most
                            comprehensive printing solutions and specializes in printing Books,
                            Brochures, Catalogues, Business Cards, Envelopes, Letterheads, Flyers,
                            Magazines, Paper Bags, Posters, Coffee Table Books, Calendars, Invitation
                            Cards, Labels, Degree Certificates. We are also provide services for
                            Variable Data Printing.</Text>
                    </Box>
                    <Box  >
                        <Img src="printingPhoto.jpg" h={{ base: 'auto', md: '350px', lg: '350px' }} alt="image"></Img>
                    </Box>
                </Flex>
            </Box>
        </>
    );
}
export default AboutUs;