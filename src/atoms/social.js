import React from 'react';
import styled from 'styled-components';
import ImgWrapper from './img-wrapper';

const Wrapper = styled.div`
    width: 45px;
    height: 45px;
    padding: 7.5px;
    cursor: pointer;
    transition: all .2s;
    border-radius: 10px;

    &:hover {
        background-color: ${({theme}) => theme.darkGrey}
    }
`;

const Social = ({img}) => (
    
    <Wrapper>
        <ImgWrapper>

            <img src={img} alt="social media"/>

        </ImgWrapper>
    </Wrapper>
);

export default Social;