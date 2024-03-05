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
            <h1 className='bikes'>BIKES</h1>
            <button ref={leftButtonRef} className="left" onClick={leftScroll}>
                <i className="fas fa-angle-double-left"></i>
            </button>
            <div ref={scrollImagesRef} className="scroll-images">
                <div className="child">
                    <a href="https://www.olx.com.pk/item/kawasaki-z1000-replica-iid-1083646558" target='blank'><img src="https://images.olx.com.pk/thumbnails/431355869-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 875,000</h4>
                        <p>z1000
                            model 2021
                            registered 2021
                            bike is in immaculate condition
                            m4 exhaust installed
                            aftermarket indicators installed
                            just like brand new
                            gift for replica lovers
                            for more information please contact
                            can be seen at Bike station branch DHA</p>
                        <h5>Last Updated 46 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/yamaha-yzf-r1-2012-iid-1083855982" target='blank'><img src="https://images.olx.com.pk/thumbnails/432651968-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 2,350,000</h4>
                        <p>Yamaha YZF-R1 2012 <br />Registered: Punjab
                            LOCATION : Daska Road, Sialkot Punjab
                            •No work Required
                            •Never got into accident
                            •Fully maintained through authorized dealership
                            -Used olny myself
                            -Everything is in genuine condition
                            Biometric on the spot
                            Feel free to contact me for more information or to schedule a viewing
                            MORE INFORMATION ONLY CONTACT THIS NUMBER</p>
                        <h5>Last Updated 30 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/heavy-bike-ducati-replica-400cc-iid-1084258261" target='blank'><img src="https://images.olx.com.pk/thumbnails/435081510-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 890,000</h4>
                        <p>Available for sale Ducati replica
                            400cc
                            Water cooled
                            2022 model
                            Khi registered
                            First owner
                            All documents complete smart card
                            Digital speedometer
                            EFI base
                            Dual clyinder
                            Hazard system
                            After Market akraprovix exhaust install
                            After Market fancy plate
                            After Market padlock bold install
                            10/10 condition
                            Not a single panny work required just buy and fly
                            890k demand
                            for more details contact on what'sapp number
                        </p>
                        <h5>Last Updated 28 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/best-low-budget-sports-racing-heavy-bikes-brand-new-custom-pain-400cc-iid-1080525101" target='blank'><img src="https://images.olx.com.pk/thumbnails/412624701-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 1,095,000</h4>
                        <p> best low budget sports racing heavy bikes brand new custom pain 400cc <br />it’s ow motors
                            best bikes showroom in Pakistan
                            all kinds of bikes available
                            250cc ,400cc 150cc ,200cc</p>
                        <h5>Last Updated 7 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/heavy-bike-ducati-replica-400cc-engine-swap-iid-1083055652" target='blank'><img src="https://images.olx.com.pk/thumbnails/427721962-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 830,000</h4>
                        <p>Ducati replica
                            engine swap with Honda cb super 4 vtec euro 2 engine
                            400cc liquid cooled inline 4
                            all documents complete
                            engine slip available
                            engine not updated on book
                            for more details contact on what'sapp number</p>
                        <h5>Last Updated 10 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/suzuki-hayabusa-1300cc-sports-bike-super-bike-heavy-bike-gsxr-iid-1080841275" target='blank'><img src="https://images.olx.com.pk/thumbnails/414517676-240x180.webp" alt="Card 1" />

                        <h4 className=''>Rs 4,450,000</h4>
                        <p>SUZUKI HAYABUSA 1300cc SPORTS BIKE SUPER BIKE HEAVY BIKE GSXR</p>
                        <h5>Last Updated 30 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/suzuki-gsx-r600-2014-iid-1083807922" target='blank'><img src="https://images.olx.com.pk/thumbnails/432358334-800x600.webp" alt="Card 1" />

                        <h4 className=''>Rs 3,350,000</h4>
                        <p> Suzuki GSX-R600 2014 <br /> GSXR 600
                            Total Original paint
                            Engine Packed
                            Crash Guards
                            New Tires (Nankang only 50 km ride)
                            Engine oil changed with Filters
                            Milage 13000
                            SC project Exhaust
                            Model 2014
                            Import 2018
                            Lhr Registered 2018
                            Feel free to contact me for more information or to schedule a viewing
                            MORE INFORMATION ONLY CONTACT THIS NUMBER</p>
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
