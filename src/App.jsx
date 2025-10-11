import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./layout/Footer.jsx";
import Header from "./layout/Header.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Auth/Login.jsx";
import CareerCommunity from "./pages/CareerCommunity.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/career-community" element={<CareerCommunity />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
