import React from 'react';
import { Nav } from '@bootstrap-styled/v4';
import { history } from '../../utils';
import Container from './container';
import MenuItem from './menuItem'

const PublicMenu = () => (
  <Container>
    <Nav navbar className="mr-auto">
      <MenuItem name="Home" url="/" />
      <MenuItem name="Login" url="/login" />
      <MenuItem name="Transfer" url="/transfer" />
    </Nav>
  </Container>
);

export default PublicMenu;
