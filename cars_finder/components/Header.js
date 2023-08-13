import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className="container w-full flex flex-col text-center md:flex-row gap-4 p-0 md:p-4">
            <Link href={'/'}><h1 className="text-3xl font-semibold text-gray-700">CarFinder</h1></Link>
            <ul className="items-center p-5 md:p-0 w-full gap-4 md:border-0 border-y-2 border-gray-700 md:w-fit mx-auto font-bold text-xl flex-row flex justify-center list-none">
                <li><Link href={'/cars'}>models</Link></li>
                <li><Link href={'/brands'}>brands</Link></li>
                <li><Link href={'/contact'}>contact</Link></li>
            </ul>
        </div>
    )
}
