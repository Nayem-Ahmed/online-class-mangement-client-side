import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllClass = () => {
    const [allclass, setAllclass] = useState([]);
    // Data Fetch  
    useEffect(() => {
        axios.get('http://localhost:5000/addclass')
            .then(response => {
                console.log('Data:', response.data);
                setAllclass(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }, []);
    return (
        <div>
        <div className='grid md:grid-cols-3 lg:grid-cols-4 p-4 gap-5'>
            {allclass.map((classItem) => (
                <div key={classItem._id} className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={classItem.image} alt={classItem.title} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{classItem.title}</h2>
                        <p>Name: {classItem.name}</p>
                        <p>Email: {classItem.email}</p>
                        <p>Price: ${classItem.price}</p>
                        <p>Description: {classItem.description}</p>
                        <p>Total enrolment:  </p>
                        <div className="card-actions  ">
                            <button className='btn btn-sm bg-blue-500 text-white' onClick={() => handleUpdate(classItem._id)}>Enroll</button>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default AllClass;