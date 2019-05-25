import styled, {css} from 'styled-components';

const Input = styled.input`
  padding: 10px 20px;
  width: 100%;
  transition: all .3s;
  
  ${({theme}) => css`
    border: solid 1px ${({theme}) => theme.dark};
    font-size: ${theme.m};
  `}
  
  &:focus, &:hover {
    outline: solid 2px ${({theme}) => theme.dark};
  }
`;

export default Input;