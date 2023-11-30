import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import Swal from 'sweetalert2';

const imgbb_hosting = import.meta.env.VITE_IMGBB_HOSTING;
const imgbb_hostingapi = `https://api.imgbb.com/1/upload?key=${imgbb_hosting}`;

const UpdateClass = () => {
    const axiosSecure = useAxiosSecure()
    const {email,name,description,image,price,title,_id} = useLoaderData();
    const navigate = useNavigate()
     
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        // Handle form submission here
        const imageFile = {image : data.image[0]}
        const res = await axiosSecure.post(imgbb_hostingapi,imageFile,{
            headers: {
                "content-type": "multipart/form-data",
              }
              
            });
            if (res.data.success) {
                const classUpdate = {
                    title: data.title,
                    name: data.name,
                    email: data.email,
                    price: data.price,
                    description: data.description,
                    image: res.data.data.display_url
                }
                
                const Updateresponse = await axiosSecure.patch(`/addclass/${_id}`, classUpdate)
                if (Updateresponse.data.modifiedCount > 0) {
                    console.log(Updateresponse.data);
                    Swal.fire('Class Update successfully');
                    navigate('/dashboard/myclass')
                    
                }
                                 
                
            }
      };
    return (
        <form className="max-w-lg shadow-md p-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Title:</label>
          <input
          defaultValue={title}
            {...register('title', { required: 'This field is required' })}
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          <span className='text-red-500'>{errors.title?.message}</span>
        </div>
  
        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Name:</label>
          <input
            defaultValue={name}
            readOnly
            {...register('name', { required: 'This field is required' })}
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          <span className='text-red-500'>{errors.name?.message}</span>
        </div>
  
        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email:</label>
          <input
            defaultValue={email}
            readOnly
            {...register('email', { required: 'This field is required' })}
            type="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          <span className='text-red-500'>{errors.email?.message}</span>
        </div>
  
        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Price:</label>
          <input
            defaultValue={price}
            {...register('price', { required: 'This field is required' })}
            type="number"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
          <span className='text-red-500'>{errors.price?.message}</span>
        </div>
  
        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Description:</label>
          <textarea
          defaultValue={description}
            {...register('description', { required: 'This field is required' })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          ></textarea>
          <span className='text-red-500'>{errors.description?.message}</span>
        </div>
  
        {/* Image */}
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
         Update Classs
        </button>
      </form>
    );
};

export default UpdateClass;