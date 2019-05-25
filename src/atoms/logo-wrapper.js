import styled from 'styled-components';

const LogoWrapper = styled.div`
    border: solid 2px ${({theme}) => theme.white};
    width: 150px;
    height: 150px;
    position: absolute;
    bottom: 25px;
`;

export default LogoWrapper;