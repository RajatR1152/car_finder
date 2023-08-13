import React from 'react'
import Link from 'next/link'
import brands from '@/asstes/data/brands.json'

export default function page() {
    return (
        <div className="container w-full p-5">
            <div className="container w-full items-center justify-center">

                <h1 className="text-3xl font-bold text-center text-gray-600 capitalize my-12">all popular brands</h1>

                <div className="container columns-1 md:columns-4 w-full p-5 gap-4">
                    {
                        brands.map((d, i) => {
                            return (
                                <div key={i} className="container text-center mx-auto my-5 shadow-xl hover:p-3  float-left p-5">
                                    <Link href={`brands/${d.brand}`}>
                                        <img src={d.logo} alt="" className="w-full" />
                                        <h2 className="text-xl my-3 font-semibold text-gray-600">{d.brand}</h2>
                                    </Link>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}
