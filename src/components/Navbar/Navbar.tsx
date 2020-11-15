import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

import { Link } from 'react-router-dom';

import navItems from './navItems';
import { titleCase } from '../../libs/helpers';

const Nav = styled.nav`
    padding: 10px 30px;
    align-items: center;
    justify-content: space-between;
    min-height: 80px;
`;

const StyledUl = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    gap: 1rem;
    @media (max-width: 768px) {
        display: none;
    }
`;

const Burger = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25px;
    height: 25px;
    cursor: pointer;
    @media (min-width: 768px) {
        display: none;
    }
`;

const Line = styled.div`
    background: black;
    width: 100%;
    border-radius: 5px;
    height: 2px;
`;

const Navbar = () => {
    return (
        <Nav className="container flex">
            <Link to={'/'}>Ding Dog.</Link>

            <StyledUl>
                {navItems.map(item => (
                    <NavItem key={item.text} to={item.path} label={titleCase(item.text)} />
                ))}
            </StyledUl>

            <Burger>
                <Line />
                <Line />
                <Line />
            </Burger>
        </Nav>
    );
};

export default Navbar;
