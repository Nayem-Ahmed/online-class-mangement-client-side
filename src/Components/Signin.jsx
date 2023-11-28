import React, { useContext, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';


const Signin = () => {
    const {signinUser,signingoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [loginerror, setLoginerror] = useState("");

    const { handleSubmit, control} = useForm();

    const onSubmit = (data) => {
        signinUser(data.email, data.password) 
        .then((result) => {
            console.log(result.user);
            toast("Login Successful");
            navigate(location?.state ? location.state : '/');
 
          })
          .catch((error) => {
            console.error(error);
            if (setLoginerror) {
                toast('Incorrect password');
              }
 
          });          
         
    };
    const googlelogin = () => {
        signingoogle()
            .then((result) => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                console.error(error);

            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md my-10 mx-auto p-6 border rounded-lg shadow-md">
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold">Login</h2>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    <FaEnvelope className="inline-block mr-2" />
                    Email
                </label>
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: 'Email is required' }}
                    render={({ field }) => <input className="w-full p-2 border rounded" {...field} />}
                />
                {/* {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>} */}
             </div>


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    <FaLock className="inline-block mr-2" />
                    Password
                </label>
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: 'Password is required' }}
                    render={({ field }) => (
                        <input className="w-full p-2 border rounded" type="password" {...field} />
                    )}
                />
                {/* {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>} */}
            </div>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                type="submit"
            >
                Login
            </button>
            <div className="divider"><i>or</i></div>

            <button className="btn btn-circle block text-center mx-auto">             
            <FcGoogle onClick={googlelogin} className=' text-3xl mx-auto'></FcGoogle>
            </button>
            <p>Don't have an account? <Link to='/signup' className='underline text-blue-600'>Sign Up</Link></p>


        </form>
    );
};

export default Signin;

