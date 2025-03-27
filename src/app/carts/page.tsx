import Link from 'next/link'
import React from 'react'

export default function Cart() {
    return (
        <div>
            Cart
            <Link href="/products#recommended">Goto Recommended Section</Link>
        </div>
    )
}
