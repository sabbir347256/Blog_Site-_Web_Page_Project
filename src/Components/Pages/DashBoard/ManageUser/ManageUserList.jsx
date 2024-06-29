const ManageUserList = ({user}) => {
    const {name,email} =user;
    return (
        <tbody>
            <tr>
                <th>{name}</th>
                <td>{email}</td>
            </tr>
        </tbody>
    );
};

export default ManageUserList;