import SingleCategoryCard from "./SingleCategoryCard";

const AllCategoryCard = () => {
    const cardData = {
        image: "https://swiperjs.com/demos/images/nature-1.jpg",
        heading: "Card Heading",
        subheading: "Card Subheading",
        description: "This is a description for the card. It gives more details about the card content.",
    };
    return (
        <div className="bg-gray-200 ">
            <div >
                <h1 className="font-extrabold text-4xl playfair px-14">All Category</h1>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-4 p-4">
                <SingleCategoryCard {...cardData} />
            </div>
        </div>
    );
};

export default AllCategoryCard;