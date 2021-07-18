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
      // <>

      // <ScrollToTop></ScrollToTop>
      // <Container>

      //  <ScrollContainer>



      //  <ScrollPage page={0} >
      //  <Animator animation={batch(Fade(), MoveOut(0, -200))}>
      //   <InfoSection {...homeObjOne}/>
      //   </Animator>
      //   </ScrollPage>


      //   <ScrollPage page={1}>
      //   <Animator animation={ZoomInScrollOut}>
      //   <InfoSection {...homeObjTwo}/>
      //   </Animator>
      //   </ScrollPage>


      //   <ScrollPage page={2}>
      //   <Animator animation={FadeUp}>
      //   <InfoSection {...homeObjThree}/>
      //   </Animator>
      //   </ScrollPage>


      //   <ScrollPage page={3}>
      //   <Animator animation={batch(Fade(), Sticky())}>
      //   <InfoSection {...homeObjFour}/>
      //   </Animator>
      //   </ScrollPage>

      //   <ScrollPage page={4}>
      //   <Animator animation={FadeUp}>
      //   <InfoSection {...homeObjFive}/>
      //   </Animator>
      //   </ScrollPage>


      //   <ScrollPage page={5}>
      //  <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      //   <InfoSection {...homeObjSix}/>
      //   </Animator>
      //   </ScrollPage>


      //   <ScrollPage page={6}>
      //   <Animator animation={ZoomInScrollOut}>
      //   <InfoSection {...homeObjSeven}/>
      //   </Animator>
      //   </ScrollPage>


      //   <ScrollPage page={7}>
      //   <Animator animation={FadeUp}>
      //   <InfoSection {...homeObjEight}/>
    
      //   </Animator>
      //   </ScrollPage>
        


      //   </ScrollContainer>
      // </Container>
      // </>

)
}

const Container = styled.div`
  margin-bottom: 20em;
  overflow-x:hidden;
`;


export default Dance;
    
//   return <div className="danceContainer">
//       <div className = "conti">
//         <img src= {training1} style={{width: w, height: w/2.4 }}></img>  
//         <div className="centered">Training</div>
//       </div>
//       <br></br>

//       <div className="mw9 center ph3-ns">
//   <div className="cf ph2-ns">
//     <div className="fl w-1000 w-third-ns pa2">
//       <div className=" pv4"><img src = {training2} />Training the dancers goes on in our Academy on <br></br> a regular basis. You can enroll for a  <br></br>part-time or full-time program. </div>
//     </div>
//     <div className="fl w-50 w-third-ns pa2">
//       <div className=" pv4"><img src = {training3} ></img>Advance Techniques in <br></br> Training</div>
//     </div>
//     <div className="fl w-50 w-third-ns pa2">
//       <div className=" pv4"><img src = {training4} /> Young Dancers Search</div>
//     </div>
//   </div>
// </div>

// <div class="mw9 center ph3-ns">
//   <div class="cf ph2-ns">
//     <div class="fl w-100 w-50-ns pa2">
//       <div class=" pv4"><img src = {training5} ></img> <br></br>Theory & Practicals</div>
//     </div>
//     <div class="fl w-100 w-50-ns pa2">
//       <div class=" pv4"><img src = {training6} /> <br></br>Dance Teacher Training</div>
//     </div>
//   </div>
// </div>
     

//       </div>

