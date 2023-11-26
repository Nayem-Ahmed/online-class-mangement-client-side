// AddClass.jsx

import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
 

const AddClass = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({

        title: '',
        name: '',
        email: '',
        price: '',
        description: '',
        image: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/addclass', formData);

            if (response.data) {
                Swal.fire('Class added successfully');
                navigate('/dashboard/myclass')
                
            } else {
                // Show error message
                console.error('Class addition failed');
            }
        } catch (error) {
            console.error('Error adding class:', error);
        }
          console.log(formData);
    };
    const handleImageChange = ()=>{

    }

    return (
        <div>
            <h1 className='text-center'>Add Class</h1>
            <form className="max-w-lg shadow-md p-4 mx-auto">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        required
                        
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Image:</label>
                    <input
                        type="file"  
                        name="image"
                        onChange={handleImageChange}  
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        accept="image/*"
                    />
                </div>

                <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                    Add class 
                </button>
            </form>

        </div>
    );
};

export default AddClass;
