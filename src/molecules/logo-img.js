import React from 'react';
import LogoWrapper from '../atoms/logo-wrapper';
import img from '../assets/logo.jpg';

const LogoImg = () => (
    <LogoWrapper>
        <img src={img} alt="logo"/>
    </LogoWrapper>
);

export default LogoImg;