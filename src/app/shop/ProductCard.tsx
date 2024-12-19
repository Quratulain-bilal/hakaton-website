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
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5a077f92fd46575a030faeed1a15e49321589598aaa57f7b9d014c3e0e8de828?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
      title: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/43f827a16b96cc493c71f16a8bed4d9b4e559c569296a38f33bb59d52de4f4f0?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
    },

    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d40f9f3837e4cbe6187af96acb7a8a19e8e73bf19438dd45c83cd558c2ef23be?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
      title: "Grain coffee table",
      price: "Rs. 25,000.00",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bd8bf0d69e64700029329c65fcf004d8afe9efa67fd01bf419300017d449c7f4?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
      title: "Kent coffee table",
      price: "Rs. 25,000.00",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/284934b400d7180c1a176a87de2d90580d058f8db5f6bd81b8ee689a597a9005?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
      title: "Round coffee table_color 2",
      price: "Rs. 25,000.00",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6fd3b976f6ac21a28635d21a832c15f1a73ce743937abb833fb9c20b96c9ca8c?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
      title: "Reclaimed teak coffee table",
      price: "Rs. 25,000.00",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0daa4f02e085c7e050b601337521698dafe24a3690868f748f74a979daac7c1d?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
      title: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/98ba6cbfeda5cc022b59ca90b6963265f350d88d9b5c0875da2c405d6d7e843c?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
      title: "Plain console with teak mirror",
      price:"Rs. 25,000.00",
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
