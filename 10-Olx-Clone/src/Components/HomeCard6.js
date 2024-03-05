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
        <div className="cover">
            <h1 className='bikes'>VIDIOS AUDIOS</h1>

            <button ref={leftButtonRef} className="left" onClick={leftScroll}>
                <i className="fas fa-angle-double-left"></i>
            </button>
            <div ref={scrollImagesRef} className="scroll-images">
                <div className="child">
                    <a href="https://www.olx.com.pk/item/multimedia-projector-vga-and-hdmi-pot-iid-1077803953" target='blank'><img src="https://images.olx.com.pk/thumbnails/396449882-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 25,000</h4>
                        <p>multimedia projector VGA and HDMi pot</p>
                        <h5>Last Updated 80 Min Ago</h5>
                        <h6>Clicked For More Update</h6>
                    </a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/hdmi-and-sdi-capture-card-iid-1080001123" target='blank'><img src="https://images.olx.com.pk/thumbnails/409515324-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 30,000</h4>
                        <p>HDMI AND SDI CAPTURE CARD</p>
                        <h5>Last Updated 10 Min Ago</h5>
                        <h6>Clicked For More Update</h6>
                    </a>

                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/pioneer-vsx-521-hdmi-master-audio-iid-1084311589" target='blank'><img src="https://images.olx.com.pk/thumbnails/435408150-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 30,000</h4>
                        <p>Pioneer vsx 521 HDMI master Audio</p>
                        <h5>Last Updated 30 Min Ago</h5>
                        <h6>Clicked For More Update</h6>
                    </a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/martanz-heavy-duty-650watt-better-than-harman-kardon-bose-lg-pioneer-iid-1081584510" target='blank'><img src="https://images.olx.com.pk/thumbnails/418913593-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 24,000</h4>
                        <p>martanz heavy duty 650watt better than Harman kardon bose lg pioneer</p>
                        <h5>Last Updated 5 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/pioneer-amplifier-iid-1084449421" target='blank'><img src="https://images.olx.com.pk/thumbnails/436224505-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 27,500</h4>
                        <p>PIONEER Amplifier</p>
                        <h5>Last Updated 25 Min Ago</h5>
                        <h6>Clicked For More Update</h6>
                    </a>

                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/denon-amplifier-iid-1084180774" target='blank'><img src="https://images.olx.com.pk/thumbnails/434622872-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 35,000</h4>
                        <p>denon amplifier</p>
                        <h5>Last Updated 35 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/cambridge-audio-azur-340se-stereo-amplifier-jbl-klipsch-sony-yamaha-iid-1084199400" target='blank'><img src="https://images.olx.com.pk/thumbnails/434727961-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 37,000</h4>
                        <p>Cambridge Audio Azur 340se Stereo Amplifier (JBL Klipsch Sony Yamaha)</p>
                        <h5>Last Updated 50 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
            </div>
            <button ref={rightButtonRef} className="right" onClick={rightScroll}>
                <i className="fas fa-angle-double-right"></i>
            </button>
        </div>
    );
}

export default ScrollableCards;
