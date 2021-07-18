import React, { Component} from 'react';
import {FaFacebook,FaTwitter,FaYoutube,FaInstagram} from 'react-icons/fa'
import ScrollToTop from "../components/Scroll/ScrollToTop";
import styled from "styled-components";

import './style.css'
import { AboutTrainerData } from './AboutTrainerData';


class AboutTrainer extends Component{
  
    constructor(props){
      super(props);
      this.state= {
        items: [],
      
    }
    }
  
    
  
    isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
    
    run = () =>{
      
      this.state.items.forEach(item => {
        
        if (this.isInViewport(item)) {
          item.classList.add('show');
          
        }
      });
    }
     
    componentDidMount(){
     this.setState({items: document.querySelectorAll('#timeline li')})
     {console.log(this.state.tag)}
      document.addEventListener('scroll',this.run,true)
    
    }
    
    componentWillUnmount()
    {
      
      document.removeEventListener('scroll',this.run,true)
    }
    
  
    render(){
    
    return (
      <section id="timeline" className="aboutContainer">
      <ScrollToTop></ScrollToTop>
  
    <h1 className="white tc mb5"> Trainers</h1>
      
      <ul>
        
      {AboutTrainerData.map((item,index) => {
  
          return(
           
          <li>
          <div >      
              
              <img src={item.image} className="br-100 h4 w4 dib" style={{objectFit: item.cover ? 'cover': 'fill'}}  alt="" />
                  <h1 className="mb1">{item.name}</h1>
                  
                  <hr className="mw3 bb bw1 b--black-10"/>          
              <p className="lh-copy measure center f6 fw5 black-70 mb3">
                  {item.desc}
              </p>
              
                      <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                          <FaFacebook />
                      </SocialIconLink>
                      
                      <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                          <FaYoutube />
                      </SocialIconLink>
                      <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                          <FaInstagram />
                      </SocialIconLink>               
          
          </div>
        </li>
          )
  
      })}
        
      </ul>
    </section>
    );
    }
  };
  
  const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
   
  `;
  
  const SocialIconLink = styled.a`
  color: black;
  font-size: 24px;
  display: inline;
  padding: 1vw;
  
    
  
  `;
  
  export default AboutTrainer;
  
  
  