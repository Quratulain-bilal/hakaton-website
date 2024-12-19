// ServiceCard component with proper types for title and description
const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center max-w-full p-6 rounded-lg shadow-md">
      <div className="self-start text-3xl font-medium text-black">{title}</div>
      <div className="text-xl text-neutral-400">{description}</div>
    </div>
  );
};

// SimpleShopPage component
const SimpleShopPage = () => {
  // Typing the services array properly
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
    <section className="px-5 py-24 mt-24 w-full bg-red-50">
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default SimpleShopPage;
