function FeatureContainer({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-xl transition duration-300 hover:shadow-2xl hover:scale-[1.03] border border-gray-100">
      
      {/* Icon/Logo */}
      <div className="text-4xl text-blue-600 mb-4">
        {icon} 
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default FeatureContainer;