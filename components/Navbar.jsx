import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0 align-items-center" style={{ height: "45px" }}>
          <div className="col-lg-8 text-center text-lg-start mb-lg-0">
            <div className="d-flex flex-wrap">
              <a href="#" className="text-light me-4">
                <i className="fas fa-map-marker-alt text-primary me-2"></i>Find A Location
              </a>
              <a href="#" className="text-light me-4">
                <i className="fas fa-phone-alt text-primary me-2"></i>+01234567890
              </a>
              <a href="#" className="text-light me-0">
                <i className="fas fa-envelope text-primary me-2"></i>Example@gmail.com
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-flex align-items-center justify-content-end">
              <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-0">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
        <a href="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fas fa-star-of-life me-3"></i>Terapia
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="/" className="nav-item nav-link active">
              Home
            </a>
            <a href="/about" className="nav-item nav-link">
              About
            </a>
            <a href="/service" className="nav-item nav-link">
              Services
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="pagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu m-0" aria-labelledby="pagesDropdown">
                <li>
                  <a href="/appointment" className="dropdown-item">
                    Appointment
                  </a>
                </li>
                <li>
                  <a href="/feature" className="dropdown-item">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/blog" className="dropdown-item">
                    Our Blog
                  </a>
                </li>
                <li>
                  <a href="/team" className="dropdown-item">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="/testimonial" className="dropdown-item">
                    Testimonial
                  </a>
                </li>
                <li>
                  <a href="/page-not-found" className="dropdown-item">
                    404 Page
                  </a>
                </li>
              </ul>
            </div>
            <a href="/contact" className="nav-item nav-link">
              Contact Us
            </a>
          </div>
          <a
            href="#"
            className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0"
          >
            Book Appointment
          </a>
        </div>
      </nav>
    </>
  );
}