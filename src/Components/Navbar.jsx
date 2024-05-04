import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Headroom from 'react-headroom';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const link = <>
        <li><NavLink className={'font-semibold'} to='/'>Home</NavLink></li>
        <li><NavLink className={'font-semibold'} to='/classes'>All Classes</NavLink></li>
        <li><NavLink className={'font-semibold'} to='/tech'>Teach On BISY</NavLink></li>
        {user?.email ?
            ""
            :
            <li><NavLink className={'font-semibold'} to='/signin'>Sign In</NavLink></li>
        }

    </>
    return (
        <Headroom className='mb-0'>
        <div className="navbar bg-blue-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>

                <Link to='/'> <img src={logo} alt="" /></Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user?.email ?
                                <div className='flex items-center gap-2'>
                                    <img className='rounded-full w-8' src={user?.photoURL} alt="" />
                                </div>
                                :
                                <div className='flex items-center gap-2'>
                                <img className='rounded-full w-8' src= 'https://i.ibb.co/CQLSNTH/istockphoto-1337144146-612x612.jpg' alt="" />
                            </div>
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52">

                        {user?.email ? <li className='mb-3 font-semibold'>{user?.displayName}</li> : null}
                        
                       <Link className='mb-3' to='/dashboard'><li className='font-semibold'>Dashboard</li></Link>

                        {user?.email ?<button onClick={logOut}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            type="submit"
                        >
                            Sign Out
                        </button>
                         : 
                        <button><li><Link className={'font-semibold'} to='/signin'>Sign In</Link></li></button> 
                        }

                    </ul>
                </div>
            </div>
        </div>
 </Headroom>
    );
};

export default Navbar;