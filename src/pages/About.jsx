import { Link } from "react-router-dom";

const about_banner =
  "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    socials: ["twitter", "linkedin-in", "dribbble"],
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    socials: ["twitter", "linkedin-in", "behance"],
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    socials: ["github", "linkedin-in", "codepen"],
  },
  {
    name: "David Wilson",
    role: "Marketing Director",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    socials: ["twitter", "linkedin-in", "instagram"],
  },
];

const features = [
  {
    icon: "💡",
    title: "Innovative Solutions",
    text: "We stay ahead of trends to deliver cutting-edge digital solutions.",
  },
  {
    icon: "🏆",
    title: "Proven Results",
    text: "Our work has helped clients achieve measurable success.",
  },
];

const stats = [
  { number: "240+", text: "Projects Completed" },
  { number: "120+", text: "Happy Clients" },
  { number: "50+", text: "Achievement" },
  { number: "20+", text: "Team Members" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-red-50 py-20 lg:py-32">
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            About Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              Agency
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            We are a team of creative thinkers and problem solvers dedicated to
            helping businesses grow through innovative digital solutions.
          </p>

          {/* Breadcrumb */}
          <nav className="flex justify-center items-center space-x-2 text-sm lg:text-base">
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
            >
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">About</span>
          </nav>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={about_banner}
                  alt="Our team working together"
                  className="w-full h-[400px] lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-red-500 rounded-2xl rotate-12 opacity-20 z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-2xl -rotate-12 opacity-20 z-0"></div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our <span className="text-blue-600">Story</span>
              </h2>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2015, Creative Agency began as a small team of
                  passionate designers and developers with a shared vision to
                  create meaningful digital experiences...
                </p>
                <p>
                  Our approach combines creativity, strategy, and technology to
                  deliver solutions that drive real business results.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-blue-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of professionals brings diverse skills and
              expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                {/* Team Member Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-blue-500 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>

                {/* Team Member Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-red-600 font-semibold mb-4">{member.role}</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {member.socials.map((icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      {/* <span className="text-sm">{iconMap.icon}</span> */}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg font-semibold group-hover:text-white transition-colors duration-300">
                  {stat.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
