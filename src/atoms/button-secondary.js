import styled, {css} from 'styled-components';

const Btn = styled.button`
  width: 100%;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: all .3s;
  border: none;
  ${({theme}) => css`
    font-size: ${theme.s};
    background-color: ${theme.dark};
    color: ${theme.white};
  `}
  
  &:hover {
    ${({theme}) => css`
      background-color: ${theme.light};
      color: ${theme.dark};
      outline: none;
    `}
  }
`;

export default Btn;