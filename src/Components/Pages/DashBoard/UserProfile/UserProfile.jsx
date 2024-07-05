import { useContext } from "react";
import { AuthProvider } from "../../../Authprovider/AuthContext";
import adminBg from '../../../../image/adminBg.jpeg'
import { Helmet } from "react-helmet";

const UserProfile = () => {
    const { user } = useContext(AuthProvider);
    return (
        <div>
            <Helmet>
                <title>Himu Labs || Dashboard/AdminProfile</title>
            </Helmet>
            <div className='flex justify-center my-20'>
                <div className='bg-gray-100 shadow-lg rounded-2xl w-3/5 '>
                    <img
                        alt='profile'
                        src={adminBg}
                        className='w-full mb-4 rounded-t-lg h-36 object-cover'
                    />
                    <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                        <a href='#' className='relative block'>
                            <img
                                alt='profile'
                                src={user?.photoURL}
                                className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                            />
                        </a>
                        <div className='w-full p-2 mt-4 rounded-lg'>
                            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                                <p className='flex flex-col'>
                                    Name
                                    <span className='font-bold text-black '>
                                        {user.displayName}
                                    </span>
                                </p>
                                <p className='flex flex-col'>
                                    Email
                                    <span className='font-bold text-black '>{user.email}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;