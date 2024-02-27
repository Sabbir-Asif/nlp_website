import React from 'react';

const BodyElements = () => {
    return (
        <div className="body">
            <div className="text">
                <p className="title"> Bangla NLP</p>
                <p className="i-name">IIT, University of Dhaka</p>
                <p className="description">Welcome to our NLP Group's website! We're all about making computers understand our mother language better. Check out our resources to be part of this journey. Let's shape the future of language and tech together!</p>
            </div>
            <div className="building-image">
                <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className=""></li>
                        <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                        <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                        <li data-target="#myCarousel" data-slide-to="3" className="active"></li>
                    </ol>

                    {/* Carousel Items */}
                    <div className="carousel-inner">
                        <div className="item">
                            <img src="/images/iit_du_building1.png" alt="IIT,DU building" style={{ width: '500px', height: '300px' }} />
                        </div>
                        <div className="item">
                            <img src="/images/ahmedulkabir.jpg" alt="Dr. Ahmedul Kabir" style={{ width: '500px', height: '300px' }} />
                        </div>
                        <div className="item">
                            <img src="/images/shebutyrayana.jpg" alt="Dr. Shebuty Rayana" style={{ width: '500px', height: '300px' }} />
                        </div>
                        <div className="item active">
                            <img src="/images/slider/zarifmasud.jpg" alt="zarif masud" style={{ width: '500px', height: '300px' }} />
                        </div>
                    </div>

                    {/* Left and right controls */}
                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <p>IIT, DU NLP Research Group</p>
            </div>
        </div>
    );
};

export default BodyElements;
