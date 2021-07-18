import React from 'react';
import './testimonial.css'

const Testimonial = () => {
    return ( 
         <div className="testimonial">
       <div className="small-container">
       <div className="row">
           <div className="col-3">
                    <i className="fa fa-quote-left"></i>
                      <p>The best of the best products you can get from here at a very cheap rate everything about this service is awesome.</p>
                      <div className="rating">
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star-o"></i>
                       </div>
                       {/* <img src={require('./Image/user-1.png').default} alt=""/> */}
                       <h3>Ashu</h3>
           </div>
            <div className="col-3">
                    <i className="fa fa-quote-left"></i>
                      <p>The best of the best products you can get from here at a very cheap rate everything about this service is awesome.</p>
                      <div className="rating">
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                       </div>
                       {/* <img src={require('./Image/user-2.png').default} alt=""/> */}
                       <h3>Axnav</h3>
           </div>
            <div className="col-3">
                    <i className="fa fa-quote-left"></i>
                      <p>The best of the best products you can get from here at a very cheap rate everything about this service is awesome.</p>
                      <div className="rating">
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star-half-o"></i>
                       </div>
                       {/* <img src={require('./Image/user-3.png').default} alt=""/> */}
                       <h3>kamla</h3>
           </div>
       </div>
       </div>
   </div>
     );
 }
 
export default Testimonial;