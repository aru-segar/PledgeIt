const sectors = [
  { icon: "https://img.icons8.com/ios/50/heart-with-pulse--v1.png", label: "Health" },
  { icon: "https://img.icons8.com/ios/50/year-of-dog.png", label: "Animals" },
  { icon: "https://img.icons8.com/ios/50/nature.png", label: "Nature" },
  { icon: "https://img.icons8.com/ios/50/tsunami--v4.png", label: "Disaster Relief" },
  { icon: "https://img.icons8.com/ios/50/000000/book.png", label: "Education" },
  { icon: "https://img.icons8.com/ios/50/000000/wheelchair.png", label: "Disabilities" },
  { icon: "https://img.icons8.com/ios/50/000000/food.png", label: "Hunger" },
  { icon: "https://img.icons8.com/ios/50/elderly-person.png", label: "Elderly Care" },
  { icon: "https://img.icons8.com/ios/50/children.png", label: "Child Care" },

];

const Sectors = () => {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <h3 className="text-2xl font-semibold text-gray-500">Sectors we are focusing on</h3>
      <div className="flex flex-wrap justify-center mt-6 space-x-10" >
        {sectors.map((sector, idx) => (
          <div key={idx} className="text-center">
            <img
              src={sector.icon}
              alt={sector.label}
              className="w-11 h-11 mx-auto" 
              style={{
                filter: "invert(28%) sepia(1) hue-rotate(-410deg) saturate(700%)", // Change the color with filter
              }}
              
            />
            <p className="text-gray-700 mt-2">{sector.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sectors;
