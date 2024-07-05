import { useQuery } from "@tanstack/react-query";
import ContactsmsList from "./ContactsmsList";

const ContactSms = () => {
    const { data: contactSms, isLoading,refetch } = useQuery({
        queryKey: ['GET'],
        queryFn: () => {
            return fetch('https://blog-web-server-site.vercel.app/contactInformation')
                .then(res => res.json())
                .then(data => {
                    return data;
                })
        }
    });
    if(isLoading){
        <span className="loading loading-bars loading-lg"></span>
    }
    return (
        <div>
            <div className="overflow-x-auto ">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Sms</th>
                        </tr>
                    </thead>
                    {
                        contactSms?.map(contactSms => <ContactsmsList key={contactSms._id} contactSms={contactSms} refetch={refetch }></ContactsmsList>)
                    }
                </table>
            </div>
        </div>
    );
};

export default ContactSms;