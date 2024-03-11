import React, { useState, useEffect } from 'react';

const About = () => {
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    const targetCounts = [20, 78000, 190, 35];
    const duration = 3; // in seconds
    const easing = t => t; // linear easing function

    useEffect(() => {
        const startTimes = counts.map(() => performance.now());
        const endTimes = startTimes.map(startTime => startTime + duration * 1000);

        const updateCounts = () => {
            const newCounts = counts.map((currentCount, index) => {
                const startTime = startTimes[index];
                const endTime = endTimes[index];
                const now = performance.now();
                const timeElapsed = Math.min(1, (now - startTime) / (endTime - startTime));
                const easedProgress = easing(timeElapsed);
                const targetCount = targetCounts[index];
                return Math.floor(easedProgress * targetCount);
            });
            setCounts(newCounts);

            if (counts.some((currentCount, index) => {
                const endTime = endTimes[index];
                return performance.now() < endTime;
            })) {
                requestAnimationFrame(updateCounts);
            }
        };

        requestAnimationFrame(updateCounts);

        return () => {
            // Cleanup function
            cancelAnimationFrame(updateCounts);
        };
    }, []);



    return (
        <div id="about">

            <br />
            <hr />
            <br />
            <br />
            <span className="firstheading"><h1 >About </h1></span>
            <span className="secondheading"><h1>MSR Restaurant</h1></span>
            <br />
            <p className='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt.
            </p>

            <br />

            <div className="abouttext">
                <p id='MyNumber'>{counts[0]}</p>
                <p>Years of Experience</p>
            </div>

            <div className="abouttext">
                <p id="MyNumber2">{counts[1]}</p>
                <p>Happy customers!</p>
            </div>

            <div className="abouttext">
                <p id="MyNumber3">{counts[2]}</p>
                <p>Menus</p>
            </div>

            <div className="abouttext">
                <p id="MyNumber4">{counts[3]}</p>
                <p>Staffs</p>
            </div>
            <br />
            <br />
        </div>
    );
}
export default About;