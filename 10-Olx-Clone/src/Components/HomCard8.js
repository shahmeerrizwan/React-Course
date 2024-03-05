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
            <h1 className='bikes'>MORE JOBS</h1>
            <button ref={leftButtonRef} className="left" onClick={leftScroll}>
                <i className="fas fa-angle-double-left"></i>
            </button>
            <div ref={scrollImagesRef} className="scroll-images">
                <div className="child">
                    <a href="https://www.olx.com.pk/item/jobs-in-canada-full-time-jobs-work-permit-work-visa-available-iid-1083894511" target='blank'><img src="https://images.olx.com.pk/thumbnails/432890174-800x600.webp" alt="Card 1" />
                        <h4 className=''>Jobs in Canada</h4>
                        <p>WE Providing A Jobs secure Jobs in Canada,
                            DIFFERENT TYPE OF JOBS Avaliable
                            FOR MALE and Female,
                        </p>
                        <h5>Last Updated 30 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/company-visa-avaialble-jobs-in-saudia-worker-required-jobs-offer-iid-1079327578" target='blank'><img src="https://images.olx.com.pk/thumbnails/434860125-800x600.webp" alt="Card 1" />

                        <h4 className=''>Saudi Bin Laden Group Co. , Ltd.</h4>
                        <p>Company Visa Avaialble, Jobs in Saudia, Worker Required, jobs offer</p>
                        <h5>Last Updated 38 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/job-for-males-females-students-part-time-full-time-home-based-job-iid-1084124807" target='blank'><img src="https://images.olx.com.pk/thumbnails/434287326-800x600.webp" alt="Card 1" />

                        <h4 className=''>Job for Males, Females, Students</h4>
                        <p>Male and Female Staff needed for Office working and Online working in our FBR Registered Company</p>
                        <h5>Last Updated 12 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/call-center-job-tsr-telesale-representative-hiring-iid-1084280922" target='blank'><img src="https://images.olx.com.pk/thumbnails/435217187-800x600.webp" alt="Card 1" />
                        <h4 className=''>Call Center Job Telesale  </h4>
                        <p>Tele-Sales Executive

                            Office Based Job
                            Shift Time : 8 PM to 5 AM</p>
                        <h5>Last Updated 46 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/work-visa-vacancies-available-staff-required-jobs-in-saudi-arabia-iid-1083658888" target='blank'><img src="https://images.olx.com.pk/thumbnails/435822326-800x600.webp" alt="Card 1" />
                        <h4 className=''>Work Visa, Vacancies Available</h4>
                        <p>( Jobs Vacancies in Saudia Arab )
                            | O, 3, 03 - 003, 40, 37 | </p>
                        <h5>Last Updated 5 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/online-jobpart-timefull-timehome-jobdata-entrytypingassignments-iid-1081097253" target='blank'><img src="https://images.olx.com.pk/thumbnails/416055344-800x600.webp" alt="Card 1" />
                        <h4 className=''>Online jobData Entry/Typing</h4>
                        <p>°Requirements°
                            ~Mobile phone
                            ~Internet
                            ~Jazzcash ya Easypaisa ya bank account
                            ~Matric Complete
                            ~Passion</p>
                        <h5>Last Updated 3 Min Ago</h5>
                        <h6>Clicked For More Update</h6></a>
                </div>
                <div className="child">
                    <a href="https://www.olx.com.pk/item/assignment-writing-work-part-timefull-time-daily-payments-iid-1084385353" target='blank'><img src="https://images.olx.com.pk/thumbnails/435850772-800x600.webp" alt="Card 1" />
                        <h4 className=''>Assignment writing work</h4>
                        <p>Government Approved Company
                            Very simple and easy Online job 100%</p>
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
