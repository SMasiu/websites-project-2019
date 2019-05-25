import React from 'react';
import Ul from '../atoms/nav-list';
import NavLink from '../atoms/nav-link';
import NavWrapper from '../atoms/nav-wrapper';

const Nav = () => (

    <NavWrapper>
        <Ul>

            <li>
                <NavLink dark href="/">Home</NavLink>
            </li>
            <li>
                <NavLink href="/">Calendar</NavLink>
            </li>
            <li>
                <NavLink href="/">Contact</NavLink>
            </li>

        </Ul>
    </NavWrapper>

);

export default Nav;
