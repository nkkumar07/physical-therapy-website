import React from 'react';

const ContactPage = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4">Contact Us</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item active text-primary">Contact</li>
          </ol>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="section-title mb-5">
            <div className="sub-style mb-4">
              <h4 className="sub-title text-white px-3 mb-0">Contact Us</h4>
            </div>
            <p className="mb-0 text-black-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>

          <div className="row g-4 align-items-center">
            {/* Contact Form */}
            <div className="col-lg-5 col-xl-5 contact-form">
              <h2 className="display-5 text-white mb-2">Get in Touch</h2>
              <p className="mb-4 text-white">
                The contact form is currently inactive. <a className="text-dark fw-bold" href="https://htmlcodex.com/contact-form">Download Now</a>.
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="text" className="form-control bg-transparent border border-white" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="email" className="form-control bg-transparent border border-white" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="tel" className="form-control bg-transparent border border-white" id="phone" placeholder="Phone" />
                      <label htmlFor="phone">Your Phone</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="text" className="form-control bg-transparent border border-white" id="project" placeholder="Project" />
                      <label htmlFor="project">Your Project</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control bg-transparent border border-white" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control bg-transparent border border-white" placeholder="Leave a message here" id="message" style={{ height: '160px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-light text-primary w-100 py-3" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="col-lg-2 col-xl-2">
              <div className="bg-transparent rounded">
                <div className="d-flex flex-column align-items-center text-center mb-4">
                  <div className="bg-white d-flex align-items-center justify-content-center mb-3 contact-icon">
                    <i className="fa fa-map-marker-alt fa-2x text-primary"></i>
                  </div>
                  <h4 className="text-dark">Addresses</h4>
                  <p className="mb-0 text-white">123 ranking Street, New York, USA</p>
                </div>
                <div className="d-flex flex-column align-items-center text-center mb-4">
                  <div className="bg-white d-flex align-items-center justify-content-center mb-3 contact-icon">
                    <i className="fa fa-phone-alt fa-2x text-primary"></i>
                  </div>
                  <h4 className="text-dark">Mobile</h4>
                  <p className="mb-0 text-white">+012 345 67890</p>
                  <p className="mb-0 text-white">+012 345 67890</p>
                </div>
                <div className="d-flex flex-column align-items-center text-center">
                  <div className="bg-white d-flex align-items-center justify-content-center mb-3 contact-icon">
                    <i className="fa fa-envelope-open fa-2x text-primary"></i>
                  </div>
                  <h4 className="text-dark">Email</h4>
                  <p className="mb-0 text-white">info@example.com</p>
                  <p className="mb-0 text-white">info@example.com</p>
                </div>
              </div>
            </div>

            {/* Google Map and Socials */}
            <div className="col-lg-5 col-xl-5">
              <div className="d-flex justify-content-center mb-4">
                <a className="btn btn-lg-square btn-light rounded-circle mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-lg-square btn-light rounded-circle mx-2" href="#"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-lg-square btn-light rounded-circle mx-2" href="#"><i className="fab fa-instagram"></i></a>
                <a className="btn btn-lg-square btn-light rounded-circle mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <div className="rounded h-100">
                <iframe
                  className="rounded w-100"
                  style={{ height: '500px' }}
                  src="https://www.google.com/maps/embed?pb=!1m18..."
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
