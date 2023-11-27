import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const imgbb_hosting = import.meta.env.VITE_IMGBB_HOSTING;
const imgbb_hostingapi = `https://api.imgbb.com/1/upload?key=${imgbb_hosting}`;

const AddClass = () => {
    const navigate = useNavigate();
    const { register, handleSubmit , formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {

            // const imgUploadResponse = await axios.post(imgbb_hostingapi, formDataObj, {
            //     headers: {
            //         'content-type': 'multipart/form-data',
            //     },
            // });



            const response = await axios.post('http://localhost:5000/addclass', data);
            if (response.data) {
                Swal.fire('Class added successfully');
                navigate('/dashboard/myclass');
            } else {
                console.error('Class addition failed');
            }
        } catch (error) {
            console.error('Error adding class:', error);
        }
    };

    return (
        <div>
            <h1 className='text-center'>Add Class</h1>
            <form className="max-w-lg shadow-md p-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Title:</label>
                    <input
                        {...register('title', { required: 'This field is required' })}
                        type="text"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                    <span className='text-red-500'>{errors.title?.message}</span>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Name:</label>
                    <input
                        {...register('name', { required: 'This field is required' })}
                        type="text"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                    <span className='text-red-500'>{errors.name?.message}</span>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Email:</label>
                    <input
                        {...register('email', { required: 'This field is required' })}
                        type="email"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                    <span className='text-red-500'>{errors.email?.message}</span>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Price:</label>
                    <input
                        {...register('price', { required: 'This field is required' })}
                        type="number"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                    <span className='text-red-500'>{errors.price?.message}</span>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Description:</label>
                    <textarea
                        {...register('description', { required: 'This field is required' })}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    ></textarea>
                    <span className='text-red-500'>{errors.description?.message}</span>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Image:</label>
                    <input
                        {...register('image', { required: 'This field is required' })}
                        type="file"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        accept="image/*"
                    />
                    <span className='text-red-500'>{errors.image?.message}</span>
                </div>

                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                    Add class
                </button>
            </form>

        </div>
    );
};

export default AddClass;

