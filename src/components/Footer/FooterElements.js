import styled from 'styled-components'


export const FooterContainer = styled.footer`
    background-color: #101522;
    width: 100%;
    overflow-x: hidden;
       
    left: 0;
    bottom: 0;
    
    z-index: 10;

    @media (max-width: 800px){
        position: static;    
        margin-top: 0;    
    }

`;

export const FooterWrap = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    
    margin: 0 auto;
    padding-top: 10px;

    @media(max-width: 800px){
        max-height: 20vh;
    }

    @media screen and (max-width: 420px){
        max-height: 13vh;
    }
    
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;    
    text-align: center;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;



export const SocialMedia = styled.section`
    
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
   

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled.div`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;   
    font-weight: bold;

    @media screen and (max-width: 420px){
        font-size: 0.8rem;
    }
`;

export const WebsiteRights = styled.small`
    color: #fff;
    font-size: 16px;
    @media screen and (max-width: 420px){
        font-size: 0.8rem;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px; 
    
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    @media screen and (max-width: 420px){
        font-size: 1rem;
    }
`;