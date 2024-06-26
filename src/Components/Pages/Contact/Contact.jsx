import contact from '../../../image/contact.jpg'
import aboutImage from '../../../image/contact us blog.jpg'
import aboutImage1 from '../../../image/contact us blog 2.jpg'
import aboutImage2 from '../../../image/contact image blog 3.jpg'
const Contact = () => {
    return (
        <div className='bg-gray-100 contactbg'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 px-5'>
                <img className='rounded-2xl h-60' src={aboutImage} alt="" />
                <img className='rounded-2xl h-60 my-6 md:my-0' src={aboutImage1} alt="" />
                <img className='rounded-2xl h-60' src={aboutImage2} alt="" />
            </div>
            <div className="min-h-screen px-5 md:px-0 bg-gray-100 flex flex-col justify-center items-center contactbg shadow-2xl">
                <div className="max-w-4xl w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:h-full md:w-48" src={contact} alt="Contact Us" />
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
                            <p className="mt-2 text-gray-600">Feel free to reach out to us by filling the form below.</p>
                            <form className="mt-6">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="message"
                                        rows="4"
                                        placeholder="Your Message"
                                    ></textarea>
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;