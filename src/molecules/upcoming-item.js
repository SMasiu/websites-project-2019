import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/button';

const Wrapper = styled.div`
  padding: 25px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px ${({theme}) => theme.white};
  
  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;

const BtnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
`;

const Item = styled.div`
  font-size: ${({theme}) => theme.x};
  font-weight: 600;
`;

const Day = styled.span`
  font-size: ${({theme}) => theme.xxl}; ;
`

const UpcomingItem = ({day, mon, city, album}) => (

    <Wrapper>
        <Item>
            <Day>{day}</Day>
            <span>{mon}</span>
        </Item>
        <Item>
            {album}
        </Item>
        <Item>
            {city}
        </Item>
        <BtnWrapper>
            <Button>RSVP</Button>
            <Button>Tickets</Button>
        </BtnWrapper>
    </Wrapper>

);

export default UpcomingItem;
