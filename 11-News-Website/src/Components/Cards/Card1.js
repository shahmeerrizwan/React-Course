import React from 'react'
import './Card1.css';



export default function Card1() {
    return (
        <div>
            <h1 className='latest'>Latest News </h1>
            <div className="blog-card">
                <div className="meta">
                    <div className="ambani"></div>
                    <ul className="details">
                        <li className="author"><a href="/">Anant Ambani</a></li>
                        <li className="date">March. 3, 2024</li>
                        <li className="tags">
                            <ul>
                                <li><a href="https://www.abc.net.au/news/2024-03-02/india-richest-man-mukesh-ambani-son-anant-ambani-pre-wedding/103537720">Learn More</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="description">
                    <h1>India's richest man brings Rihanna, Mark Zuckerberg and 1,200 guests to a pre-wedding celebration for his son</h1>
                    <a className='blank' href="https://www.abc.net.au/news/2024-03-02/india-richest-man-mukesh-ambani-son-anant-ambani-pre-wedding/103537720" target='blank'> <h2>Mark Zuckerberg, Bill Gates and Ivanka Trump attending</h2></a>
                    <p> Billionaire Mukesh Ambani is kickstarting big fat Indian wedding celebrations for his son, Anant Ambani, 28, who is set to marry his longtime girlfriend Radhika Merchant.

                        He's expecting billionaires from around the world, heads of state, and Hollywood and Bollywood royalty to attend a three-day bash in the family's hometown, which kicked off on Friday.

                        The occasion that has India transfixed is a three-day pre-wedding jamboree for his youngest son.</p>
                    <p className="read-more">
                        <a href="https://www.abc.net.au/news/2024-03-02/india-richest-man-mukesh-ambani-son-anant-ambani-pre-wedding/103537720">Read More</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
