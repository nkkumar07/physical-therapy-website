import React from 'react';

const teamMembers = [
  {
    id: 1,
    image: 'assets/team-1.jpg',
    name: 'Full Name',
    role: 'Message Physio Therapist',
    delay: '0.1s',
  },
  {
    id: 2,
    image: 'assets/team-2.jpg',
    name: 'Full Name',
    role: 'Rehabilitation Therapist',
    delay: '0.3s',
  },
  {
    id: 3,
    image: 'assets/team-3.jpg',
    name: 'Full Name',
    role: 'Doctor of Physical therapy',
    delay: '0.5s',
  },
  {
    id: 4,
    image: 'assets/team-4.jpg',
    name: 'Full Name',
    role: 'Doctor of Physical therapy',
    delay: '0.7s',
  },
];

const TeamSection = () => {
  return (
    <div className="container-fluid team py-5">
      <div className="container py-5">
        <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="sub-style">
            <h4 className="sub-title px-3 mb-0">Meet our team</h4>
          </div>
          <h1 className="display-3 mb-4">
            Physiotherapy Services from Professional Therapist
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            deleniti amet at atque sequi quibusdam cumque itaque repudiandae
            temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
            saepe in ab? Repellat!
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay={member.delay}
            >
              <div className="team-item rounded">
                <div className="team-img rounded-top h-100">
                  <img
                    src={member.image}
                    className="img-fluid rounded-top w-100"
                    alt=""
                  />
                  <div className="team-icon d-flex justify-content-center">
                    {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon, index) => (
                      <a
                        key={index}
                        className="btn btn-square btn-primary text-white rounded-circle mx-1"
                        href="#"
                      >
                        <i className={`fab fa-${icon}`} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                  <h5>{member.name}</h5>
                  <p className="mb-0">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TeamSection;
