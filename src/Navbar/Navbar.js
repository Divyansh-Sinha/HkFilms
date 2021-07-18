import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "../Home/Home";
import Dance from "../Dance/Dance";
import "./style.css";
import Query from "../Query/Query";
import {NavLink} from 'react-router-dom';
import ChatBots from "../components/ChatBot/ChatBot";
import AllCourse from "../Courses/AllCourse";
import AboutUs from "../About/AboutUs";
import AboutTeam from "../About/AboutTeam";
import AboutTrainer from "../About/AboutTrainer";
import icon from '../images/icons/hkfilm.jpg';




const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const [colorChange,setColorChange] = useState(false);

  useEffect(()=>{
    window.onscroll = function() {
      "use strict";
      if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };
    
  })
  
    

  return (
    
    <>
    
      <Nav className={colorChange ? 'colorChange' : 'navbar'}>
        <Logo>
          <img className={colorChange ? 'logo':''} src={require('../images/icons/hkfilm2.jpg').default} alt="" />
        </Logo>
        <Hamburger onClick={() => setIsOpen(!IsOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu IsOpen={IsOpen}>
          <span onClick={()=> setIsOpen(!IsOpen)}>
            <NavLink exact activeClassName="active1" className="text-link" to="/">
              Home
            </NavLink>
          </span>
          <span >
            <div activeClassName="active1" className="text-link" id="about" to="/about/us">
              About <i className="fa fa-caret-down"></i>
              <div className="dropdown">
                
                <ul>
                 <NavLink onClick={()=> setIsOpen(!IsOpen)} to="/about/us">Us</NavLink> 
                 <NavLink onClick={()=> setIsOpen(!IsOpen)} to="/about/team">Team</NavLink> 
                 <NavLink onClick={()=> setIsOpen(!IsOpen)} to="/about/trainer">Trainer</NavLink> 
                </ul>
              </div>
            </div>
          </span>
          <span onClick={()=> setIsOpen(!IsOpen)}>
            <NavLink activeClassName="active1" className="text-link" to="/dance">
              Skills
            </NavLink>
          </span>

          <span onClick={()=> setIsOpen(!IsOpen)}>
            <NavLink activeClassName="active1" className="text-link" to="/Query">
              Query
            </NavLink>
          </span>

          <span onClick={()=> setIsOpen(!IsOpen)}>
            <NavLink activeClassName="active1" className="text-link" to="/Courses">
              Services
            </NavLink>
          </span>
        </Menu>
      </Nav>
      
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about/us" component={AboutUs}></Route>
        <Route path="/about/team"  component={AboutTeam}></Route>
        <Route path="/about/trainer"  component={AboutTrainer}></Route>
        <Route path="/dance" component={Dance}></Route>
        <Route path="/Query" component={Query}></Route>
        <Route path="/Courses" component={AllCourse}></Route>
      </Switch>
     
      <ChatBots/>
      
    </>
    
    
  );
};

export default Navbar;

const Nav = styled.div`
  min-width: 100%;
  padding: 0 10rem;
  display: flex;  
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;  
  position: -webkit-sticky; 
  position: fixed;
  top: 0;
  z-index: 15;
  transition: 0.5s;

  @media (max-width: 768px) {
    max-width: 100%;
    padding:0;
  }


`;



const Logo = styled.div`
  padding-top: 0.8rem;  
  
  img{
  
    border-radius: 50%;
    object-fit: cover;
    width: 4rem;
    transition: 0.2s;
    &:hover{
      transform: scaleX(1.2);
    }
    
  }


  
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    /* border: solid 1px; */
    border-radius: 5px;
  }

  @media (max-width: 970px) {
    display: flex;
  }
`;

const Menu = styled.div`
 
  align-items: center;
  position: relative;
  
  span{
    
    color: var(--white-clr);
    font-size: 1rem;    
    font-weight: 700;
  }

  
  @media (max-width: 970px) {
    display: flex;
    position: absolute;
    left: 0;
    top: 100%;
    ${'' /* padding: 1em 0; */}
    background: rgba(0, 0, 0, 0.5);
     overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ IsOpen }) => (IsOpen ? "200vh" : "0px")};
    transition: max-height 0.4s ease-in;

    span{
      padding: 1em 0;
    }
    
  }
`;


