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
            <h1 className='bikes'>Houses</h1>

            <button ref={leftButtonRef} className="left" onClick={leftScroll}>
                <i className="fas fa-angle-double-left"></i>
            </button>
            <div ref={scrollImagesRef} className="scroll-images">
                <div className="child">
                    <a href="https://www.olx.com.pk/item/275-marla-modern-2-units-house-for-sale-iid-1084441774" target='blank'><img src="https://images.olx.com.pk/thumbnails/436182691-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 12,000,000</h4>
                        <p>2.75 Marla Modern 2 units House For sale <br />Bilal offers a great opportunity in the town of houses where every buyer can easily buy his own house ,Hot location 1 mnt away from main road,
                            With 3 bed/bath/TVl/kitchen/garage ,40 feet road
                            Gas/electricity/water meters</p>
                        <h5>Last Updated 30 Min Ago</h5>
                        <h6>Clicked For More Update</h6>
                    </a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/225-marla-classic-house-for-sale-iid-1084441072" target='blank'><img src="https://images.olx.com.pk/thumbnails/436178876-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 12,000,000</h4>
                        <p>2.25 Marla Classic House For Sale <br />Bilal Estate offers one of the best option for clients.
                            Map approved from Cantt Board LHR.
                            2.25 Marla house with 3 proper bed/attach bath/car garage
                            proper 2 kitchens for both floors and sep entrance for upper portion.
                            Hot location nearest main road
                            With Gas/Water/Electricity meters
                            20 feet road
                            Nearest cakes and bakes/Eurostore/Gourmet/Malmo</p>
                        <h5>Last Updated 30 Min Ago</h5>
                        <h6>Clicked For More Update</h6>
                    </a>

                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/brand-new-275-marla-house-hot-location-near-beacon-house-school-walton-road-iid-1084107255" target='blank'><img src="https://images.olx.com.pk/thumbnails/434176838-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 13,500,000</h4>
                        <p>Brand New 2.75 Marla House Hot Location Near Beacon House School, Walton Road</p>
                        <h5>Last Updated 30 Min Ago</h5>
                        <h6>Clicked For More Update</h6>
                    </a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/brand-new-225-marla-house-for-sale-iqbal-park-near-adil-hospital-iid-1084285129" target='blank'><img src="https://images.olx.com.pk/thumbnails/435241502-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 12,500,000</h4>
                        <p>Brand New 2.25 Marla House For Sale Iqbal Park Near Adil Hospital <br /> 2.25 Marla Brand New House For Sale
                            3 Bedrooms
                            2 Kitchens + TV lounge
                            3 bathrooms
                            Garage
                            All Connections are Available
                            Registry and Intaqaal
                            Street Size 15Ft
                            Location Iqbal Park Street 5 main boulevard Defence Road
                            Demand125-/-</p>
                        <h5>Last Updated 30 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/35-marla-brand-new-double-story-in-al-hamed-colony-opp-neelam-block-iqbal-town-lahore-iid-1084415574" target='blank'><img src="https://images.olx.com.pk/thumbnails/436024257-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 15,000,000</h4>
                        <p>3.5 Marla Brand New Double Story In AL Hamed Colony Opp Neelam Block Iqbal Town Lahore</p>
                        <h5>Last Updated 30 Min Ago</h5>
                        <h6>Clicked For More Update</h6>
                    </a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/3-marla-house-in-central-marghzar-officers-colony-for-sale-iid-1084355428" target='blank'><img src="https://images.olx.com.pk/thumbnails/435668813-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 13,000,000</h4>
                        <p>3 Marla House In Central Marghzar Officers Colony For Sale</p>
                        <h5>Last Updated 30 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/2-marla-house-available-for-sale-in-multan-road-iid-1084435890" target='blank'><img src="https://images.olx.com.pk/thumbnails/436149397-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 9,800,000</h4>
                        <p>2 Marla House Available For Sale In Multan Road</p>
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
