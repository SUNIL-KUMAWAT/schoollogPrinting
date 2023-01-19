import { Box, Divider, Flex, Text, Image, Wrap, WrapItem } from "@chakra-ui/react";

const ChooseUs = () => {

    const Gallery = [
        {
            image: 'IVYlogo.jpeg',
            Name: 'Marketing and advertising support',
        },
        {
            image: 'IVYlogo.jpeg',
            Name: 'Competitive Pricing Structure',
        },
        {
            image: 'IVYlogo.jpeg',
            Name: 'Innovation',
        },
        {
            image: 'IVYlogo.jpeg',
            Name: 'Networking Opportunity',
        },
        {
            image: 'IVYlogo.jpeg',
            Name: 'Regular Support',
        },
        {
            image: 'IVYlogo.jpeg',
            Name: 'Strong Parent Brand Reputation',
        },
        {
            image: 'IVYlogo.jpeg',
            Name: 'Continuous Improvement',
        },
        {
            image: 'IVYlogo.jpeg',
            Name: 'High Demand',
        },
       
    ]

    return <Box>

        <Flex mt={'50px'} justify={'center'}>
            <Divider w={{ base: '50px', md: '200px', lg: '200px' }} mt={'16px'} />
            <Text color={'#6f6f6f'} lineHeight={'30px'} fontFamily="['Montserrat, sans-serif']" fontSize={{ base: '20px', md: '25', lg: '30px' }} >
            Why Choose Us??
            </Text>
            <Divider w={{ base: '50px', md: '200px', lg: '200px' }} mt={'16px'} />
        </Flex>
        <Wrap spacing={{ base: '40px', md: '100px', lg: '120px' }} my={{ base: '20px', md: '40px', lg: '60px' }} justify={'center'}>
            {Gallery.map((e) => {
                return (
                    <WrapItem key="{e.Name}">
                        <Box align={'center'} >
                            <Image
                                borderRadius='full'
                                border={'5px solid gray'}
                                boxSize='180px'
                                src={e.image}
                                alt='image'
                            />
                            <Text mt={'20px'} fontWeight={'semibold'} fontSize={'14px'}>{e.Name}</Text>
                            <Text fontSize={'14px'}>{e.Position}</Text>
                        </Box>
                    </WrapItem>
                )
            })}
        </Wrap>
    </Box>
}

export default ChooseUs;