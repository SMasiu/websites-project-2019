import styled, {css} from 'styled-components';

const NavLink = styled.a`
  
  text-decoration: none;
  padding: 20px 120px 20px 0;
  display: block;
  text-align: left;
  transition: color .3s;
  
  @media (max-width: 700px) {
    text-align: center;
    padding: 30px;
  }
  
  ${({theme}) => css`

    color: ${theme.darkGrey};
    &:hover {
      color: ${theme.dark};
    }
  `}
  
  
  ${({dark,theme}) => dark && css`
    color: ${theme.dark};    
  `}
  
  
`;

export default NavLink;