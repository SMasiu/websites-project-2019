import styled, {css} from 'styled-components';

const HeaderWrapper = styled.header`

    padding: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    box-shadow: 0 0 5px #000;
    
    
    
    ${({theme}) => css`
        background-color: ${theme.dark};
        color: ${theme.light};
    `}

`;

export default HeaderWrapper;