import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { History } from 'history';

import { navigate } from '../../routes/paths';

import { titleCase } from '../../libs/helpers';

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

// const Link = styled.a`
//     background: #F3F2F2;
//     display: flex;
//     align-items: center;
//     /* justify-content: flex-end; */
//     min-height: 50px;
//     padding: 0 10rem;
//     font-size: 1.5rem;
// `;

const Link = styled.a`
    margin: 0 1rem;
    cursor: pointer;
`;


const navItems = [
    {
        text: 'home',
        route: 'home',
    },
    {
        text: 'dogs',
        route: 'dogsIndex',
    },
];

const Navbar: FunctionComponent<NavbarProps> = ({ history }) => {
    return (
        <Nav>

            {
                navItems.map(item => {
                    return (
                        <Link
                            onClick={() => navigate(history, item.route)}>
                            {titleCase(item.text)}
                        </Link>
                    )
                })
            }
        </Nav>
    );
};

export default Navbar;
