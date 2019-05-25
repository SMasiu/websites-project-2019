import React from 'react';
import styled, {css} from 'styled-components';
import CardTitle from '../atoms/card-title';

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.dark};
  height: 100%;
`;

const Heading = styled.div`
  background-color: ${({theme}) => theme.white};
  padding: 20px;
`;

const Body = styled.div`
  height: calc(100% - 63px);
  padding: 20px;
  display: flex;
  align-items: center;
  
  ${({theme}) => css`
    color: ${theme.white};
  `}
`;

const Card = ({title,children}) => (
    <Wrapper>
        <Heading>
            <CardTitle>{title}</CardTitle>
        </Heading>
        <Body>
        {children}
        </Body>
    </Wrapper>
);

export default Card;