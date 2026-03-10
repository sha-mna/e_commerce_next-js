import { ProductsService } from '@/app/services/products-service';
import type { Metadata, ResolvingMetadata } from 'next';
import { title } from 'process';
import React from 'react'

// Static
// export const metadata: Metadata = {
//     title: "Product detail page"
// }

// Dynamic
export async function generateMetadata(props: any) {
    console.log("generateMetadata: ", props);
    const productId = props.params.productId;
    var product;
    if(productId) {
        product = await ProductsService.getProductById(productId);
        return {
            title: product.title
        }
    }
    return {
        title: "Product Detail Page"
    }
}

export default async function ProductDetail(props: any) {
    console.log(props);
    const productId = props.params.productId;
    var product;
    if (productId) {
        product = await ProductsService.getProductById(productId)
        // product = await ProductsService.getProductById(productId)
    }
    
    return (
        <div>
            <h3>{product.title}</h3>
        </div>
    )
}



