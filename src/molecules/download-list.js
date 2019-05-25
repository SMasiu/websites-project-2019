import React from 'react';
import List from '../atoms/black-list';
import ListItemBtn from '../atoms/list-item-btn';
import Btn from '../atoms/button';

const DetailsList = () => (
    <List>
        <ListItemBtn>
            <Btn>
                set list
            </Btn>
        </ListItemBtn>
        <ListItemBtn>
            <Btn>
                tech rider
            </Btn>
        </ListItemBtn>
        <ListItemBtn>
            <Btn>
                hospitality rider
            </Btn>
        </ListItemBtn>
    </List>
);

export default DetailsList;