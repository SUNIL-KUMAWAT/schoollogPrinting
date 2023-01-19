import React, { useEffect, useState } from "react";
import { Box, Input, Flex, FormControl, FormLabel, Button, InputGroup, InputLeftElement, Select, Textarea, Img, Text } from "@chakra-ui/react"
import { PhoneIcon } from "@chakra-ui/icons";
import { Controller, useForm } from "react-hook-form";
import { PRODUCT_TYPES } from "../constants";
import { map } from "lodash";
import { useRouter } from "next/router";

const ContactUs = () => {
    const [data, setData] = useState();
    const [regForm, setRegForm] = useState([]);
    const router = useRouter();
    const buyProductService = router.query.service;
    const buyProductQuantity = router.query.quantity;

    const { handleSubmit, control, watch, setValue } = useForm({ defaultValue: {} });
    
    const onSubmit = (data) => {
        const { name, city, quantity } = data;
        console.log('fineTypeIds', fineTypeIds)
    }

    useEffect( () => {
        if(buyProductService){
            setValue('quantity', buyProductQuantity)
        }
        if(buyProductService){
            setValue('product', buyProductService)
        }
    },[buyProductQuantity, buyProductService])
    


    return <Box id={'contactUs'} align={'center'} my={20} py={6} bgColor={'rgba(101, 78, 163, 0.5)'}>
        <Text fontSize={32}>Contact US</Text>
        
            <Flex justify={'center'}
            >
                <Box display={{ base: 'none', md: 'initial', lg: 'initial' }} p={4} w={'320px'} align={'left'}
                bgGradient='linear(260deg,#FBF1D3 2.29%, rgba(251, 241, 211, 0) 100.94%,#FBF1D3 100.94%)'
                boxShadow={'0px 0px 20px rgba(0,0,0,0.25)'}
                >
                    <Text fontSize={30}>Lets Scale your brand, together </Text>
                    <Img src="1.png" alt="image"></Img>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box
                        boxSize={'auto'}
                        px={'20px'}
                        bgGradient='linear(280deg,#FC814A, #FADA9D )'
                        py={6} align="center" >
                        <FormControl >
                            <FormLabel >Name</FormLabel>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => <Input {...field} size={'md'} type='text' placeholder='Name' />}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel >City</FormLabel>
                            <Controller
                                name="city"
                                control={control}
                                render={({ field }) => <Input {...field} type='text' placeholder='City' />}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Quantity</FormLabel>
                            <Controller
                                name="quantity"
                                control={control}
                                render={({ field }) => <Input {...field} size="md" type="number" placeholder='quantity' />}
                            />

                        </FormControl>
                        <FormControl>
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
                        <FormControl >
                            <FormLabel>Select Product</FormLabel>
                            <Controller
                                name="product"
                                control={control}
                                render={({ field }) =>
                                    <Select  {...field} placeholder='Products' >
                             {map(PRODUCT_TYPES,product =>
                                        <option>{product}</option>
                                        ) } 
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