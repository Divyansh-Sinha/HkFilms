import React from 'react';
import styled from 'styled-components';
import ballet from '../images/icons/ballet.png'
import hipHop from '../images/icons/hipHop.png'
import salsa from '../images/icons/salsa.png'
import tapDance from '../images/icons/tapDance.png'
import './HomeCard.css'
import Bounce from 'react-reveal/Bounce';

const HomeCard = () => {
    return (
        <Container>
            <Bounce>
            <div className='cat tc w-100 dib br3 pa3 ma2 grow bw2'>
                <img className="mb2" alt='robots' src ={salsa}/>
                <div>
                <h3 className="orange mb2">1960’S</h3>
                <span className="divider mb2 "></span>
                    <p className="black">
                    Salsa is very popular genre of dance from the Caribbean with salsa music.
                    </p>
                </div>
            </div>
                
            <div className='cat tc w-100 dib br3 pa3 ma2 grow bw2'>
                <img className="mb2" alt='robots' src ={hipHop}/>
                <div>
                <h3 className="orange mb2">1960’S</h3>
                <span className="divider mb2 "></span>
                    <p className="black">
                    Hip hop is a style of popular music featuring rap with an electronic backing.
                    </p>
                </div>
            </div>
            <div className='cat tc w-100 dib br3 pa3 ma2 grow bw2'>
                <img className="mb2" alt='robots' src ={tapDance}/>
                <div>
                <h3 className="orange mb2">1700'S</h3>
                <span className="divider mb2"></span>
                    <p className="black">
                    Tap dance is a genre of dance using the sounds of tap shoes striking the floor.
                    </p>
                </div>
            </div>
            <div className=' tc w-100 dib br3 pa3 ma2 grow bw2'>
                <img className="mb2" alt='robots' src ={ballet}/>
                <div>
                <h3 className="orange mb2">1500'S</h3>
                <span className="divider mb2"></span>
                    <p className="black">
                    Ballet dancing is for getting into shape, improve flexibility and have fun!
                    </p>
                </div>
            </div>
            </Bounce>
            </Container>
    );
}

export default HomeCard;


const Container = styled.div`
    display: flex;

    margin: 0 auto;
    padding: 5rem 0;

    @media (max-width: 768px) {
     flex-wrap: wrap;
  }
`;