import React from 'react';
import styled, {css} from 'styled-components';

const Quote = styled.span`
  font-size: ${({theme}) => theme.xxl};
  line-height: 1.6;
    
  ${({person,theme}) => person && css`
    &::after {
      content: "${person}";
      padding-left: 25px;
      font-size: ${theme.x};
    }
  `}  
  
`;

const Quotation = ({children, person}) => (
    <Quote person={person}>{children}</Quote>
);

export default  Quotation;