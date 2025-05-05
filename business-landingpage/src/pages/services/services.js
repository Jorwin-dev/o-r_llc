import React, { useRef, useEffect, useState } from 'react';
import './services.css'; 

const servicesData = [
    { id: 1, title: 'Fall Cleanup', image:  require('../../assets/O&R_Fall-6.JPG') },
    { id: 2, title: 'Concrete', image: require('../../assets/patio&steps-2.jpg') },
    { id: 3, title: 'Lawn Service', image: require('../../assets/patio_driveway-ext_sodding-1.JPG') },
    { id: 4, title: 'Landscaping', image: require('../../assets/banda_nenatural2.JPG') },
    { id: 5, title: 'Fencing', image: require('../../assets/fence_repair-1.jpg') },
    { id: 6, title: 'Masonry', image: require('../../assets/pool_wall-2.jpg') }
];

const galleryData = [
    { id: 1, image: require('../../assets/front_house_res-6.jpg') },
    { id: 2, image: require('../../assets/outdoor_home-6.jpg') },
    { id: 3, image: require('../../assets/pool_wall-4.jpg') },
    { id: 4, image: require('../../assets/driveway_transform-2.jpg') },
    { id: 5, image: require('../../assets/driveway_ext_and_mulch3.JPG') },
    { id: 6, image: require('../../assets/groundskeeping-1.webp') }
];

const Services = () => {
    const servicesRef = useRef(null);
    const galleryRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

     // Function to auto-scroll both carousels
     useEffect(() => {
        const smoothScroll = (ref) => {
            if (!ref.current) return;

            let scrollAmount = 1; // Small increments for smooth movement
            let delay = 50; // Delay between movement steps
            let interval;

            const startScrolling = () => {
                interval = setInterval(() => {
                    if (!isPaused && ref.current) {
                        ref.current.scrollLeft += scrollAmount;
                        if (ref.current.scrollLeft >= ref.current.scrollWidth / 2) {
                            ref.current.scrollLeft = 0; // Seamless looping
                        }
                    }
                }, delay);
            };

            startScrolling();

            return () => clearInterval(interval);
        };

        const servicesInterval = smoothScroll(servicesRef);
        const galleryInterval = smoothScroll(galleryRef);

        return () => {
            clearInterval(servicesInterval);
            clearInterval(galleryInterval);
        };
    }, [isPaused]);

    return (
        <div className="about-services-container">

            {/* About Us Section */}
            <section className="about-us">
                <div className="about-text">
                    <h2>About Our Company</h2>
                    <p>
                    Experience a tradition of customer satisfaction that exceeds expectations. 
                    From start to finish we work with you every step of the way, ensuring our professionalism 
                    and quality workmanship reflect your taste and lifestyle. We take pride in going the extra step to leave 
                    a smile on every customer's face, offering affordable pricing without compromising on quality. Whether you 
                    need Landscaping, Masonry, Fences, or more, we are here to take care of your unique needs with honesty, ethics, 
                    and clear communication. Call us today; you will be glad you did. Remember, no job is too small!
                    </p>
                    <p><strong>In Business Since 2017</strong></p>
                </div>
                <div className="about-image">
                    <img src={require("../../assets/O&R_Logo_w_number.png")} alt="Landscaping project" />
                </div>
            </section>

            {/* Services Section with Auto-Scroll Carousel */}
            <section className="services">
                <h2>Areas of Expertise</h2>
                <div className="carousel-container" ref={servicesRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}>
                    {servicesData.concat(servicesData).map((service, index) => (
                        <div key={index} className="service-card">
                            <img src={service.image} alt={service.title} />
                            <h3>{service.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Key Features Section */}
            <section className="key-features">
                <div className="feature">
                    <span className="icon">♻️</span>
                    <p>Eco-Friendly Services</p>
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

            {/* Gallery Section with Auto-Scroll Carousel */}
            <section className="gallery">
                <h2>Our Recent Projects</h2>
                <div className="carousel-container" ref={galleryRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}>
                    {galleryData.concat(galleryData).map((project, index) => (
                        <div key={index} className="gallery-card">
                            <img src={project.image} alt="Project" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
