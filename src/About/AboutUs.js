import React from 'react';
import styled from "styled-components";

const AboutUs = () => {
    return ( 
        <div className='aboutContainer'>
        <section id="about-info">
        <div className="aboutUscontainer">
            <div className="info-left">
                <h1 className="l-heading"><span className="text-primary">About </span>HK FILMS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci illo inventore! Omnis fugit quo, 
                    tempora quis blanditiis officiis eaque libero asperiores, fugiat assumenda id laborum magni deleniti amet
                     quae!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laudantium accusamus iure sequi repellat 
                    error necessitatibus provident modi doloremque animi.
                </p>

            </div>
            <div className="info-right">
                <img src={require('../images/background/dance.png').default} alt="" />
            </div>
        </div>
    </section>

    <section id="testimonials" className="py-3">
        <div className="testiContainer">
            <h2 className="l-heading">What Our Guests Say</h2>
            <div className="testimonials bg-primary" >
                <img src={require('../images/people/person-1.jpg').default} alt="Na"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam omnis modi nobis, eveniet, 
                    facilis magni officia dolores error ipsam ab minus placeat natus. Neque perspiciatis expedita a quaerat 
                    illo fugiat dolore rerum unde, odit modi nobis, omnis ab quos?
                </p>
            </div>

            <div className="testimonials bg-primary" >
                    <img src={require('../images/people/person-2.jpg').default} alt="Ja"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam omnis modi nobis, eveniet, 
                        facilis magni officia dolores error ipsam ab minus placeat natus. Neque perspiciatis expedita a quaerat 
                        illo fugiat dolore rerum unde, odit modi nobis, omnis ab quos?
                    </p>
                </div>


        </div>
    </section>
        </div>
     );
}
 
export default AboutUs;

