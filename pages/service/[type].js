import { filter } from "lodash";
import React from "react";
import { PRODUCTS } from "../../constants";
import SelectedProductPage from "../../components/SelectedProductPage";

export default function SelectedItem(props){
    return(
        <SelectedProductPage productItems={props.productItems}/>
    )
}

export async function getServerSideProps(context){
    const type = context?.query.type;
    const productItems = filter(PRODUCTS, p => p.productType === type );
    console.log('productItems',productItems,type);
    return (
        {
            props: { productItems }
        }
    )
}