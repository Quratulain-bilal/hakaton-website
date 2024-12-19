import React from "react";
import Link from "next/link";

const ImageComponent: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center w-full">
      {/* Image */}
      <img
        loading="lazy"
        src="/blog.png" // Path to the image in the public folder
        alt="Blog content"
        className="object-cover w-full h-[300px]" // Adjust height as needed
      />

      {/* Overlay Text */}
      <div className="absolute text-black text-5xl font-semibold">Shop</div>

      {/* Breadcrumb Links */}
      <div className="absolute mt-24 left-1/2 transform -translate-x-1/2 text-black text-lg flex gap-2">
        {/* Home Link */}
        <Link href="/">
          <span className="hover:underline cursor-pointer">Home</span>
        </Link>
        <span>&gt;</span>
        {/* Blog Link */}
        <Link href="/shop">
          <span className="font-semibold hover:underline cursor-pointer">
            shop
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ImageComponent;
