// components/BlogSection.tsx
import Image from "next/image";
import { FC } from "react";
import { FaArrowRight } from "react-icons/fa";

interface Blog {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface BlogSectionProps {
  blogs: Blog[];
}

const Blog: FC<BlogSectionProps> = ({ blogs }) => {
  return (
    <section className="pb-16 pt-24 bg-white">
      {/* Section Header */}
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center ">
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
            Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
            Fresh Harvest Blog
          </h2>
          <p className="mt-4 text-gray-600 max-w-lg mx-auto">
            Welcome to the Fresh Harvest Blog, your go-to resource for all things
            related to fresh produce, healthy eating, and culinary inspiration.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {blogs.map((blog) => (
            <div key={blog.id} className="rounded-lg overflow-hidden shadow-sm bg-white">
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-5">
                <p className="text-gray-500 text-sm">{blog.date}</p>
                <h3 className="text-lg font-semibold mt-2 text-gray-900">
                  {blog.title}
                </h3>
                <p className="mt-2 text-gray-600">{blog.description}</p>
                <a
                  href={blog.link}
                  className="inline-flex items-center gap-3 mt-4 text-orange-500 font-semibold hover:underline"
                >
                  Read More
                  <span><FaArrowRight /></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
