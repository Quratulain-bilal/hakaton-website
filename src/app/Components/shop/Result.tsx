import React from "react";

const FilterBar = () => {
  return (
    <div className="flex flex-wrap gap-5 px-5 py-6 mt-10 w-full bg-red-50 text-black max-md:px-3 max-md:mt-8 max-md:gap-3">
      {/* Filter Section */}
      <div className="flex items-center gap-5 sm:gap-6 flex-grow">
        {/* Filter Icon */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2452e8d6579f3e54380136ba6a8be013520d923e996079b0d5c27b60987ad7c4?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
          alt="Filter Icon"
          className="w-6 sm:w-7"
        />

        {/* Results Count */}
        <div className="flex flex-wrap gap-3 items-center text-base sm:text-lg">
          {/* Icon 1 */}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb826a2d4ccd8c119c808df43eaba6faa3fae6853ed6f784acf0c644730004b0?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
            alt="Icon 1"
            className="object-contain w-6 sm:w-7 h-auto"
          />

          {/* Icon 2 */}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a155f592a627e635322117912e0d640704bcf03fc3e00020b82570d141909f48?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
            alt="Icon 2"
            className="object-contain w-5 sm:w-6 h-auto"
          />

          {/* Divider */}
          <div className="w-px bg-neutral-400 h-8 hidden sm:block" />

          {/* Text */}
          <div className="flex-grow text-center sm:text-left">
            Showing 1–16 of 32 results
          </div>
        </div>
      </div>

      {/* Show & Sort Dropdown */}
      <div className="flex gap-5 sm:gap-8 items-center flex-grow text-sm sm:text-base">
        <div className="my-auto">Show</div>
        <div
          className="bg-white px-5 py-3 text-neutral-400 rounded-lg w-[55px] sm:w-[75px]"
          role="button"
          tabIndex={0}
        >
          16
        </div>
        <div className="my-auto">Sort by</div>
        <div
          className="bg-white px-8 py-3 text-neutral-400 rounded-lg max-md:px-5"
          role="button"
          tabIndex={0}
        >
          Default
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
