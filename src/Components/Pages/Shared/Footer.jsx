import { NavLink, useNavigate } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { ImTwitter } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import Swal from "sweetalert2";

const Footer = () => {
    const [sms, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleContact = (e) => {
        e.preventDefault();
        const inputValue = { sms };
        fetch(`https://blog-web-server-site.vercel.app/contactInformation`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inputValue)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire({
                        title: "Success!",
                        text: "Successfully post.",
                        icon: "success"
                    });
                }
                navigate(location?.state ? location.state : '/')
            })
    }
    return (
        <footer className="bg-[#07162c] text-white pb-0 notoBangla">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-8 gap-8">
                <div>
                    <div className="bg-[#074173] p-2 text-center  font-bold text-white text-lg rounded-t-md rounded-b-2xl border-b-2 border-b-white">
                        <h2>হিমু ল্যাব সর্ম্পকে</h2>
                    </div>
                    <p className=" mt-2 textarea-md ">HIMU LAB, একটি শিহ্মামূলক বাংলা ব্লগ সাইট যা আপনাকে বিভিন্ন বিষয়ে তথ্যবহূল ও আকর্ষণীয় আর্টিকেলের মাধ্যমে আপনাদের জ্ঞানের পরিধি বৃদ্ধি করতে এবং জীবনের বিভিন্ন দিক থেকে সাহায্য করার জন্য নিবেদিত।</p>
                </div>
                <div>
                    <div className="bg-[#074173] p-2 text-center font-bold text-white text-lg rounded-t-md rounded-b-2xl border-b-2 border-b-white">
                        <h2>যোগাযোগ ও নীতিমালা</h2>
                    </div>
                    <div className="flex flex-col gap-3 text-center mt-5 items-center">
                        <NavLink to='/contact' className='border-2 p-1 w-40 hover:bg-white hover:text-black duration-200 rounded-lg'>Contact Us</NavLink>
                        <NavLink to='/' className='border-2 p-1 w-40 hover:bg-white hover:text-black duration-200 rounded-lg'>Privacy Policy</NavLink>
                        <NavLink to='/about' className='border-2 p-1 w-40 hover:bg-white hover:text-black duration-200 rounded-lg'>About Us</NavLink>
                        <NavLink to='/' className='border-2 p-1 w-40 hover:bg-white hover:text-black duration-200 rounded-lg'>Terms of Service</NavLink>
                    </div>
                </div>
                <div>
                    <div className="bg-[#074173] p-2 text-center font-bold text-white text-lg rounded-t-md rounded-b-2xl border-b-2 border-b-white">
                        <h2>সোশ্যাল মিডিয়া ফলো করুন</h2>
                    </div>
                    <div className="flex gap-4 mt-5 items-center justify-center">
                        <NavLink to='https://web.facebook.com/takvirhimu69'><CiFacebook className="size-8 bg-white text-black rounded-full p-1"></CiFacebook></NavLink>
                        <NavLink to='https://l.facebook.com/l.php?u=https%3A%2F%2Fx.com%2Ftakbirhimu69%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR2tucARCozbwkq6tQw-KGu6e8J047A4rP2hwslftzBmDlMv1bL0BJPRGJk_aem_YtDCIxc1qqL_IotAHjvSWA&h=AT1v4aSJLkahVDmDtlL_H8_7nfpqsS6P50fqwis1nsumduvKNKYw4ChwLINOEaNCatHm8aeNqeQXUjyhvhv-fs53JNQ4M2WqZCC0EJzA8cfQq-p0CQytXx1C9G5pGGwlZRVzEA'><ImTwitter className="size-8 bg-white text-black rounded-full p-1"></ImTwitter></NavLink>
                        <NavLink to='https://www.linkedin.com/in/takbirhimu69/?fbclid=IwZXh0bgNhZW0CMTAAAR33nzuaTXa8vrLcSF1XlppqdQHhdxCF2GqA1ovY_3UasguwQ06UqIqTE54_aem_zFzJ0HJQnwk2wc_6xvg-sw'><FaLinkedin className="size-8 bg-white text-black rounded-full p-1"></FaLinkedin></NavLink>
                    </div>
                </div>
                <div>
                    <div className="bg-[#074173] p-2 text-center font-bold text-white text-lg rounded-t-md rounded-b-2xl border-b-2 border-b-white">
                        <h2>যেকোনো প্রয়োজনে ইমেইল করুন</h2>
                    </div>
                    <div className="flex items-center justify-center ">
                        <form onSubmit={handleContact} className=" p-6 rounded shadow-md w-full max-w-md">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="inputField"
                                    value={sms}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="write your sms..."
                                />
                            </div>
                            <div className="flex items-center justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-screen"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-[#074173] rounded-t-2xl border-t-2 border-t-white">
                <div className="text-center p-4">
                    <h2>Copyright&copy; 2021-2024</h2>
                </div>
            </div>
        </footer>
    );
};

export default Footer;