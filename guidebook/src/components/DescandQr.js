const DescandQr = ({ title, description, images }) => {
  return (
    <div className="bg-no-repeat pt-12">
      <div className="bg-gray-100 rounded-xl shadow-md p-6 mb-4">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-32 md:w-1/2 lg:w-1/2 rounded-xl" // Adjust these widths based on your preference
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DescandQr;
