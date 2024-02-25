import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const Tech = () => {
  const { user } = useContext(AuthContext);
  const [userss, setUserss] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${user?.email}`)
      .then(result => {
        console.log(result.data.role);
        setUserss(result.data.role);

      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

  }, [])
  const [formData, setFormData] = useState({
    name: '',
    experience: 'beginner',
    title: '',
    category: '',
    Images: user?.photoURL,
    status: 'pending',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    axios.post('http://localhost:5000/tech', formData)
      .then((response) => {
        if (response.data) {
          Swal.fire("Submission successful!");
        } else {
          console.error('Submission failed');
        }
      })
      .catch((error) => {
        console.error('Error during submission:', error);
      });

    // Reset the form after submission
    setFormData({
      name: '',
      experience: 'beginner',
      title: '',
      category: '',

    });
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="md:text-3xl font-semibold mb-6 text-center">Teach on BISY LMS</h1>
      <form className="max-w-lg shadow-md p-4 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full shadow-md bg-gray-50 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Experience:</label>
          <select
            required
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="mt-1 p-2 w-full shadow-md bg-gray-50  rounded-md"
          >
            <option value="beginner">Beginner</option>
            <option value="experienced">Experienced</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="expert">Expert</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full shadow-md bg-gray-50  rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 p-2 w-full shadow-md bg-gray-50  rounded-md"
          >
            <option value="webDevelopment">Web Development</option>
            <option value="digitalMarketing">Digital Marketing</option>
            <option value="graphics">Graphics Design</option>
            <option value="dataScience">Data Science</option>
            <option value="mobileAppDevelopment">Mobile App Development</option>
            <option value="uiUxDesign">UI/UX Design</option>
          </select>
        </div>

        {<button
          type="submit"
          className="bg-green-500 text-white px-4 py-3 rounded-md hover:bg-green-600"
        >
          Submit for Review
        </button>}
      </form>
    </div>
  );
};

export default Tech;
