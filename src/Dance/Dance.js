import React from "react";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

import ScrollToTop from "../components/Scroll/ScrollToTop";


import './Dance.css'
import styled from "styled-components";
import InfoSection from "./Index";
import {homeObjEight,homeObjSeven,homeObjSix, homeObjFive,homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";




const Dance = () => {

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

    return (

      <>

      <ScrollToTop></ScrollToTop>
      <Container>

       



      

        <InfoSection {...homeObjOne}/>
      


    
      
        <InfoSection {...homeObjTwo}/>
      


    
      
        <InfoSection {...homeObjThree}/>
  
        <InfoSection {...homeObjFour}/>
      

  
      
        <InfoSection {...homeObjFive}/>
    
       {/* <InfoSection {...homeObjSix}/> */}
      


    
        
        <InfoSection {...homeObjSeven}/>

    
    
        <InfoSection {...homeObjEight}/>
    
  
      </Container>
      </>      
)
}

const Container = styled.div`  
  overflow-x:hidden;
`;


export default Dance;
    
