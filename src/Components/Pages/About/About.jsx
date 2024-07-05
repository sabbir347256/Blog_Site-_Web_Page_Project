import { Helmet } from 'react-helmet';
import authorImage from '../../../image/author Image.jpg'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center banner md:px-0">
      <Helmet>
        <title>Himu Labs || About</title>
      </Helmet>
      <div className="max-w-6xl w-full bg-white shadow-md  overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-64 w-full object-cover md:h-full md:w-64"
              src={authorImage}
              alt="About Himu Labs"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900">About Himu Labs</h2>
            <p className="mt-4 text-gray-600">
              Welcome to Himu Labs, your number one source for all things related to blogging and tech. We're dedicated to giving you the very best of content, with a focus on quality, reliability, and uniqueness.
            </p>
            <p className="mt-4 text-gray-600">
              Founded in 2024, Himu Labs has come a long way from its beginnings. When we first started out, our passion for sharing insightful articles and tech news drove us to start this blog, and gave us the impetus to turn hard work and inspiration into a booming online presence.
            </p>
            <p className="mt-4 text-gray-600">
              We hope you enjoy our content as much as we enjoy offering them to you. If you have any questions or comments, please do not hesitate to contact us.
            </p>
            <p className="mt-4 text-gray-600">
              Sincerely,<br />
              The Himu Labs Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;