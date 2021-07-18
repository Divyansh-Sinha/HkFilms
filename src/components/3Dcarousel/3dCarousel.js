import React from 'react';
import {Carousel} from '3d-react-carousal';
import { caroselData } from './3DcaoselData';
import './3dCarousel.css'


const Gallery = () => {
    let slides = [];

      slides = caroselData.map((item,index ) => {
        return(
          
          
          <a  style={{backgroundImage: `url(${item.url})`, height: '35vh', width: '35vw' ,loading: 'lazy'}} className="link black dim db mw5 pa2 br2 ba b--black-10 shadow-1" className="link mw5 dt hide-child br2 cover bg-center">
            
            
          </a>
        )
        
      })
      
    
    return (
        <div className="container">
          <header className="container-header">
            <h1 className="container-title"></h1>
          </header>          
          <br/>
          <br/>
          
          <Carousel  slides={slides} autoplay={true} interval={3000}/>
  {/* Carousal.Carousal because of unpkg in developement use npm import and use only {Carousal}*/}
        </div>
      );
}
 
export default Gallery;
