'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main>
            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h3
                        className="text-white display-3 mb-4 wow fadeInDown"
                        data-wow-delay="0.1s"
                    >
                        Our Features
                    </h3>
                    <ol
                        className="breadcrumb justify-content-center mb-0 wow fadeInDown"
                        data-wow-delay="0.3s"
                    >

                        <li className="breadcrumb-item">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">Pages</a>
                        </li>
                        <li className="breadcrumb-item active text-primary">Features</li>
                    </ol>
                </div>
            </div>

            {/* Features Section */}
            <div className="container-fluid feature py-5">
                <div className="container py-5">
                    <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="sub-style">
                            <h4 className="sub-title px-3 mb-0">Why Choose Us</h4>
                        </div>
                        <h1 className="display-3 mb-4">Why Choose Us? Get Your Life Style Back</h1>
                        <p className="mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                            deleniti amet at atque sequi quibusdam cumque itaque repudiandae
                            temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
                            saepe in ab? Repellat!
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {[
                            {
                                icon: 'fas fa-diagnoses',
                                title: 'Licensed Therapist',
                            },
                            {
                                icon: 'fas fa-briefcase-medical',
                                title: 'Personalized Treatment',
                            },
                            {
                                icon: 'fas fa-hospital-user',
                                title: 'Therapy Goals',
                            },
                            {
                                icon: 'fas fa-users',
                                title: 'Practitioners Network',
                            },
                            {
                                icon: 'fas fa-spa',
                                title: 'Comfortable Center',
                            },
                            {
                                icon: 'fas fa-heart',
                                title: 'Experienced Staff',
                            },
                            {
                                icon: 'fab fa-pied-piper',
                                title: 'Therapy Goals',
                            },
                            {
                                icon: 'fas fa-user-md',
                                title: 'Licensed Therapist',
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                                data-wow-delay={`${0.1 * (index % 4)}s`}
                            >
                                <div className="row-cols-1 feature-item p-4">
                                    <div className="col-12">
                                        <div className="feature-icon mb-4">
                                            <div className="p-3 d-inline-flex bg-white rounded">
                                                <i className={`${feature.icon} fa-4x text-primary`} />
                                            </div>
                                        </div>
                                        <div className="feature-content d-flex flex-column">
                                            <h5 className="mb-4">{feature.title}</h5>
                                            <p className="mb-0">
                                                Dolor, sit amet consectetur adipisicing elit. Soluta
                                                inventore cum accusamus,
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

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
        </main>
    );
}
