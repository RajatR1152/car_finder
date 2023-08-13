import React from 'react'

export default function SpecsTable({ data, model ,brand}) {
    return (
        <div className="container overflow-hidden bg-white p-0 md:p-5">
            <div className="w-12/12 p-8">
                <h1 className='md:text-2xl font-semibold md:font-bold text-center text-gray-800'>{brand} {model} Featurs & Specifications</h1>
            </div>

            <table className='table-auto w-full'>
                <thead></thead>
                {
                    data.map((c, i) => {
                        if (c.model == model) {
                            return (
                                <tbody key={i}>
                                    <tr className='w-full border border-gray-700' >
                                        <th className='px-3 md:px-5 text-xl md:text-2xl font-semibold md:font-bold py-8 md:p-8 w-6/12'>Model : </th>
                                        <td className='px-3 md:px-5 text-xl md:font-semibold text-gray-600 py-8 md:p-8 w-6/12'>{c.model}</td>
                                    </tr>
                                    <tr className='w-full border border-gray-700' >
                                        <th className='px-3 md:px-5 text-xl md:text-2xl font-semibold md:font-bold py-8 md:p-8 w-6/12'>Manufacturer : </th>
                                        <td className='px-3 md:px-5 text-xl md:font-semibold text-gray-600 py-8 md:p-8 w-6/12'>{c.brand}</td>
                                    </tr>
                                    <tr className='w-full border border-gray-700' >
                                        <th className='px-3 md:px-5 text-xl md:text-2xl font-semibold md:font-bold py-8 md:p-8 w-6/12'>Price : </th>
                                        <td className='px-3 md:px-5 text-xl md:font-semibold text-gray-600 py-8 md:p-8 w-6/12'>{c.price}</td>
                                    </tr>
                                    <tr className='w-full border border-gray-700' >
                                        <th className='px-3 md:px-5 text-xl md:text-2xl font-semibold md:font-bold py-8 md:p-8 w-6/12'>Engine : </th>
                                        <td className='px-3 md:px-5 text-xl md:font-semibold text-gray-600 py-8 md:p-8 w-6/12'>{c.specs[0]['engine']}</td>
                                    </tr>
                                    <tr className='w-full border border-gray-700'>
                                        <th className='px-3 md:px-5 text-xl md:text-2xl font-semibold md:font-bold py-8 md:p-8 w-6/12'>Fuel-type : </th>
                                        <td className='px-3 md:px-5 text-xl md:font-semibold text-gray-600 py-8 md:p-8 w-6/12'>{c.specs[0]['fuel-type']}</td>
                                    </tr>
                                    <tr className='w-full border border-gray-700'>
                                        <th className='px-3 md:px-5 text-xl md:text-2xl font-semibold md:font-bold py-8 md:p-8 w-6/12'>Break : </th>
                                        <td className='px-3 md:px-5 text-xl md:font-semibold text-gray-600 py-8 md:p-8 w-6/12'>{c.specs[0]['break']}</td>
                                    </tr>
                                    <tr className='w-full border border-gray-700'>
                                        <th className='px-3 md:px-5 text-xl md:text-2xl font-semibold md:font-bold py-8 md:p-8 w-6/12'>Dimension : </th>
                                        <td className='px-3 md:px-5 text-xl md:font-semibold text-gray-600 py-8 md:p-8 w-6/12'>{c.specs[0]['dimension(l*w*h)']}</td>
                                    </tr>
                                    <tr className='w-full border border-gray-700'>
                                        <th className='px-3 md:px-5 text-xl md:text-2xl font-semibold md:font-bold py-8 md:p-8 w-6/12'>Torque : </th>
                                        <td className='px-3 md:px-5 text-xl md:font-semibold text-gray-600 py-8 md:p-8 w-6/12'>{c.specs[0]['torque']}</td>
                                    </tr>
                                </tbody>

                            )
                        }
                    })
                }
            </table>
        </div>
    )
}
