import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const carDetails = [
  {
    name: "DEFENDER",
    description:
      "The Land Rover Defender is an iconic SUV renowned for its ruggedness, durability, and off-road capabilities. This legendary vehicle combines classic design elements with modern technology to create a versatile and reliable all-terrain champion. The Land Rover Defender is an iconic SUV renowned for its ruggedness, durability, and off-road capabilities. This legendary vehicle combines classic design elements with modern technology to create a versatile and reliable all-terrain champion.",
    image:
      "https://images.unsplash.com/photo-1612563830298-e309dab9f129?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "SUBARU WRX",
    description:
      "The Subaru WRX is a high-performance compact sports sedan known for its rally heritage and impressive driving dynamics. With a blend of power, precision, and practicality, the WRX offers an exhilarating driving experience both on and off the road. The Subaru WRX is a high-performance compact sports sedan known for its rally heritage and impressive driving dynamics. With a blend of power, precision, and practicality, the WRX offers an exhilarating driving experience both on and off the road.",
    image:
      "https://images.unsplash.com/photo-1616868767157-fb8107838d45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
   {
    name: "SKYLINE R34",
    description:
      "The Nissan Skyline R34, also known as the Nissan GT-R R34, is an iconic sports car that has earned a legendary status among car enthusiasts and collectors.",
    image:
      "https://images.unsplash.com/photo-1732814752688-9fba34a92f4a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "AMBASSADOR",
    description:
      "The Hindustan Ambassador, often referred to as the King of Indian roads, is an iconic automobile that was manufactured by Hindustan Motors from 1957 to 2014. Based on the Morris Oxford Series III model.",
    image:
      "https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "URUS",
    description:
      "The Lamborghini Urus is a high-performance luxury SUV that merges the soul of a super sports car with the practical functionality of an SUV. Introduced in December 2017, the Urus is the first modern Lamborghini SUV.",
    image:
      "https://images.unsplash.com/photo-1575650681837-c0ca3b1e7275?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "IMPALA",
    description:
      "The Chevrolet Impala is a full-size sedan that has been a staple in the American automotive landscape since its introduction in 1958. Known for its spacious interior, smooth ride, and classic design.",
    image:
      "https://images.unsplash.com/photo-1587750113469-d2ba02441e8f?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CarDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [car, setCar] = useState(
    location.state?.car || JSON.parse(localStorage.getItem("selectedCar"))
  );

  // Save car to localStorage when the page loads
  useEffect(() => {
    if (car) {
      localStorage.setItem("selectedCar", JSON.stringify(car));
    }
  }, [car]);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl text-red-500">No car selected!</h2>
      </div>
    );
  }
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-2">
      <div className=" max-w-5xl ">
        <div className="mb-6">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-64 object-cover rounded-md shadow-md"
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          {car.name} Details
        </h1>
        <p className="text-gray-600 mb-4">{car.description}</p>
        <button
          onClick={() => navigate("/buy-now")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
