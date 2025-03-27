import Link from 'next/link'
import React from 'react'

export default function Nav() {
    return (
        <div>
            <ul className='nav nav-underline'>
                <li className='nav-item'>
                    <Link className='nav-link' href='/'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' href='/products'>Products</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' href='/about-us'>About Us</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' href='/contact'>Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}
