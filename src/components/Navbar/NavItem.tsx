import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

interface NavBarProps {
    label: string;
    to: string;
}

const StyledLink = styled.li`
    margin: 0 0.5rem;
    padding: 0 0.5rem;
    font-size: 1.25rem;

    &:hover {
        text-decoration: underline;
        text-decoration-color: green;
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
