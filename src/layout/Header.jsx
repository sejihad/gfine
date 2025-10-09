import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleNotification = () => setShowNotification(!showNotification);

  const isActiveLink = (path) => location.pathname === path;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg py-2"
            : "bg-white/90 backdrop-blur-sm shadow-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src={logo}
                alt="Logo"
                className="h-8 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              <Link
                to="/"
                className={`relative font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                  isActiveLink("/")
                    ? "text-blue-600 font-semibold bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                Home
                {isActiveLink("/") && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                )}
              </Link>

              <Link
                to="/about"
                className={`relative font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                  isActiveLink("/about")
                    ? "text-blue-600 font-semibold bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                About
                {isActiveLink("/about") && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                )}
              </Link>

              <Link
                to="/career-community"
                className={`relative font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                  isActiveLink("/career-community")
                    ? "text-blue-600 font-semibold bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                Career Community
                {isActiveLink("/career-community") && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                )}
              </Link>
            </div>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Notification Bell */}
              <div className="relative">
                <button
                  onClick={toggleNotification}
                  className="relative p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all duration-300 group"
                  aria-label="Notifications"
                >
                  <div className="relative">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:scale-110"
                    >
                      <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" />
                      <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" />
                    </svg>
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg animate-pulse">
                      3
                    </span>
                  </div>
                </button>

                {/* Notification Dropdown */}
                {showNotification && (
                  <div className="absolute right-0 top-16 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 animate-in fade-in-0 zoom-in-95">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-t-2xl flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg">Notifications</h3>
                        <p className="text-blue-100 text-sm">
                          You have 3 new notifications
                        </p>
                      </div>
                      <button
                        onClick={toggleNotification}
                        className="text-white hover:text-blue-200 text-xl font-light transition-colors"
                      >
                        ×
                      </button>
                    </div>

                    <div className="max-h-96 overflow-y-auto">
                      <div className="p-2 space-y-2">
                        {[
                          {
                            text: "New job matches your profile",
                            time: "2 min ago",
                          },
                          {
                            text: "Your application was viewed",
                            time: "1 hour ago",
                          },
                          {
                            text: "Community event tomorrow",
                            time: "3 hours ago",
                          },
                        ].map((notification, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-200 cursor-pointer group border border-transparent hover:border-gray-200"
                          >
                            <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                            <div className="flex-1">
                              <p className="text-gray-800 font-medium group-hover:text-gray-900">
                                {notification.text}
                              </p>
                              <p className="text-gray-500 text-sm mt-1">
                                {notification.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 border-t border-gray-100">
                      <button className="w-full text-center text-blue-600 hover:text-blue-700 font-medium py-2 rounded-lg hover:bg-blue-50 transition-colors">
                        View All Notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Login Button */}
              <Link
                to="/login"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Mobile Notification Icon */}
              <button
                onClick={toggleNotification}
                className="relative p-2 text-gray-600 hover:text-blue-600 rounded-lg transition-all duration-300"
                aria-label="Notifications"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" />
                  <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  3
                </span>
              </button>

              <button
                onClick={toggleMenu}
                className="flex flex-col space-y-1 p-2 focus:outline-none z-50 rounded-lg transition-all duration-300"
                aria-label="Toggle menu"
              >
                <span
                  className={`w-6 h-0.5 bg-blue-600 transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-blue-600 transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-blue-600 transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-500 ${
              isOpen ? "opacity-50" : "opacity-0"
            }`}
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Menu Content */}
          <div
            className={`absolute top-0 right-0 h-full w-80 bg-gradient-to-b from-blue-600 to-blue-800 shadow-2xl transform transition-transform duration-500 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full pt-20 pb-8 px-6">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* Navigation Links */}
              <div className="space-y-4 flex-1">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About" },
                  { path: "/career-community", label: "Career Community" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg font-semibold transition-all duration-300 py-4 px-4 rounded-xl ${
                      isActiveLink(item.path)
                        ? "text-white bg-white/20 border border-white/30"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="space-y-4 pt-8 border-t border-white/20">
                {/* Mobile Login Button */}
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-white/20 backdrop-blur-sm text-white py-3 px-6 rounded-xl font-semibold text-center border border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Notification Modal */}
      {showNotification && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden animate-in slide-in-up duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">Notifications</h3>
                <p className="text-blue-100 text-sm">
                  You have 3 new notifications
                </p>
              </div>
              <button
                onClick={toggleNotification}
                className="text-white hover:text-blue-200 text-xl font-light transition-colors"
              >
                ×
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-4 space-y-3">
              {[
                {
                  text: "New job matches your profile",
                  time: "2 min ago",
                },
                {
                  text: "Your application was viewed",
                  time: "1 hour ago",
                },
                {
                  text: "Community event tomorrow",
                  time: "3 hours ago",
                },
              ].map((notification, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-xl transition-all duration-200 cursor-pointer border border-transparent hover:border-gray-200"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">
                      {notification.text}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      {notification.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-100">
              <button className="w-full text-center text-blue-600 hover:text-blue-700 font-medium py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View All Notifications
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
