import React from "react";
import { useNavigate } from "react-router-dom";

const cars = [
  {
    name: "DEFENDER",
    description:
      "The Land Rover Defender is an iconic SUV renowned for its ruggedness, durability, and off-road capabilities. This legendary vehicle combines classic design elements with modern technology to create a versatile and reliable all-terrain champion.",
    price: "$49,000",
    image:
      "https://images.unsplash.com/photo-1612563830298-e309dab9f129?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "SUBARU WRX",
    description:
      "The Subaru WRX is a high-performance compact sports sedan known for its rally heritage and impressive driving dynamics. With a blend of power, precision, and practicality, the WRX offers an exhilarating driving experience both on and off the road.",
    price: "$20,000",
    image:
      "https://images.unsplash.com/photo-1616868767157-fb8107838d45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "SKYLINE R34",
    description:
      "The Nissan Skyline R34, also known as the Nissan GT-R R34, is an iconic sports car that has earned a legendary status among car enthusiasts and collectors.",
    price: "$35,000",
    image:
      "https://images.unsplash.com/photo-1732814752688-9fba34a92f4a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "AMBASSADOR",
    description:
      "The Hindustan Ambassador, often referred to as the King of Indian roads, is an iconic automobile that was manufactured by Hindustan Motors from 1957 to 2014. Based on the Morris Oxford Series III model.",
    price: "$30,000",
    image:
      "https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "URUS",
    description:
      "The Lamborghini Urus is a high-performance luxury SUV that merges the soul of a super sports car with the practical functionality of an SUV. Introduced in December 2017, the Urus is the first modern Lamborghini SUV.",
    price: "$50,000",
    image:
      "https://images.unsplash.com/photo-1575650681837-c0ca3b1e7275?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "IMPALA",
    description:
      "The Chevrolet Impala is a full-size sedan that has been a staple in the American automotive landscape since its introduction in 1958. Known for its spacious interior, smooth ride, and classic design.",
    price: "$55,000",
    image:
      "https://images.unsplash.com/photo-1587750113469-d2ba02441e8f?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Cars = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-black text-white text-center py-10">
        <h1 className="text-4xl font-bold uppercase tracking-widest">
          Choose Your Favourite Car !
        </h1>
      </header>

      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden "
          >
            <div className="w-full h-56 overflow-hidden">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover transform transition duration-1000 hover:scale-125 hover:shadow-2xl"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {car.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{car.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">
                  {car.price}
                </span>
                <button
                  onClick={() => navigate("/car-details", { state: { car } })}
                  className="bg-black text-white px-5 py-2 rounded-md hover:bg-red-600 transition duration-300 hover:scale-105"
                >
                  Know More
                </button>
                <button
                  onClick={() => navigate("/buy-now", { state: { car } })}
                  className="bg-black text-white px-5 py-2 rounded-md hover:bg-red-600 transition duration-300 hover:scale-105"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
