import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [dataa, setDataa] = useState([])
    const [dataaa, setDataaa] = useState([])
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    let navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/dashboard';

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:5000/signup", requestOptions)
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                setDataaa(result);
            })
            .catch(error => console.log('error', error));

    }, [])

    let correctEmails, correctAccount;

    const signUpInfo = (event) => {
        event.preventDefault();
        const form = event.target;
        const account = form.account.value;
        const fname = form.fname.value;
        const email = form.email.value;
        const password = form.password.value;
        const signUpInfo = {
            account,
            fname,
            email,
            password
        }
        form.reset();


        for (let i = 0; i < dataaa.length; i++) {

            if (dataaa[i].email === email) {
                correctEmails = dataaa[i].email;
            }
            if (dataaa[i].account === account) {
                correctAccount = dataaa[i].account;
            }

        }

        console.log(correctAccount, account)


        if (correctEmails !== email) {
            fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(signUpInfo),
            })
                .then(res => res.json())
                .then(data => {
                    setDataa(data)
                    if (data.acknowledged) {
                        navigate(from, { replace: true });
                        toast.success('Account created successfully!');
                        loading(true)
                    }
                    else {
                        alert(data.message);
                    }
                })
                .catch(error => console.error(error));
        }

        else if (correctEmails === email) {
            toast.error('Account already created');
        }

        else if (correctAccount === account) {
            toast.error('Account already created');
        }





    }



    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            <div className="hero mt-10 md:mt-0 md:min-h-screen ">
                <div className="hero-content">
                    <div className="card flex-shrink-0 md:w-96 w-80 border-2 bg-base-100 shadow-xl">

                        <div className="card-body">
                            <h1 className='text-orange-300 font-bold text-3xl text-center mb-5'>Create an account!</h1>
                            <form onSubmit={signUpInfo}>
                                <label className="label">
                                    <span className="label-text text-orange-400 ">Create your account as a, </span>
                                </label>

                                {/* Radio buttons */}

                                <div className='grid grid-cols-2 gap-2'>
                                    <button className='flex border border-gray-300 rounded py-2 px-3'><input required type="radio" name="buyer" value="renter" {...register("account")} className="radio radio-neutral mr-4" />
                                        Renter
                                    </button>
                                    <button className='flex border border-gray-300 rounded py-2 px-3'><input required type="radio" name="seller" value="owner" {...register("account")} className="radio radio-neutral mr-4" />
                                        Owner</button>
                                </div>


                                <div className="form-control w-full mt-2">
                                    <label className="label">
                                        <span className="label-text text-lg">Full Name</span>
                                    </label>
                                    <input type="text" {...register("fname", {

                                    })} required className="input input-bordered w-full" />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <input required name='email' type="email" {...register("email", {
                                        required: "Email Address is required",
                                    })} className="input input-bordered w-full" />
                                    {errors.email && <p role="alert" className='text-error'>{errors.email?.message}</p>}
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>
                                    <input required name='password' type="password" {...register("password", {
                                        required: "Email Address is required",
                                    })} className='input input-bordered w-full' />
                                    {errors.password && <p role="alert" className='text-error'>{errors.password?.message}</p>}
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