// components/Breadcrumb.tsx

const Breadcrumb = () => {
  return (
    <nav className="flex gap-3 items-center px-20 py-8 bg-white max-md:px-5">
      {/* Static breadcrumb items */}
      <div className="flex items-center">
        <span>Home</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
          alt="breadcrumb separator"
          className="w-5 h-5 mx-2"
        />
      </div>

      <div className="flex items-center">
        <span>Shop</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
          alt="breadcrumb separator"
          className="w-5 h-5 mx-2"
        />
      </div>

      <div className="flex items-center">
        <span>Asgaard Sofa</span>
      </div>
    </nav>
  );
};

export default Breadcrumb;
