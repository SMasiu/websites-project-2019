import styled from 'styled-components';

const ImgWrapper = styled.div`

    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

`;

export default ImgWrapper;