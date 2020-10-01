import React from 'react';
import styled from 'styled-components';

import navItems from './navItems';
import { History } from 'history';
import { navigate } from '../../routes/paths';
import { titleCase } from '../../libs/helpers';
import { paths } from '../../routes/paths';
interface NavbarProps {
    history: History;
}

const Nav = styled.div`
    background: #f3f2f2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-height: 50px;
    padding: 0 10rem;
    font-size: 1.5rem;
`;

const NavLink = styled.a`
    margin: 0 1rem;
    cursor: pointer;
    text-decoration: none;
    color: #000;
`;

const Navbar = ({ history }: NavbarProps) => {
    return (
        <Nav>
            {navItems.map(item => {
                // console.log('%cNavbar.tsx line:31 paths[]', 'color: #007acc;', paths[item.route]);
                return (
                    <NavLink
                        key={item.text}
                        href={paths[item.route]}
                        onClick={() => navigate(history, item.route)}
                    >
                        {titleCase(item.text)}
                    </NavLink>
                );
            })}
        </Nav>
    );
};

export default Navbar;