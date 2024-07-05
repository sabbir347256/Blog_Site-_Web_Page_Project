import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const ContactsmsList = ({ contactSms, refetch }) => {
    const { name, email, sms, _id } = contactSms;

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
                fetch(`https://blog-web-server-site.vercel.app/deleteComment/${id}`, {
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
            <tr className="soraFont">
                <th>{name}</th>
                <td>{email}</td>
                <td>{sms}</td>
                <td><NavLink>
                    <button onClick={() =>handleDelete(_id)} className="btn btn-primary">Delete</button>
                </NavLink></td>
            </tr>
        </tbody>
    );
};

export default ContactsmsList;