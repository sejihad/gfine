import { Link } from "react-router-dom";
import "./About.css";

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
    icon: "fas fa-lightbulb",
    title: "Innovative Solutions",
    text: "We stay ahead of trends to deliver cutting-edge digital solutions.",
  },
  {
    icon: "fas fa-medal",
    title: "Proven Results",
    text: "Our work has helped clients achieve measurable success.",
  },
];

const stats = [
  { number: "250+", text: "Projects Completed" },
  { number: "120+", text: "Happy Clients" },
  { number: "50+", text: "Achievement" },
  { number: "20+", text: "Team Members" },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Our Agency</h1>
          <p>
            We are a team of creative thinkers and problem solvers dedicated to
            helping businesses grow through innovative digital solutions.
          </p>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                About
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src={about_banner}
                alt="Our team working together"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h3>Our Story</h3>
                <p>
                  Founded in 2015, Creative Agency began as a small team of
                  passionate designers and developers with a shared vision to
                  create meaningful digital experiences...
                </p>
                <p>
                  Our approach combines creativity, strategy, and technology to
                  deliver solutions that drive real business results.
                </p>

                <div className="row mt-4">
                  {features.map((feature, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="feature-box">
                        <div className="feature-icon">
                          <i className={feature.icon}></i>
                        </div>
                        <h5>{feature.title}</h5>
                        <p>{feature.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Team</h2>
            <p className="mx-auto" style={{ maxWidth: "700px" }}>
              Our talented team of professionals brings diverse skills and
              expertise to every project.
            </p>
          </div>
          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="team-member">
                  <div className="team-img">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                  <div className="social-links">
                    {member.socials.map((icon, idx) => (
                      <a href="#" key={idx}>
                        <i className={`fab fa-${icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="row">
            {stats.map((stat, index) => (
              <div className="col-md-3" key={index}>
                <div className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-text">{stat.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
