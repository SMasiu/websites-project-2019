import React from 'react';
import List from '../atoms/black-list';
import ListItem from '../atoms/black-list-item';
import styled from  'styled-components';

const A = styled.a`
  text-decoration: none;
  color: ${({theme}) => theme.white}
`;

const LinkList = () => (
    <List>
        <ListItem><A href="/">Official Website</A></ListItem>
        <ListItem><A href="/">YouTube Channel</A></ListItem>
        <ListItem><A href="/">Facebook</A></ListItem>
        <ListItem><A href="/">Twitter</A></ListItem>
        <ListItem><A href="/">Instagram</A></ListItem>
        <ListItem><A href="/">Soundcloud</A></ListItem>
        <ListItem><A href="/">Bandcamp</A></ListItem>
        <ListItem><A href="/">Spotify</A></ListItem>
    </List>
);

export default LinkList;