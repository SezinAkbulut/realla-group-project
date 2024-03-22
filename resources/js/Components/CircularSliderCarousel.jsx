import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import "../../css/Dashboard.css"

const CircularSliderCarousel = () => {
    const [active, setActive] = useState(0);
    const [rotate, setRotate] = useState(0);
    const items = [
        { src: './images/1.jpg', title: 'REPORT A PROBLEM', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' },
        { src: './images/2.jpg', title: 'MAKE A APPOINTMENT', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' },
        { src: './images/4.jpg', title: 'SEE YOUR DOCUMENTS', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' },
        { src: './images/5.jpg', title: 'MANAGE YOUR PAYMENT', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' },

    ];


    const rotateAdd = 360 / items.length;

    const nextSlider = () => {
        const nextActive = (active + 1) % items.length;
        setActive(nextActive);
        setRotate(rotate - rotateAdd);
    };

    const prevSlider = () => {
        const prevActive = (active - 1 + items.length) % items.length;
        setActive(prevActive);
        setRotate(rotate + rotateAdd);
    };

    return (
        <div className="circular-slider-carousel">
            <button id="prev" style={{fontSize:`50px` }} onClick={prevSlider}><FaAngleLeft /></button>
            <div className="slider">
                <div className="title" >Welcome User!</div>
                <div className="images" style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}>
                    {items.map((item, index) => (
                        <div className={`item ${index === active ? 'active' : ''}`} style={{ '--i': index + 1 }} key={index}>
                            <img src={item.src} alt={`Product ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className="content">
                    {items.map((item, index) => (
                        <div className={`item ${index === active ? 'active' : ''}`} key={index}>
                            <h1>{item.title}</h1>
                            <div className="des">{item.description}</div>
                            <button>See more</button>
                        </div>
                    ))}
                </div>
            </div>
            <button id="next" onClick={nextSlider}><FaAngleRight /></button>
        </div>
    );
};

export default CircularSliderCarousel;
