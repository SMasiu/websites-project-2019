import styled from 'styled-components';

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  
  @media (max-width: 700px) {
    width: 100%;
    justify-content: center;
  }
`;

export default Ul;