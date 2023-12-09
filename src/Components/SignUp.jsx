import React, { useContext, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FaEnvelope, FaLock, FaUser, FaImage } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import axios from 'axios';

const SignUp = () => {
    const { handleSubmit, control, errors } = useForm();
    const { signupUser,signingoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [registererror,setRegistererror] = useState('')

    const onSubmit = (data) => {
        if (data.password.length < 6) {
            setRegistererror('Password should be at least 6 characters ');
            return
            
        }   
        else if(!/[A-Z]/.test(data.password)){
            setRegistererror("Password must contain at least one uppercase letter.")
            return

        }else if(!/[!@#$%^&*(),.?":{}|<>]/.test(data.password)){
            setRegistererror('Password must contain at least one special character')
            return

        }
        signupUser(data.email, data.password)
            .then((result) => {
                  updateProfile(result.user, {
                    photoURL: data.image,
                    displayName: data.name,
                }); 
                toast("Create User Successful");
                navigate(location?.state ? location.state : '/');  
                
                // user information send database
                const userInfo = {
                    name : data.name,
                    image : data.image,
                    email : data.email,
                    role : 'student',
                }

                axios.post('http://localhost:5000/users',userInfo)
                .then(result=>{  
                    console.log(result.data);                     
                                       
                })
            })
            .catch((error) => {
                 toast(error.message)
                setRegistererror(error.message)

            });
    };
    const googlelogin = () => {
        signingoogle()
            .then((result) => {
                const userInfo = {
                    name :  result.user?.displayName ,
                    image : result.user?.photoURL ,
                    email : result.user?.email ,
                }
                axios.post('http://localhost:5000/users',userInfo)
                .then(result=>{  
                    toast("Create User Successful");
                    navigate(location?.state ? location.state : '/');  
                    console.log(result.data);                     
                                       
                })
                console.log(result.user)
            })
            .catch((error) => {
                console.error(error);

            });
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md my-10 mx-auto p-6 border rounded-lg shadow-md">
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold">Sign Up</h2>
        
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    <FaUser className="inline-block mr-2" />
                    Name
                </label>
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: 'Name is required' }}
                    render={({ field }) => <input className="w-full p-2 border rounded " {...field} />}
                />
                {/* {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>} */}
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                    <FaImage className="inline-block mr-2" />
                    Image URL
                </label>
                <Controller
                    name="image"
                    control={control}
                    rules={{ required: 'Image URL is required' }}
                    render={({ field }) => <input className="w-full p-2 border rounded" {...field} />}
                />
                {/* {errors.image && <p className="text-red-500 text-xs italic">{errors.image.message}</p>} */}
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
                Sign Up
            </button>
            <div className="divider"><i>or</i></div>

            <button className="btn btn-circle block text-center mx-auto">
                <FcGoogle onClick={googlelogin} className=' text-3xl mx-auto'></FcGoogle>
            </button>
            <p>Already have an account? <Link to='/signin' className='underline text-blue-600'>Sign in</Link></p>
            {
                registererror && <p className="text-red-500 mt-5 text-sm text-center">{registererror}</p>
            }
        </form>
    );
};

export default SignUp;