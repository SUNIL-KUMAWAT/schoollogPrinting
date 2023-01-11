import { ChevronDownIcon, ChevronUpIcon, EmailIcon, HamburgerIcon, PhoneIcon } from '@chakra-ui/icons';
import {Drawer,DrawerBody,DrawerFooter, DrawerOverlay, DrawerContent,DrawerCloseButton, Button, useDisclosure, Flex, VStack, Text, Box, HStack,} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { AiOutlineCopyrightCircle, AiOutlineWhatsApp } from "react-icons/ai";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaLinkedinIn } from "react-icons/fa";

const DrawerMenu = () => {
  const router = useRouter();
  const headerTitle = [
    { id: '/', title: 'Home', },
    { id: "/ReadMore", target: '_blank', title: 'About Us', },
    { id: 2, title: 'Our Services', },
    { id: "/#ourclient", title: 'Our Client', },
    { id: "/Testimonials", title: 'Testimonials', },
    { id: "https://schoollog.in/", target: '_blank', title: 'Life at Schoollog', },
    { id: "/JoinTeam", title: 'Join the Team', },
    { id: "/#Contactus", title: 'Contact Us', },
  ]

  const services = [
    { id: "/#SocialMediaMarketing", title: 'Social Media Marketing', },
    { id: "/#GraphicDesign", title: 'Graphic Design', },
    { id: "/#WebDesign", title: 'Web Design', },
    { id: "/#Seo", title: 'SEO', },
  ]

  const links = [
    {
      iconName: <AiOutlineWhatsApp />,
      path: 'https://api.whatsapp.com/send/?phone=917015179549&text=Hi+Schoollog%21+I+would+like+to+buy+your+erp&type=phone_number&app_absent=0'
    },
    {
      iconName: <FaLinkedinIn />,
      path: 'https://in.linkedin.com/school/schoollog/'
    },
    {
      iconName: <PhoneIcon />,
      path: "tel:8765444567"
    },
    {
      iconName: <EmailIcon />,
      path: "mailto:info@schoollog.in"
    },
  ]

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [dropDown, setDropDown] = useState(false);

  const dropDownServices = () => {
    setDropDown(d => !d)
  }

  const changeRoute = (id) => {
    router.push(id)
    onClose()

  }

  return (
    <Box position={'relative'} zIndex={1}>
      <Flex justify={'flex-end'} mr={5} >
        <HamburgerIcon cursor={'pointer'} _hover={{ color: 'red' }} mt={10}
          fontSize={'26px'} position={'fixed'} ref={btnRef} color='#660033' onClick={onOpen} />
      </Flex>
      <Drawer
        blockScrollOnMount={false}
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton mt={5} />
          <DrawerBody mt={5} sx={{
            '&::-webkit-scrollbar': {
              width: '8px',
              borderRadius: '8px',
              backgroundColor: `blue.100`,
              border: '1px solid blue'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: `gray`,
              borderRadius: '8px',

            },
          }}>
            <VStack align={'left'} spacing={5}>
              {headerTitle.map((list, index) => {
                // eslint-disable-next-line react/jsx-key
                return <>
                  {index == 2 ?
                    <Text key={index} textAlign='left' cursor={'pointer'} _hover={{ color: '#ff214f' }}
                      fontSize={'20px'} onClick={dropDownServices}  >
                      {list.title}
                      {dropDown === true ?
                        <ChevronUpIcon ml={'130px'} />
                        :
                        <ChevronDownIcon ml={'130px'} />
                      }
                    </Text>
                    :
                    <Text key={index} textAlign='left' _hover={{ color: '#ff214f' }} mt={'35px'}
                      fontSize={'20px'} fontFamily={"['Montserrat, sans-serif']"}
                      color={router.pathname === list.id ? "red.300" : "gray.700"}
                      cursor={'pointer'}>
                      <Flex href={list?.id} passHref target={list.target} onClick={() => changeRoute(list?.id)} > {list.title}</Flex>
                    </Text>
                  }
                  {index === 2 ?
                    dropDown === true ?
                      services.map((List, index) => {
                        return <Flex fontFamily={"['Montserrat, sans-serif']"}
                          key={index} pl={5} _hover={{ color: '#ff214f', textDecoration: 'underline' }}>
                          <Flex style={{ fontSize: '18px' }} passHref _hover={{ color: '#ff214f' }} onClick={() => changeRoute(List?.id)} cursor={'pointer'} >{List.title}</Flex>
                        </Flex>
                      })
                      : null
                    :
                    null
                  }
                </>
              })}
            </VStack>
          </DrawerBody>
          <DrawerFooter justifyContent={'left'}>
            {links.map((d) => {
              return (
                <Button bg={'white'} size={'sm'} mr={'12px'} boxShadow='0px 0px 3px blue'
                  key={d.path} _hover={{ transform: 'scale(1.1)', }} p={0} variant={'flused'} >
                  <Link href={d.path} target="_blank">
                    {d.iconName}
                  </Link>
                </Button>
              )
            })}
          </DrawerFooter>
          <HStack ml={6}>
            <AiOutlineCopyrightCircle fontSize={12} color={'#ff214f'} />
            <Text fontSize={10}>  <b>Schoollog All </b>
              RIGHTS RESERVED
            </Text>
          </HStack>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
export default DrawerMenu;
