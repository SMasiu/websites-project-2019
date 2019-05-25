import styled, {css} from 'styled-components';

const Btn = styled.button`
  width: 100%;
  text-align: center;
  background-color: transparent;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;
  transition: all .3s;
  ${({theme}) => css`
    border: solid 1px ${theme.white};
    font-size: ${theme.s};
    color: ${theme.white};
  `}
  
  &:hover {
    ${({theme}) => css`
      background-color: ${theme.white};
      color: ${theme.dark};
      outline: none;
    `}
  }
`;

export default Btn;