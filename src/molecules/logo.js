import React from 'react';
import Heading from '../atoms/heading-big';
import styled from 'styled-components';

const InnerWrapper = styled.div`
    margin-left: 175px;
`;

const Logo = ({children}) => (
    <InnerWrapper>
        <Heading>
            {children}
        </Heading>
    </InnerWrapper>
);

export default Logo;