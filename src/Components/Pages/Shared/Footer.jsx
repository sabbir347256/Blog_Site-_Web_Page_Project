const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 pb-0">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-lg font-semibold">About Us</h2>
                        <p className="mt-4 text-gray-400">
                            We are committed to providing the best service and support to our clients. Contact us to learn more about our offerings.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Quick Links</h2>
                        <ul className="mt-4">
                            <li><a href="/" className="hover:underline text-gray-400">Home</a></li>
                            <li><a href="/about" className="hover:underline text-gray-400">About Us</a></li>
                            <li><a href="/services" className="hover:underline text-gray-400">Services</a></li>
                            <li><a href="/contact" className="hover:underline text-gray-400">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Contact Us</h2>
                        <ul className="mt-4">
                            <li className="text-gray-400">1234 Street Name, City, State</li>
                            <li className="text-gray-400">+1 (123) 456-7890</li>
                            <li className="text-gray-400">email@example.com</li>
                        </ul>
                        <div className="mt-6 flex space-x-4">
                            <a href="https://facebook.com" className="text-gray-400 hover:text-gray-200">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .594 0 1.326v21.348C0 23.405.594 24 1.326 24h11.48V14.708H9.692v-3.607h3.115V8.413c0-3.1 1.893-4.787 4.659-4.787 1.325 0 2.464.098 2.797.142v3.24l-1.92.001c-1.506 0-1.798.715-1.798 1.763v2.31h3.592l-.467 3.606h-3.125V24h6.125C23.405 24 24 23.405 24 22.674V1.326C24 .595 23.405 0 22.675 0z" /></svg>
                            </a>
                            <a href="https://twitter.com" className="text-gray-400 hover:text-gray-200">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.84 9.84 0 0 1-2.828.775 4.934 4.934 0 0 0 2.165-2.723 9.865 9.865 0 0 1-3.127 1.195A4.917 4.917 0 0 0 16.616 3c-2.724 0-4.932 2.21-4.932 4.932 0 .386.043.762.127 1.124C7.691 8.884 4.066 6.867 1.64 3.92a4.936 4.936 0 0 0-.666 2.478 4.927 4.927 0 0 0 2.19 4.107 4.903 4.903 0 0 1-2.228-.615v.063a4.936 4.936 0 0 0 3.95 4.83 4.928 4.928 0 0 1-2.224.085 4.937 4.937 0 0 0 4.604 3.417 9.875 9.875 0 0 1-6.115 2.108c-.398 0-.79-.023-1.176-.069a13.945 13.945 0 0 0 7.548 2.211c9.055 0 14.002-7.503 14.002-14.002 0-.213-.005-.426-.014-.637A10.008 10.008 0 0 0 24 4.557z" /></svg>
                            </a>
                            <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-200">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.792 0 0 .772 0 1.723v20.554C0 23.228.792 24 1.77 24h20.46C23.208 24 24 23.228 24 22.277V1.723C24 .772 23.208 0 22.23 0zM7.115 20.452H3.704V9.027h3.411v11.425zM5.409 7.65a1.972 1.972 0 1 1 .002-3.944 1.972 1.972 0 0 1-.002 3.944zM20.453 20.452h-3.411v-5.567c0-1.329-.027-3.039-1.851-3.039-1.854 0-2.137 1.448-2.137 2.944v5.662h-3.411V9.027h3.275v1.561h.047c.456-.863 1.57-1.771 3.23-1.771 3.452 0 4.09 2.27 4.09 5.225v6.41z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
                    &copy; 2024 Your Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;