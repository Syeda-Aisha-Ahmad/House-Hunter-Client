import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../shared/navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>

            {/* Large */}
            <div className=''>
                {/* small navbar */}
                {/* <div className="dropdown">
                    <label tabIndex={0} className="btn px-3 lg:hidden bg-orange-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-white "><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul className='flex ' tabIndex={0}>
                        <li><Link to={"/"} className='normal-case font-bold text-xl font-mono md:text-3xl md:mt-2 text-orange-800'>House Hunter</Link></li>
                        <li><Link to={"/dashboard/listedHouses"}>Listed Houses</Link></li>
                        <li><Link to={"/dashboard/manageListedHouses"}>Manage Listed Houses</Link></li>
                        <li><Link to={"/dashboard/bookedHouses"}>Booked Houses</Link></li>
                        <li><Link to={"/dashboard/manageBookedHouses"}>Manage Booked Houses</Link></li>
                        <li><Link to={"/login"}>Login</Link></li>
                    </ul>
                </div> */}

                <div className='flex items-center justify-between md:hidden'>
                    <Link to={"/"} className='normal-case font-bold text-3xl ml-8 font-mono md:text-3xl md:mt-2 text-orange-800'>House Hunter</Link>
                    <div className=" dropdown">
                        <label tabIndex={0} className="btn px-3 mr-8 lg:hidden bg-orange-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-white "><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>

                        {/* Small device */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content right-1 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <li><Link to={"/dashboard/listedHouses"}>Listed Houses</Link></li>
                            <li><Link to={"/dashboard/manageListedHouses"}>Manage Listed Houses</Link></li>
                            <li><Link to={"/dashboard/bookedHouses"}>Booked Houses</Link></li>
                            <li><Link to={"/dashboard/manageBookedHouses"}>Manage Booked Houses</Link></li>
                            <li><Link to={"/login"}>Login</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="drawer drawer-mobile relative">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />



                    <div className="drawer-content md:ml-80">
                        <Outlet></Outlet>
                    </div>
                    <div className="h-screen fixed hidden md:block">
                        <label htmlFor="" className=""></label>
                        <ul className="menu p-4 w-80 h-screen text-base-content bg-orange-300 ">


                            <li><Link to={"/"} className='normal-case font-bold text-xl font-mono md:text-3xl md:mt-2 text-orange-800'>House Hunter</Link></li>
                            <li><Link to={"/dashboard/listedHouses"}>Listed Houses</Link></li>
                            <li><Link to={"/dashboard/manageListedHouses"}>Manage Listed Houses</Link></li>
                            <li><Link to={"/dashboard/bookedHouses"}>Booked Houses</Link></li>
                            <li><Link to={"/dashboard/manageBookedHouses"}>Manage Booked Houses</Link></li>
                            <li><Link to={"/login"}>Login</Link></li>


                            {/* {
                            isUser && <li><Link to={'/dashboard/myorders'}>My Orders</Link></li>
                        }

                        {
                            isSeller && <>
                                <li><Link to={'/dashboard/addproduct'}>Add A Product</Link></li>
                                <li><Link to={'/dashboard/myproducts'}>My Products</Link></li>
                                <li><Link to={'/dashboard/mybuyers'}>My Buyers</Link></li>
                            </>
                        }

                        {
                            isAdmin &&
                            <>
                                <li><Link to={'/dashboard/allsellers'}>All Sellers</Link></li>
                                <li><Link to={'/dashboard/allbuyers'}>All Buyers</Link></li>
                                <li><Link to={'/dashboard/reported'}>Reported Items</Link></li>
                            </>
                        } */}


                        </ul>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default DashboardLayout;