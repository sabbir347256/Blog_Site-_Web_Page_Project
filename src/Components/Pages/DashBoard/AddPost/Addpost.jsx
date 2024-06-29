import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ImageUpload } from "../../Home/AllBlogPost/ImgBB";

const Addpost = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();


    const onSubmit =async (data) => {
        const file = data.file[0];
        const photoUrl = await ImageUpload(file);
        const blogTitle = data.blogTitle;
        const category = data.category;
        const date = data.date;
        const description = data.description;
        const headingOne = data.headingOne;
        const headingOneDescription = data.headingOneDescription;
        const headingTwo = data.headingTwo;
        const headingTwoDescription = data.headingTwoDescription;
        const headingThree = data.headingThree;
        const headingThreeDescription = data.headingThreeDescription;
        const headingFour = data.headingFour;
        const headingFourDescription = data.headingFourDescription;
        const headingFive = data.headingFive;
        const headingFiveDescription = data.headingFiveDescription;
        const headingDetails =[
            {heading:headingOne,headingDescription:headingOneDescription},
            {heading:headingTwo,headingDescription:headingTwoDescription},
            {heading:headingThree,headingDescription:headingThreeDescription},
            {heading:headingFour,headingDescription:headingFourDescription},
            {heading:headingFive,headingDescription:headingFiveDescription}
        ]
        const addPostInfo = { photoUrl, blogTitle, category, date, description, headingDetails };
        console.log(addPostInfo)

        fetch(`http://localhost:5000/addBlogPost`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addPostInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire({
                        title: "Success!",
                        text: "Successfully send your message",
                        icon: "success"
                    });
                }
                navigate(location?.state ? location.state : '/')
            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto py-4 space-y-6 bg-gray-100 rounded-xl my-6 px-10">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Blog Image</label>
                    <input
                        type="file"
                        {...register('file')}
                        className="mt-1 block w-full"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Blog Title</label>
                    <input
                        type="text"
                        {...register('blogTitle')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <input
                        type="text"
                        {...register('category')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                   
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Date</label>
                    <input
                        type="date"
                        {...register('date')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                   
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        {...register('description',)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Heading 1</label>
                    <input
                        type="text"
                        {...register('headingOne', )}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                   
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Heading 1 Description</label>
                    <textarea
                        {...register('headingOneDescription',)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Heading 2</label>
                    <input
                        type="text"
                        {...register('headingTwo')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                   
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Heading 2 Description</label>
                    <textarea
                        {...register('headingTwoDescription', )}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                   
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Heading 3</label>
                    <input
                        type="text"
                        {...register('headingThree',)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                   
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Heading 3 Description</label>
                    <textarea
                        {...register('headingThreeDescription', )}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                   
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Heading 4</label>
                    <input
                        type="text"
                        {...register('headingFour',)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                   
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Heading 4 Description</label>
                    <textarea
                        {...register('headingFourDescription',)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                   
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Heading 5</label>
                    <input
                        type="text"
                        {...register('headingFive',)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Heading 5 Description</label>
                    <textarea
                        {...register('headingFiveDescription', )}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  
                </div>


                <div>
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Addpost;