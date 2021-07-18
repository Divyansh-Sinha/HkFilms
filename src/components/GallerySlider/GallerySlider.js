import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import './GallerySlider.css'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';



import { GalleryData } from './GalleryData';


const AutoplaySlider = withAutoplay(AwesomeSlider)

const GallerySlider = () => {
    return ( 
        <AutoplaySlider  play={true} interval = {10000}>
        {GalleryData.map((item,index) => {
            return(
                
                <div key={item.id} data-src={item.url} > 
                <div style={{position: 'absolute'}}>
                    {/* <img src={item.url} style={{width: '100%', height: '100%'}}></img> */}
                    {/* <div style={{position:'absolute', bottom: '8px', left: '16px', color: 'white'}}>{item.text}</div> */}
                    <div className="galleryText">
                    <Fade delay="500" left>                        
                        <h3 style={{color: item.color1}} className="galText1">{item.text1}</h3>
                    </Fade>    
                    <Flip delay="1200" top>
                        <h2 style={{color: item.color2}} className=" galText2">{item.text2}</h2>
                    </Flip> 
                    <Rotate delay="1500" top left>  
                        <h1 style={{color: item.color3}} className="galText3">{item.text3}</h1>
                    </Rotate> 
                    
                        <div className="galTextClust ttc" style={{color: item.color4}}>
                        <Fade delay="1700" left>
                        <p>{item.text4}</p>  
                        </Fade>  
                        <Fade delay="1900" left>                  
                        <p>{item.text5}</p> 
                        </Fade> 
                        <Fade delay="2100" left>
                        <p>{item.text6}</p>  
                        </Fade> 
                        </div>    
                        {/* <Zoom delay="2400" bottom>
                        <button className="galButton">
                                Buy
                        </button>
                        </Zoom>        */}
                    </div>
                                    
                </div>
        
        </div>
            )
        })}
        {/* <div data-src=''> 
        <div style={{position: 'relative'}}>
            <img src={img}></img>
            <div style={{position:'absolute', bottom: '8px', left: '16px', color: 'white'}}>Bottom Left</div>
        </div>
        
        </div> 
        <div data-src=''> 
        <div style={{position: 'relative'}}>
            <img src={img2}></img>
            <div style={{position:'absolute', bottom: '8px', left: '16px', color: 'white'}}>mid Left</div>
        </div>
        
        </div> 
        <div data-src=''> 
        <div style={{position: 'relative'}}>
            <img src={img3}></img>
            <div style={{position:'absolute', bottom: '8px', left: '16px', color: 'white'}}>last Left</div>
        </div>
        
        </div>  */}
        {/* <div data-src={img2} />
        <div data-src={img3} /> */}
        </AutoplaySlider>
     );
}
 
export default GallerySlider;


