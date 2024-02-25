import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const Myclass = () => {
    const [teacherClasses, setTeacherClasses] = useState([]);

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axios.delete(`http://localhost:5000/addclass/${id}`)
                console.log(res);
                if (res.data.deletedCount > 0) {
                    setTeacherClasses((prevClasses) => prevClasses.filter(classItem => classItem._id !== id));
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });

                }

            }
        });
        console.log(id);

    };

    const handleUpdate = (id) => {
         
        console.log(id);
    };

    const handleSeeDetails = (id) => {
    };


    // Data Fetch  
    useEffect(() => {
        axios.get('http://localhost:5000/addclass')
            .then(response => {
                console.log('Data:', response.data);
                setTeacherClasses(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }, []);

    return (
        <div>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-5'>
                {teacherClasses?.map((classItem) => (
                    <div key={classItem._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={classItem.image} alt={classItem.title} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{classItem.title}</h2>
                            <p>Name: {classItem.name}</p>
                            <p>Email: {classItem.email}</p>
                            <p>Price: ${classItem.price}</p>
                            <p>Description: {classItem.description}</p>
                            <p className='font-semibold'>Status:{classItem.status} pending</p>
                            <div className="card-actions">
                                <Link to={`/dashboard/update/${classItem._id}`}><button className='btn btn-sm bg-blue-500 text-white' onClick={() => handleUpdate(classItem._id)}>Update</button></Link>
                                <button className='btn btn-sm bg-blue-500 text-white' onClick={() => handleDelete(classItem._id)}>Delete</button>
                                <button className='btn btn-sm bg-blue-500 text-white' onClick={() => handleSeeDetails(classItem._id)} disabled={classItem.status !== 'approved'}>
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