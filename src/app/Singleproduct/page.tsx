"use client";

import React, { useState } from "react";
import Productinfo from "./Productinfo";
import Head from "./Head";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

const ProductDetails: React.FC = () => {
  const productData = {
    name: "Asgaard Sofa",
    price: "Rs. 250,000.00",
    rating: 5,
    reviews: 5,
    description:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    sizes: [
      { label: "L", isSelected: true },
      { label: "XL", isSelected: false },
      { label: "XS", isSelected: false },
    ],
    colors: [
      { color: "bg-violet-500", isSelected: true },
      { color: "bg-black", isSelected: false },
      { color: "bg-orange-300", isSelected: false },
    ],
  };

  const relatedProducts = [
    {
      name: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5a077f92fd46575a030faeed1a15e49321589598aaa57f7b9d014c3e0e8de828",
    },
    {
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/43f827a16b96cc493c71f16a8bed4d9b4e559c569296a38f33bb59d52de4f4f0",
    },
    {
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0daa4f02e085c7e050b601337521698dafe24a3690868f748f74a979daac7c1d",
    },
    {
      name: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/98ba6cbfeda5cc022b59ca90b6963265f350d88d9b5c0875da2c405d6d7e843c",
    },
  ];

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string>(
    "https://cdn.builder.io/api/v1/image/assets/TEMP/219fef56aee837c5804022740f4acce9430e35e81f9e83bbbb7ec919233c0777"
  );

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Head />
      <div className="container mx-auto p-6 space-y-16">
        {/* Main Product Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section: Image */}
          <div className="flex-1">
            <img
              src={selectedImage}
              alt="Asgaard Sofa"
              className="w-full rounded-lg object-cover"
            />
            {/* Small Thumbnail Images */}
            <div className="flex gap-4 mt-4">
              {[
                "https://cdn.builder.io/api/v1/image/assets/TEMP/219fef56aee837c5804022740f4acce9430e35e81f9e83bbbb7ec919233c0777",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/5a077f92fd46575a030faeed1a15e49321589598aaa57f7b9d014c3e0e8de828",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/43f827a16b96cc493c71f16a8bed4d9b4e559c569296a38f33bb59d52de4f4f0",
              ].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 object-cover cursor-pointer border-2 border-gray-300 hover:border-amber-500"
                  onClick={() => handleImageSelect(image)}
                />
              ))}
            </div>
          </div>

          {/* Right Section: Details */}
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl font-bold">{productData.name}</h1>
            <p className="text-xl text-gray-600">{productData.price}</p>
            <p className="text-gray-700">{productData.description}</p>

            {/* Size Selector */}
            <div>
              <h4 className="text-sm text-gray-500">Size</h4>
              <div className="flex gap-2 mt-2">
                {productData.sizes.map((size, index) => (
                  <div
                    key={index}
                    className={`px-4 py-2 border rounded-lg ${
                      size.isSelected
                        ? "bg-amber-100 border-amber-500"
                        : "bg-gray-100 border-gray-300"
                    }`}
                  >
                    {size.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div>
              <h4 className="text-sm text-gray-500">Color</h4>
              <div className="flex gap-2 mt-2">
                {productData.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full ${color.color} ${
                      color.isSelected ? "border-2 border-black" : ""
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 border" onClick={decrement}>
                -
              </button>
              <span>{quantity}</span>
              <button className="px-4 py-2 border" onClick={increment}>
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <Link href="/Cart">
              <button
                className="px-12 py-4 bg-amber-50 text-black rounded-lg"
                onClick={() => console.log("Add to cart")}
              >
                Add to Cart
              </button>
            </Link>
          </div>
        </div>

        <Productinfo />

        {/* Related Products Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-sm rounded-lg overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-500">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ServiceCard />
      </div>
    </>
  );
};

export default ProductDetails;
