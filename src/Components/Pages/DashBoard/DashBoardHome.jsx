import { Link } from "react-router-dom";
import dashboardImage from '../../../image/dashboardImage.jpg'

const DashBoardHome = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-cover bg-center my-10" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080')" }}>
            <div className="bg-white bg-opacity-80 p-8 rounded shadow-lg transform transition duration-500 hover:scale-105">
                <h1 className="text-3xl font-bold text-center animate-fade-in mb-4">Welcome Admin Dashboard</h1>
                <img src={dashboardImage} alt="Dashboard" className="mx-auto mb-4shadow-md" />
                <p className="text-center mb-4">Here is some necessary information that you might find useful.</p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Analytics overview</li>
                    <li>User management</li>
                    <li>System settings</li>
                </ul>
                <Link to="/" className="text-blue-500 hover:underline">Go back to Home</Link>
            </div>
        </div>
    );
};

export default DashBoardHome;