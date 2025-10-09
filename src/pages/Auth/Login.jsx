import { useEffect, useRef, useState } from "react";
import { FaCloudUploadAlt, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
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
    <div className="min-h-screen mt-20 flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 p-4">
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[600px]">
        {/* OTP Verification */}
        {otpPending ? (
          <div className="absolute inset-0 flex items-center justify-center p-8 z-30 bg-white">
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-100 to-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔐</span>
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent mb-2">
                  Verify OTP
                </h1>
                <p className="text-gray-600">
                  Enter the 6-digit OTP sent to your email address
                </p>
              </div>

              <form onSubmit={otpSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    required
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-center text-lg font-semibold tracking-widest"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Verifying OTP...</span>
                    </div>
                  ) : (
                    "Verify & Continue"
                  )}
                </button>
              </form>

              {/* <div className="text-center mt-6">
                <p className="text-gray-500 text-sm">
                  Didn't receive OTP?{" "}
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Resend OTP
                  </button>
                </p>
              </div> */}
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Side - Login */}
            <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
              <div className="w-full max-w-md">
                <div className="text-center mb-8">
                  <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent mb-3">
                    Welcome Back
                  </h1>
                  <p className="text-gray-600 text-lg">
                    Sign in to continue your career journey
                  </p>
                </div>

                <form onSubmit={loginSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 pl-12"
                      />
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
                        ✉️
                      </span>
                    </div>

                    <div className="relative">
                      <input
                        type={loginPasswordVisible ? "text" : "password"}
                        placeholder="Enter your password"
                        required
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 pl-12 pr-12"
                      />
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
                        🔒
                      </span>
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

                  <div className="flex justify-between items-center">
                    <label className="flex items-center space-x-2 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        className="rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span>Remember me</span>
                    </label>
                    <Link
                      to="/password/forgot"
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
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

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  {/* <div className="grid grid-cols-2 gap-4">
                    <a
                      href={`${import.meta.env.VITE_API_URL}/api/v1/google`}
                      className="flex items-center justify-center space-x-3 py-3 border-2 border-gray-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-300 group"
                    >
                      <FaGoogle className="text-gray-500 group-hover:text-red-600 text-lg transition-colors duration-200" />
                      <span className="font-medium text-gray-700 group-hover:text-red-600">
                        Google
                      </span>
                    </a>
                    <a
                      href={`${import.meta.env.VITE_API_URL}/api/v1/facebook`}
                      className="flex items-center justify-center space-x-3 py-3 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group"
                    >
                      <FaFacebookF className="text-gray-500 group-hover:text-blue-600 text-lg transition-colors duration-200" />
                      <span className="font-medium text-gray-700 group-hover:text-blue-600">
                        Facebook
                      </span>
                    </a>
                  </div> */}

                  {/* <div className="text-center mt-6">
                    <p className="text-gray-600">
                      Don't have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setIsActive(true)}
                        className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                      >
                        Sign Up
                      </button>
                    </p>
                  </div> */}
                </form>
              </div>
            </div>

            {/* Right Side - Register */}
            <div
              className={`flex-1 bg-gradient-to-br from-blue-600 to-red-600 transition-all duration-500 ease-in-out ${
                isActive ? "lg:block" : "lg:block"
              }`}
            >
              <div className="flex items-center justify-center h-full p-8 lg:p-12">
                <div className="w-full max-w-md text-white">
                  <div className="text-center mb-8">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-3">
                      Hello, Friend!
                    </h1>
                    <p className="text-blue-100 text-lg opacity-90">
                      Enter your personal details and start your journey with us
                    </p>
                  </div>

                  <form onSubmit={registerSubmit} className="space-y-6">
                    <div className="flex justify-center">
                      <div
                        className="relative group cursor-pointer"
                        onClick={triggerFileInput}
                      >
                        <div className="w-24 h-24 rounded-full bg-white/20 border-4 border-white/30 shadow-lg overflow-hidden group-hover:shadow-xl transition-all duration-300">
                          {profilePreview ? (
                            <img
                              src={profilePreview}
                              alt="Profile preview"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <FaUser className="text-white text-2xl" />
                            </div>
                          )}
                        </div>
                        <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <FaCloudUploadAlt className="text-white text-xl" />
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
                          placeholder="Full Name"
                          required
                          value={registerName}
                          onChange={(e) => setRegisterName(e.target.value)}
                          className="w-full px-4 py-4 bg-white/20 border-2 border-white/30 rounded-xl focus:outline-none focus:border-white focus:ring-4 focus:ring-white/20 transition-all duration-300 text-white placeholder-white/70 pl-12"
                        />
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 text-lg">
                          👤
                        </span>
                      </div>

                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Email Address"
                          required
                          value={registerEmail}
                          onChange={(e) => setRegisterEmail(e.target.value)}
                          className="w-full px-4 py-4 bg-white/20 border-2 border-white/30 rounded-xl focus:outline-none focus:border-white focus:ring-4 focus:ring-white/20 transition-all duration-300 text-white placeholder-white/70 pl-12"
                        />
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 text-lg">
                          ✉️
                        </span>
                      </div>

                      <div className="relative">
                        <input
                          type={registerPasswordVisible ? "text" : "password"}
                          placeholder="Password"
                          required
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                          className="w-full px-4 py-4 bg-white/20 border-2 border-white/30 rounded-xl focus:outline-none focus:border-white focus:ring-4 focus:ring-white/20 transition-all duration-300 text-white placeholder-white/70 pl-12 pr-12"
                        />
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 text-lg">
                          🔒
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setRegisterPasswordVisible(!registerPasswordVisible)
                          }
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-200"
                        >
                          {registerPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-white text-blue-600 hover:bg-gray-100 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                          <span>Creating Account...</span>
                        </div>
                      ) : (
                        "Create Account"
                      )}
                    </button>

                    {/* <div className="text-center">
                      <p className="text-white/80">
                        Already have an account?{" "}
                        <button
                          type="button"
                          onClick={() => setIsActive(false)}
                          className="text-white hover:text-gray-200 font-semibold underline transition-colors duration-200"
                        >
                          Sign In
                        </button>
                      </p>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
