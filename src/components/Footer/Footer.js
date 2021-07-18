import React from "react";

import {FooterContainer,FooterWrap,SocialIconLink,SocialLogo,SocialMedia,SocialMediaWrap,WebsiteRights,SocialIcons} from './FooterElements'
import {FaFacebook,FaTwitter,FaYoutube,FaInstagram,FaLinkedin} from 'react-icons/fa'

const FooterPage = () => {
  return (
    <FooterContainer>
    <FooterWrap>        
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo>
                HK Films
                </SocialLogo>
                <WebsiteRights><span style={{display: 'block', textAlign: 'center'}}><i className="fa fa-envelope"></i> hkfilms005@gmail.com</span> HK Films © {new Date().getFullYear()} All rights reserved.  </WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
    </FooterWrap>            
</FooterContainer>
  );
}

export default FooterPage;