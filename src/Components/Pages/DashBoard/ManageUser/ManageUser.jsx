import { useQuery } from "@tanstack/react-query";
import ManageUserList from "./ManageUserList";

const ManageUser = () => {
    const { data: manageUser, isLoading } = useQuery({
        queryKey: ['GET'],
        queryFn: () => {
            return fetch('http://localhost:5000/registerUser')
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
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    {
                        manageUser?.map(user => <ManageUserList key={user._id} user={user}></ManageUserList>)
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageUser;