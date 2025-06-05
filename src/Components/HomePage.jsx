import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";

const HomePage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    // HomePage.jsx
    const handleAuthChange = (user) => {
      const tokenExists = localStorage.getItem("token");
      const isAuthenticated = !!user || !!tokenExists;
      setIsSignedIn(isAuthenticated);
    
      if (user) {
        localStorage.setItem("firebaseUser", JSON.stringify(user));
        // localStorage.setItem("token", user.accessToken);
        localStorage.setItem("userName", user.displayName || "User");
    
        const firstLogin = sessionStorage.getItem("firstLogin");
    
        // Show welcome toast only if firstLogin is NOT set
        if (!firstLogin) {
          toast.success(`Welcome back, ${user.displayName || "User"}!`);
          sessionStorage.setItem("firstLogin", "true");
        }
      } else {
        localStorage.removeItem("firebaseUser");
        // localStorage.removeItem("token");
        localStorage.removeItem("userName");
        sessionStorage.removeItem("firstLogin"); // Reset on logout
      }
    };
    
    

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      handleAuthChange(user);
      // window.dispatchEvent(new Event("authStateChange"));
    });

    const handleCustomAuthChange = () => {
      const user = auth.currentUser;
      handleAuthChange(user);
    };

    window.addEventListener("authStateChange", handleCustomAuthChange);

    return () => {
      unsubscribe();
      window.removeEventListener("authStateChange", handleCustomAuthChange);
    };
  }, [auth]);

  // HomePage.jsx
  const handleSignout = useCallback(async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      sessionStorage.clear(); // Clear sessionStorage
      localStorage.removeItem("firebaseUser");
      localStorage.removeItem("user");
      localStorage.removeItem("selectedCar");
      setIsSignedIn(false);
      toast.info("Logged out successfully");
      navigate("/");
    } catch (error) {
      // Handle error
    }
  }, [auth, navigate]);

  const toggleDropdown = useCallback(
    () => setDropdownOpen((prev) => !prev),
    []
  );

  return (
    <div>
      {/* Sticky Transparent Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md shadow-md z-50 transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center"
              aria-label="Company homepage"
            >
              <img
                src="/Images/image.png"
                className="h-14 w-auto"
                alt="Company logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {["Home", "Cars", "Blogs", "FAQs", "About", "Contact"].map(
                (item, idx) =>
                  idx === 0 ? (
                    <Link
                      key={item}
                      to={`/`}
                      className="text-gray-900 hover:text-red-600 text-lg font-medium transition-colors"
                    >
                      {item}
                    </Link>
                  ) : (
                    <Link
                      key={item}
                      to={`/${item.toLowerCase()}`}
                      className="text-gray-900 hover:text-red-600 text-lg font-medium transition-colors"
                    >
                      {item}
                    </Link>
                  )
              )}
            </div>

            {/* Auth Controls (Large Screens) */}
            <div className="hidden lg:flex items-center gap-6">
              {isSignedIn ? (
                <>
                  <button
                    onClick={handleSignout}
                    className="px-6 py-2.5 text-sm font-medium text-white bg-black hover:bg-white hover:text-black rounded-full transition-colors"
                    aria-label="Sign out"
                  >
                    Sign Out
                  </button>
                  <Link to="/profile">
                    <img
                      src="/images/man.png"
                      alt="User avatar"
                      className="h-11 w-10 rounded-full"
                    />
                  </Link>
                </>
              ) : (
                <Link
                  to="/account"
                  className="px-6 py-2.5 text-sm font-medium text-white bg-black hover:bg-white hover:text-black rounded-full transition-colors"
                >
                  Sign In
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleDropdown}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition"
              aria-label="Toggle navigation menu"
            >
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden fixed top-20 left-0 w-full bg-white/40 backdrop-blur-xl shadow-xl z-50 transition-all duration-300 ease-in-out transform ${
          dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-6 py-4 space-y-4 border-t border-gray-300">
          {["Home", "Cars", "Blogs", "FAQs", "About", "Contact"].map(
            (item, idx) =>
              idx === 0 ? (
                <Link
                  key={item}
                  to={`/`}
                  className="block text-gray-900 hover:text-red-600 text-lg font-medium transition-colors"
                  onClick={() => setDropdownOpen(false)}
                >
                  {item}
                </Link>
              ) : (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="block text-gray-900 hover:text-red-600 text-lg font-medium transition-colors"
                  onClick={() => setDropdownOpen(false)}
                >
                  {item}
                </Link>
              )
          )}

          {/* Auth Controls inside Dropdown */}
          <div className="border-t border-gray-300 pt-4">
            {isSignedIn ? (
              <>
                <Link
                  to="/profile"
                  className="block text-gray-900 hover:text-red-600 text-lg font-medium py-2 transition-colors"
                  onClick={() => setDropdownOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={handleSignout}
                  className="w-full text-left text-gray-900 hover:text-red-600 text-lg font-medium py-2 transition-colors"
                  aria-label="Sign out"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/account"
                className="block text-gray-900 hover:text-red-600 text-lg font-medium py-2 transition-colors"
                onClick={() => setDropdownOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Spacing to prevent content from hiding behind navbar */}
      <div className="pt-16"></div>
    </div>
  );
};

export default HomePage;
