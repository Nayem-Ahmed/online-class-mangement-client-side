import React, { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const User = () => {
    // use transtack data fetch
    const axiosSecure = useAxiosSecure();
    const {  data: users = [] , refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;

        }
          
      })
   // useEffect data fetch

    // useEffect(() => {

    //     axios.get('http://localhost:5000/users')
    //         .then(response => {
    //             setUsers(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching users:', error);
    //         });
    // }, []); 

    
    
    const handleMakeAdmin = async (id) => {
        axiosSecure.patch(`/users/admin/${id}`)
        .then(res=>{
            if (res.data.modifiedCount > 0) {
                refetch()
                Swal.fire("Make a Admin");
                
            }
        })

    };
    

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>User name</th>
                        <th>User Email</th>
                        <th>User Image</th>
                        <th>Make admin</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <img className='w-24' src={user.image} alt={`Avatar of ${user.name}`} />
                            </td>
                            <td>
                               {user.role === 'admin'? "Admin" : <button
                                    className="btn btn-success btn-xs"
                                    onClick={() => handleMakeAdmin(user._id)}
                                >
                                    Make Admin
                                </button>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default User;



