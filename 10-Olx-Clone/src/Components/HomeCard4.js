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
            <h1 className='bikes'>MOBILE PHONES</h1>

            <button ref={leftButtonRef} className="left" onClick={leftScroll}>
                <i className="fas fa-angle-double-left"></i>
            </button>
            <div ref={scrollImagesRef} className="scroll-images">
                <div className="child">
                    <a href="https://www.olx.com.pk/item/vivo-s1-8gb-128gb-dual-sim-box-all-accessories-pta-approved-iid-1072820268" target='blank'><img src="https://images.olx.com.pk/thumbnails/371283404-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 23,499</h4>
                        <p>Vivo S1 8gb 128gb box pta approved box accessories</p>
                        <h5>Last Updated 30 Min Ago</h5>
                        <h6>Clicked For More Update</h6>
                    </a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/iphone-11-pro-max-iid-1074903277" target='blank'><img src="https://images.olx.com.pk/thumbnails/435063264-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 180,000</h4>
                        <p>Samsung s22 ultra</p>
                        <h5>Last Updated 30 Min Ago</h5>
                        <h6>Clicked For More Update</h6>
                    </a>

                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/google-pixel-7-8gb-128gb-pta-approved-official-iid-1081073816" target='blank'><img src="https://images.olx.com.pk/thumbnails/432882060-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 52,000</h4>
                        <p>Google Pixel 6 8gb 128gb factory unlocked waterpack</p>
                        <h5>Last Updated 30 Min Ago</h5>
                        <h6>Clicked For More Update</h6>
                    </a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/13promax-pta-256gb-iid-1083181441" target='blank'><img src="https://images.olx.com.pk/thumbnails/428500038-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 310,000</h4>
                        <p>13promax PTA 256gb</p>
                        <h5>Last Updated 30 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/samsung-galaxy-a04s-box-pack-pta-approve-official-warranty-a14-a54-a34-iid-1079833126" target='blank'><img src="https://images.olx.com.pk/thumbnails/431347060-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 57,500</h4>
                        <p>SAMSUNG GALAXY A24 BOX PACK PTA APPROVE OFFICIAL WARRANTY A04s A54 A34</p>
                        <h5>Last Updated 30 Min Ago</h5>
                        <h6>Clicked For More Update</h6>
                    </a>

                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/iphone-8plus-pta-approved-iid-1084449339" target='blank'><img src="https://images.olx.com.pk/thumbnails/436224059-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 49,500</h4>
                        <p>IPHONE 8PLUS PTA APPROVED</p>
                        <h5>Last Updated 30 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/iphone-x-non-pta-64-gb-face-id-ok-haiexchange-possible-iphone-7plus-se-iid-1084448729" target='blank'><img src="https://images.olx.com.pk/thumbnails/436220369-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 39,000</h4>
                        <p>iphone x non pta 64 gb face id ok haiexchange possible iphone 7plus se</p>
                        <h5>Last Updated 30 Min Ago</h5>
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
