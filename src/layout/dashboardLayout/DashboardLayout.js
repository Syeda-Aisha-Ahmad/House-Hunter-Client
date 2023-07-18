import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../shared/navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            {/* <DashNav></DashNav> */}
            {/* <Navbar></Navbar> */}
            <div className="drawer drawer-mobile  relative">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content md:ml-80">
                    <Outlet></Outlet>
                </div>
                <div className="h-screen fixed">
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
    );
};

export default DashboardLayout;