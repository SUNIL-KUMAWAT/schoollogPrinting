import { filter, find, map } from "lodash";
import React from "react";
import { PRODUCTS } from "../../constants";
import SelectedItemPage from "../SelectedItemPage";

export default function SelectedItem(props){

    return(
        <SelectedItemPage productItem={props.productItem} recommendItems={props.recommendItems}/>
    )
}

export async function getServerSideProps(context){
    const slug = context?.query.slug;
    const productItem = find(PRODUCTS, p => p.slug === slug );
    const recommendItems = filter(map(productItem?.recommend, slug => find(PRODUCTS, p => p.slug === slug )));

    console.log('productItems',productItem,slug, recommendItems);
    return (
        {
            props: { productItem ,recommendItems: recommendItems}
        }
    )
}