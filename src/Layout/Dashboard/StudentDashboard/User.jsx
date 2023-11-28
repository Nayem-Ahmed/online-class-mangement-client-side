import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const User = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
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
            {/* {user.map((teacher) => (
              <tr key={user._id}>
                <td>
                  <div className="flex items-center gap-3">
                    </div>
                    <div>
                  </div>
                </td>
                <td>{}</td>
                <td>{}</td>          
                <td>{}</td>
                <td>
                  
                      <button
                        className="btn btn-success btn-xs"
                        onClick={() => handleApprove(teacher._id)}
                      >
                        Make Admin
                      </button>
                      </td>

                </tr>
                
                
                ))} */}
                {
                    user?.displayName
                    
                }
                 
          </tbody>
        </table>
      </div>
    );
};

export default User;