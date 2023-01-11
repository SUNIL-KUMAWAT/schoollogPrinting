

import { Button, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { AddIcon, ChevronDownIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, HStack, Spacer, Text, VStack, } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/modal";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Img, Portal, Select } from "@chakra-ui/react";
import { map } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'

const Header = () => {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const headerTitle = [
        { id: '/#Footer', title: 'Home' },
        { id: '/#Footer', title: 'Services' },
        { id: '/#Footer', title: 'About US' },
        { id: '/#Footer', title: 'Contact US' },
        { id: '/#Footer', title: 'Gallery' },

    ]

    const [hamburgerIcon, setHamburgerIcon] = useState(false)
    return (
        <>
            <Flex px={{ base: 3, md: 10, lg: 10 }} bgColor={{ base: '#008080', md: 'white', lg: 'white' }} h={{ base: 16, md: 16, lg: 16 }}>
                <Flex w='full' align='center' justifyContent='space-between'>
                    <Img width={32} src='./schoollogo.png' key="1" alt="" />,
                    <HStack spacing={12} display={{ base: 'none', md: 'flex', lg: 'flex' }}  >
                        {/* <Flex display={{ base: 'none', md: 'flex', lg: 'flex' }} justify={{ base: 'none', md: 'space-between', lg: 'space-between' }}  > */}
                        {map(headerTitle, (title) => {
                            return (
                                <Box>
                                    {title.title !== 'Services' ?
                                        <Text fontWeight={'medium'} color={title.title == 'Home' ? 'green' : 'black'} textDecoration={title.title == 'Home' ? 'underline 2px' : 'black'} _hover={{ textDecoration: 'underline 2px green', }} cursor={'pointer'} fontSize={'18px'} onClick={() => router.push("/#Footer")}>{title.title}</Text>
                                        :
                                        <Popover trigger='hover' w={100}>
                                            <PopoverTrigger>
                                                <Flex cursor={'pointer'} _hover={{ textDecoration: 'underline 2px green', }}>
                                                    <Text fontWeight={'medium'} color={'black'} fontSize={'18px'} borderRadius={'50px'} >  {title.title} </Text>
                                                    <ChevronDownIcon mt={1} fontSize={20} />
                                                </Flex>
                                            </PopoverTrigger>
                                            {/* <Portal > */}
                                            <PopoverContent w={'200px'}
                                            //  borderTop={'3px solid blue'}
                                            >
                                                {/* <PopoverArrow /> */}
                                                <PopoverHeader cursor={'pointer'} _hover={{ backgroundColor: '#445F5F', color: 'white' }} >Header</PopoverHeader>
                                                {/* <PopoverCloseButton /> */}
                                                {/* <PopoverBody >
                                                    <Text m={0} _hover={{backgroundColor:'red'}}  cursor={'pointer'} _Hover={{ color: "red" }}  fontSize={'18px'} onClick={() => router.push("/#Footer")}  >Download</Text>
                                                    <Divider orientation='horizontal' />
                                                    <Text _hover={{color:'red'}} cursor={'pointer'} _Hover={{ color: "red" }}  pl={6} py={1}  fontSize={'18px'} onClick={() => router.push("/#Footer")}>Create a Copy</Text>
                                                </PopoverBody> */}
                                                <PopoverFooter cursor={'pointer'} _hover={{ backgroundColor: '#445F5F', color: 'white' }} >This is the footer</PopoverFooter>
                                            </PopoverContent>
                                            {/* </Portal> */}
                                        </Popover>
                                    }
                                </Box>
                            )
                        })}
                    </HStack>
                    {/* </Flex> */}
                </Flex>
                <Spacer />
                {/* <VStack justify={'flex-end'} display={{ base: 'flex', md: 'none', lg: 'none' }} > */}
                {/* <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon fontSize={'20px'} fontWeight={'bold'}/>}
                        // variant='outline'
                        mt={4}
                        size={'sm'}
                    />
                    <MenuList w={'375px'}>
                        {map(headerTitle, (title) => {
                            return (
                                <MenuItem pl={6} color={'blue'} fontSize={'18'} onClick={() => router.push(title.id)}>{title.title}</MenuItem>
                            )
                        })}
                    </MenuList>
                </Menu> */}
                <HamburgerIcon display={{ base: 'initial', md: 'none', lg: 'none' }} mt={4} fontSize={'32px'} fontWeight={'bold'} onClick={() => setHamburgerIcon(!hamburgerIcon)} />
                {/* </VStack> */}

            </Flex >
            <Box display={{ base: hamburgerIcon ? 'initial' : 'none', md: 'none', lg: 'none' }}>
                {map(headerTitle, (title) => {
                    return (
                        title.title !== 'Services' ?
                            <Text pl={6} color={'blue'} fontSize={'18'} onClick={() => router.push(title.id)}>{title.title}</Text>
                            :
                            <Accordion defaultIndex={[0]} allowMultiple>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box pl={2} color={'blue'} fontSize={'18'} as="span" flex='1' textAlign='left'>
                                            {title.title}
                                            
                                            <AccordionIcon />
                                            </Box>
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel >
                                        <Text pl={6} color={'blue'} fontSize={'18'}>option 1</Text>
                                        <Text pl={6} color={'blue'} fontSize={'18'}>option 2</Text>
                                    </AccordionPanel>
                                </AccordionItem>

                            </Accordion>

                    )
                })}
            </Box>
        </>
    )
}

export default Header;


/* <Flex justify={'flex-end'} display={{ base: 'flex', md: 'none', lg: 'none' }} >
            
            <Button ref={btnRef} onClick={onOpen}>
                <HamburgerIcon cursor={'pointer'} _hover={{ color: 'white' }}
                    fontSize={'26px'} position={'fixed'} color='red' />
            </Button>
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
                size={'xs'}
                placement={'top'}
            >
                <DrawerOverlay />
                <DrawerContent w='sm' mt={20}>
                    <DrawerCloseButton />
                    <DrawerBody>
                        {map(headerTitle, (title) => {
                            return (
                                <Text color={'black'} fontSize={'24'} onClick={() => router.push("/#Footer")}>{title.title}</Text>
                            )
                        })}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex> */