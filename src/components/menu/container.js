import React from 'react';
import t from 'prop-types';

import { Navbar, Container, NavbarBrand } from '@bootstrap-styled/v4';

const MenuContainer = ({ children }) => (
  <Navbar color="faded" light toggleable="lg">
    <Container>
      <NavbarBrand to="/">Bank</NavbarBrand>
      {children}
    </Container>
  </Navbar>
);

MenuContainer.propTypes = {
  children: t.element.isRequired,
};

export default MenuContainer;
