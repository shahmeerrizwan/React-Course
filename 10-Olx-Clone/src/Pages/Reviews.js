import React from 'react';
import '../Components/Reviews.css';

const Reviews = () => {
    return (
        <div className="reviews-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 course-details-content">
                        <div className="course-details-card mt--40">
                            <div className="course-content">
                                <h5 className="mb--20">Review</h5>
                                <div className="row row--30">
                                    <div className="col-lg-4">
                                        <div className="rating-box">
                                            <div className="rating-number">5.0</div>
                                            <div className="rating">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                            <span>(25 Review)</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="review-wrapper">
                                            <div className="single-progress-bar">
                                                <div className="rating-text"> 5 <i className="fa fa-star" aria-hidden="true"></i> </div>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <span className="rating-value">23</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-wrapper pt--40">
                                    <div className="section-title">
                                        <h5 className="mb--25">Reviews</h5>
                                    </div>
                                    <div className="edu-comment">
                                        <div className="thumbnail">
                                            <img src="https://avatars.githubusercontent.com/u/148860820?v=4" alt="Comment Images" />
                                        </div>
                                        <div className="comment-content">
                                            <div className="comment-top">
                                                <h6 className="title">Shahmeer Rizwan</h6>
                                                <div className="rating">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <span className="subtitle">“ Outstanding Review Design ”</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                    <div className="edu-comment">
                                        <div className="thumbnail">
                                            <img src="https://avatars.githubusercontent.com/u/148860820?v=4" alt="Comment Images" />
                                        </div>
                                        <div className="comment-content">
                                            <div className="comment-top">
                                                <h6 className="title">MSR</h6>
                                                <div className="rating">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <span className="subtitle">“ Nice Review Design ”</span>
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
