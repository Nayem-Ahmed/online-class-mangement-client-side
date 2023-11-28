import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
    const [users, setUsers] = useState([]);
    console.log(users);

    useEffect(() => {

        axios.get('http://localhost:5000/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []); 

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
                                <button
                                    className="btn btn-success btn-xs"
                                    onClick={() => handleMakeAdmin(user._id)}
                                >
                                    Make Admin
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default User;
