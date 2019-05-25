import styled, {css} from 'styled-components';

const A = styled.a`
  
  margin-left: 20px;
  ${({theme}) => css`
    
     color: ${theme.dark};
     font-size: ${theme.s};
    
  `}
  
`;

export default A;