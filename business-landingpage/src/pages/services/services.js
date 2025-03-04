import React, { useRef } from 'react';
import './Services.css'; 

const servicesData = [
    { id: 1, title: 'Fall Cleanup', image:  require('../../assets/O&R_Fall-1.JPG') },
    { id: 2, title: 'Patio & Driveway', image: require('../../assets/driveway_transform-3.jpg') },
    { id: 3, title: 'Mulching & Sodding', image: require('../../assets/patio_driveway-ext_sodding-1.JPG') },
    { id: 4, title: 'Landscaping', image: require('../../assets/banda_nenatural2.JPG') },
    { id: 5, title: 'Fence Installation', image: require('../../assets/fence_repair-1.jpg') }
];

const galleryData = [
    { id: 1, image: require('../../assets/front_house_res-6.jpg') },
    { id: 2, image: require('../../assets/outdoor_home-6.jpg') },
    { id: 3, image: require('../../assets/pool_wall-4.jpg') },
    { id: 4, image: require('../../assets/driveway_transform-2.jpg') }
];

const Services = () => {
    const servicesRef = useRef(null);
    const galleryRef = useRef(null);

    const scroll = (ref, direction) => {
        if (ref.current) {
            const scrollAmount = 300; // Adjust scroll distance
            ref.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
        }
    };

    return (
        <div className="about-services-container">

            {/* About Us Section */}
            <section className="about-us">
                <div className="about-text">
                    <h2>About Our Company</h2>
                    <p>
                        O&R Landscaping & Construction is dedicated to providing top-tier landscaping
                        and construction services. With years of experience, we take pride in creating
                        beautiful outdoor spaces tailored to our clients' visions.
                    </p>
                    <p><strong>Eco-friendly, licensed, and insured for residential & commercial projects.</strong></p>
                </div>
                <div className="about-image">
                    <img src={require("../../assets/O&R_Logo_w_number.png")} alt="Landscaping project" />
                </div>
            </section>

            {/* Services Section with Carousel */}
            <section className="services">
                <h2>Our Services</h2>
                <div className="carousel-container">
                    <button className="scroll-btn left" onClick={() => scroll(servicesRef, 'left')}>&#10094;</button>
                    <div className="services-carousel" ref={servicesRef}>
                        {servicesData.map(service => (
                            <div key={service.id} className="service-card">
                                <img src={service.image} alt={service.title} />
                                <h3>{service.title}</h3>
                            </div>
                        ))}
                    </div>
                    <button className="scroll-btn right" onClick={() => scroll(servicesRef, 'right')}>&#10095;</button>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="key-features">
                <div className="feature">
                    <span className="icon">📜</span>
                    <p>Free Estimates</p>
                </div>
                <div className="feature">
                    <span className="icon">🌎</span>
                    <p>Bilingual Services</p>
                </div>
                <div className="feature">
                    <span className="icon">🏡</span>
                    <p>Residential & Commercial</p>
                </div>
            </section>

            {/* Gallery Section with Carousel */}
            <section className="gallery">
                <h2>Our Recent Projects</h2>
                <div className="carousel-container">
                    <button className="scroll-btn left" onClick={() => scroll(galleryRef, 'left')}>&#10094;</button>
                    <div className="gallery-carousel" ref={galleryRef}>
                        {galleryData.map(project => (
                            <div key={project.id} className="gallery-card">
                                <img src={project.image} alt="Project" />
                            </div>
                        ))}
                    </div>
                    <button className="scroll-btn right" onClick={() => scroll(galleryRef, 'right')}>&#10095;</button>
                </div>
            </section>
        </div>
    );
};

export default Services;
