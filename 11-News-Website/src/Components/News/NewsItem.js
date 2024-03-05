import React from 'react'
import './New.css';



const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props



    return (
        <div className="cardd ">
            <div className="card-headerr">
                <img src={!imageUrl ? "https://res.cloudinary.com/teepublic/image/private/s--UNm73W6m--/t_Preview/b_rgb:191919,c_limit,f_auto,h_630,q_90,w_630/v1606803184/production/designs/16724220_0.jpg" : imageUrl} alt="Img Not Found" />
            </div>
            <div className="card-bodyy">
                <span className="tagg tag-teall source">{source}</span>
                <h4>
                    {title && title.slice(0, 40)}...  <span className="badge rounded-pill text-bg-info">Latest News</span>
                </h4>
                <p>
                    {!description ? "Description Not Available" : description && description.slice(0, 80)}...
                </p>
                <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author}  on <br /> {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target='blank'>  <button className="tagg tag-teall s-m" > Read More <span className='arroww'>&#8594;</span> </button></a>
            </div>
        </div>




    )
}

export default NewsItem;