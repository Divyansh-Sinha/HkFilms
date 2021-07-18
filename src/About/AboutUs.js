import React from 'react';
import styled from "styled-components";

const AboutUs = () => {
    return (
        <div className='aboutContainer'>
            <div className="aboutUsImage">
                <div className="imgText f2 fw6">Who We Are</div>
            </div>
            <div className="aboutUs">
                <div className="box">
                    <h1>About Us</h1>
                    <span className="divider"></span>
                    <p>You wanna get a change,
                        Or learn something new.
                        Enrich your happiness and,
                        Revive your taste of music
                        We are all here for you.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Explore our site and tune on the instrument with a perfect blend of music you want to relieve again. Explore the artist inside you with us and embark on your new journey.

                    </p>
                </div>
                <div className="box">
                    <img src={require('./about.jpg').default} alt="" />
                </div>
            </div>

            <div className="aboutUsMV">
                <div className="box">
                    <h1>Mission</h1>
                    <span className="divider"></span>

                    <p style={{ marginTop: '1rem' }}>
                        "Art" has always been a fascinating part of our lives.
                        It has made us understand, what we really dwell for.
                        To art to be loved and explored further, we bring you the best,from the best!
                        So learn with us, grow with us, experience with us and explore with us the journey of arts and culture. We promise we will never let you walk alone, we will be there till this journey of yours with us, becomes the most memorable and beautiful one!



                    </p>
                </div>
                <div className="box">
                    <h1>Vision </h1>
                    <span className="divider"></span>

                    <p style={{ marginTop: '1rem' }}>
                        We here at H. K.  Films focus on improving the skills of each and every artist who loves art more than anything
                        We bring you a platform full of knowledge, training, growth, and enhancement so that you can bring the best out of yourself!


                    </p>
                </div>
            </div>


        </div>
    );
}

export default AboutUs;

