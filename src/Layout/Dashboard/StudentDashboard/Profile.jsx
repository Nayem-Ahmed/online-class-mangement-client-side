import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div className="card w-96 mx-auto bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img  src={user.photoURL} alt="" className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{user.displayName}</h2>
                <p>{user.email}</p>
                <p>{user.phoneNumber}</p>

            </div>
        </div>
    );
};

export default Profile;