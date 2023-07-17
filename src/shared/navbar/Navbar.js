import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar md:navbar-start flex md:inline-block justify-between md:justify-normal items-center">
                <Link to={"/"} className='normal-case font-bold text-xl md:text-2xl md:mt-2'>House Hunter</Link>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>

                    {/* Small device */}
                    <ul tabIndex={0} className="menu menu-sm dropdown-content right-1 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <div className="form-control w-full ">
                                <input type="text" placeholder="Search" className="input input-bordered w-44 md:w-full" />
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
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-full" />
                </div>
            </div>
            <div className="md:navbar-end hidden md:flex">
                <Link to="/dashboard" className='mr-5 text-lg font-semibold text-gray-600'>Dashboard</Link>
                <Link to="/login" className='mr-5 text-lg font-semibold text-gray-600'>Login</Link>
            </div>
        </div>
    );
};

export default navbar;