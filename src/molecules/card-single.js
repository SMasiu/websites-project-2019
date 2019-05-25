import React from 'react';
import CardWrapper from '../atoms/card-single-wrapper';
import Title from '../atoms/card-title';
import styled from 'styled-components';

const InnerWrapper = styled.div`
  margin-top: 50px;
`;

const CardSingle = ({title, children}) => (
    <CardWrapper>

        <Title>{title}</Title>

        <InnerWrapper>
            {children}
        </InnerWrapper>

    </CardWrapper>
);

export default CardSingle;