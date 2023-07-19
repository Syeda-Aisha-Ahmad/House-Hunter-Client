import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [dataa, setDataa] = useState([])
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);
    const [pass, setPass] = useState(false);

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
                setDataa(result);
            })
            .catch(error => console.log('error', error));

    }, []);

    const loginInfo = (event, i) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        let correctEmail, correctPass;


        for (let i = 0; i < dataa.length; i++) {

            if (dataa[i].email === email) {
                correctEmail = dataa[i].email;
            }
            if (dataa[i].password === password) {
                correctPass = dataa[i].password;

            }

        }

        console.log(correctEmail, correctPass)
        if (correctEmail === email && correctPass === password) {
            navigate(from, { replace: true });
        }
        else if (correctEmail !== email) {
            alert("Your email is incorrect");
        }
        else if (correctPass !== password) {
            alert("Your password is incorrect");
        }




        // if (user === false && pass === true) {
        //     // setUser(false);
        //     alert("Your email is incorrect");
        // }

        // if (pass === false && email === true) {
        //     // setPass(false)
        //     alert("Your Pass is incorrect");
        // }
        // if (user === true && pass === true) {
        //     alert("You are good to go....");
        //     navigate(from, { replace: true });
        // }

    }

    console.log(dataa);


    return (
        <div>
            <div className="hero mt-10 md:mt-0 md:min-h-screen ">
                <div className="hero-content bg-oragne-50">
                    <div className="card flex-shrink-0 w-full max-w-sm border-2 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1 className='text-orange-300 font-bold text-3xl text-center'>Login!</h1>
                            <form onSubmit={loginInfo}>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <input name='email' type="email" {...register("email", {
                                        required: "Email Address is required",
                                    })} className="input input-bordered w-full" />

                                </div>

                                <div className="form-control w-full mt-5">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>
                                    <input name='password' type="password" {...register("password", {
                                        required: "Email Address is required",
                                    })} className='input input-bordered w-full' />
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