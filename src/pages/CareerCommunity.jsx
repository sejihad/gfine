import { useState } from "react";
import { Link } from "react-router-dom";
import "./CareerCommunity.css";

// Slider images
const sliderImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    title: "Build Your Dream Career",
    subtitle: "Join our community of professionals",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Networking Opportunities",
    subtitle: "Connect with industry leaders",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Career Development Resources",
    subtitle: "Grow your skills and knowledge",
  },
];

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "How to Build a Strong Professional Network",
    desc: "Learn the strategies to create meaningful professional connections that can advance your career.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "May 15, 2023",
  },
  {
    id: 2,
    title: "Mastering the Art of the Elevator Pitch",
    desc: "Craft a compelling introduction that makes you memorable in professional settings.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "June 2, 2023",
  },
  {
    id: 3,
    title: "Navigating Career Transitions Successfully",
    desc: "Practical advice for making smooth transitions between jobs or industries.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "June 18, 2023",
  },
  {
    id: 4,
    title: "The Future of Remote Work in 2023",
    desc: "How to position yourself for success in the evolving landscape of remote work.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "July 5, 2023",
  },
];

const CareerCommunity = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="career-community-page">
      {/* Hero Slider */}
      <section className="hero-slider">
        <div
          className="slider-container"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {sliderImages.map((image) => (
            <div key={image.id} className="slide">
              <img src={image.url} alt={image.title} className="slide-image" />
              <div className="slide-content">
                <h1>{image.title}</h1>
                <p>{image.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-nav prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="slider-nav next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <div className="slider-dots">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="blog-section">
        <div className="container">
          <div className="section-header">
            <h2>Career Resources & Articles</h2>
            <p>
              Explore our latest articles and resources to boost your career
            </p>
          </div>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-img-container">
                  <img src={post.img} alt={post.title} className="blog-img" />
                  <span className="blog-date">{post.date}</span>
                </div>
                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <p>{post.desc}</p>
                  <Link
                    to={`/career-community/${post.id}`}
                    className="read-more-btn"
                  >
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerCommunity;
