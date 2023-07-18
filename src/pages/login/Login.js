import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero mt-10 md:mt-0 md:min-h-screen ">
                <div className="hero-content bg-oragne-50">
                    <div className="card flex-shrink-0 w-full max-w-sm border-2 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1 className='text-orange-300 font-bold text-3xl text-center'>Login!</h1>
                            <form >
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <input type="email" className="input input-bordered w-full" />

                                </div>

                                <div className="form-control w-full mt-5">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>
                                    <input type="password" className='input input-bordered w-full' />
                                </div>

                                <input className='btn bg-orange-400 hover:bg-orange-500 text-white w-full mt-10' type="submit" />

                                <label className="label">
                                    <span className="label-text ">New to House Hunter? <Link to={'/signup'} className='text-orange-600 hover:text-orange-700 font-bold'>Create New Account</Link></span>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;