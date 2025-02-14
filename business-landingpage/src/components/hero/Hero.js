import React, {useState, useEffect} from 'react';
import './Hero.css';

const images = [
    '/assets/groundskeeping2.JPG',
    '/assets/mulching_cleanup.JPG',
    '/assets/O&R_Fall-1.JPG',
    '/assets/O&R_Fall-4JPG',
    '/assets/patio_driveway-ext_sodding-2.JPG',
    '/assets/snow_night.JPG'
];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);   // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='hero'>
            {/* Blurred Background Image */}
            <div
            className='hero-background'
            style={{backgroundImage: `url(${images[currentImage]})`}}
            ></div>

            {/* Main Hero Image */}
            <div className='hero-content'>
                <img src={images[currentImage]} alt='Project' className='hero-image'/>
                <div className='hero-overlay'>
                    <h1>O&R Landscaping & Construction</h1>
                    <p>Professional Landscaping, Masonry, Fences & More!</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;