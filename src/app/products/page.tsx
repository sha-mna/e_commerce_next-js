import React from 'react'
import GotoCartButton from '../components/GotoCartButton';
import Link from 'next/link';
import ProductList from '../components/ProductList';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { cookies, headers } from 'next/headers';

    export const metadata: Metadata = {
        title: "Product List Page"
    }

    export default async function Products(props:any) {
        console.log("Products page executed", props);
        const cookieList = await cookies();
        const tokenCookie = cookieList.get('authToken');
        console.log("token is: ", tokenCookie, tokenCookie?.value);
        
        const headersList = await headers();
        const referrer = headersList.get('referer');
        console.log("Referrer is:", referrer);
        console.log(headersList.get('User-Agent'));
        console.log(headersList.get('Host'));
        
    return (
        <div>
            <GotoCartButton />
            <h3>Product List</h3>
            <Link href="#recommended" prefetch={false}>Goto Recommended Section</Link>
            <Suspense fallback={<span style={{ color: 'red'}}>Loading</span>}>
                <ProductList />
            </Suspense>
            <h3 id="recommended">Recommended Products</h3>
        </div>
    )
}
