import { Carousel } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1>We Create Amazing Digital Experiences</h1>
                <p>
                  Our agency helps businesses grow through innovative digital
                  solutions and creative strategies that deliver real results.
                </p>
                <div className="d-flex mb-3 flex-wrap gap-3">
                  <a href="#" className="btn btn-primary">
                    Our Services
                  </a>
                  <a href="/about" className="btn btn-outline-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Creative team working together"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>
          <div className="row">
            {[
              {
                icon: "fas fa-laptop-code",
                title: "Web Development",
                desc: "We create responsive, user-friendly websites that help your business stand out and achieve its goals.",
              },
              {
                icon: "fas fa-mobile-alt",
                title: "Mobile App Development",
                desc: "Custom mobile applications designed to engage your audience and streamline your operations.",
              },
              {
                icon: "fas fa-bullhorn",
                title: "Digital Marketing",
                desc: "Comprehensive digital marketing strategies to increase your online visibility and drive growth.",
              },
              {
                icon: "fas fa-paint-brush",
                title: "UI/UX Design",
                desc: "Beautiful, intuitive designs that enhance user experience and drive conversions.",
              },
              {
                icon: "fas fa-chart-line",
                title: "SEO Optimization",
                desc: "Improve your search engine rankings and attract more qualified traffic to your website.",
              },
              {
                icon: "fas fa-shopping-cart",
                title: "E-commerce Solutions",
                desc: "Complete e-commerce solutions to help you sell products and services online effectively.",
              },
            ].map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="service-card">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <a href="#" className="read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Carousel interval={2000} fade>
                {[
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
                ].map((item, i) => (
                  <Carousel.Item key={i}>
                    <div className="testimonial-card text-center">
                      <i className="fas fa-quote-left fa-2x mb-3"></i>
                      <p>{item.text}</p>
                      <div className="client-info d-flex align-items-center justify-content-center gap-3 mt-3">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="rounded-circle"
                          width={60}
                          height={60}
                        />
                        <div>
                          <h5>{item.name}</h5>
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
