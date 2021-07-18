import React, { useEffect } from 'react'
import { Component } from 'react';
import './Envelop.css'

function Envelops (props) {

    

        
    // }
    

      useEffect(() => {
      var x  =  document.querySelector(".envelope").addEventListener("click", function () {
            this.classList.toggle("fold");
            
          });


        


    },[])
    

      
    return (
         <div>
        <div className="envelope">
        <div className="top"></div>
        <div className="left"></div>
        <div className="back">
            <div className="paper">
            <span className="line one">Send Us   Your Query</span>
            <span className="line two"></span>
            <span className="line three"></span>
            <span className="line two"></span>
            <span className="line one"></span>
            </div>
        </div>
        <div className="right"></div>
        <div className="bottom"></div>
        </div>
        </div>
    )
      

}

export default Envelops
