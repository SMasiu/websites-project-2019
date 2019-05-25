import React, { Component } from 'react';
import HeaderWrapper from '../atoms/header-wrapper';
import LogoBarnd from '../molecules/logo';
import Logo from '../molecules/logo-img';
import styled from 'styled-components';
import HeaderContent from '../atoms/header-content';
import SocialBox from '../molecules/social-box';

const TextGray = styled.span`
    color: ${({theme}) => theme.darkGrey} !important;
`;

class Header extends Component {
    state = {  }
    render() { 
        return ( <>
            <HeaderWrapper>
                <HeaderContent>
                    <div>
                        <Logo/>
                        <LogoBarnd>atomic <TextGray>music</TextGray></LogoBarnd>
                    </div>
                    <SocialBox/>
                </HeaderContent>
            </HeaderWrapper>
        </> );
    }
}
 
export default Header;