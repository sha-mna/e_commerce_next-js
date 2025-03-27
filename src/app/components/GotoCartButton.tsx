'use client'

import { useRouter } from 'next/navigation'
import React from 'react';


export default function GotoCartButton() {
    const router = useRouter();
    return (
        <div>
            <button className="btn btn-warning" onClick={() => {
                // router.push('/carts')
                router.replace('/carts')
            }}
            >
                Go to Cart
            </button>
        </div>
    )
}
