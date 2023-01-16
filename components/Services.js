import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";

const Services = () => {
    const about = [
        {
            data: "printingPhoto.jpg",
            Text: 'Accessories',
        },
        {
            data: "printingPhoto.jpg",
            Text: 'Lanyard',
        },
        {
            data: "printingPhoto.jpg",
            Text: 'ID Cards',
        }
    ]

    return (
        <>
            <Box id={'AboutUs'} my={10} align={'center'} bgColor={'white'} >
                <Text fontSize={32}  my={10}>Services</Text>
                <Flex  mt={2} mx={'5%'} gap={16} justifyContent="center" align="center" flexDir={{ base: "column", md: "row", lg: 'row' }}>
                    {about.map(d => (
                        <Box  key={d.data} >
                        <Box h={'fit-content'} cursor={'pointer'} key={d.data} role="group" position={"relative"}>
                            <Box
                            px={10}
                                objectFit='cover'>
                                <Img borderRadius={'20px'} src={d.data} alt="image"></Img>
                               
                            </Box>
                            <Box position="absolute" borderRadius={'20px'} zIndex={1} _groupHover={{ opacity: 1,h:"105%", w:"105%"}} opacity={0} top={0}>
                                <Img src={d.data} alt="img" />
                            </Box>
                        </Box>
                        <Text fontSize={28} mt={4}>{d.Text}</Text>
                        </Box>
                    ))}

                </Flex>
            </Box>
        </>
    );
}
export default Services;

                            // <Box _hover={{ transform: 'scale(.9)' }} shadow={'2px 2px 10px 1px '} p={5} align={'center'} borderRadius={'20px'} key={d.data} w={{ base: '100%', md: '100%' }} h={'250px'} bg={d.color}>
                            //     {d.data}
                            // </Box>