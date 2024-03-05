import React from 'react'
import './Card4.css';



export default function Card1() {
    return (
        <div>
            <h1 className='latest'>Latest News </h1>

            <div className="blog-card">

                <div className="meta">
                    <div className="photo"></div>
                    <ul className="details">
                        <li className="author"><a href="/">Shahbaz Sharif</a></li>
                        <li className="date">March. 3, 2024</li>
                        <li className="tags">
                            <ul>
                                <li><a href="https://www.abc.net.au/news/2024-03-02/india-richest-man-mukesh-ambani-son-anant-ambani-pre-wedding/103537720">Learn More</a></li>

                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="description">
                    <h1>Shehbaz Sharif returns as Pakistan prime minister amid chaotic scenes in parliament</h1>
                    <a className='blank' href="https://www.yahoo.com/news/shehbaz-sharif-returns-pakistan-prime-124657950.html?fr=sycsrp_catchall" target='blank'> <h2>Prime minister Of Pakistan</h2></a>
                    <p> Pakistan’s parliament has elected Shehbaz Sharif as the country’s new prime minister, ending a political deadlock almost a month long following elections on 8 February which were marred by allegations of rigging.

                        Mr Sharif was voted in by Pakistan’s National Assembly to return for a second spell as prime minister after he stood down in August last year to allow a caretaker government to conduct elections. He previously entered the role following the 2022 vote of no confidence in Imran Khan.

                        On Sunday Mr Sharif secured 201 votes from MPs, defeating his rival Omar Ayub Khan who stood as the candidate of choice for MPs loyal to Imran Khan, securing 92 votes. Mr Ayub is also the grandson of Pakistan’s first military dictator.

                        The newly-elected leader delivered his first speech amid loud protests and chants from allies of the jailed former prime minister Mr Khan, whose PTI party has alleged widespread voter fraud and that its mandate to lead the country was stolen.

                        The Pakistan Muslim League-Nawaz (PML-N) party’s Mr Sharif will head a coalition government with the Pakistan People’s Party (PPP) after no party was able to win an outright majority in the elections.</p>
                    <p className="read-more">
                        <a href="https://www.yahoo.com/news/shehbaz-sharif-returns-pakistan-prime-124657950.html?fr=sycsrp_catchall">Read More</a>
                    </p>
                </div>
            </div>
        </div>


    )
}
