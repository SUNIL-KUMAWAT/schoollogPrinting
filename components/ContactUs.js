import React, { useState } from "react";
import { Box, Input, Flex, FormControl, FormLabel, Button, InputGroup, InputLeftElement, Select, Textarea, Img, Text } from "@chakra-ui/react"
import { PhoneIcon } from "@chakra-ui/icons";
import { Controller, useForm } from "react-hook-form";

const ContactUs = () => {
    const [value, setValue] = useState('');
    const [data, setData] = useState();
    const [regForm, setRegForm] = useState([]);

    console.log(regForm);
    const { handleSubmit, control, watch } = useForm({ defaultValue: {} });
    const onSubmit = (data) => {
        const { name, city, quantity } = data;
        console.log('fineTypeIds', fineTypeIds)
        // let Data = { }
    }

    return <Box align={'center'} my={20} py={6} bgColor={'rgba(101, 78, 163, 0.5)'}>
        <Text fontSize={32}>Contact US</Text>
    <Flex  p={'30px'} justify={'center'} borderRadius={'20px'} 
  
    // w={{ base: '90%', md: '80%', lg: '80%' }}
    >
          <Box display={{base:'none',md:'initial',lg:'initial'}} p={4} w={'320px'} align={'left'} 
            bgGradient='linear(to-r,#FBF1D3, rgba(251, 241, 211, 0))'  >
            <Text fontSize={30}>Lets Scale your brand, together </Text>
            <Img  src="1.png"  alt="image"></Img></Box>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box bgGradient='linear(to-b,#FC814A 15%, #FADA9D)' w={'380px'} py={6}  align="center" >
                <FormControl  px={'20px'}>
                    <FormLabel >Name</FormLabel>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => <Input {...field} size={'md'} type='text' placeholder='Name' />}
                    />
                </FormControl>
                <FormControl  px={'20px'}>
                    <FormLabel >City</FormLabel>
                    <Controller
                        name="city"
                        control={control}
                        render={({ field }) => <Input {...field} type='text' placeholder='City' />}
                    />
                </FormControl>
                <FormControl  px={'20px'}>
                    <FormLabel>Quantity</FormLabel>
                    <Controller
                        name="quantity"
                        control={control}
                        render={({ field }) => <Input {...field} size="md" type="number" placeholder='quantity' />}
                    />

                </FormControl>

                <FormControl px={'20px'} mt={4}>
                    <FormLabel >Phone Number</FormLabel>
                    <Controller

                        name="number"
                        control={control}
                        render={({ field }) =>
                            <InputGroup>
                                <InputLeftElement
                                    // pointerEvents='none'
                                    // eslint-disable-next-line react/no-children-prop
                                    children={<PhoneIcon color='gray.300' />}
                                />
                                <Input {...field} size="md" type='tel' maxLength="10" placeholder='Phone number' />
                            </InputGroup>
                        }
                     />
                </FormControl>
                <FormControl  px={'20px'}>
                    <FormLabel>Select Product</FormLabel>
                    <Controller
                        name="products"
                        control={control}
                        render={({ field }) =>
                            <Select  {...field} placeholder='Products' >
                                <option>Graphic Designe</option>
                                <option>Id Card</option>
                                <option>T-Shirt</option>
                                <option>Cards</option>
                                <option>Poster</option>
                            </Select>}
                    />

                </FormControl>
                <Button mt={4} w={'180px'} _hover={{ backgroundColor: 'white', color: 'black', border: '2px solid black' }} type="submit" bgColor={'black'} color={'white'}>
                    Submit Now
                </Button>
            </Box>

        </form>
    </Flex>
    </Box>
}
export default ContactUs;