'use client'
import React from 'react'
import Link from 'next/link'
import brands from '@/asstes/data/brands.json'

export default function FeaturedBrands() {
    return (
        <div className="container w-full items-center justify-center">
            <div className="container columns-1 md:columns-4 w-full p-5 gap-4">
                {
                    brands.map((d, i) => {
                        while (i <= 7) {
                            return (
                                <div key={i} className="container mx-auto my-5 shadow-xl hover:p-3  float-left p-5">
                                    <Link href={`brands/${d.brand}`}>
                                        <img src={d.logo} alt="" className="w-full" />
                                        <h2 className="text-xl my-3 font-semibold text-gray-600">{d.brand}</h2>
                                    </Link>
                                </div>
                            )
                        }
                    })
                }

            </div>

            <div className="container w-full p-5">
                <button className="w-full px-4 p-5 bg-black text-white font-bold text-xl">
                    <Link href={'/brands'}>see more</Link>
                </button>
            </div>
        </div>
    )
}
