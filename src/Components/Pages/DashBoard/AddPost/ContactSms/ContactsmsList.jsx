const ContactsmsList = ({ contactSms }) => {
    const {name,email,sms} = contactSms;
    console.log(contactSms)
    return (
        <tbody>
            <tr>
                <th>{name}</th>
                <td>{email}</td>
                <td>{sms}</td>
            </tr>
        </tbody>
    );
};

export default ContactsmsList;