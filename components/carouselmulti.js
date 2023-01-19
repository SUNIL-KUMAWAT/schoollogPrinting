// import { Box, Img } from '@chakra-ui/react';
// import {Carousel as Caro} from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaChevronCircleLeft, FaChevronLeft } from 'react-icons/fa';
// import { useState } from 'react';
// import SelectedItemPage from '../pages/SelectedItemPage';

// const Carouselmulti = () => {
//     const responsive = {
//         superLargeDesktop: {
//           // the naming can be any, depends on you.
//           breakpoint: { max: 4000, min: 3000 },
//           items: 5
//         },
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 3
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1
//         }
//       };
//       const [imageShow,setImageShow ] = useState()
//     return <Box w={500} >
//     <Caro
//      responsive={responsive}
//      >
//   <Box onClick={()=>setImageShow('./IVYlogo.jpeg')} > <Img borderRadius={20} border={'1px solid black'} w={'150px'} h={'100px'} mt={'10px'}  zIndex={-1} src='./IVYlogo.jpeg' key="1" alt="" /></Box>
//   <Box onClick={()=>setImageShow('./001.png')} > <Img borderRadius={20} border={'1px solid black'} w={'150px'} h={'100px'} mt={'10px'}  zIndex={-1} src='./001.png' key="1" alt="" /></Box>
//   <Box> <Img borderRadius={20} border={'1px solid black'} w={'150px'} h={'100px'} mt={'10px'}  src='./IVYlogo.jpeg' key="1" alt="" /></Box>
//   <Box> <Img borderRadius={20} border={'1px solid black'} w={'150px'} h={'100px'} mt={'10px'}  zIndex={-1} src='./IVYlogo.jpeg' key="1" alt="" /></Box>
//   <Box> <Img borderRadius={20} border={'1px solid black'} w={'150px'} h={'100px'} mt={'10px'} src='./001.png' key="1" alt="" /></Box>
// </Caro>
// {/* <SelectedItemPage imageShow={imageShow} /> */}
//     </Box>
// }
 
// export default Carouselmulti;