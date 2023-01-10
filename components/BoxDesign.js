import { Grid, GridItem, Img, Text } from "@chakra-ui/react";

const BoxDesign = () => {
    return <>
        <Grid
            h='300px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap={3}

        >
            <GridItem rowSpan={2} colSpan={1} borderRadius={'20px'} >
                <Img alt="" objectFit={'cover'}
                    src="dg1.jpg">
                </Img>
            </GridItem>
            <GridItem colSpan={2} align={'center'}>
                <Img
                    src="schoollog.png">
                </Img>
            </GridItem>
            <GridItem colSpan={2} bg='papayawhip' align={'center'} borderRadius={'20px'}>
                <Text fontSize={{ base: '18px', md: '24', lg: '30px' }}
                    style={{ letterSpacing: '1px', wordSpacing: '1px', }}
                    color={'blabk'} fontFamily={"['Montserrat, sans-serif']"}>Taking your brand
                    seeds to the digital soil
                </Text>
                <Text fontSize={{ base: '18px', md: '24', lg: '28px' }}
                    color={'black'} mt={'-1%'} fontFamily={"['Montserrat, sans-serif']"}>
                    &
                </Text>
                <Text mx={'auto'} fontSize={{ base: '18px', md: '24', lg: '30px' }}
                    style={{ letterSpacing: '1px', wordSpacing: '1px' }} color={'black'}
                    mt={'-1%'} fontFamily={"['Montserrat, sans-serif']"}><strong style={{ color: 'blue' }}>
                        Schoollog</strong> them!
                </Text>
            </GridItem>
            <GridItem colSpan={4} bg='tomato'></GridItem>
        </Grid>
    </>;
}

export default BoxDesign;