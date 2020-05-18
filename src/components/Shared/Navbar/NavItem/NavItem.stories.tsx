import React from 'react';
import NavItem from './NavItem';

export default {
  component: NavItem,
  title: 'Navbar Item',
};

export const Default = () => (
  <>
    <NavItem href="/" text="home" />
    <br />
    <NavItem href="/" text="project" />
    <br />
    <NavItem href="/" text="contact" />
    <br />
  </>
);
