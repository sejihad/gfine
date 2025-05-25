import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer pt-5">
      <div className="container">
        <div className="row">
          {/* About Us */}
          <div className="col-lg-6 col-md-6 mb-4">
            <h4>About Us</h4>
            <p>
              We are a creative digital agency dedicated to helping businesses
              grow through innovative solutions and strategic thinking.
            </p>
            <div className="social-links mt-4">
              <a href="#" className="me-3 text-dark">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="me-3 text-dark">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="me-3 text-dark">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="col-lg-6 col-md-6 mb-4">
            <h4>Contact Us</h4>
            <div className="contact-info d-flex mb-2">
              <i className="fas fa-map-marker-alt me-2 mt-1"></i>
              <p className="mb-0">
                123 Business Ave, Suite 456, New York, NY 10001
              </p>
            </div>
            <div className="contact-info d-flex mb-2">
              <i className="fas fa-phone-alt me-2 mt-1"></i>
              <p className="mb-0">+1 (555) 123-4567</p>
            </div>
            <div className="contact-info d-flex">
              <i className="fas fa-envelope me-2 mt-1"></i>
              <p className="mb-0">info@creativeagency.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-3 border-top mt-4">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} All Rights Reserved. Developer{" "}
            <a href="https://sejihad.vercel.app" target="_blank">
              SE Jihad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
