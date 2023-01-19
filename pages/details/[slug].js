import { find, map } from "lodash";
import { useRouter } from "next/router";
import React from "react";
import { PRODUCTS } from "../../constants";
import SelectedItemPage from "../SelectedItemPage";

export default function SelectedItem(props){
    console.log("singleItem", props);
    const router = useRouter();
    const slug = router.query?.slug;
    console.log("router", router)
    const itemDetails =  PRODUCTS[0] || find(PRODUCTS, p => p.slug === slug );
    return(
        <SelectedItemPage details={itemDetails}/>
    )
}

// export async function getStaticPaths(){    
//     return ({
//         paths:[],
//         fallback: false
//     })
// }

// export async function getStaticProps({ query }){
//     const slug = query?.slug;
//     const itemDetails = find(PRODUCTS, p => p.slug === slug );
//     console.log("context", slug, itemDetails)
//     return (
//         {
//             props: { details: {} }
//         }
//     )
// }