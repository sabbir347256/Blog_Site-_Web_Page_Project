import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthProvider } from "../../../Authprovider/AuthContext";
import { LuUser } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";

const SameCategoryBlog = ({ sameCategoryBlog }) => {
    const { user } = useContext(AuthProvider);
    const { blogTitle, photoUrl, category, date, _id } = sameCategoryBlog;
    return (
        <NavLink to={`/viewdetails/${_id}`}>
            <div className="bg-base-100 h-[32rem] w-full shadow-2xl bangla">
                <figure className="border-b-2 border-b-gray-500">
                    <img className="h-72 object-cover w-full"
                        src={photoUrl}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h4 className="text-green-500">{category}</h4>
                    <h2 className="card-title hover:text-blue-700">
                        {blogTitle}
                    </h2>
                    <div className="flex gap-3 items-center justify-start">
                        <div className="flex items-center  gap-1 text-gray-600">
                            <LuUser></LuUser>
                            <h4>{user?.displayName}</h4>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                            <IoMdTime></IoMdTime>
                            <h4>{date}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default SameCategoryBlog;