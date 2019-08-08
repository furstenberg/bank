import React from 'react';
import { NavItem, NavLink } from '@bootstrap-styled/v4';
import { history } from '../../utils';

export default ({title, url}) => (
    <NavItem>
        <NavLink onClick={() => history.push(url)}>title</NavLink>
    </NavItem>
);
