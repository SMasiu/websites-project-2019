import styled from 'styled-components'
import React from 'react';
import Img1 from "../assets/photo.jpg";

const Hover = styled.div`
  background-color: ${({theme}) => theme.dark}77;
  position: relative;
  cursor: pointer;
  
  &:hover {
    &::before {
      opacity: 1;
    }
  }
  
  &::before {
    content: 'Like our photos';
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all .3s;
    font-size: ${({theme}) => theme.xxl};
    color: ${({theme}) => theme.white};
    background-color: ${({theme}) => theme.dark}99;
  }
  
`;


const ImgHover = () => (

    <Hover>

        <img src={Img1} alt="slide"/>

    </Hover>

);

export default ImgHover;