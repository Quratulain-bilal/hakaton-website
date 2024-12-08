"use client";

import * as React from "react";

const galleryImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/510fd76d798fa3e228b1c522a3ad821748955b5fa9a2f3f4587e5a31b2aecb50?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    aspectRatio: "aspect-[1.08]",
    className: "w-full max-md:ml-0 pr-5", // Added padding-right here
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/72eb01b07494dfd7b82c9a31c284ffa2992b0c17d96b98165d15ab2f4724f90a?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    aspectRatio: "aspect-[1.22]",
    className: "ml-5 w-full max-md:ml-0 pr-5", // Added padding-right here
  },
];

export const GallerySection: React.FC = () => {
  return (
    <div className="w-full bg-red-50 py-20 px-5 max-md:px-2 max-md:max-w-full">
      {/* Title Section with space at the top */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold text-black max-md:text-3xl">
          Our Gallery
        </h2>
      </div>

      {/* Gallery Images */}
      <div className="flex gap-5 max-md:flex-col max-md:gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`${image.className} ${image.aspectRatio} overflow-hidden rounded-lg`}
          >
            <img
              loading="lazy"
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      
   
    </div>
  );
};

export default GallerySection;
