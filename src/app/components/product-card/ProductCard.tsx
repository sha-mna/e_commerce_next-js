'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, { useState, useEffect } from 'react'

export default function ProductCard(props: any) {
    var prod = props.product;
    const [selectedProduct, setSelectedProduct] = useState({});

    const selectProd = () => {
        console.log("Selecting prod: ", prod);
        setSelectedProduct(prod);
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1');
    }, []);

    const router = useRouter();

    // const navigateWithFilter = () => {
    //     let searchParams = '?';
    //     if(price !=null) {
    //         searchParams = searchParams + 'price-from=' + 10;
    //     }
    //     if(rating) {
    //         searchParams = searchParams + '&rating=' + 4;
    //     }
    //     router.push('/products?' + searchParams)
    // }

    return (
        <div>
            <button className="btn btn-primary" onClick={() => {
                router.push(`/products/${prod.id}`, {
                    scroll: false
                })
            }}>
                Details
            </button>
            <button className="btn btn-secondary" onClick={() => {
                router.push('/products?title=' + prod.title, {
                    scroll: true
                })
            }}>
                Same page navigation sample
            </button>
            <Link href={'/products/' + prod.id}>
                <div onClick={selectProd}>
                <img src={prod.image} width={50}/>
                {prod.title}
                </div>
            </Link>
        </div>
    )
}
