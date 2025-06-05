import React, { lazy } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChooseUs = lazy(() => import("./WhyChooseUs"));

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  // Reusable Components
  const SectionHeader = ({ subtitle, title }) => (
    <div className="bg-black text-white text-center py-10 px-4 mt-4">
      <h5 className="text-sm font-semibold uppercase tracking-wide opacity-80 mb-2">
        {subtitle}
      </h5>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">{title}</h2>
    </div>
  );

  const CustomerCard = ({ name, img, text }) => (
    <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-6">
      <img
        src={img}
        alt={`Customer ${name}`}
        className="w-24 h-28 rounded-full border-4 border-gray-300 shadow-md"
        loading="lazy"
      />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-gray-600 text-sm mt-2">{text}</p>
    </div>
  );

  const CarCategory = ({ img, alt, title, to }) => (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg">
      <Link to={to} className="block">
        <img
          src={img}
          alt={alt}
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-20">
          <p className="text-white text-xl font-semibold tracking-wide transform group-hover:scale-105 transition-transform">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );

  // Data Arrays
  const categories = [
    {
      img: "https://images.unsplash.com/photo-1621846228181-e30e683252ee",
      title: "Sports Cars",
      to: "/cars",
    },
    {
      img: "https://images.unsplash.com/photo-1611001871555-1a09975c1975",
      title: "SUVs",
      to: "/cars",
    },
    {
      img: "https://images.unsplash.com/photo-1627008450028-f88d6174ca67",
      title: "Sedans",
      to: "/cars",
    },
    {
      img: "https://images.unsplash.com/photo-1610831176233-ff0dbf203815",
      title: "Classic Cars",
      to: "/cars",
    },
  ];

  const customers = [
    {
      id: 1,
      name: "Michael Chen",
      img: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
      text: "Exceptional service and quality selection. Highly recommend! ⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      text: "Best car buying experience I've ever had. Truly professional! ⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      name: "Emily Davis",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      text: "The selection and service were beyond my expectations. ⭐⭐⭐⭐⭐",
    },
    {
      id: 4,
      name: "James Smith",
      img: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
      text: "Superb cars and seamless buying experience! ⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <section aria-label="Featured vehicles" className="relative">
        <div className="overflow-hidden">
          <div className="relative">
            <img
              src="/Images/slider.jpg"
              alt="Featured vehicle"
              className="w-full h-[600px] object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to GearShift
              </h2>
              <p className="text-xl md:text-2xl max-w-2xl">
                Premium automotive experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionHeader title="Our Best Sellers" />
      <section aria-label="Featured vehicles" className="relative">
        <Slider {...settings} className="overflow-hidden">
          {[
            {
              img: "/Images/mustang.jpg",
              title: "Ford Mustang GT",
              subtitle: "Raw power meets modern luxury",
            },
            {
              img: "/Images/volvo.png",
              title: "Volvo S60",
              subtitle: "UnMatched Saftey",
            },
            {
              img: "/Images/ae.png",
              title: "Toyota AE86",
              subtitle: "Iconic driving experience",
            },
          ].map((slide, index) => (
            <div key={index} className="relative">
              <img
                src={slide.img}
                alt=""
                className="w-full h-[600px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl max-w-2xl">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Curated Automotive Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed p-3">
              At GearShift, we combine decades of industry expertise with
              cutting-edge technology to deliver unparalleled automotive
              solutions. Our passion for innovation drives us to constantly
              redefine the car ownership experience.
            </p>
            <Link
              to="/cars"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-300"
            >
              Explore Collection
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1542362567-b07e54358753"
              alt="Luxury car interior"
              className="rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <SectionHeader
        subtitle="Explore Our Collection"
        title="Find Your Perfect Match"
      />
      <section className="max-w-8xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {categories.map((category, index) => (
          <CarCategory key={index} {...category} />
        ))}
      </section>

      {/* Clients Section */}
      <SectionHeader
        subtitle="Client Experiences"
        title="What Our Customers Say"
      />

      <section className="max-w-3xl mx-auto py-12">
        {/* <h2 className="text-center text-3xl font-bold mb-8">What Our Customers Say</h2> */}
        <Slider {...settings}>
          {customers.map((customer) => (
            <div key={customer.id} className="px-4">
              <CustomerCard {...customer} />
            </div>
          ))}
        </Slider>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </div>
  );
};

export default Home;
