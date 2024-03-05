import React, { useState, useEffect } from 'react';
import NewsItem from '../News/NewsItem';
import Spinner from '../../Assets/Spinner';
import PropTypes from 'prop-types';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - MSR`;
        fetchArticles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.category]);

    const fetchArticles = async (page = 1) => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=db82359fc09d47dda02078e9710f0167&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        props.setProgress(0);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setLoading(false);
        props.setProgress(100);
    }

    const handlePrevClick = async () => {
        if (!loading && page > 1) {
            fetchArticles(page - 1);
            setPage(page - 1);
        }
    }

    const handleNextClick = async () => {
        if (!loading) {
            fetchArticles(page + 1);
            setPage(page + 1);
        }
    }

    return (
        <div>
            <h1 className='text-center'>Latest News On {capitalizeFirstLetter(props.category)} - MSR News </h1>
            {loading && <Spinner />}

            <div className='containerr'>
                {!loading && articles && articles.map((element, index) => (
                    <NewsItem
                        key={`${element.url}-${index}`}
                        title={element.title}
                        description={element.description}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                    />
                ))}
            </div>
            <div className='container d-flex justify-content-between'>
                <button disabled={loading || page <= 1} type='button' className={loading || page <= 1 ? 'disabled-button' : 'active-button'} onClick={handlePrevClick}> Previous</button>
                <button disabled={loading || !articles.length} className={loading || !articles.length ? 'disabled-button' : 'active-button'} onClick={handleNextClick}>Next <span className='arrow'>&#8594;</span></button>
            </div>

        </div>
    );
}
<span className='arrow'>&#8594;</span>
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News;
