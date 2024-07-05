import { useQuery } from "@tanstack/react-query";
import Specificpost from "./Specificpost";

const Allmypost = () => {
    const { data: allpost, isLoading,refetch } = useQuery({
        queryKey: ['GET'],
        queryFn: () => {
            return fetch('http://localhost:5000/allblog')
                .then(res => res.json())
                .then(data => {
                    return data;
                })
        }
    });
    if (isLoading) {
        <span className="loading loading-bars loading-lg"></span>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Blog Title</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    {
                        allpost?.map(post => <Specificpost key={post._id} post={post} refetch={refetch}></Specificpost>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Allmypost;