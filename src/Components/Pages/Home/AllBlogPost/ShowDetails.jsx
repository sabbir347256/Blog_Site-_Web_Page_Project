import { useContext } from "react";
import { AuthProvider } from "../../../Authprovider/AuthContext";
import { useLoaderData, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SameCategoryBlog from "./SameCategoryBlog";

const ShowDetails = () => {
    const { loading } = useContext(AuthProvider)
    const detailsData = useLoaderData();
    const { id } = useParams();
    const details = detailsData.find(data => data._id == id);
    const { photoUrl, blogTitle, category, description, date } = details;

    const { data: getFeature, isLoading } = useQuery({
        queryKey: ['GET'],
        queryFn: () => {
            return fetch(`https://blog-web-server-site.vercel.app/getSomeFeatures/${category}`)
                .then(res => res.json())
                .then(data => {
                    return data;
                })
        }
    });

    const relatedPosts = getFeature?.filter(
        (post) => post.category === details.category && post._id !== details._id
    );

    if (loading) {
        <p className="text-red-600 text-center"><span className="loading loading-infinity loading-lg"></span></p>;
    }
    return (
        <div className="container mx-auto p-4 detailsBg bangla2">
            <div className="bg-white p-4 rounded shadow-md">
                <div className="border-2 p-4 rounded-lg">
                    <img src={photoUrl} className="w-full h-[15rem] md:h-[32rem] object-cover " />
                    <div className="border-2 border-gray-400 rounded-b-2xl p-4">
                        <div className="mt-4">
                            <h2 className="text-lg text-green-500">{category}</h2>
                            <h3 className="text-2xl font-bold mt-2">{blogTitle}</h3>
                            <p className="text-md mt-2">{description}</p>
                        </div>
                        <div className="mt-8">
                            {details.headingDetails.map((detail, index) => (
                                <div key={index} className="mt-4">
                                    <h4 className={`${detail.heading === '' ? 'text-lg font-bold' : 'text-lg text-blue-800 font-bold border-l-2 border-l-black p-1 bg-gray-200 rounded-xl'}`}>{detail.heading}</h4>
                                    <p className="text-md mt-3 p-1">{detail.headingDescription}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-3">
                {
                    relatedPosts?.map(sameCategoryBlog => <SameCategoryBlog key={sameCategoryBlog._id} sameCategoryBlog={sameCategoryBlog} ></SameCategoryBlog>)
                }
            </div>
        </div>
    );
};

export default ShowDetails;