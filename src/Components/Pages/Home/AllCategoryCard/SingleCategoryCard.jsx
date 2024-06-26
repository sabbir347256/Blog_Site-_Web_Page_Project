const SingleCategoryCard = ({ image, heading, subheading, description }) => {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
            <div className="relative">
                <img className="w-full h-64 object-cover" src={image} alt="Card Image" />
                <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center items-center text-center p-4">
                    <h2 className="text-white text-2xl font-bold">{heading}</h2>
                    <h4 className="text-white text-xl">{subheading}</h4>
                    <p className="text-white mt-2">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleCategoryCard;