

import { Button, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { AddIcon, ChevronDownIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/modal";
import { map } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

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

    return (
        <Box w={'100%'} px={10} bgColor={{ base: '#008080', md: '#008080', lg: '#008080' }} h={{ base: 16, md: 16, lg: 16 }}>
            <Flex pt={3}>
                <Box color={'white'}>printing Logo</Box>
                <Spacer />
                <HStack spacing={12} display={{ base: 'none', md: 'flex', lg: 'flex' }}  >
                    {/* <Flex display={{ base: 'none', md: 'flex', lg: 'flex' }} justify={{ base: 'none', md: 'space-between', lg: 'space-between' }}  > */}
                    {map(headerTitle, (title) => {
                        return (
                            <Box>
                                {title.title!=='Services'?
                                <Text color={'white'} fontSize={'20px'} onClick={() => router.push("/#Footer")}>{title.title}</Text>
                                :
                                <Menu arrowPadding={6} >
                                    {({ isOpen }) => (
                                        <>
                                            <MenuButton isActive={isOpen} color={'white'} fontSize={'20'} rightIcon={<ChevronDownIcon />}>
                                            {title.title} <ChevronDownIcon /> 
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem>Download</MenuItem>
                                                <MenuItem >Create a Copy</MenuItem>
                                            </MenuList>
                                        </>
                                    )}
                                </Menu>
                                }
                            </Box>
                        )
                    })}
                </HStack>
                {/* </Flex> */}
            </Flex>
            <Flex justify={'flex-end'} display={{ base: 'flex', md: 'none', lg: 'none' }} >
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                        mt={4}
                        mr={2}
                    />
                    <MenuList w={'370px'}>
                        {map(headerTitle, (title) => {
                            return (
                                <MenuItem pl={6} color={'blue'} fontSize={'24'} onClick={() => router.push(title.id)}>{title.title}</MenuItem>
                            )
                        })}
                    </MenuList>
                </Menu>
            </Flex>
        </Box >
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