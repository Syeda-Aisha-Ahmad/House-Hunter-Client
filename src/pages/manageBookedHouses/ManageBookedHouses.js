import React from 'react';

const ManageBookedHouses = () => {
    return (
        <div className='mx-5'>
            <h1 className='text-4xl text-center text-primary my-10 '>
                All Sellers
            </h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Owner Name</th>
                            <th>Address</th>
                            <th>Delete</th>
                        </tr>
                    </thead>


                    <tbody>
                        <tr className=''>
                            <th>1</th>
                            <td>
                                <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Shoes" width="100" className="rounded" />
                            </td>
                            <td className='font-semibold text-base'>Nobu Khotto</td>
                            <td className='font-semibold text-base'>Address</td>
                            <td><button className='text-red-600 font-semibold text-base'>Delete</button></td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBookedHouses;