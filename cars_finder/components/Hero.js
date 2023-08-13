import React from 'react'

export default function Hero() {
    return (
        <div style={{ backgroundImage: `url('https://sub5zero.com/wp-content/uploads/2013/06/vorsteiner_bmw_m6_07.jpg')`, backgroundSize: 'cover',backgroundAttachment:'fixed', backgroundRepeat: 'no-repeat' }} className="container h-screen w-full block md:flex root md:flex-row">
            <div className={"md:w-6/12 text-center ms-auto mt-4 text-gray-800 p-5 px-10"}>
                <h1 className="text-5xl font-bold my-5">Find your Ride</h1>
                <p className='md:text-xl text-l text-center font-semibold md:leading-9'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque rerum error necessitatibus tempora quis nobis
                    nemo maxime modi dignissimos iusto in expedita aperiam,
                    minus tenetur ut labore praesentium deleniti porro!
                </p>
                <button className='p-5 rounded-lg shadow-2xl shadow-white bg-black text-white mx-auto mt-5'>explore</button>
            </div>

        </div>
    )
}
