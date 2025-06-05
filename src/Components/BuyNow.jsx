import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const BuyNow = () => {
  // const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const auth = getAuth();
  const firebaseUser = auth.currentUser;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
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



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed:", formData);
    alert("Your order has been placed successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Complete Your Purchase
        </h1>

        {/* Car Details */}
        <div className="mb-6">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-64 object-cover rounded-md shadow-md"
          />
          <h2 className="text-2xl font-semibold text-gray-900 mt-4">
            {car.name}
          </h2>
          <p className="text-gray-600 text-sm mt-2">{car.description}</p>
          <span className="text-lg font-bold text-gray-900 block mt-2">
            {car.price}
          </span>
        </div>

        {/* User Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-red-600 transition duration-300 hover:scale-105"
          >
            Confirm Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyNow;
