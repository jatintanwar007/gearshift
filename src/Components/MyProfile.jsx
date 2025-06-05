import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";

const MyProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const auth = getAuth();
  const firebaseUser = auth.currentUser;

  useEffect(() => {
    const fetchManualUserProfile = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Handle both response formats
        const userDetails = data.user ? data.user : data;
        
        if (!userDetails.fullname || !userDetails.email) {
          throw new Error("Invalid user data format");
        }

        setUserData({
          fullname: userDetails.fullname,
          email: userDetails.email
        });

      } catch (error) {
        console.error("Profile fetch error:", error);
        toast.error("Failed to load profile data");
        localStorage.removeItem("token");
        navigate("/account");
      } finally {
        setLoading(false);
      }
    };

    if (firebaseUser) {
      // Firebase user
      setUserData({ 
        fullname: firebaseUser.displayName, 
        email: firebaseUser.email 
      });
      setLoading(false);
    } else if (token) {
      // Manual login user
      fetchManualUserProfile();
    } else {
      // No valid session
      navigate("/account");
    }
  }, [token, firebaseUser, navigate]);


  if (loading) {
    return <div className="text-center py-20">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>

        {userData ? (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img
                src="/Images/man.png"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-red-500"
              />
              <div>
                <h2 className="text-2xl font-semibold">{userData.fullname}</h2>
                <p className="text-gray-600">{userData.email}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Account Details</h3>
                <p>
                  <span className="font-medium">User Type:</span>{" "}
                  {firebaseUser ? "Google User" : "Registered User"}
                </p>
                <p className="mt-2">
                  <span className="font-medium">Registration Date:</span>{" "}
                  {new Date().toLocaleDateString()}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Actions</h3>
                <div className="space-y-3">
                  <Link
                    to="/profile/edit"
                    className="block w-full text-center bg-black text-white py-2 rounded hover:bg-red-600 transition"
                  >
                    Edit Profile
                  </Link>
                  {firebaseUser ? "" : <button
                    onClick={() => toast.info("Feature coming soon!")}
                    className="block w-full text-center bg-gray-200 text-black py-2 rounded hover:bg-gray-300 transition"
                  >
                    Change Password
                  </button>}
                  
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">Failed to load profile data</p>
            <Link to="/contact" className="text-red-600 hover:underline">
              Contact Support
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;