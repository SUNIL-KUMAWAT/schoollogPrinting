import React, { useState } from "react";
import { Box, Input, Flex, FormControl, FormLabel, Button, InputGroup, InputLeftElement, Select, Textarea } from "@chakra-ui/react"
import { PhoneIcon } from "@chakra-ui/icons";

const Form = () => {
    const [value, setValue] = useState('');
    const [data, setData] = useState();
    const [regForm, setRegForm] = useState([]);
    const onChangeHandle = (value, keyData) => {
        setData(d => ({
            ...d,
            id: Math.random(),
            [keyData]: value
        }));

    }
    const handelSubmit = (e) => {
        e.preventDefault()
        setRegForm([
            ...regForm,
            data
        ])
    }
    console.log(regForm);

    return <Box mt={'50px'} py={'30px'} borderRadius={'20px'} bg={'#F8F8FF'} w={{ base: '90%', md: '80%', lg: '80%' }}>
        <form onSubmit={handelSubmit}>
            <Flex wrap={'wrap'} width="full" align="center" justifyContent="center">
                <FormControl w={{ base: '90%', md: '60%', lg: '35%' }} px={'20px'}>
                    <FormLabel >Name</FormLabel>
                    <Input value={regForm.Name} onChange={(e) => onChangeHandle(e.target.value, 'Name')} type='text' />
                </FormControl>
                <FormControl w={{ base: '90%', md: '60%', lg: '35%' }} px={'20px'}>
                    <FormLabel>Age</FormLabel>
                    <Input
                        value={regForm.Age} onChange={(e) => onChangeHandle(e.target.value, 'Age')}
                        size="md"
                        type="number"
                    />
                </FormControl>
                <FormControl mt={4} w={{ base: '90%', md: '60%', lg: '35%' }} px={'20px'}>
                    <FormLabel>Email</FormLabel>
                    <Input value={regForm.Email} onChange={(e) => onChangeHandle(e.target.value, 'Email')} type="email" />
                </FormControl>
                <FormControl w={{ base: '90%', md: '60%', lg: '35%' }} px={'20px'} mt={4}>
                    <FormLabel >Phone Number</FormLabel>
                    <InputGroup >
                        <InputLeftElement
                            // pointerEvents='none'
                            // eslint-disable-next-line react/no-children-prop
                            children={<PhoneIcon color='gray.300' />}
                        />
                        <Input value={regForm.Phone} onChange={(e) => onChangeHandle(e.target.value, 'Phone')} type='tel' maxLength="10" />
                    </InputGroup>
                </FormControl>
                <FormControl mt={4} w={{ base: '90%', md: '60%', lg: '35%' }} px={'20px'}>
                    <FormLabel>Select Job</FormLabel>
                    <Select value={regForm.Country} onChange={(e) => onChangeHandle(e.target.value, 'Country')} placeholder='Select Job' >
                        <option>Graphic Designer</option>
                        <option>Web Designer</option>
                        <option>SEO Analyst</option>
                        <option>Coordinator</option>
                        <option>Content Writer</option>
                        <option>Trainee</option>
                    </Select>
                </FormControl>
                <FormControl mt={4} w={{ base: '90%', md: '60%', lg: '35%' }} px={'20px'}>
                    <FormLabel>Attach Your Resume</FormLabel>
                    <Input py={'4px'} value={regForm.Resume} onChange={(e) => onChangeHandle(e.target.value, 'Resume')} type="file" />
                </FormControl>
                <FormControl mt={4} w={{ base: '90%', md: '60%', lg: '70%' }} px={'20px'}>
                    <FormLabel>Any Comments</FormLabel>
                    <Textarea value={regForm.Comments} onChange={(e) => onChangeHandle(e.target.value, 'Comments')}></Textarea>
                </FormControl>
            </Flex>
            <Button mt={4} w={'180px'} _hover={{ backgroundColor: 'white', color: 'black', border: '2px solid black' }} type="submit" bgColor={'black'} color={'white'}>
                Submit Now
            </Button>
        </form>
    </Box>
}
export default Form;