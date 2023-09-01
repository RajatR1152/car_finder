import React from 'react'

export default function Contact() {
    return (
        <div style={{ 'backgroundImage': `url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29udGFjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')` }} className="container md:block hidden w-full my-5 p-20 bg-cover bg-no-repeat h-screen">
            <h1 className="text-white text-4xl w-6/12">Buying a new car ?</h1>
            <h2 className="text-white text-xl my-10 w-7/12">contact us we provide you a wide range of new and used cars availabe in your city.</h2>
            <div className="container inherit opacity-80 bg-gray-800 p-5 w-5/12">
                <form className='form text-light m-5' action="" method='post'>
                    <input type="text" placeholder='username..' className="p-4 w-full my-5 focus:outline-none" />
                    <input type="text" name='email' placeholder='email address..' className="p-4 my-5 w-full focus:outline-none" />

                    <textarea name="message" placeholder='type fast..' id="" className="p-5 w-full h-40  focus:outline-none"></textarea>

                    <input type='submit' value={'submit'} className="text-center mt-3 w-full px-10 py-5 md:px-28 md:py-7 text-white border-x hover:bg-white hover:text-gray-800 border-white border-y text-xl font-semibold" />

                </form>
            </div>
        </div>
    )
}
