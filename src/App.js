import React, { useEffect } from 'react'
import { BrowserRouter,Routes,Route, useLocation } from 'react-router-dom';
import HomePage from './Components/HomePage'
import Footer from './Components/Footer';
import Faq from './Components/Faq';
import Home from './Components/Home';
import Cars from './Components/Cars';
import CarBlogs from './Components/CarBlogs';
import AboutUs from './Components/Aboutus';
import ContactUs from './Components/ContactUs';
import WhyChooseUs from './Components/WhyChooseUs';
import SignInUp from './Components/SignInUp';
import Error from './Components/Error';
import MyProfile from './Components/MyProfile';
import ProtectedRoute from './Components/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import BuyNow from './Components/BuyNow';
import CarDetails from './Components/CarDetails';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  },[location]);

  return null;
}


const App = () => {
  return (
    <div>
  <BrowserRouter>
  <ScrollToTop/>
  <ToastContainer className="mt-14"
  autoClose={3000}
  closeOnClick
  pauseOnHover
  draggable
  theme="light"
  toastClassName="shadow-lg rounded-lg"
  progressClassName="bg-gradient-to-r from-red-500 to-red-600"
/>
  <HomePage/>
  <Routes>
  <Route path="/profile" element={<ProtectedRoute> <MyProfile /> </ProtectedRoute> } />
  <Route path="/buy-now" element={<ProtectedRoute> <BuyNow/> </ProtectedRoute>} />
    <Route path="/" element={<Home/>} />
    {/* <Route path="/profile" element={<MyProfile/>} /> */}
    <Route path="/faqs" element={<Faq/>} />
    <Route path="/cars" element={<Cars/>} />
    <Route path="/blogs" element={<CarBlogs/>} />
    <Route path="/about" element={<AboutUs/>} />
    <Route path="/contact" element={<ContactUs/>} />
    <Route path="/whyus" element={<WhyChooseUs/>} />
    <Route path="/car-details" element={<CarDetails/>} />
    <Route path="/account" element={<SignInUp/>} />
    {/* <Route path="/error" element={<Error/>} /> */}
    <Route path="*" element={<Error/>} />
  </Routes>
  <Footer />
  </BrowserRouter>
  
    </div>
  )
}

export default App