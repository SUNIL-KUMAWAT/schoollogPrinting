import { Box,Text } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"


const NotFound = ()=>{
       const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            // router.go(-1)
            router.push('/');
        },3000)
    }, [router])

    return(
        <Box align={'center'}>
            <Text> Page NOT found</Text>
            <Text>Go Back to <Link href='/'>Homepage</Link></Text>
        </Box>
    )
}

export default NotFound;