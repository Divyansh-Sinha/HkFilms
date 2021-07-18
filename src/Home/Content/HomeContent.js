import React from 'react';
import dance from "../../images/background/girl2.jpg"
import './HomeContent.css'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';


const HomeContent = () => {
    return (
        <article className="mb7">
            <div className="content1">
                <Fade delay="500" left>
                    <div className="box ">
                        <div className="coLeft">
                            <h2 className="pb3 mb4">When creator disappears the creative remains...</h2>
                            <h3 className="calisto fw9 lh-solid "> LEADING TO THE DANCE OF HEART...</h3>
                            <blockquote >
                                <p className="athelas">
                                    When creator disappears the Creative remains
                                    When an artist  forges
                                    Even after, his art lives
                                    That's the beauty of art
                                    The art never dies

                                </p>
                            </blockquote>
                        </div>
                    </div>
                </Fade>
                <div className="box">
                    <div className="colRight">
                        <Bounce delay="200" top>
                            <Fade right>
                                <img width="380" height="500" src={dance} alt="" />
                            </Fade>
                        </Bounce>
                    </div>
                </div>
            </div>
        </article>
    );

}




export default HomeContent;