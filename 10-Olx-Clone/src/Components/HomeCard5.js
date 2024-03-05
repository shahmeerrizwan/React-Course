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
            <h1 className='bikes'>TABLETS</h1>

            <button ref={leftButtonRef} className="left" onClick={leftScroll}>
                <i className="fas fa-angle-double-left"></i>
            </button>
            <div ref={scrollImagesRef} className="scroll-images">
                <div className="child">
                    <a href="https://www.olx.com.pk/item/tab-for-kidsofficial-all-branded-tabs-in-warranty-only-rs-8500to40000-iid-1079616707" target='blank'><img src="https://images.olx.com.pk/thumbnails/422858290-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 6,999</h4>
                        <p>TAB FOR KIDS&OFFICIAL ALL BRANDED TABS IN WARRANTY ONLY Rs. 6999to40000</p>
                        <h5>Last Updated 40 Min Ago</h5>
                        <h6>Clicked For More Update</h6>
                    </a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/new-tab-gaming-tab-kids-tab-office-work-tab-others-tabs-available-iid-1082204715" target='blank'><img src="https://images.olx.com.pk/thumbnails/433747504-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 6,999</h4>
                        <p>NEW TAB/ GAMING TAB/ KID'S TAB/ OFFICE WORK TAB/ OTHERS TAB AVAILABLE.</p>
                        <h5>Last Updated 27 Min Ago</h5>
                        <h6>Clicked For More Update</h6>
                    </a>

                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/tabs-best-for-kids-office-normal-use-100-original-stock-iid-1084395949" target='blank'><img src="https://images.olx.com.pk/thumbnails/435911875-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 8,999</h4>
                        <p>Tabs Best For kids, Office , Normal Use 100% Original Stock</p>
                        <h5>Last Updated 50 Min Ago</h5>
                        <h6>Clicked For More Update</h6>
                    </a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/acer-tab-216-iid-1084410331" target='blank'><img src="https://images.olx.com.pk/thumbnails/435993208-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 6,500</h4>
                        <p>acer tab 2/16</p>
                        <h5>Last Updated 9 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/lenovo-tab-2-a7-iid-1082810495" target='blank'><img src="https://images.olx.com.pk/thumbnails/426224608-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 6,999</h4>
                        <p>Lenovo Tab 2 A7 ( Exchange Possible With Any Old iPhone )</p>
                        <h5>Last Updated 3 Min Ago</h5>
                        <h6>Clicked For More Update</h6>
                    </a>

                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/lenovo-tab4-8-for-sale-216-dual-sims-iid-1084320215" target='blank'><img src="https://images.olx.com.pk/thumbnails/435456988-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 7,500</h4>
                        <p>ILenovo tab4 8 for sale 2/16 dual sims</p>
                        <h5>Last Updated 60 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/new-kids-tab-gaming-tab-office-work-tab-fresh-stock-available-here-iid-1083634019" target='blank'><img src="https://images.olx.com.pk/thumbnails/431272058-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 6,999</h4>
                        <p>NEW TAB FOR KID'S/ GAMING TAB/ OFFICE WORK/ FRESH STOCK AVAILABLE HERE</p>
                        <h5>Last Updated 10 Min Ago</h5>
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
