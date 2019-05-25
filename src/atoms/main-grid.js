import styled from 'styled-components';

const Grid = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 25px;
  grid-template-areas: 
  "news details"
  "music music"
  "photos weAre"
  "upcoming upcoming"
  "representation download"
  "join links";
  
  @media (max-width: 1300px) {
    grid-template-areas: 
      "news"
      "details"
      "music"
      "photos"
      "weAre"
      "upcoming"
      "representation"
      "download"
      "join"
      "links";
    grid-template-columns: 1fr; 
  }
`;

export const GridArea = styled.div`
  grid-area: ${({area}) => area};
`;


export default Grid;