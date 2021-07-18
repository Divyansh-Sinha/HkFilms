import React from "react";
import Video from '../video/dance.mp4'
import './Home.css'

import HomeCard from "./HomeCard";
import Gallery from "../components/3Dcarousel/3dCarousel";
import GallerySlider from "../components/GallerySlider/GallerySlider";
import HomeContent from "./Content/HomeContent";

import ScrollToTop from "../components/Scroll/ScrollToTop";
import Testimonial from "../components/Testimonial/Testimonial";



const Home = () => {



  return (

    <div className="homeContainer">
      <ScrollToTop></ScrollToTop>

      <div className="homeStart">        
        <div className="start">
        <div className="overlay"></div>
        <div className="startText">
          <div className="startTag"><h3>Be The Face & Feel The Grace</h3></div>
          <span className="divider"></span>
          <div className="startHead"><h1>HK FILMS</h1></div>
        </div>
        </div>       
      </div>
      <div className="quote">
          <div className="quoteContent">
            <div className="qImg"><i class="fa fa-quote-left" aria-hidden="true"></i></div>
            <div className="qText">
              <h2>Please go for your dreams. Whatever your ideals, you can become whatever you want to become.</h2>
              <p>-Michael Jackson</p>
            </div>
          </div>
        </div>

        <hr className="Hr"/>

      <div className="videoContainer">
      <video className="video" autoPlay loop muted src={Video} type='video/mp4'></video>
        <div className="videoText">
          <div className="blendDiff gi tc ttu avenir white f2 mb4 lh-copy"><h1> Hk Films</h1></div>
          <span className="gi divider mb4"></span>
          <div className="gi" style={{width: '80vw'}}>
            <p className="gi tc white fw7 tracked lh-copy " style={{fontFamily: 'Otomanopee One, sans-serif', fontSize: '3rem' }}>CREATE MEMORIES FOR YOU</p>
          </div>      
              
        </div>
        
      </div>



     
        <HomeCard />
      

      <HomeContent />
      <div className="gallery">
        <Gallery />
      </div>

      <Testimonial/>

      <GallerySlider />
    </div>
  )
};

export default Home;
