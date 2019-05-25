import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import UpcomingItem from '../molecules/upcoming-item';

const Heading = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  
  ${({theme}) => css`
    background-color: ${theme.white};  
  `}
`;

const Body = styled.div`
  background-color: ${({theme}) => theme.dark};
  color: ${({theme}) => theme.white}
`;

class Upcoming extends Component {
    state = {
        items: [
            {id: 1, city: 'Gliwice', mon: 'feb', day: 12, album: 'The Venue'},
            {id: 2, city: 'Zabrze', mon: 'mar', day: 23, album: 'The Venue'},
            {id: 3, city: 'Gdańsk', mon: 'may', day: 9, album: 'The Venue'},
            {id: 4, city: 'Opole', mon: 'jul', day: 30, album: 'The Venue'},
            {id: 5, city: 'Wrocław', mon: 'sept', day: 27, album: 'The Venue'},
            {id: 6, city: 'Warszawa', mon: 'dec', day: 2, album: 'The Venue'},
        ]
    }

    render() {
        return (
            <div>
                <Heading>
                    <span>Upcoming shows</span>
                    <span>Track Artist</span>
                </Heading>
                <Body>
                    {this.state.items.map( ({id,city,mon,day,album}) => <UpcomingItem key={id} city={city} mon={mon} day={day} album={album} /> )}
                </Body>
            </div>
        )
    }
}

export default Upcoming;