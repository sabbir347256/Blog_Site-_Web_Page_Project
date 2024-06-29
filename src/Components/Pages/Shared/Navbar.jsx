import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../image/h-logo-white-background_136558-37765.jpg'
import { AuthProvider } from '../../Authprovider/AuthContext';
import Swal from 'sweetalert2';
const Navbar = () => {
    const { user, logOut } = useContext(AuthProvider);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const handleSignOut = () => {
        logOut()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Log Out Successfully",
            showConfirmButton: false,
            timer: 1500
        })
        navigate(location?.state ? location?.state : '/')
    }
    const navlinks = <>
        <NavLink to='/'><li href="#" className="block px-4 border-b border-b-green-600 py-1 text-black font-semibold hover:bg-gray-800 duration-500 rounded-lg hover:text-white">Home</li></NavLink>
        <NavLink to='/about'><li href="#" className="block px-4 border-b border-b-green-600 py-1 text-black font-semibold hover:bg-gray-800 duration-500 rounded-lg hover:text-white">About</li></NavLink>
        <NavLink to='/contact'><li href="#" className="block px-4 border-b border-b-green-600 py-1 text-black font-semibold hover:bg-gray-800 duration-500 rounded-lg hover:text-white">Contact Us</li></NavLink>
        {
            !user && <NavLink to='/signin'><li href="#" className="block px-4 border-b border-b-green-600 py-1 text-black font-semibold hover:bg-gray-800 duration-500 rounded-lg hover:text-white">Sign in</li></NavLink>
        }
        {
            user && <NavLink to='/' onClick={handleSignOut}><li href="#" className="block px-4 border-b border-b-green-600 py-1 text-black font-semibold hover:bg-gray-800 duration-500 rounded-lg hover:text-white">Log Out</li></NavLink>
        }
    </>

    const dashboard = <>
        <NavLink to='/dashboard'><li className='bg-gray-800 rounded-lg text-white'><a>Dashboard</a></li></NavLink>
    </>




    return (
        <div className="App ">
            <nav className="p-1 shadow-2xl">
                <div className="container mx-auto flex justify-between items-center">
                    <div className='flex items-center'>
                        <img className='h-8 w-8 mr-2 rounded-full' src={logo} alt="" />
                        <div className="text-black border-green-600  font-bold text-2xl roboto">HimuBlog</div>
                    </div>
                    <div className="hidden md:flex space-x-4 items-center">
                        {navlinks}
                        {
                            user?.email === "himulabs@gmail.com" ? <div className="dropdown dropdown-end z-10">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-gray-400 rounded-box w-52">
                                    {dashboard}
                                </ul>
                            </div> : ''
                        }
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                {
                    isOpen && (
                        <div className="md:hidden h-screen animate-slide-in-left mt-3">
                            {navlinks}
                            {
                                user?.email === 'himulabs@gmail.com' && <div className="dropdown  z-10">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        {dashboard}
                                    </ul>
                                </div>
                            }

                        </div>
                    )
                }
            </nav >
        </div >
    );
};

export default Navbar;