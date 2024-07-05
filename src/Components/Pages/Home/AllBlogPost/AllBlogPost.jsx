import { useQuery } from "@tanstack/react-query";
import SingleBlogCard from "./SingleBlogCard";

const AllBlogPost = () => {
    const { data: blogpost, isLoading } = useQuery({
        queryKey: ['GET'],
        queryFn: () => {
            return fetch('https://blog-web-server-site.vercel.app/allBlog')
                .then(res => res.json())
                .then(data => {
                    return data;
                })
        }
    });
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 blogBg ">
            {
                blogpost?.map((blogData, index) => <SingleBlogCard key={index} blogData={blogData}></SingleBlogCard>)
            }
            {
                isLoading && <p className=" text-red-600 text-center w-screen"><span className="loading h-screen loading-bars loading-lg"></span>
                </p>
            }
        </div>
    );
};

export default AllBlogPost;