import {
    Box,
    HStack,
    Heading,
    Img,
    Flex,
    Divider,
    Text

} from '@chakra-ui/react'
import { map } from 'lodash'


const Choose = () => {

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

    return <Box display={{base:'initial',md:'initial',lg:'none'}}>

<Flex mt={'50px'} justify={'center'}>
            <Divider w={{ base: '50px', md: '200px', lg: '200px' }} mt={'16px'} />
            <Text color={'#6f6f6f'} lineHeight={'30px'} fontFamily="['Montserrat, sans-serif']" fontSize={{ base: '20px', md: '25', lg: '30px' }} >
            Why Choose Us??
            </Text>
            <Divider w={{ base: '50px', md: '200px', lg: '200px' }} mt={'16px'} />
        </Flex>

        <HStack
            overflowX={{ base: 'scroll', md: 'scroll', lg: 'block' }}
            spacing={5}
            mx={'10%'}
        >
            {map(Gallery,(image) => {
                return <Img
                    // boxSize='230px'
                    w={198}
                    h={300}
                    objectFit='cover'
                    src={image.image}
                    alt='Dan Abramov'
                />
            })
            }
        </HStack>

    </Box>
}
export default Choose;

