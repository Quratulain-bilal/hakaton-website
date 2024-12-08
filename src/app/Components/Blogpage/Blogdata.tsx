import React from "react";
import DeliveryFeatures from "./Delievery";

// Navigation Component
const Navigation = () => {
  const NavigationLink = ({
    label,
    isActive,
  }: {
    label: string;
    isActive?: boolean;
  }) => (
    <div className={`${isActive ? "font-medium" : "font-light"}`}>{label}</div>
  );

  const NavigationIcon = ({ src, alt }: { src: string; alt: string }) => (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain shrink-0 my-auto w-5 aspect-square"
    />
  );

  return (
    <div className="flex relative z-10 flex-col justify-center items-center px-20 py-20 -mt-1.5 w-full text-base text-black whitespace-nowrap min-h-[328px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/994d2cee0a74a300e7e875a7aa49c05fe08e475e64b98c8cab43e2bf378568d3?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
        alt="Background Image"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col mb-0 max-w-full w-[115px] max-md:mb-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ad7e9b8d0c3b729601df28f20044341e4696757b3f73851774de93c17033938?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
          alt="Logo"
          className="object-contain w-full aspect-[0.8] max-md:mr-0.5"
        />
        <div className="flex gap-1.5">
          <NavigationLink label="Home" isActive={true} />
          {/* Replace Cart with My Account */}
          <NavigationIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
            alt="My Account Icon"
          />
          {/* Replace Cart with Blog */}
          <NavigationLink label="Blog" />
        </div>
      </div>
    </div>
  );
};

// BlogComponent
const BlogComponent: React.FC = () => {
  const blogPosts = [
    {
      author: "Admin",
      date: "14 Oct 2022",
      category: "Wood",
      title: "Going all-in with millennial design",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4afabaa3dd6fda83227fb086cb291079c2a734262400f70b0fb72d5dfbbc124a?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    },
    {
      author: "Admin",
      date: "14 Oct 2022",
      category: "Handmade",
      title: "Exploring new ways of decorating",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d0019ed79f1b2027e1802a99b8ba2ec5e7bbdb80682b49273af5f504752c96a5?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    },
    {
      author: "Admin",
      date: "14 Oct 2022",
      category: "Wood",
      title: "Handmade pieces that took time to make",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3632bab0a2543d9df160a31963ae66a4659c5402c353e5d1c837d39fc64d9a1a?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    },
  ];

  const recentPosts = [
    {
      title: "Going all-in with millennial design",
      date: "03 Aug 2022",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/668611e17e140f17dac0dffb5d00b221c0c8ced4e84fb89fcc8a2b4e994b1c12?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    },
    {
      title: "Exploring new ways of decorating",
      date: "03 Aug 2022",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/02de55699f1424026e14442ba8e31815c0fe4817435257f16a8a82076f77a359?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    },
    {
      title: "Handmade pieces that took time to make",
      date: "03 Aug 2022",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7a267a0580b887c238c143a618de0326766fc585bcb20c8be28a4f13cd39877c?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    },
  ];

  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  return (
    <>
      <Navigation />
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10 px-9 mt-11 w-full max-md:px-5 max-md:mt-10">
        {/* Left Column: Blog Posts */}
        <div className="lg:w-2/3 w-full">
          <div className="self-start text-2xl font-medium text-black">
            Blog Posts
          </div>
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col w-full mt-8">
              <img
                loading="lazy"
                src={post.imageUrl}
                className="object-cover w-full rounded-xl aspect-video max-md:max-w-full"
                alt={post.title}
              />
              <div className="flex gap-9 text-base text-neutral-400 mt-4">
                <div className="flex gap-2 whitespace-nowrap">
                  <span>👤</span>
                  <div>{post.author}</div>
                </div>
                <div className="flex gap-3">
                  <span>📅</span>
                  <div>{post.date}</div>
                </div>
                <div className="flex gap-2 whitespace-nowrap">
                  <span>📂</span>
                  <div>{post.category}</div>
                </div>
              </div>
              <div className="mt-4 text-3xl font-medium text-black max-md:max-w-full">
                {post.title}
              </div>
              <div className="mt-3 text-base leading-6 text-neutral-400 max-md:max-w-full">
                {post.excerpt}
              </div>
              <div className="mt-8 text-base text-blue-600 hover:underline cursor-pointer">
                Read more
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Categories and Recent Posts */}
        <div className="lg:w-1/3 w-full">
          {/* Search bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search categories..."
                className="w-full p-3 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                🔍
              </span>
            </div>
          </div>

          {/* Categories */}
          <div className="self-start text-2xl font-medium text-black">
            Categories
          </div>
          {categories.map((category, index) => (
            <div key={index} className="flex justify-between mt-8">
              <div>{category.name}</div>
              <div>{category.count}</div>
            </div>
          ))}

          {/* Recent Posts */}
          <div className="self-start text-2xl font-medium text-black mt-11">
            Recent Posts
          </div>
          {recentPosts.map((post, index) => (
            <div key={index} className="flex gap-3 mt-8">
              <img
                loading="lazy"
                src={post.imageUrl}
                className="object-cover shrink-0 w-20 rounded-xl aspect-square"
                alt={post.title}
              />
              <div className="flex flex-col">
                <div className="text-sm text-black">{post.title}</div>
                <div className="mt-1 text-xs text-neutral-400">{post.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Features */}
      <DeliveryFeatures />
    </>
  );
};

export default BlogComponent;
