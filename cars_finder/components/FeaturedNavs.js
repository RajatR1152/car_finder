import Link from 'next/link'
import React from 'react'

export default function FeaturedNavs() {
    return (
        <div className="conainer flex flex-row my-5 text-xl font-semibold gap-4 w-fit mx-auto p-4">
            <Link className='p-3' href={'/cars'}>new cars</Link>
            <Link className='p-3' href={'/brands'}>brands</Link>
        </div>
    )
}
