import axios from 'axios';
import React, { useEffect, useState } from 'react';



const Myclass = () => {
    const [teacherClasses, setTeacherClasses] = useState([]);

    // Function to handle class deletion
    const handleDelete = (classId) => {
        // Implement logic to delete the class with the given ID
        // This might involve a confirmation dialog and an API call to delete the class
    };

    // Function to handle class update
    const handleUpdate = (classId) => {
        // Implement logic to update the class with the given ID
        // This might involve showing a modal with a form to update class details
    };

    // Function to handle redirection to class details page
    const handleSeeDetails = (classId) => {
        // Implement logic to redirect to the class details page with the given ID
        // This might involve using React Router to navigate to the correct route
    };


    // Fetch teacher's classes from the server when the component mounts
    useEffect(()=>{
        axios.get('http://localhost:5000/addclass')
        .then(response => {
            // Handle the data returned from the API
            console.log('Data:', response.data);
            setTeacherClasses(response.data);
          })
          .catch(error => {
            // Handle errors
            console.error('Error:', error);
          });
    
    }),[]
 
    return (
        <div>
            <h1>My Classes</h1>
          <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-5'>
          {teacherClasses.map((classItem) => (
                <div key={classItem.id} className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={classItem.image} alt={classItem.title} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{classItem.title}</h2>
                        <p>Name: {classItem.name}</p>
                        <p>Email: {classItem.email}</p>
                        <p>Price: ${classItem.price}</p>
                        <p>Description: {classItem.description}</p>
                        <p>Status: {classItem.status}</p>
                        <div className="card-actions  ">
                            <button className='btn btn-sm bg-blue-500 text-white' onClick={() => handleUpdate(classItem.id)}>Update</button>
                            <button className='btn btn-sm bg-blue-500 text-white' onClick={() => handleDelete(classItem.id)}>Delete</button>
                            <button className='btn btn-sm bg-blue-500 text-white' onClick={() => handleSeeDetails(classItem.id)} disabled={classItem.status !== 'approved'}>
                                See Details 
                            </button>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </div>
    );

};

export default Myclass;