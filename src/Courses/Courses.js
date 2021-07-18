import React from 'react'
import styled from 'styled-components';


import CourseDesine from './CourseDesine'
import { CoursesData } from './CoursesData';
import ScrollToTop from "../components/Scroll/ScrollToTop";

 function Courses({Details}) {
    return (
        <>
        <ScrollToTop/>
             <Container>
    
        {CoursesData.map((item,index) =>{
                return(

                    
                   
                    <CourseDesine key={index}
                    id = {CoursesData[index].id}
                    url = {CoursesData[index].url}
                    name = {CoursesData[index].name}
                    price = {CoursesData[index].price}
                    tag = {CoursesData[index].tag}
                    tag1 = {Details}
                    date = {CoursesData[index].date}
                    />
                    
                )
})
        }
        </Container>
</>
    )
}

export default Courses;

const Container = styled.div`
    ${'' /* position: relative;
    height:  calc(100% - 100px);
    width: 100%;
    box-sizing: border-box;
    display : flex;
    flex-wrap : wrap; */}
    
    display: flex;
    padding-top: 2em;
    
    flex-wrap: wrap;
    padding-bottom : 10vh;
    ${'' /* height: 120vh; */}
    
    /* background: linear-gradient(45deg, crimson, orange); */
`;