import React from 'react'
import FeaturedCars from './FeaturedCars'
import FeaturedBrands from './FeaturedBrands'

export default function Featured() {
    return (
        <div className="conainer text-center w-full">
            <h1 className="text-4xl  text-gray-700 capitalize my-10 font-semibold">we help you to find the right car</h1>
            <p className="leading-8 text-xl font-semibold md:w-4/12 mx-auto text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quia ab voluptates quam culpa minima dolor exercitationem
                voluptatibus dolore facere quo laboriosam repellat nostrum,
                alias fuga quis est quae iure fugiat.
            </p>
            <FeaturedCars />
            <FeaturedBrands />
        </div>
    )
}
