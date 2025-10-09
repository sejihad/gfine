import { useEffect, useRef, useState } from "react";
import {
  FaCloudUploadAlt,
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaGoogle,
  FaUser,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  clearErrors,
  login,
  register,
  resetOtpMessage,
  resetOtpState,
  verifyOtp,
} from "../../actions/userAction";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    loading,
    error,
    isAuthenticated,
    message,
    otpPending,
    otpUserId,
    otpMessage,
  } = useSelector((state) => state.user);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginPasswordVisible, setLoginPasswordVisible] = useState(false);

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordVisible, setRegisterPasswordVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [profilePreview, setProfilePreview] = useState("");
  const fileInputRef = useRef(null);

  const [otp, setOtp] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isAuthenticated && !otpPending) {
      navigate("/");
    }

    if (otpMessage) {
      toast.success(otpMessage);
      dispatch(resetOtpMessage());
    }
    if (message) {
      setIsActive(false);
      toast.success(message);
    }
  }, [isAuthenticated, navigate, message, otpPending, otpMessage, dispatch]);

  useEffect(() => {
    if (performance.navigation.type === 1) {
      dispatch(resetOtpState());
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("name", registerName);
    formData.set("email", registerEmail);
    formData.set("password", registerPassword);
    if (profileImage) {
      formData.set("avatar", profileImage);
    }
    dispatch(register(formData));
  };

  const otpSubmit = (e) => {
    e.preventDefault();
    if (!otp) return toast.error("Please enter the OTP");
    dispatch(verifyOtp(otpUserId, otp));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Image size must be less than 2MB");
        return;
      }
      setProfileImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 via-blue-700 to-purple-800 p-4">
      <div
        className={`relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 ease-in-out ${
          isActive ? "h-[650px]" : "h-[600px]"
        }`}
      >
        {/* OTP Verification */}
        {otpPending ? (
          <div className="absolute inset-0 flex items-center justify-center p-8 z-30 bg-white">
            <form onSubmit={otpSubmit} className="w-full max-w-md">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  Verify OTP
                </h1>
                <p className="text-gray-600">
                  Enter the OTP sent to your email
                </p>
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  required
                  className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 pr-20"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  OTP
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Verifying...</span>
                  </div>
                ) : (
                  "Verify OTP"
                )}
              </button>
            </form>
          </div>
        ) : (
          <>
            {/* Login Form */}
            <div
              className={`absolute top-0 left-0 w-1/2 h-full flex items-center justify-center p-8 transition-all duration-700 ease-in-out z-20 ${
                isActive ? "left-[-50%] opacity-0" : "left-0 opacity-100"
              }`}
            >
              <form onSubmit={loginSubmit} className="w-full max-w-sm">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    Welcome Back
                  </h1>
                  <p className="text-gray-600">
                    Sign in to continue your journey
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 pr-12"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      ✉
                    </span>
                  </div>

                  <div className="relative">
                    <input
                      type={loginPasswordVisible ? "text" : "password"}
                      placeholder="Enter your password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setLoginPasswordVisible(!loginPasswordVisible)
                      }
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      {loginPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center my-6">
                  <label className="flex items-center space-x-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="rounded text-red-600 focus:ring-red-500"
                    />
                    <span>Remember me</span>
                  </label>
                  <Link
                    to="/password/forgot"
                    className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors duration-200"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none mb-6"
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Signing In...</span>
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </button>

                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`${import.meta.env.VITE_API_URL}/api/v1/google`}
                    className="flex items-center justify-center space-x-2 py-3 border-2 border-gray-200 rounded-xl hover:border-red-500 hover:text-red-600 transition-all duration-300 group"
                  >
                    <FaGoogle className="text-gray-500 group-hover:text-red-600 transition-colors duration-200" />
                    <span className="font-medium">Google</span>
                  </a>
                  <a
                    href={`${import.meta.env.VITE_API_URL}/api/v1/facebook`}
                    className="flex items-center justify-center space-x-2 py-3 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 group"
                  >
                    <FaFacebookF className="text-gray-500 group-hover:text-blue-600 transition-colors duration-200" />
                    <span className="font-medium">Facebook</span>
                  </a>
                </div>
              </form>
            </div>

            {/* Register Form */}
            <div
              className={`absolute top-0 left-1/2 w-1/2 h-full flex items-center justify-center p-8 transition-all duration-700 ease-in-out z-20 ${
                isActive ? "left-0 opacity-100" : "left-[100%] opacity-0"
              }`}
            >
              <form onSubmit={registerSubmit} className="w-full max-w-sm">
                <div className="text-center mb-6">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    Create Account
                  </h1>
                  <p className="text-gray-600">
                    Join us and start your career journey
                  </p>
                </div>

                <div className="flex justify-center mb-4">
                  <div
                    className="relative group cursor-pointer"
                    onClick={triggerFileInput}
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-100 to-blue-100 border-4 border-white shadow-lg overflow-hidden group-hover:shadow-xl transition-all duration-300">
                      {profilePreview ? (
                        <img
                          src={profilePreview}
                          alt="Profile preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-red-50 to-blue-50">
                          <FaUser className="text-gray-400 text-2xl" />
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaCloudUploadAlt className="text-white text-lg" />
                    </div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 pr-12"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      👤
                    </span>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 pr-12"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      ✉
                    </span>
                  </div>

                  <div className="relative">
                    <input
                      type={registerPasswordVisible ? "text" : "password"}
                      placeholder="Create a password"
                      required
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setRegisterPasswordVisible(!registerPasswordVisible)
                      }
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      {registerPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none my-6"
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Creating Account...</span>
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </button>

                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or sign up with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`${import.meta.env.VITE_API_URL}/api/v1/google`}
                    className="flex items-center justify-center space-x-2 py-3 border-2 border-gray-200 rounded-xl hover:border-red-500 hover:text-red-600 transition-all duration-300 group"
                  >
                    <FaGoogle className="text-gray-500 group-hover:text-red-600 transition-colors duration-200" />
                    <span className="font-medium">Google</span>
                  </a>
                  <a
                    href={`${import.meta.env.VITE_API_URL}/api/v1/facebook`}
                    className="flex items-center justify-center space-x-2 py-3 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 group"
                  >
                    <FaFacebookF className="text-gray-500 group-hover:text-blue-600 transition-colors duration-200" />
                    <span className="font-medium">Facebook</span>
                  </a>
                </div>
              </form>
            </div>

            {/* Toggle Panel */}
            <div className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-700 ease-in-out z-10">
              <div
                className={`absolute w-[200%] h-full bg-gradient-to-r from-red-600 to-blue-600 transition-all duration-700 ease-in-out ${
                  isActive ? "left-[-100%]" : "left-0"
                }`}
              ></div>

              <div
                className={`absolute top-0 left-0 w-1/2 h-full flex items-center justify-center p-8 transition-all duration-700 ease-in-out ${
                  isActive ? "left-0" : "left-[-100%]"
                }`}
              >
                <div className="text-center text-white">
                  <h1 className="text-3xl font-bold mb-4">New Here?</h1>
                  <p className="mb-8 opacity-90">
                    Create an account and discover a world of career
                    opportunities
                  </p>
                  <button
                    onClick={() => setIsActive(true)}
                    className="px-8 py-3 border-2 border-white text-white rounded-xl hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              <div
                className={`absolute top-0 right-0 w-1/2 h-full flex items-center justify-center p-8 transition-all duration-700 ease-in-out ${
                  isActive ? "right-[-100%]" : "right-0"
                }`}
              >
                <div className="text-center text-white">
                  <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
                  <p className="mb-8 opacity-90">
                    Enter your credentials and continue your career journey
                  </p>
                  <button
                    onClick={() => setIsActive(false)}
                    className="px-8 py-3 border-2 border-white text-white rounded-xl hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
