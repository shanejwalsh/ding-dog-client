import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

interface NavBarProps {
    label: string;
    to: string;
}

const StyledLink = styled.li`
    font-size: 1.25rem;
    overflow: hidden;

    &::after {
        content: '';
        background-color: #5abcae;
        display: block;
        height: 2px;
        margin-top: 5px;
        width: 100%;
        transform: translateX(-100%);
    }

    &:hover::after {
        transition: transform 250ms ease-out;
        transform: translate(0);
    }
`;

const NavBar = ({ label, to }: NavBarProps) => {
    return (
        <StyledLink>
            <Link to={to}>{label}</Link>
        </StyledLink>
    );
};

export default NavBar;
