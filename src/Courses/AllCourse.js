import React from 'react'
import Courses from './Courses'

function AllCourse() {
    return (
        <div style={{paddingTop: '10vh', background: 'linear-gradient(to right, #ed143dc4, #ffa500c9)', boxShadow: '0px 0px 20px black'}}>

            <h1 style = {{color : 'white', textShadow: '0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)'}}>Fitness</h1>
            <Courses  Details  = {'Fitness'}/>

            <h1 style = {{color : 'white',textShadow: '0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)'}}>Dance</h1>
            <Courses  Details  = {'Dance'}/>

            <h1 style = {{color : 'white',textShadow: '0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)'}}>Singing</h1>
            <Courses  Details  = {'Singing'}/>

            <h1 style = {{color : 'white',textShadow: '0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)'}}>Instrument</h1>
            

            <Courses  Details  = {'Instrument'}/>

            <h1 style = {{color : 'white',textShadow: '0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)'}}>Acting</h1>
            

            <Courses  Details  = {'Acting'}/>
           

            <h1 style = {{color : 'white',textShadow: '0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)'}}> Film Making</h1>
            

            <Courses  Details  = {'Film Making'}/>

            

            
        </div>
    )
}

export default AllCourse
