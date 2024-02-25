import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const TeacherRequest = () => {
  const [teacherRequests, setTeacherRequests] = useState([]);
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    axios.get('http://localhost:5000/tech')
      .then(res => {
        setTeacherRequests(res.data);
      })
      .catch(error => {
        console.error('Error fetching teacher requests:', error);
      });
  }, []);

  const handleApprove = async (id) => {
    console.log(id);
 
  };
  
  

  const handleReject = (id) => {
    // Implement logic to reject the teacher request with the given id
    console.log(`Reject teacher with ID: ${id}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Category</th>
            <th>Name</th>
            <th>Experience</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teacherRequests.map((teacher) => (
            <tr key={teacher._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={teacher.Images} alt= '' />
                    </div>
                  </div>
                </div>
              </td>
              <td>{teacher.category}</td>
              <td>{teacher.name}</td>          
              <td>{teacher.experience}</td>
              <td>{teacher.title}</td>
              <td>{teacher.status}</td>
              <td>
                
                    <button
                      className="btn btn-success btn-xs"
                      onClick={() => handleApprove(teacher._id)}
                    >
                      Approve
                    </button>
                    </td>
                    
                    <td>

                    <button
                      className="btn btn-danger btn-xs ml-2"
                      onClick={() => handleReject(teacher._id)}
                    >
                      Rejects
                    </button>
                    </td>
                  
              </tr>
              
              
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherRequest;
