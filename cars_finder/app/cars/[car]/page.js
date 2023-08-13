'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import cars from '@/asstes/data/cars.json'
import SpecsTable from '@/components/SpecsTable'
import Similar from '@/components/Similar'

export default function page() {
    const path = useParams();
    const [data, setData] = useState([]);
    var date = new Date();
    var options = { month: 'long' };
    var month = date.toLocaleString('default', options);

    useEffect(() => {
        cars.map((d) => {
            if (d.model == path.car) {
                setData(d);
            }
        })
    })

    console.log(data);

    return (
        <div className="container">
            <div className="container bg-slate-200 p-8 flow-root md:flex text-gray-800 mt-8">
                <div className="container w-full md:w-6/12">
                    <img className="w-full h-100 m-auto" src={data.img} />
                </div>
                <div className="container w-full md:w-8/12 p-8 text-left ">
                    <h1 className="text-2xl md:text-3xl font-semibold my-5">{data.brand} {data.model}</h1>
                    ovrview:
                    <h1 className="text-2xl font-semibold mb-8">{data.overview}</h1>
                    <h1 className="text-2xl font-semibold mt0">{data.price}</h1>
                    average expected price

                    <button className="text-center float-left w-full md:mb-5 mt-10 border-gray-700 py-5 md:px-28 md:py-5 my-5 text-gray-800 border-x hover:bg-gray-800 hover:text-white border-gray-980 border-y text-xl font-semibold">view {month} offer</button>
                </div>
            </div>
            <SpecsTable data={cars} model={path.car} brand={data.brand} />
            <Similar data={data.brand} />
        </div>
    )
}
