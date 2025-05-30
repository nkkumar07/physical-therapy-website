'use client';
import React, { useEffect } from "react";

export default function Carousel() {
  useEffect(() => {
    const loadScript = (src) =>
      new Promise((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        document.body.appendChild(script);
      });

    async function loadDependencies() {
      if (!window.jQuery) {
        await loadScript("https://code.jquery.com/jquery-3.6.0.min.js");
      }
      await loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
      );

      if (window.jQuery && window.jQuery.fn.owlCarousel) {
        window.jQuery(".owl-carousel").owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          nav: false,
          dots: true,
          autoplayTimeout: 5000,
          animateOut: "fadeOut",
        });
      }
    }

    loadDependencies();
  }, []);

  return (
    <>
      {/* Owl Carousel CSS */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
      />

      {/* Carousel */}
      <div className="owl-carousel owl-theme">
        <div className="item position-relative">
          <img
            src="/assets/carousel-1.jpg"
            alt="Slide 1"
            className="img-fluid w-100"
          />
          <div className="carousel-caption">
            <div className="carousel-caption-content p-3">
              <h5
                className="text-white text-uppercase fw-bold mb-4"
                style={{ letterSpacing: "3px" }}
              >
                Physiotherapy Center
              </h5>
              <h1 className="display-1 text-capitalize text-white mb-4">
                Best Solution For Painful Life
              </h1>
              <p className="mb-5 fs-5">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s,
              </p>
              <a
                className="btn btn-primary rounded-pill text-white py-3 px-5"
                href="contact"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>

        <div className="item position-relative">
          <img
            src="/assets/carousel-2.jpg"
            alt="Slide 2"
            className="img-fluid w-100"
          />
          <div className="carousel-caption">
            <div className="carousel-caption-content p-3">
              <h5
                className="text-white text-uppercase fw-bold mb-4"
                style={{ letterSpacing: "3px" }}
              >
                Physiotherapy Center
              </h5>
              <h1 className="display-1 text-capitalize text-white mb-4">
                Best Solution For Painful Life
              </h1>
              <p className="mb-5 fs-5 animated slideInDown">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s,
              </p>
              <a
                className="btn btn-primary rounded-pill text-white py-3 px-5"
                href="#"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
