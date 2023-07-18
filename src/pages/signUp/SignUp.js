import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>

            <div className="hero mt-10 md:mt-0 md:min-h-screen ">
                <div className="hero-content">
                    <div className="card flex-shrink-0 md:w-96 w-80 border-2 bg-base-100 shadow-xl">

                        <div className="card-body">
                            <h1 className='text-orange-300 font-bold text-3xl text-center mb-5'>Create an account!</h1>
                            <form>
                                <label className="label">
                                    <span className="label-text text-orange-400 ">Create your account as a, </span>
                                </label>

                                {/* Radio buttons */}

                                <div className='grid grid-cols-2 gap-2'>
                                    <button className='flex border border-gray-300 rounded py-2 px-3'><input type="radio" name="buyer" value="buyer" className="radio radio-neutral mr-4" checked />
                                        Renter
                                    </button>
                                    <button className='flex border border-gray-300 rounded py-2 px-3'><input type="radio" name="seller" value="seller" className="radio mr-4" />
                                        Owner</button>
                                </div>


                                <div className="form-control w-full mt-2">
                                    <label className="label">
                                        <span className="label-text text-lg">Full Name</span>
                                    </label>
                                    <input type="text" className="input input-bordered w-full" />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <input type="email" className="input input-bordered w-full" />

                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>
                                    <input type="password" className="input input-bordered w-full" />
                                </div>

                                <input className='btn bg-orange-400 hover:bg-orange-500 text-white w-full mt-5' type="submit" />

                                <label className="label">
                                    <p>Already have an account? <Link to={'/login'} className='text-orange-600 hover:text-orange-700 font-bold'>Login</Link></p>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;