import React from 'react';
import { GrAdd } from 'react-icons/gr';

const ListedHouses = () => {
    return (
        <div>

            <h1 className='font-semibold text-3xl mt-10 text-center text-orange-400'>Listed Houses</h1>

            <form className='text-center mt-20'>

                {/* Modal Button */}
                <span className="btn mb-1 p-2 mx-auto w-11/12 rounded-3xl bg-orange-300 flex justify-center items-center text-lg hover:bg-orange-400" onClick={() => window.my_modal_1.showModal()}><GrAdd className='text-xl mr-5' /> Add New House</span>

                {/* Modal Information */}
                <dialog id="my_modal_1" className="modal">
                    <form method="dialog" className="modal-box w-11/12 max-w-4xl">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg text-center">House Information</h3>

                        {/* Name, Address, City */}
                        <div className='flex  mt-5'>
                            <div className='flex items-center mr-5 mx-auto'>
                                <h2 className='text-left mr-3 font-semibold'>Name</h2>
                                <input type="text" className='border rounded-lg px-2 py-3 focus:outline-orange-200 border-gray-300 ' placeholder='Enter your name' />
                            </div>
                            <div className='flex items-center mr-5'>
                                <h2 className='text-left mr-3 font-semibold'>Address</h2>
                                <input type="text" className='border rounded-lg px-2 py-3 focus:outline-orange-200 border-gray-300 ' placeholder='Enter your Address' />
                            </div>
                            <div className='flex items-center mr-5'>
                                <h2 className='text-left mr-3 font-semibold'>City</h2>
                                <input type="text" className='border rounded-lg px-2 py-3 focus:outline-orange-200 border-gray-300 ' placeholder='Enter your city' />
                            </div>
                        </div>

                        {/* Bedrooms, Bathrooms, Room size */}
                        <div className='flex mt-5'>
                            <div className='flex items-center mr-5 mx-auto'>
                                <h2 className='text-left mr-3 font-semibold'>Bedrooms</h2>
                                <input type="number" min={1} className='border border-gray-300 rounded-lg px-2 py-3 focus:outline-orange-200 w-28' />
                            </div>
                            <div className='flex items-center mr-5'>
                                <h2 className='text-left mr-3 font-semibold'>Bathrooms</h2>
                                <input type="number" min={1} className='border border-gray-300 rounded-lg px-2 py-3 focus:outline-orange-200 w-28' />
                            </div>
                            <div className='flex items-center mr-5 w-5/12'>
                                <select name='room-size' className="select select-bordered w-full text-base focus:outline-none">
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
                                <input type="text" className='border rounded-lg px-2 py-3 focus:outline-orange-200 border-gray-300 w-full' placeholder='Enter picture url' />
                            </div>
                            <div className='flex items-center mr-5'>
                                <h2 className='text-left mr-3 font-semibold'>Availability date</h2>
                                <input type="date" className='border rounded-lg px-2 py-3 focus:outline-orange-200 border-gray-300 ' />
                            </div>
                            <div className='flex items-center mr-5'>
                                <h2 className='text-left mr-3 font-semibold'>Rent</h2>
                                <input type="text" className='border rounded-lg px-2 py-3 focus:outline-orange-200 w-40 border-gray-300 ' placeholder='Enter your amount' />
                            </div>
                        </div>

                        {/* Phone number and description */}
                        <div className='flex mt-5'>
                            <div className='flex items-center mr-5 mx-auto w-6/12'>
                                <h2 className='text-left mr-3 font-semibold'>Phone</h2>
                                <input type="tel" className='border rounded-lg px-2 py-3 focus:outline-orange-200 border-gray-300 w-full' placeholder='Enter phone number' />
                            </div>
                            <div className='flex items-center mr-5 w-6/12'>
                                <h2 className='text-left mr-3 font-semibold'>Description</h2>
                                <input type="text" className='border rounded-lg px-2 py-3 focus:outline-orange-200 border-gray-300 w-full' placeholder='Write a description' />
                            </div>
                        </div>

                        <button className='btn mt-8 p-2 mx-auto w-11/12 rounded-3xl bg-orange-300 flex justify-center items-center text-lg hover:bg-orange-400'>Add New House</button>

                    </form>
                </dialog>

            </form>


            <div className='mt-10 grid md:grid-cols-3 gap-y-14'>

                <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title flex justify-between">
                            Address,City

                            <div className="badge bg-orange-300 py-3 text-black text-base">$100/month</div>
                        </h2>
                        <p className='font-bold'>Owner Buchi Khondokar</p>
                        <p>5 bedrooms 9 bathrooms</p>
                        <div className='flex'>
                            <p>Room size: Midium</p>
                            <p className='font-semibold'>+8801992756161</p>
                        </div>
                        <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Availability date</div>
                        </div>


                    </div>
                </div>

                <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title flex justify-between">
                            Address,City

                            <div className="badge bg-orange-300 py-3 text-black text-base">$100/month</div>
                        </h2>
                        <p className='font-bold'>Owner Buchi Khondokar</p>
                        <p>5 bedrooms 9 bathrooms</p>
                        <div className='flex'>
                            <p>Room size: Midium</p>
                            <p className='font-semibold'>+8801992756161</p>
                        </div>
                        <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Availability date</div>
                        </div>

                    </div>
                </div>

                <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title flex justify-between">
                            Address,City

                            <div className="badge bg-orange-300 py-3 text-black text-base">$100/month</div>
                        </h2>
                        <p className='font-bold'>Owner Buchi Khondokar</p>
                        <p>5 bedrooms 9 bathrooms</p>
                        <div className='flex'>
                            <p>Room size: Midium</p>
                            <p className='font-semibold'>+8801992756161</p>
                        </div>
                        <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Availability date</div>
                        </div>

                    </div>
                </div>

                <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title flex justify-between">
                            Address,City

                            <div className="badge bg-orange-300 py-3 text-black text-base">$100/month</div>
                        </h2>
                        <p className='font-bold'>Owner Buchi Khondokar</p>
                        <p>5 bedrooms 9 bathrooms</p>
                        <div className='flex'>
                            <p>Room size: Midium</p>
                            <p className='font-semibold'>+8801992756161</p>
                        </div>
                        <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Availability date</div>
                        </div>

                    </div>
                </div>

                <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title flex justify-between">
                            Address,City

                            <div className="badge bg-orange-300 py-3 text-black text-base">$100/month</div>
                        </h2>
                        <p className='font-bold'>Owner Buchi Khondokar</p>
                        <p>5 bedrooms 9 bathrooms</p>
                        <div className='flex'>
                            <p>Room size: Midium</p>
                            <p className='font-semibold'>+8801992756161</p>
                        </div>
                        <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Availability date</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ListedHouses;