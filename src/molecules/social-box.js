import React from 'react';
import Social from '../atoms/social';
import yt from '../assets/yt.png';
import fb from '../assets/fb.png';
import dove from '../assets/dove.png';
import spotify from '../assets/spotify.png';
import styled from 'styled-components';

const SocialWrapper = styled.div`
    min-width: 250px;
    display: flex;
    justify-content: space-between;
    
    @media (max-width: 775px) {
      display: none;
    }
`; 

const SocialBox = () => (
    
    <SocialWrapper>

        <Social img={spotify}/>
        <Social img={yt}/>
        <Social img={fb}/>
        <Social img={dove}/>

    </SocialWrapper>

);

export default SocialBox;