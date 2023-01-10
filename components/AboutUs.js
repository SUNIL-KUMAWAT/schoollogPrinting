import { Box, Flex,Heading } from "@chakra-ui/react";

const AboutUsPage = () => {
    const about = [
        {
            data: 'Team of IITIANS',
            color: '#c8cae3',
        },
        {
            data: 'Exprience of working with leading edtech brands',
            color: '#c8cae3',
        },
        {
            data: '700+ School',
            color: '#c8cae3',
        }
    ]

    return (
        <>
            <Box id={'AboutUs'} Page bgColor={'white'} >
                <Heading as={'h1'}>About Us</Heading>
                <Flex mt={5} mx={'5%'} gap={3} justifyContent="center" align="center" flexDir={{ base: "column", md: "row", lg: 'row' }}>
                    {about.map(d => {
                        return (
                            <Box _hover={{ transform: 'scale(.9)' }} shadow={'2px 2px 10px 1px '} p={5} align={'center'} borderRadius={'20px'} key={d.data} w={{ base: '100%', md: '100%' }} h={'250px'} bg={d.color}>
                                {d.data}
                            </Box>
                        )
                    })}
                </Flex>
            </Box>
        </>
    );
}
export default AboutUsPage;