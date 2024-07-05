import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Specificpost = ({ post ,refetch}) => {
    const { blogTitle, date,_id } = post;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deletePost/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch();
                    })

            }
        })
    }
    return (
        <tbody>
            <tr className="tiroBangla">
                <th>{blogTitle}</th>
                <td>{date}</td>
                <td><NavLink><button onClick={() => handleDelete(_id)} className="btn-primary btn hover:bg-red-700 duration-500">Delete</button></NavLink></td>
            </tr>
        </tbody>
    );
};

export default Specificpost;