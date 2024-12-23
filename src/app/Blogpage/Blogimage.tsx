// ImageComponent.tsx
import React from "react";

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
      <div className="absolute text-black text-5xl font-semibold">Blog</div>

      {/* Breadcrumb Links */}
      <div className="  absolute mt-24 left-1/2 transform -translate-x-1/2 text-black text-lg ">
        <span>Home</span>
        <span>&gt;</span>
        <span className="font-semibold ">Blog</span>
      </div>
    </div>
  );
};

export default ImageComponent;
