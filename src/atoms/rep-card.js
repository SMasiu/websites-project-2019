import React from 'react';
import styled from 'styled-components';

const Heading = styled.h4`
  font-size: ${({theme}) => theme.m};
  margin: 5px 0;
`;

const Body = styled.div`
  line-height: 1.5;
`;

const RepCard = ({title, children}) => (
    <div>
        <Heading>{title}:</Heading>
        <Body>{children}</Body>
    </div>
);

export default RepCard;