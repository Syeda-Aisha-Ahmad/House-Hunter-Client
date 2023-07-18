import React from 'react';

const ManageListedHouses = () => {
    return (
        <div className='mx-5'>
            <h1 className='font-semibold text-3xl my-10 text-center text-orange-400 '>
                Manage Listed Houses
            </h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Address</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>


                    <tbody>
                        <tr className=''>
                            <th>1</th>
                            <td>
                                <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Shoes" width="100" className="rounded" />
                            </td>
                            <td className='font-semibold text-base'>seller name</td>
                            <td className='font-semibold text-base'>Edit</td>
                            <td><button className='text-red-600 font-semibold text-base'>Delete</button></td>
                        </tr>

                        <tr className=''>
                            <th>2</th>
                            <td>
                                <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Shoes" width="100" className="rounded" />
                            </td>
                            <td className='font-semibold text-base'>seller name</td>
                            <td className='font-semibold text-base'>Edit</td>
                            <td><button className='text-red-600 font-semibold text-base'>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageListedHouses;