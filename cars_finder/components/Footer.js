import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="container md:flex md:flex-row text-white bg-gray-700 p-5">
            <div className="container w-full md:w-8/12 p-5">
                <h1 className="text-4xl font-semibold">Car Finder</h1>
                <hr className='my-10' />
                about :
                <p className="text-xs leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam in ratione autem, quia blanditiis est? Maxime cum,
                    magnam molestiae doloribus quis neque optio atque sunt quam
                    suscipit excepturi ad quibusdam?
                </p>

                <div className="container mt-5">
                    <Link className='ms-4text-sm text-gray-300' href={'/'}>API</Link>
                    <Link className='ms-4 text-sm text-gray-300' href={'/'}>about</Link>
                    <Link className='ms-4 text-sm text-gray-300' href={'/'}>terms</Link>
                    <Link className='ms-4 text-sm text-gray-300' href={'/'}>conditions</Link>
                </div>

            </div>
            <div className="container w-full mt-10 md:w-3/12 p-5">
                <h1 className="text-2xl">Connect with us :</h1>
                <div className="flex mt-10 flex-row">
                    <FaFacebook className='ms-4 ' size={30} />
                    <AiOutlineInstagram className='ms-4 ' size={30} />
                    <BsTwitter className='ms-4 ' size={30} />
                </div>
            </div>

        </div>
    )
}
