import { useState } from "react";

const products = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5a077f92fd46575a030faeed1a15e49321589598aaa57f7b9d014c3e0e8de828?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    title: "Trenton modular sofa_3",
    price: "Rs. 25,000.00",
    imageAlt: "Trenton modular sofa with three seats",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/43f827a16b96cc493c71f16a8bed4d9b4e559c569296a38f33bb59d52de4f4f0?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    title: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
    imageAlt: "Granite dining table set with chairs",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0daa4f02e085c7e050b601337521698dafe24a3690868f748f74a979daac7c1d?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    title: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
    imageAlt: "Outdoor bar furniture set",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/98ba6cbfeda5cc022b59ca90b6963265f350d88d9b5c0875da2c405d6d7e843c?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    title: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
    imageAlt: "Console table with teak mirror",
  },
];

const Cards = () => {
  return (
    <div className="flex flex-col items-center px-20 pt-28 pb-12 w-full bg-white rounded-[44px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="text-4xl font-medium text-black">Top Picks For You</div>
      <div className="mt-3.5 text-base font-medium text-neutral-400 max-md:max-w-full">
        Find a bright ideal to suit your taste with our great selection of
        suspension, floor and table lights.
      </div>
      <div className="mt-16 w-full max-w-[1219px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col w-3/12 max-md:w-full group overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
            >
              {/* Product Image */}
              <div className="flex flex-col items-start text-black max-md:mt-6">
                <img
                  loading="lazy"
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  className="object-contain self-stretch w-full rounded-none aspect-square group-hover:opacity-80 transition-opacity duration-300"
                />
                {/* Product Details */}
                <div className="mt-3.5 text-base">{product.title}</div>
                <div className="mt-3 text-2xl font-medium">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="mt-16 text-xl font-medium text-black max-md:mt-10"
        tabIndex={0}
        aria-label="View more products"
      >
        View More
      </button>
      <div className="shrink-0 mt-4 h-0.5 border-2 border-black border-solid w-[115px]" />
    </div>
  );
};

export default Cards;
