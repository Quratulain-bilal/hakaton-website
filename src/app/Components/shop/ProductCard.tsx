import React from "react";

// Define TypeScript interface for the product data
interface Product {
  price: string;
  title: string;
  imageUrl: string;
}

// Define TypeScript interface for pagination item
interface PaginationItemProps {
  value: number;
  isActive: boolean;
}

const ProductGrid: React.FC = () => {
  // Product data
  const products: Product[] = [
    {
      price: "Rs. 15,000.00",
      title: "Plain console_",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/40cec403c4c77e2aa855187e3adc41f5e4363ef48600b9b97080fee3e8016f5b?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    },
    {
      price: "Rs. 225,000.00",
      title: "Reclaimed teak Sideboard",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/723bdf3f848ac5ebda6a1153890417dc6001f30e6748306372559f45cc3d5d11?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    },
    {
      price: "Rs. 200,000.00",
      title: "SJP_0825",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a3fc7a14723b30757786e436a877f045ebbfef9286f03006e39a1184e9a14e59?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    },
    {
      price: "Rs. 100,000.00",
      title: "Bella chair and table",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a75711f95d8a1eadb5d362295cf7771c5aa7a80676d582711d1a1adc898bb056?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    },
    {
      price: "Rs. 258,800.00",
      title: "Granite square side table",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4fcc610487f8c78fea33af35cba43779ca1221c0a07a58dbf69f562fb7fe2fce?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    },
    {
      price: "Rs. 250,000.00",
      title: "Asgaard sofa",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b8239f29ee8783fa9b5709afccb04dfa8aa815cb64bcc472e2ba244ce9598fca?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    },
    {
      price: "Rs. 115,000.00",
      title: "Maya sofa three seater",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/54e8a25b3a7768bccd26d890a157a31d9f4aea8003c2e75f26829101f1f63f45?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    },
    {
      price: "Rs. 244,000.00",
      title: "Outdoor sofa set",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6365b7a95839e4cacacd9fca9af9d99dbf61bc73cf4c7a3c9ab4415a8dddf06d?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    },
  ];

  // Pagination component
  const PaginationItem: React.FC<PaginationItemProps> = ({
    value,
    isActive,
  }) => {
    const baseClasses = "px-6 rounded-xl h-[60px] w-[60px] max-md:px-5";
    const bgClass = isActive ? "bg-amber-100" : "bg-yellow-50";

    return <div className={`${baseClasses} ${bgClass}`}>{value}</div>;
  };

  // Product item component
  const ProductItem: React.FC<Product> = ({ price, title, imageUrl }) => {
    return (
      <div className="flex flex-col items-start text-black mb-8 max-md:mb-5">
        <img
          loading="lazy"
          src={imageUrl}
          alt={title}
          className="object-cover w-full aspect-square"
        />
        <div className="mt-4 text-base">{title}</div>
        <div className="mt-3 text-2xl font-medium">{price}</div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[1242px] px-4 mx-auto">
      {/* Products Grid */}
      <div className="flex flex-wrap gap-5 justify-start w-full">
        {products.map((product, index) => (
          <div
            key={index}
            className={`w-full sm:w-[48%] md:w-[23%] lg:w-[23%]`}
          >
            <ProductItem {...product} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-5 justify-center mt-10 max-md:mt-5 w-full">
        <PaginationItem value={1} isActive={true} />
        <PaginationItem value={2} isActive={false} />
        <PaginationItem value={3} isActive={false} />
        <div className="px-7 py-4 font-light bg-yellow-50 rounded-xl max-md:px-5 cursor-pointer">
          Next
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
