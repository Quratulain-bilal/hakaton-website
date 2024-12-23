"use client";

import * as React from "react";
import Link from "next/link"; // Import Link for navigation

const blogData = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8baac812f77faeacbd42fa49cddd58a1dac730b0dca25c877ab8db6b59e97bad?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    title: "Going all-in with millennial design",
    readTime: "5 min",
    date: "12th Oct 2022",
    clockIconUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0927156daf4d21463dcbe5a0e9d739b7dbd6c63654dc4a738c6f4be0a3f0c614?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    calendarIconUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a4a29bbeb707fa74be6d844742fd199890d731af70675e9a4a92c7a56e354106?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7f3819f49e6c560d81dfb59e2b7ef37905ad8eae74330319cf72b9e57043942d?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    title: "Going all-in with millennial design",
    readTime: "5 min",
    date: "12th Oct 2022",
    clockIconUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e6009bf57db232ab5d21bb6de522226539cab62712208d2d3af3a4c299901b33?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    calendarIconUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fac26e7ebece53d89fc358df901494282e07e7adfcc63cd9acbc9ea6a3fe442c?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fa6bd9362f70c97309e5e8250f89e4fb88e9d962ffc074b94d347b389beb5954?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    title: "Going all-in with millennial design",
    readTime: "5 min",
    date: "12th Oct 2022",
    clockIconUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9a371776e9ac028bd0b007f26c8e463ff88af157ad65855ad9ea028370239cfc?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    calendarIconUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a4a29bbeb707fa74be6d844742fd199890d731af70675e9a4a92c7a56e354106?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
  },
];

interface BlogCardProps {
  imageUrl: string;
  title: string;
  readTime: string;
  date: string;
  clockIconUrl: string;
  calendarIconUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  title,
  readTime,
  date,
  clockIconUrl,
  calendarIconUrl,
}) => {
  const [showMore, setShowMore] = React.useState(false);

  const randomText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.`;

  return (
    <div className="flex flex-col items-center w-full text-black">
      <img
        loading="lazy"
        src={imageUrl}
        alt={title}
        className="object-contain self-stretch w-full rounded-xl aspect-square"
      />
      <div className="self-stretch mx-7 mt-8 text-xl max-md:mx-2.5">
        {title}
      </div>
      <div className="mt-2.5 text-2xl font-medium">
        <button
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          tabIndex={0}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Learn More"}
        </button>
      </div>
      {showMore && (
        <div className="mt-4 text-base font-light max-md:max-w-full">
          {randomText}
        </div>
      )}
      <div className="shrink-0 mt-2 h-0.5 border-2 border-black border-solid w-[115px]" />
      <div className="flex gap-3 mt-5 max-w-full text-base w-[222px]">
        <div className="flex gap-2.5 font-light">
          <img
            loading="lazy"
            src={clockIconUrl}
            alt="Clock Icon"
            className="object-contain shrink-0 my-auto aspect-square w-[18px]"
          />
          <div>{readTime}</div>
        </div>
        <div className="flex gap-2 font-medium">
          <img
            loading="lazy"
            src={calendarIconUrl}
            alt="Calendar Icon"
            className="object-contain shrink-0 self-start aspect-square w-[22px]"
          />
          <div className="font-light">{date}</div>
        </div>
      </div>
    </div>
  );
};

export const Blog: React.FC = () => {
  return (
    <div id="blog">
      <div className="flex flex-col items-center px-20 py-14 w-full bg-white max-md:px-5 max-md:max-w-full">
        <h1 className="text-4xl font-medium text-black">Our Blogs</h1>
        <div className="mt-3.5 text-base font-medium text-neutral-400 max-md:max-w-full">
          Find a bright idea to suit your taste with our great selection
        </div>
        <div className="mt-16 w-full max-w-[1221px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <BlogCard {...blogData[0]} />
            </div>
            <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-6 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <BlogCard {...blogData[1]} />
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <BlogCard {...blogData[2]} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-20 ml-32 max-w-full text-xl font-medium text-black w-[126px] max-md:mt-10 max-md:ml-2.5">
                  <Link href="/Blogpage">
                    <button className="text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black whitespace-nowrap">
                      View All Posts
                    </button>
                  </Link>
                  <div className="shrink-0 mt-4 w-full h-0.5 border-2 border-black border-solid max-md:mr-1.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
