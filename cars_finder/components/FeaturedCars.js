import React from 'react'
import FeaturedNavs from './FeaturedNavs'
import data from '@/asstes/data/cars.json'
import Link from 'next/link'

export default function FeaturedCars() {
    return (
        <div className="container w-full items-center justify-center">
            <FeaturedNavs />
            <div className="container columns-1 text-center justify-center content-center md:columns-3 w-full p-5 md:gap-4">
                {
                    data.map((d, i) => {
                        while (i <= 8) {
                            return (
                                <div key={i} className="container shadow-xl h-fit md:h-[350px] lg:h-[480px] hover:p-3 w-full mx-auto my-5 float-left p-5">
                                    <Link href={`/cars/${d.model}`}>
                                        <img src={d.img} alt="" className="w-full" />
                                        <h2 className="text-2xl font-semibold capitalize my-2 text-gray-600">{d.brand}</h2>
                                        <h2 className="text-2xl font-semibold text-gray-600">{d.model}</h2>
                                        <h2 className="text-md my-3 font-semibold text-gray-600">{d.overview}</h2>
                                        <h2 className="text-xl font-semibold text-gray-600">{d.price}</h2>
                                    </Link>
                                </div>
                            )
                        }
                    })
                }
            </div>

            <div className="container w-full p-5">
                <button className="w-full px-4 p-5 bg-black text-white font-bold text-xl">
                    <Link href={'/cars'}>see more</Link>
                </button>
            </div>
        </div>
    )
}
