import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

import { Link } from 'react-router-dom';

import navItems from './navItems';
import { History } from 'history';
import { titleCase } from '../../libs/helpers';

interface NavbarProps {
    history: History;
}

const Nav = styled.nav`
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    min-height: 80px;
    /* font-size: 1.5rem; */
`;

const Navbar = ({ history }: NavbarProps) => {
    return (
        <Nav className="container flex">
            <Link to={'/'}>Ding Dog.</Link>

            <ul className="flex">
                {navItems.map(item => {
                    return <NavItem key={item.text} to={item.path} label={titleCase(item.text)} />;
                })}
            </ul>
        </Nav>
    );
};

export default Navbar;
