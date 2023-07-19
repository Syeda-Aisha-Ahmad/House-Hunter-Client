import React, { useEffect, useState } from 'react';

const ManageListedHouses = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:5000/addHouse", requestOptions)
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                setData(result);
            })
            .catch(error => console.log('error', error));

    }, [])
    console.log(data)
    return (
        <div>
            {loading ? <p>Loading</p>
                :
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
                                {
                                    data.map((house, i) => <tr className=''>
                                        <th>{i + 1}</th>
                                        <td>
                                            <img src={house.photo} alt="Shoes" width="100" className="rounded h-30" />
                                        </td>
                                        <td className='font-semibold text-base'>{house.address}</td>
                                        <td className='font-semibold text-base'>Edit</td>
                                        <td><button className='text-red-600 font-semibold text-base'>Delete</button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>}
        </div>
    );
};

export default ManageListedHouses;