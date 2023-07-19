import React, { useEffect, useState } from 'react';
import { GrAdd } from 'react-icons/gr';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const ListedHouses = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [dataa, setDataa] = useState([])
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(true);

    const addHouse = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const address = form.address.value;
        const city = form.city.value;
        const beds = form.beds.value;
        const bathrooms = form.bathrooms.value;
        const room = form.room.value;
        const photo = form.photo.value;
        const date = form.date.value;
        const rent = form.rent.value;
        const phone = form.phone.value;
        const description = form.description.value;

        const houseData = {
            name,
            address,
            city,
            beds,
            bathrooms,
            room,
            photo,
            date,
            rent,
            phone,
            description
        }


        fetch('http://localhost:5000/addHouse', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(houseData),
        })
            .then(res => res.json())
            .then(data => {
                setDataa(data)
                if (data.acknowledged) {
                    toast.success('Successfully toasted!')
                    loading(true)
                    alert("Done");
                }
                else {
                    alert(data.message);
                }
            })
            .catch(error => console.error(error));
    }



    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:5000/addHouse", requestOptions)
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                setHouses(result);
            })
            .catch(error => console.log('error', error));

    }, [])

    return (
        <div>

            <h1 className='font-semibold text-3xl mt-10 text-center text-orange-400'>Listed Houses</h1>

            <div className='text-center mt-20'>

                {/* Modal Button */}
                <span className="btn mb-1 p-2 mx-auto w-11/12 rounded-3xl bg-orange-300 flex justify-center items-center text-lg hover:bg-orange-400" onClick={() => window.my_modal_1.showModal()}><GrAdd className='text-xl mr-5' /> Add New House</span>

                {/* Modal Information */}
                <dialog id="my_modal_1" className="modal">

                    <form method="dialog" onSubmit={addHouse} className="modal-box w-11/12 max-w-4xl">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg text-center">House Information</h3>

                        {/* Name, Address, City */}
                        <div className='flex  mt-5'>
                            <div className='flex items-center mr-5 mx-auto'>
                                <h2 className='text-left mr-3 font-semibold'>Name</h2>
                                <input name='name' type="text" className='border rounded-lg px-2 py-3 focus:outline-orange-200 border-gray-300 ' placeholder='Enter your name' />
                            </div>
                            <div className='flex items-center mr-5'>
                                <h2 className='text-left mr-3 font-semibold'>Address</h2>
                                <input name='address' type="text" className='border rounded-lg px-2 py-3 focus:outline-orange-200 border-gray-300 ' placeholder='Enter your Address' />
                            </div>
                            <div className='flex items-center mr-5'>
                                <h2 className='text-left mr-3 font-semibold'>City</h2>
                                <input name='city' type="text" className='border rounded-lg px-2 py-3 focus:outline-orange-200 border-gray-300 ' placeholder='Enter your city' />
                            </div>
                        </div>

                        {/* Bedrooms, Bathrooms, Room size */}
                        <div className='flex mt-5'>
                            <div className='flex items-center mr-5 mx-auto'>
                                <h2 className='text-left mr-3 font-semibold'>beds</h2>
                                <input name='beds' type="number" min={1} className='border border-gray-300 rounded-lg px-2 py-3 focus:outline-orange-200 w-28' />
                            </div>
                            <div className='flex items-center mr-5'>
                                <h2 className='text-left mr-3 font-semibold'>Bathrooms</h2>
                                <input name='bathrooms' type="number" min={1} className='border border-gray-300 rounded-lg px-2 py-3 focus:outline-orange-200 w-28' />
                            </div>
                            <div className='flex items-center mr-5 w-5/12'>
                                <select name='room' className="select select-bordered w-full text-base focus:outline-none">
                                    <option disabled selected>Room size</option>
                                    <option>Small</option>
                                    <option>Midium</option>
                                    <option>Large</option>
                                </select>
                            </div>
                        </div>

                        {/* Picture, Availability date, rent */}
                        <div className='flex mt-5'>
                            <div className='flex items-center mr-5 mx-auto'>
                                <h2 className='text-left mr-3 font-semibold'>Picture</h2>
                                <input name='photo' type="text" className='border rounded-lg px-2 py-3 focus:outline-orange-200 border-gray-300 w-full' placeholder='Enter picture url' />
                            </div>
                            <div className='flex items-center mr-5'>
                                <h2 className='text-left mr-3 font-semibold'>Availability date</h2>
                                <input name='date' type="date" className='border rounded-lg px-2 py-3 focus:outline-orange-200 border-gray-300 ' />
                            </div>
                            <div className='flex items-center mr-5'>
                                <h2 className='text-left mr-3 font-semibold'>Rent</h2>
                                <input name='rent' type="text" className='border rounded-lg px-2 py-3 focus:outline-orange-200 w-40 border-gray-300 ' placeholder='Enter your amount' />
                            </div>
                        </div>

                        {/* Phone number and description */}
                        <div className='flex mt-5'>
                            <div className='flex items-center mr-5 mx-auto w-6/12'>
                                <h2 className='text-left mr-3 font-semibold'>Phone</h2>
                                <input name='phone' type="tel" className='border rounded-lg px-2 py-3 focus:outline-orange-200 border-gray-300 w-full' placeholder='Enter phone number' />
                            </div>
                            <div className='flex items-center mr-5 w-6/12'>
                                <h2 className='text-left mr-3 font-semibold'>Description</h2>
                                <input name='description' type="text" className='border rounded-lg px-2 py-3 focus:outline-orange-200 border-gray-300 w-full' placeholder='Write a description' />
                            </div>
                        </div>


                        <button type="submit" className='btn mt-8 p-2 mx-auto w-11/12 rounded-3xl bg-orange-300 flex justify-center items-center text-lg hover:bg-orange-400'> Add New House</button>

                    </form>
                </dialog>

            </div>


            <div >

                {loading ?
                    <p>Loading</p> :


                    <div className='mt-20 grid md:grid-cols-3 gap-y-14'>
                        {
                            houses.map(house =>
                                <div className="card w-72 mx-auto bg-base-100 shadow-xl">
                                    <figure className="h-30"><img src={house.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title flex justify-between">
                                            {house.city}

                                            <div className="badge bg-orange-300 py-3 text-black text-base">{house.rent}/=</div>
                                        </h2>
                                        <p className='font-bold'>{house.name}</p>
                                        <p>{house.beds} bedrooms {house.bathrooms} bathrooms</p>
                                        <div className='flex'>
                                            <p>Room size: {house.room}</p>
                                            <p className='font-semibold'>{house.phone}</p>
                                        </div>
                                        <p>{house.description}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">Availability: {house.date}</div>
                                        </div>

                                        {/* Modal button */}
                                        <button className="btn w-full bg-orange-400 text-white text-xl font-semibold rounded-full py-2 mt-5 hover:bg-orange-500" onClick={() => window.my_modal_4.showModal()}>Book Now</button>

                                        {/* Modal information */}
                                        <dialog id="my_modal_4" className="modal">


                                            <form method="dialog" className="modal-box" onSubmit={addHouse}>
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                <h3 className="font-bold text-lg text-center mb-5">Booking Information</h3>

                                                <input placeholder="Enter your name" {...register("name")} className='border w-full p-2 rounded-lg mb-4 placeholder:text-lg focus:outline-orange-200' />

                                                <input placeholder="Enter your email" {...register("email")} className='border w-full p-2 rounded-lg mb-4 placeholder:text-lg focus:outline-orange-200' />

                                                <input placeholder="Enter your phone" {...register("phone")} className='border w-full p-2 rounded-lg mb-4 placeholder:text-lg focus:outline-orange-200' />


                                                {errors.exampleRequired && <span>This field is required</span>}

                                                <input type="submit" className="btn w-full bg-orange-400 text-white text-xl font-semibold rounded-full py-2 mt-3 hover:bg-orange-500" />
                                            </form>
                                        </dialog>


                                    </div>
                                </div>)
                        }
                    </div>

                }
            </div>
        </div>
    );
};

export default ListedHouses;