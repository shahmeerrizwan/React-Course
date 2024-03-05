import React, { useEffect, useRef, useState } from 'react';

function ScrollableCards() {
    const scrollImagesRef = useRef(null);
    const [scrollLength, setScrollLength] = useState(0);
    const leftButtonRef = useRef(null);
    const rightButtonRef = useRef(null);


    useEffect(() => {
        const scrollImages = scrollImagesRef.current;
        const updateScrollLength = () => {
            if (scrollImages) {
                setScrollLength(scrollImages.scrollWidth - scrollImages.clientWidth);
            }
        };
        updateScrollLength();
        window.addEventListener('resize', updateScrollLength);
        return () => {
            window.removeEventListener('resize', updateScrollLength);
        };
    }, []);

    useEffect(() => {
        const scrollImages = scrollImagesRef.current;
        const leftButton = leftButtonRef.current;
        const rightButton = rightButtonRef.current;

        const checkScroll = () => {
            if (scrollImages) {
                const currentScroll = scrollImages.scrollLeft;
                if (currentScroll === 0) {
                    leftButton.setAttribute("disabled", "true");
                    rightButton.removeAttribute("disabled");
                } else if (currentScroll === scrollLength) {
                    rightButton.setAttribute("disabled", "true");
                    leftButton.removeAttribute("disabled");
                } else {
                    leftButton.removeAttribute("disabled");
                    rightButton.removeAttribute("disabled");
                }
            }
        };

        if (scrollImages) {
            scrollImages.addEventListener('scroll', checkScroll);
            return () => {
                scrollImages.removeEventListener('scroll', checkScroll);
            };
        }
    }, [scrollLength]);

    const leftScroll = () => {
        if (scrollImagesRef.current) {
            scrollImagesRef.current.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        }
    };

    const rightScroll = () => {
        if (scrollImagesRef.current) {
            scrollImagesRef.current.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div className="cover">
                <h1 className='cars'>CARS</h1>

                <button ref={leftButtonRef} className="left" onClick={leftScroll}>
                    <i className="fas fa-angle-double-left"></i>
                </button>
                <div ref={scrollImagesRef} className="scroll-images">
                    <div className="child">
                        <a href="https://www.olx.com.pk/item/toyota-hilux-revo-dual-ac-iid-1084390854" target='blank'><img src="https://images.olx.com.pk/thumbnails/435883108-800x600.webp" alt="Card 1" />

                            <h4 className=''>Rs 10,500,000</h4>
                            <p>Toyota Hilux Revo Dual AC</p>
                            <h5>Last Updated 5 Min Ago</h5>
                            <h6>Clicked For More Update</h6></a>
                    </div>
                    <div className="child">
                        <a href="https://www.olx.com.pk/item/mercedes-c250-avantgarde-cgi-turbo-iid-1083044763" target='blank'><img src="https://images.olx.com.pk/thumbnails/427659471-800x600.webp" alt="Card 1" />

                            <h4 className=''>Rs 5,650,000</h4>
                            <p>2Mercedes C250 Avantgarde cgi turbo</p>
                            <h5>Last Updated 10 Min Ago</h5>
                            <h6>Clicked For More Update</h6></a>
                    </div>
                    <div className="child">
                        <a href="https://www.olx.com.pk/item/toyota-revo-2018-better-than-vezel-prado-iid-1084055452" target='blank'><img src="https://images.olx.com.pk/thumbnails/433867303-800x600.webp" alt="Card 1" />

                            <h4 className=''>Rs 9,850,000</h4>
                            <p>Toyota Revo 2018 Better than Vezel Prado</p>
                            <h5>Last Updated 40 Min Ago</h5>
                            <h6>Clicked For More Update</h6></a>
                    </div>
                    <div className="child">
                        <a href="https://images.olx.com.pk/thumbnails/435843423-800x600.webp" target='blank'><img src="https://images.olx.com.pk/thumbnails/435843423-800x600.webp" alt="Card 1" />

                            <h4 className=''>Rs 9,631,000</h4>
                            <p>Toyota corolla cross hybrid</p>
                            <h5>Last Updated 32 Min Ago</h5>
                            <h6>Clicked For More Update</h6></a>
                    </div>
                    <div className="child">
                        <a href="https://www.olx.com.pk/item/2021-revi-new-tv-iid-1084388778" target='blank'><img src="https://images.olx.com.pk/thumbnails/435871237-800x600.webp" alt="Card 1" />

                            <h4 className=''>Rs 11,050,000</h4>
                            <p>2021 revo new tv 03123597704 num hai</p>

                            <h5>Last Updated 26 Min Ago</h5>
                            <h6>Clicked For More Update</h6>
                        </a>

                    </div>

                    <div className="child">
                        <a href="https://www.olx.com.pk/item/mercedes-c180-sunroof-elegance-model-iid-1084378273" target='blank'><img src="https://images.olx.com.pk/thumbnails/435806482-800x600.webp" alt="Card 1" />

                            <h4 className=''>Rs 3,050,000</h4>
                            <p>Mercedes C180 Sunroof elegance model 1.8L supercharged</p>
                            <h5>Last Updated 20 Min Ago</h5>
                            <h6>Clicked For More Update</h6></a>
                    </div>
                    <div className="child">
                        <a href="https://www.olx.com.pk/item/toyota-yaris-ativ-cvt-13l-iid-1084478767" target='blank'><img src="https://images.olx.com.pk/thumbnails/436397152-800x600.webp" alt="Card 1" />

                            <h4 className=''>Rs 4,450,000</h4>
                            <p>TOYOTA YARIS ATIV CVT 1.3L</p>
                            <h5>Last Updated 2 Min Ago</h5>
                            <h6>Clicked For More Update</h6></a>
                    </div>
                    <div className="child">
                        <a href="https://www.olx.com.pk/item/honda-civic-oriel-18-i-vtec-cvt-2020-iid-1084480945" target='blank'><img src="https://images.olx.com.pk/thumbnails/436410368-800x600.webp" alt="Card 1" />

                            <h4 className=''>Rs 5,800,000</h4>
                            <p>Honda Civic Oriel 1.8 i-VTEC CVT 2020</p>
                            <h5>Last Updated 24 Min Ago</h5>
                            <h6>Clicked For More Update</h6></a>
                    </div>
                    <div className="child">
                        <a href="https://www.olx.com.pk/item/honda-city-2021-whatsapp-call-only-iid-1082633319" target='blank'><img src="https://images.olx.com.pk/thumbnails/425136966-800x600.webp" alt="Card 1" />

                            <h4 className=''>Rs 4,380,000</h4>
                            <p>HONDA CITY 2021 WHATSAPP CALL ONLY</p>
                            <h5>Last Updated 80 Min Ago</h5>
                            <h6>Clicked For More Update</h6></a>
                    </div>
                    <div className="child">
                        <a href="https://www.olx.com.pk/item/mazda-rx8-iid-1084397239" target='blank'><img src="https://images.olx.com.pk/thumbnails/435992366-800x600.webp" alt="Card 1" />

                            <h4 className=''>Rs 2,650,000</h4>
                            <p>2500 cc engine capacity
                                ac working perfectly
                                suspension ok hn
                                documents original
                                differncial weld hn
                                cleanest hn
                                buy and enjoy the ride</p>
                            <h5>Last Updated 50 Min Ago</h5>
                            <h6>Clicked For More Update</h6></a>
                    </div>
                </div>
                <button ref={rightButtonRef} className="right" onClick={rightScroll}>
                    <i className="fas fa-angle-double-right"></i>
                </button>
            </div></>
    );
}

export default ScrollableCards;
