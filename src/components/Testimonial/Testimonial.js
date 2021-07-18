import React from 'react';
import './testimonial.css'

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="small-container">
        <div className="row">
          <div className="col-3">
            <i className="fa fa-quote-left"></i>
            <p>"Himashu Dance Academy" is very great platform to promote kids danceing talent. Himanshu sir teaches dance steps
              steps in very easy manner . He is excellent teacher, super dancer, very supportive & very friendly with kids.
              All the best sir for your future
              success.</p>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            {/* <img src={require('./Image/user-1.png').default} alt=""/> */}
            <h3>Radhika</h3>
          </div>
          <div className="col-3">
            <i className="fa fa-quote-left"></i>
            <p>HK dance academy is the best academy . My son is learning from Himanshu Kesarvani from last 6 years. He is the best
              dance teacher , he is very friendly , sincere and always ready to help kids . My son just loves him and always</p>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            {/* <img src={require('./Image/user-2.png').default} alt=""/> */}
            <h3>Saish</h3>
          </div>
          <div className="col-3">
            <i className="fa fa-quote-left"></i>
            <p>HK films are amazing and enterainment . Also they re doing great work . It reaches to our hearts through the act they are representing .
            </p>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            {/* <img src={require('./Image/user-3.png').default} alt=""/> */}
            <h3>Bhagya</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;