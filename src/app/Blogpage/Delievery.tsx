const features = [
  {
    title: "Free Delivery",
    description: "For all orders over Rs. 50,000, consectetur adipiscing elit.",
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

const FeatureComponent = ({ feature }: { feature: any }) => (
  <div className="flex flex-col grow text-center max-md:mt-10">
    <div className="self-center text-3xl font-medium text-black">
      {feature.title}
    </div>
    <div className="text-xl text-neutral-400">{feature.description}</div>
  </div>
);

const FeaturesSection = () => (
  <div className="flex gap-10 px-20 py-24 w-full bg-yellow-50 max-md:px-5 max-md:flex-col max-md:py-16">
    {features.map((feature, index) => (
      <FeatureComponent key={index} feature={feature} />
    ))}
  </div>
);

export default FeaturesSection;
