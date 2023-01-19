import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { map } from "lodash"
import Link from 'next/link'

 
const Services = () => {
    const router = useRouter();
    const about = [
        {
            data: "printingPhoto.jpg",
            Text: 'Accessories',
            path: '/SelectedProductPage'
        },
        {
            data: "printingPhoto.jpg",
            Text: 'Lanyard',
            path: '#SelectedItemPage'
        },
        {
            data: "printingPhoto.jpg",
            Text: 'ID Cards',
        }
    ]

    return (
        <>
            <Box id={'AboutUs'} my={10} align={'center'} bgColor={'white'} >
                <Text fontSize={32} my={10}>Services</Text>
                <Flex mt={2} mx={'5%'} gap={4} justifyContent="center" align="center" flexDir={{ base: "column", md: "row", lg: 'row' }}>
                    {map(about, d => {
                        return (
                                <Box onClick={()=> router.push(d.path) }>
                                    <Box h={'fit-content'}  cursor={'pointer'} key={d.data} role="group" position={"relative"}>
                                        <Box
                                            px={4}
                                            objectFit='cover'>
                                            <Img borderRadius={'20px'} src={d.data} alt="image"></Img>

                                        </Box>
                                        <Box display={{ base: 'none', md: 'initial', lg: 'block' }} position="absolute" borderRadius={'20px'} zIndex={1} _groupHover={{ opacity: 1, h: "125%", w: "125%" }} opacity={0} top={0}>
                                            <Img src={d.data} alt="img" />
                                        </Box>
                                    </Box>
                                    <Text fontSize={28} mt={4}>{d.Text}</Text>
                                </Box>
                        )
                    }
                    )}

                </Flex>
            </Box>
        </>
    );
}
export default Services;

                            // <Box _hover={{ transform: 'scale(.9)' }} shadow={'2px 2px 10px 1px '} p={5} align={'center'} borderRadius={'20px'} key={d.data} w={{ base: '100%', md: '100%' }} h={'250px'} bg={d.color}>
                            //     {d.data}
                            // </Box>