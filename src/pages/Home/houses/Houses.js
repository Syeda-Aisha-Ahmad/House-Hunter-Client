import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const Houses = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const watchs = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        console.log(name, email, phone)
        form.reset();
    }
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
        <div >

            {loading ?
                <p>Loading</p> :


                <div className='mt-20 grid md:grid-cols-3 gap-y-14'>
                    {
                        data.map(house =>
                            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                                <figure><img src={house.photo}
                                    alt="Shoes" /></figure>
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


                                        <form method="dialog" className="modal-box" onSubmit={watchs}>
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
    );
};

export default Houses;