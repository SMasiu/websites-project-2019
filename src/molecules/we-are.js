import React from 'react';
import List from '../atoms/black-list';
import ListItem from '../atoms/black-list-item';
import styled from 'styled-components';

const Bold = styled.p`
  font-weight: 600;
  margin: 25px 0;
`;

const WeAre = () => (
    <div>
        <List>
            <ListItem>Marcus Mumford – Vocals</ListItem>
            <ListItem>Ben Lovett – Guitar</ListItem>
            <ListItem>Ted Dwane - Drums</ListItem>
        </List>

        <Bold>Bio</Bold>

        <p>At least, that’s how I ended up obsessed with Guns N’ Roses. And The Doors. And Motley Crue. And Aerosmith. And, in the future, many more that I’m holding on to for just the right moment.</p>
    </div>
);

export default WeAre;