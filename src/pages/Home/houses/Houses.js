import React from 'react';

const Houses = () => {
    return (
        <div className='mt-20 grid md:grid-cols-3 gap-y-14'>

            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
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

                    {/* Modal button */}
                    <button className="btn w-full bg-orange-400 text-white text-xl font-semibold rounded-full py-2 mt-5 hover:bg-orange-500" onClick={() => window.my_modal_4.showModal()}>Book Now</button>

                    {/* Modal information */}
                    <dialog id="my_modal_4" className="modal">
                        <form method="dialog" className="modal-box">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <h3 className="font-bold text-lg text-center mb-5">Booking Information</h3>
                            <input type="text" placeholder='Enter your name' className='border w-full p-2 rounded-lg mb-4 placeholder:text-lg focus:outline-orange-200' />

                            <input type="text" placeholder='Enter your email' className='border w-full p-2 rounded-lg mb-4 placeholder:text-lg focus:outline-orange-200' />

                            <input type="text" placeholder='Enter your phone number' className='border w-full p-2 rounded-lg mb-4 placeholder:text-lg focus:outline-orange-200' />

                            <button className="btn w-full bg-orange-400 text-white text-xl font-semibold rounded-full py-2 mt-5 hover:bg-orange-500">Book</button>
                        </form>
                    </dialog>


                </div>
            </div>

            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
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
                    <button className='w-full bg-orange-400 text-white text-xl font-semibold rounded-full py-2 mt-5 hover:bg-orange-500'>Book Now</button>
                </div>
            </div>

            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
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
                    <button className='w-full bg-orange-400 text-white text-xl font-semibold rounded-full py-2 mt-5 hover:bg-orange-500'>Book Now</button>
                </div>
            </div>

            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
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
                    <button className='w-full bg-orange-400 text-white text-xl font-semibold rounded-full py-2 mt-5 hover:bg-orange-500'>Book Now</button>
                </div>
            </div>

            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
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
                    <button className='w-full bg-orange-400 text-white text-xl font-semibold rounded-full py-2 mt-5 hover:bg-orange-500'>Book Now</button>
                </div>
            </div>

        </div>
    );
};

export default Houses;