import React, { useEffect, useState } from 'react'
import cars from '@/asstes/data/cars.json'
import Link from 'next/link';

export default function Similar({ data }) {

    let similar = [];

    cars.map((c) => {
        if (c.brand == data) {
            similar.push(c);
        }
    })

    return (
        <div className="container w-full flow-root p-5 bg-slate-100">
            <h1 className="text-4xl text-center my-10 text-gray-800">Similar Cars </h1>
            {
                similar.map((d, i) => {
                    return (
                        <Link href={`/cars/${d.model}`} key={i} className="container shadow-xl md:w-4/12 text-center cursor-pointer my-6 float-left w-full p-3 bg-white">
                            <img src={d.img} alt={d.model} className="w-full" />
                            <h3 className="text-gray-700 leading-8 my-5 text-2xl font-semibold capitalize">{d.brand} {d.model}</h3>
                            <h4 className="text-xl leading-8 font-semibold text-gray-600">{d.price}</h4>
                            <h4 className="text-xl leading-8 font-semibold text-gray-600">{d.overview}</h4>
                        </Link>
                    )
                })
            }
        </div>
    )
}
