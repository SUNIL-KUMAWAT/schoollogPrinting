import { Box, Button, Flex, Img, Text } from "@chakra-ui/react"
import Link from "next/link";
import { Divider } from '@chakra-ui/react'
import Footer from "../components/Footer";


const Testimonials = () => {
    const testimonial = [
        {
            image: 'https://bit.ly/dan-abramov',
            Comments: 'Schoollog is a digital marketing company that produces successful strategies and campaigns for schools across the country. They help schools and educational institutes effectively communicate with their targeted audience and students through creative, authentic advertising. Contact them today to see how they can help your school!',
            Name: 'RANJIT SINGH',
            Position: 'Principal of Shemford Futuristic School(UP)'
        },
        {
            image: 'https://bit.ly/dan-abramov',
            Comments: 'Working with Schoollog Digital Marketing Team was easy, the team took care of our requirements and helped promote our School in the way we wanted it projected to our targeted audience. Friendly efficient staff.',
            Name: 'SUNIL DANGI',
            Position: 'Chairman of MD Group of Education, Chirawa'
        },
        {
            image: 'https://bit.ly/dan-abramov',
            Comments: 'We have been associated with Schoollog for over 4 years. During this period, they have showcased great creativity and astute knowledge of cleverly harnessing the social-media potential to fit the needs of our school. They have diligently worked with us to create tailored campaigns and have propelled our digital marketing to the next level. We recommend Schoollog Digital Marketing services for schools looking to enhance their social media presence.',
            Name: 'SAGARMAL LADDHA',
            Position: 'Chairman of Times Group of Institutions (Hanumangarh)'
        },
        {
            image: 'https://bit.ly/dan-abramov',
            Comments: 'When it comes to digital marketing here in Sikar I had a lot of questions in my mind, how I am going to promote my coaching through social media, and whom I should approach for that. Here people are not much aware of my coaching institute I had to educate them first. Team Schoollog helped me to get through this and made my job easy. With their innovative ideas and perfect promotion strategy, They managed to coordinate the whole campaigns all the way from Jaipur. It helped me and my coaching institute a lot. I should thank Abhishek Singh and his team for always being there for help in all emergencies',
            Name: 'VIKAS BURDAK',
            Position: 'Director of Prayas Coaching, Sikar'
        },
    ]

    return <Box id={'testimonials'} align={'center'}>
        <Box w={'100%'} ><Img src='/06.png' alt="" width={'100%'} h={'100%'} objectFit={'contain'} />  </Box>
        <Text fontWeight={'hairline'} fontSize={'40px'} mt={'20px'} style={{ wordSpacing: '2px', letterSpacing: '2px' }}>
            Testimonials
        </Text>
        <Text mt={'30px'} fontFamily={"['Montserrat, sans-serif']"} fontWeight='hairline'
            fontSize={{ base: '24px', lg: '30px' }} mx={{ base: '10px', md: '100px', lg: '200px' }}>
            The  <strong> right feedbacks help </strong> us grow. The <strong> kind compliments </strong> keep us motivated.
            At the end of the day, the <strong> words from our clients matter </strong> the <strong> most! </strong>
        </Text>

        {testimonial.map((d, index) => (<>
            <Divider key={index} borderWidth={'2px'} variant={'dashed'} borderColor={'gray.200'} my={'25px'} />
            <Flex border={'1px solid black'} p={'10px'} backgroundColor={'#FBFFFF'}
                key={index} align={'center'}
                flexDir={index % 2 === 0 ? 'row' : 'row-reverse'} wrap={'wrap'}
                w={{ base: '100%', md: '80%', lg: '70%' }}
                marginX={{ base: '1px', md: '10%', lg: '10%' }}
                mt={'50px'}
                borderTop={'40px solid transparent'}
                borderBottom={'40px solid transparent'}
                borderLeft={'40px solid #B4BBFD'}>
                <Box w={'150px'} marginX={'auto'}>
                    <Img
                        borderRadius='full'
                        border={'5px solid gray'}
                        src={d.image}
                        alt='Dan Abramov'
                    />
                </Box>
                <Box align='justify' mr={'20px'} w={{ base: '100%', md: '70%', lg: '70%' }}  >
                    <Text fontSize={'18px'}>
                        &ldquo;{d.Comments}&rdquo;
                    </Text>
                    <Text mt={'10px'} fontSize={'18px'} fontWeight={'medium'}>
                        {d.Name}
                    </Text>
                    <Text fontSize={'14px'} fontWeight={'medium'}>
                        {d.Position}
                    </Text>
                </Box>
            </Flex>
        </>
        ))}
        <Box bg={'#1c1c1c'} my={'60px'} py={'60px'} align={'center'}>
            <Text color={'white'} mx={{ base: '20px', md: '80px', lg: '190px' }} align={'center'} lineHeight={'30px'} fontFamily="['Montserrat, sans-serif']" fontSize={'30px'} >
                Thanks for the surprise visit!
            </Text>
            <Button mt={'40px'} align={'center'} backgroundColor={'white'} fontFamily={'sans-serif'} border={'1px solid gray'} size={'sm'} _hover={{ color: 'white', backgroundColor: 'black' }} borderRadius={'20px'} px={'25px'}  >
                <Link href="/">TAKE ME HOME</Link>
            </Button>
        </Box>
        <Footer />
    </Box>
}
export default Testimonials;

