import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 pt-5">
            <div className="navbar md:navbar-start flex md:inline-block justify-between md:justify-normal items-center">
                <Link to={"/"} className='normal-case font-bold text-xl font-mono md:text-3xl md:mt-2 text-orange-800'>House Hunter</Link>
                <div className="dropdown">
                    <label tabIndex={0} className="btn px-3 lg:hidden bg-orange-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-white "><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>

                    {/* Small device */}
                    <ul tabIndex={0} className="menu menu-sm dropdown-content right-1 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <div className="form-control w-full ">
                                <input type="text" placeholder="Search" className="input input-bordered w-44 md:w-full " />
                            </div>
                        </li>
                        <li> <Link to="/dashboard" className='mr-5 text-gray-600'>Dashboard</Link></li>
                        <li><Link to="/login" className='mr-5 text-gray-600'>Login</Link></li>
                    </ul>
                </div>

            </div>

            {/* Large device */}
            <div className="navbar hidden lg:flex">
                <div className="form-control w-full">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-full rounded-full shadow-md" />
                </div>

                {/* Modal Button*/}
                <div className='border mx-3 px-5 py-2 rounded-full border-gray-300 shadow-md text-lg text-gray-500 '>
                    <button className="flex items-center" onClick={() => window.my_modal_3.showModal()}><FaFilter className='mr-2 text-orange-800' />
                        Filters</button>
                </div>

                {/* Modal Information */}
                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box w-11/12 max-w-3xl">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg text-center mb-5">Filters</h3>
                        <hr />

                        <div className='mt-5 mb-8'>
                            <h2 className='text-2xl font-semibold mb-3'>Search for a city</h2>
                            <div className="form-control w-full ">
                                <input type="text" placeholder="Search" className="input input-bordered w-44 md:w-full " />
                            </div>
                        </div>

                        <hr />

                        {/* Beds and Bathrooms */}
                        <div className="my-8">
                            <h1 className='font-semibold text-2xl mt-5'>Beds and bathrooms</h1>

                            {/* Beds */}
                            <div className='mt-6'>
                                <h2 className='text-xl '>Beds</h2>
                                <div className='mt-3 flex justify-between'>
                                    <button className='text-lg font-semibold border border-orange-800 py-1 px-7 rounded-full hover:bg-orange-800 hover:text-white'>Any</button>
                                    <button className='text-lg font-semibold border border-orange-800 py-1 px-7 rounded-full hover:bg-orange-800 hover:text-white'>1</button>
                                    <button className='text-lg font-semibold border border-orange-800 py-1 px-7 rounded-full hover:bg-orange-800 hover:text-white'>2</button>
                                    <button className='text-lg font-semibold border border-orange-800 py-1 px-7 rounded-full hover:bg-orange-800 hover:text-white'>3</button>
                                    <button className='text-lg font-semibold border border-orange-800 py-1 px-7 rounded-full hover:bg-orange-800 hover:text-white'>4</button>
                                    <button className='text-lg font-semibold border border-orange-800 py-1 px-7 rounded-full hover:bg-orange-800 hover:text-white'>5</button>
                                    <button className='text-lg font-semibold border border-orange-800 py-1 px-7 rounded-full hover:bg-orange-800 hover:text-white'>6</button>
                                    <button className='text-lg font-semibold border border-orange-800 py-1 px-7 rounded-full hover:bg-orange-800 hover:text-white'>7</button>
                                    <button className='text-lg font-semibold border border-orange-800 py-1 px-7 rounded-full hover:bg-orange-800 hover:text-white'>8+</button>
                                </div>
                            </div>


                            {/* Bathrooms */}
                            <div className='mt-6'>
                                <h2 className='text-xl '>Bathrooms</h2>
                                <div className='mt-3 flex justify-between'>
                                    <button className='text-lg font-semibold border border-orange-800 py-1 px-7 rounded-full hover:bg-orange-800 hover:text-white'>Any</button>
                                    <button className='text-lg font-semibold border border-orange-800 py-1 px-7 rounded-full hover:bg-orange-800 hover:text-white'>1</button>
                                    <button className='text-lg font-semibold border border-orange-800 py-1 px-7 rounded-full hover:bg-orange-800 hover:text-white'>2</button>
                                    <button className='text-lg font-semibold border border-orange-800 py-1 px-7 rounded-full hover:bg-orange-800 hover:text-white'>3</button>
                                    <button className='text-lg font-semibold border border-orange-800 py-1 px-7 rounded-full hover:bg-orange-800 hover:text-white'>4</button>
                                    <button className='text-lg font-semibold border border-orange-800 py-1 px-7 rounded-full hover:bg-orange-800 hover:text-white'>5</button>
                                    <button className='text-lg font-semibold border border-orange-800 py-1 px-7 rounded-full hover:bg-orange-800 hover:text-white'>6</button>
                                    <button className='text-lg font-semibold border border-orange-800 py-1 px-7 rounded-full hover:bg-orange-800 hover:text-white'>7</button>
                                    <button className='text-lg font-semibold border border-orange-800 py-1 px-7 rounded-full hover:bg-orange-800 hover:text-white'>8+</button>
                                </div>
                            </div>
                        </div>

                        <hr />

                        {/* Room size */}
                        <div className="my-8">
                            <h1 className='font-semibold text-2xl mt-5 mb-5'>Room Size</h1>
                            <div className='grid grid-cols-3 gap-3'>
                                <div className='text-center px-5 py-10 hover:border-orange-800 rounded-2xl border font-semibold'>
                                    <p className='text-xl mb-2'>Small</p>
                                    <p>	10 X 10 Feet</p>
                                </div>

                                <div className='text-center px-5 py-10 hover:border-orange-800 rounded-2xl border font-semibold'>
                                    <p className='text-xl mb-2'>Medium</p>
                                    <p>	12 X 12 Feet</p>
                                </div>

                                <div className='text-center px-5 py-10 hover:border-orange-800 rounded-2xl border font-semibold'>
                                    <p className='text-xl mb-2'>Large</p>
                                    <p>	14 X 16 Feet</p>
                                </div>
                            </div>
                        </div>

                        <hr />

                        {/* Rent per month */}

                        <div className="my-8">
                            <h1 className='font-semibold text-2xl mt-5'>Rent per month</h1>


                        </div>

                    </form>
                </dialog>


            </div>
            <div className="md:navbar-end hidden md:flex">
                <Link to="/dashboard" className='mr-5 text-lg font-semibold  text-orange-800'>Dashboard</Link>
                <Link to="/login" className='mr-5 text-lg font-semibold  text-orange-800'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;