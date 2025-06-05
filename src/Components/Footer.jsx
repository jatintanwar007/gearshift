import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center lg:text-left">
          {/* About Section */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-xl">ABOUT</p>
            <Link
              to="/about"
              className="text-sm text-zinc-400 hover:text-white"
            >
              About us
            </Link>
            <Link to="/" className="text-sm text-zinc-400 hover:text-white">
              Careers With Us
            </Link>
            <Link to="/" className="text-sm text-zinc-400 hover:text-white">
              Terms & Conditions
            </Link>
            <Link to="/" className="text-sm text-zinc-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link
              to="/error"
              className="text-sm text-zinc-400 hover:text-white"
            >
              Corporate Policies
            </Link>
            <Link
              to="/error"
              className="text-sm text-zinc-400 hover:text-white"
            >
              Investors
            </Link>
            <Link to="/faqs" className="text-sm text-zinc-400 hover:text-white">
              FAQs
            </Link>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-xl">CONTACT US</p>
            <Link
              to="/contact"
              className="text-sm text-zinc-400 hover:text-white"
            >
              Feedback
            </Link>
            <Link
              to="/contact"
              className="text-sm text-zinc-400 hover:text-white"
            >
              Contact us
            </Link>
            <Link
              to="/contact"
              className="text-sm text-zinc-400 hover:text-white"
            >
              Advertise with Us
            </Link>
            <Link
              to="/contact"
              className="text-sm text-zinc-400 hover:text-white"
            >
              Become Partner Dealer
            </Link>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-xl font-semibold mb-3">Contact Details</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="text-red-600 w-5 h-5" />
                <p>+1 234 567 890</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-red-600 w-5 h-5" />
                <p>contact@gearshift.com</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-red-600 w-5 h-5" />
                <p>230, Jaipur, Rajasthan</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-3 items-center">
            <p className="font-semibold text-xl">SOCIAL MEDIA</p>
            <div className="flex gap-4">
              <Link to="https://www.instagram.com/" target="_blank">
                <img
                  src="/Images/instagram.png"
                  className="h-7 transition-transform transform hover:scale-110"
                  alt="Instagram"
                />
              </Link>
              <Link to="https://www.facebook.com/" target="_blank">
                <img
                  src="/Images/facebook.png"
                  className="h-7 transition-transform transform hover:scale-110"
                  alt="Facebook"
                />
              </Link>
              <Link to="https://x.com/?lang=en" target="_blank">
                <img
                  src="/Images/twitter.png"
                  className="h-7 bg-white rounded transition-transform transform hover:scale-110"
                  alt="Twitter"
                />
              </Link>
              <Link to="https://www.youtube.com/" target="_blank">
                <img
                  src="/Images/youtube.png"
                  className="h-7 transition-transform transform hover:scale-110"
                  alt="YouTube"
                />
              </Link>
            </div>
          </div>

          {/* Try Our App */}
          <div className="flex flex-col gap-3 items-center">
            <p className="font-semibold text-xl">TRY OUR APP</p>
            <div className="flex flex-col gap-2">
              <Link
                to="https://play.google.com/store/games?hl=en&pli=1"
                target="_blank"
              >
                <img
                  src="/Images/playstore.png"
                  className="h-10 transition-transform transform hover:scale-110"
                  alt="Google Play Store"
                />
              </Link>
              <Link to="https://www.apple.com/in/app-store/" target="_blank">
                <img
                  src="/Images/app-store.png"
                  className="h-10 transition-transform transform hover:scale-110"
                  alt="Apple App Store"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-zinc-400">
            &copy; 2025 GearShift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
