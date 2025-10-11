import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const socials = [
    {
      icon: <FaFacebookF />,
      bg: "bg-blue-600",
      hover: "hover:bg-blue-700",
      href: "https://facebook.com",
    },
    {
      icon: <FaYoutube />,
      bg: "bg-red-600",
      hover: "hover:bg-red-700",
      href: "https://youtube.com",
    },
    {
      icon: <FaInstagram />,
      bg: "bg-gradient-to-r from-purple-600 to-pink-600",
      hover: "hover:from-purple-700 hover:to-pink-700",
      href: "https://instagram.com",
    },
    {
      icon: <FaLinkedinIn />,
      bg: "bg-blue-500",
      hover: "hover:bg-blue-600",
      href: "https://linkedin.com",
    },
  ];
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600 rounded-full filter blur-3xl opacity-10 -translate-x-16 -translate-y-8"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600 rounded-full filter blur-3xl opacity-10 translate-x-16 translate-y-16"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* About Us Section */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                GCCB
              </span>
            </h3>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              We are a GCCB dedicated to helping businesses grow through
              innovative solutions and strategic thinking. Let's build something
              amazing together.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 lg:w-12 lg:h-12 ${social.bg} ${social.hover} rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                >
                  <span className="text-sm lg:text-base">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold">
              <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h3>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-red-700 transition-all duration-300 mt-1">
                  <FaMapMarkerAlt className="text-white text-xs lg:text-sm" />
                </div>
                <div>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    123 Business Ave, Suite 456
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300 mt-1">
                  <FaPhoneAlt className="text-white text-xs lg:text-sm" />
                </div>
                <div>
                  <p className="text-gray-300 text-base lg:text-lg group-hover:text-white transition-colors duration-300">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:from-blue-700 group-hover:to-red-700 transition-all duration-300 mt-1">
                  <FaEnvelope className="text-white text-xs lg:text-sm" />
                </div>
                <div>
                  <p className="text-gray-300 text-base lg:text-lg group-hover:text-white transition-colors duration-300">
                    info@creativeagency.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-center lg:text-left">
            <p className="text-gray-400 text-sm lg:text-base order-2 lg:order-1">
              &copy; {new Date().getFullYear()} GCCB. All Rights Reserved.
            </p>

            <div className="flex items-center gap-2 order-1 lg:order-2">
              <span className="text-gray-400 text-sm lg:text-base">
                Developed By
              </span>
              <a
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent font-bold text-base lg:text-lg hover:scale-105 transition-transform duration-300"
              >
                GCCB - IT UNIT
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
