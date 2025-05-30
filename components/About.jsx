'use client';


export default function AboutPage() {
  return (
    <main>
  {/* About Start */}
  <div className="container-fluid about bg-light py-5">
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
          <div className="about-img pb-5 ps-5">
            <img
              src="assets/about-1.jpg"
              className="img-fluid rounded w-100"
              style={{ objectFit: "cover" }}
              alt="Image"
            />
            <div className="about-img-inner">
              <img
                src="assets/about-2.jpg"
                className="img-fluid rounded-circle w-100 h-100"
                alt="Image"
              />
            </div>
            <div className="about-experience">15 years experience</div>
          </div>
        </div>
        <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
          <div className="section-title text-start mb-5">
            <h4 className="sub-title pe-3 mb-0">About Us</h4>
            <h1 className="display-3 mb-4">
              We are Ready to Help Improve Your Treatment.
            </h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              deleniti amet at atque sequi quibusdam cumque itaque repudiandae
              temporibus, eius nam mollitia voluptas maxime veniam
              necessitatibus saepe in ab? Repellat!
            </p>
            <div className="mb-4">
              <p className="text-secondary">
                <i className="fa fa-check text-primary me-2" /> Refresing to get
                such a personal touch.
              </p>
              <p className="text-secondary">
                <i className="fa fa-check text-primary me-2" /> Duis aute irure
                dolor in reprehenderit in voluptate.
              </p>
              <p className="text-secondary">
                <i className="fa fa-check text-primary me-2" /> Velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <a
              href="#"
              className="btn btn-primary rounded-pill text-white py-3 px-5"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
 
  {/* Feature Start */}
  <div className="container-fluid feature py-5">
    <div className="container py-5">
      <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="sub-style">
          <h4 className="sub-title px-3 mb-0">Why Choose Us</h4>
        </div>
        <h1 className="display-3 mb-4">
          Why Choose Us? Get Your Life Style Back
        </h1>
        <p className="mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          deleniti amet at atque sequi quibusdam cumque itaque repudiandae
          temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
          saepe in ab? Repellat!
        </p>
      </div>
      <div className="row g-4 justify-content-center">
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="row-cols-1 feature-item p-4">
            <div className="col-12">
              <div className="feature-icon mb-4">
                <div className="p-3 d-inline-flex bg-white rounded">
                  <i className="fas fa-diagnoses fa-4x text-primary" />
                </div>
              </div>
              <div className="feature-content d-flex flex-column">
                <h5 className="mb-4">Licensed Therapist</h5>
                <p className="mb-0">
                  Dolor, sit amet consectetur adipisicing elit. Soluta inventore
                  cum accusamus,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="row-cols-1 feature-item p-4">
            <div className="col-12">
              <div className="feature-icon mb-4">
                <div className="p-3 d-inline-flex bg-white rounded">
                  <i className="fas fa-briefcase-medical fa-4x text-primary" />
                </div>
              </div>
              <div className="feature-content d-flex flex-column">
                <h5 className="mb-4">Personalized Treatment</h5>
                <p className="mb-0">
                  Dolor, sit amet consectetur adipisicing elit. Soluta inventore
                  cum accusamus,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="row-cols-1 feature-item p-4">
            <div className="col-12">
              <div className="feature-icon mb-4">
                <div className="p-3 d-inline-flex bg-white rounded">
                  <i className="fas fa-hospital-user fa-4x text-primary" />
                </div>
              </div>
              <div className="feature-content d-flex flex-column">
                <h5 className="mb-4">Therapy Goals</h5>
                <p className="mb-0">
                  Dolor, sit amet consectetur adipisicing elit. Soluta inventore
                  cum accusamus,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.7s"
        >
          <div className="row-cols-1 feature-item p-4">
            <div className="col-12">
              <div className="feature-icon mb-4">
                <div className="p-3 d-inline-flex bg-white rounded">
                  <i className="fas fa-users fa-4x text-primary" />
                </div>
              </div>
              <div className="feature-content d-flex flex-column">
                <h5 className="mb-4">Practitioners Network</h5>
                <p className="mb-0">
                  Dolor, sit amet consectetur adipisicing elit. Soluta inventore
                  cum accusamus,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="row-cols-1 feature-item p-4">
            <div className="col-12">
              <div className="feature-icon mb-4">
                <div className="p-3 d-inline-flex bg-white rounded">
                  <i className="fas fa-spa fa-4x text-primary" />
                </div>
              </div>
              <div className="feature-content d-flex flex-column">
                <h5 className="mb-4">Comfortable Center</h5>
                <p className="mb-0">
                  Dolor, sit amet consectetur adipisicing elit. Soluta inventore
                  cum accusamus,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="row-cols-1 feature-item p-4">
            <div className="col-12">
              <div className="feature-icon mb-4">
                <div className="p-3 d-inline-flex bg-white rounded">
                  <i className="fas fa-heart fa-4x text-primary" />
                </div>
              </div>
              <div className="feature-content d-flex flex-column">
                <h5 className="mb-4">Experienced Stuff</h5>
                <p className="mb-0">
                  Dolor, sit amet consectetur adipisicing elit. Soluta inventore
                  cum accusamus,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="row-cols-1 feature-item p-4">
            <div className="col-12">
              <div className="feature-icon mb-4">
                <div className="p-3 d-inline-flex bg-white rounded">
                  <i className="fab fa-pied-piper fa-4x text-primary" />
                </div>
              </div>
              <div className="feature-content d-flex flex-column">
                <h5 className="mb-4">Therapy Goals</h5>
                <p className="mb-0">
                  Dolor, sit amet consectetur adipisicing elit. Soluta inventore
                  cum accusamus,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.7s"
        >
          <div className="row-cols-1 feature-item p-4">
            <div className="col-12">
              <div className="feature-icon mb-4">
                <div className="p-3 d-inline-flex bg-white rounded">
                  <i className="fas fa-user-md fa-4x text-primary" />
                </div>
              </div>
              <div className="feature-content d-flex flex-column">
                <h5 className="mb-4">Licensed Therapist</h5>
                <p className="mb-0">
                  Dolor, sit amet consectetur adipisicing elit. Soluta inventore
                  cum accusamus,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
          <a
            href="#"
            className="btn btn-primary rounded-pill text-white py-3 px-5"
          >
            More Details
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Feature End */}
  {"}"}

    </main>
  );
}
