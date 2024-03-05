import React, { useState, useEffect } from 'react';
import './Card2.css';

const items = [
    {
        testimonial: "The chief justice of the Supreme Court (SC) has finally taken suo motu notice of the cunningly planned and orchestrated...",
        name: "Raoof Hasan",
        position: "26th Feb, 2023. 09:30 am",
        imageSrc: "https://www.bolnews.com/wp-content/uploads/2022/11/Raof-Hassan-scaled.jpg",
        link: "https://example.com/page1"
    },
    {
        testimonial: "India’s hard-right Hindu nationalist Bharatiya Janata Party (BJP) government is pushing very hard to prevent the realities of its illegal...",
        name: "Hannan R. Hussain",
        position: "19th Feb, 2023. 09:25 am",
        imageSrc: "https://www.bolnews.com/wp-content/uploads/2022/11/Hannan-R-Hussain.jpg",
        link: "https://example.com/page2"
    },
    {
        testimonial: "In a telephonic conversation with his Iranian counterpart Hossein Amir-Abdollahian, Foreign Minister Qin Gang spoke of China viewing its relationship...",
        name: "Hamzah Hussain",
        position: "Product Manager, Intel",
        imageSrc: "https://www.bolnews.com/wp-content/uploads/2022/03/Hamza-Hussain.png",
        link: "https://example.com/page3"
    },
    {
        testimonial: "The Ukraine war has gone wrong for all the stakeholders. Russia may have miscalculated the success of its “special operation”...",
        name: "Amb. (R) Asif Durrani",
        position: "26th Feb, 2023. 09:10 am",
        imageSrc: "https://www.bolnews.com/wp-content/uploads/2022/02/Asif-Durrani-1.jpg",
        link: "https://example.com/page4"
    }
];

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const slider = document.querySelector('.slider');
        slider.style.transform = `translateX(${-activeIndex * slider.offsetWidth}px)`;
    }, [activeIndex]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <main>
            <ul className='slider'>
                {items.map((item, index) => (
                    <li className={index === activeIndex ? 'item animation' : 'item'} key={index}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer"> {/* Anchor tag with target="_blank" opens the link in a new tab */}
                            <div className='testimonial'>
                                <p>"{item.testimonial}"</p>
                                <p>{item.name}</p>
                                <p>{item.position}</p>
                            </div>
                            <img className='image' src={item.imageSrc} alt={`Testimonial by ${item.name}`} />
                        </a>
                    </li>
                ))}
            </ul>
            <div className='nav1'>
                {items.map((_, index) => (
                    <button className='btn' aria-label="Carousel Button" data-index={index} key={index} onClick={() => handleButtonClick(index)}></button>
                ))}
            </div>
        </main>
    );
};

export default Slider;
