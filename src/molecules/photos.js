import React from 'react';
import styled from 'styled-components';
import Title from '../atoms/card-title';
import A from '../atoms/a-small';
import ImgHover from '../atoms/ImgHover';

const Wrapper = styled.div`
  height: 100%;
`;

const Heading = styled.div`

  padding: 20px;
  display: flex;
  align-items: center;

`;

const Photos = () => (
    <Wrapper>

        <Heading>
            <Title>Photos</Title>
            <A href="/">Download Hi-Res</A>
        </Heading>

        <ImgHover/>

    </Wrapper>
);

export default  Photos;