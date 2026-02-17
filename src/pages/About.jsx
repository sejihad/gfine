// import { Link } from "react-router-dom";

// const about_banner =
//   "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

// const teamMembers = [
//   {
//     name: "Sarah Johnson",
//     role: "CEO & Founder",
//     image: "https://randomuser.me/api/portraits/women/45.jpg",
//     socials: ["twitter", "linkedin-in", "dribbble"],
//   },
//   {
//     name: "Michael Chen",
//     role: "Creative Director",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     socials: ["twitter", "linkedin-in", "behance"],
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Lead Developer",
//     image: "https://randomuser.me/api/portraits/women/68.jpg",
//     socials: ["github", "linkedin-in", "codepen"],
//   },
//   {
//     name: "David Wilson",
//     role: "Marketing Director",
//     image: "https://randomuser.me/api/portraits/men/75.jpg",
//     socials: ["twitter", "linkedin-in", "instagram"],
//   },
// ];

// const features = [
//   {
//     icon: "💡",
//     title: "Innovative Solutions",
//     text: "We stay ahead of trends to deliver cutting-edge digital solutions.",
//   },
//   {
//     icon: "🏆",
//     title: "Proven Results",
//     text: "Our work has helped clients achieve measurable success.",
//   },
// ];

// const stats = [
//   { number: "240+", text: "Projects Completed" },
//   { number: "120+", text: "Happy Clients" },
//   { number: "50+", text: "Achievement" },
//   { number: "20+", text: "Team Members" },
// ];

// const About = () => {
//   return (
//     <div className="min-h-screen mt-5 bg-white">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-blue-50 via-white to-red-50 py-20 lg:py-32">
//         <div className="absolute inset-0 bg-white/50"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//             About Our{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
//               Organization
//             </span>
//           </h1>
//           <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
//             We are a team of creative thinkers and problem solvers dedicated to
//             helping businesses grow through innovative digital solutions.
//           </p>

//           {/* Breadcrumb */}
//           <nav className="flex justify-center items-center space-x-2 text-sm lg:text-base">
//             <Link
//               to="/"
//               className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
//             >
//               Home
//             </Link>
//             <span className="text-gray-400">/</span>
//             <span className="text-gray-600">About</span>
//           </nav>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-20 lg:py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//             {/* Image */}
//             <div className="relative">
//               <div className="rounded-3xl overflow-hidden shadow-2xl">
//                 <img
//                   src={about_banner}
//                   alt="Our team working together"
//                   className="w-full h-[400px] lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
//                 />
//               </div>
//               {/* Decorative elements */}
//               <div className="absolute -top-4 -left-4 w-20 h-20 bg-red-500 rounded-2xl rotate-12 opacity-20 z-0"></div>
//               <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-2xl -rotate-12 opacity-20 z-0"></div>
//             </div>

//             {/* Content */}
//             <div className="space-y-6">
//               <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
//                 Our <span className="text-blue-600">Story</span>
//               </h2>

//               <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
//                 <p>
//                   Founded in 2015, Creative Agency began as a small team of
//                   passionate designers and developers with a shared vision to
//                   create meaningful digital experiences...
//                 </p>
//                 <p>
//                   Our approach combines creativity, strategy, and technology to
//                   deliver solutions that drive real business results.
//                 </p>
//               </div>

//               {/* Features */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
//                 {features.map((feature, index) => (
//                   <div
//                     key={index}
//                     className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200"
//                   >
//                     <div className="flex items-center space-x-4">
//                       <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
//                         {feature.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-900 mb-2">
//                           {feature.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm leading-relaxed">
//                           {feature.text}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 lg:py-32 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//               Meet Our <span className="text-blue-600">Team</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our talented team of professionals brings diverse skills and
//               expertise to every project.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center"
//               >
//                 {/* Team Member Image */}
//                 <div className="relative mb-6">
//                   <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-blue-500 transition-all duration-300">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//                 </div>

//                 {/* Team Member Info */}
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   {member.name}
//                 </h3>
//                 <p className="text-red-600 font-semibold mb-4">{member.role}</p>

//                 {/* Social Links */}
//                 <div className="flex justify-center space-x-3">
//                   {member.socials.map((icon, idx) => (
//                     <a
//                       key={idx}
//                       href="#"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110"
//                     >
//                       {/* <span className="text-sm">{iconMap.icon}</span> */}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-red-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="text-center group transform hover:scale-105 transition-transform duration-300"
//               >
//                 <div className="text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
//                   {stat.number}
//                 </div>
//                 <div className="text-blue-100 text-lg font-semibold group-hover:text-white transition-colors duration-300">
//                   {stat.text}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

import { FiBookOpen, FiHeart, FiSearch, FiTrendingUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      title: "Discipline",
      text: "Consistency in learning, execution, and professional growth.",
    },
    {
      title: "Respect",
      text: "Valuing people, time, and diverse perspectives in every interaction.",
    },
    {
      title: "Integrity",
      text: "Honesty, responsibility, and ethical standards in everything we do.",
    },
    {
      title: "Societal Impact",
      text: "Creating real value for communities through skills and opportunities.",
    },
    {
      title: "Leadership",
      text: "Empowering youth to lead with confidence, clarity, and purpose.",
    },
  ];

  const objectives = [
    {
      icon: <FiBookOpen className="text-2xl text-blue-600" />,
      title: "Education",
      text: "Build strong foundations through quality learning and practical training.",
    },
    {
      icon: <FiTrendingUp className="text-2xl text-blue-600" />,
      title: "Career Development",
      text: "Provide clear roadmaps, mentoring, and job-ready skill development.",
    },
    {
      icon: <FiSearch className="text-2xl text-blue-600" />,
      title: "Research & Invention",
      text: "Encourage innovation, experimentation, and problem-solving culture.",
    },
    {
      icon: <FiHeart className="text-2xl text-blue-600" />,
      title: "Social Welfare Activities",
      text: "Support social initiatives that uplift communities and create inclusion.",
    },
  ];

  return (
    <div className="min-h-screen mt-5 bg-white">
      {/* Hero + Breadcrumb (Our Organization style) */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-red-50 py-20 lg:py-28">
        <div className="absolute inset-0 bg-white/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            About Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              Organization
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Building people, skills, and opportunities—so youth can grow into
            confident professionals and impact society.
          </p>

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

      {/* Vision (Typography + layout like screenshot) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 text-center">
            Our Vision
          </h2>

          <p className="mt-8 text-center text-lg lg:text-xl text-gray-700 font-medium">
            Building a highly skilled and employable Bangladesh.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="h-px w-3/4 bg-gray-200" />
          </div>
        </div>
      </section>

      {/* Mission (same style block) */}
      <section className="pb-16 lg:pb-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 text-center">
            Our Mission
          </h2>

          <p className="mt-8 text-center text-lg lg:text-xl text-gray-800 font-semibold">
            Our mission is to solve career problems by providing precise
            guidelines, structured instructions, and comprehensive support to
            empower youth and enable professionals to achieve more career
            success.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="h-px w-3/4 bg-gray-200" />
          </div>
        </div>
      </section>

      {/* Values band (same “dark strip” feel, but with your blue/red language) */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-blue-700 to-red-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="flex items-center justify-between gap-6 mb-10">
              <h3 className="text-3xl lg:text-4xl font-extrabold text-white">
                Values
              </h3>
              <div className="hidden md:block h-px flex-1 bg-white/25" />
              <div className="hidden md:flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-white/70" />
                <span className="inline-block w-2 h-2 rounded-full bg-white/50" />
                <span className="inline-block w-2 h-2 rounded-full bg-white/30" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {values.map((v, i) => (
                <div key={i} className="text-left">
                  <h4 className="text-xl font-extrabold text-white tracking-wide">
                    {v.title.toUpperCase()}
                  </h4>
                  <p className="mt-3 text-white/85 text-sm leading-relaxed">
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objectives (cards like screenshot) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 text-center">
            Our Objectives
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((obj, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 p-6 lg:p-7"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-red-100 flex items-center justify-center border border-gray-200 group-hover:scale-110 transition-transform duration-300">
                    {obj.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {obj.title}
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {obj.text}
                    </p>

                    <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-red-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* subtle divider like the reference page */}
          <div className="mt-14 flex justify-center">
            <div className="h-px w-3/4 bg-gray-200" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
