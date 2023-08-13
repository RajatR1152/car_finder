'use client'
import React, { useEffect, useState } from 'react'
import cars from '@/asstes/data/cars.json'
import Link from 'next/link'
import { HiOutlineSearch } from 'react-icons/hi'

export default function page() {

    const [data, setData] = useState(cars);
    const [brands, setBrands] = useState([]);
    const [searchItem, setSearchItem] = useState('');

    useEffect(() => {
        let brand = [];
        cars.map((d) => {
            brand.push(d.brand);
        })
        brand.push("all");
        brand = [...new Set(brand)]
        console.log(brand);
        setBrands(brand);
    }, []);

    const searchArr = [];

    function searchCar() {
        cars.map((c) => {
            if (c.brand.toLocaleLowerCase() == searchItem.toLocaleLowerCase() || c.brand.toLocaleLowerCase() + " " + c.model.toLocaleLowerCase() == searchItem.toLocaleLowerCase() || c.model.toLocaleLowerCase() == searchItem.toLocaleLowerCase()) {
                searchArr.push(c)
            }
        })
        setData(searchArr);
    }

    function handleChange() {
        const filter = document.getElementById('filter').value;

        if (filter.toLocaleLowerCase() == 'all') {
            setData(cars);
        }
        else {
            let arr = [];
            cars.map((d) => {
                if (d.brand == filter) {
                    arr.push(d);
                }
            })
            setData(arr);
        }
    }

    return (
        <div className="container p-5">

            <h1 className="text-3xl font-bold text-center text-gray-600 capitalize my-12">all popular cars</h1>

            <div className="container w-full flex items-center flex-col md:flex-row p-3 bg-slate-50">
                <div className="container w-full h-16 md:w-4/12 flex ">
                    <input type="text" onChange={(e) => { setSearchItem(e.target.value) }} value={searchItem} className="p-3 w-full focus:outline-none" placeholder='search...' />
                    <button onClick={searchCar} className="p-3 text-white bg-black"><HiOutlineSearch size={30} /></button>
                </div>
                <div className="container my-5 ms-auto w-full md:w-3/12">
                    <select name="filter" id="filter" onChange={handleChange} className="p-4 leading-7 w-full focus:outline-none" placeholder='select brand'>
                        {
                            brands.map((b, i) => {
                                return (
                                    <option value={b} className='w-full my-4 capitalize p-3 font-semibold' key={i}>{b}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>

            <div className="container text-center flow-root justify-center content-center w-full p-3 md:p-5 md:gap-4">
                {
                    data.map((d, i) => {
                        return (
                            <div key={i} className="container shadow-xl h-fit md:h-[350px] lg:h-[480px] hover:p-3 w-full md:w-4/12 mx-auto my-5 float-left p-5">
                                <Link href={`/cars/${d.model}`}>
                                    <img src={d.img} alt="" className="w-full" />
                                    <h2 className="text-2xl font-semibold capitalize my-2 text-gray-600">{d.brand}</h2>
                                    <h2 className="text-2xl font-semibold text-gray-600">{d.model}</h2>
                                    <h2 className="text-md my-3 font-semibold text-gray-600">{d.overview}</h2>
                                    <h2 className="text-xl font-semibold text-gray-600">{d.price}</h2>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
