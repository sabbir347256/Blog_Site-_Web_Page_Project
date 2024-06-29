import { useQuery } from "@tanstack/react-query";
import SingleBlogCard from "./SingleBlogCard";
import { useContext } from "react";
import { AuthProvider } from "../../../Authprovider/AuthContext";

const AllBlogPost = () => {
    const { loading } = useContext(AuthProvider);

    const { data: blogpost, isLoading } = useQuery({
        queryKey: ['GET'],
        queryFn: () => {
            return fetch('https://takbir-server-site.vercel.app/allBlog')
                .then(res => res.json())
                .then(data => {
                    return data;
                })
        }
    });
    if (isLoading) {
        <p className="text-red-600 text-center"><span className="loading loading-infinity loading-lg"></span></p>;
    }
    if (loading) {
        <p className="text-red-600 text-center"><span className="loading loading-infinity loading-lg"></span></p>;
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 blogBg">
            {
                blogpost?.map((blogData, index) => <SingleBlogCard key={index} blogData={blogData}></SingleBlogCard>)
            }
        </div>
    );
};

export default AllBlogPost;