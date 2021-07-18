import React from 'react'
import {InfoContainer,InfoWrapper,InfoRow,Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,ImgWrap,Img} from './InfoElements'

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,darkText,headline,headline1,headline2,headline3,description,img,alt,primary,dark,dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>HK<span>Film</span></TopLine>
                                <Heading style={{fontFamily: 'Brush Script MT, Brush Script Std, cursive'}} lightText={lightText}>{headline}</Heading>
                                <Heading style={{fontSize: '30px'}} lightText={lightText}>{headline1}</Heading>
                                <Heading style={{fontSize: '30px'}} lightText={lightText}>{headline2}</Heading>
                                <Heading style={{fontSize: '30px'}} lightText={lightText}>{headline3}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
 
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap imgStart={imgStart}>
                                <Img style={{borderRadius: '4%', boxShadow: 'black 20px 20px 30px'}} src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>  
        </>
    )
}

export default InfoSection
