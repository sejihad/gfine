import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: "💻",
      title: "Web Development",
      desc: "We create responsive, user-friendly websites that help your business stand out and achieve its goals.",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      desc: "Custom mobile applications designed to engage your audience and streamline your operations.",
    },
    {
      icon: "📢",
      title: "Digital Marketing",
      desc: "Comprehensive digital marketing strategies to increase your online visibility and drive growth.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "Beautiful, intuitive designs that enhance user experience and drive conversions.",
    },
    {
      icon: "📈",
      title: "SEO Optimization",
      desc: "Improve your search engine rankings and attract more qualified traffic to your website.",
    },
    {
      icon: "🛒",
      title: "E-commerce Solutions",
      desc: "Complete e-commerce solutions to help you sell products and services online effectively.",
    },
  ];

  const testimonials = [
    {
      text: "Working with this agency was a game-changer for our business. Their team delivered exceptional results and exceeded our expectations.",
      name: "Sarah Johnson",
      title: "CEO, TechSolutions",
      img: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      text: "The digital marketing campaign they created for us resulted in a 300% increase in leads. Highly recommend their services!",
      name: "Michael Chen",
      title: "Marketing Director, GlobalCorp",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      text: "Their web development team created a stunning e-commerce platform that has significantly boosted our online sales.",
      name: "Emily Rodriguez",
      title: "Founder, FashionHub",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-red-50 py-20 lg:py-32">
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  We Create Amazing{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                    Digital Experiences
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our agency helps businesses grow through innovative digital
                  solutions and creative strategies that deliver real results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                >
                  Our Services
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 border-2 border-blue-600 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Creative team working together"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-500 rounded-2xl rotate-12 opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500 rounded-2xl -rotate-12 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business
              thrive in the modern landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-red-500 rounded-2xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-semibold group-hover:text-red-600 transition-colors duration-300"
                >
                  Read More
                  <ChevronRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              What Our <span className="text-blue-200">Clients</span> Say
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied
              clients
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              {/* Quote icon */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">"</span>
              </div>

              <div className="text-center">
                <p className="text-2xl lg:text-3xl text-gray-800 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>

                <div className="flex items-center justify-center space-x-6">
                  <img
                    src={testimonials[currentTestimonial].img}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full border-4 border-blue-500 shadow-lg"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-red-600 font-semibold">
                      {testimonials[currentTestimonial].title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-all duration-300 shadow-lg"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-all duration-300 shadow-lg"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>

              {/* Dots indicator */}
              <div className="flex justify-center space-x-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-blue-600 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
