import * as React from "react";
import Imagehead from "./Imagehead";

const ProductCard: React.FC<{
  image: string;
  title: string;
  price: string;
}> = ({ image, title, price }) => {
  return (
    <div className="flex flex-col items-start text-black">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-contain w-full aspect-square"
      />
      <div className="mt-3.5 text-base">{title}</div>
      <div className="mt-3 text-2xl font-medium">{price}</div>
    </div>
  );
};

const ServiceCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center max-w-full p-6 rounded-lg shadow-md">
      <div className="self-start text-3xl font-medium text-black">{title}</div>
      <div className="text-xl text-neutral-400">{description}</div>
    </div>
  );
};

const SimpleShopPage: React.FC = () => {
  const products: any[] = []; // Empty product array, no products shown

  const services = [
    {
      title: "Free Delivery",
      description: "For all orders over $50, consectetur adipiscing elit.",
    },
    {
      title: "90 Days Return",
      description: "If goods have problems, consectetur adipiscing elit.",
    },
    {
      title: "Secure Payment",
      description: "100% secure payment, consectetur adipiscing elit.",
    },
  ];

  return (
    <><div
    id="shop11">
      <div>
        <Imagehead />
      </div>
      <div className="flex flex-col">
        {/* Main content section */}
        <main className="px-5 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Since products is empty, no ProductCard will be rendered */}
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </main>

        {/* Services section */}
        <section className="px-5 py-24 mt-24 w-full bg-red-50">
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>
      </div>
      </div>
    </>
  );
};

export default SimpleShopPage;
