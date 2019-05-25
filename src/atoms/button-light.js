import styled, {css} from 'styled-components';

const Button = styled.button`
  ${({theme}) => css`
    border: solid 1px ${theme.dark};
    color: ${theme.dark};
    background-color: transparent;
    width: 150px;
    margin: 10px 0;
    padding: 10px 15px;
    cursor: pointer;
  `}
`;

export default Button;