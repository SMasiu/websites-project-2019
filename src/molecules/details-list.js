import React from 'react';
import List from '../atoms/black-list';
import ListItem from '../atoms/black-list-item';

const DetailsList = () => (
    <List>
        <ListItem>Based in Seattle, WA</ListItem>
        <ListItem>Founded in 2004</ListItem>
        <ListItem>Genre: #Rock</ListItem>
    </List>
);

export default DetailsList;