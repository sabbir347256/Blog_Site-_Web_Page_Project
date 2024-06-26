import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col md:flex-row">
                <div className="  md:min-h-screen bg-orange-400 ">
                    <ul className="menu w-screen md:w-auto md:p-4 ">
                        <li className="bg-orange-100 rounded-lg font-medium text-base "><NavLink className='text-black' to='adminprofile'>Admin Profile</NavLink></li>
                        <li className="bg-orange-100 rounded-lg my-2 font-medium  "><NavLink className='text-black' to='manageuser'>Manage Users</NavLink></li>
                        <li className="bg-orange-100 rounded-lg font-medium  "><NavLink className='text-black' to='addpost'>Add Post</NavLink></li>
                        <hr className="bg-orange-100 rounded-lg my-10" />
                        <li className="bg-orange-100 rounded-lg font-medium text-base"><NavLink className='text-black' to='/'>Home</NavLink></li>
                    </ul>
                </div>
                <div className="flex-1 bg-gray-200">
                    <Outlet></Outlet>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Dashboard;