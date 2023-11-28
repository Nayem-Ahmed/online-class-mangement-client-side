import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MdCastForEducation ,MdSpaceDashboard} from "react-icons/md";
import { GoHome } from "react-icons/go";

 
//ata dashboard sobar jonno


const StudentDashboard = () => {
    return (
        <div className="max-w-screen-xl  mx-auto flex">
           <div className='md:w-64 bg-blue-600 min-h-full text-white p-6'>
           <MdCastForEducation className='md:text-6xl text-center mx-auto text-white'></MdCastForEducation>
           <div className='flex items-center gap-4 mt-5 '><MdSpaceDashboard className='md:text-2xl'></MdSpaceDashboard>  <p className='md:font-semibold'> Dashboard</p></div>
           <div className="divider"></div>

           <ul>
           <li className='md:mb-6'><NavLink to='/dashboard/'>My enroll class</NavLink></li>
           <li className='md:mb-6'><NavLink to='/dashboard/teacherrequest'>Teacher Request</NavLink></li>
           <li className='md:mb-6'><NavLink to='/dashboard/user'>Users</NavLink></li>
           <li className='md:mb-6'><NavLink to='/dashboard/'>All classes</NavLink></li>
           <li className='md:mb-6'><NavLink to='/dashboard/addclass'>Add class</NavLink></li>
           <li className='md:mb-6'><NavLink to='/dashboard/myclass'>My class</NavLink></li>
           <li  className='md:mb-6'><NavLink to='/dashboard/'>Profile</NavLink></li>
           <li ><NavLink to='/' className={'flex items-center gap-2 text-xl'}><GoHome></GoHome>Go Home</NavLink></li>

           </ul>
        

           </div>

           <div className='flex-1 p-4'>
            
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default StudentDashboard;