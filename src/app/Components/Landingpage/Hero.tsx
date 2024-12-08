"use client";

import React from "react";

// Importing Poppins font from Google Fonts with extra-bold weight
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "500" }); // Ensure extra-bold is loaded

 function RocketSingleSeater() {
  return (
    <div className="w-full bg-amber-100 h-screen flex items-center justify-center max-md:h-auto max-md:px-5">
      {/* Container for Title and Image */}
      <div className="flex items-center justify-center gap-10 max-md:flex-col max-md:gap-5">
        {/* Title and Button Section */}
        <div className="flex flex-col justify-center items-center text-center w-1/2 max-md:w-full">
          <h1
            className={`${poppins.className} font-bold text-7xl text-black max-md:text-4xl max-md:break-words`}
          >
            Rocket Single Seater
          </h1>

          <button
            className="mt-6 px-8 py-3 text-2xl  max-md:px-6 max-md:py-2 max-md:text-xl max-lg:px-12 max-lg:py-4 max-lg:text-4xl underline"
            onClick={() => alert("Shop Now clicked!")}
          >
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="w-1/2 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/640b4e43eeed8f861487842379edf4f3c9dd12906573deda41f6c3474babc6db?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
            alt="Rocket single seater product showcase"
            className="object-contain w-full max-h-[1600px] max-md:max-h-[500px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
export default RocketSingleSeater;