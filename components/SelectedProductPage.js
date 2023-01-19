import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Spacer, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons'
import { map } from "lodash";
import { useRouter } from "next/router";
import Link from 'next/link'

const SelectedProductPage = ({ productItems }) => {
    const router = useRouter();

    if(!productItems) return;
    return (
        <Box my={10}>
            <Flex mx={{ base: 2, lg: 14 }}
                mt={10}
                borderRadius={20}
                p={4}
                bgGradient='linear(90.02deg, #6F3E9F 0.02%, #FFFFFF 88.85%)' >
                <Box>
                    <Heading color={'white'}>ID Card</Heading>
                    <Text color={'white'}>This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people  baroque inspired spaces, earthy toned spaces and for people.</Text>
                </Box>
                <Spacer/>
                <Box objectFit={'fill'}  w={'120px'} display={{base:'none',lg:'block'}}  mx={10}>
                {/* <Image  src={'/IVYlogo.jpeg'} alt={'33image'}></Image> */}
                </Box>
            </Flex>

            <Wrap justify='center'>
                {map(productItems, (productItem) => {
                    return (
                        <WrapItem cursor={'pointer'} >
                            <Card boxShadow={"lg"} _hover={{transform: 'scale(1.05)' }} transition={'transform .2s'} maxW={{ base: '100%', md: 360, lg: 280 }} mx={{ base: 2, lg: 4 }} mt={14}>
                                <CardBody>
                                    <Image size={'sm'}
                                        src={productItem.thumbnail}
                                        borderRadius='lg'
                                        alt='image'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>{productItem.title}</Heading>
                                        <Text>
                                            {productItem.shortDescription}
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Box display='flex' mt='2' alignItems='center'>
                                            {Array(5)
                                                .fill('')
                                                .map((_, i) => (
                                                    <StarIcon
                                                        key={i}
                                                        color={i <productItem.rating ? '#FC814A' : 'gray.300'}
                                                    />
                                                ))}
                                            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                                {productItem.review} reviews
                                            </Box>
                                        </Box>
                                        <Link href={`/details/${productItem.slug}`}>
                                            <Button size={'sm'} variant='solid' bgColor={'rgba(255, 0, 0, 0.68)'}>
                                                Buy now
                                            </Button>
                                        </Link>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </WrapItem>
                    )
                 })} 
            </Wrap>
        </Box>
    )
}

export default SelectedProductPage;